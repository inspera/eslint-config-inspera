# Inspera Style Manifesto - JavaScript Edition

## The purpose of this manifesto is to:
1. Aid in writing well functioning and highly maintainable code.
2. Kill off fruitless day to day arguments over stylistic preferences.

## Core principles:
1. __All code in a project should look like it was written by one person__    
   The code base is not an arena for expressing your creativity or cleverness.
   
2. __Write for robustness__    
   Choose styles and patterns that are the least likely to cause bugs.
    
3. __Write for readability and maintainability__    
   Use informative and precise names for your functions and variables.    
   Avoid writing dense "show off" code.    
   Saving lives is important. Saving lines is not.        
   
4. __Do things the idiomatic way__   
   When you follow the established ways of doing things, others will know what to expect and what to look out for.   
   If you think other ways are better, suggest them as the new standard.   

# Style guide
For our hard formatting rules, we (mostly) follow the [**Airbnb JavaScript Style Guide**](https://github.com/airbnb/javascript).  
The Airbnb styleguide is chosen because it is comprehensive, widely used and reasonably close to our own current practices.

## Our amendments:
### Line length
* We accept 140 characters

### Comments
* Do not reference Jira issues in comments. How and why the code works should be understandable from the code itself and the comments. Feel free to explain why things are done the way they are if you think it may look strange or confusing.
* Always document any parameters or return values that are not totally obvious.

### Whitespace
* Four spaces for indentation, not two.
* Function declarations must be separated with one blank line. The blank line goes above the documentation, if present.

### Bitwise operators
* Do not use them unless it is strictly necessary for performance reasons.
* Document well.

### null or undefined
Use undefined for things that are not set or have no value. One is not better than the other, but consistency is good, and undefineds are just more commonly encountered out there. 

### Nesting
* Avoid deep nesting of loops and conditional statements. Confusing nested logic is a frequent source of bugs, and can be very hard to read and debug.
* Extract logical parts into separate functions if possible.
* No nested ternary statements, except in JSX contexts if it cannot be avoided.
* Avoid nesting function calls inside conditionals and function parameters.
* Make use of nicely named variables to simplify.

# Guidelines for good naming
Good naming makes it easier to read and understand code. Try to use names that are descriptive and unambiguous, without being awkwardly long and cumbersome. Be consistent, and use the same name for the same thing across the application.

## Language, spelling and grammar
Code and comments should be written in US English.
Make an effort to avoid grammar and spelling mistakes. They may not matter to the compiler, but they can be both confusing and annoying to your fellow developers.

## Functions
Good function names are action oriented and start with a verb.
Never use nouns as function names. This is no, no:
 * car()
 * userResponse()

Getters and setters are normally prefixed with get... or set..
The exception is methods that return a boolean value. They should rather 
be prefixed with something like is... or has...
getIsReady() just sounds a bit silly, but use it if you think it is necessary to avoid confusion.

There are two exceptions:
### Constructor functions.
``` JavaScript
const newCar = new Car();
```

### Event handlers:
Event handler function names can be on either of these forms:
``` JavaScript
handleRightClick(e) {...} // Preferred
onRightClick(e) {...} // Accepted
```
Only proper event handlers should be named as such. Keep them thin and delegate all but the most trivial logic to normal, descriptively named functions. If you find yourself calling event handlers outside the context of handling the kind of event implied by its name, refactoring is called for!


### To do or not to do?
Don't doGetThatThing(), just getThatThing(). It's enough.

## Indicating the data type of a variable
Sometimes it is useful to add a suffix to the variable name to indicate the 
type of data it references. This will usually not be necessary, because we 
can easily figure it out from the context we are working in. But please 
do not hesitate to use it when you feel that it adds real value.
If so, these are the suffixes to use:

...Data:    For plain data objects. For example: let questionData = JSON.parse(questionJSON);  
...JSON:    For data objects represented as strings in the JSON format. See json.org.  
...XML:     For XML strings.  
...Node:    For DOM or XML nodes.  
...Element: For DOM or XML elements.  
...Elm:     ^^^  
...Int:     For integers (123). Not for numeric strings ("123").  
...Array:	For arrays...

Arrays should have names on the plural form, or use a prefix to indicate that it is an array and not a single value.
``` JavaScript
// Good
var cars = [];
var carArray = [];

// Bad
var car = [myCar];
``` 

## Standard names for common things
Event:      e || event  
Error:	    err || error  
Response:   res || response  
Request:    req || request  

## Some no, nos
------------
Never use "thing" when you mean "thingId".

# Files
Charcter encoding: UTF-8  
File names should be exactly the same as the name of their main export, when applicable. Use camelCase or PascalCase instead of dashes or underscores to combine words.


# Working with existing/old/legacy code
* If another decent standard is in use, follow that.
* If there is no obvious style present, consider refactoring to apply this style guide.
* Changes to make old code better comply with the main principles of this manifesto are always welcome, even though full refactoring may not be realistic.
* Always leave files you have worked with in a better state than when you opened them.

## When refactoring:
Refactor in separate commits, before making any functional changes. Refactor whole files, not just the parts you are actually intending to change, functionally. Also refactor related files if the risk and the effort are low.


# Practical usage and enforcement
Use the ESLint config in this project to lint all code.

To make the transition phase easier, we can downgrade some rules to warning level in individual repos or sub folders.

## Tooling and process
All projects should have tooling in place that makes it easy to lint the code. Ideally, linting should be integrated with the unit testing. If the linter complains, the tests fail!

All code should be linted before any pull request is made.


## Installing and using the config

To use it with a locally installed eslint:
```shell
$ npm i -D git+https://github.com/inspera/eslint-config-inspera.git#1.5.0
```

To use it with a globally installed eslint:
```shell
$ npm i -g git+https://github.com/inspera/eslint-config-inspera.git#1.5.0
```

After the branch is merged, you can drop the #manifesto-with-airbnb part.   
If you get an error message saying "Cannot find module 'estraverse-fb'", just upgrade eslint and babel-eslint to the latest version.

Create an .eslintrc file if you do not have one already.
Then add the following property to the .eslintrc file:

"extends": "eslint-config-inspera"

Or, if you want to use a global eslint with a local eslint-config-inspera install:

"extends": "./node_modules/eslint-config-inspera/index.js"
 
