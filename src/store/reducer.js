import { combineReducers } from 'redux'
import * as Actions from './contans'
import IndexReducer from '@/pages/Index/store/renducer'
import RecommendReducer from '@/pages/recommend/store/renducer'


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
  index: IndexReducer,
  main: mainReducer,
  recommend:RecommendReducer,
})

export default reducer