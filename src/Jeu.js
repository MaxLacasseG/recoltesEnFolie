"use strict";

var RECOLTES = RECOLTES || {};
////////////////////////////////
//          EcranJeu         //
////////////////////////////////

////////////////////////////////
// Variables globales
////////////////////////////////
RECOLTES.Jeu = function() {
      //Gestion du jeu
      this.laGrille = []; // {Array}
      this.lesBlocs = null; //{Group}
      this.blocActif1 = null;
      this.blocActif2 = null;
      this.fondJeu = null;

      //Gestion du temps
      this.minuteur = null; // {int}

      //Gestion du son
      this.sonAmbiance = null; // {Audio}

      //Flags de jeu
      this.peutJouer = null; // {bool}
      this.peutDeplacer = null; // {bool}
};

RECOLTES.Jeu.prototype = {
      /**
       * Fct d'initialisation
       * Initialise les variables
       */
      init: function() {
            for (var i = 0; i < RECOLTES.NB_LIGNES; i++) {
                  this.laGrille[i] = [];
                  for (var j = 0; j < RECOLTES.NB_COLONNES; j++) {
                        this.laGrille[i][j] = null;
                  }
            }
            this.gererEcran();
      },

      /**
       * Fonction servant à la création du jeu
       */
      create: function() {
            //Placer le fond
            this.fondJeu = this.add.image(0, 0, "fondJeu");
            //Placer les blocs de textes

            //Créer le gestionnaire de son

            this.creerGrille();
      }, // Fin create
      gererEcran: function() {
            if (!this.scale.isFullScreen) {
                  Ecran.mettrePleinEcran();
            }

            if (!this.game.device.desktop) {
                  Ecran.verouillerEcran(Ecran.PORTRAIT);
            }
      },
      /**
       * Fct servant à créer la grille de jeu
       * Array ext: lignes
       * Array int: colonnes
       * 
       */
      creerGrille: function() {
            var noGrille = 0;

            //On ajoute les lignes du array
            for (var li = 0; li < RECOLTES.NB_LIGNES; li++) {
                  this.laGrille[li] = [];
                  for (var col = 0; col < RECOLTES.NB_COLONNES; col++) {
                        this.laGrille[li][col] = this.creerBloc(col, li);
                        this.laGrille[li][col].position = noGrille;
                        noGrille++;
                  }
            }
            //this.afficherGrille();
      }, // Fin creerGrille

      creerBloc: function(col, li) {
            var posX = 0,
                  posY = 0,
                  laCouleur = null,
                  bloc = null;

            //Définir couleur {int range:0 -> RECOLTES.NB_COULEURS}
            laCouleur = this.rnd.integerInRange(0, RECOLTES.NB_COULEURS - 1);
            posX = RECOLTES.MARGE_GC + (col * RECOLTES.TAILLE_BLOC);
            posY = li * RECOLTES.TAILLE_BLOC;

            console.log(posX, posY);
            //Définir bloc
            bloc = this.add.sprite(posX, posY, "blocsImg");
            bloc.frame = laCouleur;

            //Anime en descendant
            // this.add.tween(bloc).to({
            //     y: li * RECOLTES.TAILLE_BLOC
            // }, 750, Phaser.Easing.Bounce.Out, true);

            //Gestion de l'interactivité
            //bloc.inputEnabled = true;
            //unBloc.events.onInputDown.add(this.selection, this);

            return bloc;
      }, // Fin creerBloc

      afficherGrille: function() {
            console.log("***DEBUG***");
            console.log(this.laGrille);

            for (var li = 0; li < RECOLTES.NB_LIGNES; li++) {
                  for (var col = 0; col < RECOLTES.NB_COLONNES; col++) {
                        console.log("position:", this.laGrille[li][col].position);
                        console.log("frame:", this.laGrille[li][col].frame);
                        console.log("coord:", this.laGrille[li][col]);
                        console.log("---------");
                  }
            }
      },
      update: function() {

      }
}; // Fin Jeu.prototype