import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads/icons', express.static(path.resolve(__dirname, '..', 'uploads', 'icons')));
app.use('/uploads/images_points', express.static(path.resolve(__dirname, '..', 'uploads', 'images_points')));

app.use(errors());

app.listen(3333);