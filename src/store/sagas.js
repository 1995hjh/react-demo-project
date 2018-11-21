import {
	takeEvery,
	put
} from 'redux-saga/effects';
import axios from 'axios';
import {
	GET_INIT_LIST
} from './actionTypes';
import * as actions from './actionCreators';

function* getInitList() {
	try {
		const res = yield axios.get('./list.json');
		const action = actions.initListAction(res.data);
		yield put(action);
	} catch (e) {
		console.warn('list.json网络请求失败');
	}

}

function* mySaga() {
	yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;