import NextLink from "next/link";

function Link({ children, href, ...props }) {
   return (
      <NextLink href={href} passHref>
         <p {...props}>{children}</p>
      </NextLink>
   )
}
export default Link;