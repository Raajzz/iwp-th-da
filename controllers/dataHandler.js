// const getHandler = (req, res) => {
//     res.status(200).json({
//         success: true,
//         message: "GET request"
//     })
// }

module.exports.getHandler = (req, res) => {
        res.status(200).json({
        success: true,
        message: "GET request"
    })
}

module.exports.postHandler = (req, res) => {
    res.status(200).json({
        success: true,
        message: req.body
    })
}