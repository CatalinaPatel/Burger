const Burger = require("../controllers/burgers_controller")

const burgerRoutes = new Burger
module.exports = function (app) {
    console.log(app)
    burgerRoutes.index(app)
    burgerRoutes.add(app)
    burgerRoutes.devour(app)
    burgerRoutes.remove(app)
}

