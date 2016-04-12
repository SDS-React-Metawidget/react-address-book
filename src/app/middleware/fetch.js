import { checkStatus } from 'app/lib/fetch';


export default function fetchMiddleware() {
  return next => action => {
    const { types, endpoint, ...rest } = action;
    if (!endpoint) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = types;
    next({ ...rest, type: REQUEST });

    return fetch(`${endpoint}`)
      .then(checkStatus)
      .then(raw => raw.json())
      .then(
        response => next({
          ...rest,
          response,
          type: SUCCESS,
        }),
        error => next({
          ...rest,
          error,
          type: FAILURE,
        })
      )
      .catch(
        error => {
          console.error('ERROR IN MIDDLEWARE:', // eslint-disable-line no-console
            error.stack || error);
          next({
            ...rest,
            error,
            type: FAILURE,
          });
        }
      );
  };
}
