var Xbox = {
    company: "Microsoft"
};

var announce = "Hi I am made at " + Xbox.company + " I'm an Xbox";
function literalNotation() {
    document.write(announce);
}

var Gaming = function(name, type) {
    this.name = name;
    this.type = type;
};


gaming().prototype.displayGaming = function() {
    document.write("<input type='text' size='100' value=\'" + this.name + "\'><br><br>");
    this.launchGaming();

};

// encapsulates a method to launch the Vehicle
Gaming.prototype.launchGaming = function () {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    document.getElementById(this.name).innerHTML = "A piping hot serving of " + this.name + "!";
};

function Fun(name, type, color) {
    Gaming.call(this, name, type);
    this.color = color;
}

Fun.prototype = Object.create(Gaming.prototype);

Fun.prototype.constructor = Fun;

Fun.prototype.displayFun = function() {
    document.write("<input type='text' size='100' value=\'" + this.name + "\'><br><br>");
    this.launchGaming();
};

Fun.prototype.launchGaming = function() {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" +
        "Text area" + "</textarea><br><br>");
    var output = "";
    output += "Downloading...\n";
    output += "YAY Fun";
    document.getElementById(this.name).innerHTML = output;
};


function main() {
    //instantiate an array to hold vehicles
    var gameArray = [];
    //populate the vehicle array with objects and subclass objects
    gameArray[0] = new Gaming("Xbox One", "Original");
    gameArray[1] = new Fun("Xbox One", "Slim", "White");

    for(var i = 0; i < gameArray.length; i++) {
        gameArray[i].displayFun();
    }
}