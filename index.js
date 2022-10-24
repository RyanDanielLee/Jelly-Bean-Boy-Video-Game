let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d")

//Let canvas take up the entire screen
canvas.width = innerWidth;
canvas.height = innerHeight;

const gravity = 0.5;

//Constructor class to set the values for the player moving object
class Player
{
    constructor() {
        //Position
        this.position = {
            x: 100,
            y: 100
        }

        //Velocity for player gravity
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 50
        this.height = 100

        this.image = playersprite
        this.frames = 0
    }

    //Display the player
    draw() {
        ctx.drawImage(
            this.image,
            72 * this.frames,
            0,
            72,
            96, 
            this.position.x, 
            this.position.y,
            this.width,
            this.height)
    }

    //Update the player's velocity by adding on the velocity to y (When player moves)
    update() {
        this.frames++
        if (this.frames >6) this.frames = 0
        this.draw()

        //Update position of vertical movement
        this.position.x += this.velocity.x
        //Update position of horizontal movement
        this.position.y += this.velocity.y

        //Move the player downwards if the player is not off the canvas
        if (this.position.y + this.height + this.velocity.y <= canvas.height)
        {
            this.velocity.y += gravity;
        }
    }
}

//Class for the platforms in the games
class Platform 
{
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }

        this.width = 50
        this.height = 50

        //added image
        this.image = image
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
        
    }
}


