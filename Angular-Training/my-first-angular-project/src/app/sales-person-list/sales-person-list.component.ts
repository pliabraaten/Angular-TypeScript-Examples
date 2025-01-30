import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  // templateUrl: './sales-person-list.component.html',
  templateUrl: './sales-person-list-bootstrap.component.html',  // Points to new Bootstrap styled URL
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // Create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Ringo", "Star", "beats@thebeatles.com", 50000),
    new SalesPerson("Paul", "M", "star@thebeatles.com", 60000),
    new SalesPerson("George", "Harrison", "guitar@thebeatles.com", 70000),
    new SalesPerson("John", "Lenon", "voice@thebeatles.com", 40000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
