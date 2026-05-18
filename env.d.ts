/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_URL: string;
  // Add any other custom variables here as your project grows
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
