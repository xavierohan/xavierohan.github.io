import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup
} from "unocss";

const DEFAULT_FONTS =
  "Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Arial, sans-serif";

export default defineConfig({
  shortcuts: [
    ["flex-center", "flex items-center justify-center"],
    ["hstack", "flex items-center"],
    ["vstack", "flex flex-col justify-center"],
    ["border-c", "border-gray-200 dark:border-gray-600"],
    ["border-c-dark", "border-gray-300 dark:border-gray-500"],
    ["bg-c", "bg-white dark:bg-gray-700"],
    ["text-c", "text-gray-800 dark:text-gray-200"],
    ["text-c-light", "text-c opacity-85"],
    ["text-c-lighter", "text-c opacity-50"],
    ["text-c-dark", "text-black dark:text-white"],
    ["text-c-active", "text-brand dark:text-blue-300"],
    ["nav-item", "hstack space-x-1 text-c-light hover:text-c-dark transition-all duration-200 font-normal"],
    [
      "btn",
      "hstack space-x-1 rounded-md transition-all decoration-none text-sm !text-c bg-gray-50/80 dark:bg-gray-800/50 hover:(!bg-gray-100 dark:!bg-gray-700 !no-underline) border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
    ],
    ["prose-lg", "lg:text-lg max-w-content"]
  ],
  theme: {
    fontFamily: {
      sans: DEFAULT_FONTS,
      ui: DEFAULT_FONTS
    },
    boxShadow: {
      nav: "0 1px 8px 0 rgba(27, 35, 47, .1)"
    },
    colors: {
      brand: "#1772d0"
    },
    maxWidth: {
      content: "95ch"
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "sub"
      }
    }),
    presetTypography()
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: "prose prose-lg mx-auto".split(" ")
});
