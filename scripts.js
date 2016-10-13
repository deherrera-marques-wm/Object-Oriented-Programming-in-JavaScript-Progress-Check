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

Gaming.prototype.launchGaming = function () {
    document.write("<textarea rows = '6' cols='50' id=\'" + this.name + "\'>" + "Text area" + "</textarea><br><br>");
    document.getElementById(this.name).innerHTML = "This  " + this.name + " is so crazy!";
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
    output += "YAY!! time to have some fun";
    document.getElementById(this.name).innerHTML = output;
};


function main() {
    var gameArray = [];
    gameArray[0] = new Gaming("Xbox One", "Original");
    gameArray[1] = new Fun("Xbox One", "Slim", "White");

    for(var i = 0; i < gameArray.length; i++) {
        gameArray[i].displayFun();
    }
}