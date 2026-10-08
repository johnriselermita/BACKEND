import express from 'express';
import bookRoutes from './routes/bookRoutes.js';
import studentRoutes from './routes/studentRoutes.js';


const app = express();

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

try {
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`listening on port ${PORT}`);
    });

} catch (e) {
    console.log(e);
}