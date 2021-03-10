import { all } from 'redux-saga/effects'
import recommendSaga from '@/pages/recommend/store/saga.js'
import IndexSage from '@/pages/Index/store/saga.js'

// 引入sagas
const rootSagas = function* () {
  yield all([
    IndexSage(),
    recommendSaga()
  ])
}

export default rootSagas