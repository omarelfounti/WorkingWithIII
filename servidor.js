const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);


    res.setHeader("Content-Type", "text/html");
    //res.write("hola clase");
    //res.write("<p> ejemplo de node</p>");
    //res.write("<p> ejemplo de node</p>");
    //res.end();

    let ruta = "./visualizacion/";
    switch (req.url) {
        case "/":
            ruta += "index.html";
            res.statusCode = 200;  
            break;
        case "/about":
            ruta += "about.html";
            res.statusCode = 200;  
            break;
        case "/about-us":
            ruta += "about.html";
            res.statusCode = 301;
            res.setHeader("Location", "/about");
            res.end();  
            break;
        default:
            ruta += "404.html";
            res.statusCode = 200;  
            break;
    }


    
    
    
    
    
    
    fs.readFile(ruta, (err, data) => {
        if(err){
            console.log(err);
            res.end();
            
        } else{
            res.write(data);
            res.end();
        }
    })

    
});


server.listen(3000, "localhost", () => {
    console.log("ubicado en el puerto 3000");
    
});

