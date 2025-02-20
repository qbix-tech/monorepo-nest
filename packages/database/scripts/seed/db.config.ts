import { defineDrizzlePGConfig } from "../../src/module/database/definer";

const { DATABASE_URL, DATABASE_SSL } = process.env;
if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is missing.");
}

const config = defineDrizzlePGConfig({
  pg: {
    connection: "client",
    config: {
      connectionString: DATABASE_URL,
      ssl: DATABASE_SSL === "true",
    },
  },
  options: {
    casing: "snake_case",
  },
});

export default config;
