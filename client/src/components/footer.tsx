import { Link } from "wouter";
import { Sprout, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sprout className="text-primary text-xl" />
              <span className="text-xl font-bold text-foreground">Mushroom Benefits</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Your comprehensive guide to medicinal and gourmet mushrooms. Discover the science-backed benefits and traditional uses of nature's most powerful fungi.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.73-3.016-1.8C4.851 14.445 4.5 13.12 4.5 11.628s.351-2.817.933-3.56c.566-1.07 1.719-1.8 3.016-1.8s2.448.73 3.016 1.8c.582.743.933 2.052.933 3.56s-.351 2.817-.933 3.56c-.568 1.07-1.719 1.8-3.016 1.8zm7.101 0c-1.297 0-2.448-.73-3.016-1.8-.582-.743-.933-2.052-.933-3.56s.351-2.817.933-3.56c.568-1.07 1.719-1.8 3.016-1.8s2.448.73 3.016 1.8c.582.743.933 2.052.933 3.56s-.351 2.817-.933 3.56c-.568 1.07-1.719 1.8-3.016 1.8z"/>
                </svg>
              </a>
            </div>
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
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/medicinal" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-medicinal">Medicinal Mushrooms</Link></li>
              <li><Link href="/gourmet" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-gourmet">Gourmet Varieties</Link></li>
              <li><Link href="/supplements" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-supplements">Supplements</Link></li>
              <li><Link href="/research" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-research">Research</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Mushroom Benefits. All rights reserved.
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
