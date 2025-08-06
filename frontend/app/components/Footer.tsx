'use client';

import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center space-x-3">
          <div className="bg-primary rounded-lg p-2">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="text-center">
            <h3 className="text-xl font-medium text-foreground">SmartSahayak</h3>
            <p className="text-base text-muted-foreground">Enhanced Banking Experience</p>
          </div>
        </div>
      </div>
    </footer>
  );
}