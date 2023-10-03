
# Airport distance calculator


## Getting started
1. Generate the vendor directory `composer install`.
2. Create `.env` file in `/backend`. To use local DB use:
```
DB_CONNECTION=pgsql
DB_HOST=backend-pgsql-1   // container name or 127.0.0.1 or external service
DB_PORT=5432
DB_DATABASE=2023-october
DB_USERNAME=postgres
DB_PASSWORD=0jafLdevlkaIxMsiv4vC
```
3. Start the app `./vendor/bin/sail up -d`.
4. Visit http://localhost:8081


## Useful commands
Creating database schema and data:
```
php artisan migrate
php artisan db:seed --class=AirportSeeder
```

Better Eloquent type hints:
```
composer require --dev barryvdh/laravel-ide-helper
php artisan ide-helper:generate
```

Various development commands:
```
sail artisan sail:publish
php artisan make:seeder AirportSeeder
php artisan make:model Airport
php artisan make:migration create_airport_table
```

