import "dotenv/config";
import { createDB, createSeeder } from "../../src";
import seedConfig from "./seed.config";
import dbConfig from "./db.config";

const db = createDB(dbConfig);
const { run } = createSeeder(seedConfig);

const main = async () => {
  await db.$client.connect();
  await run(db)
    .catch(async (e) => {
      await db.$client.end();
      // eslint-disable-next-line no-console
      console.error(e);
      process.exit(1);
    })
    .finally(async () => {
      await db.$client.end();
      // eslint-disable-next-line no-console
      console.log("Seeding completed!");
      process.exit(0);
    });
};

main();
