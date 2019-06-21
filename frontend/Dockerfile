FROM node:10
#RUN apt-get update -qq && apt-get install -y build-essential -
RUN mkdir /frontend
WORKDIR /frontend
ADD package.json /frontend/
COPY . /frontend/
#run rm -rf node_modules
RUN npm install -g @angular/cli
RUN npm install
ADD . /frontend/
EXPOSE 4200 49153

# Serve the app
CMD ["npm", "start"]
