
setting database 

src/config.json



# Simple CRUD Student

Implementation of Express Js and MySQL to create CRUD RESTful API.

<br>

## Installation

#### Download Code | Clone the Repo

```
git clone https://github.com/miqbalhamdani/complex-crud-express-mysql
```

#### Install Node Modules
```
npm install
```
#### Config Database
src/config/config.json
```
"development": {
    "username": "root",
    "password": null,
    "database": "api",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
```
#### Sequelize migrate
```
sequelize db:migrate
```
#### Start NPM
```
npm start
```

<br>

## Table Structure

| Name      | Datatype | Description                 |
|-----------|----------|-----------------------------|
| id        | int      | primary key, auto increment |
| name      | varchar  |                             |
| class     | varchar  |                             |
| gender    | varchar  |                             |
| title     | varchar  |                             |
| createdAt | datetime |                             |
| updatedAt | datetime |                             |
| deletedAt | datetime |                             |

<br>

## Test via Postman

[https://www.getpostman.com/collections/ad131cb49860313a2a81](https://www.getpostman.com/collections/ad131cb49860313a2a81)
