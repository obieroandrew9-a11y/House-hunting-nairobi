
import React, { useState } from 'react';
import './index.css';

const houses = [
  {
    id: 1,
    title: 'Modern 2 Bedroom Apartment',
    location: 'Kilimani',
    price: 35000,
    bedrooms: 2,
    type: 'Apartment',
    description: 'A comfortable apartment for modern city living.',
  },
  {
    id: 2,
    title: 'Affordable Bedsitter',
    location: 'Rongai',
    price: 8000,
    bedrooms: 1,
    type: 'Bedsitter',
    description: 'A budget-friendly option for one person.',
  },
  {
    id: 3,
    title: 'Spacious 1 Bedroom House',
    location: 'Kasarani',
    price: 15000,
    bedrooms: 1,
    type: 'Apartment',
    description: 'A welcoming home with a practical layout.',
  },
  {
    id: 4,
    title: 'Family 3 Bedroom Apartment',
    location: 'Roysambu',
    price: 40000,
    bedrooms: 3,
    type: 'Apartment',
    description: 'Extra space for families and shared living.',
  },
  {
    id: 5,
    title: 'Cozy Studio Apartment',
    location: 'Kileleshwa',
    price: 22000,
    bedrooms: 1,
    type: 'Studio',
    description: 'A simple, modern space for city living.',
  },
  {
    id: 6,
    title: 'Affordable 2 Bedroom House',
    location: 'Embakasi',
    price: 18000,
    bedrooms: 2,
    type: 'House',
    description: 'A practical option for a small family.',
  },
];

export default function App() {
  const [location, setLocation] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [bedrooms, setBedrooms] = useState('Any');

  const filteredHouses = houses.filter((house) => {
    const matchesLocation = house.location
      .toLowerCase()
      .includes(location.trim().toLowerCase());

    const matchesPrice =
      maxPrice === '' || house.price <= Number(maxPrice);

    const matchesBedrooms =
      bedrooms === 'Any' ||
      String(house.bedrooms) === bedrooms;

    return matchesLocation && matchesPrice && matchesBedrooms;
  });

  return (
    <div className="website">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-icon">⌂</span>
          House Hunting Nairobi
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#listings">Find Houses</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <span className="eyebrow">
              YOUR NEXT HOME STARTS HERE
            </span>

            <h1>
              Find a home that
              <br />
              feels like <span>yours.</span>
            </h1>

            <p>
              Discover houses and apartments for rent
              across Nairobi, Kenya. Search by location,
              budget, and number of bedrooms.
            </p>

            <a className="hero-button" href="#listings">
              Explore houses →
            </a>
          </div>
        </section>

        <section className="search-section" id="listings">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR SPACE</span>
            <h2>Search available homes</h2>
            <p>Choose your preferred location and budget.</p>
          </div>

          <div className="search-panel">
            <label>
              Location
              <input
                type="text"
                placeholder="e.g. Kilimani, Rongai"
                value={location}
                onChange={(event) =>
                  setLocation(event.target.value)
                }
              />
            </label>

            <label>
              Maximum monthly rent (KSh)
              <input
                type="number"
                min="0"
                placeholder="e.g. 20000"
                value={maxPrice}
                onChange={(event) =>
                  setMaxPrice(event.target.value)
                }
              />
            </label>

            <label>
              Bedrooms
              <select
                value={bedrooms}
                onChange={(event) =>
                  setBedrooms(event.target.value)
                }
              >
                <option value="Any">Any</option>
                <option value="1">1 bedroom</option>
                <option value="2">2 bedrooms</option>
                <option value="3">3 bedrooms</option>
              </select>
            </label>

            <button
              className="search-button"
              onClick={() =>
                document
                  .getElementById('results')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Search
            </button>
          </div>

          <div className="results-heading" id="results">
            <h2>Homes to explore</h2>
            <span>{filteredHouses.length} results</span>
          </div>

          <div className="house-grid">
            {filteredHouses.map((house) => (
              <article className="house-card" key={house.id}>
                <div className={`house-visual visual-${house.id}`}>
                  <span className="house-type">{house.type}</span>
                  <span className="house-symbol">⌂</span>
                </div>

                <div className="house-info">
                  <p className="house-location">
                    📍 {house.location}, Nairobi
                  </p>

                  <h3>{house.title}</h3>

                  <p className="house-description">
                    {house.description}
                  </p>

                  <div className="house-details">
                    <span>🛏 {house.bedrooms} bedroom(s)</span>
                    <span>Monthly rent</span>
                  </div>

                  <div className="house-footer">
                    <p className="house-price">
                      KSh {house.price.toLocaleString('en-KE')}
                      <small> / month</small>
                    </p>
                    <button
                      className="details-button"
                      onClick={() =>
                        alert(
                          `${house.title}\nLocation: ${house.location}\nMonthly rent: KSh ${house.price.toLocaleString('en-KE')}\n\nThis is a sample listing. Please verify availability before making any payment.`
                        )
                      }
                    >
                      View details
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredHouses.length === 0 && (
            <div className="no-results">
              <h3>No matching houses found</h3>
              <p>
                Try another location or increase your rental budget.
              </p>
              <button
                className="search-button"
                onClick={() => {
                  setLocation('');
                  setMaxPrice('');
                  setBedrooms('Any');
                }}
              >
                Clear filters
              </button>
            </div>
          )}

          <p className="demo-notice">
            Note: These are demonstration listings, not verified
            available properties. Confirm the property, rent,
            landlord, and viewing arrangements before paying.
          </p>
        </section>
      </main>

      <footer className="footer">
        <h3>House Hunting Nairobi</h3>
        <p>Helping you find a place to call home.</p>
        <p>© {new Date().getFullYear()} House Hunting Nairobi</p>
      </footer>
    </div>
  );
}
