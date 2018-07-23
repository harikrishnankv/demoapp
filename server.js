var express=require('express'); //using express framework
var app=express();
const apiKey='522e0449fb3fed59030438ebe430a968'; //my api key
var request=require('request'); // requesting module require
const bodyParser = require('body-parser');//body-parser is which allows express to read the body and then parse that into a Json object that we can understand

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine','ejs');

app.get('/',function(req,res){

    res.render('search');

});


app.post('/',function(req,res){
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;//data in metric unit

    request(url,function(error,response,body){
      

       let hari_json=JSON.parse(body);
        var hari_weather={
            city:city,
            temperature:hari_json.main.temp ,
            pressure:hari_json.main.pressure,
            humidity:hari_json.main.humidity,
        };
        var weatherData={hari_weather:hari_weather};
        res.render('report',weatherData);

    });

    
    
    });
    app.listen(3000);