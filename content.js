// alert('This code does nothing')
var theForm = document.forms['MainForm'];
var states = {};
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
		//console.log(i);
		if (!(i in states))
		{
			states[i] = "";
			//console.log(i);
		}
		button = event.target.text;
		currentState = states[i];
		//console.log(currentState);
		//if ($("table[class='tableheader_" + i.toString() + "']").parent().find("#content" + i.toString()).length > 0)
		//{
		//	$("table[class='tableheader_" + i.toString() + "']").parent().find("#content" + i.toString()).remove();
		//}
		
		if (button === "General" && button != currentState) {
			$.ajax({
				type: "POST",
				url: "ResultsFindCourses.aspx",
				data: $("#MainForm").serialize(),
				success: function(data)
				{
					content = $(data).find("#content").find("div[id='pageContent_DescPageView']").children().eq(0).prop("id", "content" + i.toString()).prop("outerHTML");
					$("table[class='tableheader_" + i.toString() + "']").parent().find("#content" + i.toString()).remove();
					$(content).insertBefore('.tableheader_' + i.toString());
					states[i] = button;
				}
			});
		} else if (button === "PreRequisites" && button != currentState) {
			$.ajax({
				type: "POST",
				url: "ResultsFindCourses.aspx",
				data: $("#MainForm").serialize(),
				success: function(data)
				{
					content = $(data).find("#content").find("div[id='pageContent_PreReqPageView']").children().eq(0).prop("id", "content" + i.toString()).prop("outerHTML");
					$("table[class='tableheader_" + i.toString() + "']").parent().find("#content" + i.toString()).remove();
					$(content).insertBefore('.tableheader_' + i.toString());
					states[i] = button;
				}
			});
		} else if (button === "Restrictions" && button != currentState) {
			$.ajax({
				type: "POST",
				url: "ResultsFindCourses.aspx",
				data: $("#MainForm").serialize(),
				success: function(data)
				{
					content = $(data).find("#content").find("div[id='pageContent_RestrictionPageView']").children().eq(0).prop("id", "content" + i.toString()).prop("outerHTML");
					$("table[class='tableheader_" + i.toString() + "']").parent().find("#content" + i.toString()).remove();
					$(content).insertBefore('.tableheader_' + i.toString());
					states[i] = button;
				}
			});
		} else if (button === "Enrollment History" && button != currentState) {
			$.ajax({
				type: "POST",
				url: "ResultsFindCourses.aspx",
				async: true,
				data: $("#MainForm").serialize(),
				success: function(data)
				{
					states[i] = button;
					content = $(data).find("#content").find("div[id='pageContent_HistPageView']").children().eq(0).prop("id", "content" + i.toString());
					content.find("script").remove()
					new_img = content.find("img[title='Collapse']").prop("id", "collapse" + i.toString()).prop("outerHTML");
					content = content.find("img[title='Collapse']").parent().html("<a href='javascript:void(0)' id='collapse" + i.toString() + "'>" + new_img + "</a>").children().eq(0).parent().parent().parent().parent().parent().parent().prop("outerHTML");
					$("table[class='tableheader_" + i.toString() + "']").parent().find("#content" + i.toString()).remove();
					$(content).insertBefore('.tableheader_' + i.toString());
					
					$("a[id='collapse" + i.toString() + "']").click( function() {
						ehCollapse(event.target.id);
						return false;
					});
				}
			});
		} else {
			states[i] = "";
			$("table[class='tableheader_" + i.toString() + "']").parent().find("#content" + i.toString()).remove();
		}
    }
}

function ehCollapse(id) {
	j = parseInt(id.substring(8));
	console.log(j);
	$("a[id='" + id + "']").parent().parent().parent().children().eq(1).attr("style", "display: none");
	$("a[id='" + id + "']").parent().html("<a href='javascript:void(0)' id='expand" + j.toString() + "'><img title='Expand' src='/gold/RadControls/Grid/Skins/Windows/SinglePlus.gif' alt='Expand' style='border-width:0px;' id='expand" + j.toString() + "'></a>");
	$("a[id='expand" + j.toString() + "']").click( function() {
		ehExpand(event.target.id);
		return false;
	});
}

