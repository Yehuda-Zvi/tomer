import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import React from "react"
import { Icon } from "@chakra-ui/react"
import { FaLock } from "react-icons/fa"

export default function PassInput({ passRef }) {
  const [show, setShow] = React.useState(false)

  return (
    <InputGroup size="md">
      <Input
        pr="4.5rem"
        type={show ? "text" : "password"}
        placeholder="Password"
        ref={passRef}
        required
        minLength="4"
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </Button>
      </InputRightElement>
      <InputLeftElement pointerEvents="none" children={<Icon as={FaLock} color="gray.300" />} />
    </InputGroup>
  )
}
