import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import JobList from './components/JobList'
import Search from './components/Search'
import Notification from './components/Notification'
import JobDetail from './components/JobDetail'
import LoadMore from './components/LoadMore'
import Loader from './components/Loader'
import LoadingContext from './contexts/loading'

const App = () => {

  const loading = useSelector(state => state.loading)

  const value = {
    show: loading
  }


  return (
    <div className='container'>
      
      <Switch>
        <Route path='/details/:id'>
          <JobDetail />
        </Route>
        <Route path='/'>
          <>
            <Header />
            <Search />
            <Notification />
            <LoadingContext.Provider value={value}>
              <Loader>Loading ...</Loader>
            </LoadingContext.Provider>
            {/* <Loader show={loading}>Loading ...</Loader> */}
            <JobList />
            <LoadMore />
          </>
        </Route>
      </Switch>
    </div>
  )
}

export default App;
