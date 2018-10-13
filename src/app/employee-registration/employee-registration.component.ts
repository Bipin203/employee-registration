import { Component, OnInit, Input } from '@angular/core';
import { Employee } from "./employee";
import { EmployeeRegistrationService } from "./employee-registration.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-employee-registration',
    templateUrl: './employee-registartion.component.html',
    styleUrls: ['./employee-registration.component.css'],
    providers: [EmployeeRegistrationService]
})

export class EmployeeRegistrationComponent implements OnInit {
    private employees: Employee[];

    constructor(
        private employeeRegistrationService: EmployeeRegistrationService) { 

        }

    ngOnInit() {
        this.getAllEmployees();
    }

    getAllEmployees() {
        this.employeeRegistrationService.findAll().then(
            employees => {
                this.employees = employees;
            },
            err => {
                console.log(err);
            }
        );
    }

    createEmployee() {
        let firstName = (<HTMLInputElement>document.getElementById('firstName')).value;
        let lastName = (<HTMLInputElement>document.getElementById('lastName')).value;
        let gender = (<HTMLInputElement>document.getElementById('gender')).value;
        let dateOfBirth = (<HTMLInputElement>document.getElementById('dateOfBirth')).value;
        let department = (<HTMLInputElement>document.getElementById('department')).value;
        let employee = new Employee(0, firstName, lastName, gender, dateOfBirth, department);
        this.employeeRegistrationService.createEmployee(employee).then(
            employees => {
                this.employees = employees;
            },
            err => {
                console.log(err);
            }
        );
    }

}