'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import Link from 'next/link';

export default function FormUpload() {

  const [uploadSuccess, setUploadSuccess] = useState(false)  

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Step heading */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-semibold text-foreground mb-2">
              Step 1: Upload Your Form
            </h1>
          </div>

          {/* Upload area */}
          <div className="bg-card rounded-lg border border-dashed border-border p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
            <div className="flex flex-col items-center space-y-4">
              {/* Upload icon */}
              <div className="bg-primary/10 rounded-full p-4">
                <Upload className="h-8 w-8 text-primary" />
              </div>
              
              {/* Upload text */}
              <div className="space-y-2">
                <h2 className="text-xl font-medium text-foreground">
                  Upload Form
                </h2>
                <p className="text-muted-foreground">
                  Drag and drop or choose file to upload
                </p>
              </div>

              {/* Hidden file input */}
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="text-primary hover:text-primary/80 underline cursor-pointer"
              >
                choose file
              </label>
            </div>
          </div>

          {/* Supported file types */}
          <p className="text-center text-sm text-muted-foreground mt-4">
            Supported file types: JPG, JPEG, PNG, PDF
          </p>

          {/* Next button */}
          <div className="mt-8 text-center">
            <Button 
              size="lg" 
              className="px-8" 
              asChild={uploadSuccess}
              disabled={!uploadSuccess}
            >
              {uploadSuccess ? (
                <Link href="/form-submit">
                  Next → Fill Form
                </Link>
              ) : (
                <>Next → Fill Form</>
              )}
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}