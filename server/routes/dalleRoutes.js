import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

import Post from '../mongodb/models/post.js'

dotenv.config();

const router= express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'DALL-E is good to go!' });
});

router.route('/').post(async (req, res) => {
    try {
        const  {prompt} = req.body;
        const aiResponse = await openai.createImage ({
            prompt,
            n: 1,
            size: '1024×1024',
            response_format:'b64_json'
        })

        const image= aiResponse.data.data[0].b64_json;
        res.status(200).json({ photo:image });
    } catch (error) {
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }

})

export default router;