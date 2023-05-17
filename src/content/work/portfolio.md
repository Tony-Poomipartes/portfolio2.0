---
title: Portfolio 1.0
publishDate: 2023-04-01 00:00:00
img: /assets/project/portfolio.png
img_alt: image de la page d'acceuil de mon premier portfolio.
description: |
  Premier jet d'un site de presentation de mes projets et de mon profil.
front: Une fonctionnalité de burger est ajoutée à la barre de navigation en fonction de la taille de l'écran, et un effet est appliqué pour masquer la barre de navigation lors du défilement.
    
back:  Une fonctionnalité de sélection de thème clair/sombre est implémentée, permettant aux utilisateurs de choisir un thème qui persiste entre les pages.
  
tags:
  - JavaScript
  - ejs
  - CSS
  - Node.js
  - Express
---
**envie de voir le code?** **c'est [ici](https://github.com/Tony-Poomipartes/) !**

#### Introduction

Premier jet d'un site de présentation de mes projets et de mon profil.

#### Les Fonctionalitées

##### menu burger

La fonction menuBurger est chargée de gérer le comportement du menu burger (hamburger) dans une interface utilisateur. Voici une description de son fonctionnement :

1. Tout d'abord, la fonction récupère les éléments du DOM liés au menu burger. Elle sélectionne l'élément du DOM avec la classe "burger" et le stocke dans la variable burger. De même, elle sélectionne l'élément du DOM avec la classe "menu" et le stocke dans la variable menu. Enfin, elle sélectionne l'élément main du DOM et le stocke dans la variable main.
2. Ensuite, la fonction ajoute un écouteur d'événement "click" sur l'élément burger (burger.addEventListener('click', ...)).
3. Lorsque l'événement "click" se produit (c'est-à-dire lorsque l'utilisateur clique sur le burger), la fonction est exécutée.
4. À l'intérieur de la fonction, la classe "active" est ajoutée ou supprimée de l'élément menu en utilisant la méthode classList.toggle('active'). Cela permet d'afficher ou de masquer le menu en fonction de l'état actuel de la classe "active". En d'autres termes, si le menu est déjà affiché, l'appel à classList.toggle('active') le masquera en supprimant la classe "active". Si le menu est caché, l'appel à classList.toggle('active') l'affichera en ajoutant la classe "active".
5. Ensuite, la fonction ajoute un autre écouteur d'événement "click" sur l'élément main du DOM (main.addEventListener('click', ...)).
6. Lorsque l'événement "click" se produit sur le contenu principal (main), la fonction est exécutée. Dans ce cas, la classe "active" est toujours supprimée de l'élément menu en utilisant la méthode classList.remove('active'). Cela garantit que si le menu est affiché, il sera masqué lorsque l'utilisateur clique en dehors du menu.

En résumé, cette fonction permet de gérer l'ouverture et la fermeture du menu burger en ajoutant ou en supprimant la classe "active" sur l'élément menu. Lorsque l'utilisateur clique sur le burger, le menu est affiché ou masqué en fonction de son état actuel. De plus, si l'utilisateur clique en dehors du menu, celui-ci sera automatiquement masqué.
<details>
  <summary>Voir le code</summary>

```js
  menuBurger: function () {
    // Get the elements of the DOM 
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    const main = document.querySelector('main');
    // Add an event listener 'click' on the burger 
    burger.addEventListener('click', () => {
      //Toggle the 'active' class on the menu item to display/hide the menu 
      menu.classList.toggle('active');
    });
//Addition of an event listener 'click' on the main content.
    main.addEventListener('click', (event) => {
      //If the menu item contains the 'active' class, we delet it to hide the menu 
        menu.classList.remove('active');
    });
```

</details>

##### Effet scroll sur la bar de nav

La fonction navScrollEvent est responsable de la gestion de l'événement de défilement (scroll) de la fenêtre, notamment pour animer le menu de navigation en fonction de la position de défilement. Voici une description détaillée de son fonctionnement :

1. Tout d'abord, la fonction initialise une variable lastScroll à 0 pour stocker la position du dernier défilement.
2. Ensuite, la fonction récupère l'élément body du document et le stocke dans la variable body.
3. La fonction récupère la valeur de la page actuelle en utilisant la variable currentPage. Cela peut être fait soit en sélectionnant un élément avec la classe "container" et en récupérant la valeur de son attribut de données currentPage, soit en utilisant une variable locals.context.currentPage. Assurez-vous de décommenter la méthode appropriée en fonction de votre cas d'utilisation.
4. Si la page actuelle n'est pas la page d'accueil ("home"), la fonction ajoute un écouteur d'événement "scroll" à la fenêtre en utilisant la méthode addEventListener.
5. Lorsque l'événement "scroll" se produit, la fonction est exécutée. Un message "test" est affiché dans la console pour indiquer que l'événement a été déclenché avec succès.
6. La fonction récupère la position actuelle du défilement vertical de la fenêtre en utilisant window.pageYOffset et la stocke dans la variable currentScroll.
7. Ensuite, plusieurs conditions sont vérifiées pour déterminer le comportement du menu de navigation en fonction de la position de défilement :
   - Si la position de défilement est en haut de la page (valeur inférieure ou égale à 0), la classe "scroll-up" est supprimée de l'élément body et la position du menu de navigation est réinitialisée.
   - Si la position de défilement est en bas de la page (valeur supérieure à la dernière position de défilement) et que la classe "scroll-down" n'est pas présente sur l'élément body, la classe "scroll-up" est supprimée de l'élément body, la classe "scroll-down" est ajoutée à l'élément body et le menu de navigation est déplacé à l'extérieur de la fenêtre (en utilisant une transformation CSS).
   - Si la position de défilement est en haut de la page (valeur inférieure à la dernière position de défilement) et que la classe "scroll-down" est présente sur l'élément body, la classe "scroll-down" est supprimée de l'élément body, la classe "scroll-up" est ajoutée à l'élément body et le menu de navigation est replacé à sa position initiale (en utilisant une transformation CSS).
