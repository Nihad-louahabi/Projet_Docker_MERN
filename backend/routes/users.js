import  express  from "express";
import { deleteUser, gitAllUser, gitSingleUser, updateUser } from "../controllers/userController.js";
const router = express.Router()
import { verifyUser } from "../utils/verifyToken.js";

router.delete('/:id',verifyUser,deleteUser);
router.put('/:id',verifyUser,updateUser);
router.get('/:id',verifyUser,gitSingleUser);
router.get('/',verifyUser,gitAllUser);


export default router;