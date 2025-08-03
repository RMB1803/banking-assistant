import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="bg-primary rounded-lg p-2">
              <Shield className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-medium text-foreground">SecureBank</h1>
              <p className="text-sm text-muted-foreground">Enhanced Banking Experience</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-lg text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-lg text-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#" className="text-lg text-foreground hover:text-primary transition-colors">
              Support
            </a>
            <Button variant="outline" className="text-lg px-6 py-3">
              Sign In
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}