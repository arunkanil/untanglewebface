var rainBowColors = new Array();
rainBowColors.push("#f3fafe"); //Blue: #c4eefc
rainBowColors.push("#e0ffe0"); //Green: #acf9ac
rainBowColors.push("#fff1f3"); //Pink: #fce3e6
var rainbowCounter = 0;

var interval = setInterval(function(){
    jQuery(".switch").css("background-color", rainBowColors[rainbowCounter]);

    rainbowCounter++;

    //Reset counter
    if (rainbowCounter == rainBowColors.length) 
    {
        rainbowCounter = 0;
    }
},3000);