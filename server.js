    app.set('port', process.env.PORT || 3000);
    app.use(express.bodyParser())
});

app.get("/:id", function(req, resp) {
    var id = req.params.id
    resp.send("Hello world! You have asked for " + id);
});

app.post("/post", function(req, res) {
    var wine = req.body;
    console.log(wine);
})

app.listen(3000);
console.log("Server listening on port 3000");
