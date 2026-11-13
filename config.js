// Site settings. Update these when a new tournament or season starts.
// To find the values: open the competition's BasketballConnect fixture page, open the
// browser's developer tools (Network tab), and look for the
// "round/matches?competitionId=" request.
window.CLUB_CONFIG = {
  siteName: 'Settlers Live',
  clubName: 'Barossa Settlers',
  clubShort: 'Settlers',          // how our teams are labelled, e.g. "Settlers 1 Green"
  orgName: 'Barossa Valley Basketball',
  seasonLabel: 'Barossa Valley Junior Tournament 2026',
  statsLabel: 'tournament',       // heading on team pages: "Player stats · tournament"
  apiBase: 'https://api-basketball.squadi.com',
  // Each competition: the numeric id used by the matches endpoint, a short label,
  // and every Settlers team in it. Team names must match clubPattern.
  competitions: [
    {
      id: 3023, label: '', // Barossa Valley Junior Basketball Tournament 2026, 13 to 15 Nov
      sourceUrl: 'https://registration.basketballconnect.com/livescoreSeasonFixture?organisationKey=c5f5cbe6-a575-4514-a3a6-f37128456e37&yearId=9&competitionUniqueKey=01c8fecd-0b0d-4bc3-adf2-cedc6092b39a&divisionId=All',
      teamIds: [
        164662, 164663, 164664, 164665, 164666, 164667, 164668, 164669, 164670,
        164671, 164672, 164673, 164674, 164675, 164676, 164677, 164678
      ]
    }
  ],
  // A regular expression that matches our team names, such as "Barossa U14B1 Green",
  // "Barossa Valley U12G2" or "U18B2 - Barossa Valley".
  clubPattern: '\\bBarossa\\b',
  // Team colour words kept in the short name ("Settlers 1 Green").
  colourWords: ['Green', 'Gold', 'White'],
  // Where the live foul tracker's data lives (the Linode scraper). Leave empty to hide the fouls card.
  foulsBase: '',
  timeZone: 'Australia/Adelaide',
  // How often to refresh while any Settlers game is live (milliseconds).
  liveRefreshMs: 60000
};
