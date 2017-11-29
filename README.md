# Mejor-Api

This project is implemented using Nodejs with Expressjs.

## Install and Run 

First run `npm install`.

After `npm start` for a dev server. The server will run on `http://localhost:5000`.

## Database Config

To access the your own database, change the DB_USER,  DB_PASSWORD and the MongoDB URI `mongodb://<dbuser>:<dbpassword>@ds025232.mlab.com:25232/<db_name>`  at:  db/config.js

## Email info

/utils/schedules.js

## Important !!

To auth with Instagram you need add a user for test into a sandbox client.

There are 2 ways to test this app:

 - Add your user to my sandbox app from the Mejor App. Your account needs to be a developer account as well. You will need to accept the invitation to test the app on [here](https://www.instagram.com/developer/clients/sandbox_invites/).
  
  or

  - You can turn your account into a developer account [here](https://www.instagram.com/developer) and create a client. 
    After do this add the CLIENT_ID and CLIENT_SECRET into /auth/config.js. Obs: In the creation of the client the callback url should be `http://localhost:5000/auth/instagram/callback.`.
