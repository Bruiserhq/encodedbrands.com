import { defineConfig } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "migration/phase-0-astro";

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Homepage",
        path: "src/content/homepage",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", required: true },
          { type: "string", name: "tagline", label: "Tagline", required: true },
          { type: "rich-text", name: "body", label: "Body", isBody: true },
        ],
      },
    ],
  },
});
