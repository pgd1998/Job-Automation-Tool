import express from 'express';
import router from './routes/jobRoutes';
import connectDB from './config/dbStarter';

connectDB();
const app = express();
app.use(express.json())
app.use('/api/jobs', router);
const port = 3000;



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});