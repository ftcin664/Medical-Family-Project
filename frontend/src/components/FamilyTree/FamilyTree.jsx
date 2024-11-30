import './FamilyTree.scss'
import FamilyTree from '@balkangraph/familytree.js';
import React, { useEffect, useRef } from 'react';

const MyFamilyTree = ({ nodes, openInfo, onAdd }) => {
    const divRef = useRef(null);

    useEffect(() => {
        //family tree template
        FamilyTree.templates.custom = Object.assign({}, FamilyTree.templates.tommy);
        FamilyTree.templates.custom.size = [160, 175];
        FamilyTree.templates.custom.node = `
            <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blurred" />
                    <feOffset dx="0" dy="0" result="offsetBlur" />
                    <feFlood flood-color="rgba(0, 0, 0, 0.05)" result="color" />
                    <feComposite in2="offsetBlur" operator="in" />
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                        <feMergeNode in="SourceAlpha" />
                        <feMergeNode />
                    </feMerge>
                </filter>
            </defs>
            
            <rect x="2" y="2" width="160" height="175" fill="none" stroke="none" filter="url(#shadow)" />
            <rect x="0" y="0" width="160" height="175" fill="#fff" stroke="#0000000D" stroke-width="1" rx="15" ry="15" />
        `;

        // Profile image
        FamilyTree.templates.custom.img_0 = `
            <rect x="48" y="14" width="64" height="64" rx="5" ry="5" fill="white" stroke="#0E0E0E" stroke-width="2"></rect>
            <defs>
                <clipPath id="circleClip">
                    <rect x="52" y="18" width="56" height="56" rx="3" ry="3" fill="white" stroke="gray" stroke-width="2"></rect>
                </clipPath>
            </defs>
            <image x="52" y="18" width="56" height="56" href="http://localhost:3001/{val}" style="clip-path: url(#circleClip); border: 2px solid #ccc;"></image>
        `;

        // Adjusted menu button with direct positioning
        FamilyTree.templates.custom.nodeMenuButton = `
            <g transform="matrix(1,0,0,1,140,15)" style="cursor: pointer;" onclick="handleMenuClick('{id}')" >
            <rect x="-10" y="-10" width="30" height="40" fill="transparent" />
                <circle cx="5" cy="5" r="2" fill="#999" />
                <circle cx="5" cy="10" r="2" fill="#999" />
                <circle cx="5" cy="15" r="2" fill="#999" />
            </g>
        `;

        // Manually setting the x and y position for the menu button
        FamilyTree.templates.custom.defs = `
            <style>
                #menu-icon circle {
                    transition: fill 0.3s ease;
                }
    
                #menu-icon:hover circle {
                    fill: #333;
                }
            </style>
        `;

        // Node text fields (name, year, city, country) layout
        FamilyTree.templates.custom.field_0 = `
            <text x="80" y="108" text-anchor="middle" style="font-size: 16px; font-weight: bold;" fill="#000">{val}</text>
        `;
        FamilyTree.templates.custom.field_1 = `
            <text x="50" y="133" text-anchor="middle" style="font-size: 16px;" fill="#939393">{val}</text>
        `;
        FamilyTree.templates.custom.field_2 = `
            <text x="110" y="133" text-anchor="middle" style="font-size: 14px;" fill="#939393">{val}</text>
        `;
        FamilyTree.templates.custom.field_3 = `
            <text x="80" y="158" text-anchor="middle" style="font-size: 14px;" fill="#939393">{val}</text>
        `;

        //family tree node template for current user
        FamilyTree.templates.current = Object.assign({}, FamilyTree.templates.tommy);
        FamilyTree.templates.current.size = [160, 201];
        FamilyTree.templates.current.node = `
            <defs>
                <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="5" result="blurred" />
                    <feOffset dx="0" dy="0" result="offsetBlur" />
                    <feFlood flood-color="rgba(0, 0, 0, 0.05)" result="color" />
                    <feComposite in2="offsetBlur" operator="in" />
                    <feComposite in2="SourceAlpha" operator="in" />
                    <feMerge>
                        <feMergeNode in="SourceAlpha" />
                        <feMergeNode />
                    </feMerge>
                </filter>
            </defs>
            
            <rect x="2" y="2" width="160" height="201" fill="none" stroke="none" filter="url(#shadow)" />
            <rect x="0" y="0" width="160" height="201" fill="#0E0E0E" stroke="#0000000D" stroke-width="1" rx="15" ry="15" />
            <g style="cursor: pointer;" onclick="handleAdd()">
        <!-- Add a transparent rect as the clickable area -->
        <rect x="68" y="168" width="25" height="24" fill="transparent" />
        <svg width="25" height="24" x="68" y="168" text-anchor="start" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.2207 0C5.6087 0 0.220703 5.388 0.220703 12C0.220703 18.612 5.6087 24 12.2207 24C18.8327 24 24.2207 18.612 24.2207 12C24.2207 5.388 18.8327 0 12.2207 0ZM17.0207 12.9H13.1207V16.8C13.1207 17.292 12.7127 17.7 12.2207 17.7C11.7287 17.7 11.3207 17.292 11.3207 16.8V12.9H7.4207C6.9287 12.9 6.5207 12.492 6.5207 12C6.5207 11.508 6.9287 11.1 7.4207 11.1H11.3207V7.2C11.3207 6.708 11.7287 6.3 12.2207 6.3C12.7127 6.3 13.1207 6.708 13.1207 7.2V11.1H17.0207C17.5127 11.1 17.9207 11.508 17.9207 12C17.9207 12.492 17.5127 12.9 17.0207 12.9Z" fill="white"/>
        </svg>
    </g>
        `;

        // Profile image
        FamilyTree.templates.current.img_0 = `
    <circle cx="80" cy="46" r="32" fill="#0E0E0E" stroke="#fff" stroke-width="1"></circle>
    <defs>
        <clipPath id="circleClip">
            <circle cx="80" cy="46" r="28"></circle>
        </clipPath>
    </defs>
    <image x="52" y="18" width="56" height="56" href="http://localhost:3001/{val}" 
           style="clip-path: url(#circleClip);"></image>
`;

        // Adjusted menu button with direct positioning
        FamilyTree.templates.current.nodeMenuButton = `
            <g transform="matrix(1,0,0,1,140,15)" style="cursor: pointer;" onclick="handleMenuClick('{id}')" >
            <rect x="-10" y="-10" width="30" height="40" fill="transparent" />
                <circle cx="5" cy="5" r="2" fill="#fff" />
                <circle cx="5" cy="10" r="2" fill="#fff" />
                <circle cx="5" cy="15" r="2" fill="#fff" />
            </g>
        `;

        // Manually setting the x and y position for the menu button
        FamilyTree.templates.current.defs = `
            <style>
                #menu-icon circle {
                    transition: fill 0.3s ease;
                }
    
                #menu-icon:hover circle {
                    fill: #333;
                }
            </style>
        `;

        // Node text fields (name, year, city, country) layout
        //         FamilyTree.templates.current.field_0 = `
        //             <text x="80" y="108" text-anchor="middle" style="font-size: 16px; font-weight: bold;" fill="#fff">{val}
        //             <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        // <path d="M6.11274 16.5L4.64216 14.0686L1.87745 13.4412L2.13235 10.6176L0.25 8.5L2.13235 6.38235L1.87745 3.55882L4.64216 2.93137L6.11274 0.5L8.72059 1.61765L11.3284 0.5L12.799 2.93137L15.5637 3.55882L15.3088 6.38235L17.1912 8.5L15.3088 10.6176L15.5637 13.4412L12.799 14.0686L11.3284 16.5L8.72059 15.3824L6.11274 16.5ZM7.72059 11.3235L12.3873 6.67647L11.3873 5.67647L7.72059 9.32353L6.05392 7.67647L5.05392 8.67647L7.72059 11.3235Z" fill="#00B147"/>
        // </svg>
        //             </text>
        //         `;
        FamilyTree.templates.current.field_0 = `
    <foreignObject x="0" y="90" text-anchor="start" width="160" height="21">
        <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; padding: 0px 4px; justify-content: center; align-items: center; width: 100%; height: 100%;">
            <p style="margin: 0; color: #fff; font-size: 18px;">{val}</p>
            <svg x="0" y="-10" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.11274 16.5L4.64216 14.0686L1.87745 13.4412L2.13235 10.6176L0.25 8.5L2.13235 6.38235L1.87745 3.55882L4.64216 2.93137L6.11274 0.5L8.72059 1.61765L11.3284 0.5L12.799 2.93137L15.5637 3.55882L15.3088 6.38235L17.1912 8.5L15.3088 10.6176L15.5637 13.4412L12.799 14.0686L11.3284 16.5L8.72059 15.3824L6.11274 16.5ZM7.72059 11.3235L12.3873 6.67647L11.3873 5.67647L7.72059 9.32353L6.05392 7.67647L5.05392 8.67647L7.72059 11.3235Z" fill="#00B147"/>
        </svg>
        </div>
    </foreignObject>
`;
        FamilyTree.templates.current.field_1 = `
            <text x="50" y="133" text-anchor="middle" style="font-size: 16px;" fill="#fff">{val}</text>
        `;
        FamilyTree.templates.current.field_2 = `
            <text x="110" y="133" text-anchor="middle" style="font-size: 14px;" fill="#fff">{val}</text>
        `;
        FamilyTree.templates.current.field_3 = `
            <text x="80" y="158" text-anchor="middle" style="font-size: 14px;" fill="#fff">{val}</text>
        `;

        // Initialize the FamilyTree
        const family = new FamilyTree(divRef.current, {
            nodes: nodes,
            nodeBinding: {
                field_0: 'fullname',  // Full name
                field_1: 'year',
                field_2: 'city',      // City
                field_3: 'country',   // Country
                img_0: 'image_url',   // Image_url
            },
            template: 'current', // Use the custom template
            connectors: {
                color: '#00aaff',
                lineType: 'solid',
            },
            nodeMenu: {
            }
        });

        window.handleMenuClick = (nodeId) => {
            // Find the clicked node by its ID
            event.stopPropagation();  // Prevents the click from bubbling up to the node
            const clickedNode = nodes.find(node => node.id == nodeId);
            if (clickedNode) {
                openInfo(clickedNode.id);
            }
        };

        window.handleAdd = () => {
            event.stopPropagation();
            onAdd(true);
        }

        return () => {
            // Clean up if needed
            delete window.handleMenuClick;
        };
    }, [nodes]);
    return <div id="tree" ref={divRef} style={{ backgroundColor: "#F8F8F8", }}></div>;
};

export default MyFamilyTree;
