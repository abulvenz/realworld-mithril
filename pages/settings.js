import m from 'mithril';
export default {
    view: vnode => m("div", { "class": "settings-page" },
        m("div", { "class": "container page" },
            m("div", { "class": "row" },
                m("div", { "class": "col-md-6 offset-md-3 col-xs-12" }, [
                    m("h1", { "class": "text-xs-center" },
                        "Your Settings"
                    ),
                    m("form",
                        m("fieldset", [
                            m("fieldset", { "class": "form-group" },
                                m("input", { "class": "form-control", "type": "text", "placeholder": "URL of profile picture" })
                            ),
                            m("fieldset", { "class": "form-group" },
                                m("input", { "class": "form-control form-control-lg", "type": "text", "placeholder": "Your Name" })
                            ),
                            m("fieldset", { "class": "form-group" },
                                m("textarea", { "class": "form-control form-control-lg", "rows": "8", "placeholder": "Short bio about you" })
                            ),
                            m("fieldset", { "class": "form-group" },
                                m("input", { "class": "form-control form-control-lg", "type": "text", "placeholder": "Email" })
                            ),
                            m("fieldset", { "class": "form-group" },
                                m("input", { "class": "form-control form-control-lg", "type": "password", "placeholder": "Password" })
                            ),
                            m("button", { "class": "btn btn-lg btn-primary pull-xs-right" },
                                " Update Settings "
                            )
                        ])
                    )
                ])
            )
        )
    )
};