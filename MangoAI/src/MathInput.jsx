import { useState } from "react";

export default function MathInput(props) {
    function handleUpdate(s) {
        if (s === "") {
            props.makeUpdate("$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$")
        } else {
            props.makeUpdate(s)
        }

    }

    return (
        <div>
            <textarea
                id="userMath"
                type="text"
                 // onChange={e => handleUpdate(e.target.value)}
            />
        </div>
    );
}