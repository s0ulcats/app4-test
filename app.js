const http = require('http');
const fs = require('fs');
const PORT = 1488

http.createServer(function(req, res){
    const url = req.url;
    console.log(url);
    res.setHeader("Content-Type", "text/html; charset=utf-8;");
    
    switch (url) {
        case '/':
            console.log('main page');
            res.write('<h1>Main Page</h1>');
            break;
        case '/contact':
            console.log('contact page');
            let data = fs.readFileSync('./public/contact.html', {encoding : "utf8", flag : "r"});
            res.write(data);
            break;
        default:
            if (url.includes('/img')) {
                fs.readFile('./public'+ url, {}, function(error, data){
                    if (error) {

                    }
                    console.log('Yraaaaaaaaaa');
                    res.setHeader("Content-Type", "img/png");
                    res.write(data);
                    res.end();
                });
            }
            else{
                console.log('404');
                res.write('<h1>404</h1>');
            }
    }
}).listen(PORT);