# Ford Functions in JavaScript

## Objectives
+ Build functions that complete calculations
+ Link arguments and return values to achieve a desired result

## Terminology to Look Out For
+ functions
+ arguments
+ parameters
+ return

## About
When designing functions, it's important to note each input (argument) and what the desired output is.

Functions should do one thing, and they should do that thing very well.

That means that it's often more important to break bigger functions down into smaller, more specific functions. This will help with code reuse and tracking down bugs later on.

This lab will provide context, information, documentation, and a few tests. Some of the code will be filled in already, but the challenge will be to supply the code necessary to pass all the tests.

## Instructions
The school newspaper is doing an article for tomorrow's edition on the financial benefits of Ford's new hybrid cars. Unfortunately, the lead researcher lost the log of all their driving miles! Now, they have no data and you're their last hope.

The team has driven their Ford Fusion Hybrid enough to know the miles per gallon info - **43 in the city and 41 on the highway**.

<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Ford_Fusion_Hybrid_WAS_2017_1650.jpg" alt="Ford Fusion Hybrid" style="width: 200px; height: 200px"/>

First, build a `calculateCostOfGas` function that should take students'info and calculate the amount of money spent on gas yearly. 
Then, build a `moneySaver` function. This function should use the `calculateCostOfGas` function to compare the cost of driving their current car to driving the 2017 Ford Fusion Hybrid.

This will test your knowledge of using functions and arguments. Be conscious about what input each function takes and what output it returns.

To help with tracking, proper documentation has been supplied to each function. Analyze the comments before building out your function! Think about what variables will be provided, and what variables need to be created in each function.

**Anywhere the documentation isn't complete, add in the necessary info**

## Information
Three case studies have been designed to demonstrate the efficiency of hybrid vehicles. Look over each student's information and design your function to address each situation.

Here's your info:

  + **Kayla** is a high school senior getting ready for college. Driving to college means 20 miles a day on the highway, and 3 miles a day in the city. Kayla's school is in session for only 150 days each year, and she takes the bus when school is out. Her Ford Escape gets **23 mpg** in the city and **31 mpg** on the highway.
  
  + **Paola** is a junior who loves cars. Along with getting to school, her afternoon, ocean-side joyrides put her at an average of 26 miles a day in the city, and 5 on the highway. Her Ford Mustang gets **21 mpg** in the city and **30 mpg** on the highway.
  
  + **Mariah** is a senior who just got her license. She's taking a year off to roadtrip around the country and will be driving an average of 200 miles a day on the highway along with 4 miles a day in the city. The only days she won't be driving are during the 1 week of normal Christmas break. Her Ford Explorer gets **19 mpg** in the city and **27 mpg** on the highway.

## Goal:
Calculate the yearly savings in gas each of these students can expect by driving the **Ford Fusion Hybrid**.

Use the tests as a guide!