//Same class as above, but for the flooring
class Floor
{
    constructor({x, y, floorimage}) {
        this.position = {
            x,
            y
        }

        this.width = 500
        this.height = 200

        //added image
        this.image = floorimage
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}

//Same class as above, but for spike obstacles
class Spike
{
    constructor({x, y, spikes}) {
        this.position = {
            x,
            y
        }

        this.width = 50
        this.height = 50

        //added image
        this.image = spikes
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}

//Same class as above, but for lava obstacle
class Lava
{
    constructor({x, y, lavaimage}) {
        this.position = {
            x,
            y
        }

        this.width = 150
        this.height = 100

         //added image
         this.image = lavaimage
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}

//added a new constant
const image = new Image()
image.src = "dirt.png"

const playersprite = new Image()
playersprite.src = "p1_spritesheet.png"


const floorimage = new Image()
floorimage.src = "groundfloor2.png"

const spikes = new Image()
spikes.src = "spikes.png"

const lavaimage = new Image()
lavaimage.src = "lava.png"

//Set new constants for player and other objects
let player = new Player()



//Use an array to make multiple platforms
//added image to platform
let platforms = [
    new Platform({x: 580, y: 650, image}), 
    new Platform({x: 900, y: 550, image}),
    new Platform({x: 1255, y: 400, image}),
    new Platform({x: 1610, y: 400, image}),
    new Platform({x: 1680, y: 400, image}),
    new Platform({x: 1750, y: 400, image}),
    new Platform({x: 1820, y: 400, image}),
    new Platform({x: 1890, y: 400, image}),
    new Platform({x: 1960, y: 400, image}),
    new Platform({x: 2030, y: 400, image}),
    new Platform({x: 2090, y: 400, image}),
    new Platform({x: 2450, y: 650, image}),
    new Platform({x: 2650, y: 550, image}),
    new Platform({x: 2750, y: 550, image}),
    new Platform({x: 3600, y: 550, image}),
    new Platform({x: 3800, y: 400, image}),
    new Platform({x: 3900, y: 650, image}),
    new Platform({x: 3975, y: 650, image}),
    new Platform({x: 4075, y: 400, image}),
    new Platform({x: 4275, y: 550, image}),
    new Platform({x: 4475, y: 400, image}),
    new Platform({x: 4575, y: 400, image}),
    new Platform({x: 4775, y: 325, image}),
    new Platform({x: 4975, y: 325, image}),
    new Platform({x: 5375, y: 325, image}),
    new Platform({x: 5575, y: 400, image}),
    new Platform({x: 5575, y: 700, image}),
    new Platform({x: 5775, y: 625, image}),
    new Platform({x: 5830, y: 350, image}),
    new Platform({x: 5830, y: 625, image}),
    new Platform({x: 6250, y: 675, image}),
    new Platform({x: 6100, y: 250, image}),
    new Platform({x: 6500, y: 650, image}),
    new Platform({x: 6800, y: 725, image}),
    new Platform({x: 7000, y: 250, image}),
    new Platform({x: 7300, y: 200, image}),
    new Platform({x: 7600, y: 250, image}),
    new Platform({x: 7675, y: 250, image}),
    new Platform({x: 8000, y: 250, image}),
    new Platform({x: 7750, y: 725, image}),
    new Platform({x: 8050, y: 650, image}),
    
]

//Same as above, but for flooring
let floor = [
    new Floor({x:0, y: 800, floorimage}),
    new Floor({x:650, y: 800, floorimage}),
    new Floor({x:1490, y: 800, floorimage}),
    new Floor({x:1990, y: 800, floorimage}),
    new Floor({x:3000, y: 800, floorimage}),
    new Floor({x:4990, y: 800, floorimage}),
    new Floor({x:6000, y: 800, floorimage}),
    new Floor({x:6200, y: 200, floorimage}),
    new Floor({x:7200, y: 800, floorimage}),
    new Floor({x:8250, y: 800, floorimage}),
    new Floor({x:8400, y: 250, floorimage}),
    new Floor({x:8600, y: 250, floorimage}),
    new Floor({x:8600, y: 800, floorimage}),
]

let spike = [
    new Spike({x:450, y:750, spikes}),
    new Spike({x:800, y:750, spikes}),
    new Spike({x:1820, y:350, spikes}),
    new Spike({x:2025, y:350, spikes}),
    new Spike({x:2660, y:500, spikes}),
    new Spike({x:3050, y:750, spikes}),
    new Spike({x:3250, y:750, spikes}),
    new Spike({x:3450, y:750, spikes}),
    new Spike({x:3500, y:820, spikes}),
    new Spike({x:3550, y:820, spikes}),
    new Spike({x:3600, y:820, spikes}),
    new Spike({x:3985, y:600, spikes}),
    new Spike({x:1490, y:750, spikes}),
    new Spike({x:1690, y:750, spikes}),
    new Spike({x:1890, y:750, spikes}),
    new Spike({x:2090, y:750, spikes}),
    new Spike({x:2140, y:750, spikes}),
    new Spike({x:4575, y:350, spikes}),
    new Spike({x:4999, y:750, spikes}),
    new Spike({x:5200, y:750, spikes}),
    new Spike({x:5830, y:575, spikes}),
    new Spike({x:6300, y:750, spikes}),
    new Spike({x:6350, y:750, spikes}),
    new Spike({x:6400, y:750, spikes}),
    new Spike({x:7685, y:200, spikes}),
    new Spike({x:7350, y:750, spikes}),
    new Spike({x:7525, y:750, spikes}),
]


let lava = [
    new Lava({x:525, y: 800, lavaimage}),
    new Lava({x:400, y: 800, lavaimage}),
    new Lava({x:2400, y: 800, lavaimage}),
    new Lava({x:2500, y: 800, lavaimage}),
    new Lava({x:2600, y: 800, lavaimage}),
    new Lava({x:2700, y: 800, lavaimage}),
    new Lava({x:2800, y: 800, lavaimage}),
    new Lava({x:2900, y: 800, lavaimage}),
    new Lava({x:3650, y: 800, lavaimage}),
    new Lava({x:3700, y: 800, lavaimage}),
    new Lava({x:3750, y: 800, lavaimage}),
    new Lava({x:3800, y: 800, lavaimage}),
    new Lava({x:3850, y: 800, lavaimage}),
    new Lava({x:3900, y: 800, lavaimage}),
    new Lava({x:3950, y: 800, lavaimage}),
    new Lava({x:4000, y: 800, lavaimage}),
    new Lava({x:4050, y: 800, lavaimage}),
    new Lava({x:5875, y: 800, lavaimage}),
    new Lava({x:7815, y: 725, lavaimage}),
]

//Set a constructor for the right and left keys
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}
//Set an offset to the background scrolling so that we can set up a win scenario
let scrollOffset = 0;

//Reset the game if lose/death scenario 
function gameStatus()
{
    //Set new constants for player and other objects
    player = new Player();

    //Use an array to make multiple platforms
    platforms = [
        new Platform({x: 580, y: 650, image}), 
        new Platform({x: 900, y: 550, image}),
        new Platform({x: 1255, y: 400, image}),
        new Platform({x: 1610, y: 400, image}),
        new Platform({x: 1680, y: 400, image}),
        new Platform({x: 1750, y: 400, image}),
        new Platform({x: 1820, y: 400, image}),
        new Platform({x: 1890, y: 400, image}),
        new Platform({x: 1960, y: 400, image}),
        new Platform({x: 2030, y: 400, image}),
        new Platform({x: 2090, y: 400, image}),
        new Platform({x: 2450, y: 650, image}),
        new Platform({x: 2650, y: 550, image}),
        new Platform({x: 2750, y: 550, image}),
        new Platform({x: 3600, y: 550, image}),
        new Platform({x: 3800, y: 400, image}),
        new Platform({x: 3900, y: 650, image}),
        new Platform({x: 3975, y: 650, image}),
        new Platform({x: 4075, y: 400, image}),
        new Platform({x: 4275, y: 550, image}),
        new Platform({x: 4475, y: 400, image}),
        new Platform({x: 4575, y: 400, image}),
        new Platform({x: 4775, y: 325, image}),
        new Platform({x: 4975, y: 325, image}),
        new Platform({x: 5375, y: 325, image}),
        new Platform({x: 5575, y: 400, image}),
        new Platform({x: 5575, y: 700, image}),
        new Platform({x: 5775, y: 625, image}),
        new Platform({x: 5830, y: 350, image}),
        new Platform({x: 5830, y: 625, image}),
        new Platform({x: 6250, y: 675, image}),
        new Platform({x: 6100, y: 250, image}),
        new Platform({x: 6500, y: 650, image}),
        new Platform({x: 6800, y: 725, image}),
        new Platform({x: 7000, y: 250, image}),
        new Platform({x: 7300, y: 200, image}),
        new Platform({x: 7600, y: 250, image}),
        new Platform({x: 7675, y: 250, image}),
        new Platform({x: 8000, y: 250, image}),
        new Platform({x: 7750, y: 725, image}),
        new Platform({x: 8050, y: 650, image}),
        
    ]
    
    //Same as above, but for flooring
    floor = [
        new Floor({x:0, y: 800, floorimage}),
        new Floor({x:650, y: 800, floorimage}),
        new Floor({x:1490, y: 800, floorimage}),
        new Floor({x:1990, y: 800, floorimage}),
        new Floor({x:3000, y: 800, floorimage}),
        new Floor({x:4990, y: 800, floorimage}),
        new Floor({x:6000, y: 800, floorimage}),
        new Floor({x:6200, y: 200, floorimage}),
        new Floor({x:7200, y: 800, floorimage}),
        new Floor({x:8250, y: 800, floorimage}),
        new Floor({x:8400, y: 250, floorimage}),
        new Floor({x:8600, y: 250, floorimage}),
        new Floor({x:8600, y: 800, floorimage}),
    ]
    
    spike = [
        new Spike({x:450, y:750, spikes}),
        new Spike({x:800, y:750, spikes}),
        new Spike({x:1820, y:350, spikes}),
        new Spike({x:2025, y:350, spikes}),
        new Spike({x:2660, y:500, spikes}),
        new Spike({x:3050, y:750, spikes}),
        new Spike({x:3250, y:750, spikes}),
        new Spike({x:3450, y:750, spikes}),
        new Spike({x:3500, y:820, spikes}),
        new Spike({x:3550, y:820, spikes}),
        new Spike({x:3600, y:820, spikes}),
        new Spike({x:3985, y:600, spikes}),
        new Spike({x:1490, y:750, spikes}),
        new Spike({x:1690, y:750, spikes}),
        new Spike({x:1890, y:750, spikes}),
        new Spike({x:2090, y:750, spikes}),
        new Spike({x:2140, y:750, spikes}),
        new Spike({x:4575, y:350, spikes}),
        new Spike({x:4999, y:750, spikes}),
        new Spike({x:5200, y:750, spikes}),
        new Spike({x:5830, y:575, spikes}),
        new Spike({x:6300, y:750, spikes}),
        new Spike({x:6350, y:750, spikes}),
        new Spike({x:6400, y:750, spikes}),
        new Spike({x:7685, y:200, spikes}),
        new Spike({x:7350, y:750, spikes}),
        new Spike({x:7525, y:750, spikes}),
    ]
    
    
    lava = [
        new Lava({x:525, y: 800, lavaimage}),
        new Lava({x:400, y: 800, lavaimage}),
        new Lava({x:2400, y: 800, lavaimage}),
        new Lava({x:2500, y: 800, lavaimage}),
        new Lava({x:2600, y: 800, lavaimage}),
        new Lava({x:2700, y: 800, lavaimage}),
        new Lava({x:2800, y: 800, lavaimage}),
        new Lava({x:2900, y: 800, lavaimage}),
        new Lava({x:3650, y: 800, lavaimage}),
        new Lava({x:3700, y: 800, lavaimage}),
        new Lava({x:3750, y: 800, lavaimage}),
        new Lava({x:3800, y: 800, lavaimage}),
        new Lava({x:3850, y: 800, lavaimage}),
        new Lava({x:3900, y: 800, lavaimage}),
        new Lava({x:3950, y: 800, lavaimage}),
        new Lava({x:4000, y: 800, lavaimage}),
        new Lava({x:4050, y: 800, lavaimage}),
        new Lava({x:5875, y: 800, lavaimage}),
        new Lava({x:7815, y: 725, lavaimage}),
    ]

    //Set an offset to the background scrolling so that we can set up a win scenario
    scrollOffset = 0;
}

//Animation loop function
function animate() 
{
   
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    player.update()
    
    
    //Draw the platforms
    platforms.forEach((platform) => {
        platform.draw()
    })
    //Draw the floor
    floor.forEach((floor) => {
        floor.draw()
    })
    //Draw Spikes
    spike.forEach((spike) => {
        spike.draw()
    })
    //Draw Lava
    lava.forEach((lava) => {
        lava.draw()
    })

    //Add on to the velocity if the right or left key is pressed
    if (keys.right.pressed && //prevent player from moving off screen; scroll background instead
        player.position.x < 400 
    ) {
        player.velocity.x = 5;
    }

    else if ((keys.left.pressed && player.position.x > 25) || 
    keys.left.pressed && scrollOffset == 0 && player.position.x > 0) {
        player.velocity.x = -5;
    }

    else{
        player.velocity.x = 0;

        //Move the background/platforms instead of the player character
        //Right Key
        if (keys.right.pressed) {
            scrollOffset += 5;
            platforms.forEach((platform) => {
                platform.position.x -= 5
            })
            floor.forEach((floor) => {
                floor.position.x -= 5
            })
            spike.forEach((spike) => {
                spike.position.x -= 5
            })
            lava.forEach((lava) => {
                lava.position.x -= 5
            })
        }
        //Left Key
        else if (keys.left.pressed && scrollOffset > 0) {
            scrollOffset -= 5;
            platforms.forEach((platform) => {
                platform.position.x += 5
            })
            floor.forEach((floor) => {
                floor.position.x += 5
            })
            spike.forEach((spike) => {
                spike.position.x += 5
            })
            lava.forEach((lava) => {
                lava.position.x += 5
            })
        }
    }

    //If statement for player collision with the different platforms
    platforms.forEach((platform) => {
        if(player.position.y + player.height <= platform.position.y && 
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y = 0
        }
    })

    //Player collision for flooring
    floor.forEach((floor) => {
        if(player.position.y + player.height <= floor.position.y && 
            player.position.y + player.height + player.velocity.y >= floor.position.y &&
            player.position.x + player.width >= floor.position.x &&
            player.position.x <= floor.position.x + floor.width
        ) {
            player.velocity.y = 0
        }
    })

    //Player collision for spikes
    spike.forEach((spike) => {
        if(player.position.y + player.height <= spike.position.y && 
            player.position.y + player.height + player.velocity.y >= spike.position.y &&
            player.position.x + player.width >= spike.position.x &&
            player.position.x <= spike.position.x + spike.width
        ) {
            //Reset game if player collides
            gameStatus();
        }
    })

    //Player collision for lava
    lava.forEach((lava) => {
        if(player.position.y + player.height <= lava.position.y && 
            player.position.y + player.height + player.velocity.y >= lava.position.y &&
            player.position.x + player.width >= lava.position.x &&
            player.position.x <= lava.position.x + lava.width
        ) {
            //Reset game if player collides
            gameStatus();
        }
    })
    

    //Win Scenario TRUE ENDING
    if (scrollOffset > 8500 && player.position.y <= 250) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "25px Arial"
        ctx.fillText("Congratulations! You achieved the TRUE ENDING of the game. You are truly a GAMER GOD",
        400, 400)
    }
    //Win scenario ALT ENDING
    else if (scrollOffset > 8500) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "25px Arial"
        ctx.fillText("Congratulations! You beat the game! However, you did not achieve the true ending. Complete the top portion of the map to obtain the true ending",
        150, 400)
    }

