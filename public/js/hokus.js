
/**
* @param htmlFile Name of html file to load with path. E.g. pages/food.html
*/
function loadHtmlPages(htmlFile)
{
	$( "#content" ).load('pages/'+htmlFile+'.html', function() {
        $("#sidebar").load('pages/sidebar.html');
    });
}


$(document).ready(function() {
	//Load index html
    $( "#content" ).load('pages/home.html', function() {
        $("#sidebar").load('pages/sidebar.html');
    });

    //load sidebar
    $("product").load('pages/product.html');

});

//load specific page when click on main menu item
$(document).on('click','.hover',function()
{
    loadHtmlPages($(this).data('page'));
});

 //show specific food image when click on menu
$(document).on('click','.list-food a',function()
{
    $("a.food-image").hide();
    $("a."+$(this).data('image')).show();
});

//Collapse mobil menu when clcik on anchor
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});


//init google maps
function initMap() {
    var center = {lat: 45.558393, lng: 18.676007};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: center
    });
    var marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: "../pictures/marker.png"
    });
}
