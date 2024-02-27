// import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import router from './Config/routes';


function App() {

 
  return (
   <>
      <RouterProvider router={router} />
   </>
  );
}

export default App;
