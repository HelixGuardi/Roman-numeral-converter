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
  if(!num){
    return "Please enter a valid number"
  } else if (num < 0){
    return "Please enter a number greater than or equal to 1"
  } else if (num >= 4000){
    return "Please enter a number less than or equal to 3999"
  } else {
    return convertDecimalToRoman(num)
  }
}

convertBtn.addEventListener('click', () => {
  const result = isValid(input.value)
  resultContainer.textContent = result;
  resultContainer.classList.add('resultMsg')
  output.textContent = ""
  output.appendChild(resultContainer)
})
