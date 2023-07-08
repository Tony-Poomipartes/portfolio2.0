---
title: O'délices
publishDate: 2023-14-03 00:00:00
img: /assets/project/odelice.png
img_alt: image de la page d'acceuil du site odelice
description: |
  Odélices est un site de recette fullstack.  
  L'objectif de ce projet était de voir de nombreux axes front et back d'un projet. 
front: |
  Côté Front :consommation d'API en front avec le framework React, manipulation du DOM et des événements.
back:  
  Côté back :création d'une API pour afficher les recettes en front, création d'une base de données PostgreSQL pour les utilisateurs, la création d'un utilisateur, la sécurité de celui-ci en cryptant ses données ou encore la gestion de session permettant l'affichage d'un profil et sa modification.

tags:
  - React
  - Vite
  - Express
  - Axios
  - MUI
  - API rest
  - JavaScript
  - Node.js
  - Swagger
  - Json Web Token  
  - Joi
  - BCrypt
  - PostgreSQL
  
---
**envie de voir le code?** **c'est [ici](https://github.com/Tony-Poomipartes/odelice_API) !**

#### Introduction

O'délices est une plateforme culinaire incontournable pour tous les gourmets et gourmands en quête de nouvelles inspirations.  
Grâce à cette plateforme, fini les casse-têtes pour trouver des idées de recettes originales et savoureuses. En effet, O'délices regroupe une grande communauté de passionnés de cuisine qui partagent généreusement leurs recettes et astuces culinaires.

En parcourant les différentes sections du site, les visiteurs peuvent explorer une variété de recettes, allant des plats traditionnels aux créations culinaires les plus audacieuses. Les recettes sont présentées de manière claire et détaillée, avec des instructions étape par étape et des photos appétissantes qui mettent l'eau à la bouche.

Mais O'délices ne se limite pas seulement à proposer des recettes. La plateforme offre également une multitude de ressources pour aider les utilisateurs à améliorer leurs compétences culinaires, tels que des conseils pour la préparation de certains ingrédients  ou encore des astuces pour la cuisson et le dressage.

En somme, O'délices est bien plus qu'un simple site de cuisine, c'est un véritable lieu d'échange et de partage pour tous les amateurs de gastronomie. Que l'on soit novice ou expérimenté en cuisine, cette plateforme est une mine d'or pour trouver de l'inspiration, se perfectionner et satisfaire ses papilles gustatives.

#### Fonctionnalités du projet

##### Elle permettra

1. aux visiteurs et aux membres de rechercher des recettes de cuisines à partir de 1 ingrédient ou plus qu’ils ont dans leur frigo (possibilité sur 1 seul champs de recherche)
2. aux visiteurs de s’inscrire pour devenir membre afin de gérer leur profil ⇒ 1er CRUD : créer, lire, modifier, supprimer son profil
3. aux membres de créer des recettes ⇒ 2ème CRUD : créer, lire, modifier, supprimer sa recette
4. aux membres de noter (étoiles)
5. aux visiteurs et aux membres de découvrir des recettes populaires (les mieux notées)
6. aux membres de commenter les recettes

##### J'ai travaillé sur les axes suivants

1. Définition de la maquette et établissement de la charte graphique.
2. Création d’une base de donnée et de l’API correspondante
3. Identification des utilisateurs et ses enjeux de sécurisation
4. Création d’un front-end dynamique communiquant avec le back-end

#### Base de données, structure et accès

Pour construire une base de données robuste, nous avons commencé par une étape cruciale : la définition précise des fonctionnalités du site. Ensuite, nous avons travaillé sur les différents modèles de données pour garantir la cohérence de l'ensemble : un dictionnaire de données pour identifier les informations à stocker, un Modèle Conceptuel de Données pour définir les relations entre ces informations, un Modèle Logique de Données pour spécifier les contraintes d'intégrité, et enfin un Modèle Physique de Données pour représenter la base de données et ses différents éléments.  (Documents disponibles dans l'annexe)

Nous avons choisi PostgreSQL comme système de gestion de données car il permet une grande flexibilité et une stabilité accrue. Nous avons également utilisé Sqitch pour apporter des modifications à la base de données en toute sécurité, garantissant ainsi la pérennité du système que ce soit pour déployer les tables et leurs spécificités, ou pour créer des fonctions ou des tables de liaison.

Pour alimenter notre base de données, nous avons généré des fichiers JSON en utilisant des web crawlers pour collecter des données sur différents site web similaire. Nous avons ensuite importé ces données à l'aide d'un fichier Javascript, en cryptant les mots de passe avec Bcrypt pour une sécurité renforcée.

Enfin, pour que la base de données puisse être utilisée côté front-end, nous avons créé une API REST avec des routes pour chaque requête. Ce processus permet d'assurer une communication fluide entre la base de données et l'interface utilisateur, garantissant ainsi une expérience utilisateur optimale.

Pour la journalisation des logs, nous avons choisi d'utiliser la bibliothèque Debug qui nous a permis de suivre la donnée en temps réel via un journal dans le terminal. Debug est une bibliothèque de journalisation qui facilite le suivi des erreurs, des informations de débogage et des requêtes. Elle fournit une sortie colorée et claire pour une lecture plus facile.
Avec Debug, nous avons pu ajouter des informations de journalisation dans notre code en utilisant des points d'arrêt stratégiques. Debug nous a permis de suivre les informations importantes dans notre application en temps réel et de diagnostiquer rapidement les problèmes.

Afin de développer une API REST solide et facilement évolutif, nous avons opté pour l'utilisation du design pattern Factory. Ce dernier nous a permis de mettre en place un système de classes et un fichier core (tel que coreDatamapper ou coreController) pour reproduire nos fichiers pour chaque table de la base de données.
L'utilisation de se design pattern nous a permis de créer des instances de classes sans les lier directement à notre application. Ainsi, nous avons pu centraliser le code commun dans le fichier core et le réutiliser facilement pour chaque table de la base de données. Cela nous a permis de gagner du temps de développement, de maintenir un code clair et organisé, et de faciliter la gestion de l'API REST.
De plus, en utilisant le design pattern Factory, nous avons pu garantir la réutilisabilité du code, en nous permettant de créer facilement de nouvelles classes pour de nouvelles tables. Cela nous a permis de maintenir une API REST évolutive, capable de s'adapter rapidement aux évolutions de la base de données.

Nous avons également pris en compte les risques d'injections SQL en utilisant des requêtes préparées dans nos datamappers, ainsi que Joi pour effectuer la validation de nos données.

Dans le but de renforcer la sécurité de notre application, nous avons mis en place des Json Web Tokens (JWT) afin de limiter l'accès à certaines requêtes entre le back-end et le front-end. Ces tokens sont des jetons d'authentification qui sont utilisés pour identifier et authentifier les utilisateurs qui accèdent à notre application. Ils sont générés lors de l'authentification de l'utilisateur et contiennent des informations cryptées sur l'utilisateur, telles que son ID.
L'utilisation de JWT nous permet de contrôler l'accès aux ressources et aux données sensibles de notre application, en autorisant seulement les utilisateurs authentifiés à y accéder. Cela permet de réduire les risques d'attaques malveillantes et de vol de données, tout en offrant une expérience utilisateur sécurisée et transparente.

Pour faciliter la collecte de données à partir de différents champs de différentes tables, nous avons créé des vues, elles nous ont également permis de faciliter la maintenance de notre code. Au lieu d'avoir des requêtes complexes réparties dans plusieurs parties de notre code, nous avons pu centraliser ces requêtes et cela nous a permis de maintenir un code propre et organisé.