    //Lose / Death Scenario (For falling to death ONLY)
    if (player.position.y > canvas.height) {
        gameStatus();
    }
}

//Call the animation function
animate()

//KeyDown listener for player movement 
addEventListener('keydown', ({ keyCode}) => {
    switch (keyCode) {
        //W
        case 87:
            console.log("up");
            player.velocity.y -= 17;
            break;
        //A
        case 65:
            console.log("left");
            keys.left.pressed = true;
            break;
        //S
        case 83:
            console.log("down");
            break;
        //D
        case 68:
            console.log("right");
            keys.right.pressed = true;
            break;
    }
})

//KeyUp listener to stop movement when player lifts their finger
addEventListener('keyup', ({ keyCode}) => {
    switch (keyCode) {
        //W
        case 87:
            console.log("up");
            player.velocity.y -= 0;
            break;
        //A
        case 65:
            console.log("left");
            keys.left.pressed = false;
            break;
        //S
        case 83:
            console.log("down");
            break;
        //D
        case 68:
            console.log("right");
            keys.right.pressed = false;
            break;
    }
})


/* Sources Used

*Javascript import statement*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

*Jumping Physics Ideas / Other Platformer Game Ideas*
https://www.youtube.com/watch?v=w-OKdSHRlfA @15:00

*/