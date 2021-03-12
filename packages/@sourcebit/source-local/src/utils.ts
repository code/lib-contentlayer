import { promises as fs } from 'fs'

export async function fileExists(pathLike: string): Promise<boolean> {
  try {
    const fileStat = await fs.stat(pathLike)
    return fileStat.isFile()
  } catch (_e) {
    return false
  }
}

export function unwrapThunk<T>(_: T | (() => T)): T {
  if (typeof _ === 'function') {
    return (_ as any)()
  } else {
    return _
  }
}