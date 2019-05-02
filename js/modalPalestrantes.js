RemovetoogleModalSPeakers = function() {
    var el = document.querySelector('.simple-modal-speaker');
    el.classList.toggle('displayNone');
};

var modalSpeakersContent = [
    {
        name: "Tiana Camardelli",
        bio: "Tribunal de Ética e Disciplina da OAB-BA.",
        img: "img/speakers/tiana.jpg",
    },
    {    
        name: "Padre Manoel Oliveira",
        bio: "Coordenador Nacional da Pastoral do Turismo.",
        img: "img/speakers/padre.jpg",
    },
    { 
        name: "Paulo Atzingen",
        bio: "Fundador do Diário do Turismo.",
        img: "img/speakers/mistico.jpg",
    },
    { 
        name: "André Sena",
        bio: "Membro do projeto GoOn - Turismo Inteligente",
        img: "img/speakers/andre.jpg",
    },
    { 
        name: "Marcus Casaes",
        bio: "Membro do GoOn - Turismo Inteligente.",
        img: "img/speakers/marcus.jpg",
    },
    { 
        name: "Alice Cristina Vargas",
        bio: "Gerente de Marketing e Comunicação do Sebrae",
        img: "img/speakers/alice.jpg",
    },
    { 
        name: "Mãe Neide",
        bio: "Embaixadora da Gastronomia Afro Indígena",
        img: "img/speakers/neide.jpg",
    },
    { 
        name: "Sonea Stival",
        bio: "Coordenadora de Gastronomia Goiás Turismo",
        img: "img/speakers/sonea.jpg",
    },
    { 
        name: "Cláudio Santos",
        bio: "Presidente do Instituto Gestar Brasil, Diretor da Next Opinion Portugal",
        img: "img/speakers/claudio.jpg",
        
    },
];

populateModalSpeaker = function(index) {
    var titleModal = document.querySelector('.simple-modal-speaker--title');
    titleModal.innerHTML = modalSpeakersContent[index].name;
    
    var datesModal = document.querySelector('.simple-modal-speaker--bio');
    datesModal.innerHTML = modalSpeakersContent[index].bio;

    var imgModal = document.querySelector('.simple-modal-speaker--img');
    imgModal.src = modalSpeakersContent[index].img;

    toogleModalSPeakers();
};