function ehExpand(id) {
	j = parseInt(id.substring(6));
	console.log(j);
	$("a[id='" + id + "']").parent().parent().parent().children().eq(1).attr("style", "");
	$("a[id='" + id + "']").parent().html("<a href='javascript:void(0)' id='collapse" + j.toString() + "'><img title='Collapse' src='/gold/RadControls/Grid/Skins/Windows/SingleMinus.gif' alt='Collapse' style='border-width:0px;' id='collapse" + j.toString() + "'></a>");
	$("a[id='collapse" + j.toString() + "']").click( function() {
		ehCollapse(event.target.id);
		return false;
	});
}


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
/*
var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = '/gold/WebResource.axd?d=KtKsb8McaZwc-0CAhFuvCAgOE12hpNj-C0BLNURZNB0G3lTk0VKCeVx8woMqKj5B-TMJHsPsfgVyjE2KYFw7m6j_ns4PYJstIatMLnteNrWliW_etik_YFNTWheMKHGnQdRzJX4BVwBQ5q76cnhbK_6x_hoWJwyIM8U6mya9XRa7xeaofIsSvcw2Bss1Lzdx0&amp;t=634079871670000000';
(document.head||document.documentElement).appendChild(style);
*/

tables = $("table[class='datatable']")
for (i = 0; i < tables.length; i++)
	{
	var $table = tables.eq(i).find("table.tableheader").eq(0);
	var rows = $table.children().children().slice(1);
	var $newTable = $table.parent().append('<table class="tableheader_'+i.toString()+'" width="100%" cellpadding="0" cellspacing="0" border="0" align="left"><tbody></tbody></table>');
	$newTable.children().append('<tr><td id="pageContent_CourseList_PermNbr_'+i.toString()+'" colspan="9" width="585"><table width="585" cellpadding="0" cellspacing="0" border="0" align="left"><tbody><tr><td class="tableheader" colspan="2" valign="top" width="560"><div class="fl" style="font-size:11px;">' +
			"&nbsp<a id='timeToggle_"+i.toString()+"' href='javascript:void(0);'>Collapse Times</a>"+"&nbsp&nbsp&nbsp"+
			'</div></td></tr></tbody></table></td></tr>').click( function() {
				j = parseInt(event.target.id.substring(11));
				//console.log(j);
				//console.log($("table[class='tableheader_"+j.toString()+"']").children());
				rows = $("table[class='tableheader_"+j.toString()+"']").children().children().slice(1)
				//console.log(rows);
				if (rows.attr('style') === "display: none")
				{
					rows.eq(0).attr('style', "display: initial");
					rows.eq(1).attr('style', "display: initial");
					$("tr[id='pageContent_CourseList_PrimaryRow_"+j.toString()+"']").attr('style', "display: initial");
					$("a[id='timeToggle_"+j.toString()+"']").text('Collapse Times');
				} else {
					rows.eq(0).attr('style', "display: none");
					rows.eq(1).attr('style', "display: none");
					$("tr[id='pageContent_CourseList_PrimaryRow_"+j.toString()+"']").attr('style', "display: none");
					$("a[id='timeToggle_"+j.toString()+"']").text('Show Times');
					//console.log("hidden");
				}
				
				return false;
			});
	$newTable.children().append(rows);
	$table.children().children().slice(1).remove();
	
	link = $table.find(".fl").eq(1).remove().children();
	$table.children().append('<tr><td id="pageContent_CourseList_PermNbr_'+i.toString()+'" colspan="9" width="585"><table width="585" cellpadding="0" cellspacing="0" border="0" align="left"><tbody><tr><td colspan="2" valign="top" width="560"><div class="fl" style="font-size:11px;">' +
			"&nbsp"+
			link.text("General").prop("outerHTML")+"&nbsp&nbsp&nbsp"+
			link.text("PreRequisites").prop("outerHTML")+"&nbsp&nbsp&nbsp"+
			link.text("Restrictions").prop("outerHTML")+"&nbsp&nbsp&nbsp"+
			link.text("Enrollment History").prop("outerHTML")+"&nbsp&nbsp&nbsp"+
			'</div></td></tr></tbody></table></td></tr>');
	}

var links = $("a[href*='CourseDetailLink']");
var e = []
for (i = 0; i < links.length; i++)
	{
	//$("a[id='pageContent_CourseList_CourseDetailLink_".concat(i.toString(), "']")).replaceWith('<a id="pageContent_CourseList_CourseDetailLink_'.concat(i.toString(), '" href="javascript:myFunction(', i.toString(), ')">course info</a>'));
	$("a[id='pageContent_CourseList_CourseDetailLink_".concat(i.toString(), "']")).click( function() { 
		//console.log(event.target.href.substring(11));
		eval(event.target.href.substring(11));
		return false; 
		} );
	}
//console.log(links);

