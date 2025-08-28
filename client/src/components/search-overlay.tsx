import { useEffect, useRef } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Mushroom } from "@shared/schema";

interface SearchOverlayProps {
  isOpen: boolean;
  query: string;
  onQueryChange: (query: string) => void;
  onClose: () => void;
  results: Mushroom[];
  isLoading: boolean;
}

export default function SearchOverlay({
  isOpen,
  query,
  onQueryChange,
  onClose,
  results,
  isLoading,
}: SearchOverlayProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 search-overlay">
      <div className="max-w-2xl mx-auto px-4 pt-20">
        <Card className="shadow-xl border border-border">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-4 mb-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search across all mushroom data..."
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                className="flex-1 border-none shadow-none text-lg focus-visible:ring-0"
                data-testid="input-search"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground"
                data-testid="button-close-search"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-sm text-muted-foreground mb-4">
              Search by name, benefits, compounds, usage, or any other content
            </div>

            {query && (
              <div className="max-h-96 overflow-y-auto">
                {isLoading ? (
                  <div className="text-center py-4 text-muted-foreground">
                    Searching...
                  </div>
                ) : results.length > 0 ? (
                  <div className="space-y-2">
                    {results.map((mushroom) => (
                      <Link
                        key={mushroom.id}
                        href={`/mushroom/${mushroom.id}`}
                        className="block p-3 hover:bg-muted rounded-lg transition-colors"
                        onClick={onClose}
                        data-testid={`link-search-result-${mushroom.id}`}
                      >
                        <h3 className="font-medium text-foreground mb-1">
                          {mushroom.name}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {mushroom.summary}
                        </p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-4 text-muted-foreground">
                    No mushrooms found matching "{query}"
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
