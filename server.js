const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method == "post" && req.url == "/webhook") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ ok: true }));
    } else {
        res.end("Not Fount");
    }
});
server.listen(4000, () => {
    console.log("webhook服务已经在4000端口启动");
});
