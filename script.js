//1. Class Movie
class movie1 {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }  
  }
    const movieDetails = new movie1('Casino Royale','Eon Productions','pg-13')
    console.log(movieDetails);

  class movie2 {
    constructor(title, studio){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}
    const movieRating = new movie2('Casino Royale','Eon Productions',this.rating)
    console.log(movieRating);

    
let movie={
    title:'Casino Royale',studio:'Eon Productions',rating:'pg-13',

    get PG(){
        return this.rating;
        
    }
}
console.log(movie.PG)

//2.Class Circle
class shapes{
    constructor(radius,color){
        this.radius=radius;
    }
}
class circle extends shapes{
    constructor(r){
        super(r)   
    }
   
    circumference(){
        return 2*3.14*this.radius;
    }
    area(){
        return 3.14*this.radius*this.radius;
    }
   
}
const c=new circle(10)
console.log(`Circumference of Circle:${c.circumference()}`)
const a=new circle(10)
console.log(`Area of Circle:${a.area()}`)
//3.Class Person
class person1{
    constructor (name,gender,age,mailid,address)
    {
        this.personName=name;
        this.personGender=gender;
        this.personAge=age;
        this.personMailId=mailid;
        this.personAddress=address;
    }
    personDetails(){
        console.log(`Name:${this.personName}`)
        console.log(`Gender:${this.personGender}`)
        console.log(`Age:${this.personAge}`)
        console.log(`Mail Id:${this.personMailId}`)
        console.log(`Address:${this.personAddress}`)
    }      
}
const personObj1=new person1('xxx','Male',27,'xxx@yyy.com','abc nagar,chennai')
personObj1.personDetails()
//to get Object
class person2{
    constructor (name,gender,age,mailid,address)
    {
        this.personName=name;
        this.personGender=gender;
        this.personAge=age;
        this.personMailId=mailid;
        this.personAddress=address;
    }
}
const personObj=new person2('xxx','Male',27,'xxx@yyy.com','abc nagar,chennai')
console.log(personObj)

//4.Uber Price
class uber{
    constructor(price){
        this.Km=price;
    }
travelCost(){
    console.log(`Uber Price is:${20*this.Km}`) 
}
}
const kmTraveled =new uber(5)
kmTraveled.travelCost()

