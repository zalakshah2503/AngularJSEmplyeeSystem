angular.module('EmployeeApp').component('editemployeeList', {
    templateUrl: 'Scripts/app/employee-addupdate.template.html',
    controller: function EditEmployeeController($scope, $http, $routeParams) {
        $scope.pagename = 'Edit';
        var uri = '/api/employees', mode = '', Employee = {};
        var empId = $routeParams.empId;

        $scope.employee = $http.get(uri + '/' + empId)
        $scope.employee.then(function (response) {
            $scope.employees = response.data;
            Employee = {
                Name: response.data.Name,
                Department: response.data.Department,
                JoinDate: response.data.JoinDate,
                Age: response.data.Age,
                Salary: response.data.Salary
            }
            $scope.emp = Employee;
        });

        $scope.submit = function () {
            var IsValidate = true;
            $('.required').each(function () {
                if ($(this).val() == undefined || $(this).val() == "") {
                    $(this).css('border', '1px solid red');
                    IsValidate = false;
                }
                else {
                    $(this).css('border', '1px solid #cccccc');
                }
            });

            if (IsValidate) {
                var Employee = {
                    Name: $("#txtName").val(),
                    Department: $("#txtDepartment").val(),
                    JoinDate: $("#txtJoinDate").val(),
                    Age: $("#txtAge").val(),
                    Salary: $("#txtSalary").val()
                }
                $scope.Edit = $http.put(uri, Employee)
                $scope.Edit.then(function (response) {
                    window.location = 'EmployeeDetail.html#!/employees';
                    //}).error(function () {
                    //    alert('error');
                });
            }
        };
    }
});