# FamPay Assignment By Modassir

# QUICK START - ON YOUR LOCAL MACHINE

## Requirements

- Node 16+ LTS
- Npm 8+ (using workspaces)
- For Windows, **integrate bash shell to cmd shell** (when installing git), or use git-bash
- Docker

## Getting Started

- Clone the repository

```
git clone https://github.com/Ali-Modassir/Fampay_Assignment.git
```

- Go to the directory:

  ```
  cd Fampay_Assignment
  ```

## Option 1 - Run on your machine

- Install dependencies

```
npm install
```

- Build and run the project, this starts this application at http://localhost:8000/:

```
npm start
```

## OPTION 2 - Run on Docker

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
