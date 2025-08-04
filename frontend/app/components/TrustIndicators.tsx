import { Shield, Lock, Users } from 'lucide-react';

export default function TrustIndicators() {
  return (
    <section className="bg-secondary/10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="flex flex-col items-center lg:col-span-1 sm:col-span-2 lg:col-span-1">
            <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-medium text-foreground mb-2">Bank-Level Security</h4>
            <p className="text-base sm:text-lg text-muted-foreground px-4">Your data is protected with enterprise-grade encryption</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-medium text-foreground mb-2">Trusted by Millions</h4>
            <p className="text-base sm:text-lg text-muted-foreground px-4">Over 2 million customers trust our platform</p>
          </div>
          <div className="flex flex-col items-center sm:col-span-2 lg:col-span-1">
            <Lock className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-3 sm:mb-4" />
            <h4 className="text-lg sm:text-xl font-medium text-foreground mb-2">Privacy First</h4>
            <p className="text-base sm:text-lg text-muted-foreground px-4">We never share your personal information</p>
          </div>
        </div>
      </div>
    </section>
  );
}