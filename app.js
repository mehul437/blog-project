const express = require("express")
const router = require("./route/index")
const cors = require("cors")
const app = express()

app.use(cors())
app.use("/api/v1", router)

app.listen(process.env.PORT, () => {
    console.log("running at 9000")
})




