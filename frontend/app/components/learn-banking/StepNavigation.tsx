import { Button } from '@/components/ui/button';

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
}

export default function StepNavigation({ 
  currentStep, 
  totalSteps, 
  onPrevious, 
  onNext, 
  onFinish 
}: StepNavigationProps) {
  return (
    <div className="flex justify-between">
      <Button 
        variant="outline" 
        onClick={onPrevious} 
        disabled={currentStep === 0}
      >
        Previous Step
      </Button>
      <Button 
        onClick={currentStep === totalSteps - 1 ? onFinish : onNext}
      >
        {currentStep === totalSteps - 1 ? 'Finish Tutorial' : 'Next Step'}
      </Button>
    </div>
  );
}