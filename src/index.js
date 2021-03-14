module.exports = function toReadable (number) {
    number = String(number)
    let one = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
      }
      
      let ten = {
        0: '',
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
      }
      
      let eleven = {
        10: '',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
      }
      let hundred = {
        0: '',
        1: 'one hundred',
        2: 'two hundred',
        3: 'three hundred',
        4: 'four hundred',
        5: 'five hundred',
        6: 'six hundred',
        7: 'seven hundred',
        8: 'eight hundred',
        9: 'nine hundred'
      }
    if (number.length == 1) {
      if (number !== 0) {
        return one[number]
      } else {
        return one[0]
      }
    } if (number.length == 2) {
      if (number % 10 == 0) {
        return ten[number/10]
      }
       if (number > 10 && number < 20) {
        return eleven[number]
      } else {
        return ten[Math.floor(number / 10)] + ' ' + one[number % 10]
      }
    } if (number.length == 3) {
      if (number %  100 == 0) {
        return hundred[Math.floor(number / 100)]
      }
      if (number % 100 % 10 == 0) {
        if (Math.floor(number % 100 < 10)) {
          return hundred[Math.floor(number / 100)] + ' ' +  one[number % 100 % 10]
        } 
         if (Math.floor(number % 100 / 10) != 1) {
          return hundred[Math.floor(number / 100)] + ' ' + ten[Math.floor(number % 100 / 10)]
        } 
         if (Math.floor(number % 100) == 10) {
          return hundred[Math.floor(number / 100)] + ' ' + ten[Math.floor(number % 100 / 10)]
        } else {
          return hundred[Math.floor(number / 100)] + ' ' + eleven[Math.floor(number % 100 / 10)]
        }
      } else {
        if (Math.floor(number % 100 < 10)) {
          return hundred[Math.floor(number / 100)] + ' ' + one[number % 100 % 10]
        }
         if (Math.floor(number % 100 / 10) != 1) {
          return hundred[Math.floor(number / 100)] + ' ' + ten[Math.floor(number % 100 / 10)] + ' ' + one[number % 100 % 10]
        } 
         if (Math.floor(number % 100) == 10) {
          return hundred[Math.floor(number / 100)] + ' ' + ten[Math.floor(number % 100 / 10)]
        }else {
          return hundred[Math.floor(number / 100)] + ' ' + eleven[Math.floor(number % 100)]
        }
      }
    }
  }
