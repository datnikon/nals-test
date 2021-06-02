import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() users: User[] = [];
  constructor() { }

}
