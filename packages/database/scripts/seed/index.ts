import "dotenv/config";
import { createDB, createSeeder } from "../../src";
import seedConfig from "./seed.config";
import dbConfig from "./db.config";

const db = await createDB(dbConfig);
const { run } = createSeeder(seedConfig);

const main = () => {
  run(db)
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.error(e);
      process.exit(1);
    })
    .finally(() => {
      // eslint-disable-next-line no-console
      console.log("Seeding completed!");
      process.exit(0);
    });
};

main();
