require('dotenv').config();
const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGO_URI);
//family:4 .....to tell mongo to use IPV4 because it's IPV6 by default
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, family: 4,});

let Person;

//Create and Save a Record of a Model
const createAndSavePerson = (done) => {
  //creating the document
  let mimie = new Person({
    name : "Mimie",
    age:25,
    favoriteFoods:["Sadza", "Rice", "Pizza"]
  });
  
  mimie.save((error,data)=>{
      if(error){
        return console.log(error)
      }
      else{
        done(null , data);
      }
  })
  
};



var arrayOfPeople = [
  {name: "Frankie", age: 74, favoriteFoods: ["Del Taco"]},
  {name: "Sol", age: 76, favoriteFoods: ["roast chicken"]},
  {name: "Robert", age: 78, favoriteFoods: ["wine"]}
];

//creating many documents / Create Many Records with model.create()
const createManyPeople = (arrayOfPeople, done) => {

  Person.create(arrayOfPeople, function (err, people) {
    if (err) return console.log(err);
    done(null, people);
  });
  
  
};


//Use model.find() to Search Your Database
const findPeopleByName = (personName, done) => {
/*   Person.find({
    name: personName // search query
  })
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
  done(null , data); */

  Person.find({
    name: personName
  },
     function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

//Use model.findOne() to Return a Single Matching Document from Your Database
const findOneByFood = (food, done) => {
  Person.findOne({
      favoriteFoods:food
  },
  function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });

  
};
//Use model.findById() to Search Your Database By _id
const findPersonById = (personId, done) => {
  Person.findById({
    _id:personId
},
function (err, personFound) {
  if (err) return console.log(err);
  done(null, personFound);
});
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

const personSchema =mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:Number,
  favoriteFoods:[String]
});

Person = mongoose.model('Person',personSchema);
/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
