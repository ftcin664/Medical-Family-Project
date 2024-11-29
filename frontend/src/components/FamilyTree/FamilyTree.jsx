import './FamilyTree.scss'
import FamilyTree from '@balkangraph/familytree.js';
import React, { useEffect, useRef } from 'react';

const MyFamilyTree = ({ nodes }) => {
    const divRef = useRef(null);

    useEffect(() => {
        // Define a custom template
        // Initialize the FamilyTree with custom template
        const family = new FamilyTree(divRef.current, {
            nodes: nodes,
            nodeBinding: {
                field_0: 'name',  // Bind the 'name' field
                img_0: 'img',     // Bind the 'img' field
            },
            //   template: 'customTemplate',  // Apply custom template
            connectors: {
                color: '#00aaff',  // Customize the connector line color
                lineType: 'solid'  // Other options: 'dotted', 'dashed'
            },
            searchFieldsWeight: {
                "name": 10, //percent
                "friends": 10 //percent
            }
        });

        return () => {
            // Cleanup if necessary
        };
    }, [nodes]);

    return <div id="tree" ref={divRef}></div>;
};

export default MyFamilyTree;
