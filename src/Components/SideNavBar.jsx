import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import {Link} from "react-router-dom"
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
    const [state, setState] = React.useState({

        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box

            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Main', 'Companies', 'Yarn', 'Count Checker', 'Contact Us'].map((text, index) => (
                    <ListItem button key={text}>
                        {/* <ListItemIcon> */}
                        {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                        {/* </ListItemIcon> */}
                        {/* <ListItemText primary={text} /> */}
                        <Link to="#" >{text}</Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (

        <div className="side-bar" style={{ backgroundColor: "rgb(54, 162, 235)", textAlign:"right" }} >
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button style={{ color: "white", border: "none" }} onClick={toggleDrawer(anchor, true)}><i class="fas fa-bars"></i></Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}