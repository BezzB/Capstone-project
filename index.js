// JavaScript code
const artists = [
    {
        name: "John Doe",
        portraitUrl: src="../images/speaker1.png",
        description: "John Doe is a talented artist who specializes in abstract paintings."
      },
      {
        name: "Jane Smith",
        portraitUrl: "../images/speaker2.png",
        description: "Jane Smith is a contemporary artist who creates immersive installations."
      },
      {
        name: "Bob Johnson",
        portraitUrl: "../images/speaker3.png",
        description: "Bob Johnson is a mixed media artist who explores themes of identity and memory."
      },
      {
        name: "Sarah Lee",
        portraitUrl: "../images/speaker4.png",
        description: "Sarah Lee is a painter who captures the beauty of nature in her work."
      },
      {
        name: "David Kim",
        portraitUrl: "../images/speaker5.png",
        description: "David Kim is a sculptor who transforms everyday objects into works of art."
      },
      {
        name: "Emily Wang",
        portraitUrl: "../images/speaker6.png",
        description: "Emily Wang is a performance artist who explores the body in space."
      },
      {
        name: "Alex Chen",
        portraitUrl: "../images/speaker7.png",
        description: "Alex Chen is a photographer who captures the beauty of the human form."
      },
      {
        name: "Grace Liu",
        portraitUrl: "../images/speaker8.png",
        description: "Grace Liu is a digital artist who creates immersive virtual environments."
      },
      {
        name: "Mark Davis",
        portraitUrl: "../images/speaker9.png",
        description: "Mark Davis is a street artist who brings color and vibrancy to urban spaces."
      },
      {
        name: "Lisa Kim",
        portraitUrl: "../images/speaker10.png",
        description: "Lisa Kim is a graphic designer who creates striking visual identities."
      }
    // Add more artists here
  ];
  
  const artistsContainer = document.querySelector(".artists-container");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  let startIndex = 0;
  
  function displayArtists() {
    artistsContainer.innerHTML = "";
    const endIndex = startIndex + 6 > artists.length ? artists.length : startIndex + 6;
    for (let i = startIndex; i < endIndex; i++) {
      const artist = artists[i];
      const artistElement = document.createElement("div");
      artistElement.classList.add("artist");
  
      const portraitElement = document.createElement("img");
      portraitElement.classList.add("portrait");
      portraitElement.src = artist.portraitUrl;
      portraitElement.alt = `${artist.name} Portrait`;
  
      const nameElement = document.createElement("h2");
      nameElement.classList.add("name");
      nameElement.textContent = artist.name;
  
      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("description");
      descriptionElement.textContent = artist.description;
  
      artistElement.appendChild(portraitElement);
      artistElement.appendChild(nameElement);
      artistElement.appendChild(descriptionElement);
      artistsContainer.appendChild(artistElement);
    }
  }
  
  function handlePrevBtn() {
    if (startIndex > 0) {
      startIndex -= 6;
      displayArtists();
    }
  }
  
  function handleNextBtn() {
    if (startIndex + 6 < artists.length) {
      startIndex += 6;
      displayArtists();
    }
  }
  
  prevBtn.addEventListener("click", handlePrevBtn);
  nextBtn.addEventListener("click", handleNextBtn);
  
  displayArtists();
  
