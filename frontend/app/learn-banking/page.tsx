'use client';

import { useState } from 'react';
import Header from '../components/Header';
import TutorialCards from '../components/learn-banking/TutorialCards';
import WalkthroughContainer from '../components/learn-banking/WalkthroughContainer';

type WalkthroughType = 'account' | 'transfer' | null;

export default function LearnBanking() {
  const [activeWalkthrough, setActiveWalkthrough] = useState<WalkthroughType>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const transferSteps = [
    {
      title: "Welcome to Your Banking Dashboard",
      description: "This is your main banking interface. Click on 'Transfer' to send money.",
      highlight: "transfer"
    },
    {
      title: "Enter Recipient Details",
      description: "Fill in the recipient's account information carefully.",
      highlight: "recipient"
    },
    {
      title: "Enter Transfer Amount",
      description: "Specify how much money you want to send.",
      highlight: "amount"
    },
    {
      title: "Review and Submit",
      description: "Double-check all details before confirming your transfer.",
      highlight: "submit"
    },
    {
      title: "Transfer Complete!",
      description: "Your money has been sent successfully. You'll receive a confirmation.",
      highlight: "complete"
    }
  ];

  const accountSteps = [
    {
      title: "Welcome to Account Opening",
      description: "Let's help you open your first bank account. Click 'Open Account' to begin.",
      highlight: "open-account"
    },
    {
      title: "Personal Information",
      description: "Fill in your basic personal details.",
      highlight: "personal"
    },
    {
      title: "Contact Information",
      description: "Provide your contact details for account verification.",
      highlight: "contact"
    },
    {
      title: "Choose Account Type",
      description: "Select the type of account that suits your needs.",
      highlight: "account-type"
    },
    {
      title: "Review and Submit",
      description: "Review all your information and submit your application.",
      highlight: "submit"
    },
    {
      title: "Account Created!",
      description: "Congratulations! Your account application has been submitted.",
      highlight: "complete"
    }
  ];

  const getCurrentSteps = () => {
    return activeWalkthrough === 'transfer' ? transferSteps : accountSteps;
  };

  const nextStep = () => {
    const steps = getCurrentSteps();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetWalkthrough = () => {
    setActiveWalkthrough(null);
    setCurrentStep(0);
  };

  const startWalkthrough = (type: WalkthroughType) => {
    setActiveWalkthrough(type);
    setCurrentStep(0);
  };

  if (activeWalkthrough) {
    return (
      <WalkthroughContainer
        activeWalkthrough={activeWalkthrough}
        currentStep={currentStep}
        steps={getCurrentSteps()}
        onReset={resetWalkthrough}
        onNext={nextStep}
        onPrevious={previousStep}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
      <Header />
      <TutorialCards onStartWalkthrough={startWalkthrough} />
    </div>
  );
}