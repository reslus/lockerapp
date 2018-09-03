function alertTest () {
  swal("Awesome!", "Confirmation will be sent to your email", "success");
};

// showBuilding functions

function showSurreyBuildings() {
  $("#richmondBuildings").hide();
  $("#langleyBuildings").hide();

  $("#questionBuilding").show();
  $("#surreyBuildings").show();
};

function showRichmondBuildings() {
  $("#surreyBuildings").hide();
  $("#langleyBuildings").hide();

  $("#questionBuilding").show();
  $("#richmondBuildings").show();
};

function showLangleyBuildings() {
  $("#richmondBuildings").hide();
  $("#surreyBuildings").hide();

  $("#questionBuilding").show();
  $("#langleyBuildings").show();
};

// showFillerFloor function

function showFillerFloor () {
  $("#questionFloor").show();
  $("#fillerFloor").show();
};

// showButton function
function showApplyButton () {
  $("#applyButton").show();
};
