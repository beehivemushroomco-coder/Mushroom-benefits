import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { mushroomSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all mushrooms
  app.get("/api/mushrooms", async (req, res) => {
    try {
      const mushrooms = await storage.getMushrooms();
      res.json(mushrooms);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch mushrooms" });
    }
  });

  // Get mushroom by ID
  app.get("/api/mushrooms/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const mushroom = await storage.getMushroomById(id);
      
      if (!mushroom) {
        return res.status(404).json({ message: "Mushroom not found" });
      }
      
      res.json(mushroom);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch mushroom" });
    }
  });

  // Search mushrooms
  app.get("/api/mushrooms/search/:query", async (req, res) => {
    try {
      const { query } = req.params;
      const mushrooms = await storage.searchMushrooms(decodeURIComponent(query));
      res.json(mushrooms);
    } catch (error) {
      res.status(500).json({ message: "Failed to search mushrooms" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
