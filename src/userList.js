import React from "react";

function EmployeeList(props) {
    return (
        props.results.map((result) => (
            <ul className="list-group" key={result.email}>
                <li className="list-group-item" >
                    <img src={result.mediumPicture} />
                </li>

                <li className="list-group-item-warning">
                    {result.name}
                </li>

                <li className="list-group-item">
                    {result.cell}
                </li>

                <li className="list-group-item">
                    {result.email}
                </li>
            </ul>
        ))

    );
}

export default EmployeeList;