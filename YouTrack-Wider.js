$( document ).ready(function() {
	console.log("YouTrack Wider is Online");

	function oldTheme() {
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

		function iteration() {
			myVar = setInterval(checkDialogForSavedSearch, 1000);
		}

		function checkDialogForSavedSearch() {
			if ($('div#id_l\\.I\\.sb\\.s\\.ewfd\\.editWatchFolderDlg').length > 0)
			{
				if ($('div#id_l\\.I\\.sb\\.s\\.ewfd\\.editWatchFolderDlg[style*="width: 100%;"]').length == 0)
				{
					$('#id_l\\.I\\.sb\\.s\\.ewfd\\.searchField').css({ 'width': '100%' });
					$('#id_l\\.I\\.sb\\.s\\.ewfd\\.watchFolderName').css({ 'width': '100%' });
				}			
			}		    
		}

		iteration();
	}

	var app = "";
	var loop = 1;
	var skip = 50

	var appExists = setInterval(function() {
		console.log(loop);
		if (loop > skip)
		{
			clearInterval(appExists);
			oldTheme();
		}
		else
		{
			app = $('.app__container');
	 		if ($(app).length) {
	    		clearInterval(appExists);
	    		$(app).css({ 'max-width': '100%' });
				$( "div[data-test='wikiText']" ).css({ 'max-width': '100%' });
	 		}
	 		else
	 		{
		 		if ( $( "div[baseuri='/']" ).length )
		 		{
		 			clearInterval(appExists);
					oldTheme();
		 		}
		 	}

	 		loop = loop + 1;
	 	}
	}, 100);
});