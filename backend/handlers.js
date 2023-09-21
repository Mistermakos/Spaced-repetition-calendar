import fs from "fs"
const HomePage = fs.readFileSync("frontend/index.html")

export const getHome = (req,res) => 
{
    res.end(HomePage)
}

export const getDate = (res) =>
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

//export default { getDate, getHome }