import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // Configuration globale d'ignorance
  {
    ignores: [
      // Build outputs
      ".next/**",
      "out/**",
      "dist/**",
      "build/**",
      // Dependencies
      "node_modules/**",
      // Environment files
      ".env*",
      // Logs
      "*.log",
      // Cache
      ".cache/**",
      ".turbo/**",
      // Coverage
      "coverage/**",
      // Temp
      ".tmp/**",
      ".temp/**",
    ],
  },
  // Configuration ESLint pour les autres fichiers
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      "react/no-unescaped-entities": "off", // Désactive les erreurs d'apostrophes
      "import/no-anonymous-default-export": "off", // Désactive l'avertissement postcss
    },
  },
];