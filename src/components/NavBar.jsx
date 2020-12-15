import React, { Component } from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Nav, Form, FormControl, NavDropdown } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import BookList from "./BookList.jsx";
import JumbotronComponent from './JumbotronComponent';

let bookCategories = ["fantasy", "horror", "history", "romance", "scifi"];
let books = {
  fantasy,
  horror,
  history,
  romance,
  scifi,
};

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: books.fantasy.slice(0, 12),
      category: "fantasy",
    };
  }
  handleDropdownChange = (category) => {
    this.setState({
      books: books[category].slice(0, 12),
      category: category,
    });
  };
  handleSearch = (query) => {
    let categorySelected = this.state.category;
    if (query) {
      let filtered = books[categorySelected].filter((book) => {
        return book.title.toLowerCase().includes(query.toLowerCase());
      });
      this.setState({ books: filtered });
    } else {
      this.setState({ books: books[categorySelected].slice(0, 12) });
    }
  };

  render() {
    return (
      <>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
        >
          <Navbar.Brand href="#home">Book Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown
                id="collasible-nav-dropdown"
                title={this.state.category}
              >
                {bookCategories.map((category, index) => {
                  return (
                    <NavDropdown.Item
                      href="#/action-1"
                      key={`dropdown-category-${index}`}
                      onClick={() => this.handleDropdownChange(category)}
                    >
                      {category}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
              <Form inline>
                <FormControl
                  id="searchInp"
                  type="text"
                  placeholder={<FontAwesomeIcon icon={faSearch} />}
                  className="mr-sm-2"
                  onChange={(e) => this.handleSearch(e.target.value)}
                />
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <JumbotronComponent />
        <br />
        <BookList books={this.state.books} />
      </>
    );
  }
}
export default NavBar;
