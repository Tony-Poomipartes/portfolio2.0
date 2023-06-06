---
title: Deck builder
publishDate: 2022-14-10 00:00:00
img: /assets/project/ff8-deck.png
img_alt: image de la page d'acceuil du site Deck builder.
description: |
  Deck builder est un jeu de construction de deck.
front: |
    manipulation du DOM.
back:  
  Utilisation de session pour conserver le deck.
tags:
  - JavaScript
  - Node.js
  - Express
  - express-session
  - PostgreSQL
  - session
  - ejs

---
**envie de voir le code?** **c'est [ici](https://github.com/Tony-Poomipartes/FF8_deck_builder) !**

### Introduction

Lors d'un exercice de formation, j'ai créé un site web et sa base de données pour un jeu de construction de deck appelé "Deck builder". Le projet utilise les technologies JavaScript, Node.js, Express, express-session et PostgreSQL pour la gestion des données. Le site permet aux utilisateurs de créer leur propre deck de cartes.

#### Structure du code

Le code du projet est organisé en utilisant une architecture MVC (Modèle-Vue-Contrôleur). Le fichier dataMapper.js est responsable de l'accès à la base de données et de la récupération des données des cartes. Le fichier deckController.js contient les méthodes du contrôleur liées à la gestion du deck de cartes.

Le contrôleur deckController contient les méthodes suivantes :

##### deck

La méthode deck est une méthode asynchrone qui est utilisée pour envoyer la liste des cartes du deck à la vue cardList. Si la session de l'utilisateur ne contient pas encore de deck, un tableau vide est créé dans la session. Les cartes du deck sont passées à la vue sous la clé cards, et le titre de la page est défini comme "Liste du deck".

##### addcard

La méthode addcard est une méthode asynchrone qui permet d'ajouter une carte au deck. Elle récupère l'ID de la carte cible à partir des paramètres de la requête. Ensuite, elle recherche si la carte existe déjà dans le deck en utilisant la méthode find sur le tableau req.session.bookmarks. Si la carte n'est pas trouvée, elle est récupérée à partir de la base de données en utilisant dataMapper.getOneCard et ajoutée au tableau req.session.bookmarks si le nombre de cartes dans le deck est inférieur ou égal à 4.

##### delcard

La méthode delcard permet de supprimer une carte du deck. Elle récupère l'ID de la carte cible à partir des paramètres de la requête, puis filtre le tableau req.session.bookmarks en ne conservant que les cartes dont l'ID est différent de l'ID cible. Ensuite, elle redirige l'utilisateur vers la page /deck.

##### Utilisation des sessions

Pour conserver le deck de l'utilisateur, le projet utilise la gestion des sessions avec express-session. Les cartes du deck sont stockées dans la session de l'utilisateur sous la clé bookmarks. Si la session de l'utilisateur n'a pas encore de deck, un tableau vide est initialisé lors de l'accès aux méthodes du contrôleur.

##### Visualisation du code

Si vous souhaitez consulter le code complet du projet, vous pouvez le trouver sur GitHub. N'hésitez pas à explorer le code pour en apprendre davantage sur l'implémentation du jeu de construction de deck.
