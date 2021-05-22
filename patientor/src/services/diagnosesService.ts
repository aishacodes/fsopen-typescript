import Diagnoses from '../../diagnoses.json'
import { iDiagnoses } from '../type'


const DiagnosesData : iDiagnoses[]= Diagnoses

const getDiagnoses=(): Array<iDiagnoses>=>{
  return DiagnosesData
}

export default {
  getDiagnoses
}