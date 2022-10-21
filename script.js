const gris="rgb(211, 214, 218)";
var principal= new Array(2779);
var palabra = [];
var leer = [];
var aux = new Array(0);

function iniciar(){

  movimientos=1;
  document.getElementById('etiquetaNumMovs').innerHTML="Número de palabras probadas: " + movimientos;
  
  document.getElementById('casilla1').style.backgroundColor=gris;
  document.getElementById('casilla2').style.backgroundColor=gris;
  document.getElementById('casilla3').style.backgroundColor=gris;
  document.getElementById('casilla4').style.backgroundColor=gris;


  principal = ["OSEA", "ASEA", "ENEA", "ANEE", "AREA", "ANEA", "ALEE", "AEDA", "OSEE", "ALEA", 
"AETA", "ATEA", "ESES", "OREE", "ASEO", "ASEE", "ENEO", "APEE", "ESER", "SERE", "SEER", "RESE", 
"ERES", "ASES", "SEAS", "ESAS", "SENE", "ENES", "OREA", "ANEO", "APEA", "SEDE", "DESE", "ERRE", 
"ARES", "RAES", "RASE", "REAS", "ERAS", "SERA", "ASAS", "OLEE", "RENE", "EREN", "ASEN", "SANE", 
"NEAS", "SENA", "SEAN", "AYEE", "NENE", "AEDO", "OTEE", "AFEE", "ANOA", "AJEE", "LEES", "ELES", 
"REDE", "EDRE", "DESA", "SEDA", "DEAS", "CESE", "SECE", "ESTE", "TESE", "SETE", "RAER", "ARRE", 
"ERAR", "ERRA", "EDEN", "ENDE", "ASAR", "ARAS", "RASA", "ALEO", "ALOE", "OLEA", "AREN", "RAEN", 
"ERAN", "ANSA", "ASNA", "NASA", "ASAN", "SANA", "ANAS", "AYEA", "NENA", "ATEO", "ATOE", "OTEA", 
"IDEE", "AFEA", "AIRE", "ERIA", "EIRA", "REIA", "ASIA", "AISA", "LEER", "RELE", "AJEA", "LESA", 
"SALE", "LEAS", "LEEN", "LENE", "OSEO", "ARDE", "RAED", "REDA", "ERAD", "DREA", "DARE", "EDRA", 
"ADRE", "CREE", "RECE", "ASAD", "SECA", "CESA", "ESCA", "CEAS", "CAES", "CASE", "RETE", "ETER", 
"TEAS", "TESA", "TASE", "ATES", "ETAS", "SETA", "ESTA", "ARRA", "ARAR", "RARA", "ANDE", "DEAN", 
"NADE", "CENE", "ENTE", "TENE", "ARNA", "ARAN", "RANA", "EMES", "MEES", "MESE", "NANA", "ATOA", 
"IDEA", "ESOS", "OSES", "SESO", "ADIE", "SEOS", "DELE", "LEED", "ARIA", "RAIA", "AIRA", "AREL", 
"LERA", "REAL", "ERAL", "ARLE", "AINA", "LASA", "ALAS", "SALA", "EDAD", "OREO", "CEDE", "LEAN", 
"LENA", "PEES", "PESE", "SEPE", "RADA", "ARAD", "ARDA", "DARA", "ADRA", "ARCE", "ACRE", "CREA", 
"CERA", "CAER", "SACA", "ASCA", "CASA", "ACAS", "TARE", "ARTE", "RETA", "TRAE", "ASTA", "TASA", 
"ATAS", "SATA", "ANDA", "NADA", "ADAN", "CANE", "ACNE", "NACE", "CENA", "CAEN", "ATEN", "TENA", 
"NETA", "ENTA", "ANTE", "ALIE", "LEIA", "APEO", "MERE", "REME", "MESA", "SEMA", "MEAS", "MASE", 
"AMES", "ELLE", "NEME", "MEEN", "MENE", "ROSE", "ROES", "ORES", "SEOR", "EROS", "REOS", "SAOS", 
"ADIA", "OSAS", "SOSA", "AITE", "SENO", "NEOS", "OSEN", "SONE", "DEAL", "LEDA", "CELE", "UREA", 
"TELE", "ALAR", "ARLA", "RALA", "AUNE", "DADA", "SEBE", "BESE", "CAED", "CEDA", "PEER", "ANAL", 
"ALNA", "LANA", "ALAN", "ASPE", "DATE", "SEPA", "PASE", "PESA", "TEDA", "PEAS", "TETE", "ARCA", 
"CARA", "PEEN", "PENE", "NEPE", "RATA", "TARA", "ARTA", "ATAR", "OJEE", "NACA", "ANCA", "CANA", 
"ANTA", "NATA", "TANA", "ATAN", "ALIA", "OXEE", "ARME", "MEAR", "REMA", "MERA", "DESO", "SEDO", 
"SAMA", "AMAS", "MASA", "ASMA", "LEAL", "ELLA", "LELA", "ROER", "ERRO", "RORE", "MANE", "MENA", 
"AMEN", "MEAN", "NEMA", "ROAS", "ROSA", "AROS", "ORAS", "SORA", "RASO", "OSAR", "EFES", "OLEO", 
"CAIA", "ORNE", "OREN", "ROEN", "RENO", "ONAS", "NAOS", "NASO", "SANO", "ANOS", "ASNO", "OSAN", 
"SONA", "SESI", "SEIS", "SISE", "DALA", "SIES", "LADA", "ALCE", "ACLE", "LACE", "CELA", "CALE", 
"AURA", "LATE", "TAEL", "TELA", "TALE", "AYEO", "AOVE", "SEJE", "NEON", "EJES", "PEED", "ANUA", 
"AUNA", "OTEO", "BREE", "BESA", "BASE", "ABES", "SABE", "DACA", "CADA", "PERA", "RAPE", "ARPE", 
"PREA", "PARE", "AFEO", "CACE", "CECA", "SEXE", "DATA", "SAPA", "ATAD", "ASPA", "PASA", "TECA", 
"TACE", "CATE", "ERIO", "OIRE", "LEME", "MELE", "TATE", "TETA", "ASIO", "OIAS", "PENA", "PEAN", 
"AZOE", "AJEO", "AOJE", "OJEA", "LEOS", "LOES", "OLES", "LOSE", "SOLE", "LESO", "MEAD", "MEDA", 
"GEAS", "SEGA", "MECE", "METE", "TEME", "VERE", "VEER", "REYE", "REVE", "OXEA", "AVES", "REDO", 
"AYES", "DORE", "ROED", "EDRO", "ODRE", "RODE", "VEAS", "AMAR", "RAMA", "ARMA", "MARA", "SODA", 
"OSAD", "ODAS", "COSE", "CESO", "ECOS", "CEOS", "SECO", "ALLA", "TOES", "NEVE", "TESO", "SOTE", 
"PEIA", "OSTE", "TOSE", "SETO", "ESTO", "ORAR", "RARO", "RORA", "DONE", "ONDE", "AMAN", "MANA", 
"FEAS", "FASE", "PELE", "ECUA", "ROAN", "RANO", "ORNA", "ORAN", "ARON", "RIES", "REIS", "IRES", 
"ASIS", "SISA", "ISAS", "LACA", "ALCA", "CALA", "ACAL", "ALTA", "LATA", "TALA", "ATAL", "DEBE", 
"AOVA", "NONA", "JEAS", "SAJE", "AJES", "ANON", "JASE", "SIEN", "NEIS", "PECE", "ATOO", "PETE", 
"ABRE", "TEPE", "BREA", "IDEO", "ODIE", "AMIA", "BASA", "ARPA", "RAPA", "PARA", "CACA", "SEXA", 
"TACA", "ACTA", "CATA", "AMEL", "ARIO", "LAME", "AIRO", "OIRA", "LEMA", "MELA", "ROIA", "TATA", 
"NAPA", "PANA", "SETS", "AZOA", "LERO", "ROEL", "ROLE", "ORLE", "OLER", "AOJA", "OIAN", "SOLA", 
"SALO", "OLAS", "LOAS", "LOSA", "LASO", "VEDE", "REGA", "AGRE", "DEDO", "DAMA", "AMAD", "ASGA", 
"SAGA", "GASA", "MACE", "LEON", "MECA", "CEMA", "LOEN", "ACME", "TEMA", "MATE", "META", "YARE", 
"RAYE", "VERA", "VARE", "REYA", "AYER", "AULA", "ALUA", "ARDO", "AYAS", "SAYA", "RODA", "VASA", 
"DORA", "ORAD", "ADRO", "ADOR", "NEGA", "GANE", "HEDE", "ROCE", "CROE", "CREO", "OCRE", "CORE", 
"CERO", "ORCE", "SACO", "ASCO", "OCAS", "COAS", "CAOS", "CASO", "COSA", "SOCA", "OSCA", "TERO", 
"TREO", "ROTE", "RETO", "OTRE", "VENA", "AVEN", "SOTA", "VEAN", "TOSA", "TASO", "NEVA", "NAVE", 
"SATO", "TOAS", "TAOS", "OSTA", "HARE", "ANDO", "NADO", "DONA", "ONDA", "AFER", "DEIS", "RAFE", 
"ARFE", "CENO", "ONCE", "NETO", "NOTE", "TONE", "TOEN", "PALE", "PEAL", "PELA", "AUCA", "REIR", 
"DEJE", "JEDE", "RIAS", "ASIR", "SARI", "IRAS", "RISA", "SIRA", "RASI", "REZA", "ILEO", "USES", 
"ASAZ", "RAJE", "REJA", "JERA", "RIEN", "DEBA", "MESO", "SAJA", "AJAS", "JASA", "ANSI", "ANIS", 
"ASIN", "NIAS", "SAIN", "SIAN", "CEBE", "ENZA", "CEPA", "CAPE", "PACE", "PECA", "VEIA", "AJEN", 
"JAEN", "AVIE", "NEJA", "JANE", "RABA", "PETA", "PATE", "ABAR", "TAPE", "ABRA", "GELE", "ADIO", 
"OSOS", "OIDA", "SOSO", "ODIA", "OCIE", "VELE", "LEVE", "LEDO", "DOLE", "OLED", "NABA", "ALMA", 
"MALA", "LAMA", "TRES", "EURO", "ROLA", "LOAR", "ORAL", "LORA", "RALO", "ORLA", "ARLO", "HELE", 
"VEDA", "VADE", "VECE", "GARA", "AGRA", "DADO", "CEDO", "DOCE", "CAMA", "ALON", "ALNO", "LOAN", 
"MACA", "VETE", "LONA", "LIES", "EPOS", "DOTE", "POSE", "SOPE", "PESO", "MATA", "RAYA", "VARA", 
"GANA", "RACO", "ARCO", "ORCA", "OCRA", "CORA", "ROCA", "CARO", "CROA", "ECHE", "ABIA", "TORA", 
"ROTA", "RATO", "ARTO", "OTRA", "OTAR", "TOAR", "TARO", "TEFE", "ANAY", "NAVA", "YANA", "VANA", 
"DIRE", "REID", "AUPE", "HARA", "IDAS", "FARA", "DAIS", "ARFA", "RAFA", "AFRA", "SIDA", "DIAS", 
"ASID", "BALE", "LABE", "NACO", "CANO", "BELA", "NOCA", "ZADE", "ICES", "CIES", "ZEDA", "TANO", 
"TONA", "NATO", "NOTA", "TOAN", "LAPA", "PALA", "DEJA", "JADE", "MAME", "JEDA", "MEMA", "CEJE", 
"OBOE", "AFAN", "RUES", "RAZA", "AZAR", "TEJE", "ALIO", "JETE", "OLIA", "USAS", "MORE", "MERO", 
"MOER", "PEPE", "REMO", "AJAR", "RAJA", "JARA", "IRAN", "RIAN", "RAIN", "BADA", "SOMA", "AMOS", 
"MASO", "ABAD", "DABA", "CEBA", "BECA", "CABE", "UNES", "USEN", "ELLO", "LELO", "ZANA", "BATE", 
"BETA", "PACA", "CAPA", "MENO", "MEON", "NOME", "AJAN", "NAJA", "OROS", "SORO", "ROSO", "AVIA", 
"PATA", "APTA", "TAPA", "LEGA", "GELA", "OCIA", "IOTA", "LAVE", "VALE", "LAYE", "YALE", "LEVA", 
"VELA", "CRAS", "SONO", "LADO", "LOAD", "DOLA", "LECO", "CELO", "OCLE", "URAO", "COLE", "TRAS", 
"RAND", "TOLE", "LOTE", "DAGA", "CEGA", "IRIA", "TREN", "HELA", "HALE", "ALEF", "ALFE", "SANT", 
"ANUO", "AUNO", "GETA", "YACE", "CAVE", "RILE", "RIEL", "SEBO", "BESO", "SOBE", "DOCA", "CADO", 
"CODA", "PERO", "PEOR", "TEYA", "VATE", "REPO", "YATE", "VETA", "ALIS", "SALI", "LISA", "ISLA", 
"LAIS", "LIAS", "COCE", "ASPO", "SOPA", "TODA", "TOAD", "POSA", "APOS", "POAS", "DOTA", "PASO", 
"OPAS", "DATO", "SAPO", "COTE", "TOCE", "TETO", "TOTE", "LEJA", "HADA", "JALE", "FADA", "LIEN", 
"NIEL", "ECHA", "HACE", "OPEN", "PONE", "PEON", "PENO", "CAFE", "FETA", "ARDI", "DRIA", "DIRA", 
"ADIR", "AUPA", "OJEO", "RICE", "CRIE", "CREI", "BALA", "ALBA", "SUDE", "DAZA", "CAIS", "CASI", 
"CIAS", "TIRE", "TRIE", "RITE", "LAXE", "TASI", "SITA", "TIAS", "MEDO", "DOME", "DEMO", "MAMA", 
"ZETA", "AJAD", "JADA", "GEOS", "NADI", "EGOS", "SEGO", "DINA", "INDA", "CEJA", "CINE", "CIEN", 
"CENI", "ICEN", "RUSA", "URAS", "RUAS", "USAR", "SURA", "TEJA", "TAJE", "JATE", "JETA", "OXEO", 
"YESO", "OVES", "YOES", "EVOS", "OYES", "AMOR", "MARO", "ROMA", "PEPA", "PAPE", "MORA", "RAMO", 
"ARMO", "FEME", "RUEN", "BACA", "AUGE", "AGUE", "UNAS", "LOLA", "OLLA", "USAN", "XECA", "TABA", 
"BATA", "RORO", "NOMA", "MONA", "MANO", "MIES", "MISE", "UVEA", "GALA", "PRES", "ALGA", "REPS", 
"FOSE", "FEOS", "UNEN", "AQUE", "ECUO", "MEJE", "JEME", "EJEM", "ORNO", "ORON", "LAYA", "LAVA", 
"AVAL", "TEST", "SISO", "SOIS", "LOCA", "LACO", "COLA", "SOEZ", "OCAL", "CALO", "LATO", "ALTO", 
"TOLA", "TALO", "ATOL", "LOTA", "AOVO", "CRAN", "NONO", "EDIL", "CAGA", "PEDO", "DOPE", "PODE", 
"HALA", "MAPA", "ALFA", "GATA", "USIA", "BOER", "OBRE", "BREO", "ROBE", "ORBE", "CAYA", "YACA", 
"VACA", "CAVA", "RILA", "RIAL", "LIRA", "RAIL", "LIAR", "MOAI", "SOBA", "BASO", "BAOS", "BOAS", 
"ARPO", "ROPA", "RAPO", "PORA", "PRAO", "PROA", "PARO", "COCA", "CACO", "LUES", "SEXO", "ZALA", 
"ALZA", "LAZA", "TOCA", "ACTO", "TACO", "COTA", "CATO", "MELO", "MOLE", "DECI", "DICE", "CEDI", 
"TATO", "LAJA", "JALA", "NIAL", "LIAN", "HACA", "FACA", "APON", "PANO", "PIES", "SIPE", "PISE", 
"AZOO", "TAHA", "AFTA", "FATA", "MEGA", "GEMA", "URDE", "DURE", "AOJO", "RICA", "CRIA", "CARI", 
"CIAR", "PEJE", "LOSO", "SOLO", "SUDA", "DUAS", "USAD", "TRIA", "TIRA", "RITA", "CUSE", "ECUS", 
"CUES", "MAYE", "AYME", "ZACA", "MEYA", "YEMA", "CAZA", "LAXA", "GROE", "ERGO", "REGO", "MODA", 
"SUTE", "TUSE", "USTE", "DOMA", "ZATA", "TAZA", "SOGA", "ASGO", "SAGO", "RUAR", "BEBE", "COME", 
"MECO", "CAJA", "JACA", "NACI", "CINA", "INCA", "CIAN", "TEMO", "TOME", "MOTE", "METO", "VERO", 
"TAJA", "YERO", "REYO", "JATA", "TINA", "ANTI", "VOSA", "OVAS", "SOYA", "VASO", "RODO", "DORO", 
"AYOS", "SAYO", "GENO", "NEGO", "PAPA", "FAME", "FEMA", "RUNA", "RUAN", "URNA", "OSCO", "COSO", 
"AGUA", "TOSO", "SOTO", "OYEN", "NOVE", "OVEN", "APIO", "OTOS", "NEVO", "RIME", "EMIR", "MIRE", 
"DONO", "NODO", "FREO", "MISA", "MIAS", "SIMA", "AMIS", "AYAU", "AYUA", "UNAN", "MEZA", "FOSA", 
"SOFA", "FASO", "PELO", "TACS", "MAJE", "JAME", "MEJA", "MIEN", "MINE", "RISO", "SIRO", "RIOS", 
"ORIS", "AUTO", "HENO", "REZO", "PEGA", "AZOS", "CENT", "REJO", "DEBO", "BODE", "JOSA", "SAJO", 
"SOJA", "AJOS", "JASO", "SINO", "PAYE", "YAPE", "LIAD", "DIAL", "DOPA", "PODA", "COPE", "CEPO", 
"PECO", "GRES", "ERGS", "TILE", "LITE", "NEJO", "OJEN", "AZUA", "OPTE", "OBRA", "ABRO", "TOPE", 
"RABO", "BROA", "POTE", "ROBA", "BARO", "PETO", "ODIO", "BEFE", "OIDO", "RULE", "UNIA", "SULA", 
"LUSA", "LUAS", "SAXO", "LLAR", "NABO", "BONA", "BIES", "ALMO", "BISE", "BEIS", "MALO", "AMOL", 
"LAMO", "DUDE", "MOLA", "OLMA", "LOMA", "CAID", "CADI", "CIAD", "PERI", "PIRE", "NEXO", "PAIS", 
"DITA", "PIAS", "PISA", "APIS", "CITE", "ZAPE", "MAGA", "GAMA", "JEBE", "ROLO", "LORO", "LOOR", 
"OLOR", "ORLO", "SAHS", "TITE", "RUAD", "DURA", "URDA", "RUDA", "CURE", "YEYE", "URCE", "PAJE", 
"PENI", "PIEN", "PLES", "YODE", "VEDO", "CUSA", "RUTE", "TRUE", "MAYA", "ROGA", "GARO", "GROA", 
"AGRO", "GRAO", "DODO", "TUSA", "UTAS", "TAUS", "BEBA", "MOCA", "COMA", "MACO", "NUDA", "DUNA", 
"UNCE", "CUNE", "MATO", "TOMA", "TAMO", "MOTA", "YARO", "ROYA", "VARO", "RAYO", "OVAR", "TUNE", 
"UNTE", "APEX", "MIDE", "MEDI", "DIME", "IDEM", "GAON", "GANO", "ROCO", "CORO", "ORCO", "EFOD", 
"CROO", "FAMA", "CLAN", "ROTO", "TORO", "ORTO", "OTRO", "NOVA", "VANO", "OVAN", "VISE", "VEIS", 
"RIMA", "AMIR", "MIRA", "MIAR", "HORA", "DIOS", "SIDO", "AFRO", "IDOS", "ARFO", "FARO", "CRAC", 
"CONO", "MUES", "SUME", "EMUS", "MUSE", "MAZA", "ALLI", "LILA", "VEJE", "TONO", "NOTO", "LAPO", 
"PALO", "BREN", "DEJO", "MEMO", "JEDO", "JODE", "MAJA", "JAMA", "IMAN", "MINA", "MIAN", "MANI", 
"AMIN", "FONA", "FANO", "FIES", "AZOR", "ORZA", "ROZA", "OLIO", "PAGA", "USOS", "SUSO", "ABEY", 
"OJAR", "ROJA", "JARO", "RAJO", "JORA", "ORIN", "BODA", "FEJE", "JEFE", "SOMO", "AGIO", "OIGA", 
"PAVA", "PAYA", "YAPA", "BECO", "CEBO", "LUDE", "ZONA", "ONZA", "CALI", "BOTE", "POCA", "COPA", 
"CAPO", "PACO", "LATI", "TILA", "LITA", "OVIA", "AVIO", "JIES", "TOPA", "POTA", "OPTA", "APTO", 
"TAPO", "PATO", "GELO", "LEGO", "BEFA", "PEDI", "PIDE", "RULA", "OCIO", "TELL", "VELO", "VOLE", 
"LEVO", "LEYO", "DOLO", "LODO", "DUDA", "BISA", "ISBA", "IBAS", "PIRA", "PARI", "PIAR", "UCED", 
"CICA", "LUNA", "NOXA", "AXON", "NULA", "GAYE", "VEGA", "PUSE", "SUPE", "UPES", "PUES", "CITA", 
"TICA", "ZAPA", "GODA", "DOGA", "BAJE", "BIEN", "BINE", "NEBI", "CEGO", "COGE", "GOCE", "BLES", 
"LIME", "MIEL", "TITA", "HELO", "FLEO", "ELFO", "URCA", "CURA", "RUCA", "PAJA", "PINA", "PIAN", 
"NIPA", "YODA", "OVAD", "VADO", "URTA", "RUTA", "TURA", "COVE", "YECO", "GAFE", "CODO", "BABA", 
"TEYO", "VETO", "VOTE", "SILO", "LISO", "LIOS", "DOTO", "POSO", "TODO", "SOPO", "NUCA", "CUAN", 
"CUNA", "GIRE", "RIGE", "VAHE", "REGI", "TUNA", "ATUN", "UNTA", "DIMA", "MIAD", "MIDA", "SIGA", 
"HADO", "GAIS", "MECI", "FADO", "ECHO", "HOCE", "CREP", "CEFO", "TEMI", "ITEM", "TIME", "OBUE", 
"METI", "VIRE", "REVI", "FETO", "LUIA", "VIAS", "VISA", "GAJE", "VAIS", "AUPO", "MURE", "MUER", 
"VEZA", "BLAO", "ALBO", "BALO", "LOBA", "BOLA", "COSI", "CIOS", "MUSA", "SUMA", "COIS", "VEJA", 
"VENI", "VINE", "TOSI", "TIOS", "SITO", "BRAN", "BARN", "LEVS", "ZOTE", "MAMO", "JODA", "NIDO", 
"HERI", "DINO", "INDO", "FREI", "BAGA", "RIFE", "FRIE", "CEJO", "MENU", "RUSO", "UROS", "FIAS", 
"TEJO", "JOTE", "JETO", "ZAFE", "PIEL", "PILE", "MORO", "ROMO", "POPE", "BAYA", "YABA", "IRIS", 
"FAJE", "JEFA", "FIEN", "FINE", "COBA", "BOCA", "CABO", "LOLO", "UNOS", "ALUD", "DULA", "LUDA", 
"LAUD", "DUAL", "ADUL", "IZAS", "LUCE", "TABO", "BOTA", "TOBA", "BATO", "MONO", "NOMO", "DEBI", 
"TULE", "OXTE", "BIDE", "TEUL", "JAIS", "AJIS", "GALO", "ALGO", "LAGO", "GOLA", "HABA", "OQUE", 
"QUEO", "JAEZ", "FABA", "PIDA", "PIAD", "CIPE", "GRAN", "DOND", "AVOL", "GAGA", "LAVO", "OVAL", 
"LAYO", "JINE", "YOLA", "VOLA", "BIRA", "RIBA", "RABI", "ABRI", "PITE", "BARI", "CHES", "EXIR", 
"COLO", "UBES", "SUBE", "LOCO", "BUES", "BAZA", "PERU", "PURE", "AXIS", "YAGA", "VAGA", "GAYA", 
"LOTO", "TUDA", "PUAS", "UPAS", "CRON", "CUTE", "BAJA", "JABA", "BINA", "IBAN", "NABI", "LAMI", 
"ALIM", "CAGO", "MALI", "LIMA", "HOLA", "HALO", "ALFO", "AMPO", "TUTE", "MAPO", "POMA", "FALO", 
"MOPA", "CLAC", "YAYA", "VAYA", "GATO", "GOTA", "TOGA", "UPEN", "PUEN", "PUNE", "MAMS", "COVA", 
"COYA", "VACO", "CAVO", "CAYO", "RILO", "HAGA", "SOBO", "OBOS", "GAFA", "PORO", "TAYO", "VOTA", 
"TOVA", "COCO", "PLAN", "LOZA", "ALZO", "LAZO", "VIDE", "COTO", "TOCO", "HAYA", "VAHA", "IRGA", 
"GIRA", "FAYA", "MUDE", "DUME", "OJAL", "JALO", "LINO", "CIMA", "MICA", "NOLI", "CHAO", "GAZA", 
"ZAGA", "OPON", "COFA", "FOCA", "TIMA", "MITA", "YIRA", "VARI", "VIRA", "HATO", "TAFO", "FATO", 
"MEGO", "INGA", "HEDI", "UVES", "GLAS", "ICOR", "MURA", "ZAYA", "RICO", "CRIO", "CORI", "DUOS", 
"SUDO", "TIRO", "TRIO", "OTRI", "RITO", "CAZO", "MOVE", "ZOCA", "XOLA", "LAXO", "ALLU", "JAVA", 
"YINA", "LORD", "VALS", "DOMO", "MODO", "TAZO", "TOZA", "RIFA", "FIAR", "FRIA", "COJA", "CAJO", 
"JACO", "LIBE", "MUNA", "BILE", "DIEZ", "TAJO", "JATO", "JOTA", "HAZA", "AFAZ", "TINO", "NITO", 
"ZAFA", "PIAL", "PALI", "LIPA", "PILA", "OVOS", "VOSO", "MIME", "DIJE", "PAPO", "POPA", "HOME", 
"MOFE", "FEMO", "FOME", "RUNO", "FAJA", "NAIF", "FIAN", "AFIN", "FINA", "RAIZ", "IZAR", "RIZA", 
"AGUO", "GUAO", "SIUS", "OPIO", "LUCA", "COXA", "CUAL", "ZAZA", "RIJA", "JIRA", "IJAR", "INRI", 
"MISO", "MIOS", "PROS", "FOSO", "MEZO", "NAZI", "IZAN", "BITE", "TIBE", "PUDE", "PICA", "PACI", 
"CAPI", "MEJO", "MOJE", "PATI", "PITA", "TIPA", "URBE", "UBRE", "CHAS", "PEGO", "SUBA", "ZOOS", 
"MIAU", "MUIA", "BUAS", "UPAR", "PUAR", "HUAO", "PURA", "CUCA", "AMBO", "OJOS", "PEYO", "CUTA", 
"TUCA", "POYE", "DOLI", "BUEN", "NUBE", "DOPO", "PODO", "TRIS", "MULE", "TUTA", "TATU", "UPAN", 
"PUNA", "PUAN", "DOMS", "BORO", "OBRO", "DIGA", "ROBO", "HILE", "HIEL", "FIEL", "FILE", "HOPE", 
"UNIO", "LUSO", "VIDA", "DIVA", "DIAY", "RUGE", "URGE", "BONO", "UGRE", "OLMO", "MOLO", "LOMO", 
"MUDA", "DUMA", "VITE", "YETI", "SAGU", "GUAS", "PIOS", "PISO", "ZOPE", "TEMU", "MUTE", "YURE", 
"GAMO", "MAGO", "GOMA", "MOGA", "ULUA", "MISS", "LIJE", "URDO", "DURO", "UVAS", "SUYA", "RUDO", 
"UNGE", "FIDA", "FIAD", "JOPE", "HICE", "CHIE", "FICE", "SUCO", "CUSO", "HITE", "MAYO", "MOYA",
"GROO", "OGRO", "ROGO", "TUSO", "BEBO", "CROL", "MOCO", "COMO", "NUDO", "LIBA", "FUER", "IZAD", 
"TROL", "TOMO", "MOTO", "ROYO", "FUSA", "PELU", "PULE", "IMAM", "MIMA", "HAMO", "MOFA", "CLON", 
"SURI", "TEJI", "JITE", "NOVO", "NOYO", "SAUZ", "ZUAS", "MIRO", "PIPE", "RIMO", "MORI", "ROMI", 
"ROBS", "JURE", "ORFO", "FORO", "FLAN", "ZOMA", "MOZA", "MAZO", "GUIE", "LILO", "UNIS", "LOLI", 
"POLO", "NUEZ", "BATI", "BITA", "UPAD", "APUD", "PUAD", "TABI", "MAJO", "CUPE", "MOJA", "JAMO", 
"MINO", "MONI", "FRAC", "FONO", "AGIL", "GLIA", "GILA", "LIGA", "TEPU", "ROZO", "ABUR", "TUPE", 
"ORZO", "BURA", "PAGO", "BOYE", "YEBO", "ROJO", "VIAL", "VALI", "OIGO", "PAYO", "CHAN", "YAPO", 
"PAVO", "POYA", "BUNA", "MOXA", "MULA", "LUMA", "COPO", "POCO", "GROS", "TILO", "LITO", "OVIO", 
"CRIN", "OPTO", "TOPO", "POTO", "BOFE", "BEFO", "HILA", "RULO", "FILA", "HOPA", "CAVI", "YACI", 
"GRUA", "RUGA", "RAGU", "AGUR", "GURA", "IRIL", "BISO", "DUDO", "PIRO", "VITA", "BEZO", "NULO", 
"COCI", "MUCA", "CUMA", "LIZA", "LADY", "CITO", "COTI", "ZOPA", "POZA", "MUTA", "PAZO", "ZAPO", 
"TICO", "GODO", "DOGO", "BOJE", "TITO", "TOTI", "LIJA", "ANGU", "CHIA", "CURO", "ACHI", "RUCO", 
"YEYO", "PAJO", "CHAI", "JOPA", "PINO", "PION", "PONI", "YODO", "TOUR", "RUTO", "HITA", "TIFA", 
"FIAT", "GIME", "GEMI", "YUAN", "BOBA", "GAPS", "HURA", "IDUS", "RUFA", "FURA", "BULE", "CUNO", 
"NUCO", "AXIL", "HOVE", "HOYE", "UNTO", "TUNO", "DRIL", "MIDO", "DIMO", "LUPA", "PAUL", "PULA", 
"TIZA", "SIGO", "CIJA", "CAJI", "HUNA", "PIBE", "ZURA", "TIJA", "AZUR", "JITA", "INTI", "VISO", 
"TOPS", "PIPA", "SPOT", "VEZO", "RUJA", "JURA", "URJA", "UNIR", "RUIN", "BOLO", "LOBO", "BUDA", 
"DUBA", "SUMO", "MUSO", "GUIA", "CEBU", "BUCE", "VEJO", "UNZA", "ZUNA", "MOMO", "JODO", "PACU", 
"BAGO", "BOGA", "TAXI", "JUAN", "UNJA", "SOFI", "TUPA", "PUTA", "QUIA", "AQUI", "PREZ", "TICS", 
"BAYO", "BOYA", "MEJI", "JIME", "LUYE", "COBO", "RUCS", "LUDO", "HUIA", "BOTO", "MABI", "BOFA", 
"FABO", "PIDO", "HULE", "FUEL", "GAGO", "VOLO", "BRIO", "BIRO", "CUYE", "HALL", "BOZA", "DUCO", 
"BAZO", "TEYU", "YUTE", "HIPE", "TUVE", "LUIS", "VAGO", "GAYO", "GOYA", "YAGO", "YOGA", "PUSO", 
"SUPO", "OPUS", "BAJO", "BOJA", "BINO", "IBON", "LIMO", "MOLI", "LUJE", "POMO", "CLOC", "YAYO", 
"TOGO", "IPSI", "COVO", "MIGA", "GIMA", "FUET", "HAGO", "URDI", "GAFO", "GOFA", "FAGO", "VOTO", 
"PIJE", "CHAL", "BAUL", "BULA", "CUSI", "ZUDA", "SICU", "CUIS", "UCIS", "AZUD", "GIRO", "IRGO", 
"HAYO", "HAVO", "HOYA", "VAHO", "LUXE", "FAVO", "FOYA", "VAFO", "TUIS", "TISU", "SEXY", "BEBI", 
"MICO", "COMI", "UNID", "OCHO", "GOZA", "FOCO", "CUJE", "TIMO", "PIBA", "MITO", "YORI", "VIRO", 
"YIRO", "HOTO", "TOFO", "FOTO", "GAJO", "GOJA", "PUPE", "RUMO", "PEPU", "MURO", "CLIN", "FOFA", 
"ZOCO", "CUBA", "XOLO", "JOYA", "LULO", "JAVO", "VINO", "OVNI", "GAGS", "TABU", "TOZO", "TUBA", 
"RIFO", "FRIO", "COJO", "JOCO", "CRIC", "NUMO", "MUON", "GREY", "MAIZ", "MIZA", "GULA", "TOJO", 
"HOZA", "JOTO", "ZAFO", "PILO", "POPO", "JIMA", "GIBE", "HOJA", "FOJA", "FAJO", "FINO", "UVAL", 
"LUYA", "POMS", "CINC", "RIZO", "LUCO", "CULO", "ZAZO", "RIJO", "LUTO", "TRUN", "FREY", "HULA", 
"PICO", "CIPO", "PUMA", "FULA", "GRIS", "TIPO", "PITO", "BIFE", "YUCA", "CUYA", "LUIR", "SUBO", 
"BOUS", "BUSO", "OBUS", "HIPA", "PURO", "TUYA", "YUTA", "CUCO", "AZUL", "BOOM", "CUTO", "TUCO", 
"IBIS", "TUTO", "JAUL", "LUJA", "ONIX", "CHUA", "CHAU", "PUNO", "DIGO", "HUTA", "JIBE", "MUGE", 
"FREZ", "TITI", "VIVE", "JIPA", "PIJA", "CURI", "SLIP", "DIVO", "POPS", "MUYE", "CUZA", "CAUZ", 
"LUXA", "MUDO", "DUMO", "BABI", "AZUT", "TUZA", "USGO", "CUJA", "JUCA", "PECH", "CUIN", "UNCI", 
"PCHE", "TAJU", "JUTA", "MOGO", "DIMI", "SUYO", "YUSO", "FIDO", "PAPU", "PUPA", "HUME", "FUME", 
"MOYO", "GUAU", "BOIL", "LIBO", "BOLI", "FIFE", "MUSI", "GRAY", "MUIS", "SUMI", "HUSO", "POBO", 
"FUSO", "GANG", "BRIN", "MIMO", "DIJO", "JODI", "GIBA", "BIGA", "FLOR", "MOHO", "JUME", "MOFO", 
"YANG", "TORY", "TROY", "MACH", "FIJE", "ZOMO", "MOZO", "CIBO", "PUYE", "LUID", "LUDI", "FRAY", 
"PUDO", "BITO", "MOJO", "LIGO", "RUBO", "BURO", "RING", "HUPE", "OVIL", "VILO", "GIGA", "POYO", 
"MULO", "BIZA", "VIGA", "PIUS", "BIJA", "JABI", "BYTE", "COGI", "TROJ", "MUGA", "MILI", "HILO", 
"FILO", "URDU", "VIVA", "CLIC", "HOPO", "PUJE", "SUCU", "OHMS", "MUYA", "VICO", "RUGO", "HIGA", 
"GURO", "VITO", "MUCO", "PLIN", "LIZO", "TROX", "POZO", "TUMO", "ZOPO", "MUTO", "LIJO", "JOPO", 
"ICHO", "CHIO", "HICO", "HUMA", "MUFA", "FUMA", "BITS", "UBIO", "HITO", "TIFO", "FITO", "PYME", 
"JIGA", "RIMU", "MUIR", "BOBO", "RUMI", "FURO", "RUFO", "FIFA", "ZUMA", "ULPO", "PULO", "TIZO", 
"JICO", "JUMA", "MUJA", "HUNO", "ZURO", "TIJO", "JITO", "FIZA", "PUGA", "IPIL", "PIPO", "BUEY", 
"URJO", "RUJO", "JURO", "HIJA", "FIJA", "JIFA", "FINI", "GUIO", "YAPU", "PUYA", "UNZO", "CULI", 
"LUCI", "CUPO", "BOGO", "UTIL", "UNJO", "CHEF", "PUTO", "BLOC", "TUPO", "QUIO", "HUBE", "BUFE", 
"BOYO", "PITI", "TIPI", "CHIS", "UBIS", "SUBI", "PIRU", "GUEY", "CUTI", "HOBO", "DUGO", "BUJE", 
"BOFO", "SURF", "JUPA", "PUJA", "PUNI", "PLUS", "GOGO", "VODU", "YUDO", "BOZO", "BUBA", "GOYO", 
"YOGO", "JOBO", "BOJO", "HUYE", "DUMI", "MUID", "VOLT", "DUHO", "YOYO", "MIGO", "GIMO", "HOGO", 
"GOFO", "UVIS", "TUPS", "PUTS", "QUIS", "BULO", "FUFE", "SUMU", "MOVI", "HOYO", "JUEY", "DUJO", 
"JUDO", "GOZO", "HUIS", "FIUS", "SUFI", "BAYU", "FIMO", "FOFO", "CUBO", "BUCO", "JOYO", "TUBO", 
"CIBI", "MIZO", "JUSI", "BICI", "SIJU", "HOZO", "JUEZ", "BUFA", "JIMO", "MOJI", "MIJO", "GILI", 
"LUYO", "RUBI", "BURI", "CLIP", "BUZA", "GUAY", "CHIN", "JUBA", "HULO", "CUYO", "FUGA", "ZINC", 
"HIPO", "TUYO", "TUVO", "URGI", "GRUI", "RUGI", "HUYA", "GURI", "LUJO", "JULO", "CRUP", "FUCO", 
"TUFO", "GUJA", "JUGA", "UNGI", "PIJO", "CHII", "FUFA", "CUZO", "LUXO", "LULU", "QUIN", "HURI", 
"HUIR", "FUIR", "FRUI", "JUCO", "IXIL", "PULI", "VIPS", "PUPO", "GROG", "PIPI", "GONG", "GIBO", 
"TUPI", "CHUS", "CUCU", "OMBU", "TUTU", "QUID", "PLIM", "BODY", "BRUT", "MUGO", "HUID", "VIVO", 
"MUYO", "HIGO", "FIGO", "POCH", "BULI", "HUMO", "FUMO", "FIFO", "CHIC", "ZUMO", "PUDU", "JUMO", 
"MUJO", "IGLU", "HIZO", "FIZO", "HIJO", "FIJO", "PUYO", "CRUZ", "PCHS", "FLUI", "PUFO", "GURU", 
"ZUMS", "PUJO", "ICHU", "JIPI", "GOLF", "BIBI", "CUJI", "PUFS", "FILM", "UNJU", "CLUB", "BUYO", 
"YUBO", "HUBO", "BUHO", "BUFO", "VUDU", "CHOZ", "BUZO", "YUGO", "BUJO", "JUBO", "YUYO", "MUGI", 
"FRIZ", "FUGO", "VIVI", "HUYO", "CHIP", "JUGO", "JAZZ", "FUFO", "CHUT", "FIFI", "ZUZO", "ZULU", 
"UCHU", "BUBI", "PUPU", "QUIF", "UMJU", "CHUZ", "FLUX", "CHUJ", "FUFU"];

document.getElementById('letra1').innerHTML="-";
document.getElementById('letra2').innerHTML="-";
document.getElementById('letra3').innerHTML="-";
document.getElementById('letra4').innerHTML="-";

setTimeout(() => {  
  
  document.getElementById('letra1').innerHTML="O";
  document.getElementById('letra2').innerHTML="S";
  document.getElementById('letra3').innerHTML="E";
  document.getElementById('letra4').innerHTML="A";


}, 3000);

}

