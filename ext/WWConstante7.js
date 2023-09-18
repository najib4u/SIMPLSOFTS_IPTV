// WWConstante7.js
/*! 24.0.1.0 */
/*! VersionVI: 01F250083h x */
// Le seul support technique disponible pour cette librairie est accessible a travers le service "Assistance Directe".

// Days of the week
var STD_LUNDI = "Lunes";
var STD_MARDI = "Martes";
var STD_MERCREDI = "Mi\xE9rcoles";
var STD_JEUDI = "Jueves";
var STD_VENDREDI = "Viernes";
var STD_SAMEDI = "S\xE1bado";
var STD_DIMANCHE = "Domingo";

// Month of the year
var STD_JANVIER = "Enero";
var STD_FEVRIER = "Febrero";
var STD_MARS = "Marzo";
var STD_AVRIL = "Abril";
var STD_MAI = "Mayo";
var STD_JUIN = "Junio";
var STD_JUILLET = "Julio";
var STD_AOUT = "Agosto";
var STD_SEPTEMBRE = "Septiembre";
var STD_OCTOBRE = "Octubre";
var STD_NOVEMBRE = "Noviembre";
var STD_DECEMBRE = "Diciembre";

// Constants for the popup menu of tables/loopers
// Export
var TABLE_EXPORT =
{
	EXCEL: { sLibelle: "Exportar a Excel...", sTitre: "Exportar el contenido a Excel..." },
	WORD: { sLibelle: "Exportar a Word...", sTitre: "Exportar el contenido a Word..." },
	XML: { sLibelle: "Exportar a XML...", sTitre: "Exportar el contenido a XML..." },
	PDF: { sLibelle: "Imprimir en PDF...", sTitre: "Imprimir en un archivo PDF..." }
};
// Find/Filter
var TABLE_FILTRE =
{
	RECHERCHE: { sLibelle: "Buscar" },
	FILTRE: { sLibelle: "Filtros:" },
	FILTRE_EGAL: { sLibelle: "Es igual a" },
	FILTRE_COMMENCE: { sLibelle: "Comienza por" },
	FILTRE_CONTIENT: { sLibelle: "Contiene" },
	FILTRE_TERMINE: { sLibelle: "Termina por" },
//	FILTRE_VIDE: { sLibelle: "Est\xE1 vac\xEDo" },
	FILTRE_DIFFERENT: { sLibelle: "Es diferente de" },
	FILTRE_COMMENCE_PAS: { sLibelle: "No comienza por" },
	FILTRE_CONTIENT_PAS: { sLibelle: "No contiene" },
	FILTRE_TERMINE_PAS: { sLibelle: "No termina por" },
	FILTRE_SUPERIEUR: { sLibelle: "Superior a" },
	FILTRE_SUPERIEUR_EGAL: { sLibelle: "Superior o igual a" },
	FILTRE_INFERIEUR: { sLibelle: "Inferior a" },
	FILTRE_INFERIEUR_EGAL: { sLibelle: "Inferior o igual a" },
	FILTRE_SUPPRIME: { sLibelle: "Eliminar el filtro" }
};

// Constants for the popup menu of dashboards
var TDB_MENU =
{
	EDITION: { sLibelle: "Edici\xF3n" },
	CONFINIT: { sLibelle: "Restablecer la configuraci\xF3n inicial" }
};

// Error messages of debug
var STD_TITRE_TRACE = "Traza de c\xF3digos navegador de WebDev";
var STD_INFO_TRACE = "Utilizar Ctrl+P para imprimir la ventana de traza";
var STD_ERREUR_MESSAGE_UPLOAD = "Error al cargar.\nSe produjo un error inesperado al subir uno de los archivos.\nAseg\xFArese de que los archivos que desea subir no sean demasiado grandes.";
var STD_ERREUR_MESSAGE_VIDEO = "Ha sido imposible mostrar el fichero de video: %1\n- Verifique si el fichero existe en el servidor\n- Verifique si el Servidor Web autoriza la consultaci\xF3n de este tipo de fichero (filtrado por tipo MIME)";

