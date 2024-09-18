// loginSaga.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOGIN_REQUEST, loginSuccess, loginFailure, loginBadRequest, loginUnauthorized } from './loginActions';

function* loginSaga(action) {
  try {
    const response = yield call(fetch, 'https://take-home-test-api.nutech-integrasi.com/login', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(action.payload),
    });

    const data = yield response.json();

    if (response.ok) {
      if (data.status === 0) {
        yield put(loginSuccess(data.data.token));
      } else if (data.status === 102) {
        yield put(loginBadRequest(data.message));
      } else if (data.status === 103) {
        yield put(loginUnauthorized(data.message));
      }
    } else {
      yield put(loginFailure('Request failed'));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLoginSaga() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}