iniciar();

document.getElementById("casilla1").onclick = function() {cambioColor("casilla1")};
document.getElementById("casilla2").onclick = function() {cambioColor("casilla2")};
document.getElementById("casilla3").onclick = function() {cambioColor("casilla3")};
document.getElementById("casilla4").onclick = function() {cambioColor("casilla4")};

function cambioColor(numcas) {
    switch(document.getElementById(numcas).style.backgroundColor) {
        case "rgb(106, 170, 100)":
            document.getElementById(numcas).style.backgroundColor= "rgb(201, 180, 88)";
          break;
        case "rgb(201, 180, 88)":
            document.getElementById(numcas).style.backgroundColor= "rgb(120, 124, 126)";
          break;
        case "rgb(120, 124, 126)":
            document.getElementById(numcas).style.backgroundColor= "rgb(106, 170, 100)";
          break;
        default:
            document.getElementById(numcas).style.backgroundColor= "rgb(106, 170, 100)";
    }
}

function negro (letra){
  for (let i=0; i<principal.length;i++){

      if (principal[i][0]==letra || principal[i][1]==letra || principal[i][2]==letra || principal[i][3]==letra){
        
        for (let k=0; k<principal.length; k++){
            aux.push(principal[k]);
        }
          principal = [];
          for (let j=0; j<aux.length;j++){
              if (j!=i){
                principal.push(aux[j]);
              }
          }
          aux=[];
          i--;
      }

      }
  }


