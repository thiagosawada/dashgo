import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: IconType; // ou ElementType
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="1rem" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}