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

##