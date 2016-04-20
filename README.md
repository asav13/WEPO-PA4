## HTML5 CSS-based Game
Reykjavík University, April 2016<br>
T-303-WEPO - Web Programming II<br>
Assignment: HTML5 CSS-based Game<br>
Authors: asav13@ru.is, vedise13@ru.is, laurar14@ru.is
<br>
The game is currently deployed at: http://laurar14.github.io/WEPO-PA4/app/
<br>
#About the game

* All positions and sizes defined using a 10px em. This means that the game could be scaled up and down by changing the base font-size. This and a partial implementation of bootstrap for the game canvas is one way to make the graphics responsive.
* The game has simple game loop which calculates delta and can be started and stopped.
* The player has to choose a difficulty level which changes the speed of the game.
* The player can mute the song and/or the sound effects.
* The player can control the character with mouse clicking and/or pressing space bar.
* The player can see his score in "real time" in the top right corner of the game.
* Hitting beets, clouds or ground will kill the player instantly. The game over event is visually different depending on where the collision happens.
* When player dies, he will see his score and his highest score.

* Extra features
	* Custom graphics
	* Levels
	* Mouse and Spacebar for moving character
	* The game is responsive
	* Cross-browser support
	* Mute support for all sound effects 

#Browser tests

* Google Chrome
* Microsoft Edge
* Mozilla Firefox

PS: As you can see, the player is ours truly, Daníel Brandur, riding a unicorn, trying not to hit beetroots in beetroot candy-land.


## Setup

```
npm install
bower install
grunt serve
```
