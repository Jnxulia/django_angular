# django_angular

Este Proyecto contiene
- frontend en Angular
- Backend en Django 1.11.x y python2

Simple Crud con Angular y Django usando contenedores

## Pasos para la Instalacion
  ### Descargar el repositorio
  
  ````
  git clone https://github.com/Jnxulia/django_angular.git
  ````

### Ubiquese en la Raiz del proeycto y Ejecute el docker compose 
````
docker-compose up
````
<hr/>

> ### Si no desea instalarlo via docker debe hacer lo siguiente:


##  Frontend
### Requisitos


- node 10
- angular  `npm install -g @angular/cli`
- Para desarrollo el puerto 4200 debe estar disponible

Ubicarse en la carpeta frontend
````
cd frontend
````


Para instalar dependencias ejecute:
````
  npm install
```` 
Para iniciar el proyecto:
````
npm start
````
<hr/>

## Backend
### Requisitos
- python2
- Para desarrollo el puerto 8000 debe estar disponible

Ubicarse en la carpeta `sistemas_expertos`
````
cd sistemas_expertos
````
Instalar las dependencias
````
  pip install -r requeriments.txt
````
Para iniciar el proyecto:
````
python manage.py runserver
````

