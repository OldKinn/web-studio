import {combineReducers} from 'redux'
import set from 'lodash/set'
import clone from 'lodash/clone'
import * as Const from 'commons/const'

// 页面展现的控制状态
function cache(state = {
    // 菜单是否收缩
    slide: false
}, action) {
    switch (action.type) {
        case Const.ACTION_SET_CACHE:
            let next = clone(state);
            set(next, action.key, action.value);
            return next;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    cache: cache
});

export default rootReducer