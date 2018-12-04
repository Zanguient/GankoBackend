// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //  urlBase: 'http://104.209.144.166:8080/api/v1',
  //  urlSync: 'http://104.209.144.166:4985/ganko'
  urlBase: 'http://localhost:8080/api/v1',
  urlSync: 'http://localhost:4985/ganko'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
