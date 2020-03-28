import m from 'mithril';

export default {
    view: vnode => m("div", { "class": "auth-page" },
        m("div", { "class": "container page" },
            m("div", { "class": "row" },
                m("div", { "class": "col-md-6 offset-md-3 col-xs-12" }, [
                    m("h1", { "class": "text-xs-center" },
                        "Sign in"
                    ),
                    m("p", { "class": "text-xs-center" },
                        m(m.route.Link, { "href": "/register" },
                            "Need an account?"
                        )
                    ),
                    m("ul", { "class": "error-messages" },
                        m("li",
                            "That email is already taken"
                        )
                    ),
                    m("form", [
                        m("fieldset", { "class": "form-group" },
                            m("input", { "class": "form-control form-control-lg", "type": "text", "placeholder": "Email" })
                        ),
                        m("fieldset", { "class": "form-group" },
                            m("input", { "class": "form-control form-control-lg", "type": "password", "placeholder": "Password" })
                        ),
                        m("button", { "class": "btn btn-lg btn-primary pull-xs-right" },
                            " Sign in "
                        )
                    ])
                ])
            )
        )
    )
}