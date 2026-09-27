import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Contextprovider } from './context/Mystore.jsx'
import Approutes from './routes/Approutes.jsx'

createRoot(document.getElementById('root')).render(
  <Contextprovider>
     <Approutes />
  </Contextprovider>
   
  
)
