docker-compose stop
docker-compose down
docker rmi ledgershield_backend
docker rmi ledgershield_worker
docker volume rm $(docker volume ls -f dangling=true -q)

mv docker-compose.yml docker-compose-dev.yml
