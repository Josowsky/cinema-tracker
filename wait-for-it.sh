set -e

host="$1"
shift
cmd="$@"

until PGPASSWORD=$DATABASE_PASSWORD psql -h $DATABASE_HOSTNAME -U $DATABASE_USER $DATABASE -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"
exec $cmd