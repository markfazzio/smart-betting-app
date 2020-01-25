import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Label, Menu } from 'semantic-ui-react';

export const MainMenu = () => {  
    return (
        <Menu>
            <Menu.Item
                // active={activeItem === 'home'}
                as={Link}
                to='/'
            >
                Home
            </Menu.Item>
            <Menu.Item
                active
                as={Link}
                to='/open-tickets'
            >
                Open Tickets
                <Label color='teal'>3</Label>
            </Menu.Item>
            <Menu.Item
                // active={activeItem === 'matchups'}
                as={Link}
                to='/matchups'
            >
                Matchups
            </Menu.Item>
        </Menu>
    )
}