jQuery.ajaxSetup({type: "post",dataType: "json",cache:false,complete:function(xhr,ts){xhr=null}});

function veiw_notice(n_id){var diag=new Dialog("diag_Info_"+n_id);diag.Width=620;diag.Height=360;diag.Title="查看公告";diag.isModal=false;diag.URL="/document/notice/view_notice.php?action=&cid="+n_id;diag.show();diag.OKButton.hide();diag.CancelButton.value="关 闭";};
  
function c_agent_list(actions){var diag=new Dialog("diag_agent_list");diag.Width=640;diag.Height=360;diag.Title="选择坐席工号";diag.URL="./list.php?action="+actions+"&tits="+encodeURIComponent("选择坐席工号");diag.OKEvent=setagent_list;diag.show()};function setagent_list(){Zd_DW.do_setagent_list()} 

function c_phone_login_list(actions){var diag=new Dialog("diag_phone_list");diag.Width=640;diag.Height=360;diag.Title="选择使用分机";diag.URL="/document/report/list.php?action="+actions+"&tits="+encodeURIComponent("选择使用分机");diag.OKEvent=setphone_login_list;diag.show()};function setphone_login_list(){Zd_DW.do_setphone_login_list()}
  
function c_campaign_id_list(actions){var diag=new Dialog("diag_campaign_id");diag.Width=640;diag.Height=360;diag.Title="选择业务活动";diag.URL="/document/report/list.php?action="+actions+"&tits="+encodeURIComponent("选择业务活动");diag.OKEvent=setcampaign_id_list;diag.show()};function setcampaign_id_list(){Zd_DW.do_setcampaign_id_list()}
 
function c_phone_lists(actions){var diag=new Dialog("diag_get_phone_lists");diag.Width=640;diag.Height=360;diag.Title="选择所属客户清单";diag.URL="/document/report/list.php?action="+actions+"&tits="+encodeURIComponent("选择所属客户清单");diag.OKEvent=setphone_lists;diag.show()};function setphone_lists(){Zd_DW.do_setphone_lists()}
 
function c_status_list(actions){var diag=new Dialog("diag_status_list");diag.Width=640;diag.Height=360;diag.Title="选择呼叫结果";diag.URL="/document/report/list.php?action="+actions+"&tits="+encodeURIComponent("选择呼叫结果");diag.OKEvent=setstatus_list;diag.show()};function setstatus_list(){Zd_DW.do_setstatus_list()}

function c_quality_status_list(actions){var diag=new Dialog("diag_quality_status_list");diag.Width=460;diag.Height=220;diag.Title="选择质检结果";diag.URL="/document/report/list.php?action="+actions+"&tits="+encodeURIComponent("选择质检结果");diag.OKEvent=setsetquality_status_list;diag.show()};function setsetquality_status_list(){Zd_DW.do_setquality_status_list()}
 
function c_quality_user_list(actions){	var diag=new Dialog("diag_quality_user_list");diag.Width=640;diag.Height=360;diag.Title="选择质检人员";diag.URL="/document/report/list.php?action="+actions+"&tits="+encodeURIComponent("选择质检人员");diag.OKEvent=setquality_user_list;diag.show()};function setquality_user_list(){Zd_DW.do_setquality_user_list()}

jQuery.fn.floatdiv=function(location){var isIE6=false;var Sys={};var ua=navigator.userAgent.toLowerCase();var s;(s=ua.match(/msie ([\d.]+)/))?Sys.ie=s[1]:0;if(Sys.ie&&Sys.ie=="6.0"){isIE6=true}var windowWidth,windowHeight;if(self.innerHeight){windowWidth=self.innerWidth;windowHeight=self.innerHeight}else if(document.documentElement&&document.documentElement.clientHeight){windowWidth=document.documentElement.clientWidth;windowHeight=document.documentElement.clientHeight}else if(document.body){windowWidth=document.body.clientWidth;windowHeight=document.body.clientHeight}return this.each(function(){var loc;var wrap=$("<div></div>");var top=-1;loc=location;var str=loc.top;if(typeof(str)!='undefined'){str=str.replace("px","");top=str}if(isIE6){if(top>=0){wrap=$("<div style=\"top:expression(documentElement.scrollTop+"+top+");\"></div>")}else{wrap=$("<div style=\"top:expression(documentElement.scrollTop+documentElement.clientHeight-this.offsetHeight);\"></div>")}}$("body").append(wrap);wrap.css(loc).css({position:"fixed",z_index:"999"});if(isIE6){wrap.css("position","absolute");$("body").css("background-attachment","fixed").css("background-image","url(1.txt)")}$(this).appendTo(wrap)})};
     
