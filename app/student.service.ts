import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Student } from './student';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
    private studentsUrl = 'http://localhost:51773/api/students';

    constructor (private http: Http) {}

    getStudents (): Observable<Student[]> {
        return this.http.get(this.studentsUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    addStudent (newStudent: Student): Observable<Student> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.studentsUrl, newStudent, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.students || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}