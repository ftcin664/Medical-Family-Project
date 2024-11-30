import React, { useEffect } from "react";

const FamilyTreeComponentBigFamaly = () => {
  useEffect(() => {
    const loadFamilyTree = () => {
      const FamilyTree = window.FamilyTree; // Make sure the library is loaded

      if (!FamilyTree) {
        console.error("FamilyTree library is not loaded");
        return;
      }

      // Define templates for the family tree
      FamilyTree.templates.single_step = Object.assign(
        {},
        FamilyTree.templates.single_male
      );
      FamilyTree.templates.single_step.node =
        '<circle cx="100" cy="100" r="100" fill="white" stroke-width="3" stroke="#F68C20"></circle>';
      FamilyTree.templates.single_step.img_0 = `
        <use xlink:href="#base_img_1_stroke"/> 
        <circle id="base_img_1_stroke" fill="#F68C20" cx="100" cy="62" r="37"/>
        <image preserveAspectRatio="xMidYMid slice" clip-path="url(#base_img_1)" xlink:href="{val}" x="65" y="26" width="72" height="72"></image>`;
      FamilyTree.templates.single_step.link =
        '<path stroke-linejoin="round" stroke-dasharray="6, 4" stroke="#F68C20" stroke-width="1px" fill="none" d="{rounded}"/>';

      FamilyTree.templates.group = Object.assign({}, FamilyTree.templates.tommy);
      FamilyTree.templates.group.size = [250, 120];
      FamilyTree.templates.group.node =
        '<rect rx="50" ry="50" x="0" y="0" height="{h}" width="{w}" fill="#d9d9d9" stroke-width="3" stroke="#d9d9d9"></rect>';
      FamilyTree.templates.group.nodeMenuButton = "";
      FamilyTree.templates.group.field_0 =
        '<text data-width="220" style="font-size: 18px;" fill="black" x="{cw}" y="30" text-anchor="middle">{val}</text>';
      FamilyTree.templates.group.field_1 = '';

      FamilyTree.templates.group.ripple = {
        radius: 50,
        color: "#aeaeae"
      };

      FamilyTree.templates.group.min = Object.assign({}, FamilyTree.templates.group);
      FamilyTree.templates.group.min.img_0 = "";
      FamilyTree.templates.group.min.field_1 = '{val}';
      FamilyTree.templates.group.min.nodeMenuButton = '';

      // Create the family tree instance
      const family = new FamilyTree(document.getElementById("tree"), {
        template: "main",
        miniMap: true,
        nodeMenu: {
          details: { text: "Details" }
        },
        toolbar: {
          fullScreen: true,
          zoom: true,
          fit: true,
          expandAll: true
        },
        nodeBinding: {
          field_0: "relationship",
          field_1: "name",
          field_2: "bdate",
          field_3: "id",
          img_0: "img"
        },
        editForm: {
          buttons: {
            edit: null,
            share: {
              icon: FamilyTree.icon.share(24, 24, '#fff'),
              text: 'Share'
            },
            pdf: {
              icon: FamilyTree.icon.pdf(24, 24, '#fff'),
              text: 'Save as PDF'
            },
            remove: {
              icon: FamilyTree.icon.remove(24, 24, '#fff'),
              text: 'Remove',
              hideIfDetailsMode: true
            }
          }
        },
        orderBy: "orderId",
        tags: {
          "step": {
            template: "step"
          },
          "single_male": {
            template: "single_male"
          },
          "single_female": {
            template: "single_female"
          },
          "single_step": {
            template: "single_step"
          },
          "main_female_child": {
            template: "main_female_child"
          },
          "main_male_child": {
            template: "main_male_child"
          },
          "family_single_female": {
            template: "family_single_female"
          },
          "family_single_male": {
            template: "family_single_male"
          },
          "group": {
            min: true,
            template: "group",
            subTreeConfig: {
              siblingSeparation: 3,
              columns: 2
            }
          }
        }
      });

      // Event listeners
      family.on('render-link', function (sender, args) {
        if (args.cnode.ppid !== undefined) {
          args.html += '<use xlink:href="#heart" x="' + args.p.xa + '" y="' + args.p.ya + '"/>';
        }
      });

      family.on('field', function (sender, args) {
        if (args.name === "bdate") {
          if (args.data["ddate"]) {
            var bdate = args.data["bdate"];
            var ddate = args.data["ddate"];
            args.value = bdate + " - " + ddate;
          } else args.value = "";
        }
        if (args.node.min) {
          if (args.name === "name") {
            var count = args.node.stChildrenIds.length > 5 ? 5 : args.node.stChildrenIds.length;
            var x = args.node.w / 2 - (count * 32) / 2;

            for (var i = 0; i < count; i++) {
              var data = sender.get(args.node.stChildrenIds[i]);
              args.value += '<image xlink:href="' + data.img + '" x="' + (x + i * 32) + '" y="45" width="32" height="32"></image>';
            }
          }
        }
      });

      family.on('click', function (sender, args) {
        if (args.node.templateName === "group") {
          if (args.node.min) {
            sender.maximize(args.node.id);
          } else {
            sender.minimize(args.node.id);
          }
          return false;
        }
      });

      // Load family data
      family.load([
        { id: 1, pids: [2], orderId: 1, relationship: "Great Great mainfather", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/9.jpg", bdate: 1800, ddate: 1900 },
        { id: 2, pids: [1], orderId: 2, relationship: "Great Great mainmother", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/2.jpg", bdate: 1800, ddate: 1900 },
        { id: 3, mid: 1, fid: 2, pids: [6], orderId: 4, relationship: "Great mainfather", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/9.jpg", bdate: 1830, ddate: 1930 },
        { id: 4, pids: [5], relationship: "Great Great mainfather", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/9.jpg", bdate: 1800, ddate: 1900 },
        { id: 5, pids: [4], relationship: "Great Great mainmother", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/2.jpg", bdate: 1800, ddate: 1900 },
        { id: 6, mid: 4, fid: 5, pids: [3], orderId: 3, relationship: "Great ", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/2.jpg", bdate: 1830, ddate: 1930 },
        { id: 7, mid: 3, fid: 6, pids: [14], relationship: "P.mainfather", gender: "male", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/9.jpg", bdate: 1950 },
        { id: 8, pids: [9], relationship: "Great Great mainfather", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/9.jpg", bdate: 1800, ddate: 1900 },
        { id: 9, pids: [8], relationship: "Great Great mainmother", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/2.jpg", bdate: 1800, ddate: 1900 },
        { id: 10, mid: 8, fid: 9, pids: [13], relationship: "Great mainfather", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/9.jpg", bdate: 1830, ddate: 1930 },
        { id: 11, pids: [12], relationship: "Great Great mainfather", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/9.jpg", bdate: 1800, ddate: 1900 },
        { id: 12, pids: [11], relationship: "Great Great mainmother", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/2.jpg", bdate: 1800, ddate: 1900 },
        { id: 13, mid: 11, fid: 12, pids: [10], relationship: "Great mainmother", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/2.jpg", bdate: 1830, ddate: 1930 },
        { id: 14, mid: 10, fid: 13, pids: [7], relationship: "P.mainmother", gender: "female", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/2.jpg" },
        { id: 15, mid: 14, fid: 7, pids: [1015, 1016], relationship: "Dad", gender: "male", name: "Rosalind Arusha Arkadina Altalune Florence", img: "https://cdn.balkan.app/shared/9.jpg" },
        { id: "group1", mid: 14, fid: 7, tags: ["group"], relationship: "Paternal Uncle/Aunt" }
      ]);
    };

    loadFamilyTree();
  }, []);

  return (
    <div>
      <h1>Family Tree</h1>
      <div id="tree" style={{ width: "100%", height: "600px" }}></div>
    </div>
  );
};

export default FamilyTreeComponentBigFamaly;
