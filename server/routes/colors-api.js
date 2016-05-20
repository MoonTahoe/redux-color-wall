import { Router } from 'express'
import colorData from '../../data'

const router = Router();

// Colors
router.get("/",(req, { json }) => json(['/colors', '/color/:id']));
router.get("/colors",(req, { json }) => json(colorData));
router.post("/colors",(req, { json }) => json(colorData));

// COlor
router.get("/color/:id",({ params }, { json }) => json(colorData.filter(c=>c.id==params.id)));
router.put("/color/:id",(req, { json }) => json(colorData));
router.delete("/color/:id",(req, { json }) => json(colorData));

module.exports = router;