"use client";

import { Button } from "@/components/ui/button";
import { FileText, FileSpreadsheet } from "lucide-react";

export default function ReportActions() {
  const handleExport = (format: 'pdf' | 'excel') => {
    // Export logic here
    console.log(`Exporting as ${format}...`);
  };

  return (
    <div className="flex gap-3">
      <Button 
        onClick={() => handleExport('pdf')} 
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        <FileText className="mr-2 h-4 w-4" />
        Export PDF
      </Button>

      <Button 
        onClick={() => handleExport('excel')} 
        className="bg-green-500 hover:bg-green-600 text-white"
      >
        <FileSpreadsheet className="mr-2 h-4 w-4" />
        Export Excel
      </Button>
    </div>
  );
} 