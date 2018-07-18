import lorem from '../../src/lorem/lorem';

const views = () => {

    console.log('testing');

    const views = {};

    views.link1 = document.createElement('div');
    const header1 = document.createElement('h1');
    header1.textContent = 'Link 1 View';
    views.link1.appendChild(header1);
    views.link1.appendChild(lorem());

    views.link2 = document.createElement('div');
    const header2 = document.createElement('h1');
    header2.textContent = 'Link 2 View';
    views.link2.appendChild(header2);
    views.link2.appendChild(lorem());

    views.link3 = document.createElement('div');
    const header3 = document.createElement('h1');
    header3.textContent = 'Link 3 View';
    views.link3.appendChild(header3);
    views.link3.appendChild(lorem());

    views.link4 = document.createElement('div');
    const header4 = document.createElement('h1');
    header4.textContent = 'Link 4 View';
    views.link4.appendChild(header4);
    views.link4.appendChild(lorem());

    views.link5 = document.createElement('div');
    const header5 = document.createElement('h1');
    header5.textContent = 'Link 5 View';
    views.link5.appendChild(header5);
    views.link5.appendChild(lorem());

    views.home = document.createElement('div');
    const headerhome = document.createElement('h1');
    headerhome.textContent = 'Home Link View';
    views.home.appendChild(headerhome);
    views.home.appendChild(lorem());
    

    views.contact = document.createElement('div');

    const contactheader = document.createElement('h1');
    contactheader.textContent = 'Contact View';

    const contactpara = document.createElement('p');
    contactpara.textContent = 'Add some form soon';

    views.contact.appendChild(contactheader);
    views.contact.appendChild(contactpara);

    

    return views;

}

export default views;