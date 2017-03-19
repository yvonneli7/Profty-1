function findWord(input){
    var words = {"ass": "hi"};

    if (typeof words[input] !== "undefined"){
        return words[input];
    }

}

//var words = {"ass": "hi"}


function main() {
    var doc = document.getElementsByTagName("*");
    var x = "ass";
    //console.log(doc)
    console.log("profanity");
    var i = 0;
    while (doc[i]){
        text = doc[i].innerText;
        prof = findWord(text)

    }

    // ("*").each(function(){
    // 	if

    // })



}

document.addEventListener('DOMContentLoaded', main());