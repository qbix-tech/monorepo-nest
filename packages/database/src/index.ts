import Seed from "./module/seed";
import type { SeedConfig } from "./module/seed/types";
import type {
  DrizzlePGConfig,
  DrizzlePGTransaction,
} from "./module/database/types";
import type { NodePgDatabase } from "drizzle-orm/node-postgres";
import DrizzleDatabase from "./module/database";

const createDB = async (config: DrizzlePGConfig) => {
  const _dbInstance = await new DrizzleDatabase(config).getDrizzlePG();
  return _dbInstance;
};

const createSeeder = (config: SeedConfig) => {
  const _seedInstance = new Seed(config);
  const doSeedTestDate = process.env.DATABASE_ENABLE_SEED_TEST_DATA === "true";

  return {
    run: async (db: NodePgDatabase | DrizzlePGTransaction) => {
      await _seedInstance.main(db, doSeedTestDate);
    },
  };
};

export * as schema from "../schema";
export { createDB, createSeeder };
