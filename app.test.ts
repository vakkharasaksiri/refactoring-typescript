import add from './app'

let perKilo = 4;
let perMin = 1;

let k = 14.49; //to nearest 0.5
let m = 12.5; //to nearest min

let newK = 0;

describe('demo app test', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3)
    console.log(m)
    m = Math.ceil(m)
    let decimalPart = k - Math.floor(k)
    //console.log(decimalPart)
    if(decimalPart<=0.5){
      newK = Math.trunc(k) + 0.5;
    }
    else{
      newK=Math.ceil(k);
    }
    console.log(newK)
    console.log(4*newK + 1*m)
    
  })
})


