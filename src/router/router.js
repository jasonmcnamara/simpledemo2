import linklist from '../../src/linklist/linklist';
import views from '../../src/views/views';

const router = () => {

    const switcher = (url) => {
        switch(url){
        case 'link1':document.querySelector('.layout').innerHTML = '';
                    document.querySelector('.layout').appendChild(views().link1);
                    url ? history.pushState('', '', url) : console.log('not a clicked link');
                    window.scrollTo(0,0);
                    break;
        case 'link2':document.querySelector('.layout').innerHTML = '';
                    document.querySelector('.layout').appendChild(views().link2);
                    url ? history.pushState('', '', url) : console.log('not a clicked link');
                    window.scrollTo(0,0);
                    break;
        case 'link3':document.querySelector('.layout').innerHTML = '';
                    document.querySelector('.layout').appendChild(views().link3);
                    url ? history.pushState('', '', url) : console.log('not a clicked link');
                    window.scrollTo(0,0);
                    break;
        case 'link4':document.querySelector('.layout').innerHTML = '';
                    document.querySelector('.layout').appendChild(views().link4);
                    url ? history.pushState('', '', url) : console.log('not a clicked link');
                    window.scrollTo(0,0);
                    break;
        case 'link5':document.querySelector('.layout').innerHTML = '';
                    document.querySelector('.layout').appendChild(views().link5);
                    url ? history.pushState('', '', url) : console.log('not a clicked link');
                    window.scrollTo(0,0);
                    break;
        case 'contact':console.log('Contact link pushed');
                    document.querySelector('.layout').innerHTML = '';
                    document.querySelector('.layout').appendChild(views().contact);
                    url ? history.pushState('', '', url) : console.log('not a clicked link');
                    break;
        default: document.querySelector('.layout').innerHTML = '';
                 document.querySelector('.layout').appendChild(views().home);
                 // change the next line if your app is hosted in a subfolder
                 //  url ? history.pushState('', '', '/simpledemo2/') : null;
                 url ? history.pushState('', '', '/') : null;
                 window.scrollTo(0,0);
                 break;
    }
}
    // This calls the switcher on the first router call so app shows appropriate path
    // change split index number corresponding to the number of subfolders where your app lives
    // switcher(location.pathname.split('/')[2]);
    // switcher(location.pathname.split('/')[1]);
    switcher();

    const grabAllLinks = (event) => {
        event.target.href ? event.preventDefault() : null;
        event.target.attributes.goto ? switcher(event.target.attributes.goto.value) : null;
    }

    window.addEventListener('click', grabAllLinks);

    return router;
}

export default router;