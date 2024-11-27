import { Download, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';

export function DownloadButton() {
  const [isGenerating, setIsGenerating] = useState(false);

  const downloadPDF = async () => {
    const element = document.documentElement;
    const originalTheme = element.classList.contains('dark') ? 'dark' : 'light';
    
    setIsGenerating(true);
    
    // Force dark theme for PDF
    element.classList.remove('light');
    element.classList.add('dark');

    // Hide download and theme toggle buttons
    const downloadButton = document.querySelector('.download-button');
    const themeToggle = document.querySelector('.theme-toggle');
    if (downloadButton) downloadButton.classList.add('opacity-0');
    if (themeToggle) themeToggle.classList.add('opacity-0');
    
    try {
      // Wait for images to load and animations to complete
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mainContent = document.querySelector('section.max-w-7xl') as HTMLElement;
      if (!mainContent) throw new Error('Content not found');

      // Force desktop layout
      const originalWidth = mainContent.style.width;
      const originalMaxWidth = mainContent.style.maxWidth;
      mainContent.style.width = '1024px';
      mainContent.style.maxWidth = '1024px';

      // A4 dimensions in mm
      const a4Width = 210;
      const a4Height = 297;

      const canvas = await html2canvas(mainContent, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#000000',
        windowWidth: 1024, // Force desktop viewport
        windowHeight: 1450, // Approximate height for content
        onclone: (clonedDoc) => {
          // Ensure desktop layout in cloned document
          const clonedContent = clonedDoc.querySelector('section.max-w-7xl');
          if (clonedContent) {
            clonedContent.classList.remove('lg:grid-cols-[350px,1fr]');
            clonedContent.classList.add('grid-cols-[350px,1fr]');
          }
        }
      });

      // Create PDF with A4 dimensions
      const pdf = new jsPDF({
        format: 'a4',
        unit: 'mm'
      });

      // Calculate scaling to fit content to A4
      const imgData = canvas.toDataURL('image/png');
      
      pdf.addImage(imgData, 'PNG', 0, 0, a4Width, a4Height, undefined, 'FAST');
      pdf.save('McClain_Kelvin_Resume.pdf');

      // Restore original layout
      mainContent.style.width = originalWidth;
      mainContent.style.maxWidth = originalMaxWidth;

    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      // Restore original theme and button visibility
      element.classList.remove('dark', 'light');
      element.classList.add(originalTheme);
      if (downloadButton) downloadButton.classList.remove('opacity-0');
      if (themeToggle) themeToggle.classList.remove('opacity-0');
      setIsGenerating(false);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={downloadPDF}
      disabled={isGenerating}
      className="fixed bottom-4 right-4 px-4 py-2 rounded-full bg-blue-500 text-white flex items-center gap-2 hover:bg-blue-600 transition-colors download-button disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Generating PDF...</span>
        </>
      ) : (
        <>
          <Download className="w-4 h-4" />
          <span>Download Resume</span>
        </>
      )}
    </motion.button>
  );
}