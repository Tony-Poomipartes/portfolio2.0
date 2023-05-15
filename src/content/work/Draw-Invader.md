---
title: Draw Invader
publishDate: 2022-14-11 00:00:00
img: /assets/project/draw-invader.png
img_alt: image de la page d'acceuil du site Draw invader
description: |
  Draw Invader est un jeu crée uniquement en front avec le simple ajout du moteur de template ejs pour la création de route et l'hébergement.
front: |
  Le but du jeu est de crée une grille de la taille de pixel que l'on souhaite et de crée notre alien via une palette de couleurs. 
back:  
  L'objectif de se projet était de travailler la manipulation du DOM dans sa globalité avec la création d'élément, utilisation des boucles, écouteurs d'événements...
tags:
  - HTML
  - CSS
  - DOM
  - EJS
  - Node.js
  - Express
---
#### Introduction

Draw Invader est un fascinant jeu de dessin en pixel qui vous permet de laisser libre cours à votre créativité. Le concept est simple : vous avez la possibilité de créer des motifs en utilisant une grille personnalisable avec une taille définie, ainsi qu'une palette de couleurs pour choisir la teinte de chaque pixel. L'objectif ultime est de concevoir votre propre alien en combinant les pixels de manière artistique.

Ce jeu est entièrement développé en front-end, ce qui signifie que toute l'expérience se déroule directement dans le navigateur. Le moteur de template EJS est utilisé pour faciliter la création des routes et l'hébergement du jeu en ligne.

Lorsque vous commencez une partie, vous pouvez spécifier la taille de la grille en choisissant le nombre de pixels horizontaux et verticaux. Ensuite, à l'aide de la palette de couleurs, vous pouvez sélectionner les nuances qui correspondent le mieux à votre vision artistique. En plaçant les pixels un par un sur la grille, vous pouvez créer des formes, des motifs et des dessins complexes, y compris votre propre alien personnalisé.

L'interface utilisateur conviviale vous permet de naviguer facilement entre les options de grille, de taille et de couleur. Vous pouvez également sauvegarder et partager vos créations avec d'autres joueurs.

En somme, Draw Invader est bien plus qu'un simple jeu de dessin en pixel. C'est une expérience immersive qui allie créativité, exploration et partage. Prêt à donner vie à votre propre alien pixelisé ? Lancez-vous dès maintenant dans l'aventure artistique de Draw Invader !

##### J'ai travaillé sur les axes suivants

Voici une description technique du fonctionnement du projet :

