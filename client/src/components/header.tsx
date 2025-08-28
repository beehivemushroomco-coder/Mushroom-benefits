import { Link } from "wouter";
import { Search, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSearchClick: () => void;
}

export default function Header({ onSearchClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-xl font-bold text-primary hover:text-primary/80 transition-colors flex items-center"
              data-testid="link-home"
            >
              <Sprout className="mr-2 h-5 w-5" />
              Mushroom Benefits
            </Link>
          </div>
          
          <Button
            variant="outline"
            onClick={onSearchClick}
            className="flex items-center space-x-2 bg-muted hover:bg-muted/80"
            data-testid="button-search"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
            <span className="hidden sm:inline text-muted-foreground">Search mushrooms...</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
