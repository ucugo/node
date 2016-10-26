'use strict'
angular.module('chartApp')
    // Directive for generic chart, pass in chart options
    .directive('hcChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                options: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], scope.options);
            }
        };
    })
    // Directive for pie charts, pass in title and data only
    .directive('hcPieChart', function () {
        return {
            restrict: 'E',
            template: '<div></div>',
            scope: {
                title: '@',
                data: '='
            },
            link: function (scope, element) {
                Highcharts.chart(element[0], {
                    chart: {
                        type: 'pie'
                    },
                    title: {
                        text: scope.title
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                            }
                        }
                    },
                    series: [{
                        data: [{
                            name: "Microsoft Internet Explorer",
                            y: 56.33
                        }, {
                            name: "Chrome",
                            y: 24.03,
                            sliced: true,
                            selected: true
                        }, {
                            name: "Firefox",
                            y: 10.38
                        }, {
                            name: "Safari",
                            y: 4.77
                        }, {
                            name: "Opera",
                            y: 0.91
                        }, {
                            name: "Proprietary or Undetectable",
                            y: 0.2}]
                    }]
                });
            }
        };
    })