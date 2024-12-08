import './FamilyTree.scss'
import FamilyTree from './FamilyTreeModule';
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const MyFamilyTree = ({ nodes, openInfo, onAdd, highlighted, onHighlighted, prePartner, nextPartner, setPartner }) => {
    MyFamilyTree.propTypes = {
        nodes: PropTypes.array.isRequired,
        openInfo: PropTypes.func.isRequired,
        onAdd: PropTypes.func.isRequired,
        highlighted: PropTypes.number.isRequired,
        onHighlighted: PropTypes.func.isRequired,
        prePartner: PropTypes.number,
        nextPartner: PropTypes.number,
        setPartner: PropTypes.func,
    };

    const divRef = useRef(null);
    // Helper function to find parents of a node

    useEffect(() => {
        // const findParents = (nodeId) => {
        //     const node = nodes.find(n => n.id === nodeId);
        //     if (!node) return [nodeId];
        //     return [node.fid, node.mid].filter(Boolean); // Return only valid IDs
        // };
        // // console.log("highlighted", highlighted == nodes[2].id);
        // // If the highlighted node exists, find the related roots
        // const roots = highlightedNode
        //     ? [
        //         ...findParents(highlightedNode.id),
        //         highlightedNode.pids[0],
        //          // Highlighted node's parents
        //         // highlightedNode.partner, // Partner of the highlighted node
        //         // ...findParents(highlightedNode.partner) // Partner's parents
        //     ].filter(Boolean) // Remove undefined or null IDs
        //     : [];
        // Initialize the FamilyTree
        const family = new FamilyTree(divRef.current, {
            dottedLines: [
                { from: '1', to: '4' },
                { from: '2', to: '4' },
            ],
            template: "common",
            nodes: nodes,
            nodeBinding: {
                field_0: 'name',  // Full name
                field_1: 'bdate',
                field_2: 'city',      // City
                field_3: 'country',   // Country
                img_0: 'img',   // Image_url
            }, // Use the custom template
            connectors: {
                color: '#00aaff',
                lineType: 'solid',
            },
            nodeMenu: {
            },
            orderBy: ['orderId'],
            tags: {
                "user-male": {
                    template: "current_male"
                },
                "user-female": {
                    template: "current_female",
                },
                "user-non-binary": {
                    template: "current_non_binary"
                },
                "highlighted-male": {
                    template: "highlighted_male"
                },
                "highlighted-female": {
                    template: "highlighted_female"
                },
                "highlighted-non-binary": {
                    template: "highlighted_non_binary"
                },
                "middle-male": {
                    template: "middle_male"
                },
                "common-male": {
                    template: "common_male"
                },
                "common-female": {
                    template: "common_female"
                },
                "common-non-binary": {
                    template: "common_non_binary"
                },
                "right-male": {
                    template: "right_male"
                },
                "left-male": {
                    template: "left_male"
                },
                "left-female": {
                    template: "left_female"
                },
                "right-female": {
                    template: "right_female"
                },
                "middle-female": {
                    template: "middle_female"
                },
                "middle-non-binary": {
                    template: "middle_non_binary"
                },
                "left-non-binary": {
                    template: "left_non_binary"
                },
                "right-non-binary": {
                    template: "right_non_binary"
                },
            },
            roots: [nodes[0].id]
            // roots: roots
        });
        family.expand("all");
        console.log("nodes", nodes);
        family.onNodeClick((args) => {
            if (args.node.id == highlighted) return false;
            onHighlighted(args.node.id)
            console.log("args.node", args.node);
            return false; // Prevents the event from propagating further
        });

        // family.maximize(highlighted);
        window.handleMenuClick = (nodeId) => {
            event.stopPropagation();
            openInfo(nodeId)
        };

        window.handleAdd = () => {
            event.stopPropagation();
            onAdd(true);
        }
        window.handlePrev = () => {
            console.log("prePartner", prePartner);
            event.stopPropagation();
            setPartner(prePartner);
        }
        window.handleNext = () => {
            event.stopPropagation();
            setPartner(nextPartner);
        }

        return () => {
            delete window.handleMenuClick;
            delete window.handleMenuClick;
        };
    }, [nodes]);
    return <div id="tree" ref={divRef} style={{ backgroundColor: "#F8F8F8", }}></div>;
};

export default MyFamilyTree;