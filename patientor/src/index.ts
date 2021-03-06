import express from 'express';
const app = express();
const cors = require('cors')
import DiagnosesRouter from './routes/daignoses'
import PatientRouter from './routes/patients'

app.use(express.json());

app.use(cors())
const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});
app.use('/api/diagnoses', DiagnosesRouter)
app.use('/api/patients', PatientRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
