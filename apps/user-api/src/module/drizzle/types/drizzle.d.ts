import { schema } from '@org/database';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';

export type DrizzleDB = NodePgDatabase<typeof schema>;
