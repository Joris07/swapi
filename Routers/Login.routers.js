import Express from "express";

const router = Express.Router();

import {
	loginUser
} from "../Controllers/Login.controller.js";

router.post('/', loginUser)

export { router as login_router }