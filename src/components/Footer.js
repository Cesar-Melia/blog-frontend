import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/cryptolin"
                target="_blank"
                className="icon fa-twitter"
                rel="noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/conradlin"
                target="_blank"
                className="icon fa-github"
                rel="noreferrer"
              >
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a
                href="https://conradlin.com/subscribe/"
                target="_blank"
                className="icon fa-envelope-o"
                rel="noreferrer"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