function d_table_i(){$("table.dataTable tbody tr").removeClass().hover(function(){$(this).addClass("over")},function(){$(this).removeClass("over")});$("table.dataTable tbody tr:odd").addClass("alt");$("[name=c_id]:checkbox:enabled").off().on("click",function(){var parent=$(this).parent().parent();if(this.checked==true){$(parent).addClass("click")}else{$(parent).removeClass("click")}})};
 
function show_div(elm){$("#"+elm).toggle();};

function file_down(url,names){location.href="/document/plugin/down.php?paths="+encodeURIComponent(url)+"&names="+encodeURIComponent(names);}
//多选框级联
function CheckItemsAll(forms,pid){$('#'+forms+' :checkbox:enabled[parentId^='+pid+']').each(function(i){p_c=$('#'+pid).is(":checked");if(p_c==true){$(this).attr("checked",p_c).parent().addClass("blue")}else{$(this).attr("checked",p_c).parent().removeClass("blue")}})};
function CheckItems(forms,pid,pid2){var ischecked;var c_count=$('#'+forms+' :checkbox:checked:enabled[parentId='+pid2+']').size();if(c_count>=1){ischecked=true}else{ischecked=false}$('#'+forms+' :checkbox[parentId='+pid+']').attr("checked",ischecked)};

//replace
String.prototype.replaceAll=function(s1,s2){return this.replace(new RegExp(s1,"gm"),s2);};
//日历层初始化
function days_ready(){var evt=window.event;Calendar.setup({inputField:"begintime",ifFormat:"%Y-%m-%d",timeFormat:"24"});Calendar.setup({inputField:"endtime",ifFormat:"%Y-%m-%d",timeFormat:"24"});};

function set_Calendar(){if($("#begintime").val()!=""&&$("#endtime").val()==""){$("#endtime").val($("#begintime").val())}if($("#begintime").val()==""&&$("#endtime").val()!=""){$("#begintime").val($("#endtime").val())}}
 
