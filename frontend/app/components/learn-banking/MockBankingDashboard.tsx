import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { DollarSign, Send, CreditCard } from 'lucide-react';

interface MockBankingDashboardProps {
  highlight: string;
}

export default function MockBankingDashboard({ highlight }: MockBankingDashboardProps) {
  return (
    <div className="bg-card rounded-lg border shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-foreground">Banking Dashboard</h3>
        <Badge variant="secondary">Demo Mode</Badge>
      </div>

      {/* Dashboard Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className={`cursor-pointer transition-all duration-300 ${
          highlight === 'transfer' || highlight === 'open-account' 
            ? 'ring-2 ring-primary shadow-lg scale-105' 
            : 'hover:shadow-md'
        }`}>
          <CardContent className="p-6 text-center">
            <DollarSign className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h4 className="font-semibold text-foreground">Balance</h4>
            <p className="text-muted-foreground">Check your balance</p>
          </CardContent>
        </Card>

        <Card className={`cursor-pointer transition-all duration-300 ${
          highlight === 'transfer' 
            ? 'ring-2 ring-primary shadow-lg scale-105' 
            : 'hover:shadow-md'
        }`}>
          <CardContent className="p-6 text-center">
            <Send className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h4 className="font-semibold text-foreground">Transfer</h4>
            <p className="text-muted-foreground">Send money</p>
            {highlight === 'transfer' && (
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
            )}
          </CardContent>
        </Card>

        <Card className={`cursor-pointer transition-all duration-300 ${
          highlight === 'open-account' 
            ? 'ring-2 ring-primary shadow-lg scale-105' 
            : 'hover:shadow-md'
        }`}>
          <CardContent className="p-6 text-center relative">
            <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h4 className="font-semibold text-foreground">Open Account</h4>
            <p className="text-muted-foreground">Create new account</p>
            {highlight === 'open-account' && (
              <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                1
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}