import express from 'express';
import * as dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";


import Post from '../mongodb/models/post.js'

dotenv.config();

const router= express.Router();

const genAI = new GoogleGenerativeAI(process.env.GEMINIAI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'gemini is good to go!' });
});

router.route('/').post(async (req, res) => {
    try {
        const  {prompt} = req.body;
        const aiResponse = await model.generateContent(prompt)
        console.log(aiResponse)
        // const image = aiResponse.data[0].b64_json
        res.status(200).json({ photo:'cool'});
    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }

})

export default router;