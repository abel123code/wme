import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8jt0lsz6",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});