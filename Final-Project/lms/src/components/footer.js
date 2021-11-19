
import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import logo from '../logo.svg';

const Header = () => {
    return (
        <Menu secondary pointing>
            <Image src={logo} width={60} />
            <Menu.Item>LMS</Menu.Item>
            <Menu.Item position="right" /* as={Link} to="/" point to appropriate router links */>Library Management System, Copyright@2021.</Menu.Item>
        </Menu>
    );
}

export default Header;