function convertToRoman(num) {
  if (num === 0) return ''; // No Roman numeral for 0

  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = '';
  for (let [symbol, value] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }
  return result.toUpperCase();
}

function handleConvert() {
  const input = document.getElementById('numberInput').value;
  const result = convertToRoman(parseInt(input));
  document.getElementById('resultBox').textContent = result || 'No Roman numeral for 0';
}
