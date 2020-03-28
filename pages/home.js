import m from 'mithril';
import articleMeta from './article-meta';
import articles from '../services/articles';
import articlePreview from './article-preview';
import sidebar from '../components/sidebar';
import auth from '../auth';

let activeTag = null;
let activeFeed = null;

const pagination = vnode => {
    let current = 0;
    const range = (S, N) => {
        let r = [];
        for (let i = S; i <= N; i++) r.push(i);
        return r;
    };
    return {
        view: ({ attrs: { pages, onchange } }) => m("nav",
            m("ul", { "class": "pagination" }, [
                range(1, pages).map(num =>
                    m("li", { "class": "page-item" + (num === current ? ' active' : '') },
                        m("a", {
                                "class": "page-link",
                                "href": "",
                                onclick: e => {
                                    current = num;
                                    onchange && onchange(num);
                                    e.preventDefault();
                                }
                            },
                            num
                        )
                    ))
            ])
        )
    };
};

export default {
    view: vnode => m("div", { "class": "home-page" }, [
        m("div", { "class": "banner" },
            m("div", { "class": "container" }, [
                m("h1", { "class": "logo-font" },
                    "conduit"
                ),
                m("p",
                    "A place to share your knowledge."
                )
            ])
        ),
        m("div", { "class": "container page" },
            m("div", { "class": "row" }, [
                m("div", { "class": "col-md-9" }, [
                    m("div", { "class": "feed-toggle" },
                        m("ul", { "class": "nav nav-pills outline-active" }, [
                            auth.isLoggedIn() ?
                            m("li", { "class": "nav-item" },
                                m("a", {
                                        "class": "nav-link disabled",
                                        "href": "",
                                        onclick: e => {
                                            activeFeed = 'feed';
                                            articles.setFeed('feed');
                                            e.preventDefault();
                                        }
                                    },
                                    "Your Feed"
                                )
                            ) : null,
                            m("li", { "class": "nav-item" },
                                m("a", {
                                        "class": "nav-link active",
                                        "href": "",
                                        onclick: e => {
                                            activeFeed = null;
                                            articles.setFeed(null);
                                            e.preventDefault();
                                        }
                                    },
                                    "Global Feed"
                                )
                            ),
                            activeTag ? m("li", { "class": "nav-item" },
                                m("a", { "class": "nav-link active", "href": "" },
                                    `#${activeTag}`
                                )
                            ) : null
                        ])
                    ),
                    articles.list().map(article => m(articleMeta, { article }, m(articlePreview, { article }))),
                    m(pagination, { pages: articles.pages(), onchange: articles.setPage })
                ]),
                m("div", { "class": "col-md-3" },
                    m(sidebar, {
                        tagClicked: tag => {
                            activeTag = tag;
                            articles.setTag(tag);
                        }
                    })
                )
            ])
        )
    ])
};