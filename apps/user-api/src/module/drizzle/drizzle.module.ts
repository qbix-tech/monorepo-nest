import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createDB, defineDrizzlePGConfig } from '@org/database';

export const DRIZZLE = Symbol('drizzle-connection');

@Module({
  providers: [
    {
      provide: DRIZZLE,
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const databasURL = configService.get<string>('DATABASE_URL');
        const ssl = configService.get<string>('DATABASE_SSL') === 'true';
        const config = defineDrizzlePGConfig({
          pg: {
            connection: 'pool',
            config: {
              connectionString: databasURL,
              ssl,
            },
          },
          options: {
            casing: 'snake_case',
          },
        });
        return createDB(config);
      },
    },
  ],
  exports: [DRIZZLE],
})
export class DrizzleModule {}
