class Model{
    id:number;
    username:string;
    firstName:string;
    lastName:string;
    
    constructor(
    id:number,
    username:string,
    firstName:string,
    lastName:string,
    )
    {
        this.id =id;
        this.username=username
        this.firstName=firstName
        this.lastName=lastName
    }
    
    
    }
    const UserModel = new Model(94,"manideep","manideep","lanka");
    console.log(UserModel);