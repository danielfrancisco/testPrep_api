Backend (Express.js)

## Stack Used

- Express.js
-Mysql

## Live Demo

https://testprepapi-render.onrender.com/

## Setup Instructions

## 1. Clone the repository
https://github.com/danielfrancisco/testPrep_api

git clone develop branch
cd testPrep_api

## install dependencies

npm install

## 3. Run the app

node app.js

## Architecture

Stateless, Horizontally Scalable

backend endpoints so don’t rely on in-memory session data. Any state  lives in a database or shared cache. That way you can spin up (or down) identical server instances behind a load balancer without “sticky sessions.”