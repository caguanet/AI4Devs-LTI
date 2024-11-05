import express from 'express';
import { json } from 'body-parser';
import userRoutes from './api/routes/UserRoutes';

const app = express();
app.use(json());

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});