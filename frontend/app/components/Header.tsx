'use client';

import { ChevronDown, Globe, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-border bg-card shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-primary rounded-lg p-1.5 sm:p-2">
              <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-medium text-foreground">SmartSahayak</h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Enhanced Banking Experience</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link href={"/"} className="text-sm lg:text-lg text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <span className="text-sm lg:text-lg text-foreground hover:text-primary transition-colors cursor-pointer">
                  Services
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-48">
                <DropdownMenuItem>
                  <Link href={"/assistant"}>Talk to Assistant</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href={"/learn-banking"}>Learn Banking</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/form-upload">Upload document</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <a href="#" className="text-sm lg:text-lg text-foreground hover:text-primary transition-colors">
              Support
            </a> */}
            {/* <Button variant="outline" className="text-lg px-6 py-3">
              Sign In
            </Button> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="text-sm lg:text-base px-3 py-2 lg:px-4 lg:py-2">
                  <Globe className="h-4 w-4 mr-2" />
                  EN
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-32">
                <DropdownMenuItem>
                  <Globe className="h-4 w-4 mr-2" />
                  English
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Globe className="h-4 w-4 mr-2" />
                  हिंदी
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
  );
}