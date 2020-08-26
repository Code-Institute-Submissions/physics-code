https://pauld0051.github.io/physcis-code/

Solved issues:
1. Make sure no inputs other than numbers and decimal points can be inserted into any field. Using the "number" attribute didn't work as anyone can manually override this
and spinners were removed in the CSS. So a JS isNumberKey(evt) was added that only allows numbers and decimal points. Multiple decimal points can still be added, but the
calculator only picks up the first decimal point. This meant users can not enter incorrect terms into the fields and prevents a NaN return on submit. 
2. Modals will not open when using a button with type="submit". This meant that the "required" attribute could not work in the form as the button type="button" does not 
trigger the "required" attribute in the input tags. Changing the button to type="submit" then meant the modal will not be triggered. To overcome this, some jQuery was
added that allows the modal to operate, as normal, even with a type="submit" button in place. The form needed to have an ID and the modal's ID was parsed into the 
function. 
3. The min="0" and max="1" worked for the coefficient of friction, but required a step="0.01" to allow for decimal places.
4. Adding and removing classes was needed for multiple form inputs. If someone was putting in an input that calculated a delimma zone, the delimma zone icon would 
appear in the modal header. If the user then continued to do another output, and this returned an option zone, they'd see both option zone and delimma zone icons. 
To fix this an add class to bring the icon to the header was used as well as a remove class if one had been added previously. 
5. The dilemma zone calculator works out a dilemma zone as a negative number. But the actual dilemma zone is a positive number as a "size". To remove the negative symbol, 
the Math.abs(total) syntax was tagged onto the function printing out the dilemma zone calculations. 
6. The reaction time game prototype showed that the counter was able to stop and work out the number of seconds the user took to press the "brakes" button. However, the brakes
button remained active and was able to be pushed again. An initial attempt to remove the ID that allows the "click" event to be listened to failed to work. Finally, a jQuery
button disabled function was able to complete the job. 


unsolved problems:
