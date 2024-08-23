import { Router } from "express"
import { PropertyController } from "../controllers/property.controller"

const router = Router()
const propertyController = new PropertyController()

router.get('/properties/:id', propertyController.findById)
router.post('/properties', propertyController.createMany)

export default router