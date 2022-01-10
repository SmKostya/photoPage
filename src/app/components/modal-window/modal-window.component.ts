import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { HttpService} from '../../http.service';
import {PhotoComments} from '../../photo';
import { PostMessageSuccessComponent } from '../../components/post-message-success/post-message-success.component';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
  providers: [
    HttpService,
  ]
})

export class ModalWindowComponent implements OnInit {
  public urlImage:string = this.data.url;
  openModal:boolean = false;
  newComment: any;
  userName: any;
  postUrl:string = "";
  errorInput:string = "errorInput";
  visibility: string = "visibility";
  photoDate: PhotoComments= {
    "url": "",
    id: 0,
    comments: [{"id":0,"text":"","date":0},]
  };
  constructor(
    public dialog: MatDialog,
    private httpService: HttpService,
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.openModal = false;
    this.httpService.getDataPhoto(this.data.id).subscribe((data: any) => this.photoDate=data);
    if (this.photoDate.url != ""){
      this.urlImage = this.photoDate.url;
    } 
  }
  
  ngDoCheck() {  
    
    if (this.photoDate.url != "" && !this.openModal){
      this.urlImage = this.photoDate.url;
      setTimeout(() =>
      this.visibility = ""
      ,20);
      setTimeout(() =>
      document.getElementsByClassName("main")[0].scrollTo(0,0)
      ,40);
      this.openModal = true;
    } 
  }
  dateTimeConvert(date:number): any{
    return new Date(date).toLocaleString();
  }
  saveComment(): void {
    this.httpService.postComment(this.data.id, this.userName, this.newComment); 
  }  
  validate(): void{
    this.newComment =  (<HTMLInputElement>document.getElementById("userMessage")).value.toString();
    this.userName =  (<HTMLInputElement>document.getElementById("userName")).value.toString();
    if(this.newComment.length > 0 && this.userName.length > 0 ){
      this.saveComment();
      this.openSuccessMessage();
      this.errorInput = "errorInput";
    }else{
      this.errorInput = "";
      if (this.userName.length == 0 && this.newComment.length == 0){
        this.errorInput = "Enter username and comment text.";
      } else if (this.newComment.length == 0){
        this.errorInput = "Enter comment text.";
      } else {
        this.errorInput = "Enter username.";
      }
    }
  }
  openSuccessMessage(): void{
    this.dialog.open(PostMessageSuccessComponent);
  }
}
