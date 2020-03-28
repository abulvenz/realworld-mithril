import m from 'mithril';
import auth from "../auth"

let tags = [];

const update = () => auth.request({ url: '/tags' }).then(r => {
    tags = r.tags;
    m.redraw()
});

export default {
    list: () => update() && tags
}