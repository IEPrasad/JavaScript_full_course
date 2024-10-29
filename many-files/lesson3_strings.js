
    Lesson 3 - Strings 

  string = text

'hello' = this is a string

ex:
  alert('hello');

  ------------- Syntax Rules for Strings --------------

  This is Concatenation ---------

  'some' + 'text'
  'sometext'

  'some' + 'more' + 'text'
  'somemoretext'

  Types of Values 

>> typeof 2 // in console
>> 'number'


>> typeof 'hello'
>> 'string'


>> 'hello' + 3
>> 'hello3'
// JavaScript automatically convert this number into a string.
 This is called

 Type coercion 
 (automatic type conversion)


 Let see how to calculate the cost

>>'$' + 20.95 + 7.99
>> '$20.957.99'

** but this is dosen't give us correct answer 

** Strings also follow the Order of Operations

      Order of Operations 

      1. (...)
      2. * /
      3. + - 

>> '$' + (20.95 + 7.99)
>> '$28.939999999999998'

but there is a problem 

let's see how to do this 

-------
 When calculating money 

 1. Calculate in cents
 2. Convert back to a dollars

 >> '$' + (2095 + 799) / 100
 >> $28.94"


 --------- 

 noe let's see how to create Items(2):   $28.94


 'Items (' + (1+1) + '):'
 "Items(2):"

let's create all of this 

>> 'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
>> 'Items (2): $28.94'


let's create a popup and display this first line of text

alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

------

In JavaScript, there are actually three ways to create a string.

  1. '....' = single quote
  2. "...." = double quote
  3. `....` = backstick
      `...` = template strings


  character:

  1. letter (a, b, c)
  2. number (1, 2, 3)
  3. symbol (!, @, #)
  4. escape characters
          \' = single quote 
          \" = double quote that is just text
          \n = newline character  

>> 'I\'m' learning JavaScript'
>> "I'm learning JavaScript"

>> alert('some\ntext');
>> some
   text

--- template strings
      Interpolation = insert value directly into a string
      Multi-line strings

  Interpolation
>> `Items(${1 + 1}): $${(2095 + 799) / 100}`
>> 'Items (2): $28.94'
  // ${} = insert value directly into string

  Muti-line strings
>> `some
  text`
>> 'some\ntext'

What should we use to create a string

    1. Use '...' by default

    2. If we need Interpolation, multi-line strings
       Use `...`

-----------------------------------------


In this lesson:

1. String = text

2. Use strings and numbers together

3. Three ways to create strings:
  '...' "..." `...`

4. Escape characters: \' \n

5. Interpolation, multi-line strings


--------------- lesson 3 is over ------ do the exercises ------


















