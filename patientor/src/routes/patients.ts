import express from 'express'
import {addPatient, getPatients} from './../services/patientService'
import {toNewPatientEntry} from './../utils'

const router = express.Router()

router.get('/', (_req, res)=>{
   res.json(getPatients())
})
router.post('/',(req, res)=>{

  // const {name, dateOfBirth, ssn, gender, occupation}= req.body
  const newPatientEntry= toNewPatientEntry(req.body)
  const result = addPatient(newPatientEntry)
  res.json(result)
})

export default router