import { ajax as rxjsAjax } from "rxjs/observable/dom/ajax";
import { map } from "rxjs/operator/map";

import { store } from "../../store/store";
import { getAuthHeader } from "../getAuthHeader";
import { authLogout } from "../../store/auth";

// const ajax = (options) => {
//   // Append JWT token (if exists) to every request
//   const headers = options.headers
//     ? { ...options.headers, ...getAuthHeader() }
//     : getAuthHeader();

//   return rxjsAjax({ ...options, headers })
//     ::map(({ response, status }) => {
//       if (status === 401) {
//         store.dispatch(authLogout());
//       }

//       if (!response) {
//         throw 'Invalid response';
//       }

//       return response;
//     });
// };

const ajax = () => ({ type: 'olden' });

export { ajax };
