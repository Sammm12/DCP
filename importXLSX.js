//DCP+ xlsx reader

var xlsx = require('xlsx');

var testing = xlsx.readFile('');
var testing2 = testing.Sheets['semesters'];
var arr1 = [];
var arr2 = [];
var arr3 = ['B', 'F', 'J', 'N'];
var arr4 = ['C', 'G', 'K', 'O'];
var jsonVar = {};

for(var i=4; i<8; i++){//get student info (name, major, advisor)
    if ((i !== 6) && (i !== 7)) {
        var stringy = "B" + i;
        var stringy2 = "E" + i;
        var desiredCell = testing2[stringy];
        var desiredCell2 = testing2[stringy2];
        if((typeof(desiredCell) !== 'undefined') || (typeof(desiredCell2) !== 'undefined')) {
            var desiredVal = desiredCell.v;
            var desiredVal2 = desiredCell2.v;
            if(stringy2 == 'E4') {
                var desiredVal = desiredCell.v;
                var desiredVal2 = desiredCell2.v;
                var desiredVal3 = desiredVal2.split(',');
                //var string1 = JSON.stringify('lName');
                jsonVar['lName'] = desiredVal3[0];
                jsonVar['fName'] = desiredVal3[1];
            }
            // if(stringy == 'B5') {
            //     jsonVar['major'] = desiredVal2;
            //     // var desiredVal = desiredCell.v;
            //     var desiredVal2 = desiredCell2.v;
            // }
            else {
                jsonVar[desiredVal] = desiredVal2;
            }
        }
    }
}

for(var i=4; i<6; i++){//get student id and catalog year
    var stringy = "K" + i;
    var stringy2 = "M" + i;
    var desiredCell = testing2[stringy];
    var desiredCell2= testing2[stringy2];
    var desiredVal = desiredCell.v;
    var desiredVal2 = desiredCell2.v;
    jsonVar[desiredVal] = desiredVal2;
};

for(var i=6; i<7; i++){//get student transfer status
    var stringy = "K" + i;
    var stringy2 = "N" + i;
    var desiredCell = testing2[stringy];
    var desiredCell2= testing2[stringy2];
    var desiredVal = desiredCell.v;
    var desiredVal2 = desiredCell2.v;
    jsonVar[desiredVal] = desiredVal2;
};

for(var i=12; i<46; i+=11) {//get semesters in order
    for (var j=0; j<arr3.length; j++) {
        var stringy = arr3[j] + i;
        var desiredCell = testing2[stringy];
        if(typeof(desiredCell) !== 'undefined'){//if semester value is undefined, don't include it
            var desiredVal = desiredCell.v;
            arr2.push(desiredVal);
        }
    }
};

var i1=0;
var i2=1;
var i3=2;
var i4=3;
var u1=14;
var u2=20;
getClasses(i1, i2, i3, i4, u1, u2, arr2, arr3, arr4);

var i1=4;
var i2=5;
var i3=6;
var i4=7;
var u1=25;
var u2=31;
getClasses(i1, i2, i3, i4, u1, u2, arr2, arr3, arr4);

var i1=8;
var i2=9;
var i3=10;
var i4=11;
var u1=36;
var u2=42;
getClasses(i1, i2, i3, i4, u1, u2, arr2, arr3, arr4);

var i1=12;
var i2=13;
var i3=14;
var i4=15;
var u1=47;
var u2=53;
getClasses(i1, i2, i3, i4, u1, u2, arr2, arr3, arr4);

function getClasses(k, k2, k3, k4, l1, l2, arr2, arr3, arr4) {//gets the classes of each semester
    var jsonVar2 = [];
    var jsonVar3 = [];
    var jsonVar4 = [];
    var jsonVar5 = [];
    var newNum = 0;

    for(var i=k; i<arr2.length; i++) {//get an array of the classes in each semester as json objects
        for(var j=l1; j<l2; j++) {
            var stringy = arr3[newNum] + j;
            var stringy2 = arr4[newNum] + j;
            //console.log(stringy2)
            var desiredCell = testing2[stringy];
            var desiredCell2 = testing2[stringy2];
                if((typeof(desiredCell) !== 'undefined') || (typeof(desiredCell2) !== 'undefined')){//if value is undefined, don't include it
                    var desiredVal = desiredCell.v;
                    var desiredVal2 = desiredCell2.v;
                    if (desiredVal.length < 8){
                        var subj = desiredVal.substring(0,3);
                        var code = desiredVal.substring(4,7);
                        var cred = desiredVal2;
                        if(i==k){
                            jsonVar2.push({
                                "subject": subj,
                                'code': code,
                                "credits": cred
                            });
                            
                            jsonVar[arr2[i]] = jsonVar2;
                        }
                        if(i==k2){
                            jsonVar3.push({
                                "subject": subj,
                                'code': code,
                                "credits": cred
                            });
                            
                            jsonVar[arr2[i]] = jsonVar3;
                        }
                        if(i==k3){
                            jsonVar4.push({
                                "subject": subj,
                                'code': code,
                                "credits": cred
                            });
                            
                            jsonVar[arr2[i]] = jsonVar4;
                        }
                        if(i==k4){
                            jsonVar5.push({
                                "subject": subj,
                                'code': code,
                                "credits": cred
                            });
                            
                            jsonVar[arr2[i]] = jsonVar5;
                        }
                    } else {
                        var subj = desiredVal.substring(0, 4)
                        var code = desiredVal.substring(5,8);
                        var cred = desiredVal2;
                        if(i==k){
                            jsonVar2.push({
                                "subject": subj,
                                'code': code,
                                "credits": cred
                            });
                            
                            jsonVar[arr2[i]] = jsonVar2;
                        }
                        if(i==k2){
                            jsonVar3.push({
                                "subject": subj,
                                'code': code,
                                "credits": cred
                            });
                            
                            jsonVar[arr2[i]] = jsonVar3;
                        }
                        if(i==k3){
                            jsonVar4.push({
                                "subject": subj,
                                'code': code,
                                "credits": cred
                            });
                            
                            jsonVar[arr2[i]] = jsonVar4;
                        }
                        if(i==k4){
                            jsonVar5.push({
                                "subject": subj,
                                'code': code,
                                "credits": cred
                            });
                            
                            jsonVar[arr2[i]] = jsonVar5;
                        }
                    }
                } 
        }
        newNum++;
    }
    return jsonVar;
}

console.log(jsonVar);
