import Seed from "./module/seed";
import type { SeedConfig } from "./module/seed/types";
import type {
  DrizzlePGConfig,
  DrizzlePGDatabase,
  DrizzlePGPoolDatabase,
  DrizzlePGClientDatabase,
} from "./module/database/types";
import DrizzleDatabase from "./module/database";

const createDB = <T extends DrizzlePGConfig>(config: T) => {
  const _dbInstance = new DrizzleDatabase(config).getDrizzlePG();
  return _dbInstance as T["pg"]["connection"] extends "client"
    ? DrizzlePGClientDatabase
    : DrizzlePGPoolDatabase;
};

const createSeeder = (config: SeedConfig) => {
  const _seedInstance = new Seed(config);
  const doSeedTestDate = process.env.DATABASE_ENABLE_SEED_TEST_DATA === "true";

  return {
    run: async (db: DrizzlePGDatabase) => {
      await _seedInstance.main(db, doSeedTestDate);
    },
  };
};

export { createDB, createSeeder };

export * as schema from "../schema";
export * from "./helpers";
export * from "./module/database/types";
export * from "./module/database/definer";
export * from "./module/seed/types";
export * from "./module/seed/definer";

export { default as seedConfig } from "../scripts/seed/seed.config";
