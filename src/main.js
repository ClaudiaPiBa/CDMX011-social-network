
  // Este es el punto de entrada de tu aplicacion
import { Home } from './components/home.js';
import { Register } from './components/register.js';
import { Login } from './components/login.js';

const rootDiv = document.getElementById('root');
const routes = {
    '/': Login,
    '/register': Register,
    '/home' : Home
};
export const onNavigate = (pathname) => {
  window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
  );
  while(rootDiv.firstChild) {
      rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.append(routes[pathname]());
};
const component = routes[window.location.pathname];
window.onpopstate = () => {
    rootDiv.append(component());
}
rootDiv.append(component());  