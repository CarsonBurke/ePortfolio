import { createFileRoute } from '@tanstack/react-router'
import { Work } from '../pages/Work'

export const Route = createFileRoute('/works/$workId')({
  loader: ({params}) => {

    console.log("params", params)

    return params.workId
  },
  component: () => <Work />
})