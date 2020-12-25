/**
 * 接口说明
 * @param { string } url 请求的地址
 * @param { Method } method 请求的 HTTP 方法
 * @param { any } data post、patch 等类型请求的数据
 * @param { any } params get、head 等类型请求的数据
 */
interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

interface AxiosPromise extends Promise<AxiosResponse> {}

type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'Delete'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

export { AxiosRequestConfig, AxiosPromise, AxiosResponse }
