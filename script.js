const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');
const resultContainer = document.createElement('p')

const convertDecimalToRoman = num => {
  const ref = [
    ["M",1000],
    ["CM",900],
    ["D",500],
    ["CD",400],
    ["C",100],
    ["XC",90],
    ["L",50],
    ["XL",40],
    ["X",10],
    ["IX",9],
    ["V",5],
    ["IV",4],
    ["I",1]
  ];

  const res = [];
  
  ref.forEach((arr) => {
    while(num >= arr[1]) {
      res.push(arr[0])
      num -= arr[1];
    }
  })
  
  return res.join('')
}

const isValid = num => {
    if(num === 0){
        return "⚠️ Fun fact: The number 0 didn’t exist in Roman numerals. It’s like trying to order a pizza with no toppings… or crust."
    } else if (num < 0){
        return "⚔️ Whoa there, time traveler! The Romans didn’t count negative numbers — they were too busy conquering the world."
    } else if (num >= 4000){
        return "😅 Whoa! Even Caesar didn't count that high. Try something between 1 and 3999."
    } else if (!num){
        return "🧐 Are you trying to convert a secret code? Roman numerals need real numbers!"
    } else {
        return convertDecimalToRoman(num)
    }
}

convertBtn.addEventListener('click', () => {
  const result = isValid(Number(input.value))
  resultContainer.textContent = result;
  resultContainer.classList.add('resultMsg')
  output.textContent = ""
  output.appendChild(resultContainer)
})
