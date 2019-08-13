// import { fromEvent } from 'rxjs/observable/fromEvent';
// import { of } from 'rxjs/observable/of';
// import { throttleTime } from 'rxjs/operator/throttleTime';
// import { mergeMap } from 'rxjs/operator/mergeMap';
// import { ignoreElements } from 'rxjs/operator/ignoreElements';

// import config from '../../config';
// import { appSetDesktop, appSetMobile } from './app.actions';

// const windowResize$ = fromEvent(window, 'resize')::throttleTime(150);
// const windowResizeEpic = (action$, store) => {
//   return windowResize$
//     ::mergeMap((event) => {
//       const { clientWidth } = event.target.document.body;
//       const state = store.getState();
//       const isMobile = clientWidth < config.mobileWidth;

//       if (state.app.isMobile === isMobile) {
//         return of(1)::ignoreElements();
//       }

//       return isMobile
//         ? of(appSetMobile())
//         : of(appSetDesktop());
//     });
// };

// const appEpic = windowResizeEpic;

// export { appEpic };
