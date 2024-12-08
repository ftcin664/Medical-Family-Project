import FamilyTree from '@balkangraph/familytree.js';

// Setting up the common template
FamilyTree.templates.common = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.common.size = [160, 201];

// Adjusting the menu button with direct positioning for the common template
FamilyTree.templates.common.nodeMenuButton = `
  <g transform="matrix(1,0,0,1,140,15)" style="cursor: pointer;" onclick="handleMenuClick('{id}')" >
    <rect x="-10" y="-10" width="30" height="40" fill="transparent" />
    <circle cx="5" cy="5" r="2" fill="#999" />
    <circle cx="5" cy="10" r="2" fill="#999" />
    <circle cx="5" cy="15" r="2" fill="#999" />
  </g>
`;

// Manually setting the x and y position for the menu button in the common template
FamilyTree.templates.common.defs = `
  <style>
    #menu-icon circle {
      transition: fill 0.3s ease;
    }

    #menu-icon:hover circle {
      fill: #333;
    }
  </style>
`;

// Node text fields (name, year, city, country) layout for the common template
FamilyTree.templates.common.field_0 = `
      <foreignObject x="0" y="90" text-anchor="start" width="160" height="21">
        <div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; padding: 0px 4px; justify-content: center; align-items: center; width: 100%; height: 100%;">
            <p style="margin: 0; color: #000; font-size: 18px;">{val}</p>
            <svg x="0" y="-10" width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.11274 16.5L4.64216 14.0686L1.87745 13.4412L2.13235 10.6176L0.25 8.5L2.13235 6.38235L1.87745 3.55882L4.64216 2.93137L6.11274 0.5L8.72059 1.61765L11.3284 0.5L12.799 2.93137L15.5637 3.55882L15.3088 6.38235L17.1912 8.5L15.3088 10.6176L15.5637 13.4412L12.799 14.0686L11.3284 16.5L8.72059 15.3824L6.11274 16.5ZM7.72059 11.3235L12.3873 6.67647L11.3873 5.67647L7.72059 9.32353L6.05392 7.67647L5.05392 8.67647L7.72059 11.3235Z" fill="#00B147"/>
        </svg>
        </div>
    </foreignObject>
`;
FamilyTree.templates.common.field_1 = `
  <text x="50" y="133" text-anchor="middle" style="font-size: 16px;" fill="#939393">{val}</text>
`;
FamilyTree.templates.common.field_2 = `
  <text x="110" y="133" text-anchor="middle" style="font-size: 14px;" fill="#939393">{val}</text>
`;
FamilyTree.templates.common.field_3 = `
  <text x="80" y="158" text-anchor="middle" style="font-size: 14px;" fill="#939393">{val}</text>
`;

FamilyTree.templates.common.node = `
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
  <rect x="0" y="0" width="160" height="201" fill="#fff" stroke="#0000000D" stroke-width="1" rx="15" ry="15" />
`;

FamilyTree.templates.common_male = Object.assign({}, FamilyTree.templates.common);
FamilyTree.templates.common_male.img_0 = `
    <rect x="48" y="14" width="64" height="64" rx="5" ry="5" fill="white" stroke="#0E0E0E" stroke-width="2"></rect>
    <defs>
        <clipPath id="roundedClip">
            <rect x="52" y="18" width="56" height="56" rx="3" ry="3" fill="white" stroke="gray" stroke-width="2"></rect>
        </clipPath>
    </defs>
    <image x="52" y="18" width="56" height="56" href="{val}" style="clip-path: url(#roundedClip); border: 2px solid #ccc;"></image>
`;

