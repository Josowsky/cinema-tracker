// import { combineEpics } from 'redux-observable';
// import { of } from 'rxjs/observable/of';
// import { takeUntil } from 'rxjs/operator/takeUntil';
// import { mergeMap } from 'rxjs/operator/mergeMap';
// import { map } from 'rxjs/operator/map';
// import { _catch } from 'rxjs/operator/catch';

// import { ajax } from '../../utils/ajax';

// import {
//   filmsLoadError,
//   filmsLoadSuccess,
//   filmsToggleFavoriteError,
//   filmsToggleFavoriteSuccess,
// } from './films.actions';
// import {
//   FILMS_LOAD,
//   FILMS_LOAD_CANCELLED,
//   FILMS_TOGGLE_FAVORITE,
//   FILMS_TOGGLE_FAVORITE_CANCELLED,
//   FILMS_TOGGLE_FAVORITE_SUCCESS,
// } from './films.constans';
// import get from 'lodash.get';

// const filmsDataEpic = (action$, store$) => {
//   return action$.ofType(FILMS_LOAD, FILMS_TOGGLE_FAVORITE_SUCCESS)
//     ::mergeMap(() => {
//       const { auth: { token, id } } = store$.getState();

//       const url = token
//         ? `/api/movies?id=${id}`
//         : `/api/movies`;

//       return ajax({
//         method: 'GET',
//         url,
//       })
//         ::map((response) => {
//           if (!token) {
//             return filmsLoadSuccess(response.movies);
//           }

//           const movies = response.movies
//             .map((movieInfo) => {
//               const movieData = get(movieInfo, '0');
//               const isFavourite = get(movieInfo, 'isFavourite');

//               return {
//                 ...movieData,
//                 isFavorite: isFavourite === '1',
//               };
//             });

//           return filmsLoadSuccess(movies);
//         })
//         ::_catch((error) => of(filmsLoadError(error.message || error)))
//         ::takeUntil(action$.ofType(FILMS_LOAD_CANCELLED));
//     });
// };

// const toggleFavoriteEpic = (action$, store$) => {
//   return action$.ofType(FILMS_TOGGLE_FAVORITE)
//     ::mergeMap(({ payload }) => {
//       const { isFavorite, movieId, userId } = payload;
//       const { auth: { token } } = store$.getState();

//       const method = isFavorite ? 'POST' : 'DELETE';

//       return ajax({
//         method,
//         url: `/api/favourites`,
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         credentials: 'same-origin',
//         body: {
//           movieId,
//           userId,
//         },
//       })
//         ::map(() => filmsToggleFavoriteSuccess())
//         ::_catch((error) => of(filmsToggleFavoriteError(error.message || error)))
//         ::takeUntil(action$.ofType(FILMS_TOGGLE_FAVORITE_CANCELLED));
//     });
// };

// const filmsEpic = combineEpics(
//   filmsDataEpic,
//   toggleFavoriteEpic,
// );

// export { filmsEpic };
