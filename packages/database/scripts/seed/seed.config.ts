import { defineSeedConfig } from "../../src/module/seed/definer";
// job imports
import addInitialUsers from "./jobs/add-initial-users";
// test data jobs import
import addStories from "./tests/add-stories";

export default defineSeedConfig({
  seed: {
    jobs: {
      // add seed jobs here
      addInitialUsers,
    },
    tests: {
      // add seed test data jobs here
      addStories,
    },
  },
});
