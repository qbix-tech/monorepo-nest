import { pgSchema } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";

export const schema = pgSchema("auth");

export const user = schema.table("user", (t) => ({
  id: t
    .text()
    .primaryKey()
    .$default(() => createId()),
  name: t.text().notNull(),
  email: t.text().unique().notNull(),
  hashedPassword: t.text(),
}));
