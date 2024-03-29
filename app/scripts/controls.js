
window.Controls = (function() {
    'use strict';

    /**
     * Key codes we're interested in.
     */
    var KEYS = {
        32: 'space',
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    var audioPlayer         = document.getElementById('audio');
    var audioPlayerExtra    = document.getElementById('audioExtra');
    var flappingAudio       = document.getElementById('flappingAudio');
    var gameOverAudio       = document.getElementById('gameOverAudio');
    var musicButton         = document.getElementById('mute');
    var soundButton         = document.getElementById('muteSound');
    var musicText           = musicButton.lastChild;
    var soundText           = soundButton.lastChild;

    musicButton.addEventListener('click', function (e) {
        $('#iconSpan').toggleClass('glyphicon-volume-up glyphicon-volume-off');
        musicText.data = musicText.data === ' Music Off' ? ' Music On' : ' Music Off';
        e = e || window.event;

        audioPlayer.muted      = !audioPlayer.muted;
        e.preventDefault();
    }, false);

    soundButton.addEventListener('click', function (e) {
        $('#iconSpanSound').toggleClass('glyphicon-volume-up glyphicon-volume-off');
        soundText.data = soundText.data === ' Sound Off' ? ' Sound On' : ' Sound Off';
        e = e || window.event;

        audioPlayerExtra.muted  = !audioPlayerExtra.muted;
        flappingAudio.muted     = !flappingAudio.muted;
        gameOverAudio.muted     = !gameOverAudio.muted;
        e.preventDefault();
    }, false);

    /**
     * A singleton class which abstracts all player input,
     * should hide complexity of dealing with keyboard, mouse
     * and touch devices.
     * @constructor
     */
    var Controls = function() {
        this._didJump   = false;
        this.keys      = {};
        $(window)
            .on('keydown', this._onKeyDown.bind(this))
            .on('keyup', this._onKeyUp.bind(this));
    };

    Controls.prototype._onKeyDown = function(e) {
        // Only jump if space wasn't pressed.
        if (e.keyCode === 32 && !this.keys.space) {
            this._didJump = true;
        }

        // Remember that this button is down.
        if (e.keyCode in KEYS) {
            var keyName   = KEYS[e.keyCode];
            this.keys[keyName]  = true;
            return false;
        }
    };

    Controls.prototype._onKeyUp = function(e) {
        if (e.keyCode in KEYS) {
            var keyName   = KEYS[e.keyCode];
            this.keys[keyName]  = false;
            return false;
        }
    };

    /**
     * Only answers true once until a key is pressed again.
     */
    Controls.prototype.didJump = function() {
        var answer    = this._didJump;
        this._didJump   = false;
        return answer;
    };

    // Export singleton.
    return new Controls();
})();
