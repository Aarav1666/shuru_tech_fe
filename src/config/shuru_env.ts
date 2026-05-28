export interface ShuruEnv {
  VERSION: string
}

const rawEnv = import.meta.env

export const shuruEnv: ShuruEnv = {
  VERSION: rawEnv.VITE_VERSION ?? '0.0.0'
}

export default shuruEnv
