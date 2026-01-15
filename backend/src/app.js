import express from 'express';

const app = express(); // Create an Express application instance
app.use(express.json()); // Middleware to parse JSON request bodies

// import routes
import userRoutes from './routes/user.route.js';
import postRoutes from './routes/post.route.js';

// routes declaration
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/posts', postRoutes);



export default app;