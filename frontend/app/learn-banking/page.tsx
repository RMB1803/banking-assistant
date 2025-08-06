'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CreditCard, Send, DollarSign, User} from 'lucide-react';
import Header from '../components/Header';

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
    const steps = getCurrentSteps();
    const currentStepData = steps[currentStep];
    
    return (
      <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="outline" 
              onClick={resetWalkthrough}
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
          <div className="w-full bg-secondary/20 rounded-full h-2 mb-8">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            />
          </div>

          {/* Current Step Info */}
          <Card className="mb-8 border-primary/20">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-foreground">{currentStepData.title}</h2>
              <p className="text-muted-foreground text-lg">{currentStepData.description}</p>
            </CardContent>
          </Card>

          {/* Mock Banking Dashboard */}
          <div className="bg-card rounded-lg border shadow-lg p-6 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Banking Dashboard</h3>
              <Badge variant="secondary">Demo Mode</Badge>
            </div>

            {/* Dashboard Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <Card className={`cursor-pointer transition-all duration-300 ${
                currentStepData.highlight === 'transfer' || currentStepData.highlight === 'open-account' 
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
                currentStepData.highlight === 'transfer' 
                  ? 'ring-2 ring-primary shadow-lg scale-105' 
                  : 'hover:shadow-md'
              }`}>
                <CardContent className="p-6 text-center">
                  <Send className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold text-foreground">Transfer</h4>
                  <p className="text-muted-foreground">Send money</p>
                  {currentStepData.highlight === 'transfer' && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className={`cursor-pointer transition-all duration-300 ${
                currentStepData.highlight === 'open-account' 
                  ? 'ring-2 ring-primary shadow-lg scale-105' 
                  : 'hover:shadow-md'
              }`}>
                <CardContent className="p-6 text-center relative">
                  <CreditCard className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h4 className="font-semibold text-foreground">Open Account</h4>
                  <p className="text-muted-foreground">Create new account</p>
                  {currentStepData.highlight === 'open-account' && (
                    <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Form Areas Based on Current Step */}
            {activeWalkthrough === 'transfer' && (currentStepData.highlight === 'recipient' || currentStepData.highlight === 'amount' || currentStepData.highlight === 'submit') && (
              <Card className={`${currentStepData.highlight === 'recipient' || currentStepData.highlight === 'amount' || currentStepData.highlight === 'submit' ? 'ring-2 ring-primary' : ''}`}>
                <CardHeader>
                  <CardTitle>Money Transfer Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`space-y-2 ${currentStepData.highlight === 'recipient' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
                    <Label htmlFor="recipient">Recipient Account Number</Label>
                    <Input id="recipient" placeholder="Enter account number" />
                    {currentStepData.highlight === 'recipient' && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                    )}
                  </div>
                  
                  <div className={`space-y-2 ${currentStepData.highlight === 'amount' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
                    <Label htmlFor="amount">Amount</Label>
                    <Input id="amount" placeholder="Enter amount" type="number" />
                    {currentStepData.highlight === 'amount' && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                    )}
                  </div>

                  <Button 
                    className={`w-full ${currentStepData.highlight === 'submit' ? 'ring-2 ring-primary scale-105' : ''}`}
                    onClick={nextStep}
                  >
                    Send Money
                    {currentStepData.highlight === 'submit' && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}

            {activeWalkthrough === 'account' && (currentStepData.highlight === 'personal' || currentStepData.highlight === 'contact' || currentStepData.highlight === 'account-type' || currentStepData.highlight === 'submit') && (
              <Card className="ring-2 ring-primary">
                <CardHeader>
                  <CardTitle>Account Opening Form</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${currentStepData.highlight === 'personal' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Enter first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Enter last name" />
                    </div>
                    {currentStepData.highlight === 'personal' && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                    )}
                  </div>

                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 ${currentStepData.highlight === 'contact' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter phone number" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" placeholder="Enter email address" type="email" />
                    </div>
                    {currentStepData.highlight === 'contact' && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                    )}
                  </div>

                  <div className={`space-y-2 ${currentStepData.highlight === 'account-type' ? 'ring-2 ring-primary rounded-lg p-4' : ''}`}>
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
                    {currentStepData.highlight === 'account-type' && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                    )}
                  </div>

                  <Button 
                    className={`w-full ${currentStepData.highlight === 'submit' ? 'ring-2 ring-primary scale-105' : ''}`}
                    onClick={nextStep}
                  >
                    Submit Application
                    {currentStepData.highlight === 'submit' && (
                      <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        5
                      </div>
                    )}
                  </Button>
                </CardContent>
              </Card>
            )}

            {currentStepData.highlight === 'complete' && (
              <Card className="ring-2 ring-green-500 bg-green-50 dark:bg-green-950">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">✓</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                    {activeWalkthrough === 'transfer' ? 'Transfer Successful!' : 'Application Submitted!'}
                  </h3>
                  <p className="text-green-600 dark:text-green-400">
                    {activeWalkthrough === 'transfer' 
                      ? 'Your money has been transferred successfully. You will receive a confirmation SMS.'
                      : 'Your account application has been submitted. You will hear back from us within 2-3 business days.'
                    }
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={previousStep} 
              disabled={currentStep === 0}
            >
              Previous Step
            </Button>
            <Button 
              onClick={currentStep === steps.length - 1 ? resetWalkthrough : nextStep}
            >
              {currentStep === steps.length - 1 ? 'Finish Tutorial' : 'Next Step'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/20 to-background">
      <Header/>  
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
            onClick={() => startWalkthrough('account')}
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
            onClick={() => startWalkthrough('transfer')}
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
    </div>
  );
}