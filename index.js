

const data = [
    {
        name: "JONATHAN",
        description: " BRAND MANAGER @ PEPSI BRAND MANAGER",
        title: "CAREY",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "SOMEONE",
        description: "ELSE",
        title: "ANOTHER POSITION @ COMPANY",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "AMANDA",
        description: "SMITH",
        title: "CEO @ STARTUP",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "ROBERT",
        description: "JOHNSON",
        title: "CTO @ TECH FIRM",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "EMILY",
        description: "DAVIS",
        title: "HEAD OF MARKETING @ CORPORATE",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "MICHAEL",
        description: "BROWN",
        title: "LEAD DEVELOPER @ AGENCY",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "JESSICA",
        description: "WILSON",
        title: "PRODUCT MANAGER @ RETAIL",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    },
    {
        name: "DAVID",
        description: "",
        title: "DESIGNER @ CREATIVE STUDIO",
        imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXHyqEEcIEQzggUF5RIBe8g37M9n1guqKhg&s"
    }
];


const gridContainer = document.querySelector('.flex-container');

data.forEach(item => {
    console.log("sdfsd", item)
    const div = document.createElement('div');
    div.className = 'flex-item';
    div.innerHTML =  `<div style="height: 70px; width: 100px; background-color:blue;">Image</div>
    <div class="desc"><h4 style="line-height: 0px ">${item.name}</h4>
    <p style="font-size: 8px;" line-height; 0px>${item.description}</p>
    <P style="font-size: 10px;">${item.title}</P></div>`;

    gridContainer.appendChild(div);
});
