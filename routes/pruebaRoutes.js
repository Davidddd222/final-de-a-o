import express from 'express';

const pruebaRouter = express.Router();

pruebaRouter.get('/saludo', (solicitud, respuesta) => {
    respuesta.send('hola mundo');
});

pruebaRouter.post('/registro', (req, res) => {
    console.log(req.body);
    res.status(200).json({
        "mensaje": "regsitro exitoso",
        "datos": {
            "email": req.body.email,
            "password": req.body.password
        }
    });
});

export default pruebaRouter;