FamilyTree.templates.common_female = Object.assign({}, FamilyTree.templates.common);
FamilyTree.templates.common_female.img_0 = `
<circle cx="80" cy="46" r="32" fill="white" stroke="#0E0E0E" stroke-width="2"></circle>
<defs>
    <clipPath id="circleClip">
        <circle cx="80" cy="46" r="28"></circle>
    </clipPath>
</defs>
<image x="52" y="18" width="56" height="56" href="{val}" style="clip-path: url(#circleClip);"></image>
`
FamilyTree.templates.common_non_binary = Object.assign({}, FamilyTree.templates.common);
FamilyTree.templates.common_non_binary.img_0 = `
<polygon points="80,18 108,46 80,74 52,46" fill="white" stroke="#0E0E0E" stroke-width="2"></polygon>
<defs>
    <clipPath id="diamondClip">
        <polygon points="80,18 108,46 80,74 52,46"></polygon>
    </clipPath>
</defs>
<image x="52" y="18" width="56" height="56" href="{val}" style="clip-path: url(#diamondClip);"></image>
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
// FamilyTree.templates.custom_male = Object.assign({}, FamilyTree.templates.custom);
FamilyTree.templates.current_male = Object.assign({}, FamilyTree.templates.current);
FamilyTree.templates.current_female = Object.assign({}, FamilyTree.templates.current);
FamilyTree.templates.current_non_binary = Object.assign({}, FamilyTree.templates.current);

FamilyTree.templates.current_female.img_0 = `
    <circle cx="80" cy="46" r="32" fill="#0E0E0E" stroke="#fff" stroke-width="1"></circle>
    <defs>
        <clipPath id="circleClip">
            <circle cx="80" cy="46" r="28"></circle>
        </clipPath>
    </defs>
    <image x="52" y="18" width="56" height="56" href="{val}" 
        style="clip-path: url(#circleClip);"></image>
`;
FamilyTree.templates.current_male.img_0 = `
    <rect x="48" y="14" width="64" height="64" rx="5" ry="5" fill="#0E0E0E" stroke="#fff" stroke-width="1"></rect>
    <defs>
        <clipPath id="roundedClip">
            <rect x="52" y="18" width="56" height="56" rx="3" ry="3"></rect>
        </clipPath>
    </defs>
    <image x="52" y="18" width="56" height="56" href="{val}" style="clip-path: url(#roundedClip);"></image>
`;

FamilyTree.templates.current_non_binary.img_0 = `
    <polygon points="80,14 112,46 80,78 48,46" fill="#0E0E0E" stroke="#fff" stroke-width="1"></polygon>
    <defs>
        <clipPath id="diamondClip">
            <polygon points="80,18 108,46 80,74 52,46"></polygon>
        </clipPath>
    </defs>
    <image x="52" y="18" width="56" height="56" href="{val}" style="clip-path: url(#diamondClip);"></image>
`;

FamilyTree.templates.highlighted = Object.assign({}, FamilyTree.templates.common);
FamilyTree.templates.highlighted.node = `
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
    <rect x="0" y="0" width="160" height="201" fill="#ddd" stroke="#0000000D" stroke-width="1" rx="15" ry="15" />
`;
FamilyTree.templates.highlighted_male = Object.assign({}, FamilyTree.templates.highlighted);
FamilyTree.templates.highlighted_female = Object.assign({}, FamilyTree.templates.highlighted);
FamilyTree.templates.highlighted_non_binary = Object.assign({}, FamilyTree.templates.highlighted);
FamilyTree.templates.highlighted_male.img_0 = FamilyTree.templates.current_male.img_0;
FamilyTree.templates.highlighted_female.img_0 = FamilyTree.templates.current_female.img_0;
FamilyTree.templates.highlighted_non_binary.img_0 = FamilyTree.templates.current_non_binary.img_0;

//default template for all nodes
FamilyTree.templates.partnerr = Object.assign({}, FamilyTree.templates.tommy);
FamilyTree.templates.partnerr.size = [160, 201];
// Adjusted menu button with direct positioning
FamilyTree.templates.partnerr.nodeMenuButton = `
    <g transform="matrix(1,0,0,1,140,15)" style="cursor: pointer;" onclick="handleMenuClick('{id}')" >
    <rect x="-10" y="-10" width="30" height="40" fill="transparent" />
        <circle cx="5" cy="5" r="2" fill="#999" />
        <circle cx="5" cy="10" r="2" fill="#999" />
        <circle cx="5" cy="15" r="2" fill="#999" />
    </g>
