import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
var i=1;
var x=[];
@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class CurrenciesComponent implements OnInit {
users$;
elements$=[];
$searchString="";
getusersdata(data)
{
  return this.users$.data;
}

  constructor(private data: DataService) { }

  ngOnInit() {
    for(i = 1; i <= 20; i++)
    {
  	this.data.getCurrencies(i).subscribe(
     (data)=> {this.users$ = data;  
         this.elements$.push(this.users$.data);
       console.log(this.elements$);
             },
        (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
        }
    );
console.log(this.data);
  }
}
}
