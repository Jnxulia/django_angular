## Generar Contenedor
````
docker build -t django:dev .

docker run -d --name django -p 8000:8000 django:dev
````