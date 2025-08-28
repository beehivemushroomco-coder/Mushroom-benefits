import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Mushroom } from "@shared/schema";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const searchResults = useQuery<Mushroom[]>({
    queryKey: ["/api/mushrooms/search", encodeURIComponent(query)],
    enabled: query.length > 0,
  });

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => {
    setIsSearchOpen(false);
    setQuery("");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSearchOpen) {
        closeSearch();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openSearch();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isSearchOpen]);

  return {
    query,
    setQuery,
    isSearchOpen,
    openSearch,
    closeSearch,
    searchResults: searchResults.data || [],
    isLoading: searchResults.isLoading,
  };
}
