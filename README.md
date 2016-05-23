# Inspera Style Manifesto - JavaScript Edition

## The purpose of this manifesto is to:
1. Aid in writing well functioning and highly maintainable code.
2. Kill off fruitless day to day arguments over stylistic preferences.

## Core principles:
1. All code in a project should look like it was written by one person.
  - The code base is not an arena for expressing your creativity or cleverness.

2. Write for robustness
  - Choose styles and patterns that are the least likely to cause bugs.

3. Write for readability and maintainability.
  - Use informative and precise names for your functions and variables.
  - Avoid writing dense "show off" code.
  - Saving lives is important. Saving lines is not.

4. Do things the idiomatic way
  - When you follow the established ways of doing things, others will know what to expect and what to look out for.
  - If you think other ways are better, suggest them as the new standard.

# Style guide
For our hard formatting rules, we (mostly) follow the Airbnb JavaScript Style Guide.
https://github.com/airbnb/javascript

# Our amendments:
## Comments
* Do not reference Jira issues in comments. How and why the code works should be understandable from the code itself and the comments. Feel free to explain why things are done the way they are if you think it may look strange or confusing.

* Always document any parameters or return values that are not totally obvious.

## Whitespace
* Four spaces for indentation, not two.

## Commas
* Trailing commas are allowed, but not enforced.

## Bitwise operators
* Do not use them unless it is strictly necessary for performance reasons.
* Document well.

## Nesting
* Avoid deep nesting of loops and conditional statements. Confusing nested logic is a frequent source of bugs, and can be very hard to read and debug.
* Extract logical parts into separate functions if possible.
* No nested ternary statements, except in JSX contexts if it cannot be avoided.
* Avoid nesting function calls inside conditionals and function parameters.
* Make use of nicely named variables to simplify.


# Guidelines for good naming

Good naming makes it easier to read and understand code. Try to use names that are 
descriptive and unambiguous, without being awkwardly long and cumbersome. Be consistent, 
and use the same name for the same thing across the application.


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
const newCar = new Car();

### Event handlers:
Event handler function names can be on either of these forms:
``` JavaScript
handleRightClick(e) {...} // Preferred
onRightClick(e) {...} // Accepted
```
Only proper event handlers should be named as such. Keep them thin and delegate all but the most trivial logic to normal, descriptively named functions. If you find yourself calling event handlers outside the context of handling the kind of event implied by its name, refactoring is called for!


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


# Practical usage
To use it with a locally installed eslint:
```shell
$ npm install --save git+https://github.com/inspera/eslint-config-inspera.git
```

To use it with a globally installed eslint:
```shell
$ npm install -g git+https://github.com/inspera/eslint-config-inspera.git
```

Create an .eslintrc file if you do not have one already.
Then add the following property to the .eslintrc file:

"extends": "eslint-config-inspera"

Or, if you want to use a global eslint with a local eslint-config-inspera install:

"extends": "./node_modules/eslint-config-inspera/index.js"


Rules not covered by ESLint:
----------------------------
Newlines: \n
Charcter encoding: UTF-8
