import { Component, Input } from '@angular/core';
import { Session } from './session';

@Component({
  moduleId: module.id,
  selector: 'session',
  templateUrl: 'session.component.html',
  styleUrls: ['session.component.css']
})
export class SessionComponent {
    @Input()
    session: Session;
}