import express from 'express';
import cors from 'cors';

import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';
import userRoutes from './routes/userRoutes.js';


let corsOptions = {
    origin: 'http://localhost:5173'
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use((error, req, res, next) => {
    if (error instanceof SyntaxError && error.status === 400 && 'body' in error) {
        return res.status(400).json({
            error: 'Invalid JSON request body'
        });
    }

    next(error);
});

app.use('/student', studentRoutes);
app.use('/book', bookRoutes);
app.use('/user', userRoutes);

try {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });

} catch (e) {
    console.log(e);
}