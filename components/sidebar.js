import m from 'mithril';
import tags from '../services/tags';

export default vnode => {
    return {
        view: ({ attrs: { tagClicked } }) => m("div", { "class": "sidebar" }, [
            m("p",
                "Popular Tags"
            ),
            m("div", { "class": "tag-list" }, [
                tags.list().map(tag =>
                    m("a", {
                            "class": "tag-pill tag-default",
                            "href": "",
                            onclick: e => {
                                tagClicked && tagClicked(tag);
                                e.preventDefault();
                            }
                        },
                        tag
                    ),
                )
            ])
        ])

    }
}