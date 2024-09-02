import express from 'express';
import * as dotenv from 'dotenv';
import * as fal from "@fal-ai/serverless-client";

dotenv.config();

const router= express.Router();

fal.config({
    credentials: process.env.FAL_KEY
  });

router.route('/').get((req, res) => {
    res.status(200).json({ message: 'gemini is good to go!' });
});
router.route('').post(async (req, res) => {
    try {
        const  {prompt} = req.body;
        const result = await fal.subscribe("fal-ai/stable-diffusion-v3-medium", {
            input: {prompt},
            image_size: "square_hd",
            num_inference_steps: 28,
            guidance_scale: 5,
            num_images: 1,
            enable_safety_checker: true,
            logs: true,
            // onQueueUpdate: (update) => {
            //   if (update.status === "IN_PROGRESS") {
            //     update.logs.map((log) => log.message).forEach(console.log);
            //   }
            // },
          });
          const imageUrl = result.images[0].url;
        res.status(200).json({ photo:imageUrl});
    } catch (error) {
        res.status(500).send(error?.body?.detail  || 'Something went wrong');
    }

})

export default router;