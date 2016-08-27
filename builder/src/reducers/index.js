import {combineReducers} from 'redux'
import set from 'lodash/set'
import clone from 'lodash/clone'
import * as Const from 'commons/const'

const menus = [
    {id: 'project', name: '项目管理', path: '/home', icon: 'tasks', notice: '1024'},
    {id: 'attribute', name: '属性维护', path: '/home', icon: 'grain', notice: '1024'},
    {id: 'component', name: '组件维护', path: '/home', icon: 'th', notice: '1024'},
    {id: 'user', name: '用户管理', path: '/home', icon: 'user', notice: '1024'},
    {id: 'common', name: '其他设置', path: '/home', icon: 'option-horizontal', notice: '1024'}
]

// 页面展现的控制状态
function cache(state = {
    // 菜单是否收缩
    collapse: false,
    menus: menus
}, action) {
    if (action.type == Const.ACTION_SET_CACHE) {
        let next = clone(state);
        set(next, action.key, action.value);
        return next;
    }
    return state;
}

const rootReducer = combineReducers({
    cache: cache
});

export default rootReducer