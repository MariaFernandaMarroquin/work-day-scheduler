
$(document).ready(function () {
  //Save user input in local storage
  var saveButton = $(".saveBtn");
  saveButton.on("click", function() {
    var task = $(this).siblings(".description").val();
    var taskTime = $(this).parent().attr("id");
    localStorage.setItem(taskTime, task);
  });

  displayTask();
  
  //Compare the hour with the time-blocks to add classes
  var hour = dayjs().format("H");
  console.log("actual hour", hour)
 
  for (var i = 9; i <= 17; i++) {
    if (i === hour) {
      $("#hour-"+i).addClass("present");
    } else if (i < hour){
      $("#hour-"+i).addClass("past");
    } else if (i > hour){
      $("#hour-"+i).addClass("future");
    }
  }
    
  //Display the current date in the header of the page.
  var date = dayjs().format("dddd, MMMM D");
  $("#currentDay").text(date + "th");
});

//Display local storage info
function displayTask() {
  for (var i = 9; i <= 17; i++) {
    $("#hour-"+i + " .description").val(localStorage.getItem("hour-"+i));
  }
}


