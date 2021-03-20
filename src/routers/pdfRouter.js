import express from 'express';
import generatePdf from '../pdf/generatePdf.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const pdf = await generatePdf(req.query);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (e) {
        console.log(e);
        res.send(e)
    }
});

router.get('/l/:port', async (req, res) => {
    try {
        const url = `http://localhost:${req.params.port}`
        const pdf = await generatePdf(req.query, url);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (e) {
        console.log(e);
        res.send(e)
    }
});

router.get('/l/s/:port', async (req, res) => {
    try {
        const url = `https://localhost:${req.params.port}`
        const pdf = await generatePdf(req.query, url);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (e) {
        console.log(e);
        res.send(e)
    }
});

router.get('/:port', async (req, res) => {
    try {
        const url = `http://192.168.1.1:${req.params.port}`
        const pdf = await generatePdf(req.query, url);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (e) {
        console.log(e);
        res.send(e)
    }
});

router.get('/s/:port', async (req, res) => {
    try {
        const url = `https://192.168.1.1:${req.params.port}`
        const pdf = await generatePdf(req.query, url);
        res.contentType('application/pdf');
        res.send(pdf);
    } catch (e) {
        console.log(e);
        res.send(e)
    }
});

export default router;
