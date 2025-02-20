import type { ClientConfig, PoolConfig, Client, Pool } from "pg";
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DrizzlePGClientDatabase = NodePgDatabase<any> & { $client: Client };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DrizzlePGPoolDatabase = NodePgDatabase<any> & { $client: Pool };

export type DrizzlePGDatabase = DrizzlePGClientDatabase | DrizzlePGPoolDatabase;

export type DrizzlePGTransaction = PgTransaction<
  NodePgQueryResultHKT,
  Record<string, never>,
  ExtractTablesWithRelations<Record<string, never>>
>;
