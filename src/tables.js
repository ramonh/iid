
function init_table(topElemName, name)
{
    document.getElementById(topElemName).innerHTML = table_basic_layout(name).html();
}

function validate_input(datum, waehrung, betrag, beschreibung, kategorie, person)
{

    if(betrag == "") 
    {
	alert("Bitte geben Sie einen Betrag ein!");
	return false;
    }

    num = parseFloat(betrag);

    if(num <= 0 || isNaN(num))
    {
	alert(betrag + " ist keine positive Zahl!");
	return false;
    }

    return true;
}

function table_insert_row(name, 
			  datum, 
			  waehrung,
			  betrag, 
			  beschreibung, 
			  kategorie,
			  person)
{
    if(!validate_input(datum, waehrung, betrag, beschreibung, kategorie, person))
	return;

    newRow = $("\
<tr>\
  <td>"+datum+"</td>\
  <td>"+waehrung+"</td>\
  <td>"+parseFloat(betrag).toFixed(2)+"</td>\
  <td>"+beschreibung+"</td>\
  <td>"+kategorie+"</td>\
  <td>"+person+"</td>\
</tr>");
    
    $("#"+name+"-inputRow").before(newRow);
}

function table_basic_layout(name)
{

  // search box copied from
  // http://forrst.com/posts/Fancy_search_box_using_Bootstrap_2_0-dG0 

    return $("\
<div id='"+name+"-table'>\
<div class='container-fluid'>\
  <div class='row'>\
    <div class='span1'>"+name+":\</div>\
    <div class='span5'>EUR 0,00</div>\
    <div class='span2'>\
      <div class='input-append'>\
        <input placeholder='Search...'>\
        <button class='btn add-on'>\
          <i class='icon-search'></i>\
        </button>\
      </div>\
    </div> <!-- span2 -->\
  </div>   <!-- row -->\
</div>     <!-- search box container -->\
<table class='table table-condensed'>\
<tr>\
  <th>Datum</th>\
  <th>Währung</th>\
  <th>Betrag</th>\
  <th>Beschreibung</th>\
  <th>Kategorie</th>\
  <th>Person</th>\
  <th/><th/>\
</tr>\
<tr id='"+name+"-inputRow'>\
  <form>\
    <td>\
      <div class='input-append date' data-date='12-02-2012' data-date-format='dd-mm-yyyy'>\
        <input class='span2' id='"+name+"-add-date' size='16' type='text' value='12-02-2012' readonly>\
        <span class='add-on'><i class='icon-calendar'></i></span>\
      </div>\
    </td>\
    <td>\
      <select name='sel' class='span1' id='"+name+"-add-waehrung'>\
        <option value='EUR'>EUR</option>\
        <option value='USD'>USD</option>\
        <option value='GBP'>GBP</option>\
        <option value='CAD'>CAD</option>\
      </select>\
    </td>\
    <td>\
      <input type='text' class='span1' id='"+name+"-add-betrag'></input>\
    </td>\
    <td>\
      <input type='text' class='span1' id='"+name+"-add-beschreibung'></input>\
    </td>\
    <td>\
      <select name='sel' class='span1' id='"+name+"-add-kategorie'>\
        <option value='Miete'>Miete</option>\
        <option value='Wohnen'>Wohnen</option>\
      </select>\
    </td>\
    <td>\
      <select name='sel' class='span1' id='"+name+"-add-person'>\
        <option value='ich'>ich</option>\
        <option value='Selena'>Selena</option>\
      </select>\
    </td>\
    <td/><td><a \
             onClick='JavaScript:table_insert_row(\
               \""+name+"\",\
               $(\"#"+name+"-add-date\").val(),\
               $(\"#"+name+"-add-waehrung\").val(),\
               $(\"#"+name+"-add-betrag\").val(),\
               $(\"#"+name+"-add-beschreibung\").val(),\
               $(\"#"+name+"-add-kategorie\").val(),\
               $(\"#"+name+"-add-person\").val()\
             );'>Hinzufügen</a></td>\
  </form>\
</tr>\
</table>\
</div>");
}
