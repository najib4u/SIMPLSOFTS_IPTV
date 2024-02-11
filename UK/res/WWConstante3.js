// WWConstante3.js
/*! 24.0.1.0 */
/*! VersionVI: 01F250083h x */
// Le seul support technique disponible pour cette librairie est accessible a travers le service "Assistance Directe".

// Days of the week
var STD_LUNDI = "Monday";
var STD_MARDI = "Tuesday";
var STD_MERCREDI = "Wednesday";
var STD_JEUDI = "Thursday";
var STD_VENDREDI = "Friday";
var STD_SAMEDI = "Saturday";
var STD_DIMANCHE = "Sunday";

// Month of the year
var STD_JANVIER = "January";
var STD_FEVRIER = "February";
var STD_MARS = "March";
var STD_AVRIL = "April";
var STD_MAI = "May";
var STD_JUIN = "June";
var STD_JUILLET = "July";
var STD_AOUT = "August";
var STD_SEPTEMBRE = "September";
var STD_OCTOBRE = "October";
var STD_NOVEMBRE = "November";
var STD_DECEMBRE = "December";

// Constants for the popup menu of tables/loopers
// Export
var TABLE_EXPORT =
{
	EXCEL: { sLibelle: "Export to Excel...", sTitre: "Export the content to Excel..." },
	WORD: { sLibelle: "Export to Word...", sTitre: "Export the content to Word..." },
	XML: { sLibelle: "Export to XML...", sTitre: "Export the content to XML..." },
	PDF: { sLibelle: "Print in PDF...", sTitre: "Print to a PDF file..." }
};
// Find/Filter
var TABLE_FILTRE =
{
	RECHERCHE: { sLibelle: "Find" },
	FILTRE: { sLibelle: "Filters:" },
	FILTRE_EGAL: { sLibelle: "Is equal to" },
	FILTRE_COMMENCE: { sLibelle: "Starts with" },
	FILTRE_CONTIENT: { sLibelle: "Contains" },
	FILTRE_TERMINE: { sLibelle: "Ends with" },
//	FILTRE_VIDE: { sLibelle: "Is empty" },
	FILTRE_DIFFERENT: { sLibelle: "Is different from" },
	FILTRE_COMMENCE_PAS: { sLibelle: "Does not start with" },
	FILTRE_CONTIENT_PAS: { sLibelle: "Does not contain" },
	FILTRE_TERMINE_PAS: { sLibelle: "Does not end with" },
	FILTRE_SUPERIEUR: { sLibelle: "Greater than" },
	FILTRE_SUPERIEUR_EGAL: { sLibelle: "Greater than or equal to" },
	FILTRE_INFERIEUR: { sLibelle: "Less than" },
	FILTRE_INFERIEUR_EGAL: { sLibelle: "Less than or equal to" },
	FILTRE_SUPPRIME: { sLibelle: "Delete the filter" }
};

// Constants for the popup menu of dashboards
var TDB_MENU =
{
	EDITION: { sLibelle: "Edit" },
	CONFINIT: { sLibelle: "Restore the initial configuration" }
};

// Error messages of debug
var STD_TITRE_TRACE = "Trace of WEBDEV browser codes";
var STD_INFO_TRACE = "Ctrl+P enables you to print the trace window";
var STD_ERREUR_MESSAGE_UPLOAD = "The upload failed.\nAn unexpected error occurred while uploading one of the files.\nCheck the size of the files to upload.";
var STD_ERREUR_MESSAGE_VIDEO = "Unable to display the video file: %1.\n- Check whether the file exists on the server.\n- Check whether the consultation of this type of file (filtering by MIME type) is allowed by the Web server.";

