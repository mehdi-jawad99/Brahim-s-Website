import {
  Container,
  Section,
  Image,
  Name,
  Title,
  Bio,
  Button,
  Navbar,
  Options,
} from "./style";

function Profile({ profile }) {
  return (
    <>
      <Container>
        <Section one>
          <Image>
            <img src="/images/one.JPG" alt="mehdi" />
          </Image>
        </Section>
        <Section>
          <Name>{profile.name}</Name>
          <Title>{profile.title}</Title>
          <Bio>
            {profile.bio}
            <span>INNOVEOS</span>
          </Bio>
          <Button>download</Button>
        </Section>
      </Container>
      <Navbar>
        <Options>Resume</Options>
        <Options>Portfolio</Options>
        <Options>Open Source Projects</Options>
        <Options>Blog</Options>
        <Options>Hire me</Options>
      </Navbar>
    </>
  );
}

export default Profile;
