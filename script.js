const passwordLable = document.querySelector(".password")
const upperCaseBtn = document.querySelector("#upper")
const lowerCaseBtn = document.querySelector("#lower")
const numbersbtn = document.querySelector("#numbers")
const symbolsBtn = document.querySelector("#symbols")
const passwordLengthInput = document.querySelector(".password-length")
const showPasswordLength = document.querySelector(".show-password-length-lable")
const generateBtn = document.querySelector(".generate-btn")

function generatePassword(e) {
    e.preventDefault()
    const upperCase = upperCaseBtn.checked
    const lowerCase = lowerCaseBtn.checked
    const numbers = numbersbtn.checked
    const symbols = symbolsBtn.checked
    const length = passwordLengthInput.value

    const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz"
    const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numberCharacter = "1234567890"
    const symbolCharacter = "!@#$?&*_-+="

    let Characters = ""

    lowerCase ? (Characters += lowerCaseLetter) : false
    upperCase ? (Characters += upperCaseLetter) : false
    numbers ? (Characters += numberCharacter) : false
    symbols ? (Characters += symbolCharacter) : false
    Characters ? false : (Characters = lowerCaseLetter)

    function getRandomIntBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    let generatedPassword = ""

    for (let i = 0; i < length; i++) {
        generatedPassword += Characters[getRandomIntBetween(0, Characters.length - 1)]
    }

    passwordLable.innerHTML = generatedPassword
    if(passwordLable.innerHTML.length > 27 && Characters == upperCaseLetter) passwordLable.style.fontSize = "17px"
    else if(passwordLable.innerHTML.length > 25) passwordLable.style.fontSize = "18px"
    else if(passwordLable.innerHTML.length >= 20) passwordLable.style.fontSize = "20px"
    else passwordLable.style.fontSize = "25px"
}

passwordLengthInput.addEventListener("input", e => (showPasswordLength.innerHTML = e.target.value))

passwordLable.addEventListener("click", () => {
    const saveGeneratedPassword = passwordLable.innerHTML
    navigator.clipboard.writeText(passwordLable.innerHTML)
    passwordLable.innerHTML= "Copied"
    setTimeout(() => {
        passwordLable.innerHTML= saveGeneratedPassword
    }, 1500);
})

generateBtn.addEventListener("click", e => generatePassword(e))