`;

// Manually setting the x and y position for the menu button
FamilyTree.templates.partnerr.defs = `
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
FamilyTree.templates.partnerr.field_0 = `
    <text x="80" y="108" text-anchor="middle" style="font-size: 16px; font-weight: bold;" fill="#000">{val}</text>
`;
FamilyTree.templates.partnerr.field_1 = `
    <text x="50" y="133" text-anchor="middle" style="font-size: 16px;" fill="#939393">{val}</text>
`;
FamilyTree.templates.partnerr.field_2 = `
    <text x="110" y="133" text-anchor="middle" style="font-size: 14px;" fill="#939393">{val}</text>
`;
FamilyTree.templates.partnerr.field_3 = `
    <text x="80" y="158" text-anchor="middle" style="font-size: 14px;" fill="#939393">{val}</text>
`;

FamilyTree.templates.partnerr.node = `
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
    <rect x="0" y="0" width="160" height="201" fill="#fff" stroke="#0000000D" stroke-width="1" rx="15" ry="15" />
`;

FamilyTree.templates.partnerr_male = Object.assign({}, FamilyTree.templates.partnerr);
FamilyTree.templates.partnerr_female = Object.assign({}, FamilyTree.templates.partnerr);
FamilyTree.templates.partnerr_non_binary = Object.assign({}, FamilyTree.templates.partnerr);
// Profile image
FamilyTree.templates.partnerr_male.img_0 = FamilyTree.templates.common_male.img_0;

FamilyTree.templates.partnerr_female.img_0 = FamilyTree.templates.common_female.img_0;

FamilyTree.templates.partnerr_non_binary.img_0 = FamilyTree.templates.common_non_binary.img_0;

FamilyTree.templates.middle_male = Object.assign({}, FamilyTree.templates.partnerr_male);
FamilyTree.templates.middle_female = Object.assign({}, FamilyTree.templates.partnerr_female);
FamilyTree.templates.left_male = Object.assign({}, FamilyTree.templates.partnerr_male);
FamilyTree.templates.left_female = Object.assign({}, FamilyTree.templates.partnerr_female);
FamilyTree.templates.middle_non_binary = Object.assign({}, FamilyTree.templates.partnerr_non_binary);
FamilyTree.templates.left_non_binary = Object.assign({}, FamilyTree.templates.partnerr_non_binary);

FamilyTree.templates.right_male = Object.assign({}, FamilyTree.templates.partnerr_male);
FamilyTree.templates.right_female = Object.assign({}, FamilyTree.templates.partnerr_female);
FamilyTree.templates.right_non_binary = Object.assign({}, FamilyTree.templates.partnerr_non_binary);
FamilyTree.templates.none_male = Object.assign({}, FamilyTree.templates.common_male);
FamilyTree.templates.none_female = Object.assign({}, FamilyTree.templates.common_female);
FamilyTree.templates.none_non_binary = Object.assign({}, FamilyTree.templates.common_non_binary);

FamilyTree.templates.left_male.node = `
<defs>
<!-- Shadow for the node -->
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

<!-- Node Shadow -->
<rect x="2" y="2" width="160" height="201" fill="none" stroke="none" filter="url(#shadow)" />
<!-- Node Background -->
<rect x="0" y="0" width="160" height="201" fill="#fff" stroke="#0000000D" stroke-width="1" rx="15" ry="15" />

<!-- Pagination Buttons -->
<!-- Disabled Prev Button -->
<g class="prev-button" onclick="handlePrev()">
<rect x="38" y="170" width="40" height="25" fill="#e0e0e0" rx="12.5" ry="12.5" stroke="#d0d0d0" />
<svg x="48" y="173" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 19L8 12L15 5" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</g>

<!-- Enabled Next Button -->
<g class="next-button" cursor="pointer" onclick="handleNext()">
<rect x="82" y="170" width="40" height="25" fill="#f2f2f2" rx="12.5" ry="12.5" stroke="#ccc" />
<svg x="92" y="173" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 19L16 12L9 5" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</g>
`;

