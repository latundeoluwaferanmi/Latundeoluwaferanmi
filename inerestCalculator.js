let data = [
  {principal: 2500, time: 1.8},
  {principal: 1000, time: 5},
  {principal: 3000, time: 1},
  {principal: 2000, time: 3}
]
let rate = 0; 
let interest = 0;
let interestData = [];
function interestCalculator(array) {
  array.forEach((i) => {
      if(i.principal >= 2500 && i.time > 1 && i.time < 3)
          rate = 3;
        else if(i.principal >= 2500 && i.time >= 3)
          rate = 4;
        
        else if(i.principal < 2500 || i.time <= 1)
          rate = 2;
        
        else 
          rate = 1;
          interest = (i.principal * rate * i.time)/ 100;
          interestData.push({
            principal: i.principal,
            rate,
            time: i.time,
            interest
        });  
  });
  console.log(interestData);
  return interestData;
};
interestCalculator(data);