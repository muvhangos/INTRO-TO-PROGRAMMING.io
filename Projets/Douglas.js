// Writing the JavaScript code: Page 163
var replaceButton = document.getElementById("replaceButton");
replaceButton.addEventListener("click", replaceIt);


// 1: Page 163
function replaceIt(){
    // 2: Page 163
    var storyDiv = document.getElementById("story");
    // 3: Page 164
    var adj1 = "<span class='replacement'>" + document. getElementById("adj1").value + "</span>";
    
    // 2: Page 166
    var verbIng = "<span class='replacement'>"+ document.getElementById("verbIng").value + "</span>";
    var roomInHouse = "<span class='replacement'>"+ document.getElementById("roomInHouse").value + "</span>";
    var color = "<span class='replacement'>"+ document.getElementById("color").value + "</span>";
    var nounPlural = "<span class='replacement'>"+ document.getElementById("nounPlural").value + "</span>";
    var pastVerb = "<span class='replacement'>"+ document.getElementById("pastVerb").value + "</span>";
    var beverage = "<span class='replacement'>"+ document.getElementById("beverage").value + "</span>";
    var musicType = "<span class='replacement'>"+ document.getElementById("musicType").value + "</span>";
    var diffRoom = "<span class='replacement'>"+ document.getElementById("diffRoom").value + "</span>";
    var exclamation = "<span class='replacement'>"+ document.getElementById("exclamation").value + "</span>";
    var pastVerb2 = "<span class='replacement'>"+ document.getElementById("pastVerb2").value + "</span>";
    var adjDance = "<span class='replacement'>"+ document.getElementById("adjDance").value + "</span>";
    var animal = "<span class='replacement'>"+ document.getElementById("animal").value + "</span>";
    var city = "<span class='replacement'>"+ document.getElementById("city").value + "</span>";
    var verb = "<span class='replacement'>"+ document.getElementById("verb").value + "</span>";
    // 6: Page 164
    var theStory = "<h1>Douglas's Dance Party</h1>";

    // 7: Page 164
    theStory += "One " + adj1 + " day,";
    /* Put the rest of the story here, using the += operator */
    // 3: PAge 166
    theStory += " Douglas was " + verbIng;
    theStory += " in his " + roomInHouse;
    theStory += ", reading a book about " + color;
    theStory += " " + nounPlural + ".<br><br>";
    theStory += "As he " + pastVerb;
    theStory += " his " + beverage;
    theStory += ", he heard " + musicType;
    theStory += " music playing in the " + diffRoom + ".<br><br>";
    theStory += exclamation + "! he exclaimed, as he ";
    theStory += pastVerb2 + " down the stairs to join the ";
    theStory += adjDance + " party.<br><br>";
    theStory += "Douglas danced the " + animal;
    theStory += " Dance, the " + city + " Shake,";
    theStory += " and took the prize for dancing the best Electric" + verb + ".<br><br>";
    // 9: Page 165
    storyDiv.innerHTML = theStory;
}