function ietruebody(){return(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body};
function drag_(layer){$(layer+" div[drag='y']").mousedown(function(event){var offset=$(this).offset();_x=event.clientX-offset.left;_y=event.clientY-offset.top;$(layer).css({"top":offset.top+"px"});$(layer).mousemove(function(event){_xx=event.clientX-_x;_yy=event.clientY-_y;$(this).css({left:_xx+"px",top:_yy+"px"});return false});return false}).find("a:eq(0)").unbind("mouseup");$(layer).mouseup(function(){$(this).unbind("mousemove");return false});}
 
function play_wav(e,layer,wav){$("#"+layer).remove();var player_="",wav_src="";player_='<object classid="clsid:22D6F312-B0F6-11D0-94AB-0080C74C7E95" name="wav_player" width="100%" height="44" align="absmiddle" id="wav_player"><param name="FileName" id="wav_src" value="'+wav+'" /><param name="Volume" value="0"><param name="showcontrols" value="1"><embed id="wav_player_wmp" style="FILTER:xray" src="'+wav+'" showstatusbar="0" showcontrols="1" volume="0" pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" width="100%" height="44" type="application/x-mplayer2"></embed></object>';$("body").append('<div class="pop_layer" id="'+layer+'"><div class="t_iframe"><iframe src="about:blank"></iframe></div><table border="0" cellpadding="0" cellspacing="0" class="pop_tb" id="pop_tb"><tr><td class="pop_t_l"></td><td class="pop_bor_t"><div class="tit_left" drag="y">收听录音&nbsp;&nbsp;<a href="" target="_blank" id="down_wav">下载</a></div><div class="tit_right"><a href="javascript:void(0);"title="关闭" onclick="stop_wav(\''+layer+'\');"></a></div></td><td class="pop_t_r"></td></tr><tr><td class="pop_bor_l"></td><td class="pop_con">'+player_+'</td><td class="pop_bor_r"></td></tr><tr><td class="pop_b_l"></td><td class="pop_bor_b"></td><td class="pop_b_r"></td></tr></table></div>');$("#"+layer).show();$("#down_wav").attr("href",wav);$("#wav_player_wmp").css({"zoom":2,"display":"block"});drag_("#"+layer);var offsetxpoint=16,offsetypoint=-10,ie=document.all,ns6=document.getElementById&&!document.all,enabletip=true;if(ie||ns6){var tipobj=document.all?document.all[layer]:document.getElementById?document.getElementById(layer):"";}if(enabletip){var curX=(ns6)?e.pageX:event.clientX+ietruebody().scrollLeft;var curY=(ns6)?e.pageY:event.clientY+ietruebody().scrollTop;var rightedge=ie&&!window.opera?ietruebody().clientWidth-event.clientX-offsetxpoint:window.innerWidth-e.clientX-offsetxpoint-20;var bottomedge=ie&&!window.opera?ietruebody().clientHeight-event.clientY-offsetypoint:window.innerHeight-e.clientY-offsetypoint;var leftedge=(offsetxpoint<0)?offsetxpoint*(-1):-1000;if(rightedge<tipobj.offsetWidth){tipobj.style.left=ie?ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px":window.pageXOffset+e.clientX-tipobj.offsetWidth+"px";}else if(curX<leftedge){tipobj.style.left="5px";}else{tipobj.style.left=curX+offsetxpoint+"px";}if(bottomedge<tipobj.offsetHeight){tipobj.style.top=ie?ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px":window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px";}else{tipobj.style.top=curY+offsetypoint+"px";tipobj.style.visibility="visible";}}};

function stop_wav(layer){document.getElementById("wav_player").Filename="";$("#wav_player_wmp").attr("src","");$("#"+layer).remove();};
//保存结果提示
function request_tip(tip,is_yes,times){if(times==""||times==null){times=4600}auto_ses=$('#auto_save_res');auto_ses.html(tip).css({right:($(document).width()-auto_ses.outerWidth())/2}).fadeIn("slow");if(is_yes=="1"){auto_ses.removeClass("red_layer").addClass("green_layer")}else{auto_ses.removeClass("green_layer").addClass("red_layer")}setTimeout("auto_ses.fadeOut('fast');",times)};

function goto_anchor(rel){if($("#"+rel).length>0){var _pos=$("#"+rel).offset().top-10;$("html,body").animate({scrollTop:_pos},800)}} 
//动态分页
function Gotopage(page,pagesize){page=parseInt(page);if(page){get_datalist(page,$("#a_ctions").val(),"list",pagesize)}};function max_pages(pagesize){var counts=$("#recounts").val(),pagesize=$("#pagesize").val(),pages="";if(pagesize==counts){pages=Math.ceil(counts/pagesize)}else if(Math.ceil(counts/pagesize)==0&&counts>0){pages=Math.ceil(counts/pagesize)+1}else{pages=Math.ceil(counts/pagesize)}$("#pagecounts").val(pages)};

function OutputHtml(page,pagesize){if(pagesize==""){pagesize=$("#pagesize").val()}if(page=="")page=1;var counts=$("#recounts").val(),pages=$("#pagecounts").val();if(parseInt(page)<1||parseInt(page)=="")page=1;if(parseInt(page)>parseInt(pages)){page=pages};if(!(parseInt(page)<=parseInt(pages)))page=pages;var Temp="",BeginNO="";if(pagesize==counts){BeginNO=(page-1)*pagesize}else{BeginNO=(page-1)*pagesize+1}var EndNO=page*pagesize;if(EndNO>counts)EndNO=counts;if(EndNO==0)BeginNO=0;$("#total").html("总数:<strong >"+counts+"</strong>&nbsp;&nbsp;显示:<strong >"+BeginNO+"-"+EndNO+"</strong>&nbsp;&nbsp;共:<strong >"+pages+"</strong>页");if(page>1&&page!==1){Temp="<a href='javascript:void(0)' onclick='Gotopage(1,"+pagesize+")'>第一页</a> <a href='javascript:void(0)' onclick='Gotopage("+(page-1)+","+pagesize+")'>上一页</a>&nbsp;"}else{Temp="第一页 上一页&nbsp;"};var pageFrontSum=3,pageBackSum=3;var pageFront=parseInt(pageFrontSum)-parseInt(parseInt(page)-1);var pageBack=parseInt(pageBackSum)-parseInt(parseInt(pages)-parseInt(page));if(parseInt(pageFront)>0&&parseInt(pageBack)<0)pageBackSum+=parseInt(pageFront);if(parseInt(pageBack)>0&&parseInt(pageFront)<0)pageFrontSum+=parseInt(pageBack);var pageFrontBegin=parseInt(page)-parseInt(pageFrontSum);if(parseInt(pageFrontBegin)<1)pageFrontBegin=1;var pageFrontEnd=parseInt(page)+parseInt(pageBackSum);pageFrontEnd=parseInt(pageFrontEnd);pages=parseInt(pages);page=parseInt(page);pageFrontBegin=parseInt(pageFrontBegin);if(pageFrontEnd>pages)pageFrontEnd=pages;if(pageFrontBegin!=1)Temp+='<a href="javascript:void(0)" onclick="Gotopage('+(page-10)+','+pagesize+')" title="前10页">..</a>';for(var i=pageFrontBegin;i<page;i++){Temp+=" <a href='javascript:void(0)' onclick='Gotopage("+i+","+pagesize+")'>"+i+"</a>"}Temp+="<strong>&nbsp;"+page+"</strong>";for(var i=page+1;i<=pageFrontEnd;i++){Temp+=" <a href='javascript:void(0)' onclick='Gotopage("+i+","+pagesize+")'>"+i+"</a>"}if(pageFrontEnd!=pages)Temp+=" <a href='javascript:void(0)' onclick='Gotopage("+(page+10)+","+pagesize+")' title='后10页'>..</a>";if(page!=pages){Temp+="&nbsp;&nbsp;<a href='javascript:void(0)' onclick='Gotopage("+(page+1)+","+pagesize+");'>下一页</a> <a href='javascript:void(0)' onclick='Gotopage("+pages+","+pagesize+")'>最末页</a>"}else{Temp+="&nbsp;&nbsp;下一页 最末页"}$("#pagelist").html(Temp+"&nbsp;&nbsp;转第：<input type='text' name='goto_page' id='goto_page' maxlength='16' size='2' onKeyUp=\"if(isNaN(value))execCommand('undo')\" onafterpaste=\"if(isNaN(value))execCommand('undo')\"/> 页 <a class='zInputBtn' hidefocus='true' href='javascript:void(0);'><input type=\"button\" name=\"goto_page_do\" id=\"goto_page_do\" value=\"跳转\"  onclick=\"Gotopage($('#goto_page').val(),"+pagesize+");\" class='inputButton'/></a>");if(EndNO==0){$("#pagelist").html("");return}document.onkeydown=function(e){var theEvent=window.event||e;var code=theEvent.keyCode||theEvent.which;if(code==37){if(page>1&&page!==1){Gotopage(page-1,pagesize)}}if(code==39){if(page!=pages){Gotopage(page+1,pagesize)}}};$("#pages").val(page);$("#goto_page").addClass("inputText").hover(function(){if($(this).hasClass("input_focus")==false){$(this).addClass("inputTextHover")}},function(){$(this).removeClass("inputTextHover")}).focus(function(){$(this).removeClass("inputText inputTextHover input_focus").addClass("input_focus")}).blur(function(){$(this).addClass("inputText").removeClass("input_focus inputTextHover")});};
 
//数据表排序
function Sorts_new(Tableid,id,pagesize){$("#sorts").val($("#"+id).attr("sort"));var cls=$("#"+id+" span")[0].className;if(cls.indexOf("_")>-1){$("#"+Tableid+" th span").addClass("sorting");$("#"+id).addClass("thOver");$("#"+Tableid+" th span").removeClass("sorting_asc sorting_desc");if(cls.indexOf("_asc")>-1){$("#"+id+" span").addClass("sorting_desc").removeClass("sorting_asc sorting");$("#order").val("desc")}else if(cls.indexOf("_desc")>-1){$("#"+id+" span").removeClass("sorting_desc sorting").addClass("sorting_asc");$("#order").val("asc")}else{$("#"+id+" span").addClass("sorting_asc").removeClass("sorting_desc sorting");$("#"+id).addClass("thOver");$("#order").val("asc")}}else{$("#"+Tableid+" th span").removeClass("sorting_asc sorting_desc");$("#"+Tableid+" th ").removeClass("thOver");$("#"+Tableid+" th span").addClass("sorting");$("#"+id+" span").removeClass("sorting").addClass("sorting_asc");$("#"+id).addClass("thOver");$("#order").val("asc")}get_datalist(parseInt($("#pages").val()),$("#a_ctions").val(),"list",pagesize);};

$.fn.extend({scrollFollow:function(d){d=d||{};d.container=d.container||$(this).parent();d.bottomObj=d.bottomObj||'';d.bottomMargin=d.bottomMargin||0;d.marginTop=d.marginTop||0;d.marginBottom=d.marginBottom||0;d.zindex=d.zindex||9999;var e=$(window);var f=$(this);if(f.length<=0){return false}var g=f.position().top;var h=d.container.height();var i=f.css("position");if(d.bottomObj==''||$(d.bottomObj).length<=0){var j=false}else{var j=true}e.scroll(function(a){var b=f.height();if(f.css("position")==i){g=f.position().top}scrollTop=e.scrollTop();topPosition=Math.max(0,g-scrollTop);if(j==true){var c=$(d.bottomObj).position().top-d.marginBottom-d.marginTop;topPosition=Math.min(topPosition,(c-scrollTop)-b)}if(scrollTop>g){if(j==true&&(g+b>c)){f.css({position:i,top:g})}else{if(window.XMLHttpRequest){f.css({position:"fixed",top:topPosition+d.marginTop,'z-index':d.zindex})}else{f.css({position:"absolute",top:scrollTop+topPosition+d.marginTop+'px','z-index':d.zindex})}}}else{f.css({position:i,top:g})}});return this}});

function get_select_opt(def,url,action,f_target,opt_mod,action_opt){if($("#get_"+f_target).val()=="0"){if(!action_opt){action_opt=""}
if(def){$("#"+f_target).append("<option value='"+def+"' title='"+def+"' del='Y' selected>"+def+"</option>");}
var datas="action="+action+action_opt+times;$.ajax({url:url,data:datas,success:function(json){var in_vals="0";if(json.counts=="1"){$("#get_"+f_target).val("1");$("#"+f_target+" option[del='Y']").remove();if(opt_mod=="def_v"||opt_mod=="none"||opt_mod=="def_n"||opt_mod=="def"){$.each(json.datalist,function(index,con){opt_list="";o_val=con.o_val;o_name=con.o_name;if(o_val==def&&def!=""){selected=" selected='selected'";in_vals="1";}else{selected="";}
if(opt_mod=="def"){$("#"+f_target).append("<option value='"+o_val+"' title='"+o_name+"' "+selected+">"+o_val+" ["+o_name+"]</option>");}else if(opt_mod=="def_v"||opt_mod=="none"){$("#"+f_target).append("<option value='"+o_val+"' title='"+o_val+"' "+selected+">"+o_val+"</option>");}else if(opt_mod=="def_n"){$("#"+f_target).append("<option value='"+o_val+"' title='"+o_val+"' "+selected+">"+o_name+"</option>");}});}else if(opt_mod=="group_def"||opt_mod=="group_v"||opt_mod=="group_n"||opt_mod=="group_a"){$.each(json.datalist,function(index,con){opt_list="";group_v="";o_val=con.o_val;o_name=con.o_name;$.each(con.o_c_list,function(f_i,con_f){c_o_val=con_f.o_val;c_o_name=con_f.o_name;if(c_o_val==def&&def!=""){selected=" selected='selected'";in_vals="1";}else{selected="";}
if(opt_mod=="group_def"||opt_mod=="group_a"){opt_list+="<option value='"+c_o_val+"' title='"+c_o_name+" "+c_o_val+"' "+selected+">"+c_o_val+" ["+c_o_name+"]</option>";}else if(opt_mod=="group_v"){opt_list+="<option value='"+c_o_val+"' title='"+c_o_name+" "+c_o_val+"' "+selected+">"+c_o_val+"</option>";}else{opt_list+="<option value='"+c_o_val+"' title='"+c_o_name+"' "+selected+">"+c_o_name+"</option>";}});if(opt_list!=""){if(opt_mod=="group_a"){group_v=" ["+o_val+"]";}
$("#"+f_target).append("<optgroup label='"+o_name+group_v+"' title='"+o_name+"'>"+opt_list+"</optgroup>");}});}else{$.each(json.datalist,function(index,con){opt_list="";$.each(con.o_c_list,function(c_index,c_con){c_o_val=c_con.o_val;c_o_name=c_con.o_name;if(c_o_val==def&&def!=""){selected=" selected='selected'";in_vals="1";}else{selected="";}
opt_list+="<option value='"+c_o_val+"' title='"+c_o_val+"' "+selected+">"+c_o_val+" ["+c_o_name+"]</option>";});$("#"+f_target).append(opt_list);});}
if(in_vals=="0"&&def){if($("#"+f_target+" option[value='"+def+"']").length==0){$("#"+f_target).append("<option value='"+def+"' selected='selected'>"+def+"</option>");}else{$("#"+f_target).val(def);}}}else{if(def&&$("#"+f_target+" option[value='"+def+"']").length==0){$("#"+f_target).append("<option value='"+def+"' selected='selected'>"+def+"</option>");}}}});}}

!function(a){function d(){a(".dropdown-backdrop").remove(),a(b).each(function(){e(a(this)).removeClass("open")})}function e(b){var c=b.attr("data-target"),d;c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,"")),d=c&&a(c);if(!d||!d.length)d=b.parent();return d}var b="[data-toggle=dropdown]",c=function(b){var c=a(b).on("click.dropdown.data-api",this.toggle);a("html").on("click.dropdown.data-api",function(){c.parent().removeClass("open")})};c.prototype={constructor:c,toggle:function(b){var c=a(this),f,g;if(c.is(".disabled, :disabled"))return;return f=e(c),g=f.hasClass("open"),d(),g||("ontouchstart"in document.documentElement&&a('<div class="dropdown-backdrop"/>').insertBefore(a(this)).on("click",d),f.toggleClass("open")),c.focus(),!1},keydown:function(c){var d,f,g,h,i,j;if(!/(38|40|27)/.test(c.keyCode))return;d=a(this),c.preventDefault(),c.stopPropagation();if(d.is(".disabled, :disabled"))return;h=e(d),i=h.hasClass("open");if(!i||i&&c.keyCode==27)return c.which==27&&h.find(b).focus(),d.click();f=a("[role=menu] li:not(.divider):visible a",h);if(!f.length)return;j=f.index(f.filter(":focus")),c.keyCode==38&&j>0&&j--,c.keyCode==40&&j<f.length-1&&j++,~j||(j=0),f.eq(j).focus()}};var f=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var d=a(this),e=d.data("dropdown");e||d.data("dropdown",e=new c(this)),typeof b=="string"&&e[b].call(d)})},a.fn.dropdown.Constructor=c,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=f,this},a(document).on("click.dropdown.data-api",d).on("click.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.dropdown.data-api",b,c.prototype.toggle).on("keydown.dropdown.data-api",b+", [role=menu]",c.prototype.keydown)}(window.jQuery)

$(document).ready(function(){$("table.dataTable tbody tr").removeClass().hover(function(){$(this).addClass("over")},function(){$(this).removeClass("over")});$("table.dataTable tbody tr:odd").addClass("alt");$("#page").removeClass("over");$(":text").addClass("inputText").hover(function(){$(this).addClass("inputTextHover")},function(){$(this).removeClass("inputTextHover")}).focus(function(){$(this).removeClass("inputText inputTextHover").addClass("input_focus")}).blur(function(){$(this).addClass("inputText").removeClass("input_focus inputTextHover")});$(":input[type='file']").addClass("inputFile");$(":input[type='image']").addClass("inputImage");$(":input[type='submit'],:input[type='reset'],:input[type='button']").attr("hidefocus","true").addClass("inputButton").wrap("<a href='javascript:void(0);' class='zInputBtn' hidefocus='true'></a>")});