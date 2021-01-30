1. Line 11 will output the length of the `prices` array, because `i` was declared with `var` and it persists beyond the for loop.

2. Line 12 will output the discounted price of the last item in the `prices` array because after the for loop runs, `discountedPrice` will still hold that value.

3. Line 13 will output the rounded price of the last item in the `prices` array for the same reason as question 2.

4. The function will return `[50,100,150]`. The for loop does the following to each item in `prices`:

   1. stores the unrounded discounted price in `discountedPrice`
   2. stores the rounded discounted price in `finalPrice`
   3. Appends the rounded discounted price to the `discounted` array.

   Finally, the function returns the `discounted` array.

5. There will be an error because `i` is not declared in line 11's scope.

6. There will be an error for the same reason as question 5.

7. Line 13 will output the rounded discounted price of the last item in the `prices` array because `finalPrice` was declared in the same scope as line 13.
8. The function will return `[50,100,150]` for the same reason as question 4.
9. There will be an error because `i` was not declared in the same scope as line 11.
10. There will be an error for the same reason as question 9.
11. Line 13 will output `0` because a `const` variable cannot be changed after it is declared.
12. The function will not return because the program will throw an error when line 7 tries to reassign the value of a `const` variable.
13. A. `student.name`
    B. `student['Grad Year']`
    C. `student.greeting();`
    D. `student.['Favorite Teacher'].name`
    E. `student.courseLoad[0]; 
14. A. `'32'` because `'3'` is a string so the + is a concatenation     operation, so `2` gets converted to a string.
    B. `1` because - is an arithmetic operation so the `'3'` gets converted to a number.

    C. `3` because `3` is a number, so + is an arithmetic operation which causes `null` to be converted to `0`.

    D. `'3null'` because `'3'` is a string so + is a concatenation operation.

    E. `true` is not a string, so + is an arithmetic operation that converts `true` to `1`.

    F. `false` is not a string, so + is an arithmetic operation that converts both `false` and `null` to `0`.

    G. `"3"` is a string so + is a concateation operation which converts `undefined` into a string.

    H. - is an arithmetic operation, so when it tries to convert `undefined` into a number, the result is `NaN`.

15. A. `true` because strings get converted to numbers for comparisons with other numbers.

    B. `false` because strings are compared based on lexicographical order and 2 is greater than 1.
    
    C. `true` because strings get converted to numbers for comparisons with other numbers.

    D. `false` because `===` does not do any type conversions.

    E. `false` because when `true` gets converted from a Boolean to a number, it becomes a `1`.
    
    F. `true` because `Boolean(2)` evaluates to `true`.
16. `===` does the comparison without doing any typ conversions, so comparing things that are different types will always be false.
17. `'How are you?'` gets printed to the console beacuse the first `if` conditions is false because `true` gets converted to `1` which is not equal to `2`. The second `if` condition is `true` because it is nonzero.
18. see `.js` file
19. The result is `[6,8,10]`. For each value in the initial array, each number first gets passed to the `doSomething` function on line 4. `doSomething` adds 2 to the number and then sends it via callback to unamed function on lines 4-6 which multiplies the number by 2. Therefore each number get 2 added to it and then multiplied by 2 before being pushed into `newArr`.
20. see `'.js` file.
21. ```
    1
    4
    3
    2
    ```




