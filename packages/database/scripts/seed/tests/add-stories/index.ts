import { schema } from "../../../../src";
import { defineStep, defineJob } from "../../../../src/module/seed/definer";
import storiesData from "./data/stories.json";

export default defineJob([
  defineStep(async (tx) => {
    await tx
      .insert(schema.story.story)
      .values(storiesData)
      .onConflictDoNothing();
  }),
]);
