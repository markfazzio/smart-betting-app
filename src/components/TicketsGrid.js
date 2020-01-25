import React from 'react'
import styled from 'styled-components';
import { Button, Card, Progress } from 'semantic-ui-react';
import { PicksList } from '../components/PicksList';

const StyledCardHeader = styled(Card.Header)`
    &&& {
        margin-bottom: 10px;
    }
`;

const StyledProgressBar = styled(Progress)`
    &&& {
        margin-bottom: 50px;
    }
`;

const ticketOneDummyData = [
  {
    favorite: 'NJ Devils',
    title: 'NJ Devils @ BUF Sabres',
    line: '+100'
  },
  {
    favorite: 'SF 49ers',
    title: 'DAL Cowboys @ SF 49ers',
    line: '-210'
  },
  {
    favorite: 'CHI Bulls',
    title: 'CHI Bulls @ POR Trail Blazers',
    line: '-240'
  },
  {
    favorite: 'ATL Braves',
    title: 'ATL Braves @ NY Mets',
    line: '-210'
  },
  {
    favorite: 'PHL 76ers',
    title: 'PHL 76ers @ MIA Heat',
    line: '-150'
  }
];

export const TicketsGrid = () => (
  <Card.Group itemsPerRow={3}>
    <Card>
      <Card.Content>
        <StyledCardHeader>5-Team Parlay</StyledCardHeader>
        <Card.Meta>
            <StyledProgressBar size='tiny' value='3' color='yellow' label="3/5" total='5' />
        </Card.Meta>
        <Card.Description>
          <PicksList data={ticketOneDummyData} />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button primary>
            Add Picks
          </Button>
          <Button positive>
            Cash Out
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <StyledCardHeader>8-Team Parlay</StyledCardHeader>
        <Card.Meta>
            <StyledProgressBar color='red' size='tiny' value='1' label="1/8" total='8' />
        </Card.Meta>
        <Card.Description>
          <PicksList />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button primary>
            Add Picks
          </Button>
          <Button positive>
            Cash Out
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <StyledCardHeader>6-Team Parlay</StyledCardHeader>
        <Card.Meta>
            <StyledProgressBar color='red' size='tiny' value='2' label="2/6" total='6' />
        </Card.Meta>
        <Card.Description>
          <PicksList />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button primary>
            Add Picks
          </Button>
          <Button positive>
            Cash Out
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
);