import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/cesar-melia/"
                target="_blank"
                className="icon fa-linkedin"
                rel="noreferrer"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Cesar-Melia"
                target="_blank"
                className="icon fa-github"
                rel="noreferrer"
              >
                <span className="label">Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
