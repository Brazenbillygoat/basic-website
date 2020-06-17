
//instanciating variables to reverse a word
const backwordsForm = document.getElementById("backwordsForm")
const backwordsField = document.getElementById("backwordsField")
const backwordsParagraph = document.getElementById("backwordsParagraph")


//javascript for reversing the word on homepage
backwordsForm.addEventListener("submit", (e) => {
    let wordToReverse = (backwordsField.value)
    if (document.getElementById("backwordsParagraph").innerHTML !== "") {
        document.getElementById("backwordsParagraph").innerHTML = ""
    }
    e.preventDefault()
    //reverseTheWord(wordToReverse)
    makeBackwords(wordToReverse)
})

function makeBackwords(x) {
    
    let newWord = document.createTextNode(reverseTheWord(x))
    if (backwordsField.value.trim() !== "") {
        backwordsParagraph.appendChild(newWord)
    } else {
        alert("Please enter a word or phrase to reverse")
    }

    backwordsField.value = ""
    backwordsField.focus()
}

function reverseTheWord(word) {
    let backwordsArray = []
    let wordSplit = word.split("")
    let count = word.length - 1
    console.log(count)
    while (count >= 0) {
        backwordsArray.push(wordSplit[count])
        count--
    }
    return backwordsArray.join("")
}


