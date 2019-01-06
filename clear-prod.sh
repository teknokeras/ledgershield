docker-compose stop
docker-compose down
docker rmi ledgershield_backend
docker rmi ledgershield_worker
docker rmi ledgershield_nginx
docker rmi ledgershield_celery
docker rmi ledgershield_daphne
docker volume rm $(docker volume ls -f dangling=true -q)

mv docker-compose.yml docker-compose-prod.yml
