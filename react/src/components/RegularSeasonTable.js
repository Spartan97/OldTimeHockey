import _ from 'lodash';
import React from 'react';
import { Container, Segment, Table, Loader } from 'semantic-ui-react';

const RegularSeasonTable = ({ column, data, direction, handleSort }) => {
  handleSort('pointsFor');

  return (
    <Container>
      <Segment basic>
        {!data ? (
          <Loader active size="massive" style={{ marginTop: '150px' }} />
        ) : (
          <Table definition sortable celled selectable fixed compact>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={1} />
                <Table.HeaderCell
                  width={3}
                  textAlign="center"
                  sorted={column === 'leaguename' ? direction : null}
                  onClick={handleSort('leaguename')}
                >
                  League
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={6}
                  textAlign="center"
                  sorted={column === 'teamname' ? direction : null}
                  onClick={handleSort('teamname')}
                >
                  Team
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={3}
                  textAlign="center"
                  sorted={column === 'FFname' ? direction : null}
                  onClick={handleSort('FFname')}
                >
                  User
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={2}
                  textAlign="center"
                  sorted={column === 'Wins' ? direction : null}
                  onClick={handleSort('Wins')}
                >
                  Wins
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={2}
                  textAlign="center"
                  sorted={column === 'Losses' ? direction : null}
                  onClick={handleSort('Losses')}
                >
                  Losses
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={2}
                  textAlign="center"
                  sorted={column === 'pointsFor' ? direction : null}
                  onClick={handleSort('pointsFor')}
                >
                  PF
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={2}
                  textAlign="center"
                  sorted={column === 'pointsAgainst' ? direction : null}
                  onClick={handleSort('pointsAgainst')}
                >
                  PA
                </Table.HeaderCell>
                <Table.HeaderCell
                  width={2}
                  textAlign="center"
                  sorted={column === 'coachRating' ? direction : null}
                  onClick={handleSort('coachRating')}
                >
                  CR%
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {_.map(
                data,
                (
                  {
                    leagueID,
                    leaguename,
                    teamID,
                    teamname,
                    FFname,
                    Wins,
                    Losses,
                    pointsFor,
                    pointsAgainst,
                    coachRating,
                  },
                  index,
                ) => (
                  <Table.Row key={teamID}>
                    <Table.Cell textAlign="center">{index + 1}</Table.Cell>
                    <Table.Cell textAlign="center">
                      <a
                        href={`https://www.fleaflicker.com/nhl/leagues/${leagueID}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {leaguename}
                      </a>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <a
                        href={`https://www.fleaflicker.com/nhl/leagues/${leagueID}/teams/${teamID}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {teamname}
                      </a>
                    </Table.Cell>
                    <Table.Cell textAlign="center">{FFname}</Table.Cell>
                    <Table.Cell textAlign="center">{Wins}</Table.Cell>
                    <Table.Cell textAlign="center">{Losses}</Table.Cell>
                    <Table.Cell textAlign="center">{pointsFor}</Table.Cell>
                    <Table.Cell textAlign="center">{pointsAgainst}</Table.Cell>
                    <Table.Cell textAlign="center">{coachRating}%</Table.Cell>
                  </Table.Row>
                ),
              )}
            </Table.Body>
          </Table>
        )}
      </Segment>
    </Container>
  );
};

export default RegularSeasonTable;