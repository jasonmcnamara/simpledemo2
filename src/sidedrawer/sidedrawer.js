import '../../src/sidedrawer/sidedrawer.css';



const sidedrawer = () => {

    const sidedrawer = document.createElement('div');
    sidedrawer.className = ' sidedrawer';

    const nav = document.createElement('ul');

    const listitem = [];

    const linkitem = [];

    const linklist = [];
    linklist.push('home');
    linklist.push('link1');
    linklist.push('link2');
    linklist.push('link3');
    linklist.push('link4');
    linklist.push('link5');

    const linkelarray = linklist.map((value) => {
        listitem[value] = document.createElement('li');
        listitem[value].className += ' path'+value;
        linkitem[value] = document.createElement('a');
        linkitem[value].className += ' atag'+value;
        linkitem[value].textContent = value;
        linkitem[value].setAttribute('href', value);
        linkitem[value].setAttribute('goto', value);
        // linkitem[value].addEventListener('click', linkhandler);
        listitem[value].appendChild(linkitem[value]);
        return listitem[value];
    })

    linkelarray.map((value) => {
        nav.appendChild(value);
    })

    sidedrawer.appendChild(nav);

    return sidedrawer;
    
}

export default sidedrawer;