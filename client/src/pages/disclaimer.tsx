import { Sprout, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6" data-testid="link-home">
            <Sprout className="text-xl" />
            <span className="text-xl font-bold">Mushroom Health</span>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Disclaimer</h1>
          <p className="text-muted-foreground">
            Last updated: September 2, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <AlertTriangle className="text-yellow-600 dark:text-yellow-500" />
              <h2 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200">Important Notice</h2>
            </div>
            <p className="text-yellow-800 dark:text-yellow-200">
              The information provided on this website is for educational and informational purposes only and should not be considered medical advice.
            </p>
          </div>

          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Medical Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              The content on mushroomhealth.co is not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional before starting any new supplement regimen, especially if you have existing health conditions or are taking medications.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Product Claims</h2>
            <p className="text-muted-foreground mb-6">
              Any claims made about mushroom supplements or products have not been evaluated by the Food and Drug Administration (FDA). Individual results may vary, and we make no guarantees about the effectiveness of any products mentioned.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Safety Information</h2>
            <p className="text-muted-foreground mb-4">
              Please be aware that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Some individuals may be allergic to certain mushrooms or mushroom products</li>
              <li>Mushroom supplements may interact with medications</li>
              <li>Proper identification of wild mushrooms is crucial - never consume unidentified mushrooms</li>
              <li>Pregnant or nursing women should consult healthcare providers before using mushroom supplements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Research and Sources</h2>
            <p className="text-muted-foreground mb-6">
              While we strive to provide accurate information based on current research, scientific understanding of mushroom benefits is ongoing and evolving. Our content is compiled from various sources and should not replace professional medical advice.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Affiliate Disclosure</h2>
            <p className="text-muted-foreground mb-6">
              This website contains affiliate links. We may earn a commission from purchases made through these links at no additional cost to you. This helps support our educational content while maintaining our editorial independence.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              mushroomhealth.co and its authors shall not be held liable for any damages, losses, or adverse reactions that may occur from the use of information provided on this website. Use this information at your own risk and discretion.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Professional Guidance</h2>
            <p className="text-muted-foreground">
              We strongly encourage you to work with qualified healthcare professionals, certified nutritionists, or registered dietitians when making decisions about your health and wellness routine.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors" 
            data-testid="button-back-home"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}