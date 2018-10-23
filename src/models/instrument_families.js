const PubSub = require('../helpers/pub_sub.js');

const InstrumentFamilies = function(data) {
  this.data = data;
};

InstrumentFamilies.prototype.bindEvents = function(){
PubSub.publish('Instruments:family-group', this.data);

PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    this.publishInstrumentInfo(selectedIndex);
})
}
InstrumentFamilies.prototype.publishInstrumentInfo = function(index){
  const selectedInstrument = this.data[index];
  PubSub.publish('Instrument:selected', selectedInstrument)
  console.log(selectedInstrument)
};

module.exports = InstrumentFamilies;
