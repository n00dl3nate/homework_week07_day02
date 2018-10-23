const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element){
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  console.log("inside select_view");
  PubSub.subscribe('Instruments:family-group', (event) => {
    const allInstruments = event.detail;
    console.log(allInstruments);
    this.populate(allInstruments);
  });
    this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;

    PubSub.publish('SelectView:change', selectedIndex);
  });
}
  SelectView.prototype.populate = function(instrumentdata){
    instrumentdata.forEach((instrument, index) => {
      const option = document.createElement('option');
      option.textContent = instrument.name;
      console.log(instrument.name,index);
      option.value = index;
      this.element.appendChild(option);
    })
  }


  module.exports = SelectView;
