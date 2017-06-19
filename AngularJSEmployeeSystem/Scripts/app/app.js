var EmployeeApp = angular.module('EmployeeApp', ["ngRoute"]);

EmployeeApp.config(["$routeProvider", function config($routeProvider) {
    $routeProvider
        .when('/employees/new', {
            template: '<createemployee-list></createemployee-list>'
        }).when('/employees/edit/:empId', {
            template: '<editemployee-list></editemployee-list>'
        }).when('/employees', {
            template: '<employee-list></employee-list>'
        }).
        otherwise('/employees');
}
]);