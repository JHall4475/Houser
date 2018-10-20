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
    }
}