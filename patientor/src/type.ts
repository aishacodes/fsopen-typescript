export enum gender {
  Male= 'male',
  Female = 'female'
}
export interface iDiagnoses {
  code: string,
  name:string,
  latin?:string
}

// export type gender = 'male' | 'female'

export interface iPatients{
  id: string,
  name: string,
  dateOfBirth: string,
  ssn: string,
  gender: gender,
  occupation: string

}
export type iPatienrWithoutSsn = Omit<iPatients, 'ssn'>
export type newEntry = Omit<iPatients, 'id'>