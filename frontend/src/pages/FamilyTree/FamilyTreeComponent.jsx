import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import './FamilyTree.css'; // Add your CSS file here
import { familyTree } from "../../utils/familytreeApi";

const FamilyTreeComponent = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [familyData1, setFamilyData] = useState([]);
  const [familyData, setFamily1Data] = useState([
    { id: 1, pids: [2], name: "King George VI", img: "https://cdn.balkan.app/shared/f1.png", gender: "male" },
    { id: 2, pids: [1], name: "Queen Elizabeth", title: "The Queen Mother", img: "https://cdn.balkan.app/shared/f2.png", gender: "female" },
    { id: 3, pids: [4], mid: 2, fid: 1, name: "Queen Elizabeth II", img: "https://cdn.balkan.app/shared/f5.png", gender: "female" },
    { id: 4, pids: [3], name: "Prince Philip", title: "Duke of Edinburgh", img: "https://cdn.balkan.app/shared/f3.png", gender: "male" },
    { id: 5, mid: 2, fid: 1, name: "Princess Margaret", img: "https://cdn.balkan.app/shared/f6.png", gender: "male" },
    { id: 6, mid: 3, fid: 4, pids: [7, 8], name: "Charles", title: "Prince of Wales", img: "https://cdn.balkan.app/shared/f8.png", gender: "male" },
    { id: 7, pids: [6], name: "Diana", title: "Princess of Wales", img: "https://cdn.balkan.app/shared/f9.png", gender: "female" },
    { id: 8, pids: [6], name: "Camila", title: "Duchess of Cornwall", img: "https://cdn.balkan.app/shared/f7.png", gender: "female" },
    { id: 9, mid: 3, fid: 4, name: "Anne", title: "Princess Royal", img: "https://cdn.balkan.app/shared/f10.png", gender: "female" },
    { id: 10, mid: 3, fid: 4, name: "Prince Andrew", title: "Duke of York", img: "https://cdn.balkan.app/shared/f11.png", gender: "male" },
    { id: 11, mid: 3, fid: 4, name: "Prince Edward", title: "Earl of Wessex", img: "https://cdn.balkan.app/shared/f12.png", gender: "male" },
    { id: 12, fid: 6, mid: 7, pids: [14], name: "Prince William", title: "Duch of Cambridge", img: "https://cdn.balkan.app/shared/f14.png", gender: "male" },
    { id: 13, fid: 6, mid: 7, pids: [15], name: "Prince Harry", img: "https://cdn.balkan.app/shared/f15.png", gender: "male" },
    { id: 14, pids: [12], name: "Catherine", title: "Duchess of Cambridge", img: "https://cdn.balkan.app/shared/f13.png", gender: "female" },
    { id: 15, pids: [13], name: "Meghan Markle", img: "https://cdn.balkan.app/shared/f16.png", gender: "female" },
    { id: 16, fid: 12, mid: 14, name: "Prince George", img: "https://cdn.balkan.app/shared/f17.png", gender: "male" },
    { id: 17, fid: 12, mid: 14, name: "Prince Charlotte", img: "https://cdn.balkan.app/shared/f18.png", gender: "female" },
    { id: 18, fid: 12, mid: 14, name: "Prince Louis", img: "https://cdn.balkan.app/shared/f19.png", gender: "male" },
  ]);

  useEffect(() => {
    const fetchFamilyData = async () => {
      try {
        const data = await familyTree(userId); 
        setFamilyData(data.allRelatives);
      } catch (error) {
        console.error("Failed to fetch family data:", error);
      }
    };

    fetchFamilyData();
  }, [userId]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://balkan.app/js/FamilyTree.js";
    script.async = true;
    script.onload = () => {
      if (window.FamilyTree) {
        initializeFamilyTree();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [familyData]);

  const initializeFamilyTree = () => {
    const options = getOptions();
  
    const chart = new window.FamilyTree(document.getElementById("tree"), {
      mouseScrool: window.FamilyTree.none,
      scaleInitial: options.scaleInitial,
      siblingSeparation: 120,
      template: "john",
      nodeBinding: {
        field_0: "name",
        field_1: "title",
        img_0: "img",
        shape: "genderShape" // Custom shape based on gender
      }
    });
  
    chart.on('click', function(sender, args) {
      const clickedId = args.node.id;
      const newUrl = `/tree-app/${userId}?id=${clickedId}`;
      if (location.pathname + location.search !== newUrl) {
        navigate(newUrl);
      }
      return false;
    });
  
    // Function to assign square for males and circle for females
    chart.nodeShape = (node) => {
      return node.gender === "male" ? "square" : "circle";
    };
  
    chart.load(familyData);
  };
  

  const getOptions = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const fit = searchParams.get("fit");
    let scaleInitial = 1;
    if (fit === "yes") {
      scaleInitial = window.FamilyTree.match.boundary;
    }
    return { scaleInitial };
  };

  return <div id="tree" style={{ width: "100%", height: "100%" }} />;
};

export default FamilyTreeComponent;
