const SelectView = require('./views/select_view.js');

const ViewResult = require('./views/view_result.js');

const instrumentData = require('./data/instrument_families.js');

const InstrumentFamilies = require("./models/instrument_families.js");
////////

  document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-info');
  const InstrumentResult = new ViewResult (infoDiv);
  InstrumentResult.bindEvents();

  const instrumentList = new InstrumentFamilies(instrumentData);
  instrumentList.bindEvents();

});
