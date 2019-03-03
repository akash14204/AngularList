export class DataModel {
    title:String
    description:String
    checkFav?:boolean
    constructor(title:String,  description:String) {
        this.title=title;
        this.description=description;
    }
}
