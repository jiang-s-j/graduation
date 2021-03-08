import * as Acts from '@/store/contans.js'

const defaultValue = {
    test: '测试数据'
}

export const IndexReducer = (state = defaultValue, action) =>{
  switch (action.type) {
    case Acts.TEST:
      return {...state, test: action.load}
    default:
      return state
  }
}

export default IndexReducer