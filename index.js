import Express from "express";
import mongoose from "mongoose";
import shortURL from "./models/shortUrl.js";

const app = Express();
app.set('view engine', 'ejs');
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }))


//db connection
mongoose.connect('mongodb://127.0.0.1:27017/url-shortner', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/', async (req, res) => {
    const shortUrls = await shortURL.find().exec();
    res.render('index', { shortUrls })
})


app.post('/shorturl', async (req, res) => {
    await shortURL.create({ long: req.body.formURL })
    res.redirect('/')
})
app.get('/:shorturl', async (req, res) => {
    try {
        const shorturl = await shortURL.findOne({ short: req.params.shorturl });

        if (shorturl) {
            shorturl.clicks++;
            shorturl.save();
            res.redirect(shorturl.long);
        } else {
            // Handle the case when the short URL is not found
            res.status(404).send('Short URL not found');
        }
    } catch (error) {
        // Handle any other errors that might occur during database query
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})
app.listen(3000, () => {
    console.log("Server started at localhost:3000");
})