const http = require("http");
let server = new http.Server();

server.listen(8000, `localhost`);

server.on(`request`, (req, res) => {
    const fs = require("fs");
    let file = fs.readFileSync('data.json', "utf8")
        let arr = JSON.parse(file);
        let result = JSON.stringify(file)
            res.writeHead(200, {
                'Content-Type': 'text/event-stream; charset=utf-8',
                'Cache-Control': 'no-cache',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            });
            if (req.method == "POST") {
                let body = ""
                req.on(`data`, chunk => {
                    body += chunk.toString();
                    arr.push(JSON.parse(body))
                    file = fs.writeFile(`data.json`, JSON.stringify(arr), (err) => {
                    })
                });
            }
            res.end(result)
})
