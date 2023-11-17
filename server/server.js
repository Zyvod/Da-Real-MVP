import express from 'express';
import pg from 'pg';
import cors from 'cors';
import morgan from 'morgan';
const { Pool } = pg;

const APIPORT = 3000;

const app = express();

const pool = new Pool ({
  connectionString: process.env.URL
})

app.use(express.static('public'));

app.use(cors());

app.use(morgan('dev'))

app.use(express.json());

app.get('/api/GPU', async (req,res) => {
  console.log('Maximum Graphics Incoming')
  try {
    const result = await pool.query(`SELECT * FROM video_cards;`)
    res.status(200).send(result.rows)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/CPU', async (req,res) => {
  console.log('Maximum Computations Incoming')
  try {
    const result = await pool.query(`SELECT * FROM cpu;`)
    res.status(200).send(result.rows)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/CPUCOOLERS', async (req,res) => {
  console.log('Maximum Cooling Incoming')
  try {
    const result = await pool.query(`SELECT * FROM cpu_coolers;`)
    res.status(200).send(result.rows)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/MOTHERBOARDS', async (req,res) => {
  console.log('Moms With Boards Incoming')
  try {
    const result = await pool.query(`SELECT * FROM motherboards;`)
    res.status(200).send(result.rows)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/RAM', async (req,res) => {
  console.log('Truck Based Memory Incoming')
  try {
    const result = await pool.query(`SELECT * FROM ram;`)
    res.status(200).send(result.rows)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/SSD', async (req,res) => {
  console.log('Memory In a Solid State Incoming')
  try {
    const result = await pool.query(`SELECT * FROM storage;`)
    res.status(200).send(result.rows)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/CASES', async (req,res) => {
  console.log('Maximum Style Incoming')
  try {
    const result = await pool.query(`SELECT * FROM cases;`)
    res.status(200).send(result.rows)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/POWER', async (req,res) => {
  console.log('UNLIMITED POWER!!! Incoming')
  try {
    const result = await pool.query(`SELECT * FROM power_supplies;`)
    res.status(200).send(result.rows)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.post('/api/sign-in', async (req,res) => {
  console.log('Users Incoming')
  const userData = req.body
  console.log(userData)
  try {
    const results = await pool.query(`SELECT id FROM users WHERE name_user=$1 AND password_user=$2`,[userData.userName, userData.userPassword])
    res.status(200).json(results.rows)
    console.log('id incoming')
  } catch(err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.use((req,res,next) => {
  next({message: 'The path you are looking for does not exist', status:400})
})

app.use((err,req,res,next) => {
  console.log('Unknown Route Hit')
  res.status(err.status).json({error:err})
})

app.listen(APIPORT, (req,res) => {
  console.log('Server Is Listening On Port 3000')
})