
/**
 * Module definition and dependencies
 */
angular.module('App.Bootstrap.Controller', [])

/**
 * Controller
 */
.controller('BootstrapCtrl', function(moment) {

  /**
   * On init
   */
  this.$onInit = function() {

    //Set date
    this.now = moment();
    this.options = { trigger: 'hover click', placement: 'top' };
  };
});
