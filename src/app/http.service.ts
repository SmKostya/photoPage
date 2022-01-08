import {ErrorHandler, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError, lastValueFrom, map, Observable, throwError } from 'rxjs';
import { PhotoComments } from './photo';
  
@Injectable()
export class HttpService{

  
    constructor(private http: HttpClient){ }
      
    getData(){
        return this.http.get('https://boiling-refuge-66454.herokuapp.com/images')
    }
    getDataPhoto(id:number){
        return this.http.get('https://boiling-refuge-66454.herokuapp.com/images/' + id)
    }
    err:any;
    async postComment (id:number, name:string, comment:string){
    let url = "https://boiling-refuge-66454.herokuapp.com/images/" + id + "/comments"; 
    let request =  {"name":name, "comment":comment};
    console.log(request);
    try {
        await lastValueFrom(this.http.post(url, request)).then((data:any) => {
            console.log(data);

        })
    } catch (error) {
        console.log(error);    
    }
    
    

    }
}    

