Don’t imitate, understand


##Syntax Parsers: 

A program that reads your code and determines what it does and if its grammer is valid. 

Your code isn't magic. Someone else wrote a program to translate it for the computer. They do the work to read your code and see if it is valid. Syntax Parsers are part of the translator. 

Your code is being translated and that is what is giving to the computer. Your translated code.


##Execution Contexts:

Where something sits physically in the code you write.

Where it is written and what surrounds it.


##Lexical Environments: 

A wrapper to help manag the code that is running. 

There are lots of lexical environments. Which one is currently running is managed via execution context. It can contain things beyond what you've written in your code.


##Name/Value Pair:

A name which maps to a unique value. 

That name may be defined more than once, but only can have one value in any given context. That value may be more name/value pairs.

There is a name, and that name has a value, and that name can also have more name/value pairs as the value. Nested. 

Address: {
    Street: 'main,
    Apartment: {
        Floor: 3,
        Number: 301
    }
}

##Object:

A collection of name value pairs. -simpliest JS definition.

##Execution Context(Global)

Whenever you write code you are writting it in the Execution Context(Global)

1. Global Object
2. 'this'

These two things are created by JS for you because it is in Execution Context. Created for you by JS engine. 

Global object available to all code within that Execuction Context which is the Window and at the global level this and the window are the same. 

**Global: "not inside a function"**

When you create variables and functions that aren't inside other functions are sitting on the global object. 

There is also a link to the Outer Environment but that is null at the global level. 

The Execution Context is wrapping:

1. Global Object
2. 'this'
3. Outer Environment
4. Your Code.

##The Execution Context: Creation and Hoisting. 

Created Phases:

  #1.Creation Phase:
        -Global Object
        -'this'
        -Outer environment
        -Setup Memory Space for Variables and Functions "Hoisting"

Before your code is run JS has already set aside space for the variables and functions etc you've created. So they exsit in memory so it can access them line by line. It doesn't know what a variable's value is when it first is in the memory space so it gives all variables the value of undefined. However, functions are sitting in the memory space in their entirety. 

b() //b runs function b -HOISTING
console.log(a) //A is defined but with undefined value

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

  #2.Execution Phase:
    When your code is actually executed. 



**Hoisting: Variables Setup and set equal to 'undefined' and Functions setup**

Undefined: is a value in JS that means a variable hasn't been set. It is an actual value. So A is defined with undefined. 

<!-- //// -->