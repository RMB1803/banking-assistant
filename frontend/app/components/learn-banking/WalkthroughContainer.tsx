'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import ProgressBar from './ProgressBar';
import StepInfo from './StepInfo';
import MockBankingDashboard from './MockBankingDashboard';
import TransferForm from './TransferForm';
import AccountForm from './AccountForm';
import CompletionScreen from './CompletionScreen';
import StepNavigation from './StepNavigation';

type WalkthroughType = 'account' | 'transfer';

interface Step {
  title: string;
  description: string;
  highlight: string;
}

interface WalkthroughContainerProps {
  activeWalkthrough: WalkthroughType;
  currentStep: number;
  steps: Step[];
  onReset: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export default function WalkthroughContainer({
  activeWalkthrough,
  currentStep,
  steps,
  onReset,
  onNext,
  onPrevious
}: WalkthroughContainerProps) {
  const currentStepData = steps[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={onReset}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Learn Banking
          </Button>
          <div>
            <h1 className="text-3xl font-semibold text-foreground">
              {activeWalkthrough === 'transfer' ? 'Money Transfer Tutorial' : 'Account Opening Tutorial'}
            </h1>
            <p className="text-muted-foreground">Step {currentStep + 1} of {steps.length}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

        {/* Current Step Info */}
        <StepInfo title={currentStepData.title} description={currentStepData.description} />

        {/* Mock Banking Dashboard */}
        <MockBankingDashboard highlight={currentStepData.highlight} />

        {/* Form Areas Based on Current Step */}
        {activeWalkthrough === 'transfer' && (
          <TransferForm highlight={currentStepData.highlight} onNext={onNext} />
        )}

        {activeWalkthrough === 'account' && (
          <AccountForm highlight={currentStepData.highlight} onNext={onNext} />
        )}

        {currentStepData.highlight === 'complete' && (
          <CompletionScreen type={activeWalkthrough} />
        )}

        {/* Navigation */}
        <StepNavigation
          currentStep={currentStep}
          totalSteps={steps.length}
          onPrevious={onPrevious}
          onNext={onNext}
          onFinish={onReset}
        />
      </div>
    </div>
  );
}