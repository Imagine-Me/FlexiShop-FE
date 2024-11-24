import React from 'react'
import { Outlet } from 'react-router-dom'
import { HomeContextProvider } from 'src/context/home/home.context'
import { PageWrapper } from '../../Landing/PageWrapper'

const HomePage = () => {
  return (
    <PageWrapper>
      <Outlet />
    </PageWrapper>
  )
}
const HomePageWrapper: React.FC = () => {
  return (
    <HomeContextProvider>
      <HomePage />
    </HomeContextProvider>
  )
}

export default HomePageWrapper
