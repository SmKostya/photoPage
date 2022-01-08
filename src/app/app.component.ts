import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService} from './http.service';
import {Photo} from './photo';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';



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
  constructor(public dialog: MatDialog, private httpService: HttpService){

  }
  openDialog(id:number, url:string): void {
    this.dialog.open(ModalWindowComponent, {
      width: '650px',
      data: {id, url}
    });
  }
  ngOnInit(){
    this.httpService.getData().subscribe((data: any) => this.photoDate=data);
  }  
}
