// Exercise5.2
// Write a function called vowelCount which accepts a string and returns a map where the keys arenumbers and the values are the count of the vowels in the string.

const isVowel = (char) => {
    return 'aeiou'.includes(char);
}


function vowelCount(checkStr) {
    const vowelMap = new Map();

    for (let char of checkStr) {
        charLower = char.toLowerCase()
        if(isVowel(charLower)){
            if(vowelMap.has(charLower)){
                vowelMap.set(charLower, vowelMap.get(charLower)+1);
            }
            else {
                vowelMap.set(charLower, 1);
            }
        }
    }
    return vowelMap
}

const varVowelMap = vowelCount('Monzambique');
console.log(varVowelMap); //Map(5) { 'o' => 1, 'a' => 1, 'i' => 1, 'u' => 1, 'e' => 1 }
