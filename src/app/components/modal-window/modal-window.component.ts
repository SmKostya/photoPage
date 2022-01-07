import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService} from '../../http.service';
import {PhotoComments} from '../../photo';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  providers: [
    HttpService,
  ]
})
export class ModalWindowComponent implements OnInit {

  food: string = "";
  photoDate: PhotoComments= {
    "url": "",
    id: 0,
    comments: [{"id":0,"text":"","date":0},]
  };
  constructor(private httpService: HttpService,
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.httpService.getDataPhoto(this.data.id).subscribe((data: any) => this.photoDate=data);
  }
  
  getDate(date:number): any{
    return new Date(date).toLocaleString();
  }
  onNoClick(): void {
    this.dialogRef.close({
      food: this.food
    });
  }



  
}
