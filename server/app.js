const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors({ origin: true }));

const FlightConstructor = require("./models/model")

app.listen(5000, () => {
    console.log("connected to port 5000");
    mongoose.connect("mongodb+srv://srikark:srikar@cluster0.hp7j6ev.mongodb.net/")
    .then(() => {
        console.log("connected to database");
    })
    .catch((err) => {
        console.log(err);
    })
})

app.get("/", (req,res) => {
    res.send("server running here")
})

app.post("/testing", (req,res) => {
    const id = req.body.id;
    res.send(id)
})

app.post("/showprice", (req,res) => {
    const start = req.body.start
    const end = req.body.dest
    FlightConstructor.find({start: start, end: end})
    .then((resp) => {
        console.log(resp);
        res.send(resp)
    })
    .catch((err) => {
        console.log(err);
        res.send(err)
    })
})

app.post("/newpriceset", async (req,res) => {
    // const start ="Mumbai";
    // const end ="Hyderabad";
    const start = req.body.start
    const end = req.body.dest
    const date = req.body.date
    const new_entry = new FlightConstructor({
        start:start,
        end:end,
        date: date,
        price:[randomNumber(1500,1700),randomNumber(1700,2000),randomNumber(2000,2250)]
        // price: 4000
    })
    await new_entry.save()
    res.send("success")
    // res.send(new_entry)
})

// app.get("/newpriceset2", async (req,res) => {
//     const start ="Mumbai";
//     const end ="Kolkata";
//     const new_entry = new FlightConstructor({
//         start:start,
//         end:end,
//         date: 05-05-2023,
//         price:[randomNumber(1500,1700),randomNumber(1700,2000),randomNumber(2000,2250)]
//     })
//     await new_entry.save()
//     res.send("success")
//     // res.send(new_entry)
// })

// app.get("/newpriceset3", async (req,res) => {
//     const start ="Mumbai";
//     const end ="Delhi";
//     const new_entry = new FlightConstructor({
//         start:start,
//         end:end,
//         date: 05-05-2023,
//         price:[randomNumber(1500,1700),randomNumber(1700,2000),randomNumber(2000,2250)]
//     })
//     await new_entry.save()
//     res.send("success")
//     // res.send(new_entry)
// })

// app.get("/newpriceset4", async (req,res) => {
//     const start ="Mumbai";
//     const end ="Chennai";
//     const new_entry = new FlightConstructor({
//         start:start,
//         end:end,
//         date: 05-05-2023,
//         price:[randomNumber(1500,1700),randomNumber(1700,2000),randomNumber(2000,2250)]
//     })
//     await new_entry.save()
//     res.send("success")
//     // res.send(new_entry)
// })

// app.get("/newpriceset5", async (req,res) => {
//     const start ="Mumbai";
//     const end ="Bangalore";
//     const new_entry = new FlightConstructor({
//         start:start,
//         end:end,
//         date: 05-05-2023,
//         price:[randomNumber(1500,1700),randomNumber(1700,2000),randomNumber(2000,2250)]
//     })
//     await new_entry.save()
//     res.send("success")
//     // res.send(new_entry)
// })



function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}
