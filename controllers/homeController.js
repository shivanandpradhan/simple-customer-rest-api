const homeController = (req, res) => {
    res.json({
        "/api" : [
            {
                "req" : "get",
                "res" : "All details as a json response."
            },
            {
                "req" : "post",
                "res" : "req.body stored in db."
            }
        ],
        "/api/:id" : [
            {
                "req" : "get",
                "res" : "get specified details related to id."
            },
            {
                "req" : "put",
                "res" : "Do update related to id."
            },
            {
                "req" : "delete",
                "res" : "delete a doc with given id from collection."
            }
        ]
    })
}

export default homeController
