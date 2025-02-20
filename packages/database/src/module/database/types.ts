import type { ClientConfig, PoolConfig } from "pg";
import type { DrizzleConfig, ExtractTablesWithRelations } from "drizzle-orm";
import type { PgTransaction } from "drizzle-orm/pg-core";
import type {
  NodePgDatabase,
  NodePgQueryResultHKT,
} from "drizzle-orm/node-postgres";

export type DrizzlePGConfig = {
  pg: {
    connection: "client" | "pool";
    config: ClientConfig | PoolConfig;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: DrizzleConfig<any | undefined>;
};

export type DrizzlePGDatabase = NodePgDatabase<Record<string, never>>;

export type DrizzlePGTransaction = PgTransaction<
  NodePgQueryResultHKT,
  Record<string, never>,
  ExtractTablesWithRelations<Record<string, never>>
>;
