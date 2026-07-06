# Prof IT frontend

Фронтенд сайта Prof IT для услуг по автоматизации бизнеса, внедрению, доработке и сопровождению 1С.

Проект собран на Vue 3 и Vite. Контент основных секций вынесен в отдельные файлы данных, чтобы меню, SEO, кейсы, направления работ и документы можно было обновлять без правки разметки компонентов.

## Стек

- Vue 3
- Vite
- Swiper
- ESLint / Oxlint
- Prettier

## Запуск проекта

Установить зависимости:

```sh
npm install
```

Запустить dev-сервер:

```sh
npm run dev
```

Собрать production-версию:

```sh
npm run build
```

Проверить и автоматически исправить код:

```sh
npm run lint
```

## Структура

```text
src/
  assets/              изображения, иконки, шрифты
  components/
    layout/            шапка и футер
    sections/          основные секции страницы
    ui/                переиспользуемые UI-компоненты
  data/                данные для секций и SEO
  styles/              глобальные стили и переменные
```

## Данные сайта

Основной контент вынесен в `src/data`:

- `navigation.js` - пункты меню и якорные ссылки.
- `seo.js` - title, description, keywords, Open Graph и Twitter-данные.
- `cases.js` - кейсы, описания, изображения и тексты модальных окон.
- `directions.js` - направления услуг и CTA-кнопки.
- `heroServices.js` - карточки услуг в первом экране.
- `problems.js` - блок проблем и преимуществ автоматизации.
- `processSteps.js` - этапы работы.
- `softwareDocuments.js` - список документов для скачивания.

## SEO

Базовые метатеги находятся в `index.html`.

Динамическая синхронизация title и meta выполняется в `src/main.js` на основе `src/data/seo.js`.

При изменении домена, названия компании или описания сайта обновляйте:

1. `src/data/seo.js`
2. canonical и JSON-LD в `index.html`

## Изображения и favicon

Изображения для сборки хранятся в `src/assets`.

Статические публичные файлы, которые должны быть доступны из корня сайта, кладутся в `public`.

Для замены favicon:

```text
public/favicon.svg
```

И ссылка в `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

## Проверка перед коммитом

Перед коммитом рекомендуется выполнить:

```sh
npm run lint
npm run build
```

Если PowerShell блокирует `npm.ps1`, используйте:

```sh
npm.cmd run lint
npm.cmd run build
```
