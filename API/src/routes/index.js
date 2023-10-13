const express = require('express')
const routes = express.Router()

const CompetidorController = require('../app/controller/CompetidorController')
const BatalhaSumoController = require('../app/controller/BatalhaSumoController')
const VitoriaController = require('../app/controller/VitoriaController')
const CorridaFollowController = require('../app/controller/CorridaFollowController')
const BatalhaMiniController = require('../app/controller/BatalhaMiniController')
const BatalhaCodeController = require('../app/controller/BatalhaCodeController')
const VitoriaMiniController = require('../app/controller/VitoriaMiniController')
const VitoriaCodeController = require('../app/controller/VitoriaCodeController')

routes.get('/', (req, res) => {
    res.status(200).json({
        "messages": "Tudo ok"
    })
})

routes.get("/competidor", CompetidorController.list)
routes.get("/competidor/:_id", CompetidorController.byId)
routes.post("/cad-competidor", CompetidorController.create)
routes.delete("/delet-competidor/:_id", CompetidorController.delete)
routes.put("/edit-competidor/:_id", CompetidorController.edit)

routes.post("/round", BatalhaSumoController.create)
routes.get("/round", BatalhaSumoController.list)
routes.delete("/delet-round/:_id", BatalhaSumoController.delete)
routes.delete("/delet-round", BatalhaSumoController.deleteAll)
routes.get("/round/:_id", BatalhaSumoController.byId)

routes.post("/round-mini", BatalhaMiniController.create)
routes.get("/round-mini", BatalhaMiniController.list)
routes.delete("/delet-round-mini/:_id", BatalhaMiniController.delete)
routes.delete("/delet-round-mini", BatalhaMiniController.deleteAll)
routes.get("/round-mini/:_id", BatalhaMiniController.byId)

routes.post("/round-code", BatalhaCodeController.create)
routes.get("/round-code", BatalhaCodeController.list)
routes.delete("/delet-round-code/:_id", BatalhaCodeController.delete)
routes.get("/round-code/:_id", BatalhaCodeController.byId)

routes.post("/vitoria", VitoriaController.create)
routes.get("/vitoria/:_id", VitoriaController.byId)
routes.get("/vitoria", VitoriaController.list)
routes.delete("/delet-vitoria", VitoriaController.deleteAll)
routes.delete("/delet-vitoria/:_id", VitoriaController.delete)
routes.put("/edit-vitoria/:_id", VitoriaController.edit)
routes.delete("/vitoria/:_id", VitoriaController.delete)

routes.post("/vitoria-mini", VitoriaMiniController.create)
routes.get("/vitoria-mini/:_id", VitoriaMiniController.byId)
routes.get("/vitoria-mini", VitoriaMiniController.list)
routes.put("/edit-vitoria-mini/:_id", VitoriaMiniController.edit)
routes.delete("/delet-vitoria-mini", VitoriaMiniController.deleteAll)
routes.delete("/delet-vitoria-mini/:_id", VitoriaMiniController.delete)

routes.post("/vitoria-code", VitoriaCodeController.create)
routes.get("/vitoria-code/:_id", VitoriaCodeController.byId)
routes.get("/vitoria-code", VitoriaCodeController.list)
routes.put("/edit-vitoria-code/:_id", VitoriaCodeController.edit)

routes.post("/volta", CorridaFollowController.create)
routes.get("/volta", CorridaFollowController.list)
routes.delete("/delet-volta/:_id", CorridaFollowController.delete)
routes.delete("/delet-volta", CorridaFollowController.deleteAll)
routes.get("/volta/:_id", CorridaFollowController.byId)
routes.put("/volta/:_id", CorridaFollowController.edit)


/*routes.post("/login", UserController.login);
routes.post("/message", MenssageController.create);

routes.use(auth.validatioinToken)

routes.get("/signup", UserController.userList);
routes.put("/signup/:id", UserController.userUpdate);
routes.get("/listMessage", MenssageController.list);
routes.put("/listMessage/:id", MenssageController.done);

routes.use(auth.validationUser)*/

module.exports = routes