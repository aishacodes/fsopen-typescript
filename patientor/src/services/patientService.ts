import patientData from './../../patients.json'
import {iPatienrWithoutSsn, iPatients, newEntry} from './../type'
import {v1 as uuid} from 'uuid'
 


const patients : iPatients[]= patientData as iPatients[]

export const getPatients =() : iPatienrWithoutSsn[]=>{
  return patients.map(({id, name, dateOfBirth, gender,occupation})=>({id, name, dateOfBirth, gender,occupation}
  ))
}

export const addPatient = (entry: newEntry): iPatients=>{

  const newPatientEntry = {
    id:uuid(),
    ...entry
  }
  patients.push(newPatientEntry)
  return newPatientEntry
}
