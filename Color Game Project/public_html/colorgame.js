var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
setUpModeButtons();
setUpSquares();
reset();
}

function setUpModeButtons() {
        for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
        reset();
});
}
}

function setUpSquares() {
    for(var i = 0; i < squares.length; i++) {
    //add click listeners to squares:
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to pickedColor:
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }   
        });
}}

/*for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numberOfSquares = 3: numberOfSquares = 6;
        //Ugyanezt jelenti:
        if(this.textContent === "Easy") {
            numberOfSquares = 3;
        } else {
            numberOfSquares = 6;
        }
        reset();
        
        //figure out how many squares to show
        //pick new colors
        //pick a new pickedColor:
        //update page to reflect changes:
        
    });*/

function reset() {
    colors = generateRandomColors(numberOfSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    //change the colors of the squares
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];    
        } else {
            squares[i].style.display = "none";
        }
        
    }
    h1.style.backgroundColor = "steelblue";
};


/*easyBtn.addEventListener("click", function() {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
        if(colors[i]) {
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none"; 
        }
    }
});

hardBtn.addEventListener("click", function() {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i = 0; i < squares.length; i++) {
            squares[i].style.background = colors[i];
            squares[i].style.display = "block"; 
        }
});*/

resetButton.addEventListener("click", function() {
        reset();
});
 
    function changeColors(color) {
        //loop through all squares
        for(var i = 0; i < squares.length; i++) {
            //change each color to match given color
            squares[i].style.backgroundColor = color;
        }
    }
    
    function pickColor() {
        var random = Math.floor(Math.random() * colors.length);
        return colors[random];
    }
    
    function generateRandomColors(num) {
        //make an array:
        var arr = [];
        //repeat num times
        for(var i = 0; i < num; i++) {
            arr.push(randomColor());
            //get random color and push into array
           
        }
        //return that array
        return arr;
    }
    
    function randomColor() {
        //pick a "red" 0 - 255
        var r = Math.floor(Math.random() * 256);
        //pick a "green" 0 - 255
        var g = Math.floor(Math.random() * 256);
        //pick a "blue" 0 - 255
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g+ ", " + b + ")";
    }

