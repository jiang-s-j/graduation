import * as Act from '@/store/contans.js'

export const testActionCreate = (load) =>{
  return {
    type: Act.TESTINDEX,
    load,
  }
}