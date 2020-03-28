import m from 'mithril';
import auth from '../auth';

let error = null;

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
                        ),
                        m("pre", JSON.stringify(error, null, 2))
                    ),
                    m("form", [
                        m("fieldset", { "class": "form-group" },
                            m("input", {
                                oninput: e => auth.setEmail(e.target.value),
                                "class": "form-control form-control-lg",
                                "type": "text",
                                "placeholder": "Email"
                            })
                        ),
                        m("fieldset", { "class": "form-group" },
                            m("input", {
                                oninput: e => auth.setPassword(e.target.value),
                                "class": "form-control form-control-lg",
                                "type": "password",
                                "placeholder": "Password"
                            })
                        ),
                        m("button", {
                                onclick: e => auth.login(() => m.route.set('/'), err => error = err),
                                "class": "btn btn-lg btn-primary pull-xs-right"
                            },
                            " Sign in "
                        ),
                        m(auth.debug)
                    ])
                ])
            )
        )
    )
};