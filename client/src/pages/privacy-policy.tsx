import { Sprout } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <Link href="/" className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors mb-6" data-testid="link-home">
            <Sprout className="text-xl" />
            <span className="text-xl font-bold">Mushroom Health</span>
          </Link>
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">
            Last updated: September 2, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-card rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground mb-6">
              This Privacy Policy describes how mushroomhealth.co ("we," "us," or "our") collects, uses, and protects your information when you visit our website.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We may collect the following types of information:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Usage data and analytics to improve our website</li>
              <li>Information you provide when contacting us</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6">
              <li>Provide and improve our website content</li>
              <li>Respond to your inquiries and requests</li>
              <li>Analyze website usage and performance</li>
              <li>Display relevant advertisements</li>
            </ul>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies</h2>
            <p className="text-muted-foreground mb-6">
              We use cookies to enhance your browsing experience, analyze site traffic, and provide personalized content. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground mb-6">
              We may use third-party services such as Google Analytics and advertising partners. These services have their own privacy policies governing the collection and use of your information.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              You have the right to access, update, or delete your personal information. If you have any questions about your privacy rights, please contact us.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us through our website.
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