
/**
 * Module definition and dependencies
 */
angular.module('App.Bootstrap', [
  'App.Bootstrap.Controller',
])

/**
 * Config
 */
.config($stateProvider => {
  $stateProvider.state('bootstrap', {
    parent: 'app',
    url: '/bootstrap',
    component: 'bootstrapRoute',
  });
})

/**
 * Route component
 */
.component('bootstrapRoute', {
  controller: 'BootstrapCtrl',
  templateUrl: 'bootstrap/bootstrap.html',
});
