import { gender, newEntry } from "../type";

  const isString = (text: unknown): text is string => {
    return typeof text === "string" || text instanceof String;
  };
  const parseName = (name: unknown): string => {
    if (!name || !isString(name)) {
      throw new Error("Incorrect or missing name");
    }

    return name;
  };

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
      throw new Error('Incorrect or missing date: ' + date);
  }
  return date;
};


  const parseSsn = (ssn: unknown): string => {
    if (!ssn || !isString(ssn)) {
      throw new Error("Incorrect or missing ssn");
    }

    return ssn;
  };

  const isGender = (param: any): param is gender => {
  return Object.values(gender).includes(param);
};

const parseGender = (gender: unknown): gender => {
  if (!gender || !isGender(gender)) {
      throw new Error('Incorrect or missing gender: ' + gender);
  }
  return gender;
};

  const parseOccupation = (occupation: unknown): string => {
    if (!occupation|| !isString(occupation)) {
      throw new Error("Incorrect or missing name");
    }

    return occupation;
  };

  type Fields = {name: unknown, dateOfBirth:unknown, ssn:unknown, gender:unknown, occupation:unknown}

  export const toNewPatientEntry = ({name, dateOfBirth, ssn, gender, occupation}: Fields): newEntry => {

  const newpatient: newEntry={
    name:parseName(name),
    dateOfBirth:parseDate(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation)
  }

  return newpatient;
};
