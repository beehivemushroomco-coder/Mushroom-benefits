import { useMemo, useEffect } from "react";
import Header from "@/components/header";
import SearchOverlay from "@/components/search-overlay";
import MushroomCard from "@/components/mushroom-card";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { useMushrooms } from "@/hooks/use-mushrooms";
import { useSearch } from "@/hooks/use-search";

export default function HomePage() {
  const { data: mushrooms = [], isLoading } = useMushrooms();
  const {
    query,
    setQuery,
    isSearchOpen,
    openSearch,
    closeSearch,
    searchResults,
    isLoading: isSearchLoading,
  } = useSearch();

  const displayedMushrooms = useMemo(() => {
    return query ? searchResults : mushrooms;
  }, [query, searchResults, mushrooms]);

  // Set document title for home page
  useEffect(() => {
    document.title = "mushroomhealth.co - Your Source for Mushroom Health Information";
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header onSearchClick={openSearch} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="animate-pulse">Loading mushrooms...</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onSearchClick={openSearch} />
      
      <SearchOverlay
        isOpen={isSearchOpen}
        query={query}
        onQueryChange={setQuery}
        onClose={closeSearch}
        results={searchResults}
        isLoading={isSearchLoading}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1">
            {/* Hero Section */}
            <div className="mb-12 text-center">
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Learn about{" "}
                <span className="text-primary">Mushrooms and their Benefits</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover the health benefits, traditional uses, and scientific research behind {mushrooms.length} powerful mushroom varieties
              </p>
            </div>

            {/* Mushroom List */}
            <div className="space-y-8" data-testid="mushroom-list">
              {displayedMushrooms.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    {query ? `No mushrooms found matching "${query}"` : "No mushrooms available"}
                  </p>
                </div>
              ) : (
                displayedMushrooms.map((mushroom, index) => (
                  <div key={mushroom.id}>
                    <MushroomCard mushroom={mushroom} />
                    
                    {/* AdSense Placeholder after every 4 cards */}
                    {(index + 1) % 4 === 0 && index < displayedMushrooms.length - 1 && (
                      <Card className="bg-muted/50 border-2 border-dashed border-border mt-8">
                        <CardContent className="p-8 text-center">
                          <div id={`ad-slot-inline-${Math.floor(index / 4) + 1}`} className="text-muted-foreground" data-testid={`ad-inline-${Math.floor(index / 4) + 1}`}>
                            <div className="text-2xl mb-2">📢</div>
                            <p className="font-medium">AdSense Inline Advertisement</p>
                            <p className="text-sm">728x90 Leaderboard (Desktop) / 320x50 Mobile Banner</p>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                ))
              )}
            </div>
          </main>

          <Sidebar />
        </div>
      </div>

      <Footer />
    </div>
  );
}
