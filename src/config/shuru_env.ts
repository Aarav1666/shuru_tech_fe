export interface ShuruEnv {
  VERSION: string
  API_BASE_URL: string
}

const rawEnv = import.meta.env

export const shuruEnv: ShuruEnv = {
  VERSION: rawEnv.VITE_VERSION ?? '0.0.0',
  API_BASE_URL: rawEnv.VITE_API_BASE_URL ?? ''
}

export default shuruEnv
