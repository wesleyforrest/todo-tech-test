1. Create components

   - Button (Add, Delete, Reset?), ToDoItem, InputField, Reset, CheckBox

2. Link Components

   - App
     - InputField
       - Button (Add)
     - ToDoItem
       - CheckBox
       - Button (Delete)
     - Reset
       - Button (Reset)

3. Style basic components

   - Mobile design so use @mediaQuery

4. Write logic for textbox to take input

   - On Click of "+" button
   - IF no text input
     - Display message ("No todo item entered")
   - IF text entered
     - Create new component with input text and place on screen
   - Add checkbox to new component
   - Clear text input box

5. Check new component appears on screen and displays as expected

   - Checkbox un-ticked
   - Input text displays
   - Border

6. Write code for ticking checkbox

   - When checkbox is ticked, text in ONLY that component strikes through
   - When checkbox is un-ticked, text returns to original state

7. Write logic for "Delete"

   - OnClick, Single "ToDoItem" component deletes completely

8. Write logic for "Reset"
   - Display warning message ("Clicking 'OK' will delete ALL todo items")
     - If user clicks 'OK
       - OnClick, ALL "ToDoItem" components deletes completely
