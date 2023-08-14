import { Component } from '@angular/core';
import { ApiserviceService } from './apiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newdata:any;
  constructor(private _apiservice:ApiserviceService){}

  ngOnInit(){
    this._apiservice.getData().subscribe(res=>{
      this.newdata=res;

    })
  }
  title = 'bcp-frontend';
}
