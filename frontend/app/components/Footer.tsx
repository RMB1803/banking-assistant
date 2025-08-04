import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <div className="bg-primary rounded-lg p-1.5 sm:p-2">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-medium text-foreground">SecureBank</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Enhanced Banking Experience</p>
              </div>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Making banking accessible and simple for everyone. Our platform provides enhanced 
              features to help you manage your finances with confidence and ease.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button variant="outline" size="lg" className="text-sm sm:text-lg w-full sm:w-auto">
                Download App
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-lg w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1">
            <h4 className="text-lg sm:text-xl font-medium text-foreground mb-4 sm:mb-6">Contact Us</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-lg text-muted-foreground">1-800-SECURE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-lg text-muted-foreground break-all">help@securebank.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm sm:text-lg text-muted-foreground">
                  123 Banking Street<br />
                  Financial District<br />
                  NY 10001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="sm:col-span-1">
            <h4 className="text-lg sm:text-xl font-medium text-foreground mb-4 sm:mb-6">Quick Links</h4>
            <div className="space-y-2 sm:space-y-3">
              <a href="#" className="block text-sm sm:text-lg text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block text-sm sm:text-lg text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block text-sm sm:text-lg text-muted-foreground hover:text-primary transition-colors">
                Accessibility
              </a>
              <a href="#" className="block text-sm sm:text-lg text-muted-foreground hover:text-primary transition-colors">
                Security Center
              </a>
              <a href="#" className="block text-sm sm:text-lg text-muted-foreground hover:text-primary transition-colors">
                Help & Support
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 text-center sm:text-left">
            <p className="text-sm sm:text-lg text-muted-foreground">
              © 2025 SecureBank. All rights reserved.
            </p>
            <p className="text-sm sm:text-lg text-muted-foreground">
              FDIC Insured | Equal Housing Lender
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}