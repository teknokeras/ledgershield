#!/bin/bash
# wait-for-postgres.sh

set -e

host="$1"
shift
cmd="$@"

export PGPASSWORD=$POSTGRES_PASSWORD

until psql -h db -d $POSTGRES_DB -U $POSTGRES_USER -c '\l'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done


>&2 echo "Postgres is up - executing command"
exec $cmd
