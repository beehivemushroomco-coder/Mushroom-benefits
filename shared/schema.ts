import { z } from "zod";

export const activeCompoundSchema = z.object({
  name: z.string(),
  link: z.string(),
});

export const clinicalLinkSchema = z.object({
  title: z.string(),
  url: z.string(),
});

export const affiliateLinkSchema = z.object({
  title: z.string(),
  url: z.string(),
  price: z.string().optional(),
  image: z.string().optional(),
  description: z.string().optional(),
});

export const mushroomSchema = z.object({
  id: z.string(),
  name: z.string(),
  images: z.array(z.string()),
  summary: z.string(),
  benefits: z.array(z.string()),
  typical_usage: z.string(),
  tcm_usage: z.string(),
  active_compounds: z.array(activeCompoundSchema),
  safety: z.string(),
  clinical_links: z.array(clinicalLinkSchema),
  articles: z.array(z.string()),
  affiliate_links: z.array(affiliateLinkSchema),
});

export type Mushroom = z.infer<typeof mushroomSchema>;
export type ActiveCompound = z.infer<typeof activeCompoundSchema>;
export type ClinicalLink = z.infer<typeof clinicalLinkSchema>;
export type AffiliateLink = z.infer<typeof affiliateLinkSchema>;
