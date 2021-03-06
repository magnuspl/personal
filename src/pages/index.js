import React from 'react'
import Link from 'gatsby-link'
var FontAwesome = require('react-fontawesome');
import 'font-awesome/css/font-awesome.min.css';

const IndexPage = () => (
  <div>
    <div className="intro">
      <h1 id="name">Hey 👋,</h1>
      <h2>I'm Magnus Peter Langeland</h2>
      <div className="subtext">
        <p>I'm a computer science student from Oslo. I enjoy working with JavaScript and web technologies, but I know my way around other languages like Python and Java.</p>
        <p id="subtitle">Projects:</p>
        <p><a href="https://www.calculatortab.com/">Calculatortab</a>: Tiny calculator site. Built with ReactJS and GatsbyJS.</p>
        <p><a href="https://www.emojitab.com/">Emojitab</a>: Emoji Search Engine. Built with jQuery</p>
        <p><a href="https://www.cryptolurker.com/">Cryptolurker</a>: Comprehensive Blockchain Glossary. Built with jQuery.</p>
        <p><a href="https://github.com/NTNUI/booking">NTNUi booking</a>: Booking application for NTNUi. Built with Python, Django and PostgreSQL.</p>
      </div>
      <div className="subtext">
        <p id="subtitle">Old projects:</p>
        <p><a href="https://www.facebook.com/parrybot/">Parry</a>: Facebook bot made for NTNU students. The bot is no longer maintained and many of the built-in functions does not work anymore, but you can still interact with the bot. Built with Python, Flask and MySQL.</p>
      </div>
      <div className="subtext">
        <p id="subtitle">Links:</p>

        <p><a href="https://github.com/magnuspl/">GitHub</a></p>
        <p><a href="https://twitter.com/magnus_pl">Twitter</a></p>
        <p><a href="https://www.linkedin.com/in/magnus-peter-langeland-5a012142/">LinkedIn</a></p>

      </div>
    </div>
    </div>
)

export default IndexPage
