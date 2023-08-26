import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function(){
  const burger = document?.querySelector('[data-burger]');
  const menu = document?.querySelector('[data-menu]');
  const menuItems = document?.querySelectorAll('[data-menu-item]');
  const overlay = document?.querySelector('[data-menu-overlay]');

  burger?.addEventListener('click', (e) => {
    burger?.classList.toggle('burger--active');
    menu?.classList.toggle('menu--active');
    overlay.classList.toggle('overlay--active');

    if (menu?.classList.contains('menu--active')) {
      burger?.setAttribute('aria-expanded', 'true');
      burger?.setAttribute('aria-label', 'Закрыть меню');
      menu.style.display = "block";
      setTimeout(() => {
        menu.style.transform = "translate(-50%, 0%)";
      }, 100);
      disableScroll();
    } else {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      menuItems?.forEach(el => {
        el.classList.remove('item--active');
      });
      menu.style.transform = "translate(-50%, -250%)";
      setTimeout(() => {
        menu.style.display = "none";
      }, 400);
      enableScroll();
    }
  });

  overlay?.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded', 'false');
    burger?.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    menuItems?.forEach(el => {
      el.classList.remove('item--active');
    });
    overlay.classList.remove('overlay--active');
    menu.style.transform = "translate(-50%, -250%)";
      setTimeout(() => {
        menu.style.display = "none";
      }, 400);
    enableScroll();
  });

  menuItems?.forEach(el => {
    el.addEventListener('click', () => {
      el.classList.toggle('item--active');
    });
  });
})();
