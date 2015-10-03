// alert('This code does nothing')
var theForm = document.forms['MainForm'];
console.log(theForm);
if (!theForm) {
    theForm = document.MainForm;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
		console.log(theForm);
        //theForm.submit();
		//$("#__EVENTTARGET").val(eventTarget);
		//$("#__EVENTARGUMENT").val(eventArgument);
		console.log($("#MainForm").serialize());
		$.ajax({
			type: "POST",
			url: "ResultsFindCourses.aspx",
			data: $("#MainForm").serialize(),
			success: function(data)
			{
				//$("html").html(data);
				content = $(data).find("#content").eq(0).prop("outerHTML");
				$("table[class='tableheader']").find("tr").eq(0).replaceWith($("table[class='tableheader']").find("tr").eq(0).prop('outerHTML').concat("\n<tr><td>",content,"</td></tr>"));
			}
		});
    }
}
//__doPostBack('ctl00$pageContent$CourseList$ctl00$CourseDetailLink','');
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

