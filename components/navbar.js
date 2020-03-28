import m from 'mithril';
import auth from '../auth';

const navLink = vnode => {
    return {
        view: ({ attrs, children }) => m(m.route.Link, {
            ...attrs,
            class: 'nav-link' + (m.route.get() === attrs.href ? ' active' : '')
        }, children)
    }
}

export default {
    view: vnode => m("nav", { "class": "navbar navbar-light" },
        m("div", { "class": "container" }, [
            m(m.route.Link, { "class": "navbar-brand", "href": "/" },
                "conduit"
            ),
            m("ul", { "class": "nav navbar-nav pull-xs-right" }, [
                m("li", { "class": "nav-item" },
                    m(navLink, { href: '/' }, 'Home')
                ),
                auth.isLoggedIn() ? [
                    m("li", { "class": "nav-item" },
                        m(navLink, { href: '/editor' }, [
                            m("i", { "class": "ion-compose" }),
                            m.trust("&nbsp;"),
                            "New Post "
                        ])
                    ),
                    m("li", { "class": "nav-item" },
                        m(navLink, { href: '/settings' }, [
                            m("i", { "class": "ion-gear-a" }),
                            m.trust("&nbsp;"),
                            "Settings "
                        ])
                    ),
                ] : null,
                m("li", { "class": "nav-item" },
                    m(navLink, { href: '/login' }, 'Sign in')
                ),
                m("li", { "class": "nav-item" },
                    m(navLink, { href: '/register' }, 'Sign up')
                )
            ])
        ])
    )
}