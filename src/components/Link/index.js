import NextLink from "next/link";

function Link({ children, href, colorItem, ...props }) {
   return (
      <NextLink href={href} passHref>
         <p {...props} style={{ backgroundColor: colorItem ?? `darkcyan`}}>{children}</p>
      </NextLink>
   )
}
export default Link;