const PubSub = require('../helpers/pub_sub.js');

const ViewResult = function(container){
  this.container = container;
};

ViewResult.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected', (evt) => {
    const instrument = evt.detail;
    this.display(instrument);
    console.log("ViewResult",instrument);
  });
};

ViewResult.prototype.display = function(instrument){
  this.container.innerHTML = '';
  const instrumentType = document.createElement('h2')
  instrumentType.textContent = instrument.name
  this.container.appendChild(instrumentType);

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrument.description
  this.container.appendChild(infoParagraph);

  const instrumentInclude = document.createElement('h3')
  instrumentInclude.textContent = 'Instruments Include'
  this.container.appendChild(instrumentInclude);

  var listinfo = ""
  const list = document.createElement('ul')
  instrument.instruments.forEach((item) => {
    const instruments = document.createElement('li')
    instruments.textContent = item;
    console.log(instruments,"@@@@@@@@@@@@")
    list.appendChild(instruments)
  })
  this.container.appendChild(list);
};

 module.exports = ViewResult;
