# FamPay Assignment By Modassir

## Tech Stack

- Node JS
- Express JS
- MongoDB Atlas

## Project Description

- Youtube API, which run in background continously on a internval of 10 secs. It stores the data such as video title, description, channelTitle, thumbnail, videoId, publishTime with text indexing on title and description.

- A GET API which returns the stored data in decending order of publish time, in paginated response.

- A POST API, optimized search API to search the stored data using their title and description . Also it supports partial match of a search query in either video or description

- Added Multiple API Supports, i.e If quota is exhausted on one, then it can use another API automatically.

- Dockerized the Project

- Created a Dashboard Using React, which displays videos present in database, also added with search filter

## QUICK START - ON YOUR LOCAL MACHINE

### Requirements

- Node 16+ LTS
- Npm 8+ (using workspaces)
- For Windows, **integrate bash shell to cmd shell** (when installing git), or use git-bash
- Docker

### Getting Started

- ### `master` branch contains APIs
- ### `master-dashboard` branch contains dashboard build using React

- Clone the repository

```
git clone https://github.com/Ali-Modassir/Fampay_Assignment.git
```

- Go to the directory:

  ```
  cd Fampay_Assignment
  ```

### Option 1 - Run on your machine

- Install dependencies

```
npm install
```

- Build and run the project, this starts this application at http://localhost:8000/:

```
npm start
```

### Option 2 - Run on Docker

Docker Compose is an awesome tool for creating isolated development environments with Docker by using simple configurations with YAML.
The repo includes the Dockerfile and docker-compose.yml necessary to set up the app.

- Install [docker](https://docs.docker.com/installation/) and [docker compose](https://docs.docker.com/compose/install/)

- Build the images:

  ```
  docker-compose build
  ```

- Run the app, this starts this application at http://localhost:8000/:
  ```
  docker-compose up -d
  ```

## REST API

### FETCH VIDEOS

```
GET http://localhost:8000/videos/getvideos?p=1
```

- Here, Query params "p" indicates the page, and "p=1" represents page one.
- In one page there will be 10 responses.

### SEARCH VIDEOS

```
POST http://localhost:8000/videos/searchvideos
```

- It accepts a "query" which we need to pass in the body, in JSON format
- Eg
  ```
  {
      "query" : "cricket"
  }
  ```

### POSTMAN COLLECTION

- Import this Postman collection into your Postman
- POSTMAN [JSON Link](https://www.getpostman.com/collections/9ad76c13e244c4055a3f)

## Dashboard

- Created a dashboard using React, which displays all the videos present in the database in the sorted order.

- Added search filter, so that client can search the videos on providing a specific query.

- Clone the repository of dashboard

```
  git clone --single-branch --branch master-dashboard https://github.com/Ali-Modassir/Fampay_Assignment.git

```

- Go to the directory:

```
  cd Fampay_Assignment
```

- Install dependencies

```
npm install
```

- Build and run the project, this starts this application at http://localhost:3000/:

```
 npm start
```
