const readline = require("readline");
let MongoClient = require('mongodb').MongoClient
let uri = "mongodb+srv://kandin:Pancake2@cluster0.noqkz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
student = {
    "id": 0,
    "fName": "admin",
    "lName": "user",
    "major": "Computer Science",
    "transferStudent": false,
    "studentStatus": "Full Time",
    "questionaireTaken": false,
    "semesters": [
        {
            "term": "Fall",
            "year": 2016,
            "courses": [
                {
                    "subject": "BIOL",
                    "code": "206"
                },
                {
                    "subject": "MATH",
                    "code": "274"
                }
            ]
        }
    ]
}
MongoClient.connect(uri,function(err,db){
    if(err) throw err
    console.log("connection succesful")
    let database = db.db("testing")
    let search = {"subject":"MATH", "code":"310"}
   // prereqChecker(search,database)
   semesterValidator(student.semesters[0],database)
})
async function semesterValidator(schedule,database){
    let temp = 0
    for(let i = 0; i < schedule.courses.length; i++){
        let temp = await prereqChecker(schedule.courses[i],database)
        console.log("AHHH!")
        console.log(temp)
    }
}
 function prereqChecker(course, database){
    return new Promise(function (resolve, reject){

        if(Object.keys(course).length === 0){//base case of no prereq
            return
        }
        console.log(course)
        database.collection("Core").find(course).toArray(function (err, result) {
            if(err) throw err
            result = [result[1]]
            console.log("DEBUG: ")
            console.log(result)
            // preCourse = result;
            if(result.length === 0){
                return
            }

            resolve(result)
        })
    })


    // console.log("Precourse: ")
    // console.log(preCourse)
    // for(let i = 0; i < preCourse[0].prereq.length;i++){
    //     prereqChecker(preCourse,database)
    // }
}



