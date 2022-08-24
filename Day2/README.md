expecetion handling
promises
closer
regular expression

Exception handling deal with problem which can  arise in our code to logical issue
we try to handle exception. handling exception means. what to do incase of problem
we can also cause exception to take place.the most common way of handling exception using try catch block

within try block we put statement which cause issue
when ever issue occur. flow will go to catch block 
within catch block we can write the handling

finally block- we execute by default even exception happen
sometime we might want to do some processsing irrestive of error occur or not the finally block will execute

in build exception/error in js is e.name and e.message

promises act as as link between consumer and producer

callback function

function as and argument to another function

async make a function return  promise
await make function  wait to complete promise

regular expressin is pattern of character
the general use of regular expression is to filter or extract

Expression	Description
[abc]	Find any character between the brackets
[^abc]	Find any character NOT between the brackets
[0-9]	Find any character between the brackets (any digit)
[^0-9]	Find any character NOT between the brackets (any non-digit)
(x|y)	Find any of the alternatives specified

n+	Matches any string that contains at least one n
n*	Matches any string that contains zero or more occurrences of n
n?	Matches any string that contains zero or one occurrences of n
n{X}	Matches any string that contains a sequence of X n's
n{X,Y}	Matches any string that contains a sequence of X to Y n's
n{X,}	Matches any string that contains a sequence of at least X n's
n$	Matches any string with n at the end of it
^n	Matches any string with n at the beginning of it
?=n	Matches any string that is followed by a specific string n
?!n	Matches any string that is not followed by a specific string n
RegExp is inbuild  object provided by js

Find a single character, except newline or line terminator
\w	Find a word character
\W	Find a non-word character
\d	Find a digit
\D	Find a non-digit character
\s	Find a whitespace character
\S	Find a non-whitespace character
\b	Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b
\B	Find a match, but not at the beginning/end of a word
\0	Find a NULL character
\n	Find a new line character
\f	Find a form feed character
\r	Find a carriage return character
\t	Find a tab character
\v	Find a vertical tab character
\xxx	Find the character specified by an octal number xxx
\xdd	Find the character specified by a hexadecimal number dd

cheat sheet for regular expression
https://cheatography.com/davechild/cheat-sheets/regular-expressions/