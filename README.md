Backend (Express.js)

## Stack Used

- Node.js v20.7.0
- Express.js
- Mysql

## Live Demo

Frontend: https://test-prep-app-tau.vercel.app/

Backend API: https://testprepapi-render.onrender.com/

⚠️ Note on API Response Time

⏳ Cold Start Warning (Render Free Tier):
This server is hosted on Render.com using the free tier, which automatically puts the service to sleep after 15 minutes of inactivity.

When the service is "asleep," the first request (e.g., login, account creation, data fetch) will experience a cold start delay of 30–120 seconds.

Subsequent requests will be fast once the service is warmed up.

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

backend endpoints don’t rely on in-memory session data. Any state  lives in a database or shared cache. That way you can spin up (or down) identical server instances behind a load balancer without “sticky sessions.”