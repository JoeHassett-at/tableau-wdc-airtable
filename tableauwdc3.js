// tableauwdc-3.0.js
(function(window) {
  var tableauVersion = "3.0.0";

  if (!window.tableau) {
    window.tableau = {};
  }

  window.tableau.connectionName = "";
  window.tableau.connectionData = "";
  window.tableau.username = "";
  window.tableau.password = "";

  var registeredConnector = null;

  window.tableau.registerConnector = function(connector) {
    registeredConnector = connector;
  };

  window.tableau.makeConnector = function() {
    console.error("In WDC 3.0, tableau.makeConnector() is deprecated. Define a plain object instead.");
  };

  window.tableau.submit = function() {
    if (typeof tableau.submitCallback === "function") {
      tableau.submitCallback();
    } else {
      console.error("submitCallback is not defined. Make sure you're using the WDC Simulator or Tableau environment.");
    }
  };

  // WDC Simulator uses this to simulate phases
  window.tableau._wdcShim = {
    getConnector: function() {
      return registeredConnector;
    }
  };
})(window);
