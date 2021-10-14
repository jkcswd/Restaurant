import './styles.css';
import homeLoad from './home';
import { initLoad } from './utilities';
import contactLoad from './contact';
import menuLoad from './menu';


const tabListeners = () => {
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');

    home.addEventListener('click', () => {
        initLoad();
        homeLoad();
        tabListeners();
    });
    menu.addEventListener('click', () => {
        initLoad();
        menuLoad();
        tabListeners();
    });
    contact.addEventListener('click', () => {
        initLoad();
        contactLoad();
        tabListeners();
    });
}


initLoad();
homeLoad();
tabListeners();