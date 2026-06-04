// @includepath ~/Documents/;%USERPROFILE%Documents; 
// @include basiljs/basil.js; 
 

function draw() {  

// GUI



/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":36,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"text":"Micro Type","preferredSize":[0,0],"margins":16,"orientation":"row","spacing":10,"alignChildren":["left","top"],"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"enabled":true}},"item-1":{"id":1,"type":"Panel","parentId":20,"style":{"text":"Microtypography Interventions","preferredSize":[0,205],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-4":{"id":4,"type":"StaticText","parentId":6,"style":{"text":"Insert White Space","justify":"left","preferredSize":[0,0],"alignment":null,"varName":"Insert","helpTip":null,"softWrap":true,"creationProps":{"truncate":"none","multiline":false,"scrolling":false},"enabled":true}},"item-6":{"id":6,"type":"Group","parentId":1,"style":{"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null,"varName":null,"enabled":true}},"item-8":{"id":8,"type":"Checkbox","parentId":1,"style":{"text":"All","preferredSize":[0,0],"alignment":null,"varName":"all","helpTip":null,"enabled":true,"checked":true}},"item-19":{"id":19,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-20":{"id":20,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-21":{"id":21,"type":"Panel","parentId":19,"style":{"text":"Replace","preferredSize":[0,100],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-31":{"id":31,"type":"Panel","parentId":19,"style":{"text":"Margin Options","preferredSize":[0,100],"margins":10,"orientation":"column","spacing":10,"alignChildren":["fill","top"],"alignment":null,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"enabled":true}},"item-35":{"id":35,"type":"Checkbox","parentId":31,"style":{"text":"Optical Margin Alignment","preferredSize":[0,0],"alignment":null,"checked":true,"varName":"OpticalMarginAlignment","helpTip":"Lets punctuation marks (like quotes, commas, hyphens) and the edges of certain letters (like 'W' or 'A') \"hang\" outside the bounding text box.","enabled":true}},"item-36":{"id":36,"type":"Group","parentId":0,"style":{"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":5,"alignChildren":["fill","top"],"alignment":null,"varName":null,"enabled":true}},"item-37":{"id":37,"type":"Button","parentId":36,"style":{"text":"OK","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"ok","helpTip":null,"enabled":true}},"item-38":{"id":38,"type":"Button","parentId":36,"style":{"text":"Cancel","justify":"center","preferredSize":[0,0],"alignment":null,"varName":"cancel","helpTip":null,"enabled":true}},"item-45":{"id":45,"type":"DropDownList","parentId":6,"style":{"enabled":true,"varName":"Selection","text":"DropDownList","listItems":"All Pages, -, Current Page, -, Selection","preferredSize":[0,0],"alignment":null,"selection":0,"helpTip":null}},"item-46":{"id":46,"type":"Checkbox","parentId":21,"style":{"enabled":true,"varName":"SZ","text":"ß","preferredSize":[0,0],"alignment":null,"helpTip":"Replace ß with ss (German to Swiss spelling norm)"}},"item-47":{"id":47,"type":"Panel","parentId":19,"style":{"enabled":true,"varName":null,"creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Numerals","preferredSize":[0,100],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-48":{"id":48,"type":"Group","parentId":47,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-49":{"id":49,"type":"StaticText","parentId":48,"style":{"enabled":true,"varName":"ReduceSize","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"Reduce Size","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":"Slightly reduce the font size of numbers. Since numerals often appear more substantial than lowercase letters, reducing their size (by approximately 0.5 to 2 pt) allows them to harmonize better with the rest of the body text."}},"item-50":{"id":50,"type":"EditText","parentId":48,"style":{"enabled":true,"varName":null,"creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"0.5","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-51":{"id":51,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"WTVY","text":". W. T. V. Y","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-52":{"id":52,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"Parathesis","text":"{[()]}","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-53":{"id":53,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"semiColon","text":":;","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-54":{"id":54,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"Guillemets","text":"« »","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-55":{"id":55,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"","text":"/","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-56":{"id":56,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"Time","text":"Mo–So / 8:30–16:30 Uhr","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-57":{"id":57,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"City","text":"From City–To City","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-58":{"id":58,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"","text":"...","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-59":{"id":59,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"Dates","text":"Dates","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-60":{"id":60,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"Phonenumbers","text":"Phonenumbers","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-61":{"id":61,"type":"Checkbox","parentId":1,"style":{"enabled":true,"varName":"Units","text":"Units (Meter, Gramm etc.)","preferredSize":[0,0],"alignment":null,"helpTip":null,"checked":true}},"item-62":{"id":62,"type":"StaticText","parentId":63,"style":{"enabled":true,"varName":"About","creationProps":{"truncate":"none","multiline":false,"scrolling":false},"softWrap":false,"text":"?","justify":"center","preferredSize":[0,0],"alignment":"center","helpTip":"This tool was created by Patrick Fischer at IDCE, HGK Basel, FHNW using basil.js and Sublime. It was developed as part of the \"Generative Toolmaking\" module under the supervision of Ted Davis. The tool automates detailed typographic adjustments, a task for which InDesign lacks native functions. By applying fixed rules within the code, the process is unified and optimized, saving significant time while ensuring consistent results. All rights are reserved by Patrick Fischer. Website: fischerpatrick.ch."}},"item-63":{"id":63,"type":"Group","parentId":0,"style":{"enabled":true,"varName":null,"preferredSize":[0,0],"margins":0,"orientation":"column","spacing":10,"alignChildren":["left","bottom"],"alignment":"bottom"}}},"order":[0,20,1,6,4,45,8,51,52,55,53,58,54,56,57,59,60,61,19,21,46,31,35,47,48,49,50,36,37,38,63,62],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"functionWrapper":false,"compactCode":false,"showDialog":true,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// DIALOG
// ======
var dialog = new Window("dialog"); 
    dialog.text = "Thin Hair Setter"; 
    dialog.orientation = "row"; 
    dialog.alignChildren = ["left","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

// GROUP1
// ======
var group1 = dialog.add("group", undefined, {name: "group1"}); 
    group1.orientation = "column"; 
    group1.alignChildren = ["fill","top"]; 
    group1.spacing = 10; 
    group1.margins = 0; 

// PANEL1
// ======
var panel1 = group1.add("panel", undefined, undefined, {name: "panel1"}); 
    panel1.text = "Microtypography Interventions"; 
    panel1.preferredSize.height = 205; 
    panel1.orientation = "column"; 
    panel1.alignChildren = ["left","top"]; 
    panel1.spacing = 10; 
    panel1.margins = 10; 

// GROUP2
// ======
var group2 = panel1.add("group", undefined, {name: "group2"}); 
    group2.orientation = "row"; 
    group2.alignChildren = ["left","center"]; 
    group2.spacing = 10; 
    group2.margins = 0; 

var Insert = group2.add("statictext", undefined, undefined, {name: "Insert"}); 
    Insert.text = "Insert White Space"; 

var Selection_array = ["All Pages","Current Page","Selection"];
var Selection = group2.add("dropdownlist", undefined, undefined, {name: "Selection", items: Selection_array}); 
    Selection.selection = 0; 

// PANEL1
// ======
var all = panel1.add("checkbox", undefined, undefined, {name: "all"}); 
    all.text = "All"; 
    all.value = true; 

var WTVY = panel1.add("checkbox", undefined, undefined, {name: "WTVY"}); 
    WTVY.text = ". W. T. V. Y"; 
    WTVY.value = true; 

var Parathesis = panel1.add("checkbox", undefined, undefined, {name: "Parathesis"}); 
    Parathesis.text = "{[()]}"; 
    Parathesis.value = true; 

var checkbox1 = panel1.add("checkbox", undefined, undefined, {name: "checkbox1"}); 
    checkbox1.text = "/"; 
    checkbox1.value = true; 

var semiColon = panel1.add("checkbox", undefined, undefined, {name: "semiColon"}); 
    semiColon.text = ":;"; 
    semiColon.value = true; 

var checkbox2 = panel1.add("checkbox", undefined, undefined, {name: "checkbox2"}); 
    checkbox2.text = "..."; 
    checkbox2.value = true; 

var Guillemets = panel1.add("checkbox", undefined, undefined, {name: "Guillemets"}); 
    Guillemets.text = "« »"; 
    Guillemets.value = true; 

var Time = panel1.add("checkbox", undefined, undefined, {name: "Time"}); 
    Time.text = "Mo–So / 8:30–16:30 Uhr"; 
    Time.value = true; 

var City = panel1.add("checkbox", undefined, undefined, {name: "City"}); 
    City.text = "From City–To City"; 
    City.value = true;

 var Ident = panel1.add("checkbox", undefined, undefined, {name: "Ident"}); 
    Ident.text = "Idents"; 
    Ident.value = true;

var Abbreviations = panel1.add("checkbox", undefined, undefined, {name: "Abbreviations"}); 
    Abbreviations.text = "Abbreviations"; 
    Abbreviations.value = true;

var Dates = panel1.add("checkbox", undefined, undefined, {name: "Dates"}); 
    Dates.text = "Dates"; 
    Dates.value = true; 

var Phonenumbers = panel1.add("checkbox", undefined, undefined, {name: "Phonenumbers"}); 
    Phonenumbers.text = "Phonenumbers"; 
    Phonenumbers.value = true; 

var Units = panel1.add("checkbox", undefined, undefined, {name: "Units"}); 
    Units.text = "Units (Meter, Gramm etc.)"; 
    Units.value = true; 

// GROUP3
// ======
var group3 = dialog.add("group", undefined, {name: "group3"}); 
    group3.orientation = "column"; 
    group3.alignChildren = ["fill","top"]; 
    group3.spacing = 10; 
    group3.margins = 0; 

// PANEL2
// ======
var panel2 = group3.add("panel", undefined, undefined, {name: "panel2"}); 
    panel2.text = "Replace"; 
    panel2.preferredSize.height = 100; 
    panel2.orientation = "column"; 
    panel2.alignChildren = ["fill","top"]; 
    panel2.spacing = 10; 
    panel2.margins = 10; 

var SZ = panel2.add("checkbox", undefined, undefined, {name: "SZ"}); 
    SZ.helpTip = "Replace ß with ss (German to Swiss spelling norm)"; 
    SZ.text = "ß"; 


// All Cheboxes

var microCheckboxes = [WTVY, Parathesis, checkbox1, semiColon, checkbox2, Guillemets, Time, City, Ident, Abbreviations, Dates, Phonenumbers, Units];

//  Wenn "All" geklickt wird
all.onClick = function() {
    for (var i = 0; i < microCheckboxes.length; i++) {
        microCheckboxes[i].value = all.value;
    }
};

// Wenn eine einzelne Checkbox geklickt wird prüft ob "All" korrekt bleibt
var updateAllCheckbox = function() {
    var allChecked = true;
    for (var i = 0; i < microCheckboxes.length; i++) {
        if (microCheckboxes[i].value === false) {
            allChecked = false;
            break;
        }
    }
    all.value = allChecked;
};

// Verknüpfe die Funktion mit jeder Einzel-Checkbox
for (var j = 0; j < microCheckboxes.length; j++) {
    microCheckboxes[j].onClick = updateAllCheckbox;
}
// --------------------------------------

// PANEL3
// ======
var panel3 = group3.add("panel", undefined, undefined, {name: "panel3"}); 
    panel3.text = "Margin Options"; 
    panel3.preferredSize.height = 100; 
    panel3.orientation = "column"; 
    panel3.alignChildren = ["fill","top"]; 
    panel3.spacing = 10; 
    panel3.margins = 10; 

var OpticalMarginAlignment = panel3.add("checkbox", undefined, undefined, {name: "OpticalMarginAlignment"}); 
    OpticalMarginAlignment.helpTip = "Lets punctuation marks (like quotes, commas, hyphens) and the edges of certain letters (like 'W' or 'A') \u0022hang\u0022 outside the bounding text box."; 
    OpticalMarginAlignment.text = "Optical Margin Alignment"; 
    OpticalMarginAlignment.value = true; 

// PANEL4
// ======
var panel4 = group3.add("panel", undefined, undefined, {name: "panel4"}); 
    panel4.text = "Numerals"; 
    panel4.preferredSize.height = 100; 
    panel4.orientation = "column"; 
    panel4.alignChildren = ["left","top"]; 
    panel4.spacing = 10; 
    panel4.margins = 10; 

// GROUP4
// ======
var group4 = panel4.add("group", undefined, {name: "group4"}); 
    group4.orientation = "row"; 
    group4.alignChildren = ["left","center"]; 
    group4.spacing = 10; 
    group4.margins = 0; 

var ReduceSize = group4.add("statictext", undefined, undefined, {name: "ReduceSize"}); 
    ReduceSize.helpTip = "Slightly reduce the font size of numbers. Since numerals often appear more substantial than lowercase letters, reducing their size (by approximately 0.5 to 2 pt) allows them to harmonize better with the rest of the body text."; 
    ReduceSize.text = "Reduce Size"; 

var edittext1 = group4.add('edittext {properties: {name: "edittext1"}}'); 
    edittext1.text = "0.5"; 

// GROUP5
// ======
var group5 = dialog.add("group", undefined, {name: "group5"}); 
    group5.orientation = "column"; 
    group5.alignChildren = ["fill","top"]; 
    group5.spacing = 5; 
    group5.margins = 0; 

var ok = group5.add("button", undefined, undefined, {name: "ok"}); 
    ok.text = "Run"; 

var cancel = group5.add("button", undefined, undefined, {name: "cancel"}); 
    cancel.text = "Cancel"; 

// GROUP6
// ======
var group6 = dialog.add("group", undefined, {name: "group6"}); 
    group6.orientation = "column"; 
    group6.alignChildren = ["left","bottom"]; 
    group6.spacing = 10; 
    group6.margins = 0; 
    group6.alignment = ["left","bottom"]; 

var About = group6.add("statictext", undefined, undefined, {name: "About"}); 
    About.helpTip = "Thin Hair Setter automates detailed microtypographic adjustments in InDesign — spacing, punctuation, numerals and more. Built by Patrick Fischer at IDCE, HGK Basel FHNW, as part of the Generative Toolmaking module under the supervision of Ted Davis. Visit my website: fischerpatrick.ch";
    About.text = "?"; 
    About.justify = "center"; 
    About.alignment = ["center","bottom"]; 


    ok.onClick = function() {
    dialog.close(1);
};
cancel.onClick = function() {
    dialog.close(0);
};

var savedSelection = app.selection;

var result = dialog.show();

if (result === 1) {

    if (Selection.selection.index === 0) { // All Pages
        var allFrames = app.documents.item(0).textFrames;
        for (var i = 0; i < allFrames.length; i++) {
            doMicroType(allFrames[i]);
        }

    } else if (Selection.selection.index === 1) { // Current Page
        var currentSpread = app.activeWindow.activeSpread;
        var spreadPages = currentSpread.pages;
        for (var p = 0; p < spreadPages.length; p++) {
            var pageFrames = spreadPages.item(p).textFrames;
            for (var i = 0; i < pageFrames.length; i++) {
                doMicroType(pageFrames[i]);
            }
        }

    } else if (Selection.selection.index === 2) { // Selection
        for (var i = 0; i < savedSelection.length; i++) {
            doMicroType(savedSelection[i]);
        }
    }

} 

	 //PointSIze

	app.findGrepPreferences = NothingEnum.nothing;
	app.findGrepPreferences.findWhat = '\\d+';

	var found = app.documents.item(0).findGrep();

	for (var i = found.length - 1; i >= 0; i--) {
	    var currentSize = found[i].pointSize;
	    typo(found[i], 'pointSize', currentSize - edittext1.text);
	}

	app.findGrepPreferences = NothingEnum.nothing;

  //  = 1/8
  //  = 1/24

     
function doMicroType(sel){

  var weekdays = [
      // Deutsch
      "Mo", "Di", "Mi", "Do", "Fr", "Sa", "So",
      "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag",
      // Englisch
      "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun",
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
    ];

	     //typo(sel, 'hyphenation', true)

	 //Optical Margin Allignment

	if (OpticalMarginAlignment.value == true) {
	sel.parentStory.storyPreferences.opticalMarginAlignment = true;
	}

	    // MICRO TYPE
	  

	//Phone Numbers

	  if (Phonenumbers.value == true) {
	 
	 var phonePattern4 = new RegExp('(\\+)(\\d{2})(\\(0\\))(\\d{2})(\\d{3})(\\d{2})(\\d{2})')
	 sel.contents = sel.contents.replace(phonePattern4, '$1$2 $3$4 $5 $6 $7')

	  var phonePattern4_2 = new RegExp('(\\+)(\\d{2}) (\\(0\\)) (\\d{2}) (\\d{3}) (\\d{2}) (\\d{2})')
	 sel.contents = sel.contents.replace(phonePattern4_2, '$1$2 $3$4 $5 $6 $7')


	  var phonePattern3 = new RegExp('(\\+)(\\d{2})(\\d{2})(\\d{3})(\\d{2})(\\d{2})')
	 sel.contents = sel.contents.replace(phonePattern3, '$1$2 $3 $4 $5 $6')

	   var phonePattern3_2 = new RegExp('(\\+)(\\d{2}) (\\d{2}) (\\d{3}) (\\d{2}) (\\d{2})')
	 sel.contents = sel.contents.replace(phonePattern3_2, '$1$2 $3 $4 $5 $6')

	   var phonePattern2 = new RegExp('(\\d{4})(\\d{2})(\\d{3})(\\d{2})(\\d{2})')
	 sel.contents = sel.contents.replace(phonePattern2, '$1 $2 $3 $4 $5')

	  var phonePattern2_2 = new RegExp('(\\d{4}) (\\d{2}) (\\d{3}) (\\d{2}) (\\d{2})')
	 sel.contents = sel.contents.replace(phonePattern2_2, '$1 $2 $3 $4 $5')

	 var phonePattern1 = new RegExp('(\\d{3})(\\d{3})(\\d{2})(\\d{2})')
	 sel.contents = sel.contents.replace(phonePattern1, '$1 $2 $3 $4')

	var phonePattern1_2 = new RegExp('(\\d{3}) (\\d{3}) (\\d{2}) (\\d{2})')
	 sel.contents = sel.contents.replace(phonePattern1_2, '$1 $2 $3 $4')

	}




	//Paratheses

	if (Parathesis.value == true) {
	 
	 var parantheseOpen = new RegExp('\\(', 'g');
	 sel.contents = sel.contents.replace(parantheseOpen, '( ');

	var parantheseClosed = new RegExp('\\)', 'g');
	 sel.contents = sel.contents.replace(parantheseClosed, ' )');

	 //Brackets

	 var bracketOpen = new RegExp('\\[', 'g');
	 sel.contents = sel.contents.replace(bracketOpen, '[ ');

	var bracketClosed = new RegExp('\\]', 'g');
	 sel.contents = sel.contents.replace(bracketClosed, ' ]');

	 //CurlyBrackets

	 var curlyBracketOpen = new RegExp('\\{', 'g');
	 sel.contents = sel.contents.replace(curlyBracketOpen, '[ ');

	var curlyBracketClosed = new RegExp('\\}', 'g');
	 sel.contents = sel.contents.replace(curlyBracketClosed, ' ]');

	}



	 //Guillemets

	if(Guillemets.value == true) {

	var guillemetOpen = new RegExp('\\«', 'g');
	 sel.contents = sel.contents.replace(guillemetOpen, '« ');

	var guillemetClosed = new RegExp('\\»', 'g');
	 sel.contents = sel.contents.replace(guillemetClosed, ' »');

	}


	 //WTYV

	if(WTVY.value == true){

	 var whiteSpaceW = new RegExp('\\. W', 'g');
	 sel.contents = sel.contents.replace(whiteSpaceW, '. W');

	var whiteSpaceT = new RegExp('\\. T', 'g');
	 sel.contents = sel.contents.replace(whiteSpaceT, '. T');

	 var whiteSpaceY = new RegExp('\\. Y', 'g');
	 sel.contents = sel.contents.replace(whiteSpaceY, '. Y');

	var whiteSpaceV = new RegExp('\\. V', 'g');
	 sel.contents = sel.contents.replace(whiteSpaceV, '. V');

	}



	 //z.B.

	if(Abbreviations.value == true) {

	  var exampleGiven = new RegExp('\\z.B. ', 'g');
	 sel.contents = sel.contents.replace(exampleGiven, 'z. B. ');

	  var exampleGivenUppercase = new RegExp('\\Z.B. ', 'g');
	 sel.contents = sel.contents.replace(exampleGivenUppercase, 'Z. B. ');

	   var DH = new RegExp('d.h. ', 'g');
	 sel.contents = sel.contents.replace(DH, 'd. h. ');

	  var DHUppercase = new RegExp('D.h. ', 'g');
	 sel.contents = sel.contents.replace(DHUppercase, 'D. h. ');

	}

	 //:;?!

	 if(semiColon.value == true) {

	  var colon = new RegExp('\\:', 'g');
	 sel.contents = sel.contents.replace(colon, ' :');

	   var semiColon1 = new RegExp('\\;', 'g');
	 sel.contents = sel.contents.replace(semiColon1, ' ;');

	 var questionMark = new RegExp('\\?', 'g');
	 sel.contents = sel.contents.replace(questionMark, ' ?');

	  var exclamationMark = new RegExp('\\!', 'g');
	 sel.contents = sel.contents.replace(exclamationMark, ' !');

	}

	//Slash

	 	if(checkbox1.value == true) {

	 var slashWords = new RegExp('(\\w+)/(\\w+)', 'g');
	 sel.contents = sel.contents.replace(slashWords, '$1 / $2');

	}

	//Weekdays

	if(Time.value == true) {

	  var dashDay = new RegExp('(' + weekdays.join('|') + ')(\\–|-)(' + weekdays.join('|') + ')', 'g');
	 sel.contents = sel.contents.replace(dashDay, '$1 – $3');

	  var dashDaySpace = new RegExp('(' + weekdays.join('|') + ') (\\–|-) (' + weekdays.join('|') + ')', 'g');
	 sel.contents = sel.contents.replace(dashDaySpace, '$1 – $3');

	  var dashTime = new RegExp('(\\d+)(\\–|-)(\\d+)', 'g');
  sel.contents = sel.contents.replace(dashTime, '$1 – $3');

    var dashTime = new RegExp('(\\d+\\.)(\\–|-)(\\d+\\.)', 'g');
  sel.contents = sel.contents.replace(dashTime, '$1 – $3');


	}

	 	//Cities

	if(City.value == true){

	 var cities = new RegExp('([A-ZÄÖÜ][a-zA-ZäöüÄÖÜ]+) (\\–|-) ([A-ZÄÖÜ][a-zA-ZäöüÄÖÜ]+)', 'g');
	 sel.contents = sel.contents.replace(cities, '$1 – $3');

	  var citiesSpace = new RegExp('([A-ZÄÖÜ][a-zA-ZäöüÄÖÜ]+)(\\–|-)([A-ZÄÖÜ][a-zA-ZäöüÄÖÜ]+)', 'g');
	 sel.contents = sel.contents.replace(citiesSpace, '$1 – $3');

	}

	 //Ellipsis, Ident, Dash

	if(checkbox2.value == true) {

	 var ellipsis = new RegExp('(\\w+)(\\.\\.\\.)(\\w+)', 'g');
	 sel.contents = sel.contents.replace(ellipsis, '$1 $2 $3');

	}

	if(Ident.value == true) {

	 var ident = new RegExp('(\\w+)(\\–|-)([a-zäöü][\\w]+)', 'g');
	 sel.contents = sel.contents.replace(ident, '$1 – $3');

	 var wrongIdentSpace = new RegExp('(\\w+) (\\-) (\\w+)', 'g');
	 sel.contents = sel.contents.replace(wrongIdentSpace, '$1 – $3');

	}

	  //Dates

	 	if(Dates.value == true){

	   var date = new RegExp('(\\d{1,2})\\.(\\d{1,2})\\.(\\d{2,4})', 'g');
	 sel.contents = sel.contents.replace(date, '$1. $2. $3');

	    var dateSpace = new RegExp('(\\d{1,2})\\. (\\d{1,2})\\. (\\d{2,4})', 'g');
	 sel.contents = sel.contents.replace(dateSpace, '$1. $2. $3');

	 var dateWord = new RegExp('(\\d+)\\.([a-z,äöü,A-Z,ÄÖÜ]+)', 'g');
	 sel.contents = sel.contents.replace(dateWord, '$1. $2');

	  var dateWordSpace = new RegExp('(\\d+)\\. ([-z,äöü,A-Z,ÄÖÜ]+)', 'g');
	 sel.contents = sel.contents.replace(dateWordSpace, '$1. $2');

	  var halfDate = new RegExp('(\\d{1,2})\\.(\\d{1,2})\\.', 'g');
	 sel.contents = sel.contents.replace(halfDate, '$1. $2.');

	}

	 //Units

	if(Units.value == true){

	 	 var kilometerSpace = new RegExp('(\\d+) (km)', 'g');
	 sel.contents = sel.contents.replace(kilometerSpace, '$1 $2');

	  var kilometer = new RegExp('(\\d+)(km)', 'g');
	 sel.contents = sel.contents.replace(kilometer, '$1 $2');

	 	   var centimeterSpace = new RegExp('(\\d+) (cm)', 'g');
	 sel.contents = sel.contents.replace(centimeterSpace, '$1 $2');

	  var centimeter = new RegExp('(\\d+)(cm)', 'g');
	 sel.contents = sel.contents.replace(centimeter, '$1 $2');

	 	  var milimeterSpace = new RegExp('(\\d+) (mm)', 'g');
	 sel.contents = sel.contents.replace(milimeterSpace, '$1 $2');

	  var milimeter = new RegExp('(\\d+)(mm)', 'g');
	 sel.contents = sel.contents.replace(milimeter, '$1 $2');

 	var meterSpace = new RegExp('(\\d+) (m)(?![mk])', 'g');
    sel.contents = sel.contents.replace(meterSpace, '$1 $2');

    var meter = new RegExp('(\\d+)(m)(?![mk23])', 'g');
    sel.contents = sel.contents.replace(meter, '$1 $2');

	   var kilogrammSpace = new RegExp('(\\d+) (\\kg)', 'g');
	 sel.contents = sel.contents.replace(kilogrammSpace, '$1 $2');

	  var kilogramm = new RegExp('(\\d+)(\\kg)', 'g');
	 sel.contents = sel.contents.replace(kilogramm, '$1 $2');

	  var grammSpace = new RegExp('(\\d+) (g)(?!k)', 'g');
    sel.contents = sel.contents.replace(grammSpace, '$1 $2');

    var gramm = new RegExp('(\\d+)(g)(?!k)', 'g');
    sel.contents = sel.contents.replace(gramm, '$1 $2');

	  var mililiterSpace = new RegExp('(\\d+) (ml)', 'g');
	 sel.contents = sel.contents.replace(mililiterSpace, '$1 $2');

	  var mililiter = new RegExp('(\\d+)(ml)', 'g');
	 sel.contents = sel.contents.replace(mililiter, '$1 $2');

	  var deciliterSpace = new RegExp('(\\d+) (dl)', 'g');
	 sel.contents = sel.contents.replace(deciliterSpace, '$1 $2');

	  var deciliter = new RegExp('(\\d+)(dl)', 'g');
	 sel.contents = sel.contents.replace(deciliter, '$1 $2');

    var literSpace = new RegExp('(\\d+) (l)(?![md])', 'g');
    sel.contents = sel.contents.replace(literSpace, '$1 $2');

    var liter = new RegExp('(\\d+)(l)(?![md])', 'g');
    sel.contents = sel.contents.replace(liter, '$1 $2');

	 var celsiusSpace = new RegExp('(\\d+) (°C)', 'g');
	 sel.contents = sel.contents.replace(celsiusSpace, '$1 $2');

	  var celsius = new RegExp('(\\d+)(°C)', 'g');
	 sel.contents = sel.contents.replace(celsius, '$1 $2');

	 var euro = new RegExp('(\\d+)(€)', 'g');
	  sel.contents = sel.contents.replace(euro, '$1 $2');

 var euroSpace = new RegExp('(\\d+) (€)', 'g');
	  sel.contents = sel.contents.replace(euroSpace, '$1 $2');

	  	 var pounds = new RegExp('(\\d+)(£)', 'g');
	  sel.contents = sel.contents.replace(pounds, '$1 $2');

 var poundsSpace = new RegExp('(\\d+) (£)', 'g');
	  sel.contents = sel.contents.replace(poundsSpace, '$1 $2');

	  	  	 var dollar = new RegExp('(\\d+)(\\$)', 'g');
	  sel.contents = sel.contents.replace(dollar, '$1 $2');

 var dollarSpace = new RegExp('(\\d+) (\\$)', 'g');
	  sel.contents = sel.contents.replace(dollarSpace, '$1 $2');

	 //Squaremeters

	 var squareMeter = new RegExp('(\\d+)(\\m2)', 'g');
	 sel.contents = sel.contents.replace(squareMeter, '$1 m2');

	 var squareMeterSpace = new RegExp('(\\d+) (\\m2)', 'g');
	 sel.contents = sel.contents.replace(squareMeterSpace, '$1 m2');

	  var kubikMeter = new RegExp('(\\d+)(\\m3)', 'g');
	 sel.contents = sel.contents.replace(kubikMeter, '$1 m3');

	 var kubikMeterSpace = new RegExp('(\\d+) (\\m3)', 'g');
	 sel.contents = sel.contents.replace(kubikMeterSpace, '$1 m3');


	//SUPERSCRIPT

	var chars = sel.characters;
	for (var i = 1; i < chars.length; i++) {
	    if (chars[i-1].contents === 'm' && 
	       (chars[i].contents === '2' || chars[i].contents === '3')) {
	        chars[i].position = Position.SUPERSCRIPT;
	    }
	}

	}

		

	  // ß
	    if (SZ.value == true) {

	 //ß

	  var ß = new RegExp('\\ß', 'g');
	 sel.contents = sel.contents.replace(ß, 'ss');

	}


	} // End of do everything function
} 