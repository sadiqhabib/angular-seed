/* global $ */
/**
 * Module definition and dependencies
 */
angular.module('Shared.Bootstrap.Directives', [])

/**
 * Directive definitions
 */
.directive('popover', function() {
  return {
    scope: {
      options: '=',
    },
    restrict: 'ACE',
    link: (scope, iElem) => {
      return $(iElem).popover(scope.options);
    },
  };
})
.directive('scrollspy', function() {
  return {
    scope: {
      options: '=',
    },
    restrict: 'ACE',
    link: (scope, iElem) => {
      return $(iElem).scrollspy(scope.options);
    },
  };
})
.directive('tooltip', function() {
  return {
    scope: { options: '=' },
    restrict: 'ACE',
    link: (scope, iElem) => {
      return $(iElem).tooltip(scope.options);
    },
  };
});

// @TODO
// ['popoverInit', 'scrollspyInit', 'tooltipInit']
//   .map(name => {
//     console.log('-->', name);
//     angular.module('Shared.Bootstrap.Directives')
//       .directive(`${name}Init`, function() {
//         return {
//           restrict: 'ACE',
//           scope: { options: '=' },
//           link: (scope, iElem) => {
//             return $(iElem)[name](scope.options);
//           },
//         };
//       });
//   });