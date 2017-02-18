$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['Works', 'AirFrance', 'Boucheron', 'H2O', 'Memento', 'Hermes'],
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        responsiveWidth: 0,
        responsiveHeight: 0,
        responsiveSlides: false,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        lazyLoading: false,

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterResponsive: function(isResponsive){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});

var container = document.querySelector('.Container-first'),
	burger = document.querySelector('.Menu_Burger');

// Burger Menu

function openMenu(){
	container.style.display = "none";
	burger.style.display = "block";
    document.body.classList.add('-menuOpen');
}

function closeMenu(){
	burger.style.display = "none";
	container.style.display = "block";
}

function height(bloc){
	var hauteur;

	if( typeof( window.innerWidth ) == 'number' )
		hauteur = window.innerHeight;
	else if( document.documentElement && document.documentElement.clientHeight )
		hauteur = document.documentElement.clientHeight;

	document.body.style.height = hauteur+"px";
}

window.onload = function(){ height("page") };
window.onresize = function(){ height("page") };
