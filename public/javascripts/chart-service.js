'use strict';

angular.module('chartApp')
    .service("chartService", function($http){
        this.getData = function(callbackFunc) {
            $http({
                method: 'GET',
                url: '/iPlayer'
            })
                .success(function(data){
                    callbackFunc(data)
                })
                .error(function(error){
                    alert(error)
                })
        }
})
