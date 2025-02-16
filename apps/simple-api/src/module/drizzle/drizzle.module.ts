import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';
import { schema } from '@org/database';

export const DRIZZLE = Symbol('drizzle-connection');

@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databasURL = configService.get<string>('DATABASE_URL');
        const ssl = configService.get<string>('DATABASE_SSL') === 'true';
        const pool = new Pool({
          connectionString: databasURL,
          ssl: ssl,
        });
        return drizzle(pool, { casing: 'snake_case' }) as NodePgDatabase<
          typeof schema
        >;
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
