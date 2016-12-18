import { Component } from '@angular/core';
import { Session } from './session';
import { SessionService } from './session.service';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'session-mosiac',
  templateUrl: 'session-mosiac.component.html',
  styleUrls: ['session-mosiac.component.css'],
  providers: [
      SessionService
  ]
})

export class SessionMosiacComponent implements OnInit {
     sessions: Observable<Session[]>;
     
     constructor(private sessionService: SessionService) { }

     ngOnInit(): void {
         this.getSessions();
     }

     getSessions(): void {
         this.sessions = this.sessionService.getSesssions();
     }
}