import { Text, Link, Icon, LinkProps as ChakraLinkProps } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface NavLinkProps extends ChakraLinkProps {
  icon: IconType; // ou ElementType
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="1rem" fontWeight="medium">{children}</Text>
    </Link>
  );
}