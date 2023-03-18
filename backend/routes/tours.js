import  express  from "express";
import { createTour, deleteTour, getTourBySearch, getTourCount, gitAllTour, gitFeaturedTour, gitSingleTour, updateTour } from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router()

router.post('/',verifyAdmin,createTour)
router.delete('/:id',verifyAdmin,deleteTour)
router.put('/:id',verifyAdmin,updateTour)
router.get('/:id',gitSingleTour)
router.get('/',gitAllTour)
router.get('/search/getTourBySearch',getTourBySearch)
router.get('/search/gitFeaturedTour',gitFeaturedTour)
router.get('/search/getTourCount',getTourCount)

export default router;