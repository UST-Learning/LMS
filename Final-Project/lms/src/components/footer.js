
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <Menu secondary pointing>
            <Image src={logo} width={60} />
            <Menu.Item /* as={Link} to="/" point to appropriate router links */>LMS</Menu.Item>
            <Menu.Item>Copyright</Menu.Item>

            <Menu.Item position="right">
                <Button /* as={Link} to="create/account" point to appropriate router links*/ primary basic icon>
                    <Icon name="add user"></Icon>
                    About Us
                </Button></Menu.Item>
            <Menu.Item>
                <Button primary basic icon>
                    <Icon name="sign in"></Icon>
                    Contact Us
                </Button>
            </Menu.Item>

        </Menu>
    );
}

export default Header;