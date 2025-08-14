import { Card, CardContent } from '@/components/ui/card';

interface StepInfoProps {
  title: string;
  description: string;
}

export default function StepInfo({ title, description }: StepInfoProps) {
  return (
    <Card className="mb-8 border-primary/20">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-foreground">{title}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
      </CardContent>
    </Card>
  );
}