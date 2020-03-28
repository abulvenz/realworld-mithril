import m from 'mithril';
import auth from "../auth"

let data = {
    articles: [],
    articlesCount: 0
};

const length = 10;

const list = () => {
    if (data.articles.length === 0) {
        load();
    }
    return data.articles;
};

let feed = null;

let params = {};

const load = () =>
    auth.request({
        url: feed ? '/articles/feed' : '/articles',
        params
    }).then(r => {
        data = r;
        m.redraw();
    })

const use = (v, fn) => fn(v)

export default {
    list,
    pages: () => data.articlesCount / length,
    setPage: n => {
        if ((n - 1) * length !== params.offset) {
            params.offset = (n - 1) * length;
            load();
        }
    },
    setTag: tag => {
        params.tag = tag;
        load();
    },
    setFeed: feed_ => {
        feed = feed_;
        load();
    },
    bySlug: slug => use(data.articles.find(article => article.slug === slug), article => {
        if (!article) {
            auth.request({ url: '/articles/:slug', params: { slug } }).then(art => {
                data.articles.push(art.article);
                m.redraw();
            });
        }
        return article;
    })
}