
# TODO List Application

The Todo Project is a web application designed to help users manage their tasks effectively. It provides features such as authentication, task creation, updating, deletion, and the ability to add tasks to favorites for easy access.

The authentication feature ensures that each user has their own account and can securely access their personal task list. Users can sign up and log in using their credentials, maintaining the privacy and security of their data.

Once authenticated, users can create new tasks by providing a title, description, and any other relevant details. They can also update task information, such as modifying the title, description, or due date, to reflect any changes or new priorities. Additionally, users have the option to delete tasks they no longer need.

To enhance user experience, the Todo Project offers a "Favorites" feature. Users can mark specific tasks as favorites, making them easily accessible and providing a quick way to prioritize or highlight important tasks.

Overall, the Todo Project provides a user-friendly interface for managing tasks, along with secure authentication, allowing users to create, update, delete tasks, and add them to their favorites for efficient task management.


## API Reference


#### Authenticated /Login / SingUp
```http
  POST /auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. to Login |
| `password`      | `string` | **Required**. to Login |


#### Create Todo
```http
  POST /todo
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `string` | **Required**. Title of your todo |
| `contain`      | `string` | **Required**. Contain it just description of your todo  |
| `type`      | `string` | **Required**. Type is really important to define todo is important, non-important, or it can be done later  |


#### Update Todo
```http
  PATCH /todo?id={id}&like=${value}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `like`      | `boolean` | **Required**. by send true or false you canadd to your favorites list|

#### Delete Todo
```http
  PATCH /todo?id={id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. delete todo with id|

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Red Color | ![#e74c3c](https://via.placeholder.com/10/0a192f?text=+) #e74c3c |
| Yellow Color | ![#f1c40f](https://via.placeholder.com/10/f8f8f8?text=+) #f1c40f |
| Green Color | ![#07bc0c](https://via.placeholder.com/10/00b48a?text=+) #07bc0c |


## 🚀 About Me
I am a node js developer looking for an open source project to work.


## Authors

- [@ZaheerShaikh](https://github.com/zaheershaikh936)


## Installation

Install This Project with npm or yarn

```bash
  npm install 
  cd my-project
  npm run dev
```
    
## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Nest Js


## Screenshots

![App Screenshot](https://i.ibb.co/LzgkPKj/Screenshot-1.png)

