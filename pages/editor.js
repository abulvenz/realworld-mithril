import m from 'mithril';
export default {
    view: vnode => m("div", { "class": "editor-page" },
        m("div", { "class": "container page" },
            m("div", { "class": "row" },
                m("div", { "class": "col-md-10 offset-md-1 col-xs-12" },
                    m("form",
                        m("fieldset", [
                            m("fieldset", { "class": "form-group" },
                                m("input", { "class": "form-control form-control-lg", "type": "text", "placeholder": "Article Title" })
                            ),
                            m("fieldset", { "class": "form-group" },
                                m("input", { "class": "form-control", "type": "text", "placeholder": "What's this article about?" })
                            ),
                            m("fieldset", { "class": "form-group" },
                                m("textarea", { "class": "form-control", "rows": "8", "placeholder": "Write your article (in markdown)" })
                            ),
                            m("fieldset", { "class": "form-group" }, [
                                m("input", { "class": "form-control", "type": "text", "placeholder": "Enter tags" }),
                                m("div", { "class": "tag-list" })
                            ]),
                            m("button", { "class": "btn btn-lg pull-xs-right btn-primary", "type": "button" },
                                " Publish Article "
                            )
                        ])
                    )
                )
            )
        )
    )
};