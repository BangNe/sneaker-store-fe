import { Fragment } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

import DefaultLayout from './Layout/DefaultLayout'
import UserLayout from './Layout/UserLayout'
import AdminLayout from './Layout/AdminLayout'
import {publicRoutes} from './Routes'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRoutes.map((route,index) => {
            let Layout = DefaultLayout
            let Page = route.component

            switch (route.layout) {
              case null:
                Layout = Fragment
                break
              case 'user':
                Layout = UserLayout
                break
              case 'admin':
                Layout = AdminLayout
                break
              default:
                break
            }

            // if(route.layout === null) {
            //   Layout = Fragment
            // }else {

            // }
            return <Route key={index} path= {route.path} element={<Layout><Page/></Layout>}/>
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
