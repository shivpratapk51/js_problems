function variables(){
    // var
function varKeyWord() {
    // var keyword
    /*
          The var keyword declares a variable in a function scope. Function scope means if a variable is declared inside the function, it can be accessed only inside the function. When var is declared globally, global access is possible. Let's see a program to understand this better.
      */
    //Program:-
    var a = 10;
  
    function func() {
      var b = 10;
      // global scope
      console.log("a: " + a);
  
      // function scope
      console.log("b: " + b);
    }
  
    func();
  
    // global scope
    console.log("a: " + a);
  
    // function scope
    console.log("b: " + b);
  
    //As expected, an error occurs, as variable b is function scoped and cannot be accessed outside of the function.Inside the scope, the variables can be re-declared and updated without any error.
  
    //Right Code
    var a = 10;
  
    console.log("a before re-declaration: " + a);
  
    function func() {
      // re-declared
      var a = 20;
  
      console.log("a after re-declaration: " + a);
    }
  
    func();
  
    // updated
    a = 30;
  
    console.log("a after updation: " + a);
  
    /*
      Output:- 
          a before re-declaration: 10
  
          a after re-declaration: 20
  
          a after updation: 30
  */
  
    /*
    Updation and re-declaration can cause a severe issue when we unknowingly declare another variable using the same name inside the same scope. This will cause bugs in the code as the new variable will replace the old one. This problem is solved by introducing let, which we will explore in the latter section.
  
    Another issue with var is that these variables are not block-scoped. So in condition statements, variables are not scoped to that statement but the entire function or the global scope.
  */
  
    for (var i = 0; i < 5; i++) {
      console.log(i);
    }
  
    // i is printed when outside the block
    console.log(i);
  
    /*
   Output:-
      0
      1
      2
      3
      4
      5
  */
  }
  
  //let
  function letKeyWord() {
    //let
    /**
              The let keyword is the improved version of var. Variables declaration using let eliminates the issues that we discussed above. let creates block-scoped variables, i.e., the variable is only accessible inside the block in which they are declared. When let is declared globally, global access is possible.
           */
  
    //example
    let a = 20;
  
    function func() {
      let a = 30;
      console.log("a: " + a);
    }
  
    func();
    console.log("a: " + a);
  
    //Output
    /**
              a: 30
              a: 20
              Error is not generated because both a's are treated as different variables since they have different scopes. 
              Inside the scope, the variables can be updated but not re-declared.
           */
  
    let b = 20;
  
    console.log("a: " + b);
  
    // updated
    b = 30;
    console.log("a after updation: " + b);
  
    // re-declared
    let b = 40;
    console.log("a after re-declaration: " + b);
  
    /**
           //Output       
          In this case, an error occurs when we try to re-declare the variable.
          
          Now let's see the behavior of let in block scope.
               */
  
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
  
    console.log(i);
  
    /**
                  
              An error occurs here as "i" cannot be accessed outside the block.
              */
  }
  
  //const
  function constKeyWord() {
    //const
    /**
              The const keyword is used to declare the variable as constants. Like, let, const is also block scoped. When const is declared globally, global access is possible
  
              const variables cannot be re-declared or updated. In const declaration, the variable must be initialized at the time of declaration, else error occurs. 
  
              Let's go through the examples.
           */
  
  
  
    const a = 3;
    // error caused as a cannot be re-assigned
    const a = 5;
    console.log("a: " + a);
  
  
  
  
    const a = 3;
  
    // error caused as a cannot be update
    a = 6;
    console.log("a: " + a);
  
  
  
  
    function func() {
      const b = 4;
     }
     
     // error caused as b cannot be accessed due to block scope
     console.log("b: " + b);
  
  
  
  
     /**
  
      An error occurs in these cases due to the reasons mentioned above for each case.
  
      If const is used to create an object, the object properties can still be changed inside that object. However, it is not possible to update the object as a whole.
      */
  
  
      const student = {
          name: "Raj Malhotra",
          age: 18,
       }
       
       console.log(student.name + "'s age before updation " + student.age);
       student.age = 19;
       console.log(student.name + "'s age after updation " + student.age);
  
       //Output
       /**
         Raj Malhotra's age before updation 18
  
         Raj Malhotra's age after updation 19
        */
  
  
  }

  //Variable naming conventions
    //The rules to be followed while naming the variables are called the variable naming conventions. The variable naming conventions in JavaScript is are as follows:-
        /*        
            1. Reserved keywords like if, delete, new, etc., should not be used as variable names.
            2. Variable names must start with either a letter, an underscore _, or the dollar sign $. 
            3. Variable names beginning with a numeral are invalid.
            4. Variable names are case-sensitive, and special care must be taken.
        */

}