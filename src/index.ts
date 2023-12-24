import { PrismaClient } from "@prisma/client";
import express from "express";
import { resolve } from 'node:path'


const prisma= new PrismaClient();

const app=express();

const port = process.env.PORT || 5432 ;
app.use(express.json());

app.get('/SubirArchivo', (req, res) => {
  res.send(resolve('../public/SubirArchivo.html'))
})



app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });