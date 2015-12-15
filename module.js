/*global angular*/
angular
    .module('nsEl.bower-test.app')
    .directive('fancy.dir', function () {
        'use strict';
        return {
            scope: {},
            restrict: 'A',
            controller: function ($scope, $log) {
                $log.debug('fancy.dir.controller $scope: ', $scope);
            }
        };
    });
