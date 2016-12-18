import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Session } from './session';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SessionService {
    private sessionUrl = 'http://localhost:51773/api/sessions';

    constructor (private http: Http) {}

    getSesssions (): Observable<Session[]> {
        return this.http.get(this.sessionUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    addSession (newSession: Session): Observable<Session> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.sessionUrl, newSession, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.sessions || {};
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