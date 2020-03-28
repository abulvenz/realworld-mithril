import m from 'mithril';

export default {
    oncreate: ({
        dom,
        attrs: {
            routes
        }
    }) => m.route(dom, '/', routes),
    view: vnode => m('div')
};