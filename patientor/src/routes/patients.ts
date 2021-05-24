import express from 'express'
import {addPatient, getPatients} from './../services/patientService'
const router = express.Router()

router.get('/', (_req, res)=>{
   res.json(getPatients())
})
router.post('/',(req, res)=>{
  const {name, dateOfBirth, ssn, gender, occupation}= req.body
  const result = addPatient({name, dateOfBirth,ssn, gender,occupation})
  res.json(result)
})

export default router