// Tooltips and messages of the toolbar for the chart controls
var CHART_TOOLBAR =
{
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		PIE: "Pie charts...",
		COL: "Column charts...",
		CUR: "Line charts...",
		STO: "Stock charts...",
		SAV: "Save as...",
		PRI: "Print...",
		LEG: "Legend...",
		GDH: "Horizontal gridlines",
		GDV: "Vertical gridlines",
		SMO: "Smoothing",
		GRA: "Gradient",
		RAI: "Raised",
		ANT: "Anti-aliasing",
		TRA: "Transparency",
		MIR: "Crosshair",
		ANI: "Animation",
		INT: "Interactivity",
		ZOH: "Horizontal zoom",
		ZOV: "Vertical zoom",
		FUS: "Full screen"
	},

	// Caption of the menu for the legend
	LEG:
	{
		0: "None",
		1: "Right",
		2: "Left",
		3: "Top",
		4: "Bottom"
	},

	// Text of the menus for the types
	// Pie charts
	PIE:
	{
		0: "Pie",
		1: "Semi-circular",
		2: "Donut",
		3: "Funnel",
		4: "Sunburst"
	},
	// Bar charts
	COL:
	{
		0: "Clustered bar charts",
		1: "Stacked bar charts",
		2: "Horizontal Clustered Column charts",
		3: "Horizontal Stacked Column charts",
		4: "Waterfall"
	},
	// Line charts
	CUR:
	{
		0: "Line",
		1: "Scatter",
		2: "Area",
		3: "Radar",
		4: "Bubbles",
		5: "Heatmap"
	},
	// Stock charts
	STO:
	{
		0: "Candlestick",
		1: "BarCharts",
		2: "MinMax"
	},
	// Tooltip
	MIR:
	{
		0: "Multiple crosshairs",
		1: "Crosshair",
		2: "Tooltip"
	},
	// Parameters
	PARAMS: "Parameters"
};

// Tooltips and messages in the toolbar of the rich HTML edit control
var HTML_TOOLBAR =
{
	DLG:
	{
		IMG: "Enter the image address",
		LNK: "Enter the link address",
		MRG: "Enter the margin value",
		ALT: "Enter the image alternative text",
		CPY: "A copy of the image will be integrated into the text to apply this action",
		ERR: "Unable to perform this action.\nThe origin domain of the image does not allow local copies(CORS)",
		DBL: "Haga doble clic para introducir el valor del margen"
	},
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		GRA: "Bold",
		ITA: "Italic",
		SOU: "Underline",
		BAR: "Strikeout",
		AGA: "Align left",
		ACE: "Center",
		ADR: "Align right",
		AJU: "Justify",
		LNU: "Numbering",
		LPU: "Bullets",
		RMO: "Decrease indent",
		RPL: "Increase indent",
		EXP: "Superscript",
		IND: "Subscript",
		COL: "Color",
		LNK: "Insert a link",
		IMG: "Insert an image",
		FNA: "Font",
		FSI: "Font size",
		EMO: "Emoticon",
		UND: "Undo",
		RED: "Redo"
	},
	// Couleurs spéciales
	COSP:
	{
		0: "Initial"
	},
	// Couleurs de la palette
	COFP:
	{
		0: "General",
		1: "Title",
		2: "Subtitle",
		3: "Note/Warning"
	},
	COLP:
	{
		0: "General",
		1: "Title",
		2: "Subtitle",
		3: "Link (1)",
		4: "Link (2)",
		5: "Note/Warning"
	},
	FHE:
	{
		0: "Body text",
		1: "Title 1",
		2: "Title 2",
		3: "Title 3",
		4: "Title 4",
		5: "Title 5",
		6: "Title 6",
		7: "Preformatted",
		8: "Highlighted"
	},
	FSI:
	{
		0: "Tiny",
		1: "Normal",
		2: "Large",
		3: "Larger",
		4: "Extra large",
		5: "Very large",
		6: "Huge"
	},
	HAB:
	{
		0: "In line with text",
		1: "Left",
		2: "Right",
		3: "Centered paragraph",
		4: "Expanded paragraph",
		5: "Modify image",
		6: "Crop(integrates a copy of the image into the text)",
		7: "Rotate right(integrates a copy of the image into the text)",
		8: "Alternative text"
	},
	LNK:
	{
		0: "Open in a new tab",
		1: "Modify link",
		2: "Delete link"
	},
	EMO:
	{
		0: "Frequent",
		1: "People",
		2: "Nature",
		3: "Objects",
		4: "Places",
		5: "Symbols"
	}
};

