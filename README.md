

# Task Manager App

The Task Manager App is a simple web application built using React that allows users to manage their tasks. It provides features to add, delete, and edit tasks, as well as displaying previous tasks fetched from a JSON server.

## Features

- Add a new task with a name, start date, and end date.
- Delete an existing task.
- Edit an existing task to update its details.
- View a list of previous tasks fetched from a JSON server.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory: `cd task-manager-app`.
3. Install the dependencies: `npm install`.

## Usage

1. Start the JSON server:
   ```shell
   npm run server
   ```
   This will start the JSON server and make it available at `http://localhost:3006`.

2. Start the React development server:
   ```shell
   npm start
   ```
   This will start the React development server and open the app in your browser at `http://localhost:3000`.

3. Use the Task Manager App in your browser:
   - Add a new task by filling in the task name, start date, and end date in the provided form and clicking the "Add Task" button.
   - Delete a task by clicking the delete icon next to the task in the task list.
   - Edit a task by clicking the edit icon next to the task in the task list, updating the task details in the form, and clicking the "Update" button.
   - View the list of previous tasks fetched from the JSON server.

## Dependencies

The Task Manager App relies on the following dependencies:

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- Axios: A promise-based HTTP client for making API requests.
- JSON Server: A simple and easy-to-use JSON-based REST API server.

These dependencies are already included in the project's `package.json` file and will be installed automatically during the installation step.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.


