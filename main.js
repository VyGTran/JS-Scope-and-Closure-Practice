// Exercise 1
console.groupCollapsed("Exercise 1")

function exercise1() {
    function outerFunction() {
        let outerVar = "I'm outside!";

        function innerFunction() {
            let innerVar = "I'm inside!";
            console.log(outerVar); // Can we access outerVar?
            console.log(innerVar); // Can we access innerVar?
        }

        innerFunction();
    };
    outerFunction()
};

console.log(exercise1());

/* When a function is nested within another function, the variables in the outer function can be access within the inner function. */

console.groupEnd();

// Exercise 2 
console.groupCollapsed("Exercise 2")

function callHoistedFunction() {
    hoistedFunction()
    function hoistedFunction() {
        console.log('Declare Hoisted Function')
    };
};

console.log(callHoistedFunction());

console.groupEnd();

// Exercise 3
console.groupCollapsed("Exercise 3")

function exercise3() {
    
    function outerFunction() {

        let outerVar = "Outer Variable"

        function innerFunction() {
            console.log(outerVar);
        }

        return innerFunction();
    };
    outerFunction();
}
console.log(exercise3());

console.groupEnd();

// Exercise 4 
console.groupCollapsed("Exercise 4")

let globeVar = "Global Variable"

function modifyingGlobal() {
    const globeVar = "Modified Global Variable "
    console.log(globeVar);
}

function localScopeTest() {
    const globeVar = 'Local Variable';
    console.log(globeVar);
}

console.log(modifyingGlobal(), localScopeTest());
console.groupEnd();

// Exercise 5
console.groupCollapsed("Exercise 5")

function functionFactory(num) {
    return num * 2;
}

console.log(functionFactory(5));

console.groupEnd();

// Exercise 6
console.groupCollapsed("Exercise 6")

function hoistingTest() {
    //console.log(varTest);

    const varTest = "Hoisting Variable";
    console.log(varTest);

};

hoistingTest();

console.groupEnd();

// Exercise 7
console.groupCollapsed("Exercise 7")

function setupCounter(num) {
    let count = num 
    return function() {
        const increment = count++;
        console.log(increment);
    }
};
const counter = setupCounter(0);
counter();
counter();
console.groupEnd();

// Exercise 8 
console.groupCollapsed("Exercise 8")

function counterFunction(num) {
    let counter = num 
    return function () {
        const increment = ++counter
        if (increment >=4) {
        console.log('Too high for me')
        } else {
            console.log(increment);
        }  
    }
};

const counterFactory = counterFunction(0);
counterFactory();
counterFactory();
counterFactory();
counterFactory();

console.groupEnd();

// Exercise 9 
console.groupCollapsed("Exercise 9")

 let varGlobe = 'Global variable ';


function modGlobe() {
    varGlobe = 'Modified global variable';
    console.log(varGlobe)

     function innerModGlobe() {
        varGlobe = 'Inner modified global variable'
        console.log(varGlobe)
    }
    return innerModGlobe();
};

function modLocal() {
    // varLocal = 'Modified local variable';
    let varLocal = 'Local variable'    
    console.log(varLocal)

}


console.log(varGlobe)
console.log(modGlobe())
console.log(modLocal())

console.groupEnd();