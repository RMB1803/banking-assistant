import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-primary rounded-lg p-1.5 sm:p-2">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground">SecureBank</h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Enhanced Banking Experience</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <a href="#" className="text-sm lg:text-lg text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-sm lg:text-lg text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-sm lg:text-lg text-foreground hover:text-primary transition-colors">
              Support
            </a>
            {/* <Button variant="outline" className="text-lg px-6 py-3">
              Sign In
            </Button> */}
          </nav>
        </div>
      </div>
    </header>
  );
}