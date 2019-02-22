module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        
        db.get_all_houses().then(res => {
            res.status(200).send(res)
        })
    }
}