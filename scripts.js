// JavaScript code
const artists = [
    {
        name: "John Doe",
        portraitUrl: "https://example.com/artist1.jpg",
        description: "John Doe is a talented artist who specializes in abstract paintings."
      },
      {
        name: "Jane Smith",
        portraitUrl: "https://example.com/artist2.jpg",
        description: "Jane Smith is a contemporary artist who creates immersive installations."
      },
      {
        name: "Bob Johnson",
        portraitUrl: "https://example.com/artist3.jpg",
        description: "Bob Johnson is a mixed media artist who explores themes of identity and memory."
      },
      {
        name: "Sarah Lee",
        portraitUrl: "https://example.com/artist4.jpg",
        description: "Sarah Lee is a painter who captures the beauty of nature in her work."
      },
      {
        name: "David Kim",
        portraitUrl: "https://example.com/artist5.jpg",
        description: "David Kim is a sculptor who transforms everyday objects into works of art."
      },
      {
        name: "Emily Wang",
        portraitUrl: "https://example.com/artist6.jpg",
        description: "Emily Wang is a performance artist who explores the body in space."
      },
      {
        name: "Alex Chen",
        portraitUrl: "https://example.com/artist7.jpg",
        description: "Alex Chen is a photographer who captures the beauty of the human form."
      },
      {
        name: "Grace Liu",
        portraitUrl: "https://example.com/artist8.jpg",
        description: "Grace Liu is a digital artist who creates immersive virtual environments."
      },
      {
        name: "Mark Davis",
        portraitUrl: "https://example.com/artist9.jpg",
        description: "Mark Davis is a street artist who brings color and vibrancy to urban spaces."
      },
      {
        name: "Lisa Kim",
        portraitUrl: "https://example.com/artist10.jpg",
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
  
