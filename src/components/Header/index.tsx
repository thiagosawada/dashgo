import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';

import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';
import { useSidebarDrawer } from '../../contexts/SidebarDrawerContext';
import { RiMenuLine } from 'react-icons/ri';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="5rem"
      mx="auto"
      mt="1rem"
      px="1.5rem"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation" // Acessibilidade
          icon={<Icon as={RiMenuLine} />}
          fontSize={24}
          variant="unstyled"
          onClick={onOpen}
          mr="0.5rem"
        />
      ) }

      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
