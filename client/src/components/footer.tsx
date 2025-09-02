import { Link } from "wouter";
import { Sprout, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="text-primary text-xl" />
              <span className="text-xl font-bold text-foreground">Mushroom Health</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your source for mushroom health information. Discover the science-backed benefits and traditional uses of nature's most powerful fungi.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-about">About</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact">Contact</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-disclaimer">Disclaimer</Link></li>
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-privacy">Privacy Policy</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 mushroomhealth.co. All rights reserved.
            </p>
            <div className="text-sm text-muted-foreground flex items-center">
              <ExternalLink className="mr-1 h-3 w-3" />
              This site contains affiliate links. We may earn a commission from purchases.
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong>Medical Disclaimer:</strong> The information provided on this website is for educational purposes only and is not intended as medical advice. Always consult with a healthcare professional before starting any new supplement regimen or making changes to your health routine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
