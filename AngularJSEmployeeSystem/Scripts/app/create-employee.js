angular.module('EmployeeApp').component('createemployeeList', {
    templateUrl: 'Scripts/app/employee-addupdate.template.html',
    controller: function CreateEmployeeController($scope, $http) {
        $scope.pagename = 'Create';

        var Employee = {
            Name: '',
            Department: '',
            JoinDate: '',
            Age: '',
            Salary: ''
        }
        $scope.emp = Employee;

        var uri = '/api/employees', mode = '';

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

                // $.ajax({
                    // type: "POST",
                    // url: uri,
                    // contentType: false,
                    // processData: false,
                    // data: fileData,
                    // success: function (result) {
                        // console.log(result);
                    // },
                    // error: function (xhr, status, p3, p4) {
                        // var err = "Error " + " " + status + " " + p3 + " " + p4;
                        // if (xhr.responseText && xhr.responseText[0] == "{")
                            // err = JSON.parse(xhr.responseText).Message;
                        // console.log(err);
                    // }
                // });
                $scope.create = $http.post(uri, Employee)
                $scope.create.then(function (response) {
                   window.location = 'EmployeeDetail.html#!/employees';
                   //}).error(function () {
                   //    alert('error');
                });
            }
        };
    }
});