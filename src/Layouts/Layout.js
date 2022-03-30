import React from 'react'
import Navigations from './Navigation'
import MainContent from './MainContent'

const DefaultLayout = (props) => {
  return (
    <>
      <Navigations />
      <MainContent>
        {props.children}
      </MainContent>
    </>
  )
}

export default DefaultLayout