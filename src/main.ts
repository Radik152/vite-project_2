import { Main } from "./pages/Main";
import { Profile } from "./pages/Profile";
import { NotFound } from "./pages/NotFound";

const ROUTES: Record<string, string> = {
    '/not': NotFound(),
    '/profile': Profile(),
    '/': Main(),
}

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');

    if (root) {
        // root.innerHTML = Main()({text: '123' }); // Пустой объект для props
        const component = ROUTES[window.location.pathname] || NotFound();
        root.innerHTML = component;
    }

})