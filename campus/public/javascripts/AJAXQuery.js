
$(document).ready(
    function () {
      $("#" + AjaxQueryId).keydown(
        function (event) {
          let choice = $(document.querySelector(".choiceCheckbox:checked")).val();
          let current = $("#" + AjaxQueryId + ":text").val();
  
          // if the key was a backspace, remove a character
          if (8 === event.keyCode) {
            current = current.substring(0, current.length - 1);
          } else {
            // ASCII, but if focused any keydown will be sent...
            if (32 <= event.keyCode && 126 >= event.keyCode) {
              current += String.fromCharCode(event.which);
            }
          }
  
          $("#" + AjaxResultsId).empty();
          $("#" + AjaxResultsId).append(AjaxHeader);
  
          if (0 === current.length) { return; }

          if (choice === '1') {
            var AjaxQueryURL = "http://localhost:3000/teachers/searchJSON.json?query=";
            var AjaxQueryResult_firstName = "first_name";
            var AjaxQueryResult_lastName = "last_name";
            $.getJSON(AjaxQueryURL + current, function (json) {
              json.forEach(j =>
               $("#" + AjaxResultsId).append
                 (AjaxPrefix +
                 j[AjaxQueryResult_firstName] +
                 " " +
                 j[AjaxQueryResult_lastName] +
                 AjaxSuffix)
               );
            });
          } else if (choice === '2') {
            var AjaxQueryURL = "http://localhost:3000/offices/searchJSON.json?query=";
            var AjaxQueryResult_buildName = "build_name";
            var AjaxQueryResult_roomNumber = "room_number";
            $.getJSON(AjaxQueryURL + current, function (json) {
              json.forEach(j =>
               $("#" + AjaxResultsId).append
                 (AjaxPrefix +
                 j[AjaxQueryResult_buildName] +
                 " " +
                 j[AjaxQueryResult_roomNumber] +
                 AjaxSuffix)
               );
            });
          } else if (choice === '3') {
            var AjaxQueryURL = "http://localhost:3000/courses/searchJSON.json?query=";
            var AjaxQueryResult_prefix = "Prefix";
            var AjaxQueryResult_courseNumber = "Number";
            var AjaxQueryResult_description = "Description";
            $.getJSON(AjaxQueryURL + current, function (json) {
              json.forEach(j =>
               $("#" + AjaxResultsId).append
                 (AjaxPrefix +
                 j[AjaxQueryResult_prefix] +
                 " " +
                 j[AjaxQueryResult_courseNumber] +
                 ":  " +
                 j[AjaxQueryResult_description] +
                 AjaxSuffix)
               );
            });
          }
  
          
        }
      );
    }
  );