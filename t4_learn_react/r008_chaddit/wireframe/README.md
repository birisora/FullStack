# Chaddit Wireframes and User Flow
## Wireframes
- Wireframes found in w001 - w003 of my repository
- included below are the repl.it versions
  - https://repl.it/@andyjly/chaddit-mainpage
  - https://repl.it/@andyjly/chaddit-add-new-post
  - https://repl.it/@andyjly/chaddit-chat
  - https://repl.it/@andyjly/chaddit-signin
  - https://repl.it/@andyjly/chaddit-signup
  - other pages not created yet: view post page, create subpage, about page

## User flow
- sign up
  - enters valid email/password and name/nickname and submit -> home page
  - press submit but fields not all filled -> error message appears to fill in
  - enters e-mail already taken -> prompts sign in if your account
- sign in
  - enters valid email/pw -> home page
  - invalid email/pw -> prompts typo or make new account
  - missing a field -> prompts fill in missing field
- add in new post 
  - enter in valid information in fields -> go back to subpage with new post
  - missing any field -> prompts to fill out
  - if enter new subpage -> prompts create new subpage
- main page
  - can view posts -> view the post page
  - enter in search subpage query -> lists out possible subpages or recommend make new one if none
  - clicks popular subpage -> brings you to the subpage
  - clicks log out -> user is signed out, and loses logged in functionality
  - if logged in
    - can make a new post -> goes into add new post page
    - can delete post -> removes post from subpage
    - can edit post -> goes to edit post page similar to add new post
    - can click on chat button bottom right -> chat with other users on page
  - if not logged in 
    - click add new post -> prompts log in
    - click chat -> chat disabled, but can view conversation
- subpage looks identical to main page except filtered with only subpage posts
- chat page
  - change status -> invisible can't see online, online is seen to others
  - type in message -> shown in chat that other users can see
