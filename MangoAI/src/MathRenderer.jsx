import React, { useEffect, useState } from 'react';

export default function MathRenderer(props) {
    React.useEffect(() => {
        renderMathInElement(document.getElementById("mathContainer"), {
            delimiters: [
                {left: "$$", right: "$$", display: true},
                {left: "$", right: "$", display: false},
                {left: "\\[", right: "\\]", display: true},
                {left: "\\(", right: "\\)", display: false}
            ],
            throwOnError : false
        });
    }, [props.mathExpression]);

    return (
        <div id="mathContainer" >{props.mathExpression}</div>
    );
}
