import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      searchQuery: ''
    };
  }

  handleSearch = (query) => {
    this.setState({ searchQuery: query });
  };
  render() {
    
    return (
      <div>
        <nav className="navbar  navbar-expand-lg  navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsWave
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    General
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/business" className="nav-link">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/entertainment" className="nav-link">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/health" className="nav-link">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/science" className="nav-link">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/sports" className="nav-link">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/technology" className="nav-link">
                    Technology
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Others
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        USA
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Canada
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2 "onSubmit={this.handleSubmit}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={this.state.searchQuery}
                  onChange={this.handleInputChange}
                />
                <button className="btn btn-outline-success" type="submit" onClick={this.handleSubmit}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
