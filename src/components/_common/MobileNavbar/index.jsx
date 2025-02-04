import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { navLinks } from '../Navbar';
import { NavLink } from 'react-router';

export default function MobileNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MenuOutlinedIcon color='var(--primary-color)' />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {navLinks.map(({ id, label, to }) => {
                    return (
                        <NavLink key={id} to={to} className={({ isPending, isActive }) => isPending ? "pending..." : isActive ? "active" : ""}><MenuItem onClick={handleClose}>{label}</MenuItem></NavLink>
                    )
                })}

            </Menu>
        </div>
    );
}
