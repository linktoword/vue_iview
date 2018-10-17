/** 
 * api接口统一管理
 */
import { get, post } from './config'

export const testApi = p => post('test/test', "test");