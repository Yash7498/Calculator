const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(request,response){
    response.sendFile(__dirname+"/index.html");
});

app.get("/bmiCalculator.html",function(request,response){
    response.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator.html",function(request,response){
    var height = Number(request.body.height);
    var weight = Number(request.body.weight);
    var bmi = (weight/(height*height));
    response.send("Your bmi is "+ bmi);
})


app.post("/",function(request,response){
    var n1 = Number(request.body.num1);
    var n2 = Number(request.body.num2);
    var result = n1 + n2;
    response.send("The result of Calculation is "+result);
});

app.listen(3000,function(){
    console.log("Server has started on port 3000");
});