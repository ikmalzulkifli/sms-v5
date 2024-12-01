"use client";

import { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface QRScannerProps {
  onScan: (data: string) => void;
}

export default function QRScanner({ onScan }: QRScannerProps) {
  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'qr-reader',
      { fps: 10, qrbox: { width: 250, height: 250 } },
      /* verbose= */ false
    );

    scanner.render(
      (decodedText) => {
        scanner.clear();
        onScan(decodedText);
      },
      (error) => {
        console.warn(error);
      }
    );

    return () => {
      scanner.clear();
    };
  }, [onScan]);

  return (
    <div>
      <div id="qr-reader" className="mx-auto max-w-md" />
      <p className="text-center mt-4 text-sm text-gray-600 dark:text-gray-400">
        Position the QR code within the frame to scan
      </p>
    </div>
  );
} 