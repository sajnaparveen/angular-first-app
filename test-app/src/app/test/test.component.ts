import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../signup/products.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers:[ProductsService]
})
export class TestComponent implements OnInit {

  constructor(public prod : ProductsService) { }

  ngOnInit(): void {
  }
  increase(){
    this.prod.increasevalue()
  }
}
