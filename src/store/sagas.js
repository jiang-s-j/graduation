import { all } from 'redux-saga/effects'
import IndexSage from '@/pages/Index/store/saga.js'

// 引入sagas
const rootSagas = function* () {
  yield all([
    IndexSage()
  ])
}

export default rootSagas