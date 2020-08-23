Solved issues:
1. Make sure no inputs other than numbers and decimal points can be inserted into any field. Using the "number" attribute didn't work as anyone can manually override this
and spinners were removed in the CSS. So a JS isNumberKey(evt) was added that only allows numbers and decimal points. Multiple decimal points can still be added, but the
calculator only picks up the first decimal point. This meant users can not enter incorrect terms into the fields and prevents a NaN return on submit. 
2. Modals will not open when using a button with type="submit". This meant that the "required" attribute could not work in the form as the button type="button" does not 
trigger the "required" attribute in the input tags. Changing the button to type="submit" then meant the modal will not be triggered. To overcome this, some jQuery was
added that allows the modal to operate, as normal, even with a type="submit" button in place. The form needed to have an ID and the modal's ID was parsed into the 
function. 
3. The min="0" and max="1" worked for the coefficient of friction, but required a step="0.01" to allow for decimal places.

unsolved problems:
1. When inputting a decimal place in other fields, the actual outcome is different. I tried 10.99 and it returned 10.97 and when I tried again it returned 10.94.
This is a problem, especially when entering in m/s. 