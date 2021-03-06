# Quiz App
A interactive quiz app.

## User experience requirements
The following requirements cover what the app must do, from the user's perspective.
- The starting screen should have a button that users can click to start the quiz.
  - Users should be prompted through a series of at least 5 multiple choice questions that they can answer.
  - Users should be asked questions 1 after the other.
- Users should only be prompted with 1 question at a time.
- Users should not be able to skip questions.
- Users should also be able to see which question they're on (for instance, "7 out of 10") and their current score ("5 correct, 2 incorrect").
- Upon submitting an answer, users should:
  - receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
  - be moved onto the next question (or interact with an element to move on).
- Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
- Users should be able to start a new quiz.

## Technical requirements
Your quiz app must:
- Render answer choices in a `<form>` .
- Use semantic HTML, along with CSS and jQuery.
- Follow a11y best practices.
  - Refer back to the lessons on accessibility and forms for help.
- Use responsive design.
  - Refer to this [checklist](https://gist.github.com/alfaraday/c54c3504b3bb14a879428e9939f6f430#file-responsiveness-checklist-md) for help.
- Be fully usable by keyboard (which will be easy enough if you start with a form).
- be graded with this [rubric](https://docs.google.com/spreadsheets/d/1QNzJZ6xgoaOlAxC5XPPolLYltFjOZjZeMEju7IEfkho/edit#gid=1227063358)