import React from "react";
import { Link } from "react-router-dom";

export default ({ to, children }) => {
    return (
        <li>
            <Link to={to}>{children}</Link>
        </li>
    );
}