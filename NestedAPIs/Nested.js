$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    var userFirstname= data.results[0].name.first
    console.log(data.results[0].name.first)
       $("body").append(userFirstname+" ");
     var userLastname= data.results[0].name.last
     console.log(userLastname);
      $("body").append(userLastname+" ");
       var userPic = (data.results[0].picture.large);
    console.log(userPic);
     $("body").append(userPic+" ");

 }
});