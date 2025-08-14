import { Card, CardContent } from '@/components/ui/card';

interface CompletionScreenProps {
  type: 'transfer' | 'account';
}

export default function CompletionScreen({ type }: CompletionScreenProps) {
  return (
    <Card className="ring-2 ring-green-500 bg-green-50 dark:bg-green-950">
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-white text-2xl">✓</span>
        </div>
        <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
          {type === 'transfer' ? 'Transfer Successful!' : 'Application Submitted!'}
        </h3>
        <p className="text-green-600 dark:text-green-400">
          {type === 'transfer' 
            ? 'Your money has been transferred successfully. You will receive a confirmation SMS.'
            : 'Your account application has been submitted. You will hear back from us within 2-3 business days.'
          }
        </p>
      </CardContent>
    </Card>
  );
}