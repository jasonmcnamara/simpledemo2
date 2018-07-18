import views from '../../src/views/views';

const popstatehandler = () => {
    window.addEventListener('popstate', () => {
        console.log('onpopstatehandler is firing');
        console.log(location.pathname.split('/'));
        const thepath = location.pathname.split('/');
        console.log('From popstate: '+thepath);
    });
    return popstatehandler;
}

export default popstatehandler;