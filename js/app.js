/*
    Player Object
*/
var Player = function (x, y, d, speed, direction) {
    this.d = d;

    this.x = x;
    this.y = y;

    this.speed = speed;

    this.direction = direction;
};

/*
    Player Update
    Wil update the state of the player
*/
Player.prototype.update = function () {
    if (this.direction == 'right') {
        this.x = this.x + this.speed;
    }
    if (this.direction == 'left') {
        this.x = this.x - this.speed;
    }
    if (this.direction == 'up') {
        this.y = this.y - this.speed;
    }
    if (this.direction == 'down') {
        this.y = this.y + this.speed;
    }
};

/*
    Player Render
    Will draw the current state of the Player
    Erase the old drawing based on direction
*/
Player.prototype.render = function () {
    // Colors for fills that we will need
    var playerColor = "#FF0000";
    var playerPath = "#FF5959";

    // When the player is going in any direction it will draw the new player and fill its path with the path color
    if (this.direction == 'right') {
        ctx.fillRect(this.x, this.y, this.d, this.d);
        ctx.fillStyle = playerPath;

        ctx.fillRect(this.x, this.y, -this.speed, this.d);
        ctx.fillStyle = playerColor;
    }
    if (this.direction == 'left') {
        ctx.fillRect(this.x, this.y, this.d, this.d);
        ctx.fillStyle = playerPath;

        ctx.fillRect((this.x + this.d), this.y, this.speed, this.d);
        ctx.fillStyle = playerColor;
    }
    if (this.direction == 'up') {
        ctx.fillRect(this.x, this.y, this.d, this.d);
        ctx.fillStyle = playerPath;

        ctx.fillRect(this.x, (this.y + this.d), this.d, this.speed);
        ctx.fillStyle = playerColor;
    }
    if (this.direction == 'down') {
        ctx.fillRect(this.x, this.y, this.d, this.d);
        ctx.fillStyle = playerPath;

        ctx.fillRect(this.x, this.y, this.d, -this.speed);
        ctx.fillStyle = playerColor;
    }
};

/*
    Player Input Handler
    Take a Key Code in the form of left up right or down and update the players direction
*/
Player.prototype.handleInput = function (key) {
    this.direction = key;
};

// Creat a new player
var player = new Player((window.innerWidth / 2 ), (window.innerHeight / 2 ), 20, 1, 'up');

/*
    Territory Object
*/
var Territory = function (x, y, cordinates) {
    this.x = x;
    this.y = y;

    this.cordinates = cordinates;
    /*
    cordinates = [
        [0, 0],
        [100, 0],
        [0, 100],
        [100, 100]
    ];
    */
};

Territory.prototype.update = function () {

};

/*
    Keydown Listener
    Listens for the keydown of WASD and sends the direction to the players input handler
*/
document.addEventListener('keydown', function(key) {
    var movementControls = {
        65: 'left',
        87: 'up',
        68: 'right',
        83: 'down'
    };

    player.handleInput(movementControls[key.keyCode]);
});
