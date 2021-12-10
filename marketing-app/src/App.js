import Login from './Components/Login';
import JobForm from './Components/JobForm';
import JobApplication from './Components/JobApplication';
import JobList from './Components/JobList'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'



function App() {
  return (
    <Router>
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/jobform" element={<JobForm />} />
       <Route path="/joblist" element={<JobList />} />
       <Route path="/jobapplication" element={<JobApplication />} />
     </Routes>
   </Router>
   
   
  );
}

export default App;
