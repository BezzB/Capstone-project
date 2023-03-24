const speakersContainer = document.getElementById('speakers');
const data = [
  {
    id: 1,
    pic: './images/kilnam.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Babra Smith',
    designation: ' Pilot with over 37years flying experience',
    history: 'Babra Smith is a contemporary artist who creates immersive installations.',
  },
  {
    id: 2,
    pic: './images/yochai.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'John Watts',
    designation: 'Pilot with over 30years flying experience',
    history: 'John Watts is a talented artist who specializes in abstract paintings.',
  },
  {
    id: 3,
    pic: './images/sohyeong.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Emily Wang',
    designation: 'Emily Wang is a performance artist who explores the body in space',
    history: 'She is a webdeveloper, computer engineer, Burning Circle airshow sponsor.',
  },
  {
    id: 4,
    pic: './images/julia.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Bob Johnson',
    designation: 'Bob Johnson is a mixed media artist who explores themes of identity and memory',
    history: 'Bob Johnson is a mixed media artist who explores themes of identity and memory.',
  },
  {
    id: 5,
    pic: './images/lila.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Stephanie',
    designation: 'Southafrican Air news Magazine Author and Editor with 20years experience',
    history: 'She is a magazine editor and author and she will publish all activities that will be held at the event in her magazine.',
  },
  {
    id: 6,
    pic: './images/reagan.png',
    altText: 'featured speaker image',
    nameOfSpeaker: 'Sarah Lee',
    designation: 'Sarah Lee is a painter who captures the beauty of nature in her work.',
    history: 'Sarah Lee is a painter who captures the beauty of nature in her work.',
  },
];

const speakerContainer = document.createElement('section');
speakerContainer.setAttribute('class', 'featured-speakers');
speakerContainer.setAttribute('id', 'speakers');

data.forEach((speakerPara) => {
  const speakerSection = document.createElement('div');
  speakerSection.setAttribute('class', 'speaker-section');
  speakerSection.setAttribute('id', 'each-speaker');

  const imageSection = document.createElement('div');
  imageSection.setAttribute('class', 'speaker-image-section');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-image');
  image.setAttribute('src', speakerPara.pic);
  image.setAttribute('alt', speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement('div');
  contentSection.setAttribute('class', 'speaker-details');
  contentSection.setAttribute('id', 'about-speaker');

  const speakerName = document.createElement('h2');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);

  const speakerDesignation = document.createElement('p');
  speakerDesignation.setAttribute('class', 'speaker-designation');
  speakerDesignation.textContent = speakerPara.designation;
  contentSection.appendChild(speakerDesignation);

  const dotText = document.createElement('p');
  dotText.setAttribute('id', 'dots');
  dotText.textContent = '.........';
  contentSection.appendChild(dotText);

  const speakerHistory = document.createElement('p');
  speakerHistory.setAttribute('class', 'speaker-history');
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const loadSpeakers = () => speakersContainer.appendChild(speakerContainer);

window.onload(loadSpeakers());
