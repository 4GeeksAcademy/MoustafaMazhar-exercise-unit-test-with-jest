// import the function sum from the app.js file
const { sum } = require('./app.js');
  //import the function from app.js
  const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')


// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});


test("One euro should be 1.206 dollars", function(){
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("1000 should be around 105,833.33 Yen", () => {
    const yen = fromDollarToYen(1000);
    const expected = 1000 * (127.9 / 1.2);
    expect(yen).toBe(expected);
})

test("100k Yen should be around 625.4 pounds", () =>{
    const pound = fromYenToPound(100000);
    const expected = (100000 / 127.9) * 0.8;
    expect(pound).toBe(expected);
})


// git clone <repository-url> <directory-path></directory-path>