const triplebarlistener = (event) => {

    if(!document.querySelector('.showsidedrawer')){
        
        event.stopPropagation();
        document.querySelector('.sidedrawer').className += ' showsidedrawer';
    }
    else{
        document.querySelector('.sidedrawer').classList.remove('showsidedrawer');
    }
    
}

export default triplebarlistener;