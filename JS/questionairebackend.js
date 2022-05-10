var url = require("url")
var express = require("express")
var request = require("request");
const { Db } = require("mongodb");
var app = express()
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://DCPGroup:hjHAkaCrvHTWwlPt@cluster0.noqkz.mongodb.net/test"

MongoClient.connect(url, function(err, client) {
    if (err) {
        throw (err)
    }

    const db = client.db("Users")

    // test url /questionnaire.html?studentstatus=fulltime&transferstudent=yes&fname=asdf&lname=ghjk&tuid=123456&major=cosc

    app.get("/api/questionaireSubmit", function(req, res) {
   
   
        var urlParsed = url.parse(req.url, true)
        

        // needs a url of the format /api/questionarieSubmit/???studentstatus=fulltime&transferstudent=yes&fname=michael&lname=summers&tuid=123456&major=cosc
        var split1 = urlParsed.path.toString()
        var split2 = split1.split('???')
        var split2 = split1[1].split('&')
        var split3 = []
        for (i=0; i<split2.length; i++) {
            var changes = split2[i].split('=')
           split3.push(changes)
        }
       var split4 = []
       for (i=0; i<split3.length;i++) {
           answer = split3[i][1]
           split4.push(answer)
        }
       var studentStatus = split4[0]
       var transfer = split[1]
       var fname = split[2]
       var lname = split[3]
       var tuid = split[4]
       var major = split [5]

  
       // needs to be set to the proper user account ID in mongoDB, but an already existing account user is used
       var myQuery = {fname: Nathan, lName:Jones}
       var newValues = {$set: {fName: fname, lName: lname, studentStatus: studentStatus, transferStudent: transfer, Major: major, questionaireTaken: "True"}}
        db.collection("Users").updateOne(myQuery, newValues, function(err, res) {
            if (err) {
                throw (err)
            }
        })

        res.status(200)
    })

    app.get("*", function(req, res) {
        
        res.status=404
        res.sendStatus("404 page not found")
    })


    app.listen(3000)
})