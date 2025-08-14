interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full bg-secondary/20 rounded-full h-2 mb-8">
      <div 
        className="bg-primary h-2 rounded-full transition-all duration-300"
        style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
      />
    </div>
  );
}