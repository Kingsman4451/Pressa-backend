import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import handleError from './middlewares/handleError.js';
import modules from './modules/index.js'
import path from 'path';


const app = express();
app.use(cors())
app.use(express.static(path.join(process.cwd(), 'uploads')));
app.use(express.json())
app.use(modules)


app.use(handleError)
app.listen(PORT, ()=>console.log('listening on port http://localhost' + PORT));