const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const array = expr.match(/.{1,10}/g);
    let array2 = [];
    array.forEach(el => {
      array2.push(el.match(/.{1,2}/g));
    });
    
    let convert = [];
    
    /* функция перевода массива в морзе */
  
    const decoder = array => {
    console.log(array);
    let element = '';
    if (array.includes('**')) {return ` `;}
      
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '00') {element} else {
        array[i] === '10' ? element += '.' : element += '-';} 
  }
      return element;
  };
    
      array2.forEach(el => {
      convert.push(decoder(el));
    });
  
    console.log(array2);
    console.log(convert);
    
    let result = [];
    
    convert.forEach(el => {
      console.log(el);
      if (el === ' ') {
        
        result.push(` `);
      } else
      result.push(Object.values(MORSE_TABLE)[Object.keys(MORSE_TABLE).indexOf(el)]);
    });
    
    return result.join('');
}

module.exports = {
    decode
}