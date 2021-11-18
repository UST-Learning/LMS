
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <Menu secondary pointing>
            <Image src={logo} width={60} />
            <Menu.Item style={{ fontSize: 16 }} /* as={Link} to="/" point to appropriate router links */>LMS</Menu.Item>
            <Menu.Item>Book</Menu.Item>

            <Menu.Item position="right">
                <Button /* as={Link} to="create/account" point to appropriate router links*/ primary basic icon>
                    <Icon name="add user"></Icon>
                    Create Account
                </Button></Menu.Item>
            <Menu.Item>
                <Button primary basic icon>
                    <Icon name="sign in"></Icon>
                    Sign In
                </Button>
            </Menu.Item>

        </Menu>
    );
}

export default Header;