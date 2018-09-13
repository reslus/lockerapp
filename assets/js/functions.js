function successAlert () {
  swal("Awesome!", "Confirmation will be sent to your email.", "success");
};

function errorAlert(){
  swal("Oops!", "Something went wrong. Please talk to member services.", "error");
};

// showBuilding functions

function showSurreyBuildings() {
  hideFillerFloor();
  $("#richmondBuildings, #langleyBuildings").hide();
  $("#questionBuilding, #surreyBuildings").show();
};

function showRichmondBuildings() {
  hideFillerFloor();
  $("#surreyBuildings, #langleyBuildings").hide();
  $("#questionBuilding, #richmondBuildings").show();
};

function showLangleyBuildings() {
  hideFillerFloor();
  $("#richmondBuildings, #surreyBuildings").hide();
  $("#questionBuilding, #langleyBuildings").show();
};

// showFillerFloor & hide function

function showFillerFloor () {
  $("#questionFloor, #fillerFloor").show();
};

function hideFillerFloor () {
  $("#questionFloor, #fillerFloor").hide();
};

// showButton function
function showApplyButton () {
  $("#applyButton").show();
};