var tabWDErrors =
{
	// Message generiques :
	0: "Unknown error.",
	1: "Error in the browser code:\n",
	// Commun entre plusieurs modules
	// WDLanguage.js
	200: "Incorrect value subscript: access to subscript %1 while %2 value(s) have been found.",
	201: "Element not found in the associative array.",
	202: "The associative array contains %1 element(s) referenced by this key: unable to access element %2.",
	203: "Reading an element of an associative array with duplicates is not allowed with this syntax: several elements can be referenced by the same key.",
	204: "Invalid format.",
	205: "ArrayToString() and ArrayToCSV() can only be used on a one-dimensional or two-dimensional array.",
	206: "ArrayToString() and ArrayToCSV() cannot be used on an array of structures if the structure itself contains an array or a structure.",
	207: "A sorted addition can only be performed on an array previously sorted by a call to the Sort() method or to the ArraySort() method.",
	208: "The array has %1 dimension(s) and you access it with %2 dimension(s).",
	209: "The array dimensions must be positive.",
	210: "Dimension cannot be used to modify the number of array dimensions.",
	211: "%1()/%2() can only be used on a one-dimensional array.",
	212: "%1()/%2() can only be used on a one-dimensional or two-dimensional array.",
	213: "%1()/%2() can only be used on a two-dimensional array.",
	214: "The sort is not available with the native Javascript objects transmitted to a WLanguage procedure.",
	215: "The dynamic array has not been created.",
	216: "Division by 0",
	217: "You must specify the type of search (asBinary, asLinear, etc.).",
	218: "Factorial of a negative number.",
	219: "The month must be a value included between 1 and 12.",
	220: "%1 timer not started.",
	// WDZRNavigateur.js
	300: "Wrong subscript: %1. The control is empty.",
	301: "Wrong subscript: %1. Values must be included between %2 and %3.",
	302: "The <%1> column is unknown.",
	303: "Wrong constant value (%1).",
	// WDSQL.js
	400: "The <%1> query does not exist.",
	401: "No current connection.",
	// WDAJAX.js
	500: "Error while sending the query:\n%1",
	// WDUtil.js
	600: "Only structure of same definition can be assigned to structure.",
	601: "Incompatible type.",
	602: "The '%1' operator is not allowed.",
	603: "Property not found.",
	604: "Parameter #%1! has no default value: enter a value.",
	605: "The '%1' element does not exist.",
	606: "No current element.",
	607: "Invalid JSON format.",
	608: "The JSON serialization can only be done to a string variable.",
	609: "The JSON deserialization can only be done to a complex variable.",
	610: "The control (alias: '%1') cannot be used because it is not found in the page HTML.\nThis control is directly or indirectly positioned in a plane with delayed load that was not displayed yet (and therefore not loaded).",
	611: "The control (alias: '%1') cannot be used because it is not found in the page HTML.\nThis control (or one of its parents) is invisible and the option 'Generate the HTML code of control, even if it is invisible' is not enabled.",
	612: "Incorrect parameter subscript: you access the parameter %1 while %2 parameters have been found.",
	613: "Bad calling parameters: %1 parameters were expected while %2 parameters have been passed.",
	614: "Bad calling parameters: between %1 and %2 parameters are required while %3 parameters have been passed.",
	615: "Dynamic object not allocated yet.",
	616: "The '%1' element does not exist.\nUsing an object syntax (\"ControlList.Add\" for example) is allowed on a controls handled by its name, on a typed parameter or on a variable.",
	617: "'%1' control required",
	618: "An object of '%1' class cannot be assigned in an object of '%2' class.",
	619: "The variant is not an object.",
	// WDRating.js
	700: "The bounds are reversed: the higher bound (%2) is less than the lower bound (%1).",
	// WD.js
	// - Sockets
	800: "The sockets are not available.",
	801: "You called SocketConnect while requesting %1 as socket name.\nA socket with this name already exists.",
	802: "You called SocketWrite.\nThe socket named %1 does not exist.",
	803: "You called SocketClose.\nThe socket named %1 does not exist.",
	804: "You called SocketWrite.\nThe socket named %1 is not connected yet.",
	805: "You called SocketWrite.\nThe socket named %1 is closed.",
	// - Conversions de types
	900: "Error caused by %1 parameter.\nWhen passing parameters by address, an element of '%2' type cannot be converted to the '%3' type. Use a local parameter in the procedure called or pass a parameter of '%3' type.",
	901: "The name/value '%1' does not exist in the enumeration/combination or it was deleted or renamed.",
	902: "The '%1' value of the enumeration has no associated value.",
	903: "An element of '%2' type cannot be copied into an element of '%1' type.",
	// - Champs
	1000: "The value of ..TokenCurrentInput must not contain token separators.",
	1001: "There is no input in progress in the control (alias:'%1').",
	// - Dino JSON
	1100: "The variant already contains a '%1' member."
};

