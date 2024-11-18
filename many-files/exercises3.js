Lesson 3 Exercises - Strings 

Note: do these exercises in the Console 

3a. Create the text 'My name is:' as a string.

answer: 'My name is:'
          "My name is:"
          `My name is:`

3b. Create your name as a string (for example: 'Simon')

answer: 'Isuru Eranda Prasad'

3c.Using concatenation, add the 2 strings from 3a and 3b together 
   to create the text: 'My name is: ___' (replace ___ with your name).

    'My name is:' + 'Isuru Eranda Prasad'

3d. At a resturant, you order 1 coffee ($5) and 1 bagel ($3). Using Math,
    calculate the total cost, and using concatenation, create the text: 
    'Total cost: $__' (replace ___ with the total you calculated).
    
      5 + 3 
      = 8
    
    'Total cost: $' + 8

3e. Do the same thing as 3d, but use the template string and interpolation. 
    
    'Total cost: $${5+8}'


3f. Display the text from 3e in a popup using alert(...);

    alert('Total cost: $8')

3g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the 
    total cost, and using concatenation, create the text: 
    'Total cost: $___' ('hint: calculate in cents to avoid inaccuracies')

    'Total cost: $' + (599 + 295) / 100

3h. Do the same thing as 3g, but use the template string and interpolation.

  `Total cost: $${(599 + 295) / 100}`


3j. Using multi-line string, create the text from 3h and add a line of text 
    underneath: 'Thank you, come again!'. Display both line in a popup.

    alert(`Total cost: $${(599 + 295) / 100}
    Thank you, come again!`)


--------- Challenge Exercises ---------------


Setup: in the Amazon project, update the cart to 2 basketballs ($20.95 each)
with  $4.99 shipping, and 2 t-shirts ($7.99 each) with $4.99 shipping.

3k. Using interpolation, create the first line of text (use math to calculate the
    numbers 4 and 57.88).

    `Items (${2 + 2}):       $${(2 * 2095 + 2 * 799) / 100}`

3l. Create second line of text: 'Shipping & handiling: $9.98' (use math).

    `Shipping and handling:         $${(499 + 499) / 100}`

3m.   Create third line: 'Total before tax: $67.86'(use math)

    `Total before tax:  $${(2 * 2095 + 499 + 2 * 799 + 499) / 100}`

3n. Create fourth of line of text: 'Estimated tax (10%): $6.79' (use math)
    and Math.round(...); to calculate the exact number.

    `Estimated tax (10%):      $${Math.round(2 * 2095 + 499 + 2 * 799 + 499) / 100}`


    ----------------- exercises 3 is over ...........