function verde(letra, posicion){
  for (let i=0; i<principal.length;i++){
      if (principal[i][posicion]!=letra){
        for (let k=0; k<principal.length; k++){
          aux.push(principal[k]);
        }
        principal = [];
        for (let j=0; j<aux.length;j++){
            if (j!=i){
              principal.push(aux[j]);
            }
        }
        aux=[];
        i--;
      }
  }
}

function amarillo(letra, posicion){
  for (let i=0; i<principal.length;i++){
      var entr=false;
      if (principal[i][0]!=letra && principal[i][1]!=letra && principal[i][2]!=letra && principal[i][3]!=letra){
          for (let k=0; k<principal.length; k++){
          aux.push(principal[k]);
      }

        principal = [];
        for (let j=0; j<aux.length;j++){
            if (j!=i){
              principal.push(aux[j]);
            }
        }
        aux=[];
          entr=true;
      }
      else if (principal[i][posicion]==letra){
        for (let k=0; k<principal.length; k++){
          aux.push(principal[k]);
        }
        principal = [];
        for (let j=0; j<aux.length;j++){
            if (j!=i){
              principal.push(aux[j]);
            }
        }
        aux=[];
          entr=true;
      }
      if(entr==true){i--;}
  }
}

function corregido(){
 
  leer[0]=document.getElementById('casilla1').style.backgroundColor;
  leer[1]=document.getElementById('casilla2').style.backgroundColor;
  leer[2]=document.getElementById('casilla3').style.backgroundColor;
  leer[3]=document.getElementById('casilla4').style.backgroundColor;


  if (leer[0]!=gris && leer[1]!=gris && leer[2]!=gris && leer[3]!=gris){
  palabra[0]=document.getElementById('letra1').innerHTML;
  palabra[1]=document.getElementById('letra2').innerHTML;
  palabra[2]=document.getElementById('letra3').innerHTML;
  palabra[3]=document.getElementById('letra4').innerHTML;

  

  for (let i=0; i<4;i++){
    if (leer[i]=="rgb(120, 124, 126)"){
        negro(palabra[i]);
    } else if (leer[i]=="rgb(106, 170, 100)"){
        verde(palabra[i], i);
    } else if (leer[i]=="rgb(201, 180, 88)"){
        amarillo(palabra[i], i);
    }
}

  if (principal.length==0){
    alert("No existe ninguna palabra que cumpla esos requisitos :(((");
    iniciar();
  } else{
    document.getElementById('letra1').innerHTML=principal[0][0];
    document.getElementById('letra2').innerHTML=principal[0][1];
    document.getElementById('letra3').innerHTML=principal[0][2];
    document.getElementById('letra4').innerHTML=principal[0][3];
    movimientos++;
    document.getElementById('etiquetaNumMovs').innerHTML="Número de palabras probadas: " + movimientos;
    document.getElementById('casilla1').style.backgroundColor=gris;
    document.getElementById('casilla2').style.backgroundColor=gris;
    document.getElementById('casilla3').style.backgroundColor=gris;
    document.getElementById('casilla4').style.backgroundColor=gris;
  }

  
  }

  else {
    alert('Por favor recuerda colorear todas las casillas antes de continuar.');
  }

  

}

function fin(){
    alert("FIN DE LA PARTIDA\n" + "Tan solo me ha costado " + movimientos + " movimientos adivinar tu palabra.\n¡Piensa otra palabra si quieres volver a jugar!");
    iniciar();
  }

