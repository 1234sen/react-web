import React, { useState } from "react";
import { FormControl } from "react-bootstrap";

export default function ObjectStateVariable() {
    const [person, setPerson] = useState({
        name: "Peter",
        age: 24
    });

    return (
        <div>
            <h2>Object State Variables</h2>
            <pre>{JSON.stringify(person, null, 2)}</pre>
            <FormControl
                defaultValue={person.name}
                onChange={(e) => setPerson({
                    ...person,
                    name: e.target.value
                })}
                className="mb-2"
            />
            <FormControl
                type="number"
                defaultValue={person.age}
                onChange={(e) => setPerson({
                    ...person,
                    age: parseInt(e.target.value)
                })}
                className="mb-2"
            />
            <hr />
        </div>
    );
} 