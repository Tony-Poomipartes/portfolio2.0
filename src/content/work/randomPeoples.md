---
title: Random Peoples
publishDate: 2023-20-09 00:00:00
img: /assets/project/randomPeoples.png
img_alt: image de la page d'acceuil du site Random Peoples.
description: |
  Ceci est une application Web simple pour afficher des profils d'utilisateurs aléatoires à partir de [l'API Random User Generator](https://randomuser.me/).
front: |
    un bouton pour rajouter 10 personnes, une selection par genres 
back:  
  et un bouton de suppression de carte
tags:
  - JavaScript
  - vite
---
**envie de voir le code?** **c'est [ici](https://github.com/Tony-Poomipartes/randomPeople) !**

#### Introduction

"Random Peoples" est une application Web légère conçue pour afficher des profils d'utilisateurs générés aléatoirement à partir de l'API "Random User Generator". Elle offre une interface simple et conviviale pour visualiser ces profils et interagir avec eux.

#### Le bouton pour rajouter 10 personnes

L'application propose un bouton "Ajouter 10 personnes" qui permet aux utilisateurs de charger de nouveaux profils d'utilisateurs. Lorsque les utilisateurs cliquent sur ce bouton, l'application interroge l'API "Random User Generator" pour obtenir 10 profils d'utilisateurs aléatoires et les affiche sous forme de cartes d'utilisateurs.
<details>
  <summary>Voir le code</summary>

```javascript
//?=====================================
//?           Get Lists From API
//?=====================================
  async getListsFromAPI(genderParam) {

    try {
      let apiUrl = `${apiModule.base_url}/?results=10`;
      if (genderParam) {
        apiUrl +=  `&gender=${genderParam}`;
      }
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(response.status);
      }

      const listsArray = await response.json();
      listsArray.results.forEach((userData) => {
        cardModule.createUserCard(userData);
      });

      return listsArray;
    } catch (error) {
      alert(`Failed to fetch lists from the API. Status: ${error}`);
    }
  }
```

</details>

#### La selection par genres

Les utilisateurs ont la possibilité de filtrer les profils d'utilisateurs par genre. Deux options de genre sont disponibles : masculin et féminin. Lorsqu'un utilisateur sélectionne un genre, l'application filtre les profils en fonction de cette sélection et n'affiche que les profils correspondants.
<details>
  <summary>Voir le code</summary>

```javascript
//?=====================================
//?           Filter By Gender
//?=====================================
  filterByGender(selectedGender) {
    

    if (selectedGender === '1') {
      genderParam = 'male'; 
    } else if (selectedGender === '2') {
      genderParam = 'female'; 
    }
    else {
    genderParam = '';  
  }
  sessionStorage.setItem('genderParam', genderParam);
    this.getListsFromAPI(genderParam);
    return genderParam;
  },
```

</details>

#### Le bouton de suppression de carte

Chaque carte de profil utilisateur est accompagnée d'un bouton "Supprimer" qui permet aux utilisateurs de retirer une carte de la vue. Lorsque les utilisateurs cliquent sur ce bouton, la carte correspondante est supprimée de l'interface utilisateur.
<details>
  <summary>Voir le code</summary>

```javascript
//?=====================================
//?           Create Close Button
//?=====================================
  createCloseButton(userCard) {
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    const closeButtonText = document.createTextNode('X');
    closeButton.appendChild(closeButtonText);

    closeButton.addEventListener('click', () => {
      userCard.remove();
    });

    return closeButton;
  },
  ```

</details>
