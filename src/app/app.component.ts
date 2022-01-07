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
  city: string = "";
  name: string = "";
  food_from_modal: string = "";


  title = 'photoPage';
  photoDate: Photo[]=[];
  constructor(public dialog: MatDialog, private httpService: HttpService){

  }
  openDialog(id:number): void {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      width: '650px',
      data: { name: this.name, animal: this.city , id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(id);

    });
  }
  ngOnInit(){
    this.httpService.getData().subscribe((data: any) => this.photoDate=data);
  }  
}
