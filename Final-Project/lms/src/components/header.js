
import { Link } from "react-router-dom";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import logo from '../logo.svg';

const Header = () => {
    return (

        <Menu secondary>

            <Image src={logo} width={60} />
            <Menu.Item /* as={Link} to="/" point to appropriate router links */>LMS</Menu.Item>
            <Menu.Item primary basic icon><Icon name=""></Icon>Add Book</Menu.Item>
            <Menu.Item>Edit Book</Menu.Item>
            <Menu.Item>Delete Book</Menu.Item>
            <Menu.Item>Search Book</Menu.Item>
            <Menu.Item>Book Transactions</Menu.Item>

            <Menu.Item>List User</Menu.Item>
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