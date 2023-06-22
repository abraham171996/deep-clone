const obj1 = {
    name: 'Fazil',
    age: 24,
    address: {
      city: 'Qax',
      country: 'Azerbaijan',
    },
    hobbies: ['reading', 'traveling'],
  };
  
  const obj2 = {
    name: 'Fazil',
    age: 35,
    address: {
      city: 'Los Angeles',
      country: 'USA',
    },
    hobbies: ['reading', 'swimming'],
  };
  
  function deepEquals(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) {
      return false;
    }
  
    if (obj1 === null || typeof obj1 !== 'object' || obj2 === null || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }
  
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
  
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    return keys1.every(key => obj2.hasOwnProperty(key) && deepEquals(obj1[key], obj2[key]));
  }
  
  let result = deepEquals(obj1,obj2)
  console.log(result);