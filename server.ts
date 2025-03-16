import express from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import userRouter from './routers/userRouter';
import expenseRouter from './routers/expenseRouter';
import categoryRouter from './routers/categoryRouter';


dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/expenses", expenseRouter);

sequelize.sync().then(() => console.log("Database connected"));

app.listen(port, () => console.log(`Server is running on port ${port}`));