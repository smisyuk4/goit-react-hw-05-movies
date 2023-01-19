# Кінопошук

Створи базову маршрутизацію для застосунку пошуку і зберігання фільмів.

## Demo

https://drive.google.com/file/d/1vR0hi3n1236Q5Bg4-se-8JVKD9UKSfId/view

## API Reference

Для бекенду використовуй **themoviedb.org API**. Необхідно зареєструватися
(можна ввести довільні дані) та отримати API-ключ. У цій роботі будуть
використовуватися наступні ендпоінти.

```http
  BASE_URL = https://api.themoviedb.org/3
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `API_KEY` | `string` | **2e329d861e790504d655e6d7175d4c52** |

#### Exemple

```http
  https://api.themoviedb.org/3/movie/76341?api_key=2e329d861e790504d655e6d7175d4c52
```

#### [/trending/get-trending](https://developers.themoviedb.org/3/trending/get-trending)

список найпопулярніших фільмів на сьогодні для створення колекції на головній
сторінці.

#### [/search/search-movies](https://developers.themoviedb.org/3/search/search-movies)

пошук фільму за ключовим словом на сторінці фільмів.

#### [/movies/get-movie-details](https://developers.themoviedb.org/3/movies/get-movie-details)

запит повної інформації про фільм для сторінки кінофільму.

#### [/movies/get-movie-credits](https://developers.themoviedb.org/3/movies/get-movie-credits)

запит інформації про акторський склад для сторінки кінофільму.

#### [/movies/get-movie-reviews](https://developers.themoviedb.org/3/movies/get-movie-reviews)

запит оглядів для сторінки кінофільму.

#### [Документація](https://developers.themoviedb.org/3/getting-started/introduction)

## Routes

Маршрути У застосунку повинні бути такі маршрути. Якщо користувач зайшов за
неіснуючим маршрутом, його необхідно перенаправляти на домашню сторінку.
[docs](https://v5.reactrouter.com/web/example/basic)

**npm install react-router-dom**

**'/'** – компонент Home, домашня сторінка зі списком популярних кінофільмів.

**'/movies'** – компонент Movies, сторінка пошуку кінофільмів за ключовим
словом.

**'/movies/:movieId'** – компонент MovieDetails, сторінка з детальною
інформацією про кінофільм.

**/movies/:movieId/cast**– компонент Cast, інформація про акторський склад.
Рендериться на сторінці MovieDetails.

**/movies/:movieId/reviews** – компонент Reviews, інформація про огляди.
Рендериться на сторінці MovieDetails.

## Code Splitting

Додай асинхронне завантаження JS-коду для маршрутів застосунку, використовуючи
`React.lazy()` і `Suspense`.

## Іконки

[docs](https://react-icons.github.io/react-icons/)

**npm i react-icons**

## Стилі

[docs](https://emotion.sh/docs/install)

**npm install --save @emotion/styled**

# prop-types

[docs](https://github.com/facebook/prop-types)

**npm i prop-types**

## Validation

[docs](https://react-hook-form.com/get-started#Applyvalidation)

**npm install @hookform/resolvers yup**

## form

[docs](https://react-hook-form.com/)

**npm install react-hook-form**

## axios

[docs](https://www.npmjs.com/package/axios)

**npm i axios**


## loader
[Docs](https://mhnpd.github.io/react-loader-spinner/docs/intro)

**npm install react-loader-spinner --save**