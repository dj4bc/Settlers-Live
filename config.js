// Site settings. Add each new tournament to `events` below.
window.CLUB_CONFIG = {
  siteName: 'Settlers Live',
  clubName: 'Barossa Settlers',
  clubShort: 'Settlers',          // how our teams are labelled, e.g. "Settlers 1 Green"
  orgName: 'Barossa Valley Basketball',
  seasonLabel: '2026/27 season',
  statsLabel: 'tournament',       // heading on team pages: "Player stats · tournament"
  apiBase: 'https://api-basketball.squadi.com',
  orgKey: 'c5f5cbe6-a575-4514-a3a6-f37128456e37', // BVABA on BasketballConnect (for "official fixture" links)
  // Every tournament the Settlers play in, one line each. The header switcher lists them.
  // To add one: open its BasketballConnect fixture page and copy competitionUniqueKey from the
  // link into `key`. `id` is the number in the "round/matches?competitionId=" request (or ask Claude).
  // `start` and `end` are the first and last day (Adelaide time). `teamIds` is optional: leave it
  // out and every team whose name matches clubPattern is picked up.
  // The site opens on: a live event, else one on today, else one starting within 7 days,
  // else the one that finished most recently.
  events: [
    {
      slug: 'murray-bridge-2026', name: 'Murray Bridge TFI Bullets Carnival', short: 'Murray Bridge Carnival',
      start: '2026-10-02', end: '2026-10-05',
      id: 2803, key: 'a0d1e374-4f1b-423c-b803-619b9f4fdc29'
    },
    {
      slug: 'port-augusta-2026', name: 'Port Augusta Junior Basketball Carnival 2026', short: 'Port Augusta Carnival',
      start: '2026-10-31', end: '2026-11-01',
      id: 3008, key: 'c5edf338-2b60-4b89-8acc-e0c2ab2b3b39'
    },
    {
      slug: 'barossa-2026', name: 'Barossa Valley Junior Basketball Tournament 2026', short: 'Barossa Valley Tournament',
      start: '2026-11-13', end: '2026-11-15',
      id: 3023, key: '01c8fecd-0b0d-4bc3-adf2-cedc6092b39a',
      teamIds: [
        164662, 164663, 164664, 164665, 164666, 164667, 164668, 164669, 164670,
        164671, 164672, 164673, 164674, 164675, 164676, 164677, 164678
      ]
    },
    {
      slug: 'adelaide-hills-2026', name: 'Adelaide Hills Tournament 2026', short: 'Adelaide Hills Tournament',
      start: '2026-12-11', end: '2026-12-13',
      id: 3016, key: 'c7d3157a-26af-46aa-9bc6-69902a7cbd61'
    }
  ],
  // New tournaments found by the club's server each week (any competition with our teams that
  // isn't listed above). Leave empty to use only the list above.
  eventsFeed: 'https://fouls.adamforb.es/events/settlers.json',
  // A regular expression that matches our team names, such as "Barossa U14B1 Green",
  // "Barossa Valley U12G2" or "U18B2 - Barossa Valley".
  clubPattern: '\\bBarossa\\b',
  // Team colour words kept in the short name ("Settlers 1 Green").
  colourWords: ['Green', 'Gold', 'White'],
  // Where the live foul tracker's data lives (the Linode scraper). Leave empty to hide the fouls card.
  foulsBase: 'https://fouls.adamforb.es',
  // Game alerts (web push) service on the Linode. Leave empty to hide the alerts switch.
  pushBase: 'https://fouls.adamforb.es/push',
  timeZone: 'Australia/Adelaide',
  // How often to refresh while any Settlers game is live (milliseconds).
  liveRefreshMs: 60000
};
