import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

  app.get("/", async (req, res) => {
    try {
        const result = await axios.get("https://api.jikan.moe/v4/random/anime");
        res.render("index.ejs", {
            anime: result.data.data.url,
            title: result.data.data.title,
            title_english: result.data.data.title_english,
            image: result.data.data.images.jpg.image_url,
            synopsis: result.data.data.synopsis,
            status: result.data.data.status,
            rating: result.data.data.rating,
          });
    
    console.log(images);;  

      } catch (error) {
        res.status(500);
      }
    });

  app.get("/about", (req, res) => {
    res.render("about.ejs")
    });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  