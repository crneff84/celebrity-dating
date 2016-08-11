$(document).ready(function() {
  $("form#enter").submit(function(event) {
    event.preventDefault();
    var ageInput = parseInt($("input#age").val());
    var activityInput = $("input:radio[name=activity]:checked").val();
    var genderInput = $("#gender").val();



    if (activityInput === 'violence' && genderInput==='Male'){
      $("#fish").show();
    } else if(ageInput>59 && genderInput==='Female' && activityInput==='cleveland'){
      $("#betty").show();
    } else if(ageInput>=18 && genderInput==='Male' && activityInput==='sports' || activityInput==='cleveland'){
      $('#lebron').show();
    } else if(ageInput>=18 && activityInput==='violence' || activityInput==='sports' && genderInput==='Female'){
      $("#hopesolo").show();
    } else if(ageInput>=18 && genderInput==='Male' && activityInput==='physics'){
      $("#hawking").show();
    } else {
      $("#fish").show();
    }

  });

});
