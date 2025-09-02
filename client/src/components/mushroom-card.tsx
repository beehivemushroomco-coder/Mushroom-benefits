import { Link } from "wouter";
import { ArrowRight, CheckCircle, Leaf, Wind, FlaskConical } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mushroom } from "@shared/schema";

interface MushroomCardProps {
  mushroom: Mushroom;
}

export default function MushroomCard({ mushroom }: MushroomCardProps) {
  return (
    <Card className="mushroom-card shadow-sm" data-testid={`card-mushroom-${mushroom.id}`}>
      <CardContent className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Mushroom Image */}
          <div className="lg:w-48 flex-shrink-0">
            <img
              src={mushroom.images.find(img => img.isThumbnail)?.url || mushroom.images[0]?.url || "https://via.placeholder.com/400x300/6b7280/ffffff?text=Mushroom+Image"}
              alt={mushroom.name}
              className="w-full h-48 lg:h-full object-cover rounded-lg"
              data-testid={`img-mushroom-${mushroom.id}`}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://via.placeholder.com/400x300/6b7280/ffffff?text=Mushroom+Image";
              }}
            />
          </div>

          {/* Mushroom Info */}
          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-foreground mb-2" data-testid={`text-name-${mushroom.id}`}>
                {mushroom.name}
              </h2>
              <p className="text-muted-foreground text-lg" data-testid={`text-summary-${mushroom.id}`}>
                {mushroom.summary}
              </p>
            </div>

            {/* Benefits Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
                <CheckCircle className="text-primary mr-2 h-5 w-5" />
                Key Benefits
              </h3>
              <ul className="space-y-2" data-testid={`list-benefits-${mushroom.id}`}>
                {mushroom.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-primary mt-1.5">•</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Leaf className="text-primary mr-2 h-4 w-4" />
                  Typically Consumed By
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-usage-${mushroom.id}`}>
                  {mushroom.typical_usage}
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-semibold text-foreground mb-2 flex items-center">
                  <Wind className="text-primary mr-2 h-4 w-4" />
                  Traditional Medicine Usage
                </h4>
                <p className="text-sm text-muted-foreground" data-testid={`text-tcm-${mushroom.id}`}>
                  {mushroom.tcm_usage}
                </p>
              </div>
            </div>

            {/* Action Button */}
            <div className="flex justify-between items-center">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                data-testid={`button-view-details-${mushroom.id}`}
              >
                <Link href={`/mushroom/${mushroom.id}`}>
                  View Full Details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="text-sm text-muted-foreground">
                <FlaskConical className="inline mr-1 h-4 w-4" />
                <span data-testid={`text-studies-${mushroom.id}`}>
                  {mushroom.clinical_links.length} clinical studies
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
