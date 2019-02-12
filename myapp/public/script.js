$(function(){
    $('#buttonel').click(function(){
        $.ajax
		({
		  url: "http://localhost:3000/readme.txt",
		  cache: false,
		  success: function(data){
				console.log(data);
				$("#content").append(data);
		  },
		  error: function(error){
				  console.log(error);
				$("#content").append(error);
		  }
		});
});
});