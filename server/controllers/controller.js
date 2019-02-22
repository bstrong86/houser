module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db')
        
        db.get_all_houses().then(response => {
            res.status(200).send(response)
        })
    },

    addHouse: (req, res) => {
        const db = req.app.get('db')
        const{name, address, city, state, zip} =req.body

        db.add_house(name, address, city, state, zip).then(response => {
            res.status(200).send(response)
        })
    },

    deleteHouse: (req, res) => {
        const db =req.app.get('db')
        const {id} = req.params

        db.delete_house(id).then(response => {
            res.status(200).send(response)
        })
    }
}