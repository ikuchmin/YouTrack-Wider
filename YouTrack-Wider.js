$('.ring-header-react.ring-header-react_issues.ng-scope').css({ 'max-width': '100%' });
$('#id_l\\.I\\.bigPanel').css({ 'max-width': '100%' });
$('#id_l\\.I\\.mainPanel').css({ 'max-width': '100%' });

window.addEventListener('popstate', function(e){
	var currenthash = window.location.hash;
	if (currenthash.indexOf("#newissue") >= 0 || currenthash.indexOf("&newissue") >= 0) 
	{
		$('#id_l\\.I\\.ni\\.newIssuePane').css({ 'max-width': '100%' });
	}
})

var urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('draftId'))
{
	$('.container_width.rootNewIssue').css({ 'max-width': '100%' });
	$('#id_l\\.N\\.ni\\.newIssuePane').css({
   	'padding-left': '32px',
   	'padding-right': '32px',
   	'max-width': '100%'
	});
	$('.footer-placeholder.footer-placeholder_right').css({ 'padding-left': '32px' });
} 

$( "#id_l\\.I\\.sb\\.filters_div" ).css( "width", "298px" );
$('.vert-list-wrp').css({ 'width': '255px' });

$('.center.issues-center').css({ 'margin-left': '316px' });
$('.default-layout.container.container_width.container_padding').css({ 'max-width': '100%' });