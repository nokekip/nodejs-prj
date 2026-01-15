import express from 'express';

const app = express(); // Create an Express application instance
app.use(express.json()); // Middleware to parse JSON request bodies

// import routes
import userRoutes from './routes/user.route.js';

// routes declaration
app.use('/api/v1/users', userRoutes);



export default app;