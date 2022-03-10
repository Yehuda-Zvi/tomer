import { Flex, Heading } from "@chakra-ui/react"
import { Navigate } from "react-router-dom"

export default function Success({ user }) {
  if (!user) {
    return <Navigate to="/" />
  }

  return (
    <Flex height="100vh" alignItems="center">
      <Heading color="green.400" textAlign="center">
        {user} You've made it!
      </Heading>
    </Flex>
  )
}
