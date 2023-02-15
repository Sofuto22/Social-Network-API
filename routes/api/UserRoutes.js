const router = require("express").Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    removeUser,
    addFriend,
    deleteFriend,
} = require("../../controllers/user-controller");

router.route("/").get(getAllUser);

router.route("/:id").get(getUserById)
.push(createUser)
.delete(removeUser)
.post(updateUser);

router.route("/:friends")
.post(addFriend)
.delete(deleteFriend);

module.exports=router;