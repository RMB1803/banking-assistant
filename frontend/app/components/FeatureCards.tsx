import { MessageCircle, GraduationCap, Upload } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function FeatureCards() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Talk to Assistant Card */}
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="bg-primary/10 rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-foreground mb-4">
                Talk to Assistant
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Get instant help with your banking questions. Our AI assistant is available 24/7 
                to guide you through any banking task.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                Start Conversation
              </Button>
            </CardContent>
          </Card>

          {/* New to Banking Card */}
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="bg-primary/10 rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-foreground mb-4">
                New to Banking?
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Learn banking basics with our step-by-step guides. Simple explanations 
                and tutorials to help you feel confident.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                Learn Banking
              </Button>
            </CardContent>
          </Card>

          {/* Upload Form Card */}
          <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 hover:border-primary/20">
            <CardContent className="p-8 sm:p-12 text-center">
              <div className="bg-primary/10 rounded-full w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Upload className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-medium text-foreground mb-4">
                Upload Form
              </h3>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">
                Submit documents securely and easily. Drag and drop your files 
                or browse to upload important banking documents.
              </p>
              <Button size="lg" className="text-lg px-8 py-4 w-full sm:w-auto">
                Upload Documents
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}