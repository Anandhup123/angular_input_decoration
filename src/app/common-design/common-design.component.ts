import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-design',
  templateUrl: './common-design.component.html',
  styleUrls: ['./common-design.component.css']
})
export class CommonDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
@Input() product_price:string="";
@Input() product_name:string="";
@Input() product_image:string="";
}
