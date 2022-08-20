import styled from "styled-components";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { FC } from "react";

const Link: FC<NextLinkProps & { className?: string, children?:string }> = ({
    className,
    children,
    href,
}) => <NextLink href={href}>
    <a className={className}>{children}</a>
    </NextLink>

export const StyledLink = styled(Link)`
    color: green;
    font-size: 4em;
    font-weight: 400;
    &:hover{
        color: red;
    }
`