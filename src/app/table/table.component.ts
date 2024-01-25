import { Component } from '@angular/core';
import {ItemComponent} from '../item/item.component'
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButton, MatButtonModule} from '@angular/material/button';

export interface PeriodicElement {
  name:string;
  address: string;
  phone: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', address: '1234123', phone: 'H'},
  {position: 2, name: 'Helium', address: '1234123', phone: 'He'},
  {position: 3, name: 'Lithium', address: '1234123', phone: 'Li'},
  {position: 4, name: 'Beryllium', address:'1234123', phone: 'Be'},
];

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule,ItemComponent,MatIconModule,MatButtonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  displayedColumns: string[] = ['position', 'name', 'address', 'phone'];
  dataSource = ELEMENT_DATA;
}
