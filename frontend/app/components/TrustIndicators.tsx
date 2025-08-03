import { Shield, Lock, Users } from 'lucide-react';

export default function TrustIndicators() {
  return (
    <section className="bg-secondary/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h4 className="text-xl font-medium text-foreground mb-2">Bank-Level Security</h4>
            <p className="text-lg text-muted-foreground">Your data is protected with enterprise-grade encryption</p>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-12 w-12 text-primary mb-4" />
            <h4 className="text-xl font-medium text-foreground mb-2">Trusted by Millions</h4>
            <p className="text-lg text-muted-foreground">Over 2 million customers trust our platform</p>
          </div>
          <div className="flex flex-col items-center">
            <Lock className="h-12 w-12 text-primary mb-4" />
            <h4 className="text-xl font-medium text-foreground mb-2">Privacy First</h4>
            <p className="text-lg text-muted-foreground">We never share your personal information</p>
          </div>
        </div>
      </div>
    </section>
  );
}