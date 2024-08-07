const elHeader = document.querySelector('.site-header');
const elMainContent = document.querySelector('.main-content');
const elJsMobileBtn = document.querySelector('.js-mobile-btn');
const elSitenav = document.querySelector('.sitenav');

// SCROLL
window.onscroll = function() {
    const offset = elHeader.offsetHeight;
    if (window.scrollY > offset - 20) {
        elHeader.classList.add('header-border');
    } else if (window.scrollY < offset - 20) {
        elHeader.classList.remove('header-border');
    }
}

// FUNCTION TO UPDATE MAIN CONTENT'S MARGIN-TOP BASED ON HEADER'S HEIGHT
function updateMainContentMargin() {
    const headerHeight = elHeader.offsetHeight;
    elMainContent.style.marginTop = `${headerHeight}px`;
}

// UPDATE MAIN CONTENT'S MARGIN INITIALLY
updateMainContentMargin();

// OPTIONAL: UPDATE MAIN CONTENT'S MARGIN IF THE HEADER'S HEIGHT CHANGES DYNAMICALLY
new ResizeObserver(updateMainContentMargin).observe(elHeader);

// MENU-CLICK
elJsMobileBtn.addEventListener('click', function () {
    elSitenav.classList.toggle('open-menu');
});

// TOUCH-RIGHT
let startX = 0;

if (elSitenav) {
    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }
    
    function handleTouchMove(event) {
        let touch = event.touches[0];
        let change = touch.clientX - startX;
        
        if (change > 50) { // if swiped right by more than 50px
            elSitenav.classList.remove('open-menu');
        }
    }
    
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
}