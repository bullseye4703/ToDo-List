# To-Do List App

This is a **To-Do List** web application built with **Node.js**, **Express.js**, **EJS**, and **MongoDB**. It allows users to add, view, and delete tasks from their to-do lists.

## Features
- Add new items to the to-do list
- View the current list of tasks
- Delete completed tasks

## Tech Stack
- **Frontend**: EJS (Embedded JavaScript), HTML, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

### Prerequisites
Before you begin, ensure you have the following installed on your local machine:
- **Node.js**: [Download Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://docs.mongodb.com/manual/installation/)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/todo-list-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd todo-list-app
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```
4. Start MongoDB on your local machine:
    - On a separate terminal, run:
    ```bash
    mongod
    ```

5. Run the application:
    ```bash
    node app.js
    ```

6. Open your browser and go to `http://localhost:3000`.

### Folder Structure

- **models/db.js**: Contains MongoDB schema definitions and connection logic.
- **op/operations.js**: Handles CRUD operations like finding, adding, and deleting items.
- **views/**: Contains EJS templates for rendering the UI.
- **public/**: Static assets such as CSS and images.

## Usage

1. **Homepage**: Shows the current date and a list of tasks. Add a task using the input field.
2. **Delete Task**: Check the box next to an item and it will be removed from the list.

## Contributing

Feel free to fork this project and submit pull requests. For major changes, please open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License.


