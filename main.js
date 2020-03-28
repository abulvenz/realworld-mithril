import m from 'mithril';
import navbar from './components/navbar';
import router from './router';
import home from './pages/home';
import article from './pages/article';
import register from './pages/register';
import login from './pages/login';
import profile from './pages/profile';
import favorites from './pages/profile';
import settings from './pages/settings';
import editor from './pages/editor';

const routes = {
    '/': home,
    '/article/:slug': article,
    '/register': register,
    '/login': login,
    '/@:username': profile,
    '/@:username/favorites': favorites,
    '/settings': settings,
    '/editor': editor,
    '/editor/:slug': editor
};

m.route.prefix = '#';

m.mount(document.body, {
    view: vnode => [
        m(navbar),
        m(router, { routes }),
        m.trust(`    
  <footer>
      <div class="container">
          <a href="/" class="logo-font">conduit</a>
          <span class="attribution">
          An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
      </div>
  </footer>
  `)
    ]
})