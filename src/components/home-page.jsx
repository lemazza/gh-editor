import React, { useState, useEffect } from 'react';

export default function HomePage(props) {
  const [waitingForPromise, setWaitingForPromise] = useState(false);
  const [gamesWithoutLocation, setGamesWithoutLocation] = useState(null);
  const [gamesNotInBggCollection, setGamesNotInBggCollection] = useState(null);
  const [duplicateBggEntries, setDuplicateBggEntries] = useState(null);
  const [qcCheckedGames, setQCCheckedGames] = useState([]);
  const [clickLog, setClickLog] = useState([]);
  const [officeRecs, setOfficeRecs] = useState([]);

  const [fakething, setFakeThing] = useState(2);

  useEffect(() => {
    //fetch bggEndpoint
    // ghCollectionIds, if they exist in bggCollection, cool, else add to orphanedList
    // setOrphanedList
  });

  return (
    <div>
      <h3>Collection Overview</h3>
      <p>
        alert descrepencies in collection (extra games, duplicates in bgg), also games without maps, report recent qc
        activity, perhaps click log chart, change in office game recs
      </p>

      <p># games without location</p>
      <p># extra games to delete</p>
      <p>duplicate listings in bgg</p>
      <p>list of this week's qc activity</p>
      <p>click log chart for the week</p>
      <p>office game recs in/out</p>
    </div>
  );
}
