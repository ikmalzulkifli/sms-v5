"use client";

import { useState, useEffect, useRef } from 'react';
import { Scale, Clock, Wifi, Battery, Truck, Camera } from 'lucide-react';
import { getUserData } from '@/lib/userService';

interface WeightData {
  vehicleId: string;
  grossWeight: string;
  tareWeight: string;
  netWeight?: string;
}

export default function WeightEntry() {
  const [formData, setFormData] = useState({
    scheduleId: '',
    location: '',
    vendor: '',
    driver: '',
  });

  const [weightData, setWeightData] = useState<WeightData>({
    vehicleId: '',
    grossWeight: '',
    tareWeight: '',
  });

  const [isCameraActive, setIsCameraActive] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const userData = getUserData();
    setFormData(userData);
  }, []);

  const calculateNetWeight = () => {
    const gross = parseFloat(weightData.grossWeight) || 0;
    const tare = parseFloat(weightData.tareWeight) || 0;
    return (gross - tare).toFixed(2);
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' } // Use back camera for weight scale photo
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsCameraActive(true);
      }
    } catch (err) {
      console.error('Error accessing camera:', err);
      alert('Unable to access camera. Please ensure camera permissions are granted.');
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      setIsCameraActive(false);
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        canvasRef.current.width = videoRef.current.videoWidth;
        canvasRef.current.height = videoRef.current.videoHeight;
        context.drawImage(videoRef.current, 0, 0);
        
        // Add timestamp overlay
        context.fillStyle = 'rgba(0, 0, 0, 0.5)';
        context.fillRect(0, canvasRef.current.height - 30, canvasRef.current.width, 30);
        context.fillStyle = 'white';
        context.font = '14px Arial';
        context.fillText(new Date().toLocaleString(), 10, canvasRef.current.height - 10);
        
        const imageData = canvasRef.current.toDataURL('image/jpeg');
        setCapturedImage(imageData);
        stopCamera();
      }
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
      {/* Android Phone Mockup Container */}
      <div className="relative mx-auto" style={{ maxWidth: '360px' }}>
        {/* Phone Frame */}
        <div className="relative border-8 border-gray-800 rounded-[2.5rem] aspect-[9/19] shadow-xl">
          {/* Status Bar */}
          <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-t-2xl">
            <div className="flex justify-between items-center px-6 h-full">
              <span className="text-white text-xs">
                {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <div className="flex items-center gap-2">
                <Wifi className="w-3 h-3 text-white" />
                <Battery className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="absolute top-6 inset-x-0 bottom-0 bg-white dark:bg-gray-900 rounded-b-2xl overflow-y-auto">
            {/* App Header */}
            <div className="bg-blue-500 text-white p-4 sticky top-0 z-10">
              <h3 className="text-lg font-semibold">Weight Entry</h3>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-6">
              {/* Vehicle Info Section */}
              <div className="space-y-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Schedule ID
                    </label>
                    <input
                      value={formData.scheduleId}
                      readOnly
                      className="mt-1 w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Vehicle ID
                    </label>
                    <input
                      value={weightData.vehicleId}
                      onChange={(e) => setWeightData({ ...weightData, vehicleId: e.target.value })}
                      className="mt-1 w-full px-3 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm border border-gray-200 dark:border-gray-700"
                      placeholder="Enter Vehicle ID"
                    />
                  </div>
                </div>
              </div>

              {/* Weight Entry Section */}
              <div className="space-y-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Gross Weight (kg)
                    </label>
                    <input
                      type="number"
                      value={weightData.grossWeight}
                      onChange={(e) => setWeightData({ ...weightData, grossWeight: e.target.value })}
                      className="mt-1 w-full px-3 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm border border-gray-200 dark:border-gray-700"
                      placeholder="Enter Gross Weight"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Tare Weight (kg)
                    </label>
                    <input
                      type="number"
                      value={weightData.tareWeight}
                      onChange={(e) => setWeightData({ ...weightData, tareWeight: e.target.value })}
                      className="mt-1 w-full px-3 py-2 bg-white dark:bg-gray-900 rounded-lg text-sm border border-gray-200 dark:border-gray-700"
                      placeholder="Enter Tare Weight"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Net Weight (kg)
                    </label>
                    <div className="mt-1 w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm font-bold">
                      {calculateNetWeight()}
                    </div>
                  </div>
                </div>
              </div>

              {/* Weight Scale Photo Section */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Weight Scale Photo
                </label>
                <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden relative">
                  {isCameraActive ? (
                    <>
                      <video
                        ref={videoRef}
                        autoPlay
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <button
                        onClick={captureImage}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg"
                      >
                        Capture
                      </button>
                    </>
                  ) : capturedImage ? (
                    <>
                      <img
                        src={capturedImage}
                        alt="Weight Scale"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <button
                        onClick={() => {
                          setCapturedImage(null);
                          startCamera();
                        }}
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-500 text-white rounded-full shadow-lg"
                      >
                        Retake
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={startCamera}
                      className="absolute inset-0 flex flex-col items-center justify-center gap-2"
                    >
                      <Camera className="w-8 h-8 text-gray-400" />
                      <span className="text-sm text-gray-500">Take Scale Photo</span>
                    </button>
                  )}
                </div>
                <p className="text-xs text-gray-500 text-center">
                  Please take a clear photo of the weight scale display
                </p>
              </div>

              <canvas ref={canvasRef} className="hidden" />
            </div>

            {/* Bottom Action Button */}
            <div className="sticky bottom-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {/* Implement save logic */}}
                disabled={!capturedImage || !weightData.grossWeight || !weightData.tareWeight}
                className="w-full py-3 bg-green-500 text-white rounded-full font-medium disabled:opacity-50"
              >
                Save Weight Entry
              </button>
            </div>
          </div>

          {/* Home Indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gray-800 rounded-full"></div>
        </div>

        {/* Camera Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-7 bg-gray-800 rounded-b-2xl"></div>
      </div>
    </div>
  );
} 