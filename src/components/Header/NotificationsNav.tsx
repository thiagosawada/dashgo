import { Icon, HStack } from '@chakra-ui/react';
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri';

export function NotificationsNav() {
  return (
    <HStack
      spacing="2rem"
      mx="2rem"
      pr="2rem"
      py="1rem"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiNotificationLine} fontSize={20} />
      <Icon as={RiUserAddLine} fontSize={20} />
    </HStack>
  );
}