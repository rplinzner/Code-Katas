// https://www.codewars.com/kata/5a71939d373c2e634200008e

function solve(str) {
    const spaces = [];
    const sentence = []
  str.split("").forEach((c, i) => {
      if (c == " ") spaces.push(i);
      else sentence.push(c)
  });
    const rev = sentence
      .reverse();
   
    spaces.forEach(i => rev.splice(i, 0, ' '))
    return rev.join("");
 
   
}

console.log(solve("codewars"), "srawedoc");
console.log(solve("your code"), "edoc ruoy");
console.log(solve("your code rocks"), "skco redo cruoy");
console.log(solve("i love codewars"), "s rawe docevoli");
