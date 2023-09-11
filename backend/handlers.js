const fs = require("fs")
const HomePage = fs.readFileSync("frontend/index.html")
const date_fetcher = fs.readFileSync("frontend/date_fetcher.js")

module.exports = getHome = (req,res) => 
{
    res.end(HomePage)
}

module.exports = getInfo = (req,res) =>
{
    let info = req.path
    if(info.includes(".js"))
    {
        info = info.slice(1,info.length-3)
        res.end(eval(info))
    }
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