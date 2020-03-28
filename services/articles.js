import m from 'mithril';
import auth from "../auth"

let articles = [];
let articlesCount = 0;
const length = 10;

const list = () => {
    if (articles.length === 0) {
        load();
    }
    return articles;
};

let params = {};

const load = () =>
    auth.request({
        url: params.feed ? '/articles/feed' : '/articles',
        params
    }).then(r => {
        articles = r.articles;
        articlesCount = r.articlesCount;
        m.redraw();
    })

const use = (v, fn) => fn(v)

export default {
    list,
    pages: () => articlesCount / length,
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
    setFeed: feed => {
        params.feed = feed;
        load();
    },
    bySlug: slug => use(articles.find(article => article.slug === slug), article => {
        if (!article) {
            auth.request({ url: '/articles/:slug', params: { slug } }).then(art => {
                articles.push(art.article);
                m.redraw();
            });
        }
        return article;
    })
}