FamilyTree.templates.middle_male.node = `
<defs>
<!-- Shadow for the node -->
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

<!-- Node Shadow -->
<rect x="2" y="2" width="160" height="201" fill="none" stroke="none" filter="url(#shadow)" />
<!-- Node Background -->
<rect x="0" y="0" width="160" height="201" fill="#fff" stroke="#0000000D" stroke-width="1" rx="15" ry="15" />

<!-- Pagination Buttons -->
<!-- Disabled Prev Button -->
<g class="prev-button" cursor="pointer" onclick="handlePrev()">
<rect x="38" y="170" width="40" height="25" fill="#f2f2f2" rx="12.5" ry="12.5" stroke="#ccc" />
<svg x="48" y="173" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19L8 12L15 5" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</g>

<!-- Enabled Next Button -->
<g class="next-button" cursor="pointer" onclick="handleNext()">
<rect x="82" y="170" width="40" height="25" fill="#f2f2f2" rx="12.5" ry="12.5" stroke="#ccc" />
<svg x="92" y="173" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19L16 12L9 5" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</g>
`;

FamilyTree.templates.right_male.node = `
<defs>
<!-- Shadow for the node -->
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

<!-- Node Shadow -->
<rect x="2" y="2" width="160" height="201" fill="none" stroke="none" filter="url(#shadow)" />
<!-- Node Background -->
<rect x="0" y="0" width="160" height="201" fill="#fff" stroke="#0000000D" stroke-width="1" rx="15" ry="15" />

<!-- Pagination Buttons -->
<!-- Disabled Prev Button -->
<!-- Enabled Prev Button -->
<g class="prev-button" cursor="pointer" onclick="handlePrev()">
<rect x="38" y="170" width="40" height="25" fill="#f2f2f2" rx="12.5" ry="12.5" stroke="#ccc" />
<svg x="48" y="173" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 19L8 12L15 5" stroke="#555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</g>

<!-- Disabled Next Button -->
<g class="next-button" cursor="not-allowed" onclick="">
<rect x="82" y="170" width="40" height="25" fill="#e0e0e0" rx="12.5" ry="12.5" stroke="#d0d0d0" />
<svg x="92" y="173" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 19L16 12L9 5" stroke="#aaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</g>
`;

FamilyTree.templates.middle_female.node = FamilyTree.templates.middle_male.node;
FamilyTree.templates.left_female.node = FamilyTree.templates.left_male.node;
FamilyTree.templates.right_female.node = FamilyTree.templates.right_male.node;
FamilyTree.templates.middle_female.img_0 = FamilyTree.templates.common_female.img_0;
FamilyTree.templates.left_female.img_0 = FamilyTree.templates.common_female.img_0;
FamilyTree.templates.right_female.img_0 = FamilyTree.templates.common_female.img_0;
FamilyTree.templates.middle_non_binary.node = FamilyTree.templates.middle_male.node;
FamilyTree.templates.middle_non_binary.img_0 = FamilyTree.templates.common_non_binary.img_0;
FamilyTree.templates.left_non_binary.node = FamilyTree.templates.left_male.node;
FamilyTree.templates.left_non_binary.img_0 = FamilyTree.templates.common_non_binary.img_0;
FamilyTree.templates.right_non_binary.node = FamilyTree.templates.right_male.node;
FamilyTree.templates.right_non_binary.img_0 = FamilyTree.templates.common_non_binary.img_0;

export default FamilyTree;