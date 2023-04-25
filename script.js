/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/


let userWord = prompt('get word');




let arrWord = [];
for (let i=0;i<userWord.length;i++){
    arrWord[i]=userWord[i]
}
console.log(arrWord);



function reverseWord(word,length){
    let wordrev=[];
    let count=0;
    for(let i=length; i>0; i--){
        wordrev[i]=word[count];
        count++;
        
    }
    wordrev.trim()
    console.log(wordrev);
    return wordrev;
}
let pali = true
for(let i=0;i<userWord.length;i++){
    if(arrWord[i] !== reverseWord(arrWord,userWord.length)[i]){
        pali=false;
    }

}
console.log(pali)
