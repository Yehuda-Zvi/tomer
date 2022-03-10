import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react"
import React from "react"
import { Icon } from "@chakra-ui/react"
import { FaUserAlt } from "react-icons/fa"

export default function MailInput({ mailRef }) {
  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type="email" placeholder="Email Address" ref={mailRef} required />

      <InputLeftElement pointerEvents="none" children={<Icon as={FaUserAlt} color="gray.300" />} />
    </InputGroup>
  )
}
