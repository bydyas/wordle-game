# WORDLE GAME

![Screenshot of demo](https://github.com/bydyas/wordle-game/assets/74198494/646e17bb-acd1-4e4e-bfc0-beaa75e8c843)

## This is how it works:

- When user opens page, table (6 rows, 5 columns) and two buttons **(Reset and Check)** should be displayed and game should start.
- At the beginning of each game a random word is selected from the dictionary. **(dictionary.js)**.
- Each game round user enters a word of five letters, one letter per cell and click ‘Check’.
- If the entered word is not in the dictionary, you need to show an alert. In this case, the round does not end and user can try to guess again.
- In case entered word is present in dictionary, but not correct, each table cell should change it’s color: if letter is present in the word and in the correct spot, it should be marked with green color; if letter is present in the word but in another spot, it should be marked with yellow color, and in case letter is not in the word, it should be marked with gray color.
- If entered word was not correct and it was not the last row, the next game round should start.
- If entered word is not correct, and it was the last row, alert **(‘Game over.’)** should be shown.
- If entered word is correct, alert **(‘Congratulations! You won.’)** should be shown.
- When user clicks ‘Reset’ button, all user input should be cleared, new word should be chosen from dictionary and new game should start. 
