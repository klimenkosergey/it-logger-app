# IT Logger App

### 📌Live версия доступна на [sergeyklimenko.com/projects/it-logger](https://sergeyklimenko.com/projects/it-logger)

#### Учебный проект. Приложение для ведения IT логов. Из функционала доступны: добавление новых логов, изменение логов, добавление новых сотрудников, и поиск по логам.

#### В проекте использовались: React, Redux, [Materialize-css](https://materializecss.com/), Jest, Enzyme

В учебном проекте для эмуляции back-end'a используется [JSON Server](https://github.com/typicode/json-server). В Live демо версии используется заранее заданный лист логов и сотрудников в Redux Store, так как back-end не является основной целью проекта.

Для приложения также написаны unit тесты используя фреймворк Jest и Enzyme для snapshots.

Для запуска JSON Server'а:

```javascript
npm run server
```

Для запуска проекта:

```javascript
npm run start
```

Для запуска тестов:

```javascript
npm run test
```

Для компиляции проекта:

```javascript
npm run build
```
