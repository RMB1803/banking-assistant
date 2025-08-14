'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Send } from 'lucide-react';

type WalkthroughType = 'account' | 'transfer' | null;

interface TutorialCardsProps {
  onStartWalkthrough: (type: WalkthroughType) => void;
}

export default function TutorialCards({ onStartWalkthrough }: TutorialCardsProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-6">
          Learn Banking
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Master banking basics with our interactive tutorials. Practice in a safe environment 
          before doing real transactions.
        </p>
      </div>

      {/* Tutorial Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* How to Open a Bank Account */}
        <Card 
          className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/20"
          onClick={() => onStartWalkthrough('account')}
        >
          <CardContent className="p-8 text-center">
            <div className="bg-primary/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <User className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              How to Open a Bank Account
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Learn step-by-step how to open your first bank account. We'll guide you through 
              the entire process from start to finish.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Badge variant="secondary">Personal Info</Badge>
              <Badge variant="secondary">Documents</Badge>
              <Badge variant="secondary">Account Types</Badge>
              <Badge variant="secondary">Verification</Badge>
            </div>
            <Button size="lg" className="w-full">
              Start Tutorial
            </Button>
          </CardContent>
        </Card>

        {/* How to Transfer Money */}
        <Card 
          className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/20"
          onClick={() => onStartWalkthrough('transfer')}
        >
          <CardContent className="p-8 text-center">
            <div className="bg-primary/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Send className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              How to Transfer Money
            </h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Master the art of sending money safely and securely. Learn about different 
              transfer methods and security best practices.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-6">
              <Badge variant="secondary">Recipient Details</Badge>
              <Badge variant="secondary">Amount Entry</Badge>
              <Badge variant="secondary">Security</Badge>
              <Badge variant="secondary">Confirmation</Badge>
            </div>
            <Button size="lg" className="w-full">
              Start Tutorial
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Additional Info */}
      <div className="text-center mt-16">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Safe Learning Environment
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              These tutorials use simulated banking interfaces. No real money or accounts are involved. 
              Practice as many times as you need to build confidence before visiting a real bank.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}