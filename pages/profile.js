import m from 'mithril';
export default {
    view: vnode => m("div", { "class": "profile-page" }, [
        m("div", { "class": "user-info" },
            m("div", { "class": "container" },
                m("div", { "class": "row" },
                    m("div", { "class": "col-xs-12 col-md-10 offset-md-1" }, [
                        m("img", { "class": "user-img", "src": "http://i.imgur.com/Qr71crq.jpg" }),
                        m("h4",
                            "Eric Simons"
                        ),
                        m("p",
                            " Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games "
                        ),
                        m("button", { "class": "btn btn-sm btn-outline-secondary action-btn" }, [
                            m("i", { "class": "ion-plus-round" }),
                            " ",
                            m.trust("&nbsp;"),
                            " Follow Eric Simons "
                        ])
                    ])
                )
            )
        ),
        m("div", { "class": "container" },
            m("div", { "class": "row" },
                m("div", { "class": "col-xs-12 col-md-10 offset-md-1" }, [
                    m("div", { "class": "articles-toggle" },
                        m("ul", { "class": "nav nav-pills outline-active" }, [
                            m("li", { "class": "nav-item" },
                                m("a", { "class": "nav-link active", "href": "" },
                                    "My Articles"
                                )
                            ),
                            m("li", { "class": "nav-item" },
                                m("a", { "class": "nav-link", "href": "" },
                                    "Favorited Articles"
                                )
                            )
                        ])
                    ),
                    m("div", { "class": "article-preview" }, [
                        m("div", { "class": "article-meta" }, [
                            m("a", { "href": "" },
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
                            m("button", { "class": "btn btn-outline-primary btn-sm pull-xs-right" }, [
                                m("i", { "class": "ion-heart" }),
                                " 29 "
                            ])
                        ]),
                        m("a", { "class": "preview-link", "href": "" }, [
                            m("h1",
                                "How to build webapps that scale"
                            ),
                            m("p",
                                "This is the description for the post."
                            ),
                            m("span",
                                "Read more..."
                            )
                        ])
                    ]),
                    m("div", { "class": "article-preview" }, [
                        m("div", { "class": "article-meta" }, [
                            m("a", { "href": "" },
                                m("img", { "src": "http://i.imgur.com/N4VcUeJ.jpg" })
                            ),
                            m("div", { "class": "info" }, [
                                m("a", { "class": "author", "href": "" },
                                    "Albert Pai"
                                ),
                                m("span", { "class": "date" },
                                    "January 20th"
                                )
                            ]),
                            m("button", { "class": "btn btn-outline-primary btn-sm pull-xs-right" }, [
                                m("i", { "class": "ion-heart" }),
                                " 32 "
                            ])
                        ]),
                        m("a", { "class": "preview-link", "href": "" }, [
                            m("h1",
                                "The song you won't ever stop singing. No matter how hard you try."
                            ),
                            m("p",
                                "This is the description for the post."
                            ),
                            m("span",
                                "Read more..."
                            ),
                            m("ul", { "class": "tag-list" }, [
                                m("li", { "class": "tag-default tag-pill tag-outline" },
                                    "Music"
                                ),
                                m("li", { "class": "tag-default tag-pill tag-outline" },
                                    "Song"
                                )
                            ])
                        ])
                    ])
                ])
            )
        )
    ])
};