import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AccountFormProps {
  highlight: string;
  onNext: () => void;
}

export default function AccountForm({ highlight, onNext }: AccountFormProps) {
  if (!['personal', 'contact', 'account-type', 'submit'].includes(highlight)) {
    return null;
  }

  return (
    <Card className="ring-2 ring-primary">
      <CardHeader>
        <CardTitle>Account Opening Form</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${highlight === 'personal' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="Enter first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Enter last name" />
          </div>
          {highlight === 'personal' && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              2
            </div>
          )}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${highlight === 'contact' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter phone number" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="Enter email address" type="email" />
          </div>
          {highlight === 'contact' && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              3
            </div>
          )}
        </div>

        <div className={`space-y-2 ${highlight === 'account-type' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
          <Label htmlFor="accountType">Account Type</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select account type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="savings">Savings Account</SelectItem>
              <SelectItem value="checking">Checking Account</SelectItem>
              <SelectItem value="business">Business Account</SelectItem>
            </SelectContent>
          </Select>
          {highlight === 'account-type' && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              4
            </div>
          )}
        </div>

        <Button 
          className={`w-full ${highlight === 'submit' ? 'ring-2 ring-primary scale-105' : ''}`}
          onClick={onNext}
        >
          Submit Application
          {highlight === 'submit' && (
            <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
              5
            </div>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}