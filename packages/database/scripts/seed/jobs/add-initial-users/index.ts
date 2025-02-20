import { schema } from "../../../../src";
import { defineStep, defineJob } from "../../../../src/module/seed/definer";
import usersData from "./data/users.json";

export default defineJob([
  defineStep(async (tx) => {
    await tx.insert(schema.auth.user).values(usersData).onConflictDoNothing();
  }),
]);
