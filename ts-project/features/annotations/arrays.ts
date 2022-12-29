const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['Corolla'], ['camaro']];

//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
carMakers.push('Audi');

//help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-10');
importantDates.push(new Date());
