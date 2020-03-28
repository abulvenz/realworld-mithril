//let server = "http://localhost:8080";
let server = "https://conduit.productionready.io/api";
let debug = false;

export default {
    server,
    url: url => server + url,
    whenDebug: cb => (debug ? cb && cb() : null)
};