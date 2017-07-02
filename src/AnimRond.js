(function() { //IIFE
    "use strict";

    /**
     * Crée une instance de AnimRond
     * 
     * @class AnimRond
     * @extends Phaser.Sprite
     * @constructor
     * 
     * @param {Phaser.Game} leJeu Référence au jeu en cours
     * @param {Number} posX Position du rond sur l'axe des x
     * @param {Number} posY Position du rond sur l'axe des y
     * @param {Number} diametre Diamètre du rond
     * @param {Number} couleur Nombre hexadécimal pour la couleur du rond
     */
    function AnimRond(leJeu, posX, posY, diametre, couleur) {
    	var leRond = new Phaser.Graphics(leJeu, 0, 0);
			leRond.beginFill(couleur, 0.5);
			leRond.lineStyle(4, couleur, 1.0);
			leRond.drawCircle(posX, posY, diametre);

        //Appel du constructeur parent pour cet instance
        //new Sprite(game, x, y, key, frame)
        Phaser.Sprite.call(this, leJeu, posX, posY, leRond.generateTexture());

        //Ajuster le point d'ancrage
        this.anchor.set(0.5);

        //Échelle initiale
        this.scale.setTo(0);

        //Mettre ce rond dans l'affichage du jeu
        leJeu.add.existing(this);

        //Animer ce point
        this.animerRond();
    };

    //Ajustements pour l'héritage
   	AnimRond.prototype = Object.create(Phaser.Sprite.prototype);
    AnimRond.prototype.constructor = AnimRond;

    //Méthodes d'instance

    /**
     * Anime l'instance avec les propriétés scale et alpha
     */
    AnimRond.prototype.animerRond = function() {

        //Animation de l'alpha
        this.game.add.tween(this).to({
            alpha: 1.0
        }, 500, Phaser.Easing.Elastic.Out, true);

        //Animation de l'échelle	
        var animEchelle = this.game.add.tween(this.scale).to({
            x: 2.5,
            y: 2.5
        }, 500, Phaser.Easing.Elastic.Out, true);

        //Quand l'animation de l'échelle est terminée, on détruit le point
        animEchelle.onComplete.add(this.detruirePoint, this);

    };

    /**
     * Détruit l'instance quand son animation est terminée
     */
    AnimRond.prototype.detruirePoint = function() {
        this.destroy();
    };

    //Rendre la classe publique
    window.AnimRond = AnimRond;
})(); //Fin IIFE