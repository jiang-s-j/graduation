import * as Acts from '@/store/contans'
const defaultValue = {

}

export const recommendSaga =  (state = defaultValue, action) =>{
  switch (action.type) {
    case Acts.TEST:
      return {...state, test: action.load}
    default:
      return state
  }
}

export default recommendSaga