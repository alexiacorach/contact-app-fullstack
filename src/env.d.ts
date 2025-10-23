/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BACKEND_URL: string
  // acá podés agregar otras variables de entorno que uses
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
