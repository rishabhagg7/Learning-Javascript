//  Immediately Invoked Function Expressions IIFE 


(function getStatus(){
    console.log("DB1 Connected");
})();

// semicolon needed

// OR

((name)=>{
    console.log(`DB2 Connected ${name}`);
})('Rishabh');

