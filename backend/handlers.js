const fs = require("fs")
const HomePage = fs.readFileSync("frontend/index.html")

module.exports = getHome = (req,res) => 
{
    console.log(req.body)
    console.log(req.path)
   // res.setHeader("Content-Type", "text/html");
    res.end(HomePage)
}

module.exports = getDate = (res) =>
{
    const data = new Date();
    const Calendarium = 
    {
        Year:  data.getFullYear(),
        Month: data.getMonth(),
        DayWeek:   data.getDay(),
        DayMonth: data.getDate()
    }
    res.json({status:"success", data:Calendarium})
}