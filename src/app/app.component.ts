import { Component, Inject } from '@angular/core';
import { HttpService} from './http.service';
import {Photo} from './photo';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    HttpService,
  ]
})

export class AppComponent{ 
  title = 'photoPage';
  photoDate: Photo[]=[];
  constructor( private httpService: HttpService){

  }
  
  ngOnInit(){
    this.httpService.getData().subscribe((data: any) => this.photoDate=data);
  }

  public openModal(id:number){
    console.log("Works" + id);
  }
  
}
