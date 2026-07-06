# Prof IT backend

Laravel backend для проекта Prof IT. Сейчас backend содержит базовое Laravel-приложение, SQLite-настройку для локальной разработки и простую Filament-админку.

## Стек

- Laravel 13
- PHP 8.5
- SQLite для локальной разработки
- Filament 5

## Установка

```sh
composer install
copy .env.example .env
php artisan key:generate
```

Если в локальном PHP выключен `pdo_sqlite`, используйте artisan-команды так:

```sh
php -d extension=pdo_sqlite artisan about
```

## База данных

Проект настроен на SQLite:

```env
DB_CONNECTION=sqlite
```

Локальный файл базы:

```text
database/database.sqlite
```

Файл базы игнорируется git и не коммитится.

Создать файл базы и выполнить миграции:

```sh
php -r "file_exists('database/database.sqlite') || touch('database/database.sqlite');"
php -d extension=pdo_sqlite artisan migrate
```

## Админ-панель

Filament доступен по адресу:

```text
/admin
```

Локальная тестовая учетная запись, созданная для проверки:

```text
email: admin@example.com
password: password
```

Пользователь хранится только в локальной SQLite-базе, сама база не коммитится.

Создать администратора заново:

```sh
php -d extension=pdo_sqlite artisan make:filament-user --name="Admin" --email="admin@example.com" --password="password" --panel=admin
```

## Запуск

Если `pdo_sqlite` включен в `php.ini`, можно использовать обычный Laravel server:

```sh
php artisan serve
```

Если `pdo_sqlite` выключен, запускайте встроенный PHP-сервер напрямую:

```sh
php -d extension=pdo_sqlite -S 127.0.0.1:8001 -t public public/index.php
```

После запуска:

```text
http://127.0.0.1:8001/admin/login
```

## Проверки

```sh
php -d extension=pdo_sqlite artisan about
php -d extension=pdo_sqlite artisan migrate
php -d extension=pdo_sqlite artisan test
php -d extension=pdo_sqlite artisan filament:about
```

Проверить страницу входа:

```sh
curl -I http://127.0.0.1:8001/admin/login
```

Ожидаемый результат: `HTTP/1.1 200 OK`.

## Git

Не коммитятся:

- `.env`
- `database/database.sqlite`
- `vendor/`
- runtime-кеши и логи Laravel

Рабочая ветка backend:

```text
backend/dev
```

Push из этой ветки выполняется отдельно вручную, только когда backend готов к публикации.
