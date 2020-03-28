import m from 'mithril';
import auth from '../auth';

let lastResponse = {};

const setLastResponse = response => {
    lastResponse = response;
    m.redraw();
};

export default {
    view: vnode => m("div", { "class": "auth-page" },
        m("div", { "class": "container page" },
            m("div", { "class": "row" },
                m("div", { "class": "col-md-6 offset-md-3 col-xs-12" }, [
                    m("h1", { "class": "text-xs-center" },
                        "Sign up"
                    ),
                    m("p", { "class": "text-xs-center" },
                        m(m.route.Link, { "href": "/login" },
                            "Have an account?"
                        )
                    ),
                    m("ul", { "class": "error-messages" },
                        m("li",
                            "That email is already taken", m("pre", JSON.stringify(lastResponse))
                        )
                    ),
                    m("form", [
                        m("fieldset", { "class": "form-group" },
                            m("input", {
                                oninput: e => auth.setUsername(e.target.value),
                                value: auth.username(),
                                "class": "form-control form-control-lg",
                                "type": "text",
                                "placeholder": "Your Name"
                            })
                        ),
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
                                onclick: e => auth.signup()
                                    .then(setLastResponse)
                                    .catch(setLastResponse),
                                "class": "btn btn-lg btn-primary pull-xs-right"
                            },
                            " Sign up "
                        )
                    ])
                ])
            )
        )
    )
}