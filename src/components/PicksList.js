import React from 'react';
import styled from 'styled-components';
import { Icon, List } from 'semantic-ui-react';

const StyledListItem = styled(List.Item)`
    &&& {
        padding: 10px;
    }
`;

export const PicksList = (props) => {
    const {
        data
    } = props;

    const renderList = () => {
        if (data && data.length) {
            return data.map(item => {
                return (
                <StyledListItem>
                    <Icon name='arrow alternate circle up outline' />
                    <List.Content>
                        <List.Header>
                            {item.title}
                        </List.Header>
                        <List.Description>
                            {item.favorite} {item.line}
                        </List.Description>
                    </List.Content>
                </StyledListItem>
                );
            });
        } else {
            return <p>No picks have been added to this ticket.</p>
        }
    };

    return (
        <List divided>
            {renderList()}
        </List>
    );
};
