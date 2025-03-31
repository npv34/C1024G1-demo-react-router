import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import GroupIcon from '@mui/icons-material/Group';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Link } from 'react-router';
import "./SideBar.css";


export default function SideBar() {
    const [open, setOpen] = React.useState(true);

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader sx={{ backgroundColor: 'green', color: 'white'}} component="div" id="nested-list-subheader">
                    Manager
                </ListSubheader>
            }
        >
            <Link to={"/admin/dashboard"}>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
            </ListItemButton>
            </Link>
            <Link to={"/admin/users"}>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText primary="User Manager" />
                </ListItemButton>
            </Link>
            <ListItemButton
                selected={selectedIndex === 2}
                onClick={(event) => handleListItemClick(event, 2)}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText  primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}
