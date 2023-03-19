const humburgerMenuIconTag = document.querySelector('.mobileMenuContainer');
const bar1Tag = document.querySelector('.bar1');
const bar2Tag = document.querySelector('.bar2');
const bar3Tag = document.querySelector('.bar3');

const showMenuBeforeTag = document.querySelector('.showMenuBefore');

const openMenuFunciton = ()=> {
    if(humburgerMenuIconTag.classList.contains('isOpened')){
        bar1Tag.classList.remove('rotateBar1');
        bar3Tag.classList.remove('rotateBar3');
        bar2Tag.classList.remove('hideBar2');

        showMenuBeforeTag.classList.remove('showMenu');

        humburgerMenuIconTag.classList.remove('isOpened');

    } else{
        bar1Tag.classList.add('rotateBar1');
        bar3Tag.classList.add('rotateBar3');
        bar2Tag.classList.add('hideBar2');

        showMenuBeforeTag.classList.add('showMenu');

        humburgerMenuIconTag.classList.add('isOpened');
    }
}

humburgerMenuIconTag.addEventListener('click', openMenuFunciton);
