// Tableau représentant la grille de jeu
let t = [
  ['m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', '', 't','', '', '', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', '', '','', '', '', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm','', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', '', 't','', '', '', '','', '', '', '','', '', '','', '', 'm', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','', 'm', 'm', 'm','m', 'm', 'm', 'm','m', '', '','', '', '', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','', '', 'm', 'm','m', 'm', 'm', 'm','m', '', '','s', '', '', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','', '', 'm', 'm','m', '', '', '','', '', '','', '', '', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','', '', 'm', 'm','m', 'm', 'm', '','', '', 'm','m', 'm', '', 't','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', '', '','', 'm', 'm', 'm','m', 'm', '', '','', '', 'm','m', 'm', '', '','', '', '', 'm','m', 'm',],
  ['m', 'm', '', '','', '', '', 'm','m', '', '', '','', '', 'm','m', 'm', 'm', '','', 's', '', 'm','m', 'm',],
  ['m', '', 's', '','', '', 'm', 'm','m', '', '', 't','m', 'm', 'm','m', 'm', 'm', '','', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', '', '','', 't', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm','m', 'm', '', '','J', '', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm',],
  ['m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm','m', 'm', 'm', 'm','m', 'm', 'm', 'm','m', 'm',],
];



//1// Fonction pour afficher la grille de jeu en HTML
function afficherTableau() {
const tableauHTML = document.createElement('table');
  for (let i = 0; i < t.length; i++) {
    const ligne = document.createElement('tr');
    for (let j = 0; j < t[i].length; j++) {
      const cellule = document.createElement('td');
      const image = document.createElement('img');

       // Assigner l'image appropriée en fonction de la valeur dans le tableau t
       if (t[i][j] === 'J') {
        cellule.classList.add('j');
        const joueurImage = document.createElement('img');
        image.src = './img/joueur.png'; 

      } else if (t[i][j] === 's') {
        cellule.classList.add('s');
        image.src = './img/Monstre.jpeg';
      } else if (t[i][j] === 't') {
        cellule.classList.add('t');
        image.src = './img/tresor.jpg';
      } else if (t[i][j] === 'm') {
        cellule.classList.add('m');
        image.src = './img/Mur.jpg';
      }

      
      cellule.appendChild(image);//image a l'interieur de cellule
      ligne.appendChild(cellule);//cellule a l'interieur de ligne
    }
    tableauHTML.appendChild(ligne);//ligne a l'interieur de table
  }
  document.body.appendChild(tableauHTML);//table a l'interieur de HTML
}

// Afficher le tableau initial
  afficherTableau();  

// Initialiser la position du joueur et des monstres
let joueurX = -1;
let joueurY = -1;
const monstres = [];// initialise un tableau vide pour stocker les positions des monstres dans le jeu. 


                                                                  //Declaration de tableau+ Affichage de la grille + initialisationd de la position des joueurs- monstres -score

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2// Fonction pour trouver la position du joueur et des monstres dans le tableau
function trouverJoueurEtMonstres() {
  for (let i = 0; i < t.length; i++) {
    for (let j = 0; j < t[i].length; j++) {
      if (t[i][j] === 'J') {

        joueurX = j;
        joueurY = i;
      } else if (t[i][j] === 's') {
        monstres.push({ x: j, y: i });
      }
    }
  }
}
// Appel initial pour trouver la position du joueur et des monstres
trouverJoueurEtMonstres();


//3// Fonction pour vérifier si le joueur a rencontré un monstre
function verifierCollisionMonstre() {
  for (const monstre of monstres) {
    if (joueurX === monstre.x && joueurY === monstre.y) {
      return true;
    }
  }
  return false;
}

//4// Fonction pour réinitialiser le jeu
function reinitialiserJeu() {
  location.reload();
}


//5//Fonction pour déplacer les monstres automatiquement dans une direction aléatoire
function deplacerMonstresAleatoirement() {
  for (const monstre of monstres) {
    const directionAleatoire = Math.floor(Math.random() * 4);
    let nouveauMonstreX = monstre.x;
    let nouveauMonstreY = monstre.y;

    if (directionAleatoire === 0 && nouveauMonstreY > 0 && t[nouveauMonstreY - 1][nouveauMonstreX] !== 'm' && t[nouveauMonstreY - 1][nouveauMonstreX] !== 't') {
      nouveauMonstreY--;
    } else if (directionAleatoire === 1 && nouveauMonstreY < t.length - 1 && t[nouveauMonstreY + 1][nouveauMonstreX] !== 'm' && t[nouveauMonstreY + 1][nouveauMonstreX] !== 't') {
      nouveauMonstreY++;
    } else if (directionAleatoire === 2 && nouveauMonstreX > 0 && t[nouveauMonstreY][nouveauMonstreX - 1] !== 'm' && t[nouveauMonstreY][nouveauMonstreX - 1] !== 't') {
      nouveauMonstreX--;
    } else if (directionAleatoire === 3 && nouveauMonstreX < t[nouveauMonstreY].length - 1 && t[nouveauMonstreY][nouveauMonstreX + 1] !== 'm' && t[nouveauMonstreY][nouveauMonstreX + 1] !== 't') {
      nouveauMonstreX++;
    }

    t[monstre.y][monstre.x] = '';
    t[nouveauMonstreY][nouveauMonstreX] = 's';
    monstre.x = nouveauMonstreX;
    monstre.y = nouveauMonstreY;
  }
}

//6//Fonctio  disable bouton
function desactiverBoutonsDeplacement() {
  // Désactiver les boutons de déplacement en utilisant leur identifiant
  document.getElementById('boutonHaut').disabled = true;
  document.getElementById('boutonGauche').disabled = true;
  document.getElementById('boutonDroite').disabled = true;
  document.getElementById('boutonBas').disabled = true;
}

// Variable pour stocker le score
let score = 0;
// Fonction pour incrémenter le score
function incrementerScore() {
  score++;
  console.log('Score incremented:', score);
  document.getElementById('score').textContent = "Score : " + score;
}



////////////////////////////////////////////////////////////////////////////////////

// Ajouter des écouteurs d'événements de clic pour les boutons de déplacement
const boutonHaut = document.getElementById('boutonHaut');
const boutonBas = document.getElementById('boutonBas');
const boutonGauche = document.getElementById('boutonGauche');
const boutonDroite = document.getElementById('boutonDroite');
const boutonReinitialiser = document.getElementById('boutonReinitialiser');

boutonHaut.addEventListener('click', function() {
  console.log('Bouton Haut cliqué');
  deplacerJoueur('haut');
});

boutonBas.addEventListener('click', function() {
  console.log('Bouton Bas cliqué');
  deplacerJoueur('bas');
});

boutonGauche.addEventListener('click', function() {
  console.log('Bouton Gauche cliqué');
  deplacerJoueur('gauche');
});

boutonDroite.addEventListener('click', function() {
  console.log('Bouton Droite cliqué');
  deplacerJoueur('droite');
});

boutonReinitialiser.addEventListener('click', function(){
  console.log('Bouton Réinitialiser cliqué');
  reinitialiserJeu();
});
 /////////////////////////////////////////////////////////////////////////////////////////          

// Fonction pour déplacer le joueur dans la grille
function deplacerJoueur(direction) {
  let nouveauJoueurX = joueurX;
  let nouveauJoueurY = joueurY;

  // Vérifier une collision avec un monstre
  if (verifierCollisionMonstre()) {
    // Creation  d'une div pour l'alerte
    const alertDiv = document.createElement('div');
    alertDiv.className = 'alert-box';
    alertDiv.textContent = 'Game over! Vous avez été capturé par un monstre.';
    // Ajouter la div à la page
    document.body.appendChild(alertDiv);
    desactiverBoutonsDeplacement(); // Désactiver les boutons de déplacement
    return; // Arrêter la fonction pour empêcher tout autre déplacement du joueur
  }

  // Vérifier la direction souhaitée et mettre à jour les nouvelles coordonnées en conséquence
  if (direction === 'haut') {
    nouveauJoueurY--;
  } else if (direction === 'bas') {
    nouveauJoueurY++;
  } else if (direction === 'gauche') {
    nouveauJoueurX--;
  } else if (direction === 'droite') {
    nouveauJoueurX++;
  }

  // Conditions pour que le joueur ne sorte ni de la grille ni des cellules vides
  if (
    nouveauJoueurY >= 0 &&
    nouveauJoueurY < t.length &&
    nouveauJoueurX >= 0 &&
    nouveauJoueurX < t[nouveauJoueurY].length &&
    (t[nouveauJoueurY][nouveauJoueurX] === '' || t[nouveauJoueurY][nouveauJoueurX] === 't')
  ) {
    // Mettre à jour la case du joueur dans le tableau avec une chaîne vide pour le déplacer
    t[joueurY][joueurX] = '';
    
    if (t[nouveauJoueurY][nouveauJoueurX] === 't'){
      incrementerScore();
      t[nouveauJoueurY][nouveauJoueurX] = ''; // Retirer le trésor de la grille
    }
    
    // Mettre à jour la case de destination avec le joueur ('J') pour le déplacer
    t[nouveauJoueurY][nouveauJoueurX] = 'J';
    // Mettre à jour les coordonnées du joueur avec les nouvelles coordonnées
    joueurX = nouveauJoueurX;
    joueurY = nouveauJoueurY;

    // Déplacer les monstres automatiquement
    deplacerMonstresAleatoirement();


    // Effacer et réafficher la grille
    const tableauHTML = document.querySelector('table');
    document.body.removeChild(tableauHTML);
    afficherTableau();

  }
}
