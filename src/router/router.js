const {Router, json} = require("express")
const UserController = require("../controllers/userController");
const TaskController = require("../controllers/taskController");
const router = express.Router()
router.use(express.json())
router.get("/users/:id", UserController.show);
router.get("/users/", UserController.index);
router.post("/users", UserController.save);
router.put("/users/:id", UserController.update);
router.delete("/users/:id", UserController.remove);

router.get("/tasks/:id", TaskController.show);
router.get("/tasks/", TaskController.index);
router.post("/tasks", TaskController.save);
router.put("/tasks/:id", TaskController.update);
router.delete("/tasks/:id", TaskController.remove);

module.exports = router;