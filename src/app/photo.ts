export class Photo{
    constructor(public id:number, public url:string){}
}
export class PhotoComments{
    constructor(public id:number, public url:string, public comments:[{"id":number,"text":string,"date":number},]){}
}
