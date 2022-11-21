import React, { Component } from "react";
import { AboutPage } from "./Components/AboutPage";
import { FAQPage } from "./Components/FAQPage";
import { HomePage } from "./Components/HomePage";
import Link from "./Components/Link";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "/",
    };

    this.navigate = this.navigate.bind(this);
  }

  navigate(target) {
    this.setState(() => {
      return {
        page: target,
      };
    });
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <Link target="/" navigate={this.navigate}>
                  Home
                </Link>
              </li>
              <li>
                <Link target="/about" navigate={this.navigate}>
                  About
                </Link>
              </li>
              <li>
                <Link target="/faq" navigate={this.navigate}>
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {this.state.page === "/" && <HomePage />}
          {this.state.page === "/about" && <AboutPage />}
          {this.state.page === "/faq" && <FAQPage />}
        </main>
      </>
    );
  }
}
