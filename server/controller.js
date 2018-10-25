

module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        db.get_houses()
        .then(result => {
            return res.send(result)
        })
        .catch(err => {
            return res.send(err)
        })
    },
    newHouse: (req, res) => {
        const db = req.app.get('db')
        db.add_new_house([req.body.name, req.body.address, req.body.city, req.body.state, req.body.zip])
        console.log(req.body)
        res.send("Successfully Added New House")
        
    },
    deleteHouse: (req, res) => {
        const db = req.app.get('db')
       console.log(req.params.id)
        db.delete_house([req.params.id])
        res.send("Sucessfully deleted House")
    }
}