///
// <reference types="vite/client" />

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.jpg" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  const value: string;
  export default value;
}
declare module "*.webp" {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  VITE_URL_ENDPOINT: string;
  // Tambahkan variabel lingkungan lain di sini jika diperlukan
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
