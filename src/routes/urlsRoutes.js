import { Router } from "express";
import { addShortUrl, deleteShortUrl } from "../controllers/addDeleteUrlController.js";
import { listUrl, openUrl } from "../controllers/getUrlsController.js";
import { addShortValid } from "../middleware/addShortValid.js";
import { authorization } from "../middleware/authorization.js";

const urlsRoutes = Router();

urlsRoutes.post('/urls/shorten',authorization, addShortValid,addShortUrl)
urlsRoutes.delete('/urls/:id',authorization, deleteShortUrl)

urlsRoutes.get('/urls/:id',listUrl)
urlsRoutes.get('/urls/open/:shortUrl',openUrl)


export default urlsRoutes;