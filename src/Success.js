import { Flex, Heading } from "@chakra-ui/react"
import { Navigate } from "react-router-dom"

export default function Success({ user }) {
  console.log("user: ", user)
  if (!user) {
    return <Navigate to="/" />
  }

  return (
    <Flex height="100vh" justifyContent="center" alignItems="center" direction="column">
      <Heading color="green.400">{user} You've made it!</Heading>
    </Flex>
  )
}
