import patientData from './../../patients.json'
import {iPatienrWithoutSsn, iPatients} from './../type'

const patients : iPatients[]= patientData as iPatients[]

export const getPatients =() : iPatienrWithoutSsn[]=>{
  return patients.map(({id, name, dateOfBirth, gender,occupation})=>({id, name, dateOfBirth, gender,occupation}
  ))
}
