/**
 * 属性模块路由配置
 * Created by Leon on 2016/8/28.
 */

module.exports = {
    path: '/attribute',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Attribute'))
        })
    }
}