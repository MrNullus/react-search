import express from 'express';
import cors from 'cors';
import { Users } from './users.js';

const app = express();
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

app.listen(3001, () => { 
	console.log("API is working in port 3001!!!!!!!!!!!");
});

 //               ___...
 //         .--.-~      \
 //       .' ,~          \-.
 //    ,-~  /            |  \
 //   .-~  ,,'               \
 //  /     |                 `\
 // |     ~|,            .    |\
 // |     ,-')            |  |' '
 // /\_   \  [           ,'  ;  |
 // |     'T\\  ,~-.  .-y' ,'   |
 //  \ \ .\;. `. .-.,__.' .'   |'
 //   Y-~\"|.|  ~. d",-.       ;
 //   `.  |Y#P   .Y#|;{|    _./'
 //     ~-|`~<    ~ \|;'   ~ ;
 //      \`. ==.    ,       ,'
 //       \-. ~   .- `(  ,'.'
 //        ~~-..-X     ~~~~
 //           `~--\
 //                `   "Futaba-chan"
 //                      (from "Futaba-kun Change")
 //                        --- Dov Sherman
