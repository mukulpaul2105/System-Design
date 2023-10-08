import { forwardRef } from "react";
import withDimensions from "./WithDimensions";


const Comp1 = (props, forwardedRefFromParent) => {
    return (
        <div ref={forwardedRefFromParent}>
            <h1>It's an example of Higher Order Component in React JS</h1>
            <h3>It's a component and width is: {props.width}</h3>
            <p>Some random number: {props.randomNumber} </p>
        </div>
    );
};

export default withDimensions(forwardRef(Comp1));