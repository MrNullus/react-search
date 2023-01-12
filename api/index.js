import express from 'express';
import cors from 'cors';

const express = express();
app.use(cors());

app.get("/api/", ( req, res ) => {
	res.json("Hellloo World Darknessssssss!!!");
});

app.listen(5000, () => console.log("API is working in port 5000!!!!!!!!!!!"));
