import styled from 'styled-components';
 
const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 46px 87px;
`;

const NavGroupContainer = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

const StyledImage = styled.img`
  margin-right: 18px;
`;

const SimpleLinkText = styled.span`
  font-weight: bold;
  color: ${span => span.theme.colors.secondary};

  &:hover {
    background: ${span => span.theme.colors.primaryGradient};
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
  }
`;

const JoinLinkDynamic = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${a => a.hiring ? a.theme.colors.secondary : a.theme.colors.disabled};
`;

const JoinLinkTextMain = styled.span`
  font-weight: bold;
  margin-bottom: 4px;
`;

const JoinLinkTextMinor = styled.span`
  font-size: 13.5px;
`;

const JoinLink = ({ hiring }) => <JoinLinkDynamic hiring={hiring} href="#">
    <JoinLinkTextMain>Join The Team</JoinLinkTextMain>
    <JoinLinkTextMinor>Application {hiring ? 'Open': 'Closed'}</JoinLinkTextMinor>
</JoinLinkDynamic>;

const LivePortalButton = styled.button`
  border: none;
  background: ${button => button.theme.colors.secondary};
  font-size: inherit;
  font-family: inherit;
  font-weight: bold;
  height: 41px;
  width: 134px;
  border-radius: 34px;
`;

const NavBar = ({ hiring }) => {
  return (
    <NavBarContainer>
      <NavGroupContainer>
        <StyledImage src="/nwPlus_Logo_2020.png" alt="nwPlus club logo in white against dark blue background"/>
        <a href="#"><SimpleLinkText>
          About Us
        </SimpleLinkText></a> 
        <a href="#"><SimpleLinkText>
          Hackathons
        </SimpleLinkText></a> 
        <a href="#"><SimpleLinkText>
          Resources
        </SimpleLinkText></a> 
        <a href="#"><SimpleLinkText>
          FAQ
        </SimpleLinkText></a> 
      </NavGroupContainer>
      <NavGroupContainer>
        <JoinLink hiring={hiring}/>
        <a href="#">
          <LivePortalButton>Live Portal</LivePortalButton>
        </a>
      </NavGroupContainer>
    </NavBarContainer>
  )
}

export default NavBar;
