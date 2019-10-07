import React from 'react'
import { BrowserRouter as Route, Switch , Link} from "react-router-dom";

export default function nav() {
    return (
        <div>
        <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" to="/active">Active</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/link">Link</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#">Link</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
  </li>
</ul>
        </div>
    )
}
