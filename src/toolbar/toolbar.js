import '../../src/toolbar/toolbar.css';

import '../../src/toolbar/triplebarlistener/triplebarlistener';
import triplebarlistener from '../../src/toolbar/triplebarlistener/triplebarlistener';
import sidedrawer from '../../src/sidedrawer/sidedrawer';

class toolbar {
    constructor(){
        this.triplebar = document.createElement('div');
        this.triplebarspan = document.createElement('span');
        this.triplebarspan.className += ' triplebar';
        this.triplebarspan.textContent = '\u2261';
        

        this.menubtn = document.createElement('div');

        this.toolbar = document.createElement('div');

        this.logo = document.createElement('div');
        this.logolink = document.createElement('a');


        this.contactdiv = document.createElement('div');
        this.contactdiv.className += ' contactdiv';
        this.contact = document.createElement('a');
        this.contact.textContent = 'Contact';
        this.contact.href = 'contact';
        this.contact.setAttribute('goto', 'contact');
        
    }

    maketoolbar(div) {
        this.toolbar.className += ' toolbar';
        this.triplebarspan.addEventListener('click', triplebarlistener);
        this.triplebar.appendChild(this.triplebarspan);
        this.menubtn.appendChild(this.triplebar);
        this.menubtn.className += ' menubtn';
        this.logolink.textContent = 'Logo';
        this.logolink.className += ' logolink';
        this.logolink.setAttribute('goto', 'home');
        this.logolink.style.cursor = 'pointer';
        this.logo.appendChild(this.logolink);

        // this.logo.textContent = 'Logo';
        this.logo.className += ' logo';
        this.contact.className += ' contact';
        this.toolbar.appendChild(this.menubtn);
        this.toolbar.appendChild(this.logo);
        this.contactdiv.appendChild(this.contact);
        this.toolbar.appendChild(this.contactdiv);
        
        div.appendChild(this.toolbar);
        div.appendChild(sidedrawer());
    }

    
}

export default toolbar;