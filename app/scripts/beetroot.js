window.BeetRoot = (function() {
	'use strict';

	var Controls = window.Controls;

	// All these constants are in em's, multiply by 10 pixels
	// for 1024x576px canvas.
	var SPEED				= 30; // * 10 pixels per second
	var INITIAL_POSITION_X	= 60;
	var INITIAL_POSITION_Y	= 25;

	var BeetRoot = function(el, game) {
		this.el	= el;
		this.game	= game;
		this.pos	= { x: 0, y: 0 };
		this.ys	= {1: 18, 2: 19, 3: 20, 4:21, 5:22, 6:26, 7:28};
	};

	/**
	 * Resets the state of the player for a new game.
	 */
	BeetRoot.prototype.reset = function(level) {
		this.started	= false;
		this.pos.x		= INITIAL_POSITION_X;
		this.pos.y		= INITIAL_POSITION_Y;
		SPEED			= level;
		this.el.css('display', 'block');

	};

	BeetRoot.prototype.onFrame = function(delta) {
		var self = this;

		if(Controls.keys.space && self.started === false) {
			self.started = true;
		}

		else if(self.started){
			self.pos.x -= delta * (SPEED);
			if(self.pos.x <= -30){
				self.pos.x	= 120;
				var newY	= Math.round(Math.random() * (7 - 1) + 1);
				self.pos.y	= self.ys[newY];
			}
		}

		this.el.css('transform', 'translate(' + this.pos.x + 'em, ' + this.pos.y + 'em)');
	};

	return BeetRoot;
})();
