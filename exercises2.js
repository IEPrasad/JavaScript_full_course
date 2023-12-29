
  Lesson 2 Exercises - Numbers and Math
  
  Note: do these exercises in the console

  2a. At a resturant, you order 1 soup for $10, 3 burgers for $8 each, 
  and 1 ice cream for $5. Use JavaScript to calculate the cost of the order

    in console -----
  10 + 3*8 + 5 
  >> 39

  2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).
   
  (1850 + 2*750) / 100

  2d. Calculate a 10% of tax for the total in exercises 2c.

  ((1850 + 2*750) / 100 ) * 0.1

  2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1/100, 
  so 20% = 20/100 = 0.2)

  ((1850 + 2*750) / 100 ) * 0.2
  
---------- 
Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your
cart so you have 1 basketball, 1 t-shirt, and 1 toaster. Choose $4.99 shipping for the toaster.


2f. Calculate the cost of the products (before shipping and taxes).
  Hint: calculate in cents to avoid inaccuracies.

  (2095 + 799 + 1899) / 100

2g. Calculate the 10% of tax exactly. Hint use math.round()

  (2095 + 799 + 1899) / 100
  47.93

  Math.round(47.93)
  48

2i. Calculate Order total at the bottom. 

  (5292 + 529) / 100

  Finish: after finishing 2i remove the toaster from your cart.
  
-----------------

2j. Let's say we want to always rounder down (2.8 => 2)
    using Google or an A.I. tool, search for the code to do this.

    let number = 2.8;
    let roundedDown = Math.floor(number);

    console.log(roundDown); // Output: 2

----------  this is from AI   ------------------ 

the solution from GitHub --- supersimple dev ----
  
      Math.floor(2.8)


2k. Let's always round a number up (2.2 => 3). Search how to do this.

        let number = 2.2;
        let roundedUp = Math.ceil(number);

        console.log(roundedUp); // Output: 3
 
      --------------- this is from AI ---------------

        Meth.ceil(2.2)
      
      --------- this is the answer GitHub ---------

Challenge Exercises 

We'll use JavaScript to convert temperatures from Celsius to Fahrenheit. The formula is: 

    ** Fahrenheit = (Celsius * 9 / 5) + 32 
    ** Celsius = (Fahrenheit - 32) * 5 / 9 

2l. The temperature is 25C. Calculate the temperature in Fahrenheit. (77)

    (25 * 9/5) + 32 = 45 + 32 = 77F

2m. The temperature is 86F. Calculate the temperature in Celsius. (30)

    (86 - 32) * 5 / 9
    = 54 * 5 / 9 = 30C

2n. The temperature is -5C. Calculate the temperature in Fahrenheit. (30)
    (-5 * 9/5) + 32 = -9 + 32 = 23F


    ------------------- ------------------------ ------------------------ ------------------------------



