
/**
 * Module definition and dependencies
 */
angular.module('App', [

  //Angular & 3rd party
  'ui.router',

  //Meanie modules
  'Api.Service',
  'Analytics.Service',
  'Convert.Service',
  'DuplicateRequestsFilter.Decorator',
  'FormControls.Component',
  'KeyCodes.Service',
  'Log.Service',
  'Storage.Service',
  'Store.Service',

  //Core modules
  'App.Config',
  'App.Templates',
  'App.Component',
  'App.Auth',
  'App.Error',

  //App components
  'App.Home',
  'App.Bootstrap',

  //Shared services
  'Shared.Moment.Service',

  //Shared filters
  'Shared.Moment.Filter',

  // Shared Directives
  'Shared.Bootstrap.Directives',
]);
