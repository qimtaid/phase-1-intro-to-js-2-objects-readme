const obj = {};

const obj = { key: value };

const obj = {
    key1: value1,
    key2: {
      innerKey1: innerValue1,
      innerKey2: innerValue2,
    },
  };

  const address = {
    street: {
      line1: "11 Broadway",
      line2: "2nd Floor",
    },
    city: "New York",
    state: "NY",
    zipCode: "10004",
  };

  const meals = {
    breakfast: "Avocado toast",
    lunch: "Avocado toast",
    dinner: "Avocado toast",
  };
  
  meals.breakfast;
  // => "Avocado toast"
  
  meals.dinner;
  // => "Avocado toast"

  const meals = {
    breakfast: "Avocado toast",
    lunch: "Avocado toast",
    dinner: "Avocado toast",
  };
  
  meals.breakfast;
  // => "Avocado toast"
  
  meals.dinner;
  // => "Avocado toast"

  address.street;
//=> { line1: "11 Broadway", line2: "2nd Floor" }

address.city;
//=> "New York"

address.state;
//=> "NY"

address.zipCode;
//=> "10004"