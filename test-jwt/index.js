const jwt = require('jsonwebtoken');

const JWT_SECRET = 'tha721tc85'; 

// create basic token dengan proses syncronous
// const token = jwt.sign(
//     { data: { kelas: 'akademitailor' } },
//     JWT_SECRET,
//     { expiresIn: '5m' }); //set kadaluarsa
// console.log(token);

// cara kedua asyncronous  - create token
// jwt.sign({data: { kelas: 'akademitailor'}} , JWT_SECRET, { expiresIn: '1m' }, (err, token) => {
//     console.log(token);
// });

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiYWthZGVtaXRhaWxvciJ9LCJpYXQiOjE2MjUxOTU2NjcsImV4cCI6MTYyNTE5NTk2N30.1sDzmMXkVBmOmRiXn0AS1sLnY2tdp7x82-o8n_6KxA0' ;

// verif cara 1
// jwt.verify(token1, 'JWT_SECRET', (err, decoded) =>{
//     if(err) {
//         console.log(err.message);
//         return;
//     }
//     console.log(decoded);
// });

// cara 2 erif
try{
    const decoded =  jwt.verify(token1, JWT_SECRET);
    console.log(decoded);
} catch (error) {
    console.log(error.message);
}

// console.log('aaaa');
