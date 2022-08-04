import { Router } from "express";
import { addShortUrl, deleteShortUrl } from "../controllers/addDeleteUrlController.js";
import { listUrl, openUrl } from "../controllers/getUrlsController.js";
import { addShortValid } from "../middleware/addShortValid.js";

const urlsRoutes = Router();

urlsRoutes.post('/urls/shorten', addShortValid,addShortUrl)
urlsRoutes.delete('/urls/:id', deleteShortUrl)

urlsRoutes.get('/urls/:id',listUrl)
urlsRoutes.get('/urls/open/:shortUrl',openUrl)


export default urlsRoutes;