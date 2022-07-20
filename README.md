# socialAPI
## NoSQL: Social Networking API

This application creates an API for a social media startup that uses a NoSQL database to handle large amounts of unstructured data on a social network website.

## Mock-up

![Insomnia screenshot.](./images/insomnia.jpg) *ADD SCREENSHOT*

## Installation

This application requires installation of npm (incl. express and nodemon), MongoDB, and Insomnia. 

A walkthrough video series can be viewed here: 

Part 1 (Setup, Users, and Friends): https://drive.google.com/file/d/1yHX0AoX8PkeClwQp72GbuUBQa9T3coo7/view
Part 2 (Thoughts): https://drive.google.com/file/d/1SsYmMGPu935DIB2_3M4YVE4g7KYoEiHm/view
Part 3 (Reactions): https://drive.google.com/file/d/15Y4lnXbImT862QSMjPp7MPagv6Vd3EZb/view

All elements of the project can be examined here: https://github.com/matthewestes33/socialAPI 

## Credits

Referenced documentation and tutorials:

Mongoose Schemas: https://mongoosejs.com/docs/guide.html#schemas

Mongoose Update Validators: https://mongoosejs.com/docs/validation.html#update-validators

Additional assistance:

Thank you to my instructional staff, Zubair Shaikh, and AskBCS Learning Assistants!

## Features

When a developer enters a command to invoke the application, the server is started and the Mongoose models are synced to the MongoDB database.

When a developer opens API GET routes in Insomnia for users and thoughts, the data for each of these routes is displayed in a formatted JSON object.

WHEN a developer tests API POST, PUT, and DELETE routes in Insomnia, users and thoughts are successfully created, updated, and deleted (respectively) in my database.

WHEN a developer tests API POST and DELETE routes in Insomnia, reactions to thoughts are created and deleted, and friends are added and removed from the user's friend list.
