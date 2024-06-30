function variables() {
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
    };

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

function datatypes() {
    
  //Data types
       /*
            A data type is an attribute associated with a piece of data that determines how the data has to be interpreted. In JavaScript, there are eight basic data types: Number, BigInt, String, Boolean, null, undefined, Symbol, and Objects. All the data types except objects are primitive data types, i.e., the data type is already built-in, and the programmer does not have to create them. Let's see each of them in detail.
        */
  function Primitive_DataTypes() {
    //Number
    function Number() {
      /*
                   The number data type represents both integer and floating-point numbers. Operations like addition, subtraction, multiplication, etc., can be performed on them. It also consists of "special numeric values" like Infinity, -Infinity, and NaN.

                   # NaN represents a computational error that occurs due to an incorrect or an undefined mathematical operation.
               */
      //Example
      // integer
      let a = 10;

      // floating-point numbers
      let b = 5.7;

      // infinity
      let c = 5 / 0;

      // NaN
      let d = "coding ninjas" / 5;

      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);

      /*
                           Output:-
                               10
                               5.7
                               Infinity
                               NaN
                       */
    }

    //BigInt
    function BigInt() {
      /*
                       The number data type cannot represent integer values larger than (253 - 1) or less than -(253 - 1).  For most purposes, it is enough, but in cases like cryptography, microsecond-precision timestamps, etc., huge numbers are needed.

                       For this purpose, the data type BigInt was recently introduced to represent integers of arbitrary length. It is created by appending n to the end of an integer.
                   */
      //Example
      // n indicates it's a BigInt
      const a = 1234567890123456789012345678901234567890n;

      console.log(a);

      //Output
      /*1234567890123456789012345678901234567890n

                       Currently, BigInt is supported in most browsers like Chrome, Firefox, Safari, etc., but not in Internet Explorer.*/
    }

    //String
    function String() {
      //String
      /*The string data type is textual content surrounded by quotes. The quotes can be single quotes, double quotes, and backticks,
                       
                       Double and single quotes are simple quotes with the same functionality. 

                       Backticks are extended functionality quotes that embed variables and expressions into a string by wrapping them in ${…}. Let's look at an example.*/

      //Example

      // double quotes
      const role = "Student";

      // single quotes
      const institution = "Coding Ninjas";

      // backticks
      const result = `${role} at ${institution}`;

      console.log(result);

      //Output
      //Student at Coding Ninjas

      /*In JavaScript, there is no character data type. A string may be of zero characters, one character, or many of them.*/
    }

    //Boolean
    function Boolean() {
      //Boolean
      /*The boolean data type is a logical value with two values: true and false. Boolean values can also be a result of comparisons.*/

      //Example
      let age = 19;
      let votingStatus = age >= 18;

      console.log(votingStatus);

      //Output
      //true

      /*In the above case, the comparison result is true, and the value of votingStatus is set to true.*/
    }

    //null
    function Null() {
      //null
      /*The null data type has exactly one value: null. It is a special value that represents the intentional absence of any value.*/

      //Example
      let name = null;

      console.log(name);

      //Output
      //null

      /*In the above program, the value of the name is unknown.*/
    }

    //Undefined
    function undefined() {
      //undefined
      /*       undefined is a special value like null. If a variable is declared but not assigned, then its value is undefined.
                             It is possible to assign undefined to a variable explicitly. However, in a usual scenario, null is assigned to an unknown variable. And undefined is reserved as an initial default value for unassigned variables.
                    
                    */

      //Example;

      let name;
      console.log(name);

      // explicit declaration not recommended
      name = undefined;
      console.log(name);

      //Output;
            //undefined;
            //undefined;
    }

    //symbol
    function Symbol(){
        //Symbol
            /*The symbol is a unique and immutable data type introduced in ES6. They are created using the factory function Symbol(). Every time the factory function is called, it is guaranteed that a new and unique symbol is created. It can be used to create unique identifiers for objects. Let's understand this with an example.*/
 
            //Example 

            student1 = {
            id: Symbol(),
            name: "Raj Malhotra",
            age: 18,
            };

            student2 = {
            id: Symbol(),
            name: "Rahul Malhotra",
            age: 20,
            };

        // check if id of both the students are equal
        console.log(student1.id === student2.id)

        //Output
         //false

           /* In the above case, false is returned as both the students have unique symbol values.
            

            This was all about variables and data types in Javascript and practice it on an online javascript editor. Now let's see some frequently asked questions related to variables and data types in Javascript.*/
    }
  }

  function Non_Primitive_DataTypes(){
    //Objects
        function Object(){
            //Objects
                /*An object is a value in the memory which is possibly referenced by an identifier. It is an entity having a state and behavior. As mentioned above, an object is a non-primitive data type and must be created by the programmer.*/

                //Example 

                    student = {
                    name: "Raj Malhotra",
                    age: 19,
                    };

                    console.log("Name: " + student.name);
                    console.log("Age: " + student.age);
                
                //Output
                    /*
                    Name: Raj Malhotra
                    Age: 19
                    Name and age are the properties in the above object, and "Raj Malhotra" and 1 are the corresponding values.
                    */
        }
  }
}
