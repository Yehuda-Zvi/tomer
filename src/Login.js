import { Flex, Heading, Box, Stack, Text, Button } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { FaUserCircle } from "react-icons/fa"
import PassInput from "./components/PassInput"
import MailInput from "./components/MailInput"
import { useRef, useState } from "react"
import axios from "axios"
import { Navigate, useNavigate } from "react-router-dom"

export default function Login({ setUser }) {
  const navigate = useNavigate()
  const formRef = useRef()
  const passRef = useRef()
  const mailRef = useRef()
  const [err, setErr] = useState(false)

  const submit = async (e) => {
    const form = formRef.current
    if (form.checkValidity()) {
      e.preventDefault()
    } else {
      return
    }
    setErr(false)

    const user = {}
    user.email = mailRef.current.value
    user.password = passRef.current.value

    const { data } = await axios.post("https://dev-api.wideview.io/auth/login", user)

    if (data === "Incorrect password") {
      setErr(true)
    } else {
      setUser(data.user.email)
      navigate("/success", { state: { name: "yuda" } })
    }
  }

  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      background="gray.100"
      direction="column">
      <Icon as={FaUserCircle} color="teal.400" w={16} h={16} bg="white" borderRadius="50%" />
      <Heading mb={4} color="teal.400" textAlign="center">
        Welcome
      </Heading>
      <Box boxShadow="md" p="4" rounded="md" bg="white">
        <form ref={formRef}>
          <Stack spacing={4}>
            <MailInput mailRef={mailRef} />
            <PassInput passRef={passRef} />
            <Text color="gray.500" textAlign="right">
              forgot password?
            </Text>
            {err && (
              <Text color="red.400" textAlign="center">
                Email or Password Are Incorrect
              </Text>
            )}
            <Button colorScheme="teal" type="submit" onClick={submit} pb={1}>
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  )
}
