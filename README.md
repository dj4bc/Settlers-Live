# Settlers Live

A static website for Barossa Settlers results, fixtures and live scores, cloned from the Lions Den site (dj4bc/Lions-Live). There's no server and no scraper: each visitor's browser reads the latest games straight from BasketballConnect's public live-scores API. Pages refresh every minute while a Settlers game is live.

## Pages

- **Game day** (`#/`): the visitor's starred teams, live scores, games that just finished, and every Settlers game in the next week grouped by day and tip-off time.
- **Results** (`#/results/<n>`): pick a round (R1, R2 … then finals: F1, SF, XO, GF) to see wins, losses, the biggest win, and each age group's results. Filter by age and boys/girls.
- **Teams** (`#/teams`): every Settlers team with their form and record.
- **Box score** (`#/game/<matchId>`): points, free throws, 2s, 3s and fouls for each player. Refreshes every 30 seconds during live games.
- **Team page** (`#/team/<id>`): player stats, record, points for and against, next game with directions, results and fixtures. "Add to my teams" pins the team to Game day (saved in the visitor's own browser).

## Player names

Full names are shown, except players BasketballConnect marks as hidden. Those show only their shirt number.

## Finals

Finals games are published with placeholder teams ("1", "WSF1", "1 (U16 Girls-Pool A)"). They appear on the site automatically once BasketballConnect puts a Settlers team into the slot.

## Hosting

GitHub Pages from the `main` branch, repo root. Opening `index.html` straight from disk won't load data in some browsers, so test through a host or a local server (`python3 -m http.server`).

## New tournament or season

Edit `config.js`:
- `competitions`: one entry per BasketballConnect competition. `id` is the number in the `round/matches?competitionId=` request on the competition's fixture page (developer tools, Network tab); `teamIds` are the Settlers team ids (each match's `team1.id` / `team2.id`); `label` is a short tag shown next to the division when there's more than one competition; `sourceUrl` is the fixture page.
- `clubPattern`: a regular expression matching Settlers team names. Today it's `\bBarossa\b`, which covers "Barossa U14B1 Green", "Barossa Valley U12G2" and "U18B2 - Barossa Valley".
- `seasonLabel` and `statsLabel`.

Other tournaments the Barossa Valley organisation lists for 2026/27 (Naracoorte, Murray Bridge, Adelaide Hills, Mount Gambier, Millicent, Port Augusta) can be added the same way.

## Colours and logo

Green and gold come from the Barossa basketball logo (`--blue` is the main green, `--red` the gold accent; the variable names were kept from the Lions site). `shield.png` and the app icons are cropped from the logo on BasketballConnect. Swap in an official Settlers logo when there is one.

## Testing with saved data

`index.html?mock=mock.json` loads a local JSON file in the same shape as the API instead of calling it.
