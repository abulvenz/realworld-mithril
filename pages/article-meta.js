import m from 'mithril';

export default {
    view: ({ children, attrs: { article } }) => m("div", { "class": "article-preview" }, [
        m("div", { "class": "article-meta" }, [
            m(m.route.Link, { "href": `/@${article.author.username}` },
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
            m("button", { "class": "btn btn-outline-primary btn-sm pull-xs-right" }, [
                m("i", { "class": "ion-heart" }),
                article.favoritesCount
            ])
        ]),
        children
    ]),
}