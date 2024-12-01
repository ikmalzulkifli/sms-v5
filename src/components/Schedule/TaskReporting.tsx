"use client";

import { useState, useRef, useEffect } from 'react';
import { getUserData, type UserData } from '@/lib/userService';
import { Camera, Clock, MapPin, Wifi, Battery } from 'lucide-react';

interface TaskReport {
  id: string;
  workerId: string;
  taskId: string;
  timestamp: string;
  location: string;
  imageUrl: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function TaskReporting() {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    scheduleId: '',
    location: '',
    vendor: '',
    driver: '',
    workers: ''
  });

  useEffect(() => {
    const userData = getUserData();
    setFormData(userData);
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'user' } 
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
        
        const imageData = canvasRef.current.toDataURL('image/jpeg');
        setCapturedImage(imageData);
        stopCamera();
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!capturedImage) {
      alert('Please capture a selfie before submitting');
      return;
    }

    setIsSubmitting(true);
    try {
      // Implement API call to submit report
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      alert('Task report submitted successfully');
      setCapturedImage(null);
    } catch (error) {
      console.error('Error submitting report:', error);
      alert('Failed to submit report. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
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
              <h3 className="text-lg font-semibold">Task Reporting</h3>
            </div>

            {/* App Content */}
            <div className="p-4 space-y-6">
              {/* Form Section */}
              <div className="space-y-4 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                {/* Schedule ID and Location */}
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
                      Collection Area
                    </label>
                    <input
                      value={formData.location}
                      readOnly
                      className="mt-1 w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                    />
                  </div>
                </div>

                {/* Vendor and Driver */}
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Vendor Company
                    </label>
                    <input
                      value={formData.vendor}
                      readOnly
                      className="mt-1 w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                      Driver's Name
                    </label>
                    <input
                      value={formData.driver}
                      readOnly
                      className="mt-1 w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                    />
                  </div>
                </div>

                {/* Workers List */}
                <div>
                  <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    Workers List
                  </label>
                  <input
                    value={formData.workers}
                    readOnly
                    className="mt-1 w-full px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                  />
                </div>
              </div>

              {/* Camera Section */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  Verification Selfie
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
                        alt="Verification"
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
                      <span className="text-sm text-gray-500">Take Photo</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Action Button */}
            <div className="sticky bottom-0 p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={handleSubmit}
                disabled={!capturedImage || isSubmitting}
                className="w-full py-3 bg-green-500 text-white rounded-full font-medium disabled:opacity-50"
              >
                {isSubmitting ? 'Processing...' : 'Clock In'}
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