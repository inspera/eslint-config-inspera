# Guidelines for naming

Good naming makes it easier to read and understand code. Try to use names that are 
descriptive and unambiguous, without being awkwardly long and cumbersome. Be consistent, 
and use the same name for the same thing across the application.

Case
----
Functions are always mixedCased, except for constructors, which should be CamelCase.


Functions
---------
Good function names always contain a verb, since they represent actions.
Never use nouns as function names. This is no, no:
 * car()
 * userResponse()

Getters and setters are normally prefixed with get... or set..
The exception is methods that return a boolean value. They should rather 
be prefixed with something like is... or has...
getIsReady() just sounds a bit silly, but use it if you think it is necessary to avoid confusion.

The obvious exception is constructor methods.
const usedCar = getCar('AE31109');
const newCar = new Car();

Indicating the data type of a variable
--------------------------------------
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


Standard names for common things
--------------------------------
Event:      e || event
Exception:  ex || exception
Response:   resp || response
Request:    req || request


Some no, nos
------------
Never use "thing" when you mean "thingId".
