import { Mushroom } from "@shared/schema";

export interface IStorage {
  getMushrooms(): Promise<Mushroom[]>;
  getMushroomById(id: string): Promise<Mushroom | undefined>;
  searchMushrooms(query: string): Promise<Mushroom[]>;
}

export class MemStorage implements IStorage {
  private mushrooms: Map<string, Mushroom>;

  constructor() {
    this.mushrooms = new Map();
    this.loadInitialData();
  }

  private async loadInitialData() {
    // Load mushrooms data from JSON file
    try {
      const fs = await import('fs/promises');
      const path = await import('path');
      const mushroomsPath = path.resolve(process.cwd(), 'client/src/lib/mushrooms.json');
      const data = await fs.readFile(mushroomsPath, 'utf-8');
      const mushroomsArray = JSON.parse(data) as Mushroom[];
      
      for (const mushroom of mushroomsArray) {
        this.mushrooms.set(mushroom.id, mushroom);
      }
    } catch (error) {
      console.error('Failed to load mushrooms data:', error);
    }
  }

  async getMushrooms(): Promise<Mushroom[]> {
    const mushrooms = Array.from(this.mushrooms.values());
    
    // Sort to put Lion's Mane first, then alphabetically by name
    return mushrooms.sort((a, b) => {
      // Check if either mushroom is Lion's Mane
      const aIsLionsMane = a.name.toLowerCase().includes("lion's mane");
      const bIsLionsMane = b.name.toLowerCase().includes("lion's mane");
      
      if (aIsLionsMane && !bIsLionsMane) return -1;
      if (!aIsLionsMane && bIsLionsMane) return 1;
      
      // If neither or both are Lion's Mane, sort alphabetically
      return a.name.localeCompare(b.name);
    });
  }

  async getMushroomById(id: string): Promise<Mushroom | undefined> {
    return this.mushrooms.get(id);
  }

  async searchMushrooms(query: string): Promise<Mushroom[]> {
    if (!query.trim()) {
      return this.getMushrooms();
    }

    const searchTerm = query.toLowerCase();
    const mushrooms = Array.from(this.mushrooms.values());
    
    return mushrooms.filter(mushroom => {
      // Search across all text fields
      const searchableText = [
        mushroom.name,
        mushroom.summary,
        mushroom.typical_usage,
        mushroom.tcm_usage,
        mushroom.safety,
        ...mushroom.benefits,
        ...mushroom.active_compounds.map(c => c.name),
        ...mushroom.clinical_links.map(c => c.title),
      ].join(' ').toLowerCase();

      return searchableText.includes(searchTerm);
    });
  }
}

export const storage = new MemStorage();
