// jshint esversion: 6

import jwt_decode from "jwt-decode";
import m from "mithril";
import s from "./settings";

let username = "";
let email = "";
let password = "";
let token = null;
let expMillis = -1;

const refresh = cb => {
    if (email === "" || password === "") return;
    m.request({
        data: {
            email: email,
            password: password
        },
        url: s.url("/users/login"),
        method: "post"
    }).then(response => {
        token = response.token;
        let ttt = jwt_decode(token);
        expMillis = ttt.exp * 1000;
        if (cb) cb();
        setTimeout(refresh, -Date.now() + expMillis - 100);
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
        return token !== null;
    },
    token: () => {
        return token;
    },
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
        if (token !== null) headers.Authorization = "Bearer " + token;
        options.headers = headers;
        return m.request({...options });
    },
};