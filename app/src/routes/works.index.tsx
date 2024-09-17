import { createFileRoute } from '@tanstack/react-router'
import { Work } from '../pages/Work'
import { MyWork } from '../pages/MyWork'

export const Route = createFileRoute('/works/')({
  component: () => <MyWork />
})