// Tooltips and messages of the toolbar for the chart controls
var CHART_TOOLBAR =
{
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		PIE: "Gr\xE1ficos circulares...",
		COL: "Gr\xE1fico de barras...",
		CUR: "Gr\xE1fico de l\xEDneas...",
		STO: "Gr\xE1fico de cotizaciones...",
		SAV: "Guardar como...",
		PRI: "Imprimir...",
		LEG: "Leyenda",
		GDH: "L\xEDneas de cuadr\xEDcula horizontales",
		GDV: "L\xEDneas de cuadr\xEDcula verticales",
		SMO: "Suavizado",
		GRA: "Pendiente",
		RAI: "Relieve",
		ANT: "Anti-aliasing",
		TRA: "Transparencia",
		MIR: "Mira",
		ANI: "Animaci&#xF3;n",
		INT: "Interactividad",
		ZOH: "Zoom horizontal",
		ZOV: "Zoom vertical",
		FUS: "Pantalla completa"
	},

	// Caption of the menu for the legend
	LEG:
	{
		0: "Ninguna",
		1: "Derecha",
		2: "Izquierda",
		3: "Arriba",
		4: "Abajo"
	},

	// Text of the menus for the types
	// Pie charts
	PIE:
	{
		0: "Circular",
		1: "Semi-c\xEDrculo",
		2: "Anillo",
		3: "Embudo",
		4: "Proyecci\xF3n solar"
	},
	// Bar charts
	COL:
	{
		0: "Gr\xE1fico de barra agrupada",
		1: "Gr\xE1fico de barra apilada",
		2: "Gr\xE1fico de barra agrupada horizontal",
		3: "Gr\xE1fico de barra apilada vertical",
		4: "Cascada"
	},
	// Line charts
	CUR:
	{
		0: "L\xEDnea",
		1: "Dispersi\xF3n",
		2: "\xC1rea",
		3: "Radial",
		4: "Burbujas",
		5: "Mapa de calor"
	},
	// Stock charts
	STO:
	{
		0: "Velas japonesas",
		1: "BarCharts",
		2: "M\xEDnimo M\xE1ximo"
	},
	// Tooltip
	MIR:
	{
		0: "Mira m&#xFA;ltiple",
		1: "Mira",
		2: "Tooltip"
	},
	// Parameters
	PARAMS: "Par&#225;metros"
};

// Tooltips and messages in the toolbar of the rich HTML edit control
var HTML_TOOLBAR =
{
	DLG:
	{
		IMG: "Introducir direcci\xF3n de la imagen",
		LNK: "Introducir direcci\xF3n del enlace",
		MRG: "Introducir valor del margen",
		ALT: "Introducir texto alternativo de la imagen",
		CPY: "Se integrar\xE1 una copia de la imagen al texto para aplicar esta acci\xF3n",
		ERR: "No se puede realizar esta acci\xF3n.\nEl dominio de origen de la imagen no permite copias locales(CORS)",
		DBL: "Double-cliquez pour saisir la valeur de la marge"
	},
	// Tooltips of the buttons in the bar
	ALTTEXT:
	{
		GRA: "Negrita",
		ITA: "It\xE1lica",
		SOU: "Subraya",
		BAR: "Tachado",
		AGA: "Alineado izquierdo",
		ACE: "Centrar",
		ADR: "Alineado derecho",
		AJU: "Justificar",
		LNU: "Numeraci\xF3n",
		LPU: "Vi\xF1etas",
		RMO: "Disminuir tabulaci\xF3n",
		RPL: "Incrementar tabulaci\xF3n",
		EXP: "Exponente",
		IND: "\xCDndice",
		COL: "Color",
		LNK: "Insertar un link",
		IMG: "Insertar una imagen",
		FNA: "Fuente",
		FSI: "Tama\xF1o de fuente",
		EMO: "Emotic\xF3n",
		UND: "Deshacer",
		RED: "Rehacer"
	},
	// Couleurs spéciales
	COSP:
	{
		0: "Inicial"
	},
	// Couleurs de la palette
	COFP:
	{
		0: "General",
		1: "T\xEDtulo",
		2: "Subt\xEDtulo",
		3: "Nota / Advertencia"
	},
	COLP:
	{
		0: "General",
		1: "T\xEDtulo",
		2: "Subt\xEDtulo",
		3: "Enlace (1)",
		4: "Enlace (2)",
		5: "Nota / Advertencia"
	},
	FHE:
	{
		0: "Cuerpo de texto",
		1: "T\xEDtulo 1",
		2: "T\xEDtulo 2",
		3: "T\xEDtulo 3",
		4: "T\xEDtulo 4",
		5: "T\xEDtulo 5",
		6: "T\xEDtulo 6",
		7: "Preformateado",
		8: "Resaltado"
	},
	FSI:
	{
		0: "Muy peque\xF1o",
		1: "Peque\xF1o",
		2: "Normal",
		3: "Grande",
		4: "Extra grande",
		5: "Muy grande",
		6: "Enorme"
	},
	HAB:
	{
		0: "En l\xEDnea con el texto",
		1: "A la izquierda",
		2: "A la derecha",
		3: "P\xE1rrafo centrado",
		4: "P\xE1rrafo expandido",
		5: "Modificar imagen",
		6: "Recortar(integra una copia de la imagen al texto)",
		7: "Girar a la derecha(integra una copia de la imagen al texto)",
		8: "Texto alternativo"
	},
	LNK:
	{
		0: "Abrir en una nueva pesta\xF1a",
		1: "Modificar enlace",
		2: "Eliminar enlace"
	},
	EMO:
	{
		0: "Frecuentes",
		1: "Personas",
		2: "Naturaleza",
		3: "Objetos",
		4: "Lugares",
		5: "S\xEDmbolos"
	}
};

var tabWDErrors =
{
	// Message generiques :
	0: "Error desconocido.",
	1: "Error en el c\xF3digo del navegador:\n",
	// Commun entre plusieurs modules
	// WDLanguage.js
	200: "\xEDndice de valor incorrecto: acceso al \xEDndice %1 pero solo hay %2 valor(es).",
	201: "No se encuentra el elemento en el array asociativo.",
	202: "El array asociativo tiene %1 elemento(s) referenciado(s) por esta clave y se intenta acceder al elemento %2.",
	203: "Esta sintaxis no permite leer un elemento de array asociativo con duplicados, puesto que una clave puede referenciar varios elementos.",
	204: "Formato no v\xE1lido.",
	205: "Las funciones ArrayToString() y ArrayToCSV() solo se pueden utilizar en un array unidimensional o bidimensional.",
	206: "Las funciones ArrayToString() y ArrayToCSV() no se pueden utilizar en un array de estructuras, si la estructura misma contiene un array o una estructura.",
	207: "Una adici\xF3n ordenada solo se puede hacer en un array previamente ordenado por una llamada al m\xE9todo Sort() o al m\xE9todo ArraySort().",
	208: "El array tiene %1 dimensi\xF3n(es) y se accede a \xE9l con %2 dimensi\xF3n(es).",
	209: "Las dimensiones de un array deben ser positivas.",
	210: "Dimensi\xF3n de no permite modificar el n\xFAmero de dimensiones del array.",
	211: "La funci\xF3n %1()/%2() solo se puede utilizar en un array unidimensional.",
	212: "La funci\xF3n %1()/%2() solo puede utilizarse en un array unidimensional o bidimensional.",
	213: "La funci\xF3n %1()/%2() solo se puede utilizar en un array bidimensional.",
	214: "El orden no est\xE1 disponible con objetos nativos Javascript transmitidos a un procedimiento WLanguage.",
	215: "No se ha creado el array din\xE1mico.",
	216: "Divisi\xF3n por 0",
	217: "Indique el tipo de b\xFAsqueda (constantes asBinary, asLinear, etc.).",
	218: "Factorial de un n\xFAmero negativo.",
	219: "El mes debe ser un valor comprendido entre 01 y 12.",
	220: "El temporizador %1 no se ha iniciado.",
	// WDZRNavigateur.js
	300: "El \xEDndice especificado %1 no es v\xE1lido: el campo est\xE1 vac\xEDo.",
	301: "El \xEDndice especificado %1 no es v\xE1lido: los valores v\xE1lidos est\xE1n entre %2 y %3.",
	302: "Columna <%1> desconocida.",
	303: "El valor de la constante (%1) no es v\xE1lido con esta funci\xF3n.",
	// WDSQL.js
	400: "La consulta <%1> no existe.",
	401: "No hay una conexi\xF3n activa.",
	// WDAJAX.js
	500: "Error al enviar la consulta:\n%1",
	// WDUtil.js
	600: "A una estructura solo se puede asignar otra estructura de la misma definici\xF3n.",
	601: "Tipo incompatible.",
	602: "Operador '%1' no permitido.",
	603: "La propiedad no existe.",
	604: "El par\xE1metro %1 no tiene valor predefinido y no ha recibido ning\xFAn valor.",
	605: "El elemento '%1' no existe.",
	606: "No hay elementos en curso.",
	607: "Formato JSON no v\xE1lido.",
	608: "La serializaci\xF3n JSON solo se puede hacer a una variable tipo string.",
	609: "La deserializaci\xF3n JSON solo se puede hacer a una variable de tipo complejo.",
	610: "No se puede manipular el control (alias :'%1')  porque no est\xE1 presente en el HTML de la p\xE1gina.\nEste control se encuentra (directa o indirectamente) en un plano con carga retardada que a\xFAn no se ha visualizado (ni cargado).",
	611: "No se puede manipular el control (alias :'%1') porque no est\xE1 presente en el HTML de la p\xE1gina.\nEste control (o uno de sus padres) es invisible y la opci\xF3n 'Generar c\xF3digo HTML del control, incluso si es invisible' no est\xE1 activada.",
	612: "\xEDndice de par\xE1metro incorrecto: se accede al par\xE1metro %1 pero hay %2 par\xE1metro(s).",
	613: "Los par\xE1metros de llamada del c\xF3digo son incorrectos: se esperaban %1 par\xE1metros y se recibieron %2.",
	614: "Los par\xE1metros de llamada del c\xF3digo son incorrectos: se esperaban entre %1 y %2 par\xE1metros y se recibieron %3.",
	615: "Todav\xEDa no se ha asignado el objeto din\xE1mico.",
	616: "El elemento '%1' no existe.\nSolo se permite el uso de sintaxis de objetos ('AddList.Field' por ejemplo) en un campo manipulado por su nombre, en un par\xE1metro tipado o en una variable.",
	617: "Control '%1' requerido",
	618: "No se puede asignar un objeto de la clase '%1' a un objeto de la clase '%2'.",
	619: "El variant no es un objeto.",
	// WDRating.js
	700: "Los l\xEDmites est\xE1n invertidos: el l\xEDmite superior (%2) es inferior al l\xEDmite inferior (%1).",
	// WD.js
	// - Sockets
	800: "Los sockets no est\xE1n disponibles.",
	801: "Ha llamado a la funci\xF3n SocketConnect solicitando %1 como nombre del socket.\nSin embargo, ya existe un socket con este nombre.",
	802: "Ha llamado a la funci\xF3n SocketWrite.\nEl socket con el nombre %1 no existe.",
	803: "Ha llamado a la funci\xF3n SocketClose.\nEl socket con el nombre %1 no existe.",
	804: "Ha llamado a la funci\xF3n SocketWrite.\nEl socket con el nombre %1 a\xFAn no est\xE1 conectado.",
	805: "Ha llamado la funci\xF3n SocketWrite.\nEl socket con el nombre %1 est\xE1 cerrado.",
	// - Conversions de types
	900: "Se produjo un error al pasar el par\xE1metro %1.\nCuando se pasa un par\xE1metro por direcci\xF3n, un elemento de tipo '%2' no puede convertirse al tipo '%3'.Utilice un par\xE1metro local en el procedimiento llamado o pase un par\xE1metro de tipo '%3'.",
	901: "El nombre/valor '%1' no existe en la enumeraci\xF3n/combinaci\xF3n o ha sido eliminado o renombrado.",
	902: "El valor '%1' de la enumeraci\xF3n no tiene valor asociado.",
	903: "Un elemento de tipo '%2' no puede convertirse al tipo '%1'.",
	// - Champs
	1000: "El valor de la propiedad ..TokenCurrentInput no debe contener separadores token.",
	1001: "No hay ninguna entrada en curso en el control (alias:'%1').",
	// - Dino JSON
	1100: "El variant ya contiene un miembro '%1'."
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
	FORMAT_TAILLE_KO: "kB",			//Kilo-octet
	FORMAT_TAILLE_MO: "MB",			//Mega-octet
	FORMAT_TAILLE_GO: "GB",			//Giga-octet
	FORMAT_TAILLE_TO: "TB",			//Tera-octet

	//Constantes continent de la STD
	CONTINENT:
	{
		AFRIQUE: "\xC1frica",
		AMERIQUE_DU_NORD: "Norteam\xE9rica",
		AMERIQUE_DU_SUD: "Sudam\xE9rica",
		ANTARCTIQUE: "Ant\xE1rtida",
		ASIE: "Asia",
		EUROPE: "Europa",
		OCEANIE: "Ocean\xEDa"
	},

	//Constantes pays de la STD
	PAYS:
	{
		AFGHANISTAN: "Afganist\xE1n",
		AFRIQUE_DU_SUD: "Sud\xE1frica",
		ALAND_ILES: "Islas \xC5land",
		ALBANIE: "Albania",
		ALGERIE: "Argelia",
		ALLEMAGNE: "Alemania",
		ANDORRE: "Andorra",
		ANGOLA: "Angola",
		ANGUILLA: "Anguila",
		ANTARCTIQUE: "Ant\xE1rtida",
		ANTIGUA_ET_BARBUDA: "Antigua y Barbuda",
		ARABIE_SAOUDITE: "Arabia Saudita",
		ARGENTINE: "Argentina",
		ARMENIE: "Armenia",
		ARUBA: "Aruba",
		AUSTRALIE: "Australia",
		AUTRICHE: "Austria",
		AZERBAIDJAN: "Azerbaiy\xE1n",
		BAHAMAS: "Bahamas",
		BAHREIN: "Bahr\xE9in",
		BANGLADESH: "Bangladesh",
		BARBADE: "Barbados",
		BELARUS: "Bielorrusia",
		BELGIQUE: "B\xE9lgica",
		BELIZE: "Belice",
		BENIN: "Ben\xEDn",
		BERMUDES: "Bermudas",
		BHOUTAN: "But\xE1n",
		BOLIVIE_L_ETAT_PLURINATIONAL_DE: "Bolivia(Estado Plurinacional de)",
		BONAIRE_SAINT_EUSTACHE_ET_SABA: "Bonaire, San Eustaquio y Saba",
		BOSNIE_HERZEGOVINE: "Bosnia y Herzegovina",
		BOTSWANA: "Botsuana",
		BOUVET_ILE: "Bouvet(Isla)",
		BRESIL: "Brasil",
		BRUNEI_DARUSSALAM: "Brun\xE9i Darussalam",
		BULGARIE: "Bulgaria",
		BURKINA_FASO: "Burkina Faso",
		BURUNDI: "Burundi",
		CAIMANES_ILES: "Islas Caim\xE1n",
		CAMBODGE: "Camboya",
		CAMEROUN: "Camer\xFAn",
		CANADA: "Canad\xE1",
		CAP_VERT: "Cabo Verde",
		CENTRAFRICAINE_REPUBLIQUE: "Rep\xFAblica Centroafricana",
		CHILI: "Chile",
		CHINE: "China",
		CHYPRE: "Chipre",
		COCOS_KEELING_ILES: "Cocos(Islas) / Keeling(Islas)",
		COLOMBIE: "Colombia",
		COMORES: "Comoras",
		CONGO: "Congo",
		CONGO_RD: "Congo(Rep\xFAblica Democr\xE1tica del)",
		COREE_DU_NORD: "Corea(Rep\xFAblica Popular Democr\xE1tica de)",
		COREE_REPUBLIQUE_DE: "Corea(Rep\xFAblica de)",
		COSTA_RICA: "Costa Rica",
		COTE_D_IVOIRE: "Costa de Marfil",
		CROATIE: "Croacia",
		CUBA: "Cuba",
		CURACAO: "Curazao",
		DANEMARK: "Dinamarca",
		DJIBOUTI: "Yibuti",
		DOMINICAINE_REPUBLIQUE: "Rep\xFAblica Dominicana",
		DOMINIQUE: "Dominica",
		EGYPTE: "Egipto",
		EL_SALVADOR: "El Salvador",
		EMIRATS_ARABES_UNIS: "Emiratos \xC1rabes Unidos",
		EQUATEUR: "Ecuador",
		ERYTHREE: "Eritrea",
		ESPAGNE: "Espa\xF1a",
		ESTONIE: "Estonia",
		ETATS_FEDERES_DE_MICRONESIE: "Micronesia(Estados Federados de)",
		ETATS_UNIS: "Estados Unidos de Am\xE9rica",
		ETHIOPIE: "Etiop\xEDa",
		FALKLAND_ILES_MALVINAS: "Islas Malvinas(Falkland)",
		FEROE_ILES: "Islas Feroe",
		FIDJI: "Fiji",
		FINLANDE: "Finlandia",
		FRANCE: "Francia",
		GABON: "Gab\xF3n",
		GAMBIE: "Gambia",
		GEORGIE: "Georgia",
		GEORGIE_DU_SUD_ET_LES_ILES_SANDWICH_DU_SU: "Georgia del Sur y las Islas Sandwich del Sur",
		GHANA: "Ghana",
		GIBRALTAR: "Gibraltar",
		GRECE: "Grecia",
		GRENADE: "Granada",
		GROENLAND: "Groenlandia",
		GUADELOUPE: "Guadalupe",
		GUAM: "Guam",
		GUATEMALA: "Guatemala",
		GUERNESEY: "Guernesey",
		GUINEE: "Guinea",
		GUINEE_EQUATORIALE: "Guinea Ecuatorial",
		GUINEE_BISSAU: "Guinea - Bissau",
		GUYANA: "Guayana",
		GUYANE_FRANCAISE: "Guayana Francesa",
		HAITI: "Hait\xED",
		HEARD_ILE_ET_MCDONALD_ILES: "Islas Heard y MacDonald",
		HONDURAS: "Honduras",
		HONG_KONG: "Hong Kong",
		HONGRIE: "Hungr\xEDa",
		ILE_CHRISTMAS: "Navidad(Isla)",
		ILE_DE_MAN: "Isla de Man",
		ILE_NORFOLK: "Isla Norfolk",
		ILES_COOK: "Islas Cook",
		ILES_MARIANNES_DU_NORD: "Islas Marianas del Norte",
		ILES_MINEURES_ELOIGNEES_DES_ETATS_UNIS: "Islas Ultramarinas Menores de Estados Unidos",
		ILES_TURKS_ET_CAIQUES: "Islas Turcas y Caicos",
		ILES_VIERGES_BRITANNIQUES: "Islas V\xEDrgenes Brit\xE1nicas",
		ILES_VIERGES_DES_ETATS_UNIS: "Islas V\xEDrgenes Estadounidenses",
		INDE: "India",
		INDONESIE: "Indonesia",
		IRAN_REPUBLIQUE_ISLAMIQUE_D_: "Ir\xE1n(Rep\xFAblica Isl\xE1mica del)",
		IRAQ: "Iraq",
		IRLANDE: "Irlanda",
		ISLANDE: "Islandia",
		ISRAEL: "Israel",
		ITALIE: "Italia",
		JAMAIQUE: "Jamaica",
		JAPON: "Jap\xF3n",
		JERSEY: "Maillot",
		JORDANIE: "Jordania",
		KAZAKHSTAN: "Kazajst\xE1n",
		KENYA: "Kenia",
		KIRGHIZISTAN: "Kirguist\xE1n",
		KIRIBATI: "Kiribati",
		KOWEIT: "Kuwait",
		LAO_REPUBLIQUE_DEMOCRATIQUE_POPULAIRE: "Lao(Rep\xFAblica Democr\xE1tica Popular)",
		LESOTHO: "Lesoto",
		LETTONIE: "Letonia",
		LIBAN: "L\xEDbano",
		LIBERIA: "Liberia",
		LIBYENNE_JAMAHIRIYA_ARABE: "Libia",
		LIECHTENSTEIN: "Liechtenstein",
		LITUANIE: "Lituania",
		LUXEMBOURG: "Luxemburgo",
		MACAO: "Macao",
		MACEDOINE: "Macedonia(Antigua Rep\xFAblica Yugoslava de)",
		MADAGASCAR: "Madagascar",
		MALAISIE: "Malasia",
		MALAWI: "Malaui",
		MALDIVES: "Maldivas",
		MALI: "Mal\xED",
		MALTE: "Malta",
		MAROC: "Marruecos",
		MARSHALL_ILES: "Islas Marshall",
		MARTINIQUE: "Martinica",
		MAURICE: "Mauricio",
		MAURITANIE: "Mauritania",
		MAYOTTE: "Mayotte",
		MEXIQUE: "M\xE9xico",
		MOLDOVA: "Moldavia(Rep\xFAblica de)",
		MONGOLIE: "Mongolia",
		MONTENEGRO: "Montenegro",
		MONTSERRAT: "Montserrat",
		MOZAMBIQUE: "Mozambique",
		MYANMAR: "Myanmar",
		NAMIBIE: "Namibia",
		NAURU: "Nauru",
		NEPAL: "Nepal",
		NICARAGUA: "Nicaragua",
		NIGER: "N\xEDger",
		NIGERIA: "Nigeria",
		NIUE: "Niue",
		NORVEGE: "noruego",
		NOUVELLE_CALEDONIE: "Nueva Caledonia",
		NOUVELLE_ZELANDE: "Nueva Zelanda",
		OMAN: "Om\xE1n",
		OUGANDA: "Uganda",
		OUZBEKISTAN: "Uzbekist\xE1n",
		PAKISTAN: "Pakist\xE1n",
		PALAOS: "Palaos",
		PALESTINE_GAZA: "Palestina(Estado de)",
		PANAMA: "Panam\xE1",
		PAPOUASIE_NOUVELLE_GUINEE: "Pap\xFAa Nueva Guinea",
		PARAGUAY: "Paraguay",
		PAYS_BAS: "de los Pa\xEDses Bajos",
		PEROU: "Per\xFA",
		PHILIPPINES: "Filipinas",
		PITCAIRN: "Pitcairn",
		POLOGNE: "Polonia",
		POLYNESIE_FRANCAISE: "Polinesia Francesa",
		PORTO_RICO: "Puerto Rico",
		PORTUGAL: "Portugal",
		PRINCIPAUTE_DE_MONACO: "M\xF3naco",
		QATAR: "catar\xED",
		REUNION: "Reuni\xF3n",
		ROUMANIE: "Rumania",
		ROYAUME_UNI: "Reino Unido de Gran Breta\xF1a e Irlanda del Norte",
		RUSSIE_FEDERATION_DE: "Rusia",
		RWANDA: "Ruanda",
		SAHARA_OCCIDENTAL: "S\xE1hara Occidental",
		SAINT_BARTHELEMY: "San Bartolom\xE9",
		SAINTE_HELENE_ASCENSION_ET_TRISTAN_DA_CUN: "Santa Elena, Ascensi\xF3n y Trist\xE1n Da Cunha",
		SAINTE_LUCIE: "Santa Luc\xEDa",
		SAINT_KITTS_ET_NEVIS: "San Crist\xF3bal y Nieves",
		SAINT_MAARTIN: "Sint Maarten(Holand\xE9s)",
		SAINT_MARIN: "San Marino",
		SAINT_MARTIN: "San Mart\xEDn(franc\xE9s)",
		SAINT_PIERRE_ET_MIQUELON: "San Pedro y Miquel\xF3n",
		SAINT_SIEGE_ETAT_DE_LA_CITE_DU_VATICAN: "Santa Sede",
		SAINT_VINCENT_ET_LES_GRENADINES: "San Vicente y las Granadinas",
		SALOMON_ILES: "Islas Salom\xF3n",
		SAMOA: "Samoa",
		SAMOA_AMERICAINES: "Samoa Americana",
		SAO_TOME_ET_PRINCIPE: "Santo Tom\xE9 y Pr\xEDncipe",
		SENEGAL: "Senegal",
		SERBIE: "Serbia",
		SEYCHELLES: "Seychelles",
		SIERRA_LEONE: "Sierra Leona",
		SINGAPOUR: "Singapur",
		SLOVAQUIE: "Eslovaquia",
		SLOVENIE: "Eslovenia",
		SOMALIE: "Somalia",
		SOUDAN: "Sud\xE1n",
		SOUDAN_SUD: "Sud\xE1n del Sur",
		SRI_LANKA: "Sri Lanka",
		SUEDE: "Suecia",
		SUISSE: "Suiza",
		SURINAME: "Surinam",
		SVALBARD_ET_ILE_JAN_MAYEN: "Islas Svalbard y Jan Mayen",
		SWAZILAND: "eSwatini",
		SYRIENNE_REPUBLIQUE_ARABE: "Rep\xFAblica \xC1rabe Siria",
		TADJIKISTAN: "Tayikist\xE1n",
		TAIWAN_PROVINCE_DE_CHINE: "Taiw\xE1n(Provincia de China)",
		TANZANIE_REPUBLIQUE_UNIE_DE: "Tanzania(Rep\xFAblica Unida de)",
		TCHAD: "Chad",
		TCHEQUE_REPUBLIQUE: "Checa(Rep\xFAblica)",
		TERRES_AUSTRALES_FRANCAISES: "Territorios Australes Franceses",
		TERRITOIRE_BRITANNIQUE_DE_L_OCEAN_INDIEN: "Indio(Territorio del Oc\xE9ano Brit\xE1nico)",
		THAILANDE: "Tailandia",
		TIMOR_ORIENTAL: "Timor - Leste",
		TOGO: "Togo",
		TOKELAU: "Tokelau",
		TONGA: "Tonga",
		TRINITE_ET_TOBAGO: "Trinidad y Tobago",
		TUNISIE: "T\xFAnez",
		TURKMENISTAN: "Turkmenist\xE1n",
		TURQUIE: "Turqu\xEDa",
		TUVALU: "Tuvalu",
		UKRAINE: "Ucrania",
		URUGUAY: "Uruguay",
		VANUATU: "Vanuatu",
		VENEZUELA_REPUBLIQUE_BOLIVARIENNE_DU: "Venezuela(Rep\xFAblica Bolivariana de)",
		VIET_NAM: "Vietnam",
		WALLIS_ET_FUTUNA: "Wallis y Futuna",
		YEMEN: "Yemen",
		ZAMBIE: "Zambia",
		ZIMBABWE: "Zimbabue"
	}
};
