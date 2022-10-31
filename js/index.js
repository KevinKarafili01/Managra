const words = [
    "beats",
    "acres",
    "alert",
    "angel",
    "coats", 
    "boats"
]
 //rWord = words[Math.floor(Math.random() * words.length)];
let anagrams = [];
function anagramMaker(rWord, anagram = ''){      // grabs random word from list then puts said word in its own array where then the individual letters get seperated and rearrraned
                                                // to make many permutations but at the end only one gets picked
if(!rWord){
    anagrams.push(anagram);
    return;
} else 
    for (let i = 0; i < rWord.length; i++) {
        anagram += rWord[i];
        anagramMaker(rWord.slice(0, i) + rWord.slice(i + 1), anagram);
        anagram = anagram.slice(0, anagram.length - 1);

    }
}

//anagramMaker(words[Math.floor(Math.random() * words.length)]);
//console.log(anagrams[Math.floor(Math.random() * anagrams.length)]);


let keyButtons = document.querySelector(".keyboard-btns");
let emptyTile = document.querySelector("#tile");

keyButtons.addEventListener('click', e => {
emptyTile.innerHTML = e.target.matches("value");
})





