// alert('This code does nothing')
var theForm = document.forms['MainForm'];
//console.log(theForm);
if (!theForm) {
    theForm = document.MainForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
		//console.log(theForm);
        //theForm.submit();
		//$("#__EVENTTARGET").val(eventTarget);
		//$("#__EVENTARGUMENT").val(eventArgument);
		//console.log($("#MainForm").serialize());
		i = parseInt(eventTarget.split('$')[3].substring(3));
		console.log(i);
		console.log($("table[class='tableheader_" + i.toString() + "']"));
		$.ajax({
			type: "POST",
			url: "ResultsFindCourses.aspx",
			data: $("#MainForm").serialize(),
			success: function(data)
			{
				content = $(data).find("#content").find("div[id='pageContent_DescPageView']").find("table").eq(0).prop("outerHTML");
				$(content).insertBefore('.tableheader_' + i.toString());
			}
		});
    }
}
//__doPostBack('ctl00$pageContent$CourseList$ctl00$CourseDetailLink','');

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = '/gold/RadControls/Grid/Skins/Windows/Styles.css';
(document.head||document.documentElement).appendChild(style);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = '/gold/RadControls/TabStrip/Skins/ClassicBlue/styles.css';
(document.head||document.documentElement).appendChild(style);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = '/gold/WebResource.axd?d=KtKsb8McaZwc-0CAhFuvCAgOE12hpNj-C0BLNURZNB0G3lTk0VKCeVx8woMqKj5B-TMJHsPsfgVyjE2KYFw7m6j_ns4PYJstIatMLnteNrWliW_etik_YFNTWheMKHGnQdRzJX4BVwBQ5q76cnhbK_6x_hoWJwyIM8U6mya9XRa7xeaofIsSvcw2Bss1Lzdx0&amp;t=634079871670000000';
(document.head||document.documentElement).appendChild(style);

tables = $("table[class='datatable']")
for (i = 0; i < tables.length; i++)
	{
	var $table = tables.eq(i).find("table.tableheader").eq(0);
	var rows = $table.children().children().slice(1);
	var $newTable = $table.parent().append('<table class="tableheader_'+i.toString()+'" width="100%" cellpadding="0" cellspacing="0" border="0" align="left"><tbody></tbody></table>');
	$newTable.children().append(rows);
	$table.children().children().slice(1).remove();
	}

var links = $("a[href*='CourseDetailLink']");
var e = []
for (i = 0; i < links.length; i++)
	{
	//$("a[id='pageContent_CourseList_CourseDetailLink_".concat(i.toString(), "']")).replaceWith('<a id="pageContent_CourseList_CourseDetailLink_'.concat(i.toString(), '" href="javascript:myFunction(', i.toString(), ')">course info</a>'));
	$("a[id='pageContent_CourseList_CourseDetailLink_".concat(i.toString(), "']")).click( function() { 
		console.log(event.target.href.substring(11));
		eval(event.target.href.substring(11));
		return false; 
		} );
	}
//console.log(links);

