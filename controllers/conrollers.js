// const getHandler = (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "GET request"
//     })
// }

const data = require("../data.json")

const topTenVac = (req, res) => {
    res.status(200).json({
        success: true,
        data
    })
}

const monthlyState = (req, res) => {
    const { state } = req.body
    res.status(200).json({
        success: true,
        data,
        state
    })
}

module.exports = {
    topTenVac,
    monthlyState
}