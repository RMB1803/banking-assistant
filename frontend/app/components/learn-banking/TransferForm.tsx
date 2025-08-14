import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface TransferFormProps {
  highlight: string;
  onNext: () => void;
}

export default function TransferForm({ highlight, onNext }: TransferFormProps) {
  if (!['recipient', 'amount', 'submit'].includes(highlight)) {
    return null;
  }

  return (
    <Card className="ring-2 ring-primary">
      <CardHeader>
        <CardTitle>Money Transfer Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={`space-y-2 ${highlight === 'recipient' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
          <Label htmlFor="recipient">Recipient Account Number</Label>
          <Input id="recipient" placeholder="Enter account number" />
          {highlight === 'recipient' && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              2
            </div>
          )}
        </div>
        
        <div className={`space-y-2 ${highlight === 'amount' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" placeholder="Enter amount" type="number" />
          {highlight === 'amount' && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              3
            </div>
          )}
        </div>

        <Button 
          className={`w-full ${highlight === 'submit' ? 'ring-2 ring-primary scale-105' : ''}`}
          onClick={onNext}
        >
          Send Money
          {highlight === 'submit' && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              4
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}