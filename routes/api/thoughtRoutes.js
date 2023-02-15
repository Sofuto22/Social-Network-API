const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    createReaction,

} = require("../../controllers/thought-controller");

router.route("/").get(getAllThoughts);

router.route("/:id").get(getThoughtById)
.push(createThought)
.delete(deleteThought);

router.route("/:reactions")
.post(createReaction);

module.exports=router;