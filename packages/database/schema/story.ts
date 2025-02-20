import { pgSchema } from "drizzle-orm/pg-core";
import { createId } from "@paralleldrive/cuid2";
import * as auth from "./auth";

export const schema = pgSchema("story");

export const story = schema.table("story", (t) => ({
  id: t
    .text()
    .primaryKey()
    .$default(() => createId()),
  userId: t
    .text()
    .notNull()
    .references(() => auth.user.id, {
      onDelete: "cascade",
      onUpdate: "cascade",
    }),
  title: t.text().notNull(),
  content: t.text().notNull(),
}));
