const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var _ = require('lodash');


const homeSTartingContent= "Ohayo everyone, this is a daily journal for keeping tabs of your day to day activitites. It's not fully functional yet but you can create blog posts, and it'll appear on your home page. Give it a try and send feedbacks to the contact email on contact us page. "
const aboutContent = "I would've loved to make this personalized, but that would be extra work, i got lots of anime and movies to finish and other code challenges to focus on. Sorry about that, it'll be available in the next update."
const contactContent = "Not really necessary, but if you'll be interested in reaching out to me, you can hit me up through my email: olaoluaoladunjoye130@gmail.com. Coding is stressfun but fun."
let posts = [];
let urlLink = "";



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))



app.get("/", function (req, res) {
    // fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.render("home", {homeContent: homeSTartingContent, postList : posts });
})


app.get("/about", function (req, res) {
    res.render("about", {about: aboutContent});
})


app.get("/contact", function (req, res) {
    res.render("contact", {contact : contactContent});
})


app.get("/compose", function (req, res) {
    res.render("compose");
})

app.post("/compose", function(req, res) {

    let post = {
        titleTag: req.body.title,
        postTag: req.body.postBlog,

    }

    posts.push(post);
    res.redirect("/")

})



app.get('/posts/:postName', function (req, res) {
    
    urlLink = _.lowerCase(req.params.postName);

    posts.forEach( function (link) {
        if (_.lowerCase(link.titleTag) === urlLink) {

            // let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;

            res.render("posts", {
                title: link.titleTag,
                content: link.postTag,
            });
            
        }
    })

  })




app.listen(3000, function () {
    console.log("Server started on port 3000");
})