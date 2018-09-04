function successAlert () {
  swal("Awesome!", "Confirmation will be sent to your email.", "success");
};

function errorAlert(){
  swal("Oops!", "Something went wrong. Please talk to member services.", "error");
};

// showBuilding functions

function showSurreyBuildings() {
  $("#richmondBuildings, #langleyBuildings").hide();

  $("#questionBuilding, #surreyBuildings").show();
};

function showRichmondBuildings() {
  $("#surreyBuildings, #langleyBuildings").hide();

  $("#questionBuilding, #richmondBuildings").show();
};

function showLangleyBuildings() {
  $("#richmondBuildings, #surreyBuildings").hide();

  $("#questionBuilding, #langleyBuildings").show();
};

// showFillerFloor function

function showFillerFloor () {
  $("#questionFloor, #fillerFloor").show();
};

// showButton function
function showApplyButton () {
  $("#applyButton").show();
};
