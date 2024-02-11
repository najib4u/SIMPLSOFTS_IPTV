// WWConstante5.js
/*! 24.0.1.0 */
/*! VersionVI: 01F250083h x */
// Le seul support technique disponible pour cette librairie est accessible a travers le service "Assistance Directe".

// Constantes pour les jours de la semaine
var STD_LUNDI = "Lundi";
var STD_MARDI = "Mardi";
var STD_MERCREDI = "Mercredi";
var STD_JEUDI = "Jeudi";
var STD_VENDREDI = "Vendredi";
var STD_SAMEDI = "Samedi";
var STD_DIMANCHE = "Dimanche";

// Constantes pour les mois de l'annee
var STD_JANVIER = "Janvier";
var STD_FEVRIER = "F\xE9vrier";
var STD_MARS = "Mars";
var STD_AVRIL = "Avril";
var STD_MAI = "Mai";
var STD_JUIN = "Juin";
var STD_JUILLET = "Juillet";
var STD_AOUT = "Ao\xFBt";
var STD_SEPTEMBRE = "Septembre";
var STD_OCTOBRE = "Octobre";
var STD_NOVEMBRE = "Novembre";
var STD_DECEMBRE = "D\xE9cembre";

// Constantes des menus contextuel des tables/zones repetees
// Exportations
var TABLE_EXPORT =
{
	EXCEL: { sLibelle: "Exporter vers Excel...", sTitre: "Exporter le contenu vers Excel..." },
	WORD: { sLibelle: "Exporter vers Word...", sTitre: "Exporter le contenu vers Word..." },
	XML: { sLibelle: "Exporter vers XML...", sTitre: "Exporter le contenu vers XML..." },
	PDF: { sLibelle: "Imprimer en PDF...", sTitre: "Imprimer vers un fichier PDF..." }
};
// Recherche/filre
var TABLE_FILTRE =
{
	RECHERCHE: { sLibelle: "Rechercher" },
	FILTRE: { sLibelle: "Filtres :" },
	FILTRE_EGAL: { sLibelle: "Est \xE9gal \xE0" },
	FILTRE_COMMENCE: { sLibelle: "Commence par" },
	FILTRE_CONTIENT: { sLibelle: "Contient" },
	FILTRE_TERMINE: { sLibelle: "Se termine par" },
//	FILTRE_VIDE: { sLibelle: "Est vide" },
	FILTRE_DIFFERENT: { sLibelle: "Est diff\xE9rent de" },
	FILTRE_COMMENCE_PAS: { sLibelle: "Ne commence pas par" },
	FILTRE_CONTIENT_PAS: { sLibelle: "Ne contient pas" },
	FILTRE_TERMINE_PAS: { sLibelle: "Ne se termine pas par" },
	FILTRE_SUPERIEUR: { sLibelle: "Sup\xE9rieur \xE0" },
	FILTRE_SUPERIEUR_EGAL: { sLibelle: "Sup\xE9rieur ou \xE9gal \xE0" },
	FILTRE_INFERIEUR: { sLibelle: "Inf\xE9rieur \xE0" },
	FILTRE_INFERIEUR_EGAL: { sLibelle: "Inf\xE9rieur ou \xE9gal \xE0" },
	FILTRE_SUPPRIME: { sLibelle: "Supprimer le filtre" }
};

// Constantes du menus contextuel des tableaux de bords
var TDB_MENU =
{
	EDITION: { sLibelle: "Edition" },
	CONFINIT: { sLibelle: "Restaurer la configuration initiale" }
};

// Messages d'erreur de debug
var STD_TITRE_TRACE = "Trace des codes navigateur de WEBDEV";
var STD_INFO_TRACE = "Utiliser Ctrl+P pour imprimer la fen\xEAtre de trace";
var STD_ERREUR_MESSAGE_UPLOAD = "L'upload a \xE9chou\xE9.\nUne erreur inattendue est survenue pendant l'upload d'un des fichiers.\nV\xE9rifiez que les fichiers \xE0 uploader ne sont pas trop volumineux.";
var STD_ERREUR_MESSAGE_VIDEO = "Impossible de trouver le fichier vid\xE9o : %1.\nPour corriger ce probl\xE8me :\n- V\xE9rifiez que le fichier existe toujours sur le serveur.\n- V\xE9rifiez que le serveur WEB ne bloque pas les fichiers de ce type.";

// Bulles et messages de la barre d'outils des champs graphes
var CHART_TOOLBAR =
{
	// Bulles des images
	ALTTEXT:
	{
		PIE: "Secteurs...",
		COL: "Histogrammes...",
		CUR: "Courbes...",
		STO: "Boursiers...",
		SAV: "Enregistrer sous...",
		PRI: "Imprimer...",
		LEG: "L\xE9gende",
		GDH: "Quadrillage Horizontal",
		GDV: "Quadrillage Vertical",
		SMO: "Lissage",
		GRA: "D\xE9grad\xE9",
		RAI: "Relief",
		ANT: "Anticr\xE9nelage",
		TRA: "Transparence",
		MIR: "Mire",
		ANI: "Animation",
		INT: "Interactivit\xE9",
		ZOH: "Zoom horizontal",
		ZOV: "Zoom vertical",
		FUS: "Plein \xE9cran"
	},

	// Textes du menu de la legende
	LEG:
	{
		0: "Aucune",
		1: "Droite",
		2: "Gauche",
		3: "Haut",
		4: "Bas"
	},

	// Texte des menus des types
	// Courbes
	PIE:
	{
		0: "Secteur",
		1: "H\xE9micycle",
		2: "Donut",
		3: "Entonnoir",
		4: "Secteur multiniveau"
	},
	// Histogrammes
	COL:
	{
		0: "Histogrammes group\xE9s",
		1: "Histogrammes empil\xE9s",
		2: "Histogrammes horizontaux group\xE9s",
		3: "Histogrammes horizontaux empil\xE9s",
		4: "Waterfall"
	},
	// Courbes
	CUR:
	{
		0: "Courbe",
		1: "Nuage de points",
		2: "Aire",
		3: "Radar",
		4: "Bulles",
		5: "Heatmap"
	},
	// Boursiers
	STO:
	{
		0: "Chandeliers japonais",
		1: "BarCharts",
		2: "Minimum Maximum"
	},
	// Tooltip
	MIR:
	{
		0: "Mire multiple",
		1: "Mire",
		2: "Bulle"
	}
	,
	//Parametres
	PARAMS: "Param\xE8tres"
};

// Bulles et messages de la barre d'outils du champ de saisie riche HTML
var HTML_TOOLBAR =
{
	DLG :
	{
		IMG : "Saisir l'adresse de l'image",
		LNK : "Saisir l'adresse du lien",
		MRG : "Saisir la valeur de la marge",
		ALT : "Saisir le texte alternatif de l'image",
		CPY : "Une copie de l'image sera int\xE9gr\xE9e au texte pour appliquer cette op\xE9ration",
		ERR : "Impossible d'effectuer l'op\xE9ration.\nLe domaine d'origine de l'image ne permet pas d'en faire une copie locale (CORS)",
		DBL : "Double-cliquez pour saisir la valeur de la marge"
	},
	// Bulles des boutons de la barre
	ALTTEXT:
	{
		GRA: "Gras",
		ITA: "Italique",
		SOU: "Soulign\xE9",
		BAR: "Barr\xE9",
		AGA: "Aligner \xE0 gauche",
		ACE: "Centrer",
		ADR: "Aligner \xE0 droite",
		AJU: "Justifier",
		LNU: "Num\xE9rotation",
		LPU: "Puces",
		RMO: "R\xE9duire le retrait",
		RPL: "Augmenter le retrait",
		EXP: "Exposant",
		IND: "Indice",
		COL: "Couleur",
		LNK: "Ins\xE9rer un lien",
		IMG: "Ins\xE9rer une image",
		FNA: "Police",
		FSI: "Taille de la police",
		EMO: "\xC9motic\xF4ne",
		UND: "Annuler",
		RED: "R\xE9tablir"
	},
	// Couleurs spéciales
	COSP:
	{
		0: "Initial"
	},
	// Couleurs de la palette
	COFP:
	{
		0: "G\xE9n\xE9ral",
		1: "Titre",
		2: "Sous-titre",
		3: "Note / avertissement"
	},
	COLP:
	{
		0: "G\xE9n\xE9ral",
		1: "Titre",
		2: "Sous-titre",
		3: "Lien (1)",
		4: "Lien (2)",
		5: "Note / avertissement"
	},
	FHE:
	{
		0: "Corps de texte", // Mieux vaut corps de texte que normal pour être moins ambigue par rapport au normal de niveau de titre
		1: "Titre 1",
		2: "Titre 2",
		3: "Titre 3",
		4: "Titre 4",
		5: "Titre 5",
		6: "Titre 6",
		7: "Pr\xE9format\xE9",
		8: "Surlign\xE9"
	},
	FSI:
	{
		0:"Petit",
		1:"Normal",
		2:"Un peu grand",
		3:"Grand",
		4:"Plus grand",
		5:"Tr\xE8s grand",
		6:"Vraiment tr\xE8s grand"
	},
	HAB:
	{
		0:"Au fil du texte",
		1:"A gauche",
		2:"A droite",
		3:"Paragraphe centr\xE9",
		4:"Paragraphe \xE9tir\xE9",
		5:"Modifier l'image",
		6:"Rogner (int\xE8gre une copie de l'image au texte)",
		7:"Pivoter \xE0 droite (int\xE8gre une copie de l'image au texte)",
		8:"Texte alternatif"
	},
	LNK:
	{
		0:"Ouvrir dans un nouvel onglet",
		1:"Modifier le lien",
		2:"Supprimer le lien"
	},
	EMO:
	{
		0:"Fr\xE9quents",
		1:"Personnes",
		2:"Nature",
		3:"Objets",
		4:"Lieux",
		5:"Symboles"
	}
};

