import { combineReducers } from 'redux'
import * as Actions from './contans'

// store 默认值
const defaultValue = {

}

// reducer 
const mainReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case Actions.TEST:
      return {...state,testData: action.value}
    default:
      return state
  }
}

// 可以加载多个reducer
const reducer = combineReducers({
  main: mainReducer
})

export default reducer