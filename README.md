# task-tracker

This is a simple task tracking application. The actions you can perform include adding tasks, deleting tasks, checking tasks complete or incomplete, and view a list of all tasks added.

The tech stack used for this application is as follows:
## Backend
 - .NET 8 Web API on Visual Studio using ASP.NET Scaffolding
 - Entity Framework Core
 - SQL Server for the Database using Docker for containerization
## Frontend
 - Angular at v19
 - Angular Material UI
 - HTTPClient for API usage

## Setup Instructions

1. Clone the repository: git clone https://github.com/JigsawDragon/task-tracker.git and enter the directory.
2. Install Docker Desktop to use the containerized SQL Server.
3. Navigate to the TaskTrackerAPI in the Backend folder on your cmd line.
4. Build and run the container using docker-compose up -d (install libraries or dependencies required).
5. The HTTPS host link should be available at https://localhost:5001/swagger/index.html or https://localhost:5001/api/tasks.
At this point, you should see your backend up and running with endpoints allocated to the 4 actions taken in the application.
6. To start your front-end, make sure you have the Angular CLI installed.
7. Navigate to the TaskTrackerUI in the Frontend folder in your command line.
8. With the Angular CLI, you can run the command ng serve, which will load your website and provide you with the link at http://localhost:4200.
9. You can freely use the Task Tracker!


