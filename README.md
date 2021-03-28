# Instruccions

This project have a specials requireds :

## Local and Production

- See the env.example
  
- This project use the SMTP of google with your account. Set enviroment variables for credentials. On local use env, on heroku use dashboard heroku or heroku CLI.
  
- You need to give access to insecure applications on your gmil account.

## Production

  This app has been deployed in heroku so, for this enviroment you need to do a few things.
  
- Enable IMAP on settings of your Gmail account.
  
- Enable <https://accounts.google.com/b/0/DisplayUnlockCaptcha>. This will allow machines to access your Gmail remotely.
  
- Use nodeJS buildpack on heroku not create-react-app buildpack. Because, this project have a structure of folder designed to be able to make changes in the backend.
