#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
function add_teams_to_table() {
  tail -n +2 games.csv | cut -d ',' -f 3,4 | tr ',' '\n' | sort -u | sed 's/^[[:space:]]*//;s/[[:space:]]*$//' | while read -r team
  do
    $PSQL "INSERT INTO teams (name) VALUES ('$team') ON CONFLICT (name) DO NOTHING;"
  done
}

function fill_games_table() {
  tail -n +2 games.csv | while IFS=',' read -r year round winner opponent winner_goals opponent_goals; do
    winner_id=$($PSQL "SELECT team_id FROM teams WHERE name = '$winner';")
    opponent_id=$($PSQL "SELECT team_id FROM teams WHERE name = '$opponent';")

    $PSQL "INSERT INTO games (year, round, winner_id, opponent_id, winner_goals, opponent_goals) VALUES ('$year', '$round', $winner_id, $opponent_id, $winner_goals, $opponent_goals);"
  done
}

# Call the function to add teams to the table
add_teams_to_table
fill_games_table
