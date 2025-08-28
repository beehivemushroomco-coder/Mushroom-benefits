import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Star, Info } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="hidden lg:block w-80 space-y-6">
      {/* AdSense Sidebar */}
      <Card>
        <CardContent className="p-6">
          <div id="ad-slot-sidebar" className="text-center text-muted-foreground" data-testid="ad-sidebar">
            <div className="h-[600px] flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg">
              <div className="text-2xl mb-2">📢</div>
              <p className="font-medium">AdSense Advertisement</p>
              <p className="text-sm">300x600 Half Page</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Spotlight Affiliate Products */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Star className="text-accent mr-2 h-5 w-5" />
            Featured Products
          </h3>
          
          <div className="space-y-4" data-testid="featured-products">
            <div className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                  alt="Reishi extract supplement"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    Organic Reishi Extract
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Premium dual-extracted reishi powder
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-sm">$24.99</span>
                    <Button
                      size="sm"
                      className="text-xs bg-accent text-accent-foreground hover:bg-accent/90"
                      data-testid="button-view-deal-1"
                    >
                      View Deal
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start space-x-3">
                <img
                  src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100"
                  alt="Lion's Mane capsules"
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-foreground text-sm mb-1">
                    Lion's Mane Capsules
                  </h4>
                  <p className="text-xs text-muted-foreground mb-2">
                    Cognitive support supplement
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold text-sm">$29.99</span>
                    <Button
                      size="sm"
                      className="text-xs bg-accent text-accent-foreground hover:bg-accent/90"
                      data-testid="button-view-deal-2"
                    >
                      View Deal
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Newsletter Signup */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Stay Updated
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Get the latest mushroom research and health insights delivered to your inbox.
          </p>
          <div className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-background"
              data-testid="input-newsletter-email"
            />
            <Button 
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              data-testid="button-subscribe"
            >
              Subscribe
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
