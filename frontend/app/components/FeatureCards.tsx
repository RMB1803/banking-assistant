import { MessageCircle, GraduationCap, Upload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FeatureCards() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Talk to Assistant Card */}
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] lg:hover:scale-105 border-2 hover:border-primary/20">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground mb-3 sm:mb-4">
                Talk to Assistant
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Get instant help with your banking questions. Our AI assistant is available 24/7 
                to guide you through any banking task.
              </p>
              <Button size="lg" className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                <Link href={"/assistant"}>
                  Start Conversation
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* New to Banking Card */}
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] lg:hover:scale-105 border-2 hover:border-primary/20">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground mb-3 sm:mb-4">
                New to Banking?
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Learn banking basics with our step-by-step guides. Simple explanations 
                and tutorials to help you feel confident.
              </p>
              <Button size="lg" className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                <Link href={"/learn-banking"}>
                  Learn Banking
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Upload Form Card */}
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] lg:hover:scale-105 border-2 hover:border-primary/20 md:col-span-2 lg:col-span-1">
            <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
              <div className="bg-primary/10 rounded-full w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Upload className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-foreground mb-3 sm:mb-4">
                Upload Form
              </h3>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Submit documents securely and easily. Drag and drop your files 
                or browse to upload important banking documents.
              </p>
              <Button size="lg" className="text-sm sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                <Link href={"/form-upload"}>
                  Upload Documents
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}