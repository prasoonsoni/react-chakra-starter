import { Button, useColorMode, Tooltip } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import React from 'react'

const ToggleTheme = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Tooltip hasArrow placement='right' label={colorMode==="light"?"Toggle Dark Mode":"Toggle Light Mode"}>
            <Button onClick={toggleColorMode}>{colorMode === "light" ? <MoonIcon /> : <SunIcon />}</Button>
        </Tooltip>
    )
}

export default ToggleTheme