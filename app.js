const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){



    res.sendFile(__dirname+"/index.html");
    // const place = "landran";
    // const appid  = "9112e990e03fc1ca0cfaa235833fcab2";
    // const units = "metric";
    // const url = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid="+appid+"&units="+units;
    // https.get(url,function(response){
    //     console.log(response.statusCode);

    //     response.on("data",function(data){

    //         console.log(data);

    //         const weatherData = JSON.parse(data);

    //        const temp =  weatherData.main.temp;
    //        const weatherDescription = weatherData.weather[0].description;
    //        const icon = weatherData.weather[0].icon;
    //        const url2 = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";

    //        res.write("<h1>The Temperature of Landran is "+temp + " degresss celc </h1> ")
    //        res.write(" <p>The Weather Description  of Landran is "+ weatherDescription + "<p>");
    //        res.write("<img src =" + url2 +">");
    //        res.send();
    //     //     console.log(weatherData);
    //     //     const object = {
    //     //         name:"vidhi",
    //     //         favourfood:"noodles"
    //     //     }
    //     //    console.log(JSON.stringify(object));
    //     })
    // });

    
});




app.post("/",function(req,res){
    var place = req.body.place;
    var units = req.body.units;
    var appid  = req.body.appid;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid="+appid+"&units="+units;
    https.get(url,function(response){
        console.log(response.statusCode);

        response.on("data",function(data){

            console.log(data);

            const weatherData = JSON.parse(data);

           const temp =  weatherData.main.temp;
           const weatherDescription = weatherData.weather[0].description;
           const icon = weatherData.weather[0].icon;
           const url2 = "http://openweathermap.org/img/wn/"+ icon +"@2x.png";

           res.write("<h1>The Temperature of "+place +" is "+temp + " degree celc </h1> ")
           res.write(" <p>The Weather Description  of "+ place +" is "+ weatherDescription + "<p>");
           res.write("<img src =" + url2 +">");
           res.send();
        
    });
});

});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});
