import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Container, Label, Menu, Icon, Dropdown } from 'semantic-ui-react';
import { MenuProps } from '../Menu';

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch }: HeaderMenuProps) =>
  <Container>
    <Menu size="large" secondary inverted={inverted}>
      <Dropdown icon="sidebar" className="mobile only right item" >
        <Dropdown.Menu className="left">
          {items.map((item) => {
            const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
            return (
              <Dropdown.Item
                as={Link}
                text={item.name}
                to={item.path}
                key={item.path}
                active={active} />
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <Menu.Item className="mobile hidden"><Icon name="code" size="big" /></Menu.Item>
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
    </Menu>
  </Container>;

export default connect()(HeaderMenu);
