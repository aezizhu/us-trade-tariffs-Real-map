## US Trade Tariffs 2025 – Interactive World Map

An interactive, static web application that visualizes United States trade tariffs (August 2025 snapshot) on a real world map. It is designed for researchers, journalists, policy analysts, educators, and the general public to explore the impact and distribution of tariff policies across countries.

### What this project can be used for
- **Policy analysis**: Quickly see which countries fall into which tariff categories and compare regional patterns.
- **Journalism and visual storytelling**: Embed a clear, color-coded map in articles or reports.
- **Education**: Teach trade policy concepts, categories, and geography through interactive exploration.
- **Briefings and presentations**: Use the map and legend to support data-driven discussions.
- **Scenario testing**: Swap in your own tariff dataset to explore alternative policy outcomes.

## Features
- **Real world map**: D3 + GeoJSON world basemap with country-level polygons.
- **Color-coded categories**: Countries shaded by tariff category (e.g., Low, Medium, High, Very High, Exempt).
- **Interactive tooltip**: Hover to view the country name, tariff rate, category, and policy status.
- **Click for details**: Clicking a country shows a detail panel with key information.
- **Legend with filtering**: Click a legend category to temporarily highlight all countries in that bucket.
- **Zoom and pan**: Built-in zoom/pan and a Reset Zoom button to return to the initial extent.
- **Responsive UX helpers**: On small screens the details card scrolls into view; on wide screens a floating details panel appears within the map container to ensure visibility.
- **Fully static**: No server-side code required; can be hosted on GitHub Pages or any static host.

## Quick start (local)

### Requirements
- Any modern browser
- Optional: Python 3 (for a quick local static server)

### Run locally
```bash
# From the project root
python3 -m http.server 8000

# Open in your browser
# http://localhost:8000
```

The entry point is `index.html`. The map, interactions, and styling are driven by `app.js` and `style.css`.

## Project structure
```
index.html         # App shell (layout, containers, script/style includes)
app.js             # D3 map logic, interactions, data mapping
style.css          # Design system + component styles
us_trade_tariffs_2025.csv  # Reference dataset (optional)
test.html          # Minimal D3 test page (sanity check)
README.md          # This file
```

## Data model
The core data lives inline in `app.js` as a `tariffData` object keyed by country name:

```js
const tariffData = {
  "Brazil": { tariff_rate: 50, status: "Emergency tariff (Brazil actions)", category: "Very High", color: "#e31a1c" },
  // ... more countries
};
```

Category metadata used by the legend:
```js
const categories = {
  "Exempt": { color: "#2d5aa0", description: "Countries exempt from tariffs due to sanctions" },
  "Low": { color: "#66c2a5", description: "Low tariff rates (10%)" },
  // ...
};
```

### Country name normalization
The map uses a GeoJSON with names that may differ slightly from your dataset (`Russian Federation` vs `Russia`, `Republic of Korea` vs `South Korea`, etc.). The function `normalizeCountryName(name)` in `app.js` handles common aliases so data lines up with map polygons.

## How it works (tech overview)
- **D3 v7** renders the world map using a **Mercator projection** and binds data to country features.
- **GeoJSON** basemap is fetched from a public URL at runtime. You can replace this with a local file for offline use.
- **Interactions**: hover tooltips, click-to-select, legend filter highlighting, zoom/pan with reset.
- **Responsive detail presentation**: Right sidebar card plus an in-map floating details panel for large viewports.

## Customization

### Change colors or category thresholds
- Update `color` and `description` fields in the `categories` object.
- Update each country’s `color` or `category` in `tariffData`.

### Replace the tariff dataset
1. Edit `tariffData` in `app.js` (or load JSON/CSV dynamically if you prefer—see “Data loading” below).
2. If your country names differ, extend `normalizeCountryName(name)` to cover additional aliases.

### Use a local GeoJSON
In `app.js`, the world basemap is loaded from:
```
https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson
```
Download this to `data/world.geojson` and change the URL to `data/world.geojson` for offline deployments.

### Load data from CSV/JSON (optional enhancement)
Instead of inlining `tariffData`, you can serve a JSON or CSV and build `tariffData` at runtime (e.g., using `d3.json` or `d3.csv`). This makes policy updates non-technical.

## Deployment

### GitHub Pages
1. Push this repository to GitHub.
2. In the repository settings, enable GitHub Pages and choose the `main` branch (root).
3. Your app will be available at `https://<your-user>.github.io/<repo-name>/`.

### Any static host
Upload all files as-is to Netlify, Vercel, Cloudflare Pages, S3 + CloudFront, or your own static server.

## Accessibility & usability
- Keyboard focus styles for selectable features.
- High-contrast category colors.
- Tooltip and detail card present identical key information.

## Performance notes
- Static assets only; no frameworks required.
- Map is drawn once and updated via interaction events.
- For very large datasets, consider simplifying the GeoJSON or using canvas.

## Known limitations
- The dataset is a snapshot (August 2025). Real-world tariffs change; verify before policy decisions.
- Country name differences may require additional normalization.
- Some small territories in the basemap may not match dataset keys.

## Roadmap ideas
- CSV/JSON data loading + admin-friendly update workflow
- Per-product or per-sector tariff breakdowns
- Time slider for month-over-month changes
- Country search and keyboard navigation between countries
- Screenshot/export to PNG/SVG for reports

## Credits
- World GeoJSON: `D3 Graph Gallery` sample world dataset.
- Built with D3.js v7.

## License
**MIT License**:

```text
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


