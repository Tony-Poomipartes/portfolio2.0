---
title: Squiz Game
publishDate: 2019-10-02 00:00:00
img: /assets/project/squiz.png
img_alt: image de la page d'acceuil du site Squiz Game.
description: |
  Squiz game est un jeu de questions reponses.
front: |
    Une fonction de Login / signin en plus poussé avec l'utilisation de bcrypt et mail-validator pour la gestion et vérification des inputs.
back:  
  On y retrouve également la création d'une session, permettant en cas d'user admin de créer et ajouter un nouveau niveau de diffuclté de quizz
tags:
  - JavaScript
  - Node.js
  - Express
  - PostgreSQL
  - sequelize
  - BCrypt
  - ejs
  - email-validator
  - express-session
  - MCD
  - MLD
  - MPD
---
#### Introduction

Lors d'un exercice de formation, j'ai crée un site web et sa base de données a l'aide d'une user storie et d'un wireframe.
Par la suite j'ai elaboré un MCD, un MLD puis un MPD pour definir les tables et champs qui compose la base de donnée.

#### Base de données, structure et accès

##### MCD (Modéle Conceptuel de données )

Le MCD permet d'avoir une vue globale des entités de notre application et des liens entre ces entités.
Ici, j'ai

- listé 6 entités
- défini les relations entre elles (créé, possède, est tagué par,
valide, etc..)
ensuite j'ai établi les cardinalités entre les entités du minimum (0 ou 1) au maximum (1 ou plusieurs "N").
exemples:
Un user peux ne pas avoir de quizz et il peut en créer plusieurs => 0, N
Un quiz doit être créé par un user et ne peut avoir été créé que par un seul user => 1, 1

##### MLD (Modéle Logique de données )

Le MLD m'a permit de décrire de façon plus formel les relations entre les entités, définir ou se trouve les clés étrangères et ainsi pouvoir créer la table de liaison.

##### MPD (Modéle Physique de données )

Enfin, j'ai créé mon MPD avec un fichier SQL pour ajouter les tables et les champs dans la base de données.

La commande BEGIN marque le début d'une transaction.

La commande DROP TABLE IF EXISTS supprime les tables si elles existent déjà. Cela permet d'éviter des erreurs lors de la création de la base de données.

La commande CREATE TABLE crée les tables. Chaque table a une structure définie par les colonnes qu'elle contient, ainsi que les types de données et les contraintes qui leur sont associés.
Les ID sont généré automatiquement  comme clef primaire de la table et chaque champ a son nom, son type de donnée ( text, integer, date, varchar etc ...) et NOT NULL si le champs ne peut être vide, dans certain cas on peut y mettre une valeur par défaut.

La commande ALTER TABLE est faite  pour modifier , dans le cas présent elle est utilisée pour ajouter une clé étrangère.