8. Enfin, la valeur de la dernière position de défilement (lastScroll) est mise à jour avec la valeur actuelle du défilement (currentScroll).

En résumé, cette fonction gère l'animation du menu de navigation en fonction de la position de défilement de la fenêtre. Elle ajoute et supprime des classes sur l'élément body pour indiquer si l'utilisateur est en train de faire défiler vers le haut ou vers le bas, et déplace le menu de navigation en
<details>
  <summary>Voir le code</summary>
  
```js
  navScrollEvent: function () {
    //Variable to store the position of the last scroll.
    let lastScroll = 0;
    const body = document.body;
    // const currentPage = document.querySelector(".container").dataset.currentPage;
    const currentPage = locals.context.currentPage;
    //if the current page is not "home"
    //Add a "scroll" event to the window.
  if (currentPage !== "home") {
      window.addEventListener("scroll", () => {
        console.log("test");
        //get the current position of the scroll.
        const currentScroll = window.pageYOffset;
  //If the current position of the scroll is at the top of the page, the scroll-up class is removed from the body. We reinitializ the position of the navigation menu .
        if (currentScroll <= 0) {
          body.classList.remove("scroll-up");
          nav.style.transform = "translateY(0%)";
        }
  //If the current position of the scroll is at the bottom of the page and the class "scroll-down" is not present on the body.
  //The "scroll-up" class is removed from the body, we add the "scroll-down" class to it and the navigation menu is moved outside the window.
        if (
          currentScroll > lastScroll &&
          !body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-up");
          body.classList.add("scroll-down");
          nav.style.transform = "translateY(-130%)";
        }
  //If the current position of the scroll is at the top of the page and the scroll-down class is present on the body.
  //The "scroll-down" class is removed from the body, the "scroll-up" class is added to the body and the navigation menu is replaced at its initial position.
        if (
          currentScroll < lastScroll &&
          body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-down");
          body.classList.add("scroll-up");
          nav.style.transform = "translateY(0%)";
        }
        //The value of the position of the last scroll is updated.
        lastScroll = currentScroll;
      });
    }
  },
```

</details>

##### Changement de thème

La fonction themeSwitch est responsable de la gestion du changement de thème sur une page. Voici une description détaillée de son fonctionnement :

1. Tout d'abord, la fonction sélectionne l'élément déclencheur du changement de thème en utilisant son ID, qui est "theme-switch", et stocke cet élément dans la variable switchTheme.
2. Ensuite, la fonction récupère le thème actuel dans le stockage local en utilisant la clé "theme" et le stocke dans la variable theme.
3. Si le thème est défini sur "white-theme", la fonction ajoute la classe "white-theme" à l'élément body. Cela permet d'appliquer le thème blanc sur la page si c'était le dernier thème sélectionné.
4. Ensuite, la fonction ajoute un écouteur d'événements "click" à l'élément switchTheme. Cela signifie que lorsque l'utilisateur clique sur cet élément, une fonction sera exécutée.
5. Lorsque l'événement "click" se produit, la fonction utilise la méthode toggle pour ajouter ou supprimer la classe "white-theme" de l'élément body. Cela permet de basculer entre les thèmes noir et blanc lorsque l'utilisateur clique sur l'élément switchTheme.
6. Si l'élément body a maintenant la classe "white-theme" après le changement de thème, la fonction enregistre le thème "white-theme" dans le stockage local en utilisant la clé "theme". Cela permet de mémoriser le dernier thème sélectionné par l'utilisateur, afin que le même thème soit appliqué lors de la prochaine visite de la page.
7. Si l'élément body n'a pas la classe "white-theme" après le changement de thème, la fonction enregistre une chaîne vide dans le stockage local en utilisant la clé "theme". Cela signifie qu'aucun thème spécifique n'est sélectionné et le thème par défaut sera utilisé lors de la prochaine visite.  

En résumé, cette fonction permet de basculer entre les thèmes noir et blanc en ajoutant ou supprimant une classe sur l'élément body, et elle utilise le stockage local pour mémoriser le dernier thème sélectionné par l'utilisateur.
<details>
  <summary>Voir le code</summary>
  
```js
  themeSwitch: function () {
    // select the element that triggers the theme switch.
    const switchTheme = document.getElementById("theme-switch");
    const body = document.body;
    // get the theme in the local storage
    let theme = localStorage.getItem("theme");
  // if the theme is set to "white theme"then we add a class "white theme" on the body
    if (theme === "white-theme") {
      body.classList.add("white-theme");
    }
  //we put an event listener on the "switchTheme"
    switchTheme.addEventListener("click", () => {
      //when we clic, it add or remove the class
      body.classList.toggle("white-theme");
  //if the body as the "white-theme" class , then we store it in the local storage
      if (body.classList.contains("white-theme")) {
        localStorage.setItem("theme", "white-theme");
      } else {
        //else we delete it with an empty string
        localStorage.setItem("theme", "");
      }
    });
  },
```

</details>