//Graphe
// - grFormatBulleBoursier : valeur par defaut
var GRF = {
	BULLE: {
		BOURSIER: "[%CATEGORIE%]\nMin.=[%MIN%]\nMax.=[%MAX%]\nStart=[%DEBUT%]\nEnd=[%FIN%]"
	}
};

//Constantes de la STD
var WDSTD_CONST =
{
	//Formats TailleVersChaine
	FORMAT_TAILLE_OCTET: "byte",	//octet
	FORMAT_TAILLE_KO: "Kb",			//Kilo-octet
	FORMAT_TAILLE_MO: "Mb",			//Mega-octet
	FORMAT_TAILLE_GO: "Gb",			//Giga-octet
	FORMAT_TAILLE_TO: "Tb",			//Tera-octet

	//Constantes continent de la STD
	CONTINENT:
	{
		AFRIQUE: "Africa",
		AMERIQUE_DU_NORD: "North America",
		AMERIQUE_DU_SUD: "South America",
		ANTARCTIQUE: "Antarctica",
		ASIE: "Asia",
		EUROPE: "Europe",
		OCEANIE: "Oceania"
	},

	//Constantes pays de la STD
	PAYS:
	{
		AFGHANISTAN: "Afghanistan",
		AFRIQUE_DU_SUD: "South Africa",
		ALAND_ILES: "Åland Islands",
		ALBANIE: "Albania",
		ALGERIE: "Algeria",
		ALLEMAGNE: "Germany",
		ANDORRE: "Andorra",
		ANGOLA: "Angola",
		ANGUILLA: "Anguilla",
		ANTARCTIQUE: "Antarctica",
		ANTIGUA_ET_BARBUDA: "Antigua and Barbuda",
		ARABIE_SAOUDITE: "Saudi Arabia",
		ARGENTINE: "Argentina",
		ARMENIE: "Armenia",
		ARUBA: "Aruba",
		AUSTRALIE: "Australia",
		AUTRICHE: "Austria",
		AZERBAIDJAN: "Azerbaijan",
		BAHAMAS: "Bahamas",
		BAHREIN: "Bahrain",
		BANGLADESH: "Bangladesh",
		BARBADE: "Barbados",
		BELARUS: "Belarus",
		BELGIQUE: "Belgium",
		BELIZE: "Belize",
		BENIN: "Benin",
		BERMUDES: "Bermuda",
		BHOUTAN: "Bhutan",
		BOLIVIE_L_ETAT_PLURINATIONAL_DE: "Bolivia (Plurinational State of)",
		BONAIRE_SAINT_EUSTACHE_ET_SABA: "Bonaire, Sint Eustatius and Saba",
		BOSNIE_HERZEGOVINE: "Bosnia and Herzegovina",
		BOTSWANA: "Botswana",
		BOUVET_ILE: "Bouvet (Island)",
		BRESIL: "Brazil",
		BRUNEI_DARUSSALAM: "Brunei Darussalam",
		BULGARIE: "Bulgaria",
		BURKINA_FASO: "Burkina Faso",
		BURUNDI: "Burundi",
		CAIMANES_ILES: "Cayman Islands",
		CAMBODGE: "Cambodia",
		CAMEROUN: "Cameroon",
		CANADA: "Canada",
		CAP_VERT: "Cabo Verde",
		CENTRAFRICAINE_REPUBLIQUE: "Central African Republic",
		CHILI: "Chile",
		CHINE: "China",
		CHYPRE: "Cyprus",
		COCOS_KEELING_ILES: "Cocos (Islands) / Keeling (Islands)",
		COLOMBIE: "Colombia",
		COMORES: "Comoros",
		CONGO: "Congo",
		CONGO_RD: "Congo (Democratic Republic of the)",
		COREE_DU_NORD: "Korea (Democratic People's Republic of)",
		COREE_REPUBLIQUE_DE: "Korea (Republic of)",
		COSTA_RICA: "Costa Rica",
		COTE_D_IVOIRE: "Ivory Coast",
		CROATIE: "Croatia",
		CUBA: "Cuba",
		CURACAO: "Curaçao",
		DANEMARK: "Denmark",
		DJIBOUTI: "Djibouti",
		DOMINICAINE_REPUBLIQUE: "Dominican Republic",
		DOMINIQUE: "Dominica",
		EGYPTE: "Egypt",
		EL_SALVADOR: "El Salvador",
		EMIRATS_ARABES_UNIS: "United Arab Emirates",
		EQUATEUR: "Ecuador",
		ERYTHREE: "Eritrea",
		ESPAGNE: "Spain",
		ESTONIE: "Estonia",
		ETATS_FEDERES_DE_MICRONESIE: "Micronesia (Federated States of)",
		ETATS_UNIS: "United States of America",
		ETHIOPIE: "Ethiopia",
		FALKLAND_ILES_MALVINAS: "Falkland Islands",
		FEROE_ILES: "Faroe Islands",
		FIDJI: "Fiji",
		FINLANDE: "Finland",
		FRANCE: "France",
		GABON: "Gabon",
		GAMBIE: "Gambia",
		GEORGIE: "Georgia",
		GEORGIE_DU_SUD_ET_LES_ILES_SANDWICH_DU_SU: "South Georgia and the South Sandwich Islands",
		GHANA: "Ghana",
		GIBRALTAR: "Gibraltar",
		GRECE: "Greece",
		GRENADE: "Grenada",
		GROENLAND: "Greenland",
		GUADELOUPE: "Guadeloupe",
		GUAM: "Guam",
		GUATEMALA: "Guatemala",
		GUERNESEY: "Guernsey",
		GUINEE: "Guinea",
		GUINEE_EQUATORIALE: "Equatorial Guinea",
		GUINEE_BISSAU: "Guinea-Bissau",
		GUYANA: "Guyana",
		GUYANE_FRANCAISE: "French Guiana",
		HAITI: "Haiti",
		HEARD_ILE_ET_MCDONALD_ILES: "Heard Islands and MacDonald Islands",
		HONDURAS: "Honduras",
		HONG_KONG: "Hong Kong",
		HONGRIE: "Hungary",
		ILE_CHRISTMAS: "Christmas (Island)",
		ILE_DE_MAN: "Isle of Man",
		ILE_NORFOLK: "Norfolk Island",
		ILES_COOK: "Cook Islands",
		ILES_MARIANNES_DU_NORD: "Northern Mariana Islands",
		ILES_MINEURES_ELOIGNEES_DES_ETATS_UNIS: "United States Minor Outlying Islands",
		ILES_TURKS_ET_CAIQUES: "Turks and Caicos Islands",
		ILES_VIERGES_BRITANNIQUES: "British Virgin Islands",
		ILES_VIERGES_DES_ETATS_UNIS: "U.S. Virgin Islands",
		INDE: "India",
		INDONESIE: "Indonesia",
		IRAN_REPUBLIQUE_ISLAMIQUE_D_: "Iran (Islamic Republic of)",
		IRAQ: "Iraq",
		IRLANDE: "Ireland",
		ISLANDE: "Iceland",
		ISRAEL: "Israel",
		ITALIE: "Italy",
		JAMAIQUE: "Jamaica",
		JAPON: "Japan",
		JERSEY: "Jersey",
		JORDANIE: "Jordan",
		KAZAKHSTAN: "Kazakhstan",
		KENYA: "Kenya",
		KIRGHIZISTAN: "Kyrgyzstan",
		KIRIBATI: "Kiribati",
		KOWEIT: "Kuwait",
		LAO_REPUBLIQUE_DEMOCRATIQUE_POPULAIRE: "Lao (People's Democratic Republic)",
		LESOTHO: "Lesotho",
		LETTONIE: "Latvia",
		LIBAN: "Lebanon",
		LIBERIA: "Liberia",
		LIBYENNE_JAMAHIRIYA_ARABE: "Libya",
		LIECHTENSTEIN: "Liechtenstein",
		LITUANIE: "Lithuania",
		LUXEMBOURG: "Luxembourg",
		MACAO: "Macao",
		MACEDOINE: "Macedonia (Former Yugoslav Republic of)",
		MADAGASCAR: "Madagascar",
		MALAISIE: "Malaysia",
		MALAWI: "Malawi",
		MALDIVES: "Maldives",
		MALI: "Mali",
		MALTE: "Malta",
		MAROC: "Morocco",
		MARSHALL_ILES: "Marshall Islands",
		MARTINIQUE: "Martinique",
		MAURICE: "Mauritius",
		MAURITANIE: "Mauritania",
		MAYOTTE: "Mayotte",
		MEXIQUE: "Mexico",
		MOLDOVA: "Moldova (Republic of)",
		MONGOLIE: "Mongolia",
		MONTENEGRO: "Montenegro",
		MONTSERRAT: "Montserrat",
		MOZAMBIQUE: "Mozambique",
		MYANMAR: "Myanmar",
		NAMIBIE: "Namibia",
		NAURU: "Nauru",
		NEPAL: "Nepal",
		NICARAGUA: "Nicaragua",
		NIGER: "Niger",
		NIGERIA: "Nigeria",
		NIUE: "Niue",
		NORVEGE: "Norway",
		NOUVELLE_CALEDONIE: "New Caledonia",
		NOUVELLE_ZELANDE: "New Zealand",
		OMAN: "Oman",
		OUGANDA: "Uganda",
		OUZBEKISTAN: "Uzbekistan",
		PAKISTAN: "Pakistan",
		PALAOS: "Palau",
		PALESTINE_GAZA: "Palestine (State of)",
		PANAMA: "Panama",
		PAPOUASIE_NOUVELLE_GUINEE: "Papua New Guinea",
		PARAGUAY: "Paraguay",
		PAYS_BAS: "Netherlands",
		PEROU: "Peru",
		PHILIPPINES: "Philippines",
		PITCAIRN: "Pitcairn",
		POLOGNE: "Poland",
		POLYNESIE_FRANCAISE: "French Polynesia",
		PORTO_RICO: "Puerto Rico",
		PORTUGAL: "Portugal",
		PRINCIPAUTE_DE_MONACO: "Monaco",
		QATAR: "Qatar",
		REUNION: "Reunion",
		ROUMANIE: "Romania",
		ROYAUME_UNI: "United Kingdom of Great Britain and Northern Ireland",
		RUSSIE_FEDERATION_DE: "Russia",
		RWANDA: "Rwanda",
		SAHARA_OCCIDENTAL: "Western Sahara",
		SAINT_BARTHELEMY: "Saint Barthélemy",
		SAINTE_HELENE_ASCENSION_ET_TRISTAN_DA_CUN: "Saint Helena, Ascension and Tristan Da Cunha",
		SAINTE_LUCIE: "Saint Lucia",
		SAINT_KITTS_ET_NEVIS: "Saint Kitts And Nevis",
		SAINT_MAARTIN: "Sint Maarten (Dutch)",
		SAINT_MARIN: "San Marino",
		SAINT_MARTIN: "Saint Martin (French)",
		SAINT_PIERRE_ET_MIQUELON: "Saint Pierre and Miquelon",
		SAINT_SIEGE_ETAT_DE_LA_CITE_DU_VATICAN: "Holy See",
		SAINT_VINCENT_ET_LES_GRENADINES: "Saint Vincent and the Grenadines",
		SALOMON_ILES: "Solomon Islands",
		SAMOA: "Samoa",
		SAMOA_AMERICAINES: "American Samoa",
		SAO_TOME_ET_PRINCIPE: "São Tomé and Príncipe",
		SENEGAL: "Senegal",
		SERBIE: "Serbia",
		SEYCHELLES: "Seychelles",
		SIERRA_LEONE: "Sierra Leone",
		SINGAPOUR: "Singapore",
		SLOVAQUIE: "Slovakia",
		SLOVENIE: "Slovenia",
		SOMALIE: "Somalia",
		SOUDAN: "Sudan",
		SOUDAN_SUD: "South Sudan",
		SRI_LANKA: "Sri Lanka",
		SUEDE: "Sweden",
		SUISSE: "Switzerland",
		SURINAME: "Suriname",
		SVALBARD_ET_ILE_JAN_MAYEN: "Svalbard and Jan Mayen Islands",
		SWAZILAND: "eSwatini",
		SYRIENNE_REPUBLIQUE_ARABE: "Syrian Arab Republic",
		TADJIKISTAN: "Tajikistan",
		TAIWAN_PROVINCE_DE_CHINE: "Taiwan (Province of China)",
		TANZANIE_REPUBLIQUE_UNIE_DE: "Tanzania (United Republic of)",
		TCHAD: "Chad",
		TCHEQUE_REPUBLIQUE: "Czech (Republic)",
		TERRES_AUSTRALES_FRANCAISES: "French Southern Territories",
		TERRITOIRE_BRITANNIQUE_DE_L_OCEAN_INDIEN: "Indian (British Ocean Territory)",
		THAILANDE: "Thailand",
		TIMOR_ORIENTAL: "Timor-Leste",
		TOGO: "Togo",
		TOKELAU: "Tokelau",
		TONGA: "Tonga",
		TRINITE_ET_TOBAGO: "Trinidad and Tobago",
		TUNISIE: "Tunisia",
		TURKMENISTAN: "Turkmenistan",
		TURQUIE: "Turkey",
		TUVALU: "Tuvalu",
		UKRAINE: "Ukraine",
		URUGUAY: "Uruguay",
		VANUATU: "Vanuatu",
		VENEZUELA_REPUBLIQUE_BOLIVARIENNE_DU: "Venezuela (Bolivarian Republic of)",
		VIET_NAM: "Vietnam",
		WALLIS_ET_FUTUNA: "Wallis and Futuna",
		YEMEN: "Yemen",
		ZAMBIE: "Zambia",
		ZIMBABWE: "Zimbabwe"
	}
};
