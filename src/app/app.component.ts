import { Component, OnInit } from '@angular/core';
import { CrudService } from './service/crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'firestore';

  Details: any;
  token = 'changedToken';
  tokenID = '4zG7Ycgd2SVSdl3NDcLJ';
  constructor(private crudService: CrudService){}

  ngOnInit(){
    this.crudService.readToken().subscribe(data => {

      this.Details = data.map(e => {
        return{
          id: e.payload.doc.id,
          LongAccessToken: e.payload.doc.data()['LongAccessToken'],
        };
      })
      console.log(this.Details);
    })
  }

  readToken(){
    this.crudService.readToken().subscribe(data => {

      this.Details = data.map(e => {
        return{
          id: e.payload.doc.id,
          LongAccessToken: e.payload.doc.data()['LongAccessToken'],
        };
      })
      console.log(this.Details);
    })
  }

  createToken(){
    let details = {};
    details['LongAccessToken'] = this.token;
    this.crudService.createToken(details);
  }

  updateToken(){
    let details = {};
    details['LongAccessToken'] = this.token;
    this.crudService.updateToken(this.tokenID, details);
  }
  
  deleteToken(){
    
    this.crudService.deleteToken(this.tokenID);
  }

}
