const PirateController = require('../controllers/pirate.controllers')

module.exports = function(app){
    app.post('/api/pirates/new',PirateController.createOne)
    app.get('/api/pirates',PirateController.getAll)
    app.get('/api/pirates/:id',PirateController.getOne)
    app.put('/api/pirates/update/:id',PirateController.updateOne)
    app.delete('/api/pirates/:id',PirateController.deleteOne)
}

