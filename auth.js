// jshint esversion: 6

import jwt_decode from "jwt-decode";
import m from "mithril";
import s from "./settings";

let username = "";
let email = "";
let password = "";
let user = null;
let expMillis = -1;

const refresh = (cb, errcb) => {
    if (email === "" || password === "") return;
    m.request({
        body: {
            user: {
                email: email,
                password: password
            }
        },
        url: s.url("/users/login"),
        method: "post"
    }).then(response => {
        user = response.user;
        let ttt = jwt_decode(user.token);
        expMillis = ttt.exp * 1000;
        if (cb) cb();
        setTimeout(refresh, -Date.now() + expMillis - 100);
    }).catch(err => {
        errcb && errcb(err.response);
    });
};

export default {
    sessionRunningMillis: () => expMillis,
    login: refresh,
    logout: () => {
        m.request({
            method: "post",
            url: s.url("/users/logout")
        }).then(response => (token = null));
    },
    signup: () =>
        m.request({
            body: {
                user: {
                    username,
                    email,
                    password,
                }
            },
            url: s.url("/users"),
            method: "post"
        }),
    isLoggedIn: () => {
        return user !== null;
    },
    // token: () => {
    //     return token;
    // },
    username: () => username,
    setUsername: username_ => { if (!!username_ && username_ !== "") username = username_; },
    setEmail: email_ => {
        if (!!email_ && email_ !== "") email = email_;
    },
    setPassword: password_ => {
        if (!!password_ && password_ !== "") password = password_;
    },
    request: options => {
        options.url = s.url(options.url);
        let headers = options.headers || {};
        if (user !== null) headers.Authorization = "Token " + user.token;
        options.headers = headers;
        return m.request(options);
    },
    debug: () => {
        return {
            view: vnode =>
                m('pre', JSON.stringify({
                    email,
                    password
                }))
        }
    }
};