import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css']
})
export class StudentDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.total=this.mark1+this.mark2+this.mark3;
    this.Average=this.total/3;
  }
@Input() img:string='';
@Input() Average:any;
@Input() total:any;
@Input() name:string='';

@Input() mark1:number=0;
@Input() mark2:number=0;
@Input() mark3:number=0;

}
