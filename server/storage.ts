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
    return Array.from(this.mushrooms.values());
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
