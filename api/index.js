import express from 'express';
import cors from 'cors';
import { Users } from './users';

const express = express();
app.use(cors());

app.get("/api/users", ( req, res ) => {
	// res.json("Hellloo World Darknessssssss!!!");

	const { q } = req.query;
	const keys = ["first_name", "last_name", "email"];

	const search = ( data ) => {
		return data.filter(( item ) => 
			keys.some(( key ) => item[key].includes(q))
		);
	};

	res.json(search(Users).splice(0, 10));
});

app.listen(5000, () => console.log("API is working in port 5000!!!!!!!!!!!"));
