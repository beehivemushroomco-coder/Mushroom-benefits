import { useQuery } from "@tanstack/react-query";
import { Mushroom } from "@shared/schema";

export function useMushrooms() {
  return useQuery<Mushroom[]>({
    queryKey: ["/api/mushrooms"],
  });
}

export function useMushroom(id: string) {
  return useQuery<Mushroom>({
    queryKey: ["/api/mushrooms", id],
    enabled: !!id,
  });
}
