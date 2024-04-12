class User {
    id: number;
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    phone: number;
 
    constructor
 
    (
        id: number,
        username: string,
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        phone: number
    )
 
    {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }
}
 
const ModelUser = new User(
    85,
    "manideep",
    "manideeps.lanka225@gmail.com",
    "Saideep@99",
    "mani",
    "deep",
    8143650456,
);
 
console.log(ModelUser);
 