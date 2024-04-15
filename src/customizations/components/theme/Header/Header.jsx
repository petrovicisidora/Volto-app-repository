//Header

import { Container, Segment } from 'semantic-ui-react';
import { Logo } from '@plone/volto/components';

const Header = () => {
  return (
    <Segment basic className="header-wrapper" role="header">
      <Container>
        <div className="header" data-testid="header-container">
          <div className="logo-nav-wrapper">
            <div className="logo" style={{ marginLeft: 'auto' }}>
              <Logo />
            </div>
          </div>
        </div>
      </Container>
    </Segment>
  );
};

export default Header;
