import { Flex, Text, Box, IconButton, Icon } from '@chakra-ui/react'
import { RiMenu4Line } from 'react-icons/ri'

import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";

export function Header() {

    const { onOpen } = useSidebarDrawer()
    return (
        <Flex
            bg="gray.900"
            direction="row"
            p="2"
            justify="space-between"
        >
            <Flex direction="row" align="center" justify="center">
                <IconButton
                    variant="unstyled"
                    fontSize="24"
                    aria-label="Open-navigation"
                    onClick={onOpen}
                    icon={<Icon
                        as={RiMenu4Line}
                    />
                    }
                />
                <Text>
                    Nome do usuario
                </Text>
                <Box w="3" h="3" ml="1" borderRadius="full" bg="green.500" />
            </Flex>
            <Flex>
                <Text color="red.700" fontWeight="bold" fontSize="30" >SOS</Text>
            </Flex>
        </Flex>
    )
}

