import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import DefaultLayout from './Layout/DefaultLayout'
import {publicRoutes} from './Routes'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route,index) => {
            let Page = route.component
            return <Route key={index} path= {route.path} element={<DefaultLayout><Page/></DefaultLayout>}/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
