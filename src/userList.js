import React from "react";

function EmployeeList(props) {
    return (
        props.results.map((result) => (
            <ul className="list-group" key={result.email}>
                <li className="list-group-item" >
                    <img src={result.mediumPicture} />
                </li>

                <li className="list-group-item">
                    Name: {result.name}
                </li>

                <li className="list-group-item">
                    Cell: {result.cell}
                </li>

                <li className="list-group-item">
                    Email: {result.email}
                </li>
            </ul>
        ))

    );
}

export default EmployeeList;