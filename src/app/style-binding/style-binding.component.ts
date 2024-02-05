import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
cent: any;
green: any;

  constructor() { }

  ngOnInit(): void {
  }  
public heading_style="background-color:yellow;color:blue"
}
