import { Box, Flex, Text, Avatar } from "@chakra-ui/react"

export function Profile() {
  return (
    <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Geraldo Luiz</Text>
          <Text color="gray.300" fontSize="small">geraldobl58@gmail.com</Text>
        </Box>
        <Avatar size="md" name="Geraldo Luiz" src="https://github.com/geraldobl58.png" />
    </Flex>
  )
}