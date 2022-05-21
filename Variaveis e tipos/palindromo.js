
let myVar = 'a dama admirou o rim da amada'

myVar = myVar .split(" ") .join("");

// function verificarPalindromo (string){
//     if (!string) return "string inexistente" ;

    
    
//    return string  .split("").reverse().join("") === string;

// }


// console.log (verificarPalindromo (myVar))


function verificarPalindromo2(string) {
    if (!string) return "string inexistente";

    for( var i = 0; i < string.length / 2; i++) {
        if (string [i] !== string[string.length -1 - i]){
            return false;
        }
    }

    return true;
}

console.log (verificarPalindromo2 (myVar))

