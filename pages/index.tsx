import { Button, FacebookButton } from "../components/Button.styled";
import { Container } from "../components/Container.styled";
import { StyledLink } from "../components/Link.styled";


export default function Home() {
  return(
    <div>
      <Container>
        <h1>My App</h1>
      </Container>

      <Button role="botton" size="2em">Styled Button</Button>
      <Button role="botton" variant={"secondary"}>Styled Button</Button>
      <Button role="botton" variant={"secondary"}>Styled Button</Button>
      <Button role="botton" variant={"accent"}>Styled Button</Button>
      <FacebookButton as="a" href="#">Log in with Facebook</FacebookButton>
      <StyledLink href="/about" className="btn">Next Link</StyledLink>
    </div>
  )
}