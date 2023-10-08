import { useState, useEffect, useRef } from 'react';

const withDimensions = (Component) => {

    const WidhDimensions = (props) => {
        const [width, setWidth] = useState(null);
        const [height, setHeight] = useState(null);

        const compRef = useRef();
        useEffect(() => {
            if (compRef.current) {
                setWidth(compRef.current.offsetWidth);
                setHeight(compRef.current.offsetHeight);
            }
        }, [compRef]);
        
        return <Component ref={compRef} height={height} width={width} {...props} />;
    }

    return WidhDimensions;
}

export default withDimensions;