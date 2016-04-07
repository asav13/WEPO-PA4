window.BeetRoot = (function() {
	'use strict';

	var Controls = window.Controls;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED = 30; // * 10 pixels per second
	var WIDTH = 30;
	var HEIGHT = 50;
	var INITIAL_POSITION_X = 60;
	var INITIAL_POSITION_Y = 25;

	var BeetRoot = function(el, game) {
		console.log("HERE");
		this.el = el;
		this.game = game;
		console.log(this.game);
		this.pos = { x: 0, y: 0 };

	};

	/**
	 * Resets the state of the player for a new game.
	 */
	BeetRoot.prototype.reset = function() {
		this.started = false;
		this.pos.x = INITIAL_POSITION_X;
		this.pos.y = INITIAL_POSITION_Y;

	};
//	this.el.css('animation', '0.4s ebbing alternate infinite');

	BeetRoot.prototype.onFrame = function(delta) {
		var self = this;
		// TODO FIX SO ACTS LIKE SPACE BAR

		if(Controls.keys.space && self.started == false) {
			self.started = true;
		}

		else if(self.started){
			self.pos.x -= delta * SPEED;
			if(self.pos.x <= -30){
				self.pos.x = 120;
			}
		}

		// Update UI
		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
		
		//animation: 0.4s flap alternate infinite;
	};

	return BeetRoot;

})();
