"use strict";

var RECOLTES = RECOLTES || {};
////////////////////////////////
//         Démarrage          //
////////////////////////////////

RECOLTES.Demarrage = function() {};

RECOLTES.Demarrage.prototype = {
    init: function() {
  //   	this.stage.backgroundColor = 0xF6F6F6;

  //      // Définir la couleur de l'arrière-plan du jeu et le mode de mise à l'échelle
		// this.scale.pageAlignHorizontally = true;
		// this.scale.pageAlignVertically = true;
		// this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

		// //Définir le mode de mise à l'échelle si le jeu est en plein écran (fullScreen)
		// this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

		// if (this.game.device.iOS) {
		// 	this.game.scale.forceOrientation(true, false);
		// 	this.game.scale.enterIncorrectOrientation.add(this.afficherImage, this);
		// 	this.game.scale.leaveIncorrectOrientation.add(this.enleverImage, this);
		// }

  //       this.input.maxPointers = 1;
    },

    afficherImage: function () {
		document.getElementById("orientation").style.display = "block";
		this.game.paused = true;
	},

	enleverImage: function () {
		document.getElementById('orientation').style.display = "none";
		this.game.paused = false;
	},
    create: function() {
        this.game.state.start("ChargementMedias");
    }
};
