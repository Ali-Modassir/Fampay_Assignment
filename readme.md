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

## OPTION 1 - Run on your machine

- 1. Install dependencies

```
cd Fampay_Assignment
npm install
```

- 2. Build and run the project

```
npm start
```

- 3. Navigate to `http://localhost:8000`

## OPTION 2 - Run on Docker

- Docker Compose is an awesome tool for creating isolated development environments with Docker by using simple configurations with YAML.

- The repo includes the Dockerfile and docker-compose.yml necessary to set up the app.

1. Install [docker](https://docs.docker.com/installation/) and [docker compose](https://docs.docker.com/compose/install/)

2. Go to the directory:

   ```
   cd Fampay_Assignment
   ```

3. Build the images:

   ```
   docker-compose build
   ```

4. Run the app, this starts this application at http://localhost:4000/:
   ```
   docker-compose up -d
   ```
