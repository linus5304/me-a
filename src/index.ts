import express from 'express';
import figureRoutes from './routes/figures';
import unitRoutes from './routes/units';
import cors from 'cors';

async function main() {
    const app = express();
    const port = 3000;

    app.use(cors());
    app.get('/', (_, res) => {
        res.send('Hello NOD Readers!');
    });

    app.use('/figures', figureRoutes);
    app.use('/units', unitRoutes);

    app.listen(port, () => {
        return console.log(`Express server is listening at http://localhost:${port} 🚀`);
    });
}

main().catch((err) => { console.error(err); });