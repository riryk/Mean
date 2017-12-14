import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpUserService {
    constructor(private http: Http) { 
    }

    public getUsers(): Observable<User[]> {
        return this.extractData(this.http.get("/api/users"));
    }

    public addUser(user: User): Observable<User[]> {
        const addUserRequest = this.buildRequest(user);
        return this.extractData(this.http.post("/api/users", addUserRequest));
    }

    private buildRequest(body: any): RequestOptions {
        const request = new RequestOptions();
        request.body = body || {};
        return request;
    }

    private extractData(response: Observable<any>): Observable<any> {
        return response
            .map((result) => result)
            .catch((error) => {
                const exception = {
                    status: error.status || 500,
                    statusText: error.statusText || '',
                    message: String(error)
                };
                return Observable.throw(exception);
            });
    }
}