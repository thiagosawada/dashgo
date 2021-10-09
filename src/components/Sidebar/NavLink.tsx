import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import Link from "next/link";

interface NavLinkProps extends ChakraLinkProps {
  icon: IconType; // ou ElementType
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="1rem" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </Link>
  );
}