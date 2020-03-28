import m from 'mithril';
import marked from 'marked';
import articles from '../services/articles';
let article2 = {
    "slug": "how-to-train-your-dragon-2",
    "title": "How to train your dragon 2",
    "description": "So toothless",
    "body": "It a dragon",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
    }
};
const use = (v, fn) => fn(v);

export default {
    view: ({ attrs: { slug } }) =>
        use(articles.bySlug(slug),
            article => article ? m("div", { "class": "article-page" }, [
                m("div", { "class": "banner" },
                    m("div", { "class": "container" }, [
                        m("h1",
                            article.title
                        ),
                        m("div", { "class": "article-meta" }, [
                            m("a", { "href": "" },
                                m("img", { "src": article.author.image })
                            ),
                            m("div", { "class": "info" }, [
                                m(m.route.Link, { "class": "author", "href": `/@${article.author.username}` },
                                    article.author.username
                                ),
                                m("span", { "class": "date" },
                                    (new Date(Date.parse(article.updatedAt))).toDateString()
                                )
                            ]),
                            m("button", { "class": "btn btn-sm btn-outline-secondary" }, [
                                m("i", { "class": "ion-plus-round" }),
                                " ",
                                m.trust("&nbsp;"),
                                ` Follow ${article.author.username} `,
                                m("span", { "class": "counter" },
                                    "(10)"
                                )
                            ]),
                            " ",
                            m.trust("&nbsp;"),
                            m.trust("&nbsp;"),
                            " ",
                            m("button", { "class": "btn btn-sm btn-outline-primary" }, [
                                m("i", { "class": "ion-heart" }),
                                " ",
                                m.trust("&nbsp;"),
                                " Favorite Post ",
                                m("span", { "class": "counter" },
                                    `(${article.favoritesCount})`
                                )
                            ])
                        ])
                    ])
                ),
                m("div", { "class": "container page" }, [
                    m("div", { "class": "row article-content" },
                        m("div", { "class": "col-md-12" }, [
                            m.trust(marked(article.body))
                        ])
                    ),
                    m("hr"),
                    m("div", { "class": "article-actions" },
                        m("div", { "class": "article-meta" }, [
                            m("a", { "href": "profile.html" },
                                m("img", { "src": "http://i.imgur.com/Qr71crq.jpg" })
                            ),
                            m("div", { "class": "info" }, [
                                m("a", { "class": "author", "href": "" },
                                    "Eric Simons"
                                ),
                                m("span", { "class": "date" },
                                    "January 20th"
                                )
                            ]),
                            m("button", { "class": "btn btn-sm btn-outline-secondary" }, [
                                m("i", { "class": "ion-plus-round" }),
                                " ",
                                m.trust("&nbsp;"),
                                " Follow Eric Simons ",
                                m("span", { "class": "counter" },
                                    "(10)"
                                )
                            ]),
                            " ",
                            m.trust("&nbsp;"),
                            " ",
                            m("button", { "class": "btn btn-sm btn-outline-primary" }, [
                                m("i", { "class": "ion-heart" }),
                                " ",
                                m.trust("&nbsp;"),
                                " Favorite Post ",
                                m("span", { "class": "counter" },
                                    "(29)"
                                )
                            ])
                        ])
                    ),
                    m("div", { "class": "row" },
                        m("div", { "class": "col-xs-12 col-md-8 offset-md-2" }, [
                            m("form", { "class": "card comment-form" }, [
                                m("div", { "class": "card-block" },
                                    m("textarea", { "class": "form-control", "placeholder": "Write a comment...", "rows": "3" })
                                ),
                                m("div", { "class": "card-footer" }, [
                                    m("img", { "class": "comment-author-img", "src": "http://i.imgur.com/Qr71crq.jpg" }),
                                    m("button", { "class": "btn btn-sm btn-primary" },
                                        " Post Comment "
                                    )
                                ])
                            ]),
                            m("div", { "class": "card" }, [
                                m("div", { "class": "card-block" },
                                    m("p", { "class": "card-text" },
                                        "With supporting text below as a natural lead-in to additional content."
                                    )
                                ),
                                m("div", { "class": "card-footer" }, [
                                    m("a", { "class": "comment-author", "href": "" },
                                        m("img", { "class": "comment-author-img", "src": "http://i.imgur.com/Qr71crq.jpg" })
                                    ),
                                    " ",
                                    m.trust("&nbsp;"),
                                    " ",
                                    m("a", { "class": "comment-author", "href": "" },
                                        "Jacob Schmidt"
                                    ),
                                    m("span", { "class": "date-posted" },
                                        "Dec 29th"
                                    )
                                ])
                            ]),
                            m("div", { "class": "card" }, [
                                m("div", { "class": "card-block" },
                                    m("p", { "class": "card-text" },
                                        "With supporting text below as a natural lead-in to additional content."
                                    )
                                ),
                                m("div", { "class": "card-footer" }, [
                                    m("a", { "class": "comment-author", "href": "" },
                                        m("img", { "class": "comment-author-img", "src": "http://i.imgur.com/Qr71crq.jpg" })
                                    ),
                                    " ",
                                    m.trust("&nbsp;"),
                                    " ",
                                    m("a", { "class": "comment-author", "href": "" },
                                        "Jacob Schmidt"
                                    ),
                                    m("span", { "class": "date-posted" },
                                        "Dec 29th"
                                    ),
                                    m("span", { "class": "mod-options" }, [
                                        m("i", { "class": "ion-edit" }),
                                        m("i", { "class": "ion-trash-a" })
                                    ])
                                ])
                            ])
                        ])
                    )
                ])
            ]) : null)
};