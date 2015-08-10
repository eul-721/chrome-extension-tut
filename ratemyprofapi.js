var RATE_MY_PROF_BASE = "http://www.ratemyprofessor.com/"

//This function makes a search query to ratemyprofessor.com and returns a result
//param prof_name should be in the format of "(Last name), (Initials)"
// search for last name only
function request_prof(prof_last_name){
  var search_prefix = "?query=Simon+Fraser+University+%7C+";
  console.log(RATE_MY_PROF_BASE + "search.jsp" +search_prefix + prof_last_name);
  $.ajax({
    //url: RATE_MY_PROF_BASE + "#/search.jsp" +search_prefix + prof_last_name,
    //url: "http://www.google.com",
    url: "http://www.ratemyprofessor.com/search.jsp",
    data : 'queryBy=teacherName&schoolName=Simon+Fraser+University&queryoption=HEADER&query='+prof_last_name+'&facetSearch=false',
    context: document.body,
    method: "POST"
  }).done(function(data){
    console.log(data)
  })

}
