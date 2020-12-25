import { isPlainObject } from './util'

function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

export { transformRequest }
