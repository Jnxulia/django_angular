docker build -t django:dev .
docker run -d --name django -p 3000:3000 django:dev
