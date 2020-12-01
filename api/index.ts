import { express } from 'express';
import { request } from 'request';
const app = express();

app.get('/', express.static("../src/pages/"))
app.get('/api', (req: any, res: any) => {
    res.json({
        ok: true
    })
})

app.use((err: any, req: any, res: any) => {
    if(err) {
        res.redirect(`https://dothq.co${req.url}`)
    }
});

app.listen(3000)