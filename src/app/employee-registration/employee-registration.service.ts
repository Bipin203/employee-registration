import { Injectable } from '@angular/core';
import { Employee } from "./employee";
import { Http, Response } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class EmployeeRegistrationService {
    
    private apiUrl = 'http://localhost:8080/employeeregistration/';
        
    constructor(private http: Http) {
    }
    
    findAll(): Promise<Array<Employee>> {
        return this.http.get(this.apiUrl + "employees")
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }
    
    createEmployee(employee: Employee): Promise<Array<Employee>> {
        let empHeaders = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl + "employee", JSON.stringify(employee), { headers: empHeaders })
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<Array<any>> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
