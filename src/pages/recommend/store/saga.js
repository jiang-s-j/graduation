import {takeEvery} from 'redux-saga/effects'
import * as Act from '@/store/contans'


function * recommendSaga() {
  yield takeEvery('initRecommendSaga',initRecommendAsync)
  console.log('ssss');
}

function * initRecommendAsync () {
  console.log('recommend');
}

export default recommendSaga