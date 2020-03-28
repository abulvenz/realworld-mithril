import m from 'mithril';
import auth from '../auth';

const navLink = vnode => {
    return {
        view: ({ attrs, children }) => m("li", { "class": "nav-item" },
            m(m.route.Link, {
                ...attrs,
                class: 'nav-link' + (m.route.get() === attrs.href ? ' active' : '')
            }, children)
        )
    }
}

export default {
    view: vnode => m("nav", { "class": "navbar navbar-light" },
        m("div", { "class": "container" }, [
            m(m.route.Link, { "class": "navbar-brand", "href": "/" },
                "conduit"
            ),
            m("ul", { "class": "nav navbar-nav pull-xs-right" }, [
                m(navLink, { href: '/' }, 'Home'),
                auth.isLoggedIn() ? [
                    m(navLink, { href: '/editor' }, [
                        m("i", { "class": "ion-compose" }),
                        m.trust("&nbsp;"),
                        "New Post "
                    ]), m(navLink, { href: '/settings' }, [
                        m("i", { "class": "ion-gear-a" }),
                        m.trust("&nbsp;"),
                        "Settings "
                    ])
                ] : [
                    m(navLink, { href: '/login' }, 'Sign in'),
                    m(navLink, { href: '/register' }, 'Sign up')
                ]
            ])
        ])
    )
}