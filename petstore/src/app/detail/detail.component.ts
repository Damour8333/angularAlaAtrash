import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'pet-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 id !: number;
 name !:string;
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.id= Number(this.route.snapshot.paramMap.get('id'))
    this.name= String(this.route.snapshot.paramMap.get('name'))

  }

}
