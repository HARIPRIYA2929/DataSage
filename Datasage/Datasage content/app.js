const express= require("express");
const hbs= require("hbs");
const mongoose = require('mongoose');
const app = express();
const routes= require('./routes/main')
const Detail=require("./models/Detail")
const Slider=require("./models/Slider")
const Service=require("./models/Service")
const bodyParser=require('body-parser')


// / static/css/style.css
app.use(bodyParser.urlencoded({
  extended:true
}))
app.use('/static',express.static("public"))
app.use('',routes)


//(template engine)

app.set('view engine','hbs')
app.set("views","views")
hbs.registerPartials("views/partials")


//db connections
//const mongoose = require('mongoose');

// --------------API

mongoose.connect('mongodb://127.0.0.1:27017/web_project', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('Connection to MongoDB successful'))
  // Detail.create({
  //   brandName:"Data World",
  //   brandIconUrl:"http://thestephaneandre.com/wp-content/uploads/2017/04/dataScience_underratedJob_00.png",
  //   links:[
  //     {
  //       label:"Home",
  //       url:"/"
  //     },
  //     {
  //       label:"Services",
  //       url:"/services"
  //     },
  //     {
  //       label:"Gallery",
  //       url:"/gallery"
  //     },
  //     {
  //       label:"About",
  //       url:"/about"
  //     },
  //     {
  //       label:"Contact Us",
  //       url:"/contact-us"
  //     },
  //   ]
  // })


  //------Crud operations

  // Slider.create([
  //   {
  //     title:'Learn Data Science in very easy manner',
  //     subTitle:'Data Science is the future of this crazy world',
  //     imageUrl:"/static/images/s1.jpg"
  //   },
  //   {
  //     title:'Data Visualization',
  //     subTitle:'Is most important phase in work flow data science project',
  //     imageUrl:"/static/images/s4.jpg"
  //   },
  //   {
  //     title:'Power BI',
  //     subTitle:'Is one of the most powerful tool for data visualization',
  //     imageUrl:"/static/images/s3.jpg"
  //   },
  // ])

  // Service.create([
  //   {
  //     icon:'fab fa-accusoft',
  //     title:'Provide Best Courses',
  //     description:'We provide courses that helps our student in learning and placements.',
  //     linkText:'https://www.learncodewithdurgesh.com',
  //     link:'Check'
  //   },
  //   {
  //     icon:'fab fa-affiliatetheme',
  //     title:'Learn Projects',
  //     description:'We provide courses that helps our student in learning and placements.',
  //     linkText:'https://www.learncodewithdurgesh.com',
  //     link:'Learn'
  //   },
  //   {
  //     icon:'fab fa-affiliatetheme',
  //     title:'Learn Projects',
  //     description:'We provide courses that helps our student in learning and placements.',
  //     linkText:'https://www.learncodewithdurgesh.com',
  //     link:'Learn'
  //   }

  // ])

  .catch((err) => console.error(err));

  

    
app.listen(process.env.PORT | 5556, () => {
    console.log("server started");
});


