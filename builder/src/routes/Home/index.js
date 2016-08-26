import utils from 'commons/utils'

module.exports = {
    path: 'home',
    onEnter: (nextState, replace) => {
        if (!utils.getStorage('isLogin', false)) {
            replace('/');
        }
    },
    onLeave: () => {
        window.scrollTo(0, 0);
    },
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/Home'))
        })
    }
}
