// Tariff data from the provided JSON
const tariffData = {
  "Afghanistan": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Algeria": {"tariff_rate": 30, "status": "Reciprocal tariff", "category": "High", "color": "#fd8d3c"},
  "Angola": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Australia": {"tariff_rate": 10, "status": "Baseline", "category": "Low", "color": "#66c2a5"},
  "Bangladesh": {"tariff_rate": 20, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Bolivia": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Bosnia and Herzegovina": {"tariff_rate": 30, "status": "Reciprocal tariff", "category": "High", "color": "#fd8d3c"},
  "Botswana": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Brazil": {"tariff_rate": 50, "status": "Emergency tariff (Brazil actions)", "category": "Very High", "color": "#e31a1c"},
  "Brunei": {"tariff_rate": 25, "status": "Reciprocal tariff", "category": "Medium-High", "color": "#feb24c"},
  "Cambodia": {"tariff_rate": 19, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Cameroon": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Canada": {"tariff_rate": 25, "status": "Section 232 + USMCA issues", "category": "Medium-High", "color": "#feb24c"},
  "Chad": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Chile": {"tariff_rate": 10, "status": "Baseline", "category": "Low", "color": "#66c2a5"},
  "China": {"tariff_rate": 30, "status": "Negotiated (10% baseline + 20% fentanyl)", "category": "High", "color": "#fd8d3c"},
  "Democratic Republic of the Congo": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Ecuador": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Equatorial Guinea": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Fiji": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Guyana": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Iceland": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "India": {"tariff_rate": 50, "status": "Secondary tariff (Russian oil)", "category": "Very High", "color": "#e31a1c"},
  "Indonesia": {"tariff_rate": 19, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Iraq": {"tariff_rate": 35, "status": "Reciprocal tariff", "category": "High", "color": "#fd8d3c"},
  "Israel": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Japan": {"tariff_rate": 15, "status": "Negotiated rate", "category": "Low-Medium", "color": "#abdda4"},
  "Jordan": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Kazakhstan": {"tariff_rate": 25, "status": "Reciprocal tariff", "category": "Medium-High", "color": "#feb24c"},
  "Laos": {"tariff_rate": 40, "status": "Reciprocal tariff", "category": "Very High", "color": "#e31a1c"},
  "Lesotho": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Libya": {"tariff_rate": 30, "status": "Reciprocal tariff", "category": "High", "color": "#fd8d3c"},
  "Liechtenstein": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Madagascar": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Malawi": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Malaysia": {"tariff_rate": 19, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Mauritius": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Mexico": {"tariff_rate": 25, "status": "Section 232 + USMCA issues", "category": "Medium-High", "color": "#feb24c"},
  "Moldova": {"tariff_rate": 25, "status": "Reciprocal tariff", "category": "Medium-High", "color": "#feb24c"},
  "Mozambique": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Myanmar": {"tariff_rate": 40, "status": "Reciprocal tariff", "category": "Very High", "color": "#e31a1c"},
  "Namibia": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Nauru": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "New Zealand": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Nicaragua": {"tariff_rate": 18, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Nigeria": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "North Macedonia": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Norway": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Pakistan": {"tariff_rate": 19, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Papua New Guinea": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Philippines": {"tariff_rate": 19, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Russia": {"tariff_rate": 0, "status": "Sanctions exemption", "category": "Exempt", "color": "#2d5aa0"},
  "Serbia": {"tariff_rate": 35, "status": "Reciprocal tariff", "category": "High", "color": "#fd8d3c"},
  "South Africa": {"tariff_rate": 30, "status": "Reciprocal tariff", "category": "High", "color": "#fd8d3c"},
  "South Korea": {"tariff_rate": 15, "status": "Negotiated rate", "category": "Low-Medium", "color": "#abdda4"},
  "Sri Lanka": {"tariff_rate": 20, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Switzerland": {"tariff_rate": 39, "status": "Reciprocal tariff", "category": "Very High", "color": "#e31a1c"},
  "Syria": {"tariff_rate": 41, "status": "Reciprocal tariff", "category": "Very High", "color": "#e31a1c"},
  "Taiwan": {"tariff_rate": 20, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Thailand": {"tariff_rate": 19, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Tunisia": {"tariff_rate": 25, "status": "Reciprocal tariff", "category": "Medium-High", "color": "#feb24c"},
  "Turkey": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Uganda": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "United Kingdom": {"tariff_rate": 10, "status": "Trade deal negotiated", "category": "Low", "color": "#66c2a5"},
  "Vanuatu": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Venezuela": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Vietnam": {"tariff_rate": 20, "status": "Reciprocal tariff", "category": "Medium", "color": "#ffffb3"},
  "Zambia": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"},
  "Zimbabwe": {"tariff_rate": 15, "status": "Reciprocal tariff", "category": "Low-Medium", "color": "#abdda4"}
};

const categories = {
  "Exempt": {"count": 1, "color": "#2d5aa0", "description": "Countries exempt from tariffs due to sanctions"},
  "Low": {"count": 5, "color": "#66c2a5", "description": "Low tariff rates (10%)"},
  "Low-Medium": {"count": 36, "color": "#abdda4", "description": "Low-medium tariff rates (15-18%)"},
  "Medium": {"count": 11, "color": "#ffffb3", "description": "Medium tariff rates (19-20%)"},
  "Medium-High": {"count": 6, "color": "#feb24c", "description": "Medium-high tariff rates (25%)"},
  "High": {"count": 7, "color": "#fd8d3c", "description": "High tariff rates (30-35%)"},
  "Very High": {"count": 6, "color": "#e31a1c", "description": "Very high tariff rates (39-50%)"}
};

// Global variables
let svg;
let selectedCountry = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Starting initialization');
  console.log('D3 version:', d3.version);
  console.log('TopoJSON available:', typeof topojson !== 'undefined');
  
  // Set a timeout to ensure the loading screen shows briefly
  setTimeout(() => {
    console.log('Timeout completed, calling initializeApp');
    initializeApp();
  }, 1000);
});

function initializeApp() {
  console.log('Initializing app');
  
  // Check if all required DOM elements exist
  const requiredElements = [
    'loading',
    'app', 
    'world-map',
    'tooltip',
    'reset-zoom',
    'legend',
    'country-details'
  ];
  
  const missingElements = requiredElements.filter(id => !document.getElementById(id));
  if (missingElements.length > 0) {
    console.error('Missing required DOM elements:', missingElements);
    hideLoadingScreen();
    return;
  }
  
  console.log('All required DOM elements found');
  
  try {
    // Create the visualization
    createVisualization();
    
    // Create legend
    createLegend();
    
    // Set up reset zoom button
    const resetButton = document.getElementById('reset-zoom');
    if (resetButton) {
      resetButton.addEventListener('click', resetView);
    }
    
    // Hide loading screen and show app
    hideLoadingScreen();
    
    console.log('App initialization complete');
    
  } catch (error) {
    console.error('Error in initializeApp:', error);
    hideLoadingScreen();
  }
}

function hideLoadingScreen() {
  console.log('Hiding loading screen');
  
  const loading = document.getElementById('loading');
  const app = document.getElementById('app');
  
  console.log('Loading element:', loading);
  console.log('App element:', app);
  
  if (loading) {
    console.log('Loading element found, applying hidden class and removing from DOM');
    loading.classList.add('hidden');
    // Remove loading node entirely after a tick
    setTimeout(() => {
      if (loading && loading.parentNode) {
        loading.parentNode.removeChild(loading);
        console.log('Loading element removed from DOM');
      }
    }, 0);
  } else {
    console.error('Loading element not found');
  }
  
  if (app) {
    console.log('App element found, removing hidden class');
    app.classList.remove('hidden');
  } else {
    console.error('App element not found');
  }
  
  console.log('Hide loading screen function completed');
}

let mapGroup = null;
let zoomBehavior = null;

function createVisualization() {
  console.log('Creating world map visualization');

  const mapContainer = document.querySelector('#world-map');
  if (!mapContainer) {
    console.error('Map container not found');
    return;
  }

  const width = mapContainer.clientWidth || 800;
  const height = 600;

  // Clear any existing content
  mapContainer.innerHTML = '';

  // Create SVG
  svg = d3.select('#world-map')
    .attr('width', width)
    .attr('height', height);

  // Root group for zoom/pan
  mapGroup = svg.append('g').attr('class', 'map-root');

  // Ensure a floating details panel exists inside the map container (for visibility on wide screens)
  try {
    const mapContainerEl = document.querySelector('.map-container');
    if (mapContainerEl && !document.getElementById('floating-details')) {
      const panel = document.createElement('div');
      panel.id = 'floating-details';
      panel.className = 'floating-details hidden';
      panel.innerHTML = '<div class="fd-header"><span id="fd-country">Select a Country</span><button id="fd-close" aria-label="Close">×</button></div><div id="fd-body" class="fd-body">Click a country to view tariff details</div>';
      mapContainerEl.appendChild(panel);
      panel.querySelector('#fd-close').addEventListener('click', () => {
        panel.classList.add('hidden');
      });
    }
  } catch (e) {
    console.warn('Unable to create floating details panel', e);
  }

  // Background
  svg.append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('fill', '#f8fafc')
    .attr('stroke', '#e2e8f0')
    .attr('stroke-width', 1)
    .lower();

  // Title
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', 32)
    .attr('text-anchor', 'middle')
    .attr('font-size', '18px')
    .attr('font-weight', 'bold')
    .attr('fill', '#1a202c')
    .text('US Trade Tariffs 2025 - World Map');

  const projection = d3.geoMercator()
    .fitSize([width, height - 60], {type: 'Sphere'});
  const geoPath = d3.geoPath(projection);

  // Zoom
  zoomBehavior = d3.zoom()
    .scaleExtent([1, 8])
    .on('zoom', (event) => {
      mapGroup.attr('transform', event.transform);
    });
  svg.call(zoomBehavior);

  // Load GeoJSON with country names
  const WORLD_GEOJSON = 'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson';

  d3.json(WORLD_GEOJSON).then((world) => {
    if (!world || !world.features) {
      console.error('World geojson not loaded');
      return;
    }

    const countries = mapGroup.append('g').attr('class', 'countries');

    countries.selectAll('path')
      .data(world.features)
      .join('path')
      .attr('d', geoPath)
      .attr('class', 'country-shape')
      .attr('data-country', d => getDisplayName(d))
      .attr('fill', d => getCountryColor(getDisplayName(d)))
      .attr('stroke', '#334155')
      .attr('stroke-width', 0.5)
      .on('mouseover', function(event, d) {
        const countryName = getDisplayName(d);
        const info = getTariffInfoForCountry(countryName);
        handleMouseOver(event, countryName, info);
        d3.select(this).attr('stroke-width', 1.5);
      })
      .on('mousemove', handleMouseMove)
      .on('mouseout', function(event) {
        handleMouseOut(event);
        d3.select(this).attr('stroke-width', 0.5);
      })
      .on('click', function(event, d) {
        const countryName = getDisplayName(d);
        const info = getTariffInfoForCountry(countryName);
        selectedCountry = countryName;
        updateCountryDetails(countryName, info);
        updateFloatingDetails(countryName, info);
        // highlight
        countries.selectAll('path').attr('stroke-width', 0.5);
        d3.select(this).attr('stroke-width', 2);
      });

    console.log('World map rendered');
  }).catch((err) => {
    console.error('Failed to load world geojson', err);
  });
}

function getDisplayName(feature) {
  return feature && feature.properties && feature.properties.name ? feature.properties.name : '';
}

function normalizeCountryName(name) {
  if (!name) return '';
  const map = {
    'Russian Federation': 'Russia',
    'Syrian Arab Republic': 'Syria',
    'Lao People\'s Democratic Republic': 'Laos',
    'Venezuela (Bolivarian Republic of)': 'Venezuela',
    'Bolivia (Plurinational State of)': 'Bolivia',
    'United Republic of Tanzania': 'Tanzania',
    'Congo, Democratic Republic of the': 'Democratic Republic of the Congo',
    'Democratic Republic of the Congo': 'Democratic Republic of the Congo',
    'Republic of Korea': 'South Korea',
    'Korea, Republic of': 'South Korea',
    'United Kingdom of Great Britain and Northern Ireland': 'United Kingdom',
    'North Macedonia': 'North Macedonia',
    'Taiwan, Province of China': 'Taiwan'
  };
  return map[name] || name;
}

function getTariffInfoForCountry(rawName) {
  const name = normalizeCountryName(rawName);
  const info = tariffData[name];
  if (info) return info;
  return {
    tariff_rate: 0,
    status: 'No data',
    category: 'Not Listed',
    color: '#e5e7eb'
  };
}

function getCountryColor(name) {
  const info = tariffData[normalizeCountryName(name)];
  return info ? info.color : '#e5e7eb';
}

function handleMouseOver(event, countryName, tariffInfo) {
  // Show tooltip
  const tooltip = d3.select('#tooltip');
  tooltip.classed('hidden', false);
  
  tooltip.html(`
    <h4>${countryName}</h4>
    <div class="tooltip-row">
      <span class="tooltip-label">Tariff Rate:</span>
      <span class="tooltip-value tariff-rate">${tariffInfo.tariff_rate}%</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Category:</span>
      <span class="tooltip-value">${tariffInfo.category}</span>
    </div>
    <div class="tooltip-row">
      <span class="tooltip-label">Status:</span>
      <span class="tooltip-value">${tariffInfo.status}</span>
    </div>
  `);
}

function handleMouseOut(event) {
  // Hide tooltip
  d3.select('#tooltip').classed('hidden', true);
}

function handleMouseMove(event) {
  const tooltip = d3.select('#tooltip');
  tooltip
    .style('left', (event.pageX + 10) + 'px')
    .style('top', (event.pageY - 10) + 'px');
}

function handleCountryClick(countryName, tariffInfo) {
  console.log(`Country clicked: ${countryName}`);
  selectedCountry = countryName;
  updateCountryDetails(countryName, tariffInfo);
}

function updateCountryDetails(countryName, tariffInfo) {
  const detailsCard = document.getElementById('country-details');
  const countryNameEl = document.getElementById('country-name');
  const countryInfoEl = document.getElementById('country-info');
  
  countryNameEl.textContent = countryName;
  
  countryInfoEl.innerHTML = `
    <div class="country-detail-item">
      <span class="country-detail-label">Tariff Rate</span>
      <span class="country-detail-value country-tariff-rate">${tariffInfo.tariff_rate}%</span>
    </div>
    <div class="country-detail-item">
      <span class="country-detail-label">Category</span>
      <span class="country-detail-value">${tariffInfo.category}</span>
    </div>
    <div class="country-detail-item">
      <span class="country-detail-label">Policy Status</span>
      <span class="country-detail-value">${tariffInfo.status}</span>
      <span class="status-badge">${tariffInfo.category}</span>
    </div>
  `;
  
  detailsCard.classList.remove('hidden');

  // On narrow viewports (single-column layout), bring the details into view
  try {
    const isSingleColumn = window.matchMedia('(max-width: 1024px)').matches;
    if (isSingleColumn) {
      detailsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (e) {
    // no-op
  }
}

function updateFloatingDetails(countryName, tariffInfo) {
  const panel = document.getElementById('floating-details');
  if (!panel) return;
  panel.classList.remove('hidden');
  const title = panel.querySelector('#fd-country');
  const body = panel.querySelector('#fd-body');
  if (title) title.textContent = countryName;
  if (body) {
    body.innerHTML = `
      <div class="fd-row"><span>Tariff Rate</span><strong>${tariffInfo.tariff_rate}%</strong></div>
      <div class="fd-row"><span>Category</span><strong>${tariffInfo.category}</strong></div>
      <div class="fd-row"><span>Status</span><strong>${tariffInfo.status}</strong></div>
    `;
  }
}

function createLegend() {
  console.log('Creating legend');
  const legendContainer = document.getElementById('legend');
  
  // Clear existing legend
  legendContainer.innerHTML = '';
  
  // Sort categories by typical order
  const categoryOrder = ['Exempt', 'Low', 'Low-Medium', 'Medium', 'Medium-High', 'High', 'Very High'];
  
  categoryOrder.forEach(categoryKey => {
    const category = categories[categoryKey];
    if (!category) return;
    
    const legendItem = document.createElement('div');
    legendItem.className = 'legend-item';
    legendItem.setAttribute('data-category', categoryKey);
    
    legendItem.innerHTML = `
      <div class="legend-color" style="background-color: ${category.color}"></div>
      <div class="legend-info">
        <div class="legend-category">${categoryKey}</div>
        <div class="legend-description">${category.description}</div>
      </div>
      <div class="legend-count">${category.count} countries</div>
    `;
    
    // Add click handler for legend items
    legendItem.addEventListener('click', () => highlightCategory(categoryKey));
    
    legendContainer.appendChild(legendItem);
  });
  
  console.log('Legend created successfully');
}

function highlightCategory(categoryKey) {
  console.log(`Highlighting category: ${categoryKey}`);
  
  if (!svg) return;
  const countriesLayer = svg.selectAll('.countries path');
  countriesLayer
    .attr('opacity', d => {
      const info = getTariffInfoForCountry(getDisplayName(d));
      return info.category === categoryKey ? 1 : 0.25;
    })
    .attr('stroke-width', d => {
      const info = getTariffInfoForCountry(getDisplayName(d));
      return info.category === categoryKey ? 2 : 0.5;
    });
  // Reset after 3 seconds
  setTimeout(() => {
    countriesLayer
      .attr('opacity', 1)
      .attr('stroke-width', 0.5);
  }, 3000);
}

function resetView() {
  console.log('Resetting view');
  if (zoomBehavior && svg) {
    svg.transition().duration(400).call(zoomBehavior.transform, d3.zoomIdentity);
  }
  // Reset map styling
  svg.selectAll('.countries path')
    .attr('opacity', 1)
    .attr('stroke-width', 0.5);
  // Clear country details
  const detailsCard = document.getElementById('country-details');
  detailsCard.classList.add('hidden');
  selectedCountry = null;
}

// Handle window resize
window.addEventListener('resize', function() {
  console.log('Window resized');
  // The visualization is fixed size, so no need to resize
});