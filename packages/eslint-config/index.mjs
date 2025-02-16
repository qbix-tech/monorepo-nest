import { createConfigForNuxt } from "@nuxt/eslint-config/flat";

/**
 * Default ESLint configuration
 *
 * @type {import('eslint').Linter.Config}
 */
export const defaultConfig = {
  rules: {
    "no-console": "error",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-self-closing": "off",
    "vue/no-v-model-argument": "off",
  },
  ignores: [".nx/*"],
};

/**
 * For standalone usage in packages without Nuxt context.
 *
 * `createConfigForNuxt()` will create all best-practices rules for js/ts/vue from `@nuxt/eslint-config`.
 * @see https://eslint.nuxt.com/packages/config
 *
 * The activated `tooling` feature enables rules with unicorn and jsdoc.
 * @see https://eslint.nuxt.com/packages/config#module-authors
 */
export const defaultConfigWithNuxt = createConfigForNuxt({
  features: { tooling: false },
}).append(defaultConfig);
