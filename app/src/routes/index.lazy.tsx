import { createLazyFileRoute } from '@tanstack/react-router'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <>
      <Home />
    </>
  )
}
