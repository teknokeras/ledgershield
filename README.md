# Ledgershield

This project is crypto currency trading platform.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

To install this you need to install docker and docker-compose.
To install docker have a look [here](https://docs.docker.com/get-started/) 
To install docker-compose have a looke [here](https://docs.docker.com/compose/install/)

Try to install docker first then docker-compose


### Installing and Running Ledgershield

There are two types of installation
* Development
* Production

For each development there are env files that you need to at least review. FOr production installation it is highly recommended to change the values in the env file.

#### Development
This is type of installation is intended for developer to change the code of ledgershield.
To install the development type of Ledgershield, modify the values in .env file. However, this step is not really necessary for development, since usually these values are not deploed in production so it won't cause much trouble.
Run the following to install development type:

```
./build-dev.sh
```

Once the build up of all docker conatiners are completed go into the backend container where the ledgershield code is. Do it by this command

```
docker-compose exec backend bash
```

After you are inside backend container you can run the following command to turn on ledgershield development server

```
./init.sh
``` 

Open your browser to http://localhost/ to see the ledgershield platform ind evelopment mode.
You are free to modify the code and your change will be reflected immediately since this is in development mode.

To remove the containers, run the following command

```
./clear-dev.sh
```

#### Production
This type of installation is intended for production. There are other ways to deploy in production than this way, like for example using kubernets, and other orchestration tools. However, this is the easiest one.
Just like development type, production type also has env file. For production, it is called .env.prod file. It is highly recommended that for production you would change the values in this file.
To install production type, after you clone/copy the code to production server, run the following command.

```
./build-prod.sh
```

That's it. You can open your browser and go to http://<YOUR_SERVER_ADDRESS>/ to see the ledgershield

To remove the containers, run the following command

```
./clear-prod.sh
```