Le code commence par créer un objet app qui regroupe toutes les fonctionnalités du jeu. Cet objet contient les éléments DOM nécessaires pour le rendu, tels que invader (élément avec l'ID "invader" où le jeu est affiché), ainsi que des paramètres par défaut pour la taille de la grille, la taille des pixels et la couleur sélectionnée.

Ensuite, plusieurs fonctions sont définies pour créer la grille, les pixels, gérer les événements de clic sur les pixels, créer le formulaire de configuration, créer la palette de couleurs, et initialiser le jeu.

La fonction createGrid est responsable de la création de la grille en ajoutant des pixels à l'élément gridElem en fonction de la taille de la grille et de la taille des pixels spécifiées. Elle écoute également les événements de clic sur la grille.

La fonction createPixel crée un pixel avec la taille spécifiée et l'ajoute au conteneur fourni.

La fonction onPixelClick est l'événement déclenché lorsqu'un pixel est cliqué. Elle met à jour la couleur du pixel en fonction de la couleur sélectionnée dans la palette.

La fonction createForm crée un formulaire de configuration avec des champs pour la taille de la grille et la taille des pixels. Lorsque le formulaire est soumis, la fonction onFormSubmit est appelée pour mettre à jour la grille avec les nouvelles valeurs.

La fonction createPalette crée une palette de couleurs en fonction des styles définis dans l'objet app. Lorsqu'une couleur est sélectionnée dans la palette, la fonction onSwatchClick est appelée pour mettre à jour la couleur sélectionnée.

Enfin, la fonction init est appelée pour initialiser le jeu en créant le formulaire, la palette de couleurs et en affichant la grille avec les paramètres par défaut.

L'ensemble du jeu est construit en front-end, avec l'utilisation de JavaScript pur pour la manipulation du DOM et la gestion des événements. Le jeu ne nécessite pas de serveur back-end, il peut être hébergé simplement en utilisant le moteur de template EJS pour la création de routes et l'hébergement.

<!-- ```js
const app = {
  invader: document.getElementById('invader'),
  defaultGridSize: 16,
  defaultPixelSize: 20,
  selectedColor: 'white',
  styles: [
    'black',
    'white',
    'pink',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ],

  //?------------------- creation de la grille--------------
  createGrid: function (gridSize, pixelSize){
    const gridElem = document.createElement('div');
    gridElem.classList.add('grid');
    gridElem.style.width = gridSize * pixelSize + 'px';
    for(let pixelIndex = 0;
     pixelIndex < gridSize * gridSize;
      pixelIndex++){
      app.createPixel(pixelSize, gridElem);
    }
    gridElem.addEventListener('click', app.onPixelClick);
    app.invader.innerHTML = '';
    app.invader.appendChild(gridElem);
  }, 

  //?-------------------creation des pixels----------------
  createPixel: function (pixelSize,container){
    const pixelElem = document.createElement('div');
    pixelElem.classList.add('pixel');
    pixelElem.classList.add('pixel--white');
    pixelElem.style.width = pixelSize + 'px';
    pixelElem.style.height = pixelSize + 'px';
    container.appendChild(pixelElem);
  },

  //?----------------mise sur ecoute de l'evenement-----
  onPixelClick: function (event){

    if(event.target.classList.contains('pixel')){
      const pixel = event.target;
      app.styles.forEach(function(style){
        pixel.classList.remove('pixel--' + style);
      });
      pixel.classList.add('pixel--' + app.selectedColor);
    }
  },

  //?-----------------creation du formulaire--------
  createForm: function (){
    const form = document.querySelector('.configuration');
    app.createInput('Taille de la grille', form);
    app.createInput('Taille des pixels', form);
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Valider';
    form.appendChild(submitBtn);
    form.addEventListener('submit', app.onFormSubmit);
  },

  createInput: function (placeholder, container){
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = placeholder;
    container.appendChild(input);
  },

  onFormSubmit: function (event){
    event.preventDefault();
    const gridSize = parseInt(event.target.querySelector
    ('input:nth-child(1)').value, 10);
    const pixelSize = parseInt(event.target.querySelector
    ('input:nth-child(2)').value, 10);
    if(gridSize && pixelSize){
      app.createGrid(gridSize, pixelSize);
    }
  },

  //?----------------creation d'une palette de couleur-----
  createPalette: function (){
    const paletteElem = document.createElement('div');
    paletteElem.classList.add('palette');
    app.styles.forEach(function(style){
      const colorElem = document.createElement('div');
      colorElem.classList.add(style);
      paletteElem.appendChild(colorElem);
    });
    paletteElem.querySelector
    (`.${app.selectedColor}`).classList.add('active');
    paletteElem.addEventListener('click', app.onSwatchClick);
    document.body.appendChild(paletteElem);
  },

  onSwatchClick: function (event){
    if(!event.target.classList.contains('palette')){
      document.querySelector
      ('.palette .active').classList.remove('active');
      app.selectedColor = event.target.className;
      event.target.classList.add('active');
    }
  },

  //?---------------initialisation des fonctions-----------
  init: function(){
    app.createForm();
    app.createPalette();
    //app.createGridAlt();
    app.createGrid(app.defaultGridSize, app.defaultPixelSize);
  }
};
app.init();
``` -->