var tabWDErrors =
{
	// Message generiques :
	0: "Erreur inconnue.",
	1: "Erreur dans le code navigateur :\n",
	// Commun entre plusieurs modules
	// WDLanguage.js
	200: "Indice de valeur incorrect : acc\xE8s \xE0 l'indice %1 alors qu'il n'y a que %2 valeur(s).",
	201: "El\xE9ment inexistant dans le tableau associatif.",
	202: "Le tableau associatif poss\xE8de %1 \xE9l\xE9ment(s) r\xE9f\xE9renc\xE9(s) par cette cl\xE9 et vous tentez d'acc\xE9der \xE0 l'\xE9l\xE9ment %2.",
	203: "La lecture d'un \xE9l\xE9ment de tableau associatif avec doublon est interdite par cette syntaxe car plusieurs \xE9l\xE9ments peuvent \xEAtre r\xE9f\xE9renc\xE9s par une m\xEAme cl\xE9.",
	204: "Format invalide.",
	205: "Les fonctions TableauVersCha\xEEne() et TableauVersCSV() ne peuvent \xEAtre utilis\xE9es que sur un tableau \xE0 une ou deux dimensions.",
	206: "Les fonctions TableauVersCha\xEEne() et TableauVersCSV() ne peuvent pas \xEAtre utilis\xE9es sur un tableau de structures, si la structure contient elle-m\xEAme un tableau ou une structure.",
	207: "Un ajout tri\xE9 ne peut \xEAtre effectu\xE9 que sur un tableau pr\xE9alablement tri\xE9 par un appel \xE0 la m\xE9thode Trie() ou \xE0 la m\xE9thode TableauTrie().",
	208: "Le tableau poss\xE8de %1 dimension(s) et vous y acc\xE9dez avec %2 dimension(s).",
	209: "Les dimensions d'un tableau doivent \xEAtre positives.",
	210: "Dimension ne permet pas de modifier le nombre de dimensions du tableau.",
	211: "La fonction %1()/%2() ne peut \xEAtre utilis\xE9e que sur un tableau \xE0 une dimension.",
	212: "La fonction %1()/%2() ne peut \xEAtre utilis\xE9e que sur un tableau \xE0 une ou deux dimensions.",
	213: "La fonction %1()/%2() ne peut \xEAtre utilis\xE9e que sur un tableau \xE0 deux dimensions.",
	214: "Le tri n'est pas disponible avec les objets natifs Javascript transmis \xE0 une proc\xE9dure WLangage.",
	215: "Le tableau dynamique n'a pas \xE9t\xE9 allou\xE9.",
	216: "Division par 0",
	217: "Vous devez indiquer le type de recherche (constantes tcDichotomique, tcLin\xE9aire, ...).",
	218: "Factorielle d'un nombre n\xE9gatif.",
	219: "Le mois doit \xEAtre une valeur comprise entre 1 et 12.",
	220: "Le chronom\xE8tre %1 n'est pas d\xE9marr\xE9.",
	// WDZRNavigateur.js
	300: "L'indice sp\xE9cifi\xE9 %1 est invalide : le champ est vide.",
	301: "L'indice sp\xE9cifi\xE9 %1 est invalide : les valeurs valides sont comprises entre %2 et %3.",
	302: "Colonne <%1> inconnue.",
	303: "La valeur de la constante (%1) est invalide avec cette fonction.",
	// WDSQL.js
	400: "La requ\xEAte <%1> n'existe pas.",
	401: "Il n'y a pas de connexion courante.",
	// WDAJAX.js
	500: "Erreur lors de l'envoi de la requ\xEAte :\n%1",
	// WDUtil.js
	600: "On ne peut pas affecter \xE0 une structure autre chose qu'une structure de m\xEAme d\xE9finition.",
	601: "Type incompatible.",
	602: "Op\xE9rateur '%1' interdit.",
	603: "Propri\xE9t\xE9 inexistante.",
	604: "Le param\xE8tre n\xb0%1 n'a pas de valeur par d\xE9faut et n'a pas re\xE7u de valeur.",
	605: "L'\xE9l\xE9ment '%1' n'existe pas.",
	606: "Aucun \xE9l\xE9ment courant.",
	607: "Format JSON invalide.",
	608: "La s\xE9rialisation JSON ne peut se faire que vers une variable de type cha\xEEne.",
	609: "La d\xE9s\xE9rialisation JSON ne peut se faire que vers une variable de type complexe.",
	610: "Le champ (alias : '%1') ne peut pas \xEAtre manipul\xE9 car il n'est pas pr\xE9sent dans le HTML de la page.\nCe champ est (directement ou indirectement) dans un plan avec chargement diff\xE9r\xE9 qui n'a pas encore \xE9t\xE9 affich\xE9 (et donc charg\xE9).",
	611: "Le champ (alias : '%1') ne peut pas \xEAtre manipul\xE9 car il n'est pas pr\xE9sent dans le HTML de la page.\nCe champ (ou un de ses parents) est invisible et l'option 'G\xE9n\xE9rer le code HTML du champ, m\xEAme s'il est invisible' n'est pas activ\xE9e.",
	612: "Indice de param\xE8tre incorrect : vous acc\xE8dez au param\xE8tre %1 alors qu'il y a %2 param\xE8tre(s).",
	613: "Les param\xE8tres d'appel du code sont incorrects : on attendait %1 param\xE8tres et on en a re\xE7u %2.",
	614: "Les param\xE8tres d'appel du code sont incorrects : on attendait entre %1 et %2 param\xE8tres et on en a re\xE7u %3.",
	615: "L'objet dynamique n'a pas encore \xE9t\xE9 allou\xE9.",
	616: "L'\xE9l\xE9ment '%1' n'existe pas.\nL'utilisation d'une syntaxe objet (\"ChampListe.Ajoute\" par exemple) n'est autoris\xE9e que sur un champ manipul\xE9 par son nom, sur un param\xE8tre typ\xE9 ou sur une variable.",
	617: "Champ '%1' obligatoire",
	618: "Il est impossible d'affecter un objet de classe '%1' dans un objet de classe '%2'.",
	619: "Le variant n'est pas un objet.",
	// WDRating.js
	700: "Les bornes sont invers\xE9es : la borne sup\xE9rieure (%2) est inf\xE9rieure \xE0 la borne inf\xE9rieure (%1).",
	// WD.js
	// - Sockets
	800: "Les sockets ne sont pas disponibles.",
	801: "Vous avez appel\xE9 la fonction SocketConnecte en demandant %1 comme nom pour la socket.\nOr, une socket de ce nom existe d\xE9j\xE0.",
	802: "Vous avez appel\xE9 la fonction SocketEcrit.\nLa socket de nom %1 n'existe pas.",
	803: "Vous avez appel\xE9 la fonction SocketFerme.\nLa socket de nom %1 n'existe pas.",
	804: "Vous avez appel\xE9 la fonction SocketEcrit.\nLa socket de nom %1 n'est pas encore connect\xE9.",
	805: "Vous avez appel\xE9 la fonction SocketEcrit.\nLa socket de nom %1 est ferm\xE9e.",
	// - Conversions de types
	900: "Le passage du param\xE8tre %1 a provoqu\xE9 une erreur.\nDans le cas d'un passage de param\xE8tre par adresse, un \xE9l\xE9ment de type '%2' ne peut pas \xEAtre converti vers le type '%3'. Utilisez un param\xE8tre local dans la proc\xE9dure appel\xE9e ou passez un param\xE8tre de type '%3'.",
	901: "Le nom/la valeur '%1' n'existe pas dans l'\xE9num\xE9ration/combinaison ou a \xE9t\xE9 supprim\xE9e ou renomm\xE9e.",
	902: "La valeur '%1' de l'\xE9num\xE9ration n'a pas de valeur associ\xE9e.",
	903: "Un \xE9l\xE9ment de type '%2' ne peut pas \xEAtre converti vers le type '%1'.",
	// - Champs
	1000: "La valeur de la propri\xE9t\xE9 ..JetonSaisieEnCours ne doit pas contenir de s\xE9parateurs de jetons.",
	1001: "Le champ (alias : '%1') n'est pas en cours de saisie.",
	// - Dino JSON
	1100: "Le variant contient d\xE9j\xE0 un membre '%1'."
};

