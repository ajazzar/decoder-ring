// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    if ((!shift)||(shift === 0)||(shift > 25)||(shift < -25)){
      return false
    }
   
   
  let decoded = [];
  
  //decipher the code
  let decipher = '';
  for(let i = 0 ; i < 26; i++){
    decoded.push(String.fromCharCode(97+i))
  }
  //Instead of using the function keyword, this syntax uses an arrow => to define the function. 
  return input.split('').map((char)=>{
    if (decoded.includes(char.toLowerCase()) && encode){
      return String.fromCharCode(((char.toLowerCase().charCodeAt()+shift-97)%26+26)%26+97)
    }
    else if(decoded.includes(char.toLowerCase()) && !encode){
      return String.fromCharCode(((char.toLowerCase().charCodeAt()-shift-97)%26+26)%26+97)
    }
    else {
      return char
    }
  }).join('')
  
}

      // All done!
      return {
        caesar,
      };
    })();  
  
 
    
  



module.exports = { caesar: caesarModule.caesar };
