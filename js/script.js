$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    animateOut: 'fadeOut',
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        }
    }
});

let list = document.querySelector('#visitas');

list.addEventListener("mouseover", function(event) {
    console.log(event);
})


function desgraca() {
    var el = document.querySelector('#sympla');
    console.log(el);
    el.scrollIntoView({
        behavior: 'smooth'
    });
}

toogleModal = function() {
    var el = document.querySelector('.simple-modal-programacao');
    el.classList.toggle('displayNone');
}

var modalHotelContent = [
    {
        name: "Pestana Convento do Carmo",
        href: "https://www.pestana.com/br/hotel/pestana-convento-do-carmo?gclid=CjwKCAiA0ajgBRA4EiwA9gFOR2c4flyNB4UVIevTvzh25Dyzhll23NdOjxp43bu8nLAW1-sfq7wP8xoCk-QQAvD_BwE&gclsrc=aw.ds",
        img: "img/modal/300ppi/pestana.png"
    },
    {
        name: "Hotel Monte Pascoal",
        href: "www.montepascoalpraiahotel.com.br",
        img: "img/modal/300ppi/pascoal.png"
    },
    {
        name: "Hotel Sol Express",
        href: "www.solexpress.com.br",
        img: "img/modal/300ppi/sol.png"
    },
    {
        name: "Sol Victoria Marina",
        href: "www.solexpress.com.br/hoteis-e.../sol-victoria-marina/index.html",
        img: "img/modal/300ppi/marina.png"
    },
    {
        name: "Grande Hotel Barra",
        href: "https://www.grandehoteldabarra.com.br",
        img: "img/modal/300ppi/grande.png"
    },
    {
        name: "Pousada Colonial Chile",
        href: "https://www.colonialchilehotel.com.br",
        img: "img/modal/300ppi/colonial.png"
    },
    {
        name: "Hostel Hospeda Salvador",
        href: "https://www.hospedasalvador.com.br",
        img: "img/modal/300ppi/hostel.png"
    },
    {
        name: "Pousada Suites do Pelô",
        href: "https://www.suitesdopelo.com",
        img: "img/modal/300ppi/suitesPelo.png"
    },
    {
        name: "Hotel Porto da Barra",
        href: "https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwiYoKDxmY_fAhUL5HcKHYp-DI8YABABGgJlZg&ei=fS4LXI2vK5uD1fAPiYSqyA8&ohost=www.google.com.br&cid=CAESEeD2MZpmvcVqQ9MuaA0i87jU&sig=AOD64_0IVvMS-JIQWL7rD9pgvTsKbLatZQ&q=&sqi=2&ved=2ahUKEwjN4ZbxmY_fAhWbQRUIHQmCCvkQ0Qx6BAgaEAE&adurl=",
        img: "img/modal/300ppi/hpBarra.png"
    },
    {
        name: "Wish Hotel da Bahia",
        href: "https://www.gjphotels.com/ ",
        img: "img/modal/300ppi/wish.png"
    }
];

toogleModalHotel = function() {
    var el = document.querySelector('.simple-modal-hotel');
    el.classList.toggle('displayNone'); 
    
};

populateModal = function(index) {
    var titleModal = document.querySelector('.simple-modal-hotel--title');
    titleModal.innerHTML = modalHotelContent[index].name;

    var imgModal = document.querySelector('.modal-hotel--img');
    imgModal.src = modalHotelContent[index].img;

    var hrefModal = document.querySelector('.modal-hotel--href');
    hrefModal.href = modalHotelContent[index].href;


    toogleModalHotel();
};




//social Header
activateSocialMediaOnScroll = function () {
    lastKnownScrollPosition = 0;
    ticking = false;

    var efficientCheckPosition = UtilityFrontService.debounce(function (e) {

        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {

            window.requestAnimationFrame(function () {
                fixHeader(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;

        }

    }, 500);

    window.addEventListener('scroll', efficientCheckPosition);
}

fixHeader = function (pos) {
    if (pos > 60) {
        window.document.querySelector(".specific--hubschool-header").classList.add('fixed');
    }
    else
        window.document.querySelector(".specific--hubschool-header").classList.remove('fixed');
}