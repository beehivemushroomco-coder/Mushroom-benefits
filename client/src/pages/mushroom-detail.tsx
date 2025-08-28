import { useParams, useLocation } from "wouter";
import { useEffect } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, CheckCircle, Leaf, Wind, Microscope, AlertTriangle, FlaskConical, ShoppingCart, MessageCircle, ExternalLink } from "lucide-react";
import Header from "@/components/header";
import SearchOverlay from "@/components/search-overlay";
import ImageCarousel from "@/components/image-carousel";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMushroom, useMushrooms } from "@/hooks/use-mushrooms";
import { useSearch } from "@/hooks/use-search";
import { useSwipe } from "@/hooks/use-swipe";

export default function MushroomDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  const { data: mushroom, isLoading } = useMushroom(id!);
  const { data: allMushrooms = [] } = useMushrooms();
  const {
    query,
    setQuery,
    isSearchOpen,
    openSearch,
    closeSearch,
    searchResults,
    isLoading: isSearchLoading,
  } = useSearch();

  const currentIndex = allMushrooms.findIndex(m => m.id === id);
  const previousMushroom = currentIndex > 0 ? allMushrooms[currentIndex - 1] : null;
  const nextMushroom = currentIndex < allMushrooms.length - 1 ? allMushrooms[currentIndex + 1] : null;

  const navigateToPrevious = () => {
    if (previousMushroom) {
      setLocation(`/mushroom/${previousMushroom.id}`);
    }
  };

  const navigateToNext = () => {
    if (nextMushroom) {
      setLocation(`/mushroom/${nextMushroom.id}`);
    }
  };

  const swipeRef = useSwipe({
    onSwipeLeft: navigateToNext,
    onSwipeRight: navigateToPrevious,
  });

  useEffect(() => {
    if (mushroom) {
      document.title = `${mushroom.name} - Mushroom Benefits`;
      
      // SEO meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `Learn about ${mushroom.name}: ${mushroom.summary} Discover benefits, usage, safety, and clinical research.`);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = `Learn about ${mushroom.name}: ${mushroom.summary} Discover benefits, usage, safety, and clinical research.`;
        document.head.appendChild(meta);
      }
    }
  }, [mushroom]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header onSearchClick={openSearch} />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="animate-pulse text-center">Loading mushroom details...</div>
        </div>
      </div>
    );
  }

  if (!mushroom) {
    return (
      <div className="min-h-screen bg-background">
        <Header onSearchClick={openSearch} />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Mushroom Not Found</h1>
            <p className="text-muted-foreground mb-4">The mushroom you're looking for doesn't exist.</p>
            <Button onClick={() => setLocation("/")} data-testid="button-back-home">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background" ref={swipeRef}>
      <Header onSearchClick={openSearch} />
      
      <SearchOverlay
        isOpen={isSearchOpen}
        query={query}
        onQueryChange={setQuery}
        onClose={closeSearch}
        results={searchResults}
        isLoading={isSearchLoading}
      />

      {/* Mobile Navigation Header */}
      <div className="sticky top-16 z-10 bg-card/90 backdrop-blur-md border-b border-border lg:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          <Button variant="ghost" size="sm" onClick={() => setLocation("/")} data-testid="button-back-mobile">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium text-foreground truncate max-w-48" data-testid="text-mobile-title">
            {mushroom.name.split('(')[0].trim()}
          </span>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={navigateToPrevious}
              disabled={!previousMushroom}
              data-testid="button-prev-mobile"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={navigateToNext}
              disabled={!nextMushroom}
              data-testid="button-next-mobile"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between mb-6">
          <Button variant="outline" onClick={() => setLocation("/")} data-testid="button-back-desktop">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to All Mushrooms
          </Button>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              onClick={navigateToPrevious}
              disabled={!previousMushroom}
              data-testid="button-prev-desktop"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={navigateToNext}
              disabled={!nextMushroom}
              data-testid="button-next-desktop"
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <ImageCarousel
          images={mushroom.images}
          alt={mushroom.name}
          mushroomName={mushroom.name}
        />

        {/* Summary */}
        <div className="mb-8 text-center">
          <p className="text-xl text-muted-foreground" data-testid="text-summary">
            {mushroom.summary}
          </p>
        </div>

        {/* Detail Sections (All Expanded by Default) */}
        <div className="space-y-6">
          {/* Benefits Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <CheckCircle className="text-primary mr-3 h-5 w-5" />
                Health Benefits
              </h2>
              <ul className="space-y-3" data-testid="list-benefits-detail">
                {mushroom.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Usage Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Leaf className="text-primary mr-3 h-5 w-5" />
                  Typical Usage
                </h2>
                <p className="text-muted-foreground" data-testid="text-typical-usage">
                  {mushroom.typical_usage}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                  <Wind className="text-primary mr-3 h-5 w-5" />
                  Traditional Chinese Medicine
                </h2>
                <p className="text-muted-foreground" data-testid="text-tcm-usage">
                  {mushroom.tcm_usage}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Active Compounds */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <Microscope className="text-primary mr-3 h-5 w-5" />
                Active Compounds
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-testid="grid-compounds">
                {mushroom.active_compounds.map((compound, index) => (
                  <a
                    key={index}
                    href={compound.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                    data-testid={`link-compound-${index}`}
                  >
                    <h3 className="font-semibold text-foreground mb-1 flex items-center">
                      {compound.name.replace(/_/g, ' ')}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Learn more about this compound on Wikipedia
                    </p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Safety Information */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <AlertTriangle className="text-destructive mr-3 h-5 w-5" />
                Safety & Contraindications
              </h2>
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                <p className="text-foreground" data-testid="text-safety">
                  {mushroom.safety}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Clinical Research */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <FlaskConical className="text-primary mr-3 h-5 w-5" />
                Clinical Research
              </h2>
              <div className="space-y-3" data-testid="list-clinical-links">
                {mushroom.clinical_links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                    data-testid={`link-clinical-${index}`}
                  >
                    <h3 className="font-semibold text-foreground mb-1 flex items-center">
                      {link.title}
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      View this research study
                    </p>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recommended Products */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <ShoppingCart className="text-primary mr-3 h-5 w-5" />
                Recommended Products
              </h2>
              {mushroom.affiliate_links.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-testid="grid-affiliate-products">
                  {mushroom.affiliate_links.map((product, index) => (
                    <div key={index} className="border border-border rounded-lg p-4 hover:shadow-md transition-all">
                      {product.image && (
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-32 object-cover rounded mb-3"
                        />
                      )}
                      <h3 className="font-semibold text-foreground mb-2">{product.title}</h3>
                      {product.description && (
                        <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                      )}
                      <div className="flex items-center justify-between">
                        {product.price && (
                          <span className="text-lg font-bold text-primary">{product.price}</span>
                        )}
                        <Button
                          asChild
                          size="sm"
                          className="bg-accent text-accent-foreground hover:bg-accent/90"
                        >
                          <a
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid={`button-affiliate-${index}`}
                          >
                            Buy Now
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-muted/50 rounded-lg">
                  <ShoppingCart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground mb-2">No affiliate products available yet</p>
                  <p className="text-sm text-muted-foreground">Check back later for recommended {mushroom.name.split('(')[0].trim()} products</p>
                </div>
              )}
              <p className="text-xs text-muted-foreground mt-4 flex items-center">
                <ExternalLink className="mr-1 h-3 w-3" />
                These are affiliate links. We may earn a commission from purchases made through these links.
              </p>
            </CardContent>
          </Card>

          {/* Discussion Placeholder */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-4 flex items-center">
                <MessageCircle className="text-primary mr-3 h-5 w-5" />
                Community Discussion
              </h2>
              <div className="text-center py-8 bg-muted/50 rounded-lg">
                <MessageCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-2">Community discussions coming soon!</p>
                <p className="text-sm text-muted-foreground">Share experiences, ask questions, and connect with other mushroom enthusiasts.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
}
