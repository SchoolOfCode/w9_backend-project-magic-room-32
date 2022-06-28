
# Getting Started
How can we enhance the remote experience of a bootcamper? This was the problem at hand, the solution that we decided to come up with was a progress tracking app. That allows the user to track their progress through each week and see how they are getting on and in future to display various resources linked with areas they have struggled with. 


![screenshot](imgs/dBoard1.jpg)

![screenshot2](imgs/dBoard2.jpg)


Our app allows the user to input their daily quiz result for each week and calculates the average score in percentage. This enables the user to have a better understanding of their progress and to see whether extra studying is needed. In addition to this, there is a diary section which allows the user to submit their thoughts and feelings for that particular week.

## Installation Instructions

[Front-End](https://github.com/SchoolOfCode/w9_frontend-project-magic-room-32)

- `cd front/`
- Run `npm i`
- `npm start`

[Back-End](https://github.com/SchoolOfCode/w9_backend-project-magic-room-32)

- Run `npm i`.
- Create a .env file at the top-level.
- Configure the file using the following Postgresql variables and your server’s relevant settings:
```
PGHOST 
PGUSER 
PGDATABASE 
PGPASSWORD
PGPORT 
PORT
```
- Ensure that the ‘PORT’ is set to something other than the front-end. By default, the front-end is configured to use 3000. We would suggest setting the back-end to listen on 3001.
- Use the following command for first-time setup: `npm run setUpTables`.
- Run `npm start`.

Once you have both of these up and running you may go to your browser and go to “localhost:3000” to view our application. 

## How To Contribute

If you would like to help out and contribute please feel free to create a fork of our repositories using the links below.

[Frontend](https://github.com/SchoolOfCode/w9_frontend-project-magic-room-32/fork)
[Backend](https://github.com/SchoolOfCode/w9_backend-project-magic-room-32/fork)

## Support

If you are having issues, please let us know.
Feel free to contact any of the contributors below.

- [Jay Whittingham](https://github.com/jaymlwhittingham)
- [Samantha Wu](https://github.com/syywu)
- [Michael Paton](https://github.com/MP-360)
- [Lucy de Rojas](https://github.com/Lucy-de-Rojas)

<details>
<summary> National Bootcamp - Week Nine Project Brief </summary>

For your project, you’ll be using what you’ve learned on the course so far to try and improve the lives of your users. In this case, the users will be close to home: bootcampers!

To do this, you’ll need to take the time to understand your user (a bootcamper), their experiences, and their problems. Specifically, it might be good to focus on how to enhance the remote experience of a bootcamper, or what can help them with the vast amount of learning there is to do as a new developer. What do they need? What problem might they have that your application could solve for them? How can you get into the mindset of your user and keep them at the centre of your problem-solving?

The high level outcomes from this project should be:

- A minimum viable product (MVP) showcasing an innovative full stack application which meets the user need you’ve identified
- A presentation, complete with how you worked as a team and a demonstration of the project

Your project application might include the following:

- Include a user experience created in React
- Build a REST API which is used by your front-end
- Be supported by a Postgresql database with multiple tables
- Be built and managed in an agile way
- Utilise testing for ensuring robust code

Remember, you only have a few days to code a solution, so being agile is key. That means brainstorming what you want to build, and working in sprints to deliver value each time. After each sprint, you can reassess and either continue on course or iterate towards a better solution. Have a plan which is incremental steps, rather than all or nothing.

Click the link to see the [Project Guidelines](https://github.com/SchoolOfCode/project-guidelines/blob/master/project-week.md)
</details>
