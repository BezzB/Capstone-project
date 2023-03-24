// JavaScript code
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('active');
    menuOpen = false;
  }
});

const artists = [
  {
    name: 'John Watts',
    portraitUrl: '../images/speaker1.png',
    description: 'John Watts is a talented artist who specializes in abstract paintings.',
  },
  {
    name: 'Babra Smith',
    portraitUrl: '../images/speaker2.png',
    description: 'Babra Smith is a contemporary artist who creates immersive installations.',
  },
  {
    name: 'Bob Johnson',
    portraitUrl: '../images/speaker3.png',
    description: 'Bob Johnson is a mixed media artist who explores themes of identity and memory.',
  },
  {
    name: 'Sarah Lee',
    portraitUrl: '../images/speaker4.png',
    description: 'Sarah Lee is a painter who captures the beauty of nature in her work.',
  },
  {
    name: 'David Kim',
    portraitUrl: '../images/speaker5.png',
    description: 'David Kim is a sculptor who transforms everyday objects into works of art.',
  },
  {
    name: 'Emily Wang',
    portraitUrl: '../images/speaker6.png',
    description: 'Emily Wang is a performance artist who explores the body in space.',
  },
  {
    name: 'Alex Chen',
    portraitUrl: '../images/speaker7.png',
    description: 'Alex Chen is a photographer who captures the beauty of the human form.',
  },
  {
    name: 'Grace Liu',
    portraitUrl: '../images/speaker8.png',
    description: 'Grace Liu is a digital artist who creates immersive virtual environments.',
  },
  {
    name: 'Mark Davis',
    portraitUrl: '../images/speaker9.png',
    description: 'Mark Davis is a street artist who brings color and vibrancy to urban spaces.',
  },
  {
    name: 'Lisa Kim',
    portraitUrl: '../images/speaker10.png',
    description: 'Lisa Kim is a graphic designer who creates striking visual identities.',
  },
  // Add more artists here
];

const artistsContainer = document.querySelector('.artists-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
// const viewMoreBtn = document.querySelector('.view-more-btn');
let startIndex = 0;

function displayArtists() {
  artistsContainer.innerHTML = '';
  let endIndex;
  if (window.innerWidth <= 768) { // for mobile devices, display only 2 artists
    endIndex = startIndex + 2 > artists.length ? artists.length : startIndex + 2;
  } else {
    endIndex = startIndex + 6 > artists.length ? artists.length : startIndex + 6;
  }
  for (let i = startIndex; i < endIndex; i += 1) {
    const artist = artists[i];
    const artistElement = document.createElement('div');
    artistElement.classList.add('artist');

    const portraitElement = document.createElement('img');
    portraitElement.classList.add('portrait');
    portraitElement.src = artist.portraitUrl;
    portraitElement.alt = `${artist.name} Portrait`;

    const infoElement = document.createElement('div'); // create a new div for the artist's name and description
    infoElement.classList.add('info2');

    const nameElement = document.createElement('h2');
    nameElement.classList.add('name');
    nameElement.textContent = artist.name;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('description');
    descriptionElement.textContent = artist.description;

    infoElement.appendChild(nameElement);
    infoElement.appendChild(descriptionElement);

    artistElement.appendChild(portraitElement);
    artistElement.appendChild(infoElement);
    artistsContainer.appendChild(artistElement);
  }

  const viewMoreButton = document.createElement('button');
  viewMoreButton.classList.add('view-more');
  viewMoreButton.textContent = 'View More';

  const downArrow = document.createElement('span');
  downArrow.innerHTML = '&#9660;'; // Unicode HTML entity for down arrow
  viewMoreButton.appendChild(downArrow);

  viewMoreButton.addEventListener('click', () => {
    startIndex = endIndex;
    displayArtists();
  });

  if (endIndex < artists.length) {
    artistsContainer.appendChild(viewMoreButton);
  }
}

function handlePrevBtn() {
  if (startIndex > 0) {
    startIndex -= 6;
    displayArtists();
  }

  // Toggle visibility of "View More" button based on whether there are more artists to display
  const viewMoreBtn = document.querySelector('.view-more-btn');
  if (viewMoreBtn) {
    if (startIndex + 2 >= artists.length) {
      viewMoreBtn.style.display = 'none';
    } else {
      viewMoreBtn.style.display = 'block';
    }
  }
}

function handleNextBtn() {
  if (startIndex + 6 < artists.length) {
    startIndex += 6;
    displayArtists();
  }

  // Toggle visibility of "View More" button based on whether there are more artists to display
  const viewMoreBtn = document.querySelector('.view-more-btn');
  if (viewMoreBtn) {
    if (startIndex + 2 >= artists.length) {
      viewMoreBtn.style.display = 'none';
    } else {
      viewMoreBtn.style.display = 'block';
    }
  }
}

prevBtn.addEventListener('click', handlePrevBtn);
nextBtn.addEventListener('click', handleNextBtn);

displayArtists();

window.addEventListener('load', () => {
  displayArtists();
});