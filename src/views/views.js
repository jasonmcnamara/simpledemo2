import linklist from '../../src/linklist/linklist';
import lorem from '../../src/lorem/lorem';

const views = () => {

    const links = linklist();

    const views = {};

    views.link1 = document.createElement('div');
    const para1 = document.createElement('h1');
    para1.textContent = 'Link 1';
    views.link1.appendChild(para1);
    views.link1.appendChild(lorem());

    views.link2 = document.createElement('div');
    const para2 = document.createElement('h1');
    para2.textContent = 'Link 2';
    views.link2.appendChild(para2);
    views.link2.appendChild(lorem());

    views.link3 = document.createElement('div');
    const para3 = document.createElement('h1');
    para3.textContent = 'Link 3';
    views.link3.appendChild(para3);
    views.link3.appendChild(lorem());

    views.link4 = document.createElement('div');
    const para4 = document.createElement('h1');
    para4.textContent = 'Link 4';
    views.link4.appendChild(para4);
    views.link4.appendChild(lorem());

    views.link5 = document.createElement('div');
    const para5 = document.createElement('h1');
    para5.textContent = 'Link 5';
    views.link5.appendChild(para5);
    views.link5.appendChild(lorem());

    views.home = document.createElement('div');
    const parahome = document.createElement('h1');
    parahome.textContent = 'Home';
    views.home.appendChild(parahome);
    views.home.appendChild(lorem());

    return views;

}

export default views;