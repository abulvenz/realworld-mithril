import m from 'mithril';
export default vnode => {
    return {
        view: ({ attrs: { article } }) =>
            m(m.route.Link, { "class": "preview-link", "href": `/article/${article.slug}` }, [
                m("h1",
                    article.title
                ),
                m("p",
                    article.description
                ),
                m("span",
                    "Read more..."
                )
            ])

    }
};