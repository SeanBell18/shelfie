module.exports = {
    get_inventory: (req, res, next) => {
        const dbInstance = req.app.get('db') 
        dbInstance.get_inventory().then(dbRes => {
            res.send(dbRes)
        }).catch(err => {
            console.log(err)
            res.status(500).send("Looks like we couldn't get you the products")
        })
    },
    product: (req, res, next) => {
        const {name, price, image} = req.body
        const dbInstance = req.app.get('db')
        dbInstance.product([name, dprice, image]).then(() => {
            res.sendStatus(200)
        }).catch(err => {
            res.status(500).send("Looks like we hit a problem...")
            console.log(err)
        })
    },
    delete: (req, res, next) => {
        const {index} = req.params
        const dbInstance = req.app.get('db')
        dbInstance.delete(index).then(() => {
            res.sendStatus(200)
        })
    }
}