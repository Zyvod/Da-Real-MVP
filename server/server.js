import express from 'express';
import pg from 'pg';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
const { Pool } = pg;
dotenv.config();

const APIPORT = 5432;

const app = express();

const pool = new Pool ({
  connectionString: process.env.DB_URL
})

app.use(express.static('public'));

app.use(cors());

app.use(morgan('dev'))

app.use(express.json());

app.get('/api/GPU', async (req,res) => {
  console.log('Maximum Graphics Incoming')
  try {
    const result = await grabGpuData()
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/CPU', async (req,res) => {
  console.log('Maximum Computations Incoming')
  try {
    const result = await grabCpuData()
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/CPUCOOLERS', async (req,res) => {
  console.log('Maximum Cooling Incoming')
  try {
    const result = await grabCoolerData()
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/MOTHERBOARDS', async (req,res) => {
  console.log('Moms With Boards Incoming')
  try {
    const result = await grabBoardData()
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/RAM', async (req,res) => {
  console.log('Truck Based Memory Incoming')
  try {
    const result = await grabRamData()
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/SSD', async (req,res) => {
  console.log('Memory In a Solid State Incoming')
  try {
    const result = await grabSsdData()
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/CASES', async (req,res) => {
  console.log('Maximum Style Incoming')
  try {
    const result = await grabCaseData()
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/POWER', async (req,res) => {
  console.log('UNLIMITED POWER!!! Incoming')
  try {
    const result = await grabPowerData()
    res.status(200).send(result)
  } catch (err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/ALL', async (req,res) => {
  console.log('You Would Want it All...')
  try {
    const cpu = await grabCpuData()
    const boards = await grabBoardData()
    const coolers = await grabCoolerData()
    const gpu = await grabGpuData()
    const ram = await grabRamData()
    const ssd = await grabSsdData()
    const cases = await grabCaseData()
    const power = await grabPowerData()
    res.status(200).send({
      CPU: cpu,
      Boards: boards,
      Coolers: coolers,
      GPU: gpu,
      RAM: ram,
      SSD: ssd,
      Cases: cases,
      Power: power})
  } catch(err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.get('/api/user-builds/:id', async (req,res) => {
  console.log('Fetching Builds')
  const userData = req.params.id
  try {
    const result = await pool.query(`SELECT * FROM build_lists WHERE id_user=$1;`,[userData])
    res.status(200).send(result.rows)
  } catch(err) {
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

app.post('/api/create-user', async (req,res) => {
  console.log('Creating User')
  const userData = req.body
  console.log(userData)
  try {
    const results = await pool.query(`INSERT INTO users (name_user,password_user) VALUES ($1,$2);` ,[userData.userName, userData.userPassword])
    res.status(200).send('User Created Successfully')
  } catch(err) {
  console.error(err)
  res.status(400).send('Bad Request')
  }
})

app.put('/api/create-list', async (req,res) => {
  console.log('Creating List')
  const userData = req.body
  console.log(userData)
  try {
    const result = await pool.query(`INSERT INTO build_lists (id_user, list_name,cpu,cpu_cooler,motherboard,ram,storage,video_card,case_id,power_supply) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10);`,[userData.userId,userData.buildName, userData.cpu, userData.cooler, userData.board, userData.ram, userData.ssd, userData.gpu, userData.buildCase, userData.power
    ])
    res.status(200).send('List Created Successfully')
  } catch(err) {
    console.error(err)
    res.status(400).send('Bad Request')
  }
})

app.delete('/api/delete-build', async (req,res) => {
  console.log('Deleting list')
  const userData = req.body
  console.log(userData)

  try{
    const result = await pool.query(`DELETE FROM build_lists WHERE id=$1 AND id_user=$2;`, [userData.listId,userData.id])
    res.status(200).send('List Deleted Successfully')
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

async function grabCpuData() {
  try {
    const result = await pool.query(`SELECT * FROM cpu;`)
    return result.rows
  } catch(err) {
    console.error('CPU Error:',err)
  }
}

async function grabBoardData() {
  try {
    const result = await pool.query(`SELECT * FROM motherboards;`)
    return result.rows
  } catch(err) {
    console.error('Motherboard Error:',err)
  }
}

async function grabCoolerData() {
  try {
    const result = await pool.query(`SELECT * FROM cpu_coolers;`)
    return result.rows
  } catch(err) {
    console.error('Cooling Error - Overheating:',err)
  }
}

async function grabGpuData() {
  try {
    const result = await pool.query(`SELECT * FROM video_cards;`)
    return result.rows
  } catch(err) {
    console.error('GPU Error:',err)
  }
}

async function grabRamData() {
  try {
    const result = await pool.query(`SELECT * FROM ram;`)
    return result.rows
  } catch(err) {
    console.error('RAM Error:',err)
  }
}

async function grabSsdData() {
  try {
    const result = await pool.query(`SELECT * FROM storage;`)
    return result.rows
  } catch(err) {
    console.error('Storage leak Error:',err)
  }
}

async function grabCaseData() {
  try {
    const result = await pool.query(`SELECT * FROM cases;`)
    return result.rows
  } catch(err) {
    console.error('Case Error:',err)
  }
}

async function grabPowerData() {
  try {
    const result = await pool.query(`SELECT * FROM power_supplies;`)
    return result.rows
  } catch(err) {
    console.error('Power Error:',err)
  }
}