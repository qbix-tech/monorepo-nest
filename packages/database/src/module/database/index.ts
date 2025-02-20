import { drizzle } from "drizzle-orm/node-postgres";
import type { DrizzlePGConfig } from "./types";
import { Client, Pool } from "pg";

class DrizzleDatabase {
  constructor(private config: DrizzlePGConfig) {}
  public async getDrizzlePG() {
    if (this.config.pg.connection === "client") {
      const client = new Client(this.config.pg.config);
      await client.connect();
      return drizzle(client, this.config.options);
    }
    const pool = new Pool(this.config.pg.config);
    return drizzle(pool, this.config.options);
  }
}

export default DrizzleDatabase;
