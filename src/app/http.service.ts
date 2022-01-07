import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, Observable } from 'rxjs';
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

}    