//Graphe
// - grFormatBulleBoursier : valeur par defaut
var GRF = {
	BULLE: {
		BOURSIER: "[%CATEGORIE%]\nMin.=[%MIN%]\nMax.=[%MAX%]\nD\xE9but=[%DEBUT%]\nFin=[%FIN%]"
	}
};

//Constantes de la STD
var WDSTD_CONST =
{
	//Formats TailleVersChaine
	FORMAT_TAILLE_OCTET: "octet",	//octet
	FORMAT_TAILLE_KO: "Ko",			//Kilo-octet
	FORMAT_TAILLE_MO: "Mo",			//Mega-octet
	FORMAT_TAILLE_GO: "Go",			//Giga-octet
	FORMAT_TAILLE_TO: "To",			//Tera-octet

	//Constantes continent de la STD
	CONTINENT:
	{
		AFRIQUE: "Afrique",
		AMERIQUE_DU_NORD: "Am\xE9rique du Nord",
		AMERIQUE_DU_SUD: "Am\xE9rique du Sud",
		ANTARCTIQUE: "Antarctique",
		ASIE: "Asie",
		EUROPE: "Europe",
		OCEANIE: "Oc\xE9anie"
	},

	//Constantes pays de la STD
	PAYS:
	{
		AFGHANISTAN: "Afghanistan",
		AFRIQUE_DU_SUD: "Afrique du Sud",
		ALAND_ILES: "Aland (Iles)",
		ALBANIE: "Albanie",
		ALGERIE: "Alg\xE9rie",
		ALLEMAGNE: "Allemagne",
		ANDORRE: "Andorre",
		ANGOLA: "Angola",
		ANGUILLA: "Anguilla",
		ANTARCTIQUE: "Antarctique",
		ANTIGUA_ET_BARBUDA: "Antigua-et-Barbuda",
		ARABIE_SAOUDITE: "Arabie Saoudite",
		ARGENTINE: "Argentine",
		ARMENIE: "Arm\xE9nie",
		ARUBA: "Aruba",
		AUSTRALIE: "Australie",
		AUTRICHE: "Autriche",
		AZERBAIDJAN: "Azerba\xEFdjan",
		BAHAMAS: "Bahamas",
		BAHREIN: "Bahre\xEFn",
		BANGLADESH: "Bangladesh",
		BARBADE: "Barbade",
		BELARUS: "B\xE9larus",
		BELGIQUE: "Belgique",
		BELIZE: "Belize",
		BENIN: "B\xE9nin",
		BERMUDES: "Bermudes",
		BHOUTAN: "Bhoutan",
		BOLIVIE_L_ETAT_PLURINATIONAL_DE: "Bolivie (Etat plurinational de)",
		BONAIRE_SAINT_EUSTACHE_ET_SABA: "Bonaire, Saint-Eustache et Saba",
		BOSNIE_HERZEGOVINE: "Bosnie-Herz\xE9govine",
		BOTSWANA: "Botswana",
		BOUVET_ILE: "Bouvet (Ile)",
		BRESIL: "Br\xE9sil",
		BRUNEI_DARUSSALAM: "Brun\xE9i Darussalam",
		BULGARIE: "Bulgarie",
		BURKINA_FASO: "Burkina Faso",
		BURUNDI: "Burundi",
		CAIMANES_ILES: "Ca\xEFmans (Iles)",
		CAMBODGE: "Cambodge",
		CAMEROUN: "Cameroun",
		CANADA: "Canada",
		CAP_VERT: "Cabo Verde",
		CENTRAFRICAINE_REPUBLIQUE: "R\xE9publique centrafricaine",
		CHILI: "Chili",
		CHINE: "Chine",
		CHYPRE: "Chypre",
		COCOS_KEELING_ILES: "Cocos (Iles) / Keeling  (Iles)",
		COLOMBIE: "Colombie",
		COMORES: "Comores",
		CONGO: "Congo",
		CONGO_RD: "Congo (R\xE9publique d\xE9mocratique du)",
		COREE_DU_NORD: "Cor\xE9e (R\xE9publique populaire d\xE9mocratique de)",
		COREE_REPUBLIQUE_DE: "Cor\xE9e (R\xE9publique de)",
		COSTA_RICA: "Costa Rica",
		COTE_D_IVOIRE: "C\xF4te d'Ivoire",
		CROATIE: "Croatie",
		CUBA: "Cuba",
		CURACAO: "Cura\xE7ao",
		DANEMARK: "Danemark",
		DJIBOUTI: "Djibouti",
		DOMINICAINE_REPUBLIQUE: "Dominicaine (R\xE9publique)",
		DOMINIQUE: "Dominique",
		EGYPTE: "Egypte",
		EL_SALVADOR: "El Salvador",
		EMIRATS_ARABES_UNIS: "Emirats arabes unis",
		EQUATEUR: "Equateur",
		ERYTHREE: "Erythr\xE9e",
		ESPAGNE: "Espagne",
		ESTONIE: "Estonie",
		ETATS_FEDERES_DE_MICRONESIE: "Micron\xE9sie (Etats f\xE9d\xE9r\xE9s de)",
		ETATS_UNIS: "Etats-Unis d'Am\xE9rique",
		ETHIOPIE: "Ethiopie",
		FALKLAND_ILES_MALVINAS: "Falkland (Iles) / Malouines (Iles)",
		FEROE_ILES: "F\xE9ro\xE9 (Iles)",
		FIDJI: "Fidji",
		FINLANDE: "Finlande",
		FRANCE: "France",
		GABON: "Gabon",
		GAMBIE: "Gambie",
		GEORGIE: "G\xE9orgie",
		GEORGIE_DU_SUD_ET_LES_ILES_SANDWICH_DU_SU: "G\xE9orgie du Sud-et-les Iles Sandwich du Sud",
		GHANA: "Ghana",
		GIBRALTAR: "Gibraltar",
		GRECE: "Gr\xE8ce",
		GRENADE: "Grenade",
		GROENLAND: "Groenland",
		GUADELOUPE: "Guadeloupe",
		GUAM: "Guam",
		GUATEMALA: "Guatemala",
		GUERNESEY: "Guernesey",
		GUINEE: "Guin\xE9e",
		GUINEE_EQUATORIALE: "Guin\xE9e \xE9quatoriale",
		GUINEE_BISSAU: "Guin\xE9e-Bissau",
		GUYANA: "Guyana",
		GUYANE_FRANCAISE: "Guyane fran\xE7aise",
		HAITI: "Ha\xEFti",
		HEARD_ILE_ET_MCDONALD_ILES: "Heard-et-Iles MacDonald (Ile)",
		HONDURAS: "Honduras",
		HONG_KONG: "Hong Kong",
		HONGRIE: "Hongrie",
		ILE_CHRISTMAS: "Christmas (Ile)",
		ILE_DE_MAN: "Ile de Man",
		ILE_NORFOLK: "Norfolk (Ile)",
		ILES_COOK: "Cook (Iles)",
		ILES_MARIANNES_DU_NORD: "Mariannes du Nord (Iles)",
		ILES_MINEURES_ELOIGNEES_DES_ETATS_UNIS: "Iles mineures \xE9loign\xE9es des Etats-Unis",
		ILES_TURKS_ET_CAIQUES: "Turks et Ca\xEFcos (Iles)",
		ILES_VIERGES_BRITANNIQUES: "Vierges britanniques (Iles)",
		ILES_VIERGES_DES_ETATS_UNIS: "Vierges des Etats-Unis (Iles)",
		INDE: "Inde",
		INDONESIE: "Indon\xE9sie",
		IRAN_REPUBLIQUE_ISLAMIQUE_D_: "Iran (R\xE9publique Islamique d')",
		IRAQ: "Iraq",
		IRLANDE: "Irlande",
		ISLANDE: "Islande",
		ISRAEL: "Isra\xEBl",
		ITALIE: "Italie",
		JAMAIQUE: "Jama\xEFque",
		JAPON: "Japon",
		JERSEY: "Jersey",
		JORDANIE: "Jordanie",
		KAZAKHSTAN: "Kazakhstan",
		KENYA: "Kenya",
		KIRGHIZISTAN: "Kirghizistan",
		KIRIBATI: "Kiribati",
		KOWEIT: "Kowe\xEFt",
		LAO_REPUBLIQUE_DEMOCRATIQUE_POPULAIRE: "Lao (R\xE9publique d\xE9mocratique populaire)",
		LESOTHO: "Lesotho",
		LETTONIE: "Lettonie",
		LIBAN: "Liban",
		LIBERIA: "Lib\xE9ria",
		LIBYENNE_JAMAHIRIYA_ARABE: "Libye",
		LIECHTENSTEIN: "Liechtenstein",
		LITUANIE: "Lituanie",
		LUXEMBOURG: "Luxembourg",
		MACAO: "Macao",
		MACEDOINE: "Mac\xE9doine (ex-R\xE9publique yougoslave de)",
		MADAGASCAR: "Madagascar",
		MALAISIE: "Malaisie",
		MALAWI: "Malawi",
		MALDIVES: "Maldives",
		MALI: "Mali",
		MALTE: "Malte",
		MAROC: "Maroc",
		MARSHALL_ILES: "Marshall (Iles)",
		MARTINIQUE: "Martinique",
		MAURICE: "Maurice",
		MAURITANIE: "Mauritanie",
		MAYOTTE: "Mayotte",
		MEXIQUE: "Mexique",
		MOLDOVA: "Moldova (R\xE9publique de)",
		MONGOLIE: "Mongolie",
		MONTENEGRO: "Mont\xE9n\xE9gro",
		MONTSERRAT: "Montserrat",
		MOZAMBIQUE: "Mozambique",
		MYANMAR: "Myanmar",
		NAMIBIE: "Namibie",
		NAURU: "Nauru",
		NEPAL: "N\xE9pal",
		NICARAGUA: "Nicaragua",
		NIGER: "Niger",
		NIGERIA: "Nig\xE9ria",
		NIUE: "Niue",
		NORVEGE: "Norv\xE8ge",
		NOUVELLE_CALEDONIE: "Nouvelle-Cal\xE9donie",
		NOUVELLE_ZELANDE: "Nouvelle-Z\xE9lande",
		OMAN: "Oman",
		OUGANDA: "Ouganda",
		OUZBEKISTAN: "Ouzb\xE9kistan",
		PAKISTAN: "Pakistan",
		PALAOS: "Palaos",
		PALESTINE_GAZA: "Palestine (Etat de)",
		PANAMA: "Panama",
		PAPOUASIE_NOUVELLE_GUINEE: "Papouasie-Nouvelle-Guin\xE9e",
		PARAGUAY: "Paraguay",
		PAYS_BAS: "Pays-Bas",
		PEROU: "P\xE9rou",
		PHILIPPINES: "Philippines",
		PITCAIRN: "Pitcairn",
		POLOGNE: "Pologne",
		POLYNESIE_FRANCAISE: "Polyn\xE9sie fran\xE7aise",
		PORTO_RICO: "Porto Rico",
		PORTUGAL: "Portugal",
		PRINCIPAUTE_DE_MONACO: "Monaco",
		QATAR: "Qatar",
		REUNION: "R\xE9union",
		ROUMANIE: "Roumanie",
		ROYAUME_UNI: "Royaume-Uni de Grande-Bretagne et d'Irlande du Nord",
		RUSSIE_FEDERATION_DE: "Russie (F\xE9d\xE9ration de)",
		RWANDA: "Rwanda",
		SAHARA_OCCIDENTAL: "Sahara occidental",
		SAINT_BARTHELEMY: "Saint-Barth\xE9lemy",
		SAINTE_HELENE_ASCENSION_ET_TRISTAN_DA_CUN: "Sainte-H\xE9l\xE8ne, Ascension et Tristan Da Cunha",
		SAINTE_LUCIE: "Sainte-Lucie",
		SAINT_KITTS_ET_NEVIS: "Saint-Kitts-Et-Nevis",
		SAINT_MAARTIN: "Saint-Martin (partie n\xE9erlandaise)",
		SAINT_MARIN: "Saint-Marin",
		SAINT_MARTIN: "Saint-Martin (partie fran\xE7aise)",
		SAINT_PIERRE_ET_MIQUELON: "Saint-Pierre-et-Miquelon",
		SAINT_SIEGE_ETAT_DE_LA_CITE_DU_VATICAN: "Saint-Si\xE8ge",
		SAINT_VINCENT_ET_LES_GRENADINES: "Saint-Vincent-et-les Grenadines",
		SALOMON_ILES: "Salomon (Iles)",
		SAMOA: "Samoa",
		SAMOA_AMERICAINES: "Samoa am\xE9ricaines",
		SAO_TOME_ET_PRINCIPE: "Sao Tom\xE9-et-Principe",
		SENEGAL: "S\xE9n\xE9gal",
		SERBIE: "Serbie",
		SEYCHELLES: "Seychelles",
		SIERRA_LEONE: "Sierra Leone",
		SINGAPOUR: "Singapour",
		SLOVAQUIE: "Slovaquie",
		SLOVENIE: "Slov\xE9nie",
		SOMALIE: "Somalie",
		SOUDAN: "Soudan",
		SOUDAN_SUD: "Soudan du Sud",
		SRI_LANKA: "Sri Lanka",
		SUEDE: "Su\xE8de",
		SUISSE: "Suisse",
		SURINAME: "Suriname",
		SVALBARD_ET_ILE_JAN_MAYEN: "Svalbard et l'Ile Jan Mayen",
		SWAZILAND: "Swaziland",
		SYRIENNE_REPUBLIQUE_ARABE: "R\xE9publique arabe syrienne",
		TADJIKISTAN: "Tadjikistan",
		TAIWAN_PROVINCE_DE_CHINE: "Ta\xEFwan (Province de Chine)",
		TANZANIE_REPUBLIQUE_UNIE_DE: "Tanzanie (R\xE9publique-Unie de)",
		TCHAD: "Tchad",
		TCHEQUE_REPUBLIQUE: "Tch\xE8que (R\xE9publique)",
		TERRES_AUSTRALES_FRANCAISES: "Terres australes fran\xE7aises",
		TERRITOIRE_BRITANNIQUE_DE_L_OCEAN_INDIEN: "Indien (Territoire britannique de l'oc\xE9an)",
		THAILANDE: "Tha\xEFlande",
		TIMOR_ORIENTAL: "Timor-Leste",
		TOGO: "Togo",
		TOKELAU: "Tokelau",
		TONGA: "Tonga",
		TRINITE_ET_TOBAGO: "Trinit\xE9-et-Tobago",
		TUNISIE: "Tunisie",
		TURKMENISTAN: "Turkm\xE9nistan",
		TURQUIE: "Turquie",
		TUVALU: "Tuvalu",
		UKRAINE: "Ukraine",
		URUGUAY: "Uruguay",
		VANUATU: "Vanuatu",
		VENEZUELA_REPUBLIQUE_BOLIVARIENNE_DU: "Venezuela (R\xE9publique bolivarienne du)",
		VIET_NAM: "Viet Nam",
		WALLIS_ET_FUTUNA: "Wallis-et-Futuna",
		YEMEN: "Y\xE9men",
		ZAMBIE: "Zambie",
		ZIMBABWE: "Zimbabwe"
	}
};
