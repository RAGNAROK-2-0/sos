
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Stack
} from "@chakra-ui/react"
import { FiActivity } from "react-icons/fi";
import { NavSection } from './NavSection'

import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext'





export function Sidebar() {
    const { isOpen, onClose } = useSidebarDrawer();

    return (
        <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
            <DrawerOverlay>
                <DrawerContent bg="gray.800">
                    <DrawerCloseButton mt="2" />
                    <DrawerHeader>
                        Menu
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack spacing="12" align="flex-start">
                            <NavSection href="/relatorios" icon={FiActivity} fontSize="20" >
                                manutenção
                            </NavSection>

                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}