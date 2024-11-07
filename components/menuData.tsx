import { Label } from "@radix-ui/react-dropdown-menu";

export const menuData = [
	{
		title: "Hogar",
		label: "Hogar y Muebles",
		link: "../hogar",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Furniture.svg",
		subMenu: [
			{
				linkOfertas:
					"https://www.coppel.com/SearchDisplay?categoryId=&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=48&searchTerm=RB2123BNNRHMHOGARYMUEBLESDESCUENTOS&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D",
				btnOfertas: "Ver ofertas",
				title: "Hogar y Muebles",
				label: "Muebles",
				link: "../Muebles",
				subMenu: [
					{ title: "Muebles", label: "Sala", link: "../salas" },
					{ label: "Recámara", link: "../recamara" },
					{ label: "Comedores", link: "../comedores" },
					{ label: "Muebles de cocina", link: "../muebles-para-cocinas" },
					{ label: "Oficina y estudio", link: "../oficinas" },
					{ label: "Cuarto del bebé", link: "../cuarto-del-bebe" },
					{ label: "Cuarto infantil", link: "../cuarto-infantil" },
				],
			},
			{
				label: "Organizacion y almacenamiento",
				link: "../organizacion-almacenamiento",
				subMenu: [
					{
						title: "Organización y almacenamiento",
						label: "Organizadores de cocina y alimentos",
						link: "../organizadores-cocina-alimentes",
					},
					{
						label: "Estantes y racks multiusos",
						link: "../estantes-racks-multiusos",
					},
					{ label: "Cajoneras y cajas", link: "../cajoneras-cajas" },
					{ label: "Cestos", link: "../cestos" },
					{
						label: "Organizacion de recámara",
						link: "../organizacion-recamara",
					},
					{ label: "Organizacion de oficina", link: "../organizacion-oficina" },
					{
						label: "Organizacion de Zapatos",
						link: "../organizadores-de-zapatos",
					},
				],
			},
			{
				label: "Blancos para el hogar",
				link: "/blancos-hogar",
				subMenu: [
					{
						title: "Blancos para el hogar",
						label: "Ropa de cama para bebé",
						link: "../ropa-de-cama-para-bebe",
					},
					{ label: "Almohadas", link: "../placeholder-almohadas" },
					{ label: "Ropa de cama", link: "../ropa-de-cama" },
					{
						label: "Ropa de cama infantil",
						link: "../ropa-de-cama-cuarto-infantil",
					},
				],
			},
			{
				label: "Baño",
				link: "../cuarto-de-bano",
				subMenu: [
					{
						title: "Baño",
						label: "Equipamiento para baño",
						link: "../equipamento-para-bano",
					},
					{ label: "Muebles de baño", link: "../muebles-para-cuarto-de-bano" },
					{ label: "Blancos de baño", link: "../blancos-de-bano" },
					{
						label: "Accesorios de baño",
						link: "../accesorios-para-cuarto-de-bano",
					},
				],
			},
			{
				label: "Iluminación",
				link: "../iluminacion",
				subMenu: [
					{
						title: "Iluminación",
						label: "Lámparas decorativas para interior",
						link: "../lamparas-decorativas-interior",
					},
					{
						label: "Iluminación para exteriores",
						link: "../iluminacion-exteriores",
					},
					{ label: "Focos", link: "../focos" },
					{
						label: "Iluminacion de seguridad",
						link: "../iluminacion-seguridad",
					},
					{ label: "Luces para espejos", link: "../luces-espejos" },
					{ label: "Postes de luz", link: "/postes-de-luz-decoracion" },
				],
			},
			{
				label: "Colchones",
				link: "../colchones",
				subMenu: [
					{
						title: "Colchones",
						label: "Colchones",
						link: "../colchones-hogar",
					},
					{ label: "Juegos de colchón y box", link: "../juegos-box-colchones" },
					{ label: "Colchones para cuna", link: "/colchones-para-cuna" },
				],
			},
			{
				label: "Patio y jardín",
				link: "../patio-y-jardin-hogar",
				subMenu: [
					{
						title: "Patio y jardín",
						label: "Muebles para jardín",
						link: "../muebles-jardin",
					},
					{ label: "Toldos y sombrillas", link: "../toldos-y-muebles" },
					{
						label: "Asadores, parrillas y accesorios",
						link: "../asadores-parrillas-accesorios",
					},
					{ label: "Albercas y jacuzzis", link: "../albercas-jacuzzis" },
					{ label: "Hieleras y termos", link: "../hieleras-y-termos" },
					{
						label: "Macetas y pasto sintético",
						link: "../macetas-pastos-sintetico",
					},
					{
						label: "Herramientas de jardinería",
						link: "../herramientas-de-jardineria",
					},
				],
			},
			{
				label: "Decoración",
				link: "../decoracion-hogar",
				subMenu: [
					{
						title: "Decoración",
						label: "Decoracion de pared",
						link: "../decoracion-pared",
					},
					{ label: "Tapetes", link: "../tapetes-decoracion" },
					{ label: "Cojines", link: "../cojines-decoracion" },
					{ label: "Espejos", link: "../espejos-decoracion" },
					{ label: "Esculturas y Figuras", link: "../esculturas-figuras" },
					{ label: "Portarretratos", link: "../portaretratos-decoracion" },
					{ label: "Floreros y Jarrones", link: "../floreros-jarrones" },
					{ label: "Decoración de cocina", link: "../decoracion-cocina" },
					{
						label: "Difusores, velas y candelabros",
						link: "../difusores-velas-candelabros",
					},
					{
						label: "Flores y plantas artificiales",
						link: "../plantas-artificiales",
					},
					{
						label: "Platones y charolas decorativas",
						link: "../platones-charolas-decorativas",
					},
					{ label: "Letreros luminosos", link: "../letreros-luminosos" },
					{ label: "Percheros", link: "../percheros-hogar" },
					{ label: "Cortinas y Persianas", link: "../cortinas-persianas" },
				],
			},
			{
				label: "Halloween y Día de Muertos",
				link: "../dia-de-muertos",
				subMenu: [
					{
						title: "Halloween y Día de Muertos",
						label: "Exterior Halloween",
						link: "../adornos-de-halloween",
					},
					{
						label: "Accesorios Halloween",
						link: "../decoraciones-de-halloween",
					},
				],
			},
			{
				label: "Navidad",
				link: "../Navidad",
				subMenu: [
					{
						title: "Navidad",
						label: "Arboles de navidad",
						link: "../arboles-navidad",
					},
					{ label: "Accesorios para árbol", link: "../adornos-arbol-navidad" },
					{ label: "Villas navideñas", link: "../villas-nacimientos" },
					{
						label: "Accesorios decorativos",
						link: "../accesorios-decorativos-navidad",
					},
					{
						label: "Accesorios de pared",
						link: "../adornos-de-pared-navidenos",
					},
					{ label: "Luces navideñas", link: "../luces-navidenas" },
					{
						label: "Accesorios para exterior",
						link: "../accesarios-navidenos-exterior",
					},
					{
						label: "Accesorios de cocina",
						link: "../accesorios-navidenos-cocina",
					},
					{ label: "Cojines", link: "../cojines-navidenos" },
				],
			},
			{
				label: "Máquinas de coser y accesorios",
				link: "/maquinas-coser-accesorios",
			},
		],
	},
	{
		label: "Línea Blanca",
		link: "../linea-blanca",
		icon: "	https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/White_Goods.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				linkOfertas:
					"https://www.coppel.com/SearchDisplay?categoryId=&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=12&searchTerm=RB2123-EPMTPE-LINEABLANCA-MEJORESOFERTAS&authToken=-1002%252CJdh5JVzqovGDGuZIS9A0yAc11LCiDPi1CWNOoTX%252B9xo%253D",
				title: "Línea Blanca",
				label: "Refrigeradores y Congeladores",
				link: "../refrigeradores-y-congeladores",
				subMenu: [
					{
						title: "Refrigeradores y Congeladores",
						label: "Refrigeradores",
						link: "../refrigeradores",
					},
					{ label: "Frigobares", link: "../frigobares" },
					{ label: "Congeladores", link: "../congeladores" },
					{ label: "Cavas", link: "../cavas" },
					{
						label: "Dispensadores y enfriadores",
						link: "../dispensadores-enfriadores",
					},
				],
			},
			{
				label: "Lavadoras y secadoras",
				link: "../lavadoras-y-secadoras",
				subMenu: [
					{
						title: "Lavadoras y secadoras",
						label: "Lavadoras",
						link: "../lavadoras",
					},
					{
						label: "Secadoras y Centrifugadoras",
						link: "../secadoras-centrifugadoras",
					},
					{ label: "Lavasecadoras", link: "../lavasecadoras" },
					{ label: "Centros de lavado", link: "../centros-lavado" },
				],
			},
			{
				label: "Estufas, parrillas y hornos",
				link: "../estufas-parrillas-hornos",
				subMenu: [
					{
						title: "Estufas, parrillas y hornos",
						label: "Estufas",
						link: "../estufas-para-cocina",
					},
					{ label: "Parrillas", link: "../parrillas" },
					{ label: "Campanas", link: "../campanas" },
					{ label: "Hornos", link: "../hornos" },
					{ label: "Cilindros de gas", link: "../cilindros-gas" },
				],
			},
			{
				label: "Clima y ventilación",
				link: "../clima-y-ventilacion",
				subMenu: [
					{
						title: "Clima y ventilación",
						label: "Calentadores de agua",
						link: "../calentadores",
					},
					{ label: "Calefactores", link: "../calefactores" },
					{ label: "Chimeneas", link: "../chimeneas" },
					{ label: "Ventiladores", link: "../ventiladores" },
					{ label: "Aires acondicionados", link: "../aires-acondicionados" },
					{ label: "Coolers", link: "../coolers" },
				],
			},
			{
				label: "Lavavajillas",
				link: "../lavavajillas",
				subMenu: [
					{
						title: "Lavavajillas",
						label: "Lavavajillas Libres de instalación",
						link: "../lavavajillas-libres-de-instalacion",
					},
					{
						label: "Lavavajillas Integradas",
						link: "../lavavajillas-integradas",
					},
					{
						label: "Lavavajillas Semi Integradas",
						link: "../lavavajillas-semi-integradas",
					},
					{ label: "Lavavajillas De Mesa", link: "../lavavajillas-de-mesa" },
				],
			},
			{
				label: "Aspiradoras y planchas",
				link: "../aspiradoras-y-planchas",
				subMenu: [
					{
						title: "Aspiradoras y planchas",
						label: "Planchas y accesorios",
						link: "../planchas",
					},
					{
						label: "Aspiradoras y accesorios",
						link: "../accesorios-para-aspiradoras",
					},
				],
			},
		],
	},
	{
		label: "Cocina y Electrodomesticos",
		link: "../cocina-electrodomesticos",
		icon: "	https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Home%20appliances.svg",
		subMenu: [
			{
				title: "Cocina y Electrodomésticos",
				label: "Electrodomésticos",
				link: "../electrodomesticos",
				subMenu: [
					{
						title: "Electrodomésticos",
						label: "Licuadoras y procesadores",
						link: "../licuadoras-y-procesadores",
					},
					{ label: "Batidoras", link: "../batidoras" },
					{
						label: "Freidoras y sartenes eléctricos",
						link: "../freidoras-sartenes-electricos",
					},
					{ label: "Cafeteras", link: "../cafeteras" },
					{
						label: "Teteras y hervidores de agua",
						link: "../teteras-hervidores-agua",
					},
					{ label: "Hornos eléctricos", link: "../hornos-electricos" },
					{ label: "Tostadores", link: "../tostadores" },
					{ label: "Creperas y wafleras", link: "../creperas-wafleras" },
					{
						label: "Sandwicheras y parrillas grill",
						link: "../sandwicheras-parrillas-grill",
					},
					{
						label: "Extractores y exprimidores",
						link: "../extractores-exprimidores",
					},
					{
						label: "Maquinas especializadas para alimentos",
						link: "../maquinas-especializadas-alimentos",
					},
					{ label: "Maquinas de hielo", link: "../maquinas-hielo" },
					{
						label: "Máquinas especializadas para postres",
						link: "../maquinas-especializadas-postres",
					},
					{ label: "Microondas", link: "../microondas" },
					{
						label: "Calentadores para Buffet",
						link: "../calentadores-para-buffet",
					},
				],
			},
			{
				label: "Baterías, sartenes y ollas",
				link: "../baterias-sartenes-ollas",
				subMenu: [
					{
						title: "Baterías, sartenes y ollas",
						label: "Baterias de cocina",
						link: "../baterias-de-cocina",
					},
					{ label: "Sartenes", link: "../sartenes" },
					{ label: "Comales", link: "../comales" },
					{ label: "Ollas y vaporeras", link: "../ollas-y-vaporeras" },
				],
			},
			{
				label: "Muebles de cocina",
				link: "../cocinas-y-muebles",
				subMenu: [
					{
						title: "Muebles de cocina",
						label: "Cocina Integral",
						link: "../cocina-integral",
					},
					{ label: "Alacenas", link: "../alacenas-y-despensas" },
					{ label: "Mesas multiusos", link: "../mesas-multiusos-para-cocina" },
					{
						label: "Módulos de cocina integral",
						link: "../modulos-de-cocina-integral",
					},
					{ label: "Portagarrafones", link: "../porta-garrafones-cocina" },
					{
						label: "Equipamiento para cocina",
						link: "../equipamiento-para-cocina",
					},
				],
			},
			{
				label: "Cristalería",
				link: "../cristaleria",
				subMenu: [
					{ title: "Cristalería", label: "Copas", link: "../copas" },
					{ label: "Vasos y jarras", link: "../vasos-y-jarras-para-cocina" },
					{ label: "Vasos tequileros", link: "../vasos-tequileros" },
					{ label: "Refractarios y tazones", link: "../refractarios-tazones" },
					{ label: "Botaneros", link: "../botaneros" },
				],
			},
			{
				label: "Vajillas y cubiertos",
				link: "../vajillas-cubiertos",
				subMenu: [
					{
						title: "Vajillas y cubiertos",
						label: "Cubiertos reutilizables",
						link: "../cubiertos-reutilizables",
					},
					{
						label: "Vajillas de cristal y ceramica",
						link: "../vajillas-cristal-ceramica",
					},
					{ label: "Vajillas infantiles", link: "../vajillas-infantiles" },
					{ label: "Tazas", link: "../tazas" },
					{
						label: "Vajillas reutilizables",
						link: "../vajillas-reutilizables",
					},
					{ label: "Juegos de cubiertos", link: "../juegos-cubiertos" },
				],
			},
			{
				label: "Utensilios de cocina",
				link: "../utensilios-cocina",
				subMenu: [
					{
						title: "Utensilios de cocina",
						label: "Cuchillos de cocina",
						link: "../cuchillos-de-cocina",
					},
					{
						label: "Cucharas, volteadores y machacadores",
						link: "../cucharas-volteadores-machacadores",
					},
					{ label: "Abrelatas manuales", link: "../abrelatas-manuales" },
					{ label: "Coladeras", link: "../coladeras" },
					{ label: "Exprimidores manuales", link: "../exprimidores-manuales" },
					{ label: "Ralladores", link: "../ralladores" },
					{ label: "Peladores y cortadores", link: "../peladores-cortadores" },
					{ label: "Tablas para picar", link: "../tablas-para-picar" },
					{ label: "Tablas de quesos", link: "../tablas-quesos" },
					{ label: "Tijeras de cocina", link: "../tijeras-cocina" },
					{ label: "Básculas para alimentos", link: "../basculas-alimentos" },
					{ label: "Batidores", link: "../batidores" },
					{ label: "Escurridores", link: "../escurridores" },
					{ label: "Sopletes", link: "../sopletes-de-cocina" },
					{ label: "Termómetros de cocina", link: "../termometros-de-cocina" },
				],
			},
			{
				label: "Organizadores de cocina y alimentos",
				link: "../organizadores-cocina-alimentos",
				subMenu: [
					{
						title: "Organizadores de cocina y allimentos",
						label: "Escurridores",
						link: "../escurridores",
					},
					{
						label: "Contenedores y frascos herméticos",
						link: "../contenedores-fracos-hermeticos",
					},
					{
						label: "Especieros y dispensadores de vinagretas",
						link: "../especieros-dispensadores-vinagretas",
					},
					{
						label: "Organizadores de utensilios y cubiertos",
						link: "../organizadores-utensilios-cubiertos",
					},
					{
						label: "Servilleteros y portarrollos de cocina",
						link: "../servilleteros-portarollos-cocina",
					},
					{ label: "Botes de basura", link: "../cestos-de-basura" },
					{
						label: "Carritos multifuncionales",
						link: "../carritos-multifuncionales",
					},
				],
			},
			{
				label: "Hieleras y termos",
				link: "../hieleras-y-termos",
				subMenu: [
					{
						title: "Hieleras y termos",
						label: "Hieleras y termos grandes",
						link: "../hieleras-termos-grandes",
					},
					{
						label: "Botellas y termos deportivos",
						link: "../botellas-termos-deportivos",
					},
					{ label: "Termos para café", link: "../termos-cafe" },
				],
			},
			{
				label: "Repostería",
				link: "../reposteria",
				subMenu: [
					{
						title: "Repostería",
						label: "Moldes y charolas",
						link: "../moldes-charolas",
					},
					{
						label: "Utensilios para repostería",
						link: "../reposteria-utensilios-de-cocina",
					},
					{ label: "Batidores", link: "../batidores" },
				],
			},
			{
				label: "Coctelería y vino",
				link: "../cocteleria-vino",
				subMenu: [
					{
						title: "Coctelería y vino",
						label: "Sets para coctelería",
						link: "../sets-cocteleria",
					},
					{ label: "Sacacorchos", link: "../sacacorchos" },
					{
						label: "Licoreras y decantadores de vino",
						link: "../licores-decantadores-vino",
					},
					{ label: "Vasos para cocteles", link: "../vasos-cocteles" },
					{ label: "Mezcladores", link: "../mezcladores" },
					{
						label: "Soportes y portabotellas",
						link: "../soportes-portabotellas",
					},
				],
			},
			{
				label: "Máquinas de coser y accesorios",
				link: "../maquinas-coser-accesorios",
			},
			{
				label: "Aspiradoras y planchas",
				link: "../aspiradoras-y-planchas",
				subMenu: [
					{
						title: "Aspiradoras y planchas",
						label: "Planchas y accesorios",
						link: "../planchas",
					},
					{
						label: "Aspiradoras y accesorios",
						link: "../accesorios-para-aspiradoras",
					},
				],
			},
			{
				label: "Manteleria y textiles de cocina",
				link: "../materiales-textiles-cocina",
				subMenu: [
					{
						title: "Mantelería y textiles de cocina",
						label: "Manteles de mesa",
						link: "../manteles-mesa",
					},
					{ label: "Caminos de mesa", link: "../caminos-mesa" },
					{
						label: "Manteles individuales",
						link: "../manteles-individuales-para-mesa",
					},
					{ label: "Servilletas", link: "../servilletas" },
					{ label: "Delantales y guantes", link: "../delantales-guantes" },
					{ label: "Toallas y trapos", link: "../toallas-trapos" },
				],
			},
			{
				label: "Dispensadores, filtros de agua y portagarrafones",
				link: "../dispensadores-enfriadores-filtros-agua",
				subMenu: [
					{
						title: "Dispensadores, filtros de agua y portagarrafones",
						label: "Portagarrafones",
						link: "../porta-garrafones-cocina",
					},
					{
						label: "Dispensadores y enfriadores",
						link: "../dispensadores-enfriadores",
					},
					{
						label: "Filtros y purificadores de agua",
						link: "../filtros-purificadores-agua",
					},
				],
			},
		],
	},
	{
		label: "Ferreteria y Mejoras del Hogar",
		link: "../ferreteria-y-mejoras-del-hogar",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Home.svg",
		subMenu: [
			{
				title: "Ferreteria y Mejoras del Hogar",
				label: "Equipamiento para baño",
				link: "../equipamento-para-bano",
				subMenu: [
					{
						title: "Equipamiento para baño",
						label: "Sanitarios y lavabos",
						link: "../sanitarios-y-lavabos",
					},
					{
						label: "Regaderas y grifos para baño",
						link: "../regaderas-y-grifos-para-bano",
					},
					{ label: "Tinas", link: "../tinas-de-bano" },
					{
						label: "Instalación y repuestos para baño",
						link: "../instalacion-y-repuestos-para-bano",
					},
					{ label: "Accesorios de pared", link: "../accesorios-de-pared-bano" },
				],
			},
			{
				label: "Equipamiento para cocina",
				link: "../equipamento-para-cocina",
				subMenu: [
					{
						title: "Equipamiento para cocina",
						label: "Fregaderos",
						link: "../fregaderos",
					},
					{ label: "Grifo para cocina", link: "../grifos-de-cocina" },
					{
						label: "Filtros y purificadores de agua",
						link: "../filtros-purificadores-agua",
					},
				],
			},
			{
				label: "Plomería",
				link: "../plomeria",
				subMenu: [
					{
						title: "Plomería",
						label: "Tinacos y cisternas",
						link: "../tinacos-y-cisternas",
					},
					{
						label: "Bombas eléctricas de agua",
						link: "../bombas-electricas-de-agua",
					},
					{ label: "Tuberías y conexiones", link: "../tuberias-y-conexiones" },
					{ label: "Calentadores de agua", link: "../calentadores" },
				],
			},
			{
				label: "Pintura e impermeabilizantes",
				link: "../pintura-e-impermeabilizantes",
				subMenu: [
					{
						title: "Pintura e impermeabilizantes",
						label: "Pintura",
						link: "../pintura",
					},
					{ label: "Impermeabilizantes", link: "../impermeabilizantes" },
					{
						label: "Accesorios para pintar",
						link: "../accesorios-para-pintar",
					},
				],
			},
			{
				label: "Herramientas manuales y organizadores",
				link: "../herramientas-manuales-y-organizadores",
				subMenu: [
					{
						title: "Herramientas manuales y organizadores",
						label: "Desarmadores",
						link: "../desarmadores",
					},
					{ label: "Brocas", link: "../brocas" },
					{ label: "Pinzas", link: "../pinzas" },
					{ label: "Llaves", link: "../herramientas-llaves" },
					{
						label: "Juego de dados mecánicos",
						link: "../juego-de-dados-mecanicos",
					},
					{ label: "Sets de herramientas", link: "../sets-de-herramientas" },
					{
						label: "Martillos, Mazos y Cinceles",
						link: "../martillos-mazos-y-cinceles",
					},
					{
						label: "Herramientas de fijacíon",
						link: "../herramienta-de-fijacion",
					},
					{
						label: "Herramientas de medición",
						link: "../herramientas-de-medicion",
					},
					{
						label: "Espátulas y llanas",
						link: "../herramientas-espatulas-y-llanas",
					},
					{
						label: "Cajas y organizadores para herramientas",
						link: "../cajas-y-organizadores-herramientas",
					},
				],
			},
			{
				label: "Herammientas eléctricas",
				link: "../herramientas-electricas",
				subMenu: [
					{
						title: "Herramientas eléctricas",
						label: "Hidrolavadoras",
						link: "../hidrolavadoras",
					},
					{
						label: "Taladros y rotomartillos",
						link: "../taladros-y-rotomartillos",
					},
					{ label: "Pistolas de pinturas", link: "../pistolas-de-pintura" },
					{ label: "Esmeriladoras", link: "../esmeriladoras" },
					{ label: "Atornilladores", link: "../atornilladores" },
					{ label: "Martillos demoledores", link: "../martillos-demoledores" },
					{ label: "Pulidoras y lijadoras", link: "../pulidoras-y-lijadoras" },
					{
						label: "Soldadoras y accesorios",
						link: "../soldadoras-y-accesorios",
					},
					{
						label: "Routers, fresadoras y rebajadoras",
						link: "../routers-fresadoras-y-rebajadoras",
					},
					{
						label: "Generadores eléctricos",
						link: "../generadores-electricos",
					},
					{ label: "Kits y combos", link: "../kits-y-combos-de-herramientas" },
					{ label: "Sierras y accesorios", link: "../sierras-y-accesorios" },
					{ label: "Compresores de aire", link: "#" },
					{
						label: "Accesorios",
						link: "../accesorios-herramientas-electricas",
					},
					{ label: "Maquinas canteadoras", link: "../maquinas-canteadoras" },
					{ label: "Detectores de Metal", link: "../detectores-de-metal" },
				],
			},
			{
				label: "Puertas y marcos",
				link: "../puertas-y-marcos",
				subMenu: [
					{
						title: "Puertas y marcos",
						label: "Puertas",
						link: "../puertas-interiores",
					},
				],
			},
			{
				label: "Herramientas de jardinería",
				link: "../herramientas-de-jardineria",
				subMenu: [
					{
						title: "Herramientas de jardinería",
						label: "Motores y Motobombas a gasolina",
						link: "../motores-y-motobombas-a-gasolina",
					},
					{
						label: "Desbrozadoras y podadoras",
						link: "../desbrozadoras-y-podadoras",
					},
					{
						label: "Motosierras y corta setos",
						link: "../motosierras-y-corta-setos",
					},
					{ label: "Sopladoras de polvo y hojas", link: "/" },
					{ label: "Herramientas para riego", link: "/" },
					{ label: "Tijeras, escobas y rastrillos", link: "/" },
					{
						label: "Utensilios, accesorios y kits de herramientas",
						link: "../accesorios-kits-de-herramientas-jardin",
					},
					{ label: "Control de plagas", link: "../control-de-plagas" },
					{
						label: "Palas, picos y carretillas",
						link: "../palas-picos-y-carretillas-jardineria",
					},
				],
			},
			{
				label: "Seguridad del hogar",
				link: "../seguridad-del-hogar",
				subMenu: [
					{
						title: "Seguridad del hogar",
						label: "Cerraduras",
						link: "../cerraduras",
					},
					{ label: "Alarmas y sensores", link: "../alarmas-y-sensores" },
					{
						label: "Cajas fuertes de seguridad",
						link: "../caja-fuerte-de-seguridad",
					},
					{ label: "Candados", link: "../candados" },
					{ label: "Timbres inteligentes", link: "../timbres-inteligentes" },
					{ label: "Herrajes y bisagras", link: "../herrajes-y-bisagras" },
				],
			},
			{
				label: "Electricidad",
				link: "../electricidad",
				subMenu: [
					{
						title: "Electricidad",
						label: "Extensiones y multicontactos",
						link: "../extensiones-y-multicontactos",
					},
					{
						label: "Interruptores y contactos inteligentes",
						link: "../interruptores-y-contactos-inteligentes",
					},
					{ label: "Paneles solares", link: "../paneles-solares" },
				],
			},
			{
				label: "Iluminacion",
				link: "../iluminacion",
				subMenu: [
					{
						title: "Iluminación",
						label: "Lámparas decorativas para interior",
						link: "../lamparas-decorativas-interior",
					},
					{
						label: "Iluminación para exteriores",
						link: "../iluminacion-exteriores",
					},
					{ label: "Focos", link: "../focos" },
					{
						label: "Iluminación de seguridad",
						link: "../iluminacion-seguridad",
					},
					{ label: "Luces para espejos", link: "../luces-espejos" },
					{ label: "Postes de luz", link: "../postes-de-luz-decoracion" },
				],
			},
			{
				label: "Construccion y accesorios",
				link: "../construccion-y-accesorios",
				subMenu: [
					{
						title: "Construccion y accesorios",
						label: "Accesorios de construcción",
						link: "../accesorios-de-construccion",
					},
				],
			},
			{
				label: "Herramientas",
				link: "../herramientas",
			},
		],
	},

	//SECCION TECNOLOGIA
	{
		title: "Tecnología",
		label: "Celulares",
		link: "../celulares",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Phones.svg",
		subMenu: [
			{
				linkOfertas: "../celulares",
				btnOfertas: "Ver ofertas",
				title: "Celulares",
				label: "Equipos celulares por compañía",
				link: "../equipos-celulares",
				icon: "/path-to-icon/refrigeradores.svg",
				subMenu: [
					{
						title: "Equipos celulares por compañía",
						label: "Telefonía libre: Celulares de gama alta y desbloqueados",
						link: "../telefonos-celulares-libres",
					},
					{ label: "Telcel", link: "../celulares-telcel" },
					{ label: "Movistar", link: "../movistar" },
					{ label: "AT&T y Unefon", link: "../celulares-att" },
					{
						label: "Celulares Reacondicionados",
						link: "../celulares-reacondicionados",
					},
				],
			},
			{
				label: "Accesorios para Apple",
				link: "../accesorios-apple",
				icon: "/path-to-icon/lavadoras.svg",
				subMenu: [
					{
						title: "Accesorios para Apple",
						label: "Cargadores y cables para iPhone",
						link: "../cargadores-y-cables-iphone",
					},
					{ label: "AirPods", link: "../audifonos-airpods-y-cables-tipo-c" },
					{
						label: "Fundas y carcasas para iPhone",
						link: "../fundas-y-carcasas-iphone",
					},
					{
						label: "Accesorios para smartwatches",
						link: "../accesorios-para-smartwatches",
					},
					{ label: "Accesorios para AirPods", link: "../accesorios-airpods" },
					{
						label: "Accesorios para Apple Watch",
						link: "../accesorios-apple-watch",
					},
					{ label: "AirTag y accesorios", link: "../airtag-y-accesorios" },
				],
			},
			{
				label: "Smartwatches y pulseras inteligentes",
				link: "../smartwatches-y-pulseras-inteligentes",
				icon: "/path-to-icon/refrigeradores.svg",
				subMenu: [
					{
						title: "Smartwatches y pulseras inteligentes",
						label: "Smartwatches",
						link: "../smartwatches",
					},
					{ label: "Pulseras inteligentes", link: "../pulseras-inteligentes" },
					{
						label: "Accesorios para smartwatches",
						link: "../accesorios-para-smartwatches",
					},
				],
			},
			{
				label: "Equipos",
				link: "../marcas-celulares",
				icon: "/path-to-icon/refrigeradores.svg",
				subMenu: [
					{ title: "Equipos", label: "Zuum", link: "../celulares-zuum" },
					{ label: "Apple", link: "../celulares-apple" },
					{ label: "Samsung", link: "../celulares-samsung" },
					{ label: "Motorola", link: "../celulares-motorola" },
					{ label: "Oppo", link: "../celulares-oppo" },
					{ label: "Xiaomi", link: "../celulares-xiaomi" },
					{ label: "Honor", link: "../celulares-honor" },
					{ label: "ZTE", link: "../celulares-zte" },
					{ label: "Vivo", link: "../vivo" },
					{ label: "Realme", link: "#" },
					{ label: "Blu", link: "../blu" },
					{ label: "Huawei", link: "../celulares-huawei" },
					{ label: "Bmobile", link: "../bmobile" },
				],
			},
			{
				label: "Accesorios para celulares",
				link: "../accesorios-para-celulares",
				icon: "/path-to-icon/refrigeradores.svg",
				subMenu: [
					{
						title: "Accesorios para celulares",
						label: "Fundas y carcasas",
						link: "../fundas-y-carcasas",
					},
					{
						label: "Micas para pantalla",
						link: "../protectores-de-pantalla-para-celular",
					},
					{ label: "Cargadores", link: "../cargadores" },
					{
						label: "Cables y adaptadores para celular",
						link: "../cables-adaptadores-para-celular",
					},
					{
						label: "Accesorios para vehículos",
						link: "../accesorios-vehiculos",
					},
					{
						label: "Soportes y anillos sujetadores",
						link: "../soportes-anillos-sujetadores",
					},
					{
						label: "Estabilizadores, tripíes y selfie stick",
						link: "../estabilizadores-tripies-selfie-stick",
					},
					{
						label: "Tarjeteros adheribles y Stickers",
						link: "../tarjeteros-adheribles",
					},
					{
						label: "Audífonos y manos libres",
						link: "../audifonos-y-manos-libres",
					},
					{ label: "Fotografia para celular", link: "../fotografias-celular" },
					{ label: "Plumas táctiles", link: "../plumas-tactiles" },
					{ label: "Ventilador para Celular", link: "../ventiladores-celular" },
					{ label: "Bocinas portátiles", link: "../bocinas-para-celuar" },
					{ label: "Mini teclados", link: "../mini-teclados" },
					{
						label: "Memorias SD, micro y mini SD",
						link: "../tarjetas-de-memoria",
					},
					{
						label: "Amplificadores de pantalla",
						link: "../amplificadores-pantalla",
					},
					{
						label: "Cajas de sanitización UV",
						link: "../cajas-sanitizacion-uv",
					},
					{ label: "Gamepad para celular", link: "../gamepad-celular" },
				],
			},
			{
				label: "Telefonia fija",
				link: "../telefonia-fija",
				icon: "/path-to-icon/refrigeradores.svg",
				subMenu: [
					{
						title: "Telefonía fija",
						label: "Teléfonos inalámbricos",
						link: "../telefonos-inalambricos",
					},
					{ label: "Teléfonos alámbricos", link: "../telefonos-alambricos" },
				],
			},
		],
	},

	{
		label: "Electronica",
		link: "../electronica",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Electronics.svg",
		subMenu: [
			{
				title: "Electronica",
				label: "TV y video",
				link: "../television-y-video",
				icon: "/path-to-icon/refrigeradores.svg",
				subMenu: [
					{ title: "TV y video", label: "Pantallas", link: "../pantallas-led" },
					{
						label: "Barras de Sonido y Teatro en Casa",
						link: "../teatros-en-casa",
					},
					{
						label: "Dispositivos para streaming",
						link: "../dispositivos-streaming-tvs",
					},
					{
						label: "Accesorios para TV y video",
						link: "../accesorios-para-tv-pantallas",
					},
					{
						label: "Reproductores Blu-Ray DVD y video",
						link: "../reproductores-blu-ray-dvd",
					},
				],
			},
			{
				label: "Cómputo",
				link: "../computadoras",
				icon: "/path-to-icon/lavadoras.svg",
				subMenu: [
					{ title: "Computo", label: "Laptops", link: "../laptops" },
					{
						label: "Impresoras y escáneres",
						link: "../impresoras-y-escaneres",
					},
					{ label: "PC gaming", link: "../pc-gaming" },
					{
						label: "Computadoras de escritorio",
						link: "../computadoras-de-escritorio-computo",
					},
					{ label: "Monitores", link: "../monitores" },
					{
						label: "Proyectores y accesorios",
						link: "../proyectos-y-accesorios",
					},
					{ label: "Accesorios de cómputo", link: "../accesorios-de-computo" },
					{
						label: "Reguladores y No break",
						link: "../reguladores-y-multicontactos",
					},
					{ label: "Almacenamiento", link: "../almacenamiento-computadora" },
					{ label: "Redes y conexión", link: "../redes-conectividad" },
					{ label: "Software", link: "../software" },
					{ label: "Componentes", link: "../componentes-de-computadora" },
					{ label: "Repuestos para Laptop", link: "../repuestos-para-laptop" },
					{
						label: "Computadoras y laptops reacondicionadas",
						link: "../computadoras-y-laptops-reacondicionados-anterior",
					},
				],
			},
			{
				label: "Audio y equipos de sonido",
				link: "../audio-y-equipos-de-sonido",
				subMenu: [
					{
						title: "Audio y equipos de sonido",
						label: "Audifonos",
						link: "../audifonos",
					},
					{ label: "Bocinas", link: "../bocinas-portatiles" },
					{ label: "Minicomponentes", link: "../minicomponentes" },
					{
						label: "Barras de Sonido y Teatro en Casa",
						link: "../teatros-en-casa",
					},
					{
						label: "Amplificadores y receptores",
						link: "../amplificadores-y-receptores",
					},
					{ label: "Grabadoras y radios", link: "../radios-y-grabadoras" },
					{
						label: "Reproductores Portátiles",
						link: "../reproductores-portatiles",
					},
					{ label: "Álbumes de música", link: "../albumes-de-musica" },
				],
			},
			{
				label: "Tablets y accesorios",
				link: "../tablets-y-accesorios",
				subMenu: [
					{
						title: "Tablets y accesorios",
						label: "Tablets",
						link: "../tablets",
					},
					{
						label: "Accesorios y fundas para tablets",
						link: "../accesorios-para-ipads-y-tablets",
					},
					{ label: "Tabletas de dibujo", link: "../tablet-de-dibujo" },
				],
			},
			{
				label: "Smartwatches y pulseras inteligentes",
				link: "../smartwatches-y-pulseras-inteligentes",
				subMenu: [
					{
						title: "Smartwatches y pulseras inteligentes",
						label: "Smartwatches",
						link: "../smartwatches",
					},
					{ label: "Pulseras inteligentes", link: "../pulseras-inteligentes" },
					{
						label: "Accesorios para smartwatches",
						link: "../accesorios-para-smartwatches",
					},
				],
			},
			{
				label: "Hogar inteligente",
				link: "../hogar-inteligente",
				subMenu: [
					{
						title: "Hogar inteligente",
						label: "Asistentes de voz",
						link: "../asistente-de-voz",
					},
					{ label: "Controles y mandos", link: "../controles-inteligentes" },
					{ label: "Alarmas y sensores", link: "../alarmas-y-sensores" },
					{ label: "Cámaras de seguridad", link: "../camaras-de-seguridad" },
					{ label: "Focos", link: "../focos" },
				],
			},
			{
				label: "Electrónica para autos",
				link: "../electronica-para-autos",
				//no tiene nivel 3
			},
			{
				label: "Cámaras y Fotografia",
				link: "../camaras-y-fotografia",
				icon: "/path-to-icon/refrigeradores.svg",
				subMenu: [
					{
						title: "Cámaras y Fotografia",
						label: "Cámaras fotográficas",
						link: "../camaras-fotograficas",
					},
					{ label: "Lentes y filtros", link: "../lentes-y-filtros" },
					{ label: "Drones y accesorios", link: "../drones-y-accesorios" },
					{
						label: "Fotografía subacuática",
						link: "../fotografia-subacuatica",
					},
					{ label: "Fotografía analógica", link: "../fotografia-analoga" },
					{ label: "Flashes", link: "../flashes-para-camara" },
					{
						label: "Binoculares, Telescopios y Óptica",
						link: "../binoculares-y-telescopios",
					},
					{
						label: "Accesorios para cámaras",
						link: "../accesorios-para-camara",
					},
					{
						label: "Álbumes y Portarretratos",
						link: "../album-y-portarretratos",
					},
				],
			},
			{
				label: "Telefonía fija",
				link: "../telefonia-fija",
				subMenu: [
					{
						title: "Telefonía fija",
						label: "Teléfonos inalámbricos",
						link: "../telefonos-inalambricos",
					},
					{ label: "Teléfonos alámbricos", link: "../telefonos-alambricos" },
				],
			},
			{
				label: "Pilas, cargadores y baterías",
				link: "../pilas-y-cargadores",
				subMenu: [
					{
						title: "Pilas, cargadores y baterias",
						label: "Pilas",
						link: "../pilas",
					},
					{ label: "Pilas recargables", link: "../pilas-recargables" },
					{ label: "Cargadores de pilas", link: "../cargadores-de-pilas" },
					{ label: "Adaptadores de pilas", link: "../adaptadores-para-pilas" },
				],
			},
			{
				label: "Radiocomunicacion",
				link: "../radiocomunicacion",
				subMenu: [
					{
						title: "Radiocomunicacion",
						label: "Radios de comunicación",
						link: "../radio-comunicacion",
					},
					{ label: "Accesorios", link: "../accesorios-radiocomunicacion" },
				],
			},
			{
				label: "Gadgets",
				link: "../gadgets",
				//no hay nivel 3
			},
			{
				label: "Electrónicos de oficina",
				link: "../electronicos-de-oficina",
				subMenu: [
					{
						title: "Electrónicos de oficina",
						label: "Rotuladoras",
						link: "../rotuladoras",
					},
					{ label: "Hendidoras", link: "../hendidoras" },
					{ label: "Calculadoras", link: "../calculadoras" },
					{
						label: "Escaner de Códigos de Barras",
						link: "../lectores-de-codigos-de-barras",
					},
					{ label: "Etiquetadoras de precios", link: "../etiquetadoras" },
					{ label: "Cajas Registradoras", link: "../caja-registradora" },
					{
						label: "Diccionarios, Tesauros y Traductores",
						link: "../diccionarios-tesauros-traductores-electronicos",
					},
					{
						label: "Fax y Multifuncionales",
						link: "../fax-y-multifuncionales",
					},
					{ label: "Copiadoras", link: "../copiadoras" },
					{
						label: "Enmicadoras y Laminadoras",
						link: "../enmicadoras-y-laminadoras",
					},
					{ label: "Básculas Para Correo", link: "../basculas-para-correo" },
					{ label: "Trituradoras", link: "../trituradoras" },
					{
						label: "Grabadoras de voz y accesorios",
						link: "../grabadoras-y-accesorios",
					},
				],
			},
			{
				label: "Navegoción y GPS",
				link: "../navegacion-y-gps",
				subMenu: [
					{
						title: "Navegación y GPS",
						label: "Rastreo GPS",
						link: "../rastreo-gps",
					},
					{ label: "Mapas", link: "../mapas" },
					{ label: "Accesorios", link: "../accesorios-gps" },
				],
			},
			{
				label: "Cables y accesorios",
				link: "../cables-y-accesorios",
				subMenu: [
					{
						title: "Cables y accesorios",
						label: "Cables HDMI",
						link: "../cable-hdmi",
					},
					{ label: "Cables VGA", link: "../cable-vga" },
					{
						label: "Cables auxiliares de audio y video",
						link: "../cable-auxiliar-de-audio-y-video",
					},
					{ label: "Cables", link: "../cables-para-computadora" },
					{
						label: "Accesorios para cables",
						link: "../accesorios-para-cables",
					},
				],
			},
		],
	},

	{
		label: "Consolas y Videojuegos",
		link: "../consolas-videojuegos",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Videogames.svg",
		subMenu: [
			{
				linkOfertas:
					"https://www.coppel.com/SearchDisplay?categoryId=108001&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&beginIndex=0&pageSize=12&searchType=1000&searchTerm=oferta+descuento&ref=mprpsc",
				btnOfertas: "Ver ofertas",
				title: "Consolas y Videojuegos",
				label: "Xbox Series One, S y X",
				link: "../xbox-series-one-s-x",
				subMenu: [
					{
						title: "Xbox Series One, S y X",
						label: "Consolas",
						link: "../consolas-xbox",
					},
					{ label: "Videojuegos", link: "../videojuegos-para-xbox" },
					{
						label: "Accesorios para Xbox One, S y X",
						link: "../accesorios-para-xbox",
					},
				],
			},
			{
				label: "Playstation 4 y 5",
				link: "../playstation",
				subMenu: [
					{
						title: "Playstation 4 y 5",
						label: "Consolas",
						link: "../consolas-playstation",
					},
					{ label: "Videojuegos", link: "../videojuegos-para-playstation" },
					{
						label: "Accesorios para Playstation 4 y 5",
						link: "../accesorios-playstation-4",
					},
				],
			},
			{
				label: "Nintendo",
				link: "../nintendo",
				subMenu: [
					{
						title: "Nintendo",
						label: "Consolas",
						link: "../consola-nintendo-switch",
					},
					{ label: "Videojuegos", link: "../videojuegos-para-nintendo" },
					{
						label: "Accesorios para Nintendo Switch y Switch Lite",
						link: "../accesorios-de-nintendo",
					},
				],
			},
			{
				label: "PC gaming y accesorios",
				link: "../pcs-gaming",
				subMenu: [
					{
						title: "PC gaming y accesorios",
						label: "Monitores",
						link: "../monitores",
					},
					{ label: "Audifonos gamer", link: "../audifonos-gamer" },
					{
						label: "Teclados y mouse",
						link: "../teclados-accesorios-de-computo",
					},
					{
						label: "Sillas y escritorios gamer",
						link: "../sillas-escritorios-gamer",
					},
					{
						label: "Paquete de componentes gamer",
						link: "../componentes-para-pc-gamer",
					},
					{ label: "Componentes", link: "../componentes-de-computadora" },
					{ label: "Controles y joysticks", link: "../joystick-pc-gaming" },
					{
						label: "Lentes de realidad virtual",
						link: "../lentes-de-realidad-virtual-pc-gaming",
					},
				],
			},
			{
				label: "Otras consolas",
				link: "../otras-consolas-anterior",
				subMenu: [
					{
						title: "Otras consolas",
						label: "Accesorios varios",
						link: "../accesorios-para-videojuegos",
					},
				],
			},
			{
				label: "Consolas de generaciones anteriores y retro",
				link: "../consolas-retro",
				subMenu: [
					{
						title: "Consolas de generaciones anteriores y retro",
						label: "Acessorios para Xbox clásico y 360",
						link: "../accesorios-xbox-360",
					},
					{
						label: "Accesorios para Nintendo Wii, DS, 64 y NES",
						link: "../accesorios-consolas-nintendo",
					},
					{
						label: "Accesorios para Playstation 1,2,3 y PSP",
						link: "../accesorios-playstation-y-psp",
					},
					{
						label: "Accesorios y repuestos para consolas retro",
						link: "../accesorios-repuestos-para-arcade",
					},
					{ label: "Xbox clásico y 360", link: "../xbox-360" },
					{
						label: "Nintendo Wii, DS, 64, NES y Game Boy",
						link: "../videojuegos-consolas-nintendo",
					},
					{ label: "Playstation 1, 2, 3 y PSP", link: "../playstation-y-psp" },
					{ label: "Sega", link: "../sega" },
					{ label: "Consolas retro genéricas", link: "../otras-consolas" },
					{
						label: "Arcade / maquinitas",
						link: "../accesorios-consolas-retro",
					},
				],
			},
		],
	},

	//SECCION ROPA Y ZAPATOS
	{
		title: "Ropa y zapatos",
		label: "Zapatos",
		link: "../zapatos",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Shoes.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				linkOfertas: "../zapatos/outlet-zapatos",
				title: "Zapatos",
				label: "Zapatos para mujer",
				link: "../zapatos-para-mujer",
				subMenu: [
					{
						title: "Zapatos para mujer",
						label: "Tenis deportivos",
						link: "../tenis-deportivos-para-mujeres",
					},
					{ label: "Botas y botines", link: "../botas-para-mujer" },
					{ label: "Zapatillas", link: "../tacones" },
					{ label: "Sandalias", link: "../sandalias-para-mujeres" },
					{ label: "Confort", link: "../zapatos-confort-para-mujer" },
					{ label: "Tenis casuales", link: "../tenis-casuales-para-mujeres" },
					{ label: "Flats", link: "../flats-para-mujeres" },
					{ label: "Plataformas", link: "../zapatos-plataforma-para-mujeres" },
					{ label: "Oxford", link: "../zapatos-oxford-para-mujer" },
					{ label: "Mocasines", link: "../mocasines-para-mujer" },
					{ label: "Alpargatas", link: "../alpargatas-para-mujer" },
					{ label: "Pantuflas", link: "../pantuflas-mujer" },
				],
			},
			{
				label: "Zapatos para bebé",
				link: "../zapatos-bebes",
				subMenu: [
					{
						title: "Zapatos para bebé",
						label: "Bebé Niña",
						link: "../zapatos-para-bebe-nina",
					},
					{ label: "Bebé Niño", link: "../zapatos-para-bebe-nino" },
					{
						label: "Calzado de personajes",
						link: "../calzado-personajes-bebe",
					},
				],
			},
			{
				label: "Zapatos para hombre",
				link: "../zapatos-para-hombre",
				subMenu: [
					{
						title: "Zapatos para hombre",
						label: "Tenis casuales",
						link: "../tenis-casuales-para-hombres",
					},
					{ label: "Botas y botines", link: "../botas-para-hombre" },
					{ label: "Sandalias", link: "../sandalias-para-hombre" },
					{
						label: "Tenis deportivos",
						link: "../tenis-deportivos-para-hombre",
					},
					{
						label: "Zapatos casuales",
						link: "../zapatos-casuales-para-hombres",
					},
					{
						label: "Zapatos de vestir",
						link: "../zapatos-de-vestir-para-hombres",
					},
					{ label: "Mocasines", link: "../mocasines-para-hombres" },
					{
						label: "Zapatos de confort",
						link: "../zapatos-confort-para-hombres",
					},
					{ label: "Pantuflas", link: "../pantuflas-para-hombre" },
				],
			},
			{
				label: "Zapatos Infantiles",
				link: "../zapatos-infantiles",
				subMenu: [
					{
						title: "Zapatos Infantiles",
						label: "Niño",
						link: "../zapatos-para-ninos",
					},
					{ label: "Niña", link: "../zapatos-para-ninas" },
					{ label: "Juniors", link: "../zapato-juvenil-para-nino" },
				],
			},
			{
				label: "Accesorios",
				link: "../accesorios-para-zapatos",
				subMenu: [
					{
						title: "Accesorios",
						label: "Plantillas y taloneras",
						link: "../plantillas-y-taloneras",
					},
					{ label: "Limpieza de calzado", link: "../limpieza-del-calzado" },
				],
			},
			{
				label: "Outlet",
				link: "../outlet-zapatos",
				subMenu: [
					{
						title: "Outlet",
						label: "Mujeres",
						link: "../outlet-zapatos-mujer",
					},
					{ label: "Infantiles", link: "../outlet-zapatos-infantiles" },
					{ label: "Hombres", link: "../outlet-zapatos-hombres" },
				],
			},
		],
	},

	{
		label: "Bebés",
		link: "../bebes",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Baby.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				linkOfertas:
					"https://www.coppel.com/SearchDisplay?sType=SimpleSearch&ddkey=ProductListingView_1_-3028_1201&fromPage=catalogEntryList&facet_1=ads_f11643_ntk_cs%253A%2522Descuento%2522&searchTerm=bebes+y+ninos",
				title: "Bebés",
				label: "Ropa de bebés",
				link: "../ropa-para-bebe",
				subMenu: [
					{
						title: "Ropa de bebés",
						label: "Bebé Niña",
						link: "../ropa-bebe-nina",
					},
					{ label: "Bebé Niño", link: "../bebe-nino" },
					{
						label: "Accesorios y sets de regalo para bebés",
						link: "../accesorios-sets-de-regalo-para-bebe",
					},
				],
			},
			{
				label: "Zapatos para bebé",
				link: "../zapatos-bebes",
				subMenu: [
					{
						title: "Zapatos para bebés",
						label: "Bebé Niña",
						link: "../zapatos-para-bebe-nina",
					},
					{ label: "Bebé Niño", link: "../zapatos-para-bebe-nino" },
					{
						label: "Calzado de personajes",
						link: "../calzado-personajes-bebe",
					},
				],
			},
			{
				label: "Sugerencias del mes",
				link: "../sugerencias-de-mes-bebes",
				//no hay nivel 3
			},
			{
				label: "Outlet",
				link: "../outlet-bebes",
				subMenu: [
					{
						title: "Outlet",
						label: "Ropa para bebé",
						link: "../outlet-ropa-para-bebe",
					},
					{
						label: "Articulos para bebé",
						link: "../articulos-para-bebe-outlet",
					},
				],
			},
			{
				label: "Personajes",
				link: "../ropa-de-personajes-bebe",
				subMenu: [
					{
						title: "Personajes",
						label: "Ropa",
						link: "../ropa-con-personajes-bebe",
					},
				],
			},
			{
				label: "Todo para tu bebé",
				link: "../todo-para-bebe",
				subMenu: [
					{
						title: "Todo para tu bebé",
						label: "Carriolas",
						link: "../carriolas-bebe",
					},
					{ label: "Paseo del bebé", link: "../paseo-del-bebe" },
					{ label: "Cuarto del bebé", link: "../cuarto-del-bebe" },
					{ label: "Juguetes para bebé", link: "../juguetes-bebes" },
					{
						label: "Lactancia y Alimentacion",
						link: "../lactancia-y-alimentacion",
					},
					{
						label: "Ropa de cama para bebé",
						link: "../ropa-de-cama-para-bebe",
					},
					{ label: "Baño e higiene", link: "../bano-e-higiene-bebe" },
					{ label: "Seguridad del bebé", link: "../seguridad-de-bebe" },
					{ label: "Salud del bebé", link: "../salud-del-bebe" },
				],
			},
		],
	},

	{
		label: "Niños y Adolescentes",
		link: "../ninos-y-adolescentes",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Kids.svg",
		subMenu: [
			{
				title: "Niños y Adolescentes",
				label: "Zapatos Infantiles",
				link: "../zapatos-infantiles",
				subMenu: [
					{
						title: "Zapatos Infantiles",
						label: "Niño",
						link: "../zapatos-para-ninos",
					},
					{ label: "Niña", link: "../zapatos-para-ninas" },
					{ label: "Juniors", link: "../zapato-juvenil-para-nino" },
				],
			},
			{
				label: "Ropa infantil",
				link: "../ropa-infantil",
				subMenu: [
					{
						title: "Ropa infantil",
						label: "Ropa niña",
						link: "../ropa-para-nina",
					},
					{ label: "Ropa niño", link: "../ropa-para-nino" },
					{ label: "Accesorios para niña", link: "../accesorios-para-nina" },
					{ label: "Accesorios para niño", link: "../accesorios-para-nino" },
				],
			},
			{
				label: "Ropa adolescentes",
				link: "../ropa-adolescente",
				subMenu: [
					{
						title: "Ropa adolescentes",
						label: "Adolescente niña",
						link: "../ropa-adolescente-mujer",
					},
					{ label: "Adolescentes niño", link: "../adolescente-hombre" },
					{ label: "Accesorios", link: "../accesorios-para-adolescentes" },
				],
			},
			{
				label: "Mochilas Infantiles",
				link: "../mochilas-infantiles",
				subMenu: [
					{
						title: "Mochilas infantiles",
						label: "Mochilas para niña",
						link: "../mochilas-ninas",
					},
					{ label: "Mochilas para niño", link: "../mochilas-ninos" },
					{
						label: "Material para dibujar, colorear y pintar",
						link: "../material-para-dibujar-y-pintar",
					},
				],
			},
			{
				label: "Cuarto infantil",
				link: "../cuarto-infantil",
				subMenu: [
					{
						title: "Cuarto infantil",
						label: "Camas infantiles",
						link: "../camas-infantiles",
					},
					{ label: "Cómodas infantiles", link: "../comodas-infantiles" },
					{ label: "Colchones infantiles", link: "../colchones-infantiles" },
					{
						label: "Escritorios infantiles",
						link: "../escritorios-infantiles",
					},
					{
						label: "Ropa de cama infantil",
						link: "../ropa-de-cama-cuarto-infantil",
					},
					{ label: "Decoracion", link: "../decoracion-cuarto-infantil" },
					{
						label: "Mesas de juego y tiendas de campaña",
						link: "../tiendas-de-campana-infantil",
					},
					{ label: "Jugueteros", link: "../jugueteros" },
				],
			},
			{
				label: "Sugerencias del mes",
				link: "../sugerencias-del-mes-ninos",
				subMenu: [
					{
						title: "Sugerencias del mes",
						label: "Niña",
						link: "../sugerencias-ropa-nina",
					},
					{ label: "Niño", link: "../sugerencias-ropa-nino" },
				],
			},
			{
				label: "Personajes",
				link: "../ropa-de-personajes",
				subMenu: [
					{
						title: "Personajes",
						label: "Niña",
						link: "../ropa-de-personajes-nina",
					},
					{ label: "Niño", link: "../ropa-de-personajes-nino" },
				],
			},
			{
				label: "Outlet",
				link: "../outlet-ninos",
				subMenu: [
					{ title: "Outlet", label: "Infantil", link: "../outlet-infantil" },
				],
			},
			{
				label: "Disfraces y accesorios",
				link: "../disfraces-y-accesorios",
				subMenu: [
					{
						title: "Disfraces y accesorios",
						label: "Disfraces para niños",
						link: "../disfraces-para-ninos",
					},
					{
						label: "Máscaras y juegos de rol",
						link: "../mascaras-y-juegos-de-rol",
					},
					{
						label: "Accesorios para disfraces",
						link: "../accesorios-para-disfraces",
					},
				],
			},
		],
	},

	{
		label: "Hombres",
		link: "../hombres",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Man.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				linkOfertas: "../hombres",
				title: "Hombres",
				label: "Ropa",
				link: "../ropa-y-accesorios-para-hombre",
				subMenu: [
					{
						title: "Ropa",
						label: "Ropa Interior y Pijamas",
						link: "../ropa-interior-y-pijamas-hombre",
					},
					{ label: "Jeans", link: "../jeans-para-hombres" },
					{ label: "Pantalones", link: "../pantalones-para-hombres" },
					{ label: "Playeras y polos", link: "../playeras-y-polos-hombre" },
					{ label: "Camisas", link: "../camisas-ropa" },
					{ label: "Shorts y Bermudas", link: "../bermudas-ropa" },
					{ label: "Sudaderas", link: "../sudaderas-de-hombre" },
					{ label: "Suéteres", link: "../sueteres-de-hombre" },
					{ label: "Chamarras", link: "../chamarras-de-hombre" },
					{ label: "Chalecos", link: "../chalecos-de-hombre" },
					{ label: "Abrigos", link: "../abrigos-de-hombre" },
					{ label: "Trajes y sacos", link: "../trajes-y-sacos" },
					{
						label: "Ropa deportiva para hombre",
						link: "../ropa-deportiva-de-hombre",
					},
					{ label: "Calcetas", link: "../calcetas-de-hombre" },
					{ label: "Trajes de baño", link: "../trajes-de-bano-para-hombres" },
				],
			},
			{
				label: "Zapatos para hombre",
				link: "../zapatos-para-hombre",
				subMenu: [
					{
						title: "Zapatos para hombre",
						label: "Tenis Casuales",
						link: "../tenis-casuales-para-hombres",
					},
					{ label: "Botas y botines", link: "../botas-para-hombres" },
					{ label: "Sandalías", link: "../sandalias-para-hombre" },
					{
						label: "Tenis deportivos",
						link: "../tenis-deportivos-para-hombre",
					},
					{
						label: "Zapatos casuales",
						link: "../zapatos-casuales-para-hombres",
					},
					{
						label: "Zapatos de vestir",
						link: "../zapatos-de-vestir-para-hombres",
					},
					{ label: "Mocasines", link: "../mocasines-para-hombres" },
					{ label: "Zapatos confort", link: "../zapatos-confort-para-hombres" },
					{ label: "Pantuflas", link: "../pantuflas-para-hombre" },
				],
			},
			{
				label: "Licencias",
				link: "../playeras-estampadas",
				//no nivel 3
			},
			{
				label: "Outlet",
				link: "../outlet-hombres",
				//no nivel 3
			},
			{
				label: "Sugerencias del mes",
				link: "../sugerencias-del-mes-hombres",
				//no nivel 3
			},
			{
				label: "Accesorios para hombre",
				link: "../accesorios-para-hombres",
				subMenu: [
					{
						title: "Accesorios para hombre",
						label: "Corbatas y accesorios de vestir",
						link: "../corbatas-y-accesorios-para-hombre",
					},
					{ label: "Cinturones", link: "../cinturones-accesorios" },
					{ label: "Guantes y bufandas", link: "../guantes-y-bufandas-hombre" },
					{ label: "Gorras y gorros", link: "../gorras-y-gorras-hombre" },
					{
						label: "Regalos y Novedades",
						link: "../regalos-y-novedades-para-hombres",
					},
					{
						label: "Mochilas, carteras y cangureras para hombre",
						link: "../mochilas-carteras-y-cangureras-hombre",
					},
					{ label: "Lentes", link: "../lentes-para-hombre" },
				],
			},
		],
	},

	{
		label: "Mujeres",
		link: "../mujeres",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Woman.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				linkOfertas:
					"https://www.coppel.com/SearchDisplay?categoryId=&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=12&searchTerm=dama+ofertas",
				title: "Mujeres",
				label: "Ropa",
				link: "../ropa-y-accesorios-para-mujer",
				subMenu: [
					{
						title: "Ropa",
						label: "Vestidos",
						link: "../vestidos-para-mujeres",
					},
					{ label: "Jeans Mujer", link: "../jeans-para-mujer" },
					{ label: "Pantalones", link: "../pantalones-para-mujer" },
					{ label: "Faldas", link: "../faldas-para-mujeres" },
					{
						label: "Shorts y Bermudas para Mujer",
						link: "../shorts-y-bermudas-mujeres",
					},
					{ label: "Suéteres y capas", link: "../sueters-y-cardigans-mujeres" },
					{ label: "Chalecos", link: "../chalecos-para-mujeres" },
					{ label: "Sacos y blazers", link: "../sacos-y-blazers-mujeres" },
					{
						label: "Chamarras para mujer",
						link: "../chamarras-y-abrigos-mujeres",
					},
					{
						label: "Sudaderas para mujer",
						link: "../sudaderas-y-pants-mujeres",
					},
					{ label: "Licencias", link: "../licencias" },
					{ label: "Blusas", link: "../blusas-para-mujeres" },
					{ label: "Playeras y polos", link: "../playeras-y-polos-mujer" },
					{
						label: "Jumpsuit y overoles",
						link: "../jumpsuit-y-oberoles-mujeres",
					},
					{ label: "Lencería", link: "../lenceria-para-mujeres" },
					{ label: "Pijamas y batas", link: "../pijamas-y-batas-para-mujer" },
					{
						label: "Trajes de baño y ropa de playa",
						link: "../trajes-de-bano-y-ropa-playa-mujeres",
					},
					{
						label: "Ropa deportiva para mujer",
						link: "../ropa-deportiva-de-mujer",
					},
					{
						label: "Curvy + Tallas extra",
						link: "../ropa-tallas-extras-de-mujer",
					},
				],
			},
			{
				label: "Zapatos para mujer",
				link: "../zapatos-para-mujer",
				subMenu: [
					{
						title: "Zapatos para mujer",
						label: "Tenis deportivos",
						link: "../tenis-deportivos-para-mujeres",
					},
					{ label: "Botas y botines", link: "../botas-para-mujer" },
					{ label: "Zapatillas", link: "../tacones" },
					{ label: "Sandalias", link: "../sandalias-para-mujeres" },
					{ label: "Confort", link: "../zapatos-confort-para-mujer" },
					{ label: "Tenis casuales", link: "../tenis-casuales-para-mujeres" },
					{ label: "Flats", link: "../flats-para-mujeres" },
					{ label: "Plataformas", link: "../zapatos-plataforma-para-mujeres" },
					{ label: "Oxford", link: "../zapatos-oxford-para-mujer" },
					{ label: "Mocasines", link: "../mocasines-para-mujer" },
					{ label: "Alpargatas", link: "../alpargatas-para-mujer" },
					{ label: "Pantuflas", link: "../pantuflas-mujer" },
				],
			},
			{
				label: "Accesorios para mujer",
				link: "../accesorios-para-mujeres",
				subMenu: [
					{
						title: "Accesorios para mujer",
						label: "Bisutería de fantasía",
						link: "../bisuteria",
					},
					{ label: "Cinturones", link: "../cintos-para-mujer" },
					{
						label: "Bufandas y pashminas",
						link: "../bufandas-y-pashminas-para-mujeres",
					},
					{
						label: "Sombreros y gorros para mujer",
						link: "../sombreros-y-gorros-mujer",
					},
					{ label: "Guantes", link: "../guantes-para-mujeres" },
					{ label: "Paraguas", link: "../paraguas-para-mujeres" },
					{ label: "Otros", link: "../accesorios-para-dama" },
					{
						label: "Accesorios para cabello",
						link: "../accesorios-cabello-mujer",
					},
					{ label: "Llaveros", link: "../llaveros-para-mujer" },
				],
			},
			{
				label: "Bolsas y carteras para mujer",
				link: "../bolsas-y-carteras-para-mujer",
				subMenu: [
					{
						title: "Bolsas y carteras para mujer",
						label: "Bolsas cruzadas",
						link: "../bolsas-cruzadas",
					},
					{ label: "Bolsas de mano", link: "../bolsas-de-mano" },
					{ label: "Bolsas de hombro", link: "../bolsas-de-hombro" },
					{ label: "Mochilas", link: "../mochilas-para-mujer" },
					{
						label: "Bolsas clutch de fiesta",
						link: "../bolsas-clutch-de-fiesta",
					},
					{ label: "Carteras y monederos", link: "../monederos-y-carteras" },
				],
			},
			{
				label: "Sugerencias del mes",
				link: "../sugerencias-del-mes",
				//no nivel 3
			},
		],
	},

	//SECCION ACCESORIOS
	{
		title: "Accesorios",
		label: "Maletas, Bolsas y Mochilas",
		link: "../maletas-bolsas-y-mochilas",
		icon: "	https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Bags.svg",
		subMenu: [
			{
				title: "Maletas, Bolsas y Mochilas",
				label: "Maletas",
				link: "../maletas-de-viaje",
				subMenu: [
					{
						title: "Maletas",
						label: "Maletas con ruedas",
						link: "../equipaje-hogar",
					},
					{ label: "Maletas de mano", link: "../maletas-de-mano" },
					{ label: "Juego de maletas", link: "../juegos-de-maletas" },
					{ label: "Mochilas de viaje", link: "../mochilas-de-viaje" },
					{ label: "Mochilas pañaleras", link: "../mochilas-panaleras" },
				],
			},
			{
				label: "Mochilas, portafolios y fundas para laptop",
				link: "../mochilas-portafolios-fundas-laptop",
				subMenu: [
					{
						title: "Mochilas, portafolios y fundas para laptop",
						label: "Mochilas para laptop",
						link: "../mochilas-para-laptop",
					},
					{
						label: "Portafolios y fundas para laptop",
						link: "../fundas-para-laptops",
					},
				],
			},
			{
				label: "Mochilas Infantiles",
				link: "../mochilas-infantiles",
				subMenu: [
					{
						title: "Mochilas Infantiles",
						label: "Mochilas para niña",
						link: "../mochilas-ninas",
					},
					{ label: "Mochilas para niño", link: "../mochilas-ninos" },
					{
						label: "Material para dibujar, colorear y pintar",
						link: "../material-para-dibujar-y-pintar",
					},
				],
			},
			{
				label: "Bolsas y carteras para mujer",
				link: "../bolsas-y-carteras-para-mujer",
				subMenu: [
					{
						title: "Bolsas y carteras para mujer",
						label: "Bolsas cruzadas",
						link: "../bolsas-cruzadas",
					},
					{ label: "Bolsas de mano", link: "../bolsas-de-mano" },
					{ label: "Bolsas de hombro", link: "../bolsas-de-hombro" },
					{ label: "Mochilas", link: "../mochilas-para-mujer" },
					{
						label: "Bolsas clutch de fiesta",
						link: "../bolsas-clutch-de-fiesta",
					},
					{ label: "Carteras y monederos", link: "../monederos-y-carteras" },
				],
			},
			{
				label: "Mochilas, carteras y cangureras para hombre",
				link: "../mochilas-carteras-y-cangureras-hombre",
				subMenu: [
					{
						title: "Mochilas, carteras y cangureras para hombre",
						label: "Carteras",
						link: "../carteras-accesorios",
					},
					{ label: "Sets de carteras", link: "../set-de-carteras-hombre" },
					{ label: "Bolsas mensajeras", link: "../bolsas-mensajeras-hombre" },
					{ label: "Mochilas", link: "../mochilas-hombre" },
				],
			},
			{
				label: "Accesorios de viaje",
				link: "../accesorios-de-viaje",
				subMenu: [
					{
						title: "Accesorios de viaje",
						label: "Almohadas de viaje",
						link: "../almohadas-de-viaje",
					},
					{ label: "Candados para maletas", link: "../candados-para-maletas" },
					{
						label: "Organizadores para maletas",
						link: "../organizadores-para-maletas",
					},
					{ label: "Básculas de equipaje", link: "../basculas-de-equipaje" },
					{ label: "Fundas para maletas", link: "../fundas-para-maletas" },
					{
						label: "Identificadores de maleta",
						link: "../identificadores-de-maleta",
					},
					{
						label: "Bolsas compresoras",
						link: "../bolsas-compresoras-para-viaje",
					},
					{ label: "Neceseres", link: "../neceseres-para-maquillaje" },
				],
			},
		],
	},

	{
		label: "Relojes, Lentes y Joyería ",
		link: "../relojes-lentes-joyeria",
		icon: "	https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Watches.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				linkOfertas:
					"https://www.coppel.com/SearchDisplay?categoryId=&storeId=10151&catalogId=10051&langId=-5&sType=SimpleSearch&resultCatEntryType=2&showResultsPage=true&searchSource=Q&pageView=&pageGroup=Search&beginIndex=0&pageSize=12&searchTerm=RB2128-CRSLMO-JRO-OFERTAS",
				title: "Relojes Lentes y Joyería",
				label: "Relojes",
				link: "../relojes",
				subMenu: [
					{
						title: "Relojes Lentes y Joyería",
						label: "Relojes para hombre",
						link: "../relojes-para-hombres",
					},
					{ label: "Relojes para dama", link: "../relojes-para-mujer" },
					{ label: "Relojes unisex", link: "/relojes-unisex-v-03-6090" },
					{ label: "Sets de relojes", link: "../set-de-relojes" },
					{ label: "Infantiles", link: "../relojes-para-ninos" },
					{ label: "Accesorios", link: "../accesorios-para-relojes" },
				],
			},
			{
				label: "Smartwatches y pulseras inteligentes",
				link: "../smartwatches-y-pulseras-inteligentes",
				subMenu: [
					{
						title: "Smartwatches y pulseras inteligentes",
						label: "Smartwatches",
						link: "../smartwatches",
					},
					{ label: "Pulseras inteligentes", link: "../pulseras-inteligentes" },
					{
						label: "Accesorios para smartwatches",
						link: "../accesorios-para-smartwatches",
					},
				],
			},
			{
				label: "Lentes",
				link: "../lentes",
				subMenu: [
					{ title: "Lentes", label: "Lentes de sol", link: "../lentes-de-sol" },
					{
						label: "Lentes para vista cansada",
						link: "../lentes-pregraduados",
					},
					{ label: "Lentes de contacto", link: "../lentes-de-contacto" },
					{ label: "Accesorios", link: "../accesorios-para-lentes-opticos" },
					{ label: "Armazones Oftálmicos", link: "../armazones-oftalmicos" },
				],
			},
			{
				label: "Joyería",
				link: "../joyeria",
				subMenu: [
					{ title: "Joyería", label: "Joyeria fina", link: "../joyeria-fina" },
					{ label: "Boda y compromiso", link: "../joyeria-de-boda" },
					{
						label: "Joyeria de moda para Caballero",
						link: "../joyeria-para-hombre",
					},
					{ label: "Joyeria de moda para Dama", link: "../joyeria-para-mujer" },
					{ label: "Accesorios", link: "../accesorios-de-joyeria" },
				],
			},
		],
	},

	//SECCION SALUD
	{
		title: "Salud",
		label: "Belleza y Cuidado Personal",
		link: "../perfumes-y-cuidado-personal",
		icon: "	https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Perfums.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				linkOfertas: "../perfumes-y-cuidado-personal",
				title: "Belleza y Cuidado Personal",
				label: "Perfumes y fragancias",
				link: "../perfumes",
				subMenu: [
					{
						title: "Perfumes y fragancias",
						label: "Mujeres",
						link: "../perfumes-para-mujeres",
					},
					{ label: "Hombres", link: "../perfumes-para-hombres" },
					{ label: "Infantiles", link: "../perfumes-para-ninos" },
				],
			},
			{
				label: "Peinado, estilizado y cuidado del cabello",
				link: "../peinado-y-cuidado-del-cabello",
				subMenu: [
					{
						title: "Peinado, estilizado y cuidado del cabello",
						label: "Alaciadoras",
						link: "../alaciadoras",
					},
					{ label: "Cepillos eléctricos", link: "../cepillos-electricos" },
					{ label: "Secadoras", link: "../secadoras-de-cabello" },
					{ label: "Tenazas/rizadoras", link: "../rizador-de-cabello" },
					{
						label: "Fijadoras y cremas para peinar",
						link: "../fijadores-y-espumas-para-cabello",
					},
					{ label: "Cepillos", link: "../cepillo-para-cabello" },
					{
						label: "Accesorios para cabello",
						link: "../accesorios-para-cabello",
					},
					{
						label: "Tratamientos para el cabello",
						link: "../tratamientos-para-cabello",
					},
					{
						label: "Aceites y protectores para cabello",
						link: "../aceite-y-protectores-cabello",
					},
					{
						label: "Tintes y coloración",
						link: "../tintes-y-colocacion-cabello",
					},
					{ label: "Hombre", link: "../cabello-hombre" },
				],
			},
			{
				label: "Depilación",
				link: "../depilacion",
				subMenu: [
					{
						title: "Depilación",
						label: "Máquinas depiladoras",
						link: "../depiladoras",
					},
					{ label: "Crema depiladoras", link: "../cremas-para-depilar" },
					{ label: "Ceras", link: "../cera-para-depilacion" },
					{ label: "Rastrillos", link: "../rastrillo" },
					{
						label: "Perfiladores y pinzas para ceja",
						link: "../perfiladores-y-pinzas-para-ceja",
					},
				],
			},
			{
				label: "Barbería",
				link: "../productos-de-barberia",
				subMenu: [
					{ title: "Barbería", label: "Rasuradoras", link: "../rasuradoras" },
					{ label: "Recortadoras", link: "../recortadoras" },
					{ label: "Kits de peluquería", link: "../kits-de-peluqueria" },
					{
						label: "Cepillo electrónico para barba",
						link: "../cepillo-electrico-para-barba",
					},
					{
						label: "Accesorios y cuidado de barba",
						link: "../cuidado-de-barba",
					},
					{ label: "Navajas de afeitar", link: "../navajas-de-afeitar" },
					{ label: "Espumas y gel de afeitar", link: "../espuma-de-afeitar" },
					{
						label: "Productos post afeitado",
						link: "../productos-post-afeitado",
					},
					{
						label: "Tratamientos para crecimiento de barba",
						link: "../tratamiento-crecimiento-de-barba",
					},
					{
						label: "Repuestos para rasurado",
						link: "../repuestos-para-rasurado",
					},
				],
			},
			{
				label: "Cuidado de la piel",
				link: "../cuidado-de-la-piel",
				subMenu: [
					{
						title: "Cuidado de la piel",
						label: "Cuidado del rostro",
						link: "../cuidado-de-la-cara",
					},
					{ label: "Cuidado de manos y pies", link: "../cuidado-manos-y-pies" },
					{ label: "Cuidado corporal", link: "../cuidado-corporal" },
					{
						label: "Repelentes de mosquitos",
						link: "../repelentes-de-mosquitos",
					},
					{
						label: "Minirefrigeradores para cosméticos y cremas",
						link: "../minirefrigeradores-para-cosmeticos",
					},
					{ label: "Protección solar", link: "../proteccion-solar" },
				],
			},
			{
				label: "Baño, cuerpo e higiene",
				link: "../higiene-personal",
				subMenu: [
					{
						title: "Baño, cuerpo e higiene",
						label: "Accesorios para baño y cuerpo",
						link: "../accesorios-para-bano-y-cuerpo",
					},
					{
						label: "Desodorantes y Antitranspirantes",
						link: "../desodorantes",
					},
					{ label: "Higiene bucal", link: "../higiene-bucal" },
					{ label: "Higiene diaria", link: "../higiene-diaria" },
					{ label: "Higiene femenina", link: "../higiene-intima" },
					{
						label: "Shampoos y Acondicionadores",
						link: "../shampoos-y-acondicionadores",
					},
					{ label: "Jabones", link: "../jabones" },
				],
			},
			{
				label: "Maquillaje",
				link: "../cosmeticos-y-maquillaje",
				subMenu: [
					{ title: "Maquillaje", label: "Rostro", link: "../bases-y-polvos" },
					{ label: "Ojos", link: "../mascaras-y-delineadores" },
					{ label: "Desmaquillantes", link: "../desmaquillantes" },
					{ label: "Labios", link: "../labiales" },
					{ label: "Microblanding", link: "../microblanding" },
					{
						label: "Accesorios de maquillaje",
						link: "../maquillaje-accesorios",
					},
				],
			},
			{
				label: "Manicure y pedicure",
				link: "../manicure-y-pedicure",
				subMenu: [
					{
						title: "Manicure y pedicure",
						label: "Esmaltes",
						link: "../esmaltes",
					},
					{ label: "Uñas postizas y esculturales", link: "../unas-postizas" },
					{ label: "Quitaesmaltes", link: "../quitaesmalte" },
					{ label: "Decoración de uñas", link: "../decoracion-de-unas" },
					{
						label: "Instrumentos y accesorios",
						link: "../instrumentos-y-accesorios-para-unas",
					},
					{
						label: "Tratamientos para uñas, manos y pies",
						link: "../tratamiento-unas-manos-pies",
					},
				],
			},
			{
				label: "Spa en casa",
				link: "../spa-en-casa",
				subMenu: [
					{
						title: "Spa en casa",
						label: "Espejos",
						link: "../espejos-para-maquillaje",
					},
					{
						label: "Tinas e hidromasajes para pies",
						link: "../tinas-e-hidromasajes-para-pies",
					},
					{ label: "Masajeadores", link: "../masajeadores" },
					{ label: "Mobiliario para spa", link: "../mobiliario-para-spa" },
					{
						label: "Difusores, velas y candelabros",
						link: "../difusores-vela-y-candelabros",
					},
					{ label: "Sales de baño", link: "../sales-de-bano" },
					{ label: "Acupuntura", link: "../acupuntura" },
				],
			},
			{
				label: "Básculas corporales",
				link: "../basculas",
				subMenu: [
					{
						title: "Básculas corporales",
						label: "Básculas digitales",
						link: "../basculas-digitales",
					},
				],
			},
			{
				label: "Óptica y salud visual",
				link: "../optica-y-salud-visual",
				subMenu: [
					{
						title: "Óptica y salud visual",
						label: "Lentes para vista cansada",
						link: "../lentes-pregraduados",
					},
					{ label: "Lentes de contacto", link: "../lentes-de-contacto" },
					{ label: "Accesorios", link: "../accesorios-para-lentes-opticos" },
					{ label: "Armazones Oftálmicos", link: "../armazones-oftalmicos" },
					{ label: "Accesorios", link: "#" },
				],
			},
			{
				label: "Canasta básica",
				link: "../canasta-basica",
				subMenu: [
					{
						title: "Canasta básica",
						label: "Canasta básica",
						link: "../canasta-basica-salud-y-belleza",
					},
					{ label: "Farmacia", link: "../farmacia" },
					{ label: "Impulso", link: "../impulso" },
				],
			},
			{
				label: "Outlet",
				link: "../outlet-productos-de-belleza",
				//no nivel 3
			},
		],
	},

	{
		label: "Salud y Bienestar",
		link: "../salud-y-bienestar",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Salud_y_bienestar.svg",
		subMenu: [
			{
				title: "Salud y Bienestar",
				label: "Aparatos Médicos",
				link: "../aparatos-medicos",
				subMenu: [
					{
						title: "Aparatos Médicos",
						label: "Estetoscopios y piezas",
						link: "../estetoscopios-y-piezas",
					},
					{
						label: "Monitores fetales de ritmo cardiaco",
						link: "../monitor-fetal-de-ritmo-cardiaco",
					},
					{ label: "Electrocardiogramas", link: "../electrocardiogramas" },
				],
			},
			{
				label: "Suplementos alimenticios",
				link: "../suplementos-alimenticios",
				//no nivel 3
			},
			{
				label: "Movilidad",
				link: "../salud-movilidad",
				subMenu: [
					{
						title: "Movilidad",
						label: "Silla de Ruedas",
						link: "../sillas-de-ruedas-y-scooters-electricos",
					},
					{ label: "Andaderas", link: "../andaderas-y-accesorios" },
					{ label: "Muletas", link: "../muletas-y-bastones" },
					{ label: "Bastones", link: "../bastones" },
					{ label: "Scooters/Carritos", link: "../scooters-y-carritos" },
					{
						label: "Accesorios para movilidad",
						link: "../accesorios-para-movilidad",
					},
				],
			},
			{
				label: "Monitores de salud",
				link: "../monitores-de-salud",
				subMenu: [
					{
						title: "Monitores de salud",
						label: "Medidores de presion arterial",
						link: "../medidores-de-presion-arterial",
					},
					{ label: "Medidores de glucosa", link: "../medidores-de-glucosa" },
					{ label: "Termómetros", link: "../termometros" },
					{ label: "Oxímetros", link: "../oximetros" },
				],
			},
			{
				label: "Instrumentos para el cuidado visual",
				link: "/instrumentos-para-cuidado-visual",
				subMenu: [
					{
						title: "Instrumentos para el cuidado visual",
						label: "Oftalmoscopios",
						link: "../oftalmoscopios",
					},
				],
			},
			{
				label: "Ortopedia",
				link: "../ortopedia",
				subMenu: [
					{
						title: "Ortopedia",
						label: "Inmovilizadores de hombro",
						link: "../inmobilizadores de hombro",
					},
					{ label: "Collarínes", link: "../collarines" },
					{ label: "Soportes para brazo", link: "../soportes-para-brazos" },
					{ label: "Bota inmovilizadora", link: "../bota-inmobilizadora" },
					{ label: "Férulas", link: "../ferulas" },
					{ label: "Espalderas", link: "../espalderas" },
					{ label: "Tobilleras", link: "../tobilleras" },
					{ label: "Muñequeras", link: "../munequeras" },
					{ label: "Rodilleras", link: "../rodilleras" },
					{ label: "Codera", link: "../codera" },
					{
						label: "Musleras y Pantorrilleras",
						link: "../muslera-y-pantorrillera",
					},
					{ label: "Cojines ortopédicos", link: "../cojines-ortopedicos" },
					{ label: "Fajas post operación", link: "../fajas-post-operacion" },
					{ label: "Podologia", link: "../podologia" },
					{ label: "Vendas elásticas", link: "../vendas-elasticas" },
					{
						label: "Protesis Mamaría Externas",
						link: "../protesis-mamaria-externas",
					},
				],
			},
			{
				label: "Respiratorio",
				link: "../respiratorio",
				subMenu: [
					{
						title: "Respiratorio",
						label: "Nebulizadores",
						link: "../nebulizadores",
					},
				],
			},
			{
				label: "Cuidado del paciente",
				link: "../cuidado-del-paciente",
				subMenu: [
					{
						title: "Cuidado del paciente",
						label: "Colchones de presión",
						link: "../colchones-de-presion",
					},
				],
			},
			{
				label: "Soportes para baño",
				link: "../soportes-para-bano",
				subMenu: [
					{
						title: "Soportes para baño",
						label: "Barras de apoyo",
						link: "../barras-de-apoyo",
					},
					{ label: "Sillas de baño", link: "../sillas-para-bano" },
					{ label: "Elevadores de inodoro", link: "../elevadores-de-inodoro" },
				],
			},
			{
				label: "Fisioterapia y compresión",
				link: "../fisioterapia-y-compresion",
				subMenu: [
					{
						title: "Fisioterapia y compresión",
						label: "Cinta kinesiológica muscular",
						link: "../cinta-kinesiologica-muscular",
					},
					{
						label: "Compresas de calor/frío",
						link: "../compresas-de-calor-frio",
					},
					{
						label: "Rodilleras de compresion",
						link: "../rodilleras-de-compresion",
					},
					{ label: "Guantes de compresion", link: "../guantes-de-compresion" },
				],
			},
			{
				label: "Equipamiento médico",
				link: "../equipamiento-medico",
				subMenu: [
					{
						title: "Equipamiento médico",
						label: "Instrumental médico",
						link: "#",
					},
					{ label: "Mobiliario médico", link: "../instrumental-medico" },
				],
			},
			{
				label: "Cuidado Auditivo",
				link: "../cuidado-auditivo",
				subMenu: [
					{
						title: "Cuidado Auditivo",
						label: "Amplificadores auditivos",
						link: "/hogar/muebles/ropero",
					},
					{ label: "Aparatos para sordera", link: "../aparatos-para-sordera" },
					{ label: "Tapones para oídos", link: "../tapones-para-oidos-1" },
					{
						label: "Asipirador de limpieza auditiva",
						link: "../aspirador-de-limpieza-auditiva",
					},
					{ label: "Kits de limpieza", link: "../kit-de-limpieza-auditiva" },
					{
						label: "Orejeras para cancelación",
						link: "../orejas-cancelacion-de-ruido",
					},
				],
			},
			{
				label: "Farmacia",
				link: "../productos-de-farmacia",
				subMenu: [
					{ title: "Farmacia", label: "Cubrebocas", link: "../cubrebocas" },
					{ label: "Pastillero", link: "../pastillero" },
					{
						label: "Botiquín de Primeros Auxilios",
						link: "../botiquin-de-primeros-auxilios",
					},
				],
			},
			{
				label: "Instrumentos odontológicos",
				link: "../instrumentos-odontologicos",
				subMenu: [
					{
						title: "Instrumentos odontológicos",
						label: "Pinzas Dentales",
						link: "../pinzas-dentales",
					},
					{
						label: "Limpiadores Ultrasónicos",
						link: "../limpiadores-ultrasonicos",
					},
					{
						label: "Sillones Odontológicos",
						link: "../sillones-odontologicos",
					},
				],
			},
		],
	},

	//Movilidad
	{
		title: "Movilidad",
		label: "Motos y movilidad",
		link: "../motos-y-movilidad",
		icon: "	https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Moto.svg",
		subMenu: [
			{
				title: "Motos y movilidad",
				label: "Motos",
				link: "../motos",
				subMenu: [
					{
						title: "Motos",
						label: "Motos de trabajo",
						link: "../motos-de-trabajo",
					},
					{ label: "Motos Deportivas", link: "../motos-deportivas" },
					{ label: "Cuatrimotos", link: "../motocicletas-cuatrimotos" },
					{ label: "Motos doble Propósito", link: "../motos-doble-proposito" },
					{ label: "Motos Cafe Racer", link: "../motos-cafe-racer" },
					{ label: "Motos Urbanas", link: "../motos-urbanas" },
					{ label: "Motos Chopper", link: "../motos-chopper" },
					{ label: "Motonetas / Scooters", link: "../motonetas-y-scooters" },
					{ label: "Motos Semiautomáticas", link: "../motos-semiautomaticas" },
					{ label: "Motos Eléctricas", link: "../motocicletas-electricas" },
					{ label: "Motocarros", link: "../motocarros" },
					{ label: "Motos infantiles", link: "../motos-infantiles" },
				],
			},
			{
				label: "Accesorios para Motociclistas y Motos",
				link: "../accesorios-motocicletas",
				subMenu: [
					{
						title: "Accesorios para Motociclistas y Motos",
						label: "Cascos para motocicletas",
						link: "../cascos-motocicletas",
					},
					{
						label: "Protección y ropa para motociclistas",
						link: "../proteccion-y-ropa-para-motociclistas",
					},
					{ label: "Mochilas para moto", link: "../mochilas-y-maletas-moto" },
					{
						label: "Cajas, maleteros y anclajes para moto",
						link: "../cajas-motocicletas",
					},
					{
						label: "Accesorios para Cascos de moto",
						link: "../accesorios-para-cascos-motos",
					},
					{ label: "Accesorios para motos", link: "../accesorios-para-motos" },
					{ label: "Cubiertas para motos", link: "../cubiertas-para-moto" },
					{ label: "Luces para motos", link: "../luces-para-moto" },
				],
			},
			{
				label: "Refacciones para Motos",
				link: "../refacciones-para-moto",
				subMenu: [
					{
						title: "Refacciones Para Motos",
						label: "Llantas de Motos",
						link: "../llantas-motociclistas",
					},
					{ label: "Baterías para moto", link: "../baterias-para-motos" },
					{ label: "Frenos para moto", link: "../frenos-para-moto" },
					{ label: "Espejos para moto", link: "../espejos-para-moto" },
					{ label: "Faros para moto", link: "../faros-para-moto" },
					{ label: "Chasis para moto", link: "../chasis-para-moto" },
					{
						label: "Refacciones para motor de arranque",
						link: "../refacciones-para-motor-de-arranque",
					},
					{
						label: "Refacciones para escape y silenciadores",
						link: "../refacciones-para-escape-y-silenciadores",
					},
					{ label: "Filtros para moto", link: "../filtros-para-moto" },
					{
						label: "Refacciones para motores de moto",
						link: "../refacciones-para-motores-de-moto",
					},
					{
						label: "Transmisiones de moto",
						link: "../transmisiones-para-moto",
					},
					{
						label: "Aditivos y lubricantes para moto",
						link: "../aditivos-y-lubricantes-para-moto",
					},
					{
						label: "Manijas y manillares para moto",
						link: "../manijas-y-manillares-para-moto",
					},
					{ label: "Rines para moto", link: "../rines-para-moto" },
					{ label: "Mandos para moto", link: "../mandos-para-moto" },
					{
						label: "Refacciones para tacómetros y velocimetros",
						link: "../refacciones-para-tacometro-y-velocimetro",
					},
				],
			},
			{
				label: "Movilidad Eléctrica",
				link: "../movilidad-electrica",
				subMenu: [
					{
						title: "Movilidad Eléctrica",
						label: "Scooters Eléctricos",
						link: "../scooters-electricos",
					},
					{ label: "Bicicletas Eléctricas", link: "../bicicletas-electricas" },
					{ label: "Movilidad Infantil", link: "../movilidad-infantil" },
				],
			},
		],
	},

	{
		label: "Automotriz y Refacciones",
		link: "../automotriz-y-refacciones",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Cars.svg",
		subMenu: [
			{
				title: "Automotriz y Refacciones",
				label: "Llantas",
				link: "../llantas-autos",
				icon: "/path-to-icon/refrigeradores.svg",
				subMenu: [
					{ title: "Llantas", label: "Automóvil", link: "../automovil" },
					{ label: "SUV o camioneta", link: "../suv-o-camioneta" },
					{ label: "Llantas de Motos", link: "../llantas-motocicletas" },
				],
			},
			{
				label: "Baterias",
				link: "../baterias-para-auto",
				subMenu: [
					{
						title: "Baterias",
						label: "Baterias para Automóvil",
						link: "../baterias-auto",
					},
					{
						label: "Baterias para SUV o camioneta",
						link: "../baterias-suv-camioneta",
					},
					{ label: "Baterias para moto", link: "../baterias-para-motos" },
				],
			},
			{
				label: "Rines y tapones",
				link: "../rines-y-tapones",
				subMenu: [
					{
						title: "Rines y tapones",
						label: "Rines",
						link: "../rines-para-autos",
					},
					{
						label: "Tapones para autos y camionetas",
						link: "../tapones-para-autos-y-camionetas",
					},
				],
			},
			{
				label: "Lubricantes y fluidos",
				link: "../lubricantes-y-fluidos",
				subMenu: [
					{
						title: "Lubricantes y fluidos",
						label: "Grasas para vehículos",
						link: "../grasas-para-auto",
					},
					{
						label: "Liquido de Frenos para vehiculo",
						link: "../liquido-de-frenos-para-auto",
					},
					{
						label: "Aceite y líquido para Dirección",
						link: "../aceite-y-liquido-para-direccion",
					},
					{
						label: "Liquido para Parabrisas",
						link: "../liquido-para-parabrisas",
					},
					{
						label: "Anticongelante para vehículo",
						link: "../anticongelante-para-auto",
					},
					{
						label: "Aceite para Motor de vehículo",
						link: "../aceite-para-motor-de-auto",
					},
					{
						label: "Aditivos para Rendimiento de vehículos",
						link: "../aditivos-rendimiento-autos",
					},
					{
						label: "Desengrasantes para Motores de vehículos",
						link: "../desengrasantes-para-motor-auto",
					},
					{
						label: "Aceites y fluido para Transmisión de vehiculos",
						link: "../aceites-y-fluido-para-transmision-auto",
					},
					{ label: "Abrasivos", link: "../abrasivos-para-auto" },
				],
			},
			{
				label: "Complementos Náuticos",
				link: "../complementos-nauticos",
				subMenu: [
					{
						title: "Complementos Náuticos",
						label: "Luces",
						link: "../luces-y-repuestos",
					},
					{
						label: "Mangueras para Combustible",
						link: "../mangueras-para-combustible",
					},
					{ label: "Motores y Repuestos", link: "../motores-y-repustos" },
					{ label: "Seguridad", link: "../seguridad" },
					{ label: "Carroceria y Cabina", link: "../carroceria-y-cabina" },
					{
						label: "Controles y Conducción",
						link: "../controles-y-conduccion",
					},
					{ label: "Decoración", link: "#" },
				],
			},
			{
				label: "Seguridad",
				link: "../seguridad-para-auto",
				subMenu: [
					{
						title: "Seguridad",
						label: "Alarmas y accesorios",
						link: "../alarmas-y-accesorios-auto",
					},
					{
						label: "Sirenas de alarmas",
						link: "../sirenas-de-alarmas-para-auto",
					},
					{ label: "Bastones de volantes", link: "../bastones-de-volantes" },
					{ label: "Triangulo reflejantes", link: "../triangulo-reflejantes" },
					{ label: "Kits de seguridad", link: "../kits-de-seguridad-autos" },
					{ label: "Extintores", link: "../extintores-para-auto" },
					{ label: "Controles", link: "../controles-para-autos" },
					{ label: "Candados", link: "../candados-para-autos" },
					{
						label: "Película antiasalto y polarizado de cristales",
						link: "../pelicula-antiasalto-y-poralizado-de-cristales",
					},
					{ label: "GPS para automóvil", link: "../gps-para-automovil" },
					{
						label: "Topes de estacionamientos",
						link: "../topes-de-estacionamientos",
					},
					{ label: "Chalecos reflejantes", link: "../chalecos-reflejantes" },
				],
			},
			{
				label: "Accesorios para autos",
				link: "../accesorios-autos",
				subMenu: [
					{
						title: "Accesorios para autos",
						label: "Accesorios interiores para auto",
						link: "../accesorios-para-el-interior-auto",
					},
					{
						label: "Electrónica para autos",
						link: "../electronica-para-autos-1",
					},
					{
						label: "Accesorios exteriores para auto",
						link: "../accesorios-para-el-exterior-auto",
					},
					{
						label: "Portaequipajes para auto",
						link: "../porta-equipajes-para-auto",
					},
					{
						label: "Tirones, arrastre y remolques para auto",
						link: "../tirones-arrastre-y-remolques-autos",
					},
					{
						label: "Electrónica para autos",
						link: "../electronica-para-autos",
					},
					{
						label: "Fundas para autos y camionetas",
						link: "../fundas-autos-y-camionetas",
					},
				],
			},
			{
				label: "Cuidado y mantenimiento",
				link: "../cuidado-y-mantenimiento-motos-y-automotriz",
				subMenu: [
					{
						title: "Cuidado y mantenimiento",
						label: "Ceras y abrillantadores",
						link: "../ceras-y-abrillantadores-motos-y-automotriz",
					},
					{
						label: "Líquidos para lavado",
						link: "../liquidos-para-lavado-auto",
					},
					{ label: "Cepillos para Auto", link: "../cepillos-para-auto" },
					{
						label: "Limpiadores de tapicería",
						link: "../limpiadores-de-tapiceria-motos-y-automotriz",
					},
					{
						label: "Limpiadores para cristales",
						link: "../limpiadores-de-cristales-auto",
					},
					{
						label: "Aromatizantes para Auto",
						link: "../aromatizante-para-auto",
					},
					{ label: "Kit de afinación", link: "../kit-de-afinacion-auto" },
				],
			},
			{
				label: "Herramientas Automotrices",
				link: "../herramientas-automotrices",
				subMenu: [
					{
						title: "Herramientas Automotrices",
						label: "Tinas Ultrasonido Automotriz",
						link: "../tinas-ultrasonido-automotriz",
					},
					{ label: "Rampas Automotrices", link: "../rampas-automotrices" },
					{
						label: "Adaptadores y conectores de Scanners",
						link: "../adaptadores-y-conectores-de-scanners",
					},
					{ label: "Cabinas de Pintura", link: "../cabinas-de-pintura" },
					{ label: "Calibrador de llantas", link: "../calibrador-de-llantas" },
					{
						label: "Separadores de Baleros automotriz",
						link: "../separadores-de-baleros-automotriz",
					},
					{
						label: "Desmontadoras de Llantas",
						link: "../desmontadoras-de-llantas",
					},
					{ label: "Silicones automotriz", link: "../silicones-automotriz" },
					{ label: "Dinamómetros", link: "../dinamometros" },
					{
						label: "Espátulas para Polarizado",
						link: "../espatulas-para-polariado",
					},
					{
						label: "Herramientas para Carrocería y Parachoques",
						link: "../herramientas-para-carroceria-y-parachoques",
					},
					{
						label: "Torquímetros Automotriz",
						link: "../torquimetros-automotriz",
					},
					{ label: "Gatos Hidráulicos", link: "../gatos-hidraulicos" },
					{
						label: "Dados y Accesorios",
						link: "../dados-y-accesorios-automotriz",
					},
					{
						label: "Cargadores y probadores de Baterías",
						link: "../cargadores-y-probadores-de-baterias-automotriz",
					},
					{ label: "Cables Pasa Corriente", link: "../cables-para-corriente" },
					{
						label: "Llaves de herramienta para auto",
						link: "../llaves-automotriz",
					},
					{ label: "Infladores", link: "../infladores-automotriz" },
					{
						label: "Medidores de Presión",
						link: "../medidores-de-presion-automotriz",
					},
					{ label: "Scanners automotriz", link: "../scanners-automotrices" },
					{ label: "Cintas Adhesivas", link: "../cintas-adhesivas-automotriz" },
					{ label: "Otros", link: "../otras-herramientas-automotrices" },
					{ label: "Alicates y Pinzas", link: "../alicates-y-pinzas" },
					{ label: "Destornilladores", link: "../destornilladores-automotriz" },
					{
						label: "Herramientas de Inspección",
						link: "../herramientas-de-inspeccion",
					},
					{ label: "Camas para Mecánicos", link: "../camas-para-mecanicos" },
					{ label: "Torres para Auto", link: "../torres-para-auto" },
					{ label: "Winches para Auto", link: "../winches-para-auto" },
				],
			},
			{
				label: "Partes y Refacciones",
				link: "../partes-y-refacciones-autos",
				subMenu: [
					{
						title: "Partes y Refacciones",
						label: "Refacciones de suspensión y Dirección",
						link: "../refacciones-de-suspension-y-direccion",
					},
					{ label: "Refacciones de motor", link: "../refacciones-de-motor" },
					{
						label: "Iluminación automotriz",
						link: "../iluminacion-automotriz",
					},
					{ label: "Carrocería", link: "../carroceria" },
					{
						label: "Cristales y espejos para autos",
						link: "../cristales-y-espejos-autos",
					},
					{ label: "Manijas para autos", link: "../manijas-para-autos" },
					{
						label: "Refacciones de escapes",
						link: "../refacciones-de-escapes",
					},
					{ label: "Inyección automotriz", link: "../inyeccion-automotriz" },
					{
						label: "Refacciones de Transmisión",
						link: "../refacciones-de-transmision",
					},
					{
						label: "Refacciones de Exterior para auto",
						link: "../refacciones-de-exterior-para-auto",
					},
					{ label: "Refacciones de frenos", link: "../refacciones-de-frenos" },
					{
						label: "Aires Acondicionados automotriz",
						link: "../aires-acondicionados-automotrices",
					},
					{
						label: "Refacciones de interior para auto",
						link: "../refacciones-de-interior-auto",
					},
					{ label: "Filtros automotrices", link: "../filtros-automotrices" },
					{
						label: "Refacciones de encendido para auto",
						link: "../refacciones-de-encendido-para-auto",
					},
					{ label: "Cerrajería para autos", link: "../cerrajerias-para-autos" },
					{
						label: "Componentes de Seguridad automotriz",
						link: "../componentes-de-seguridad-automotriz",
					},
					{ label: "Bases para Baterías", link: "../bases-para-baterias" },
					{
						label: "Instalaciones Eléctricas automotrices",
						link: "../instalaciones-electricas-automotrices",
					},
					{
						label: "Vehiculos de Gas Natural",
						link: "../vehiculos-de-gas-natural",
					},
				],
			},
		],
	},

	//SECCION ENTRETENIMIENTO
	{
		title: "Entretenimiento",
		label: "Deportes",
		link: "../deportes",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Sports.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				title: "Deportes",
				label: "Ropa deportiva",
				link: "../ropa-deportiva",
				subMenu: [
					{
						title: "Ropa deportiva",
						label: "Ropa deportiva para hombre",
						link: "../ropa-deportiva-de-hombre",
					},
					{
						label: "Repa deportiva para mujer",
						link: "../ropa-deportiva-de-mujer",
					},
				],
			},
			{
				label: "Tenis deportivos",
				link: "../tenis-deportivos",
				subMenu: [
					{
						title: "Tenis deportivos",
						label: "Tenis deportivos para mujer",
						link: "../tenis-deportivos-mujeres",
					},
					{
						label: "Tenis deportivos para hombre",
						link: "../tenis-deportivos-hombres",
					},
				],
			},
			{
				label: "Entrenamiento, fitness y crossfit",
				link: "../entrenamiento-fitness-y-crossfit",
				subMenu: [
					{
						title: "Entrenamiento, fitness y crossfit",
						label: "Máquinas de cardio",
						link: "../maquinas-de-cardio",
					},
					{
						label: "Máquinas de musculación",
						link: "../maquinas-de-musculacion",
					},
					{ label: "Trampolines fitness", link: "../trampolines-fitness" },
					{ label: "Crossfit y funcional", link: "../crossfit-funcional" },
					{ label: "Yoga y pilates", link: "../yoga-y-pilates" },
					{
						label: "Mancuernas, discos y barras",
						link: "../mancuernas-discos-y-barras",
					},
					{
						label: "Equipo para velocidad y agilidad",
						link: "../equipo-para-velocidad-y-agilidad",
					},
				],
			},
			{
				label: "Bicicletas y accesorios",
				link: "../bicicletas-y-accesorios",
				subMenu: [
					{
						title: "Bicicletas y accesorios",
						label: "Bicicletas para adulto",
						link: "../bicicletas-para-adulto",
					},
					{
						label: "Bicicletas Infantiles y juveniles",
						link: "../bicicletas-infantiles",
					},
					{
						label: "Accesorios para Ciclistas",
						link: "../accesorios-para-ciclistas",
					},
					{
						label: "Accesorios de bicicleta",
						link: "../accesorios-para-bicicleta",
					},
					{
						label: "Bicicletas de carga y de trabajo",
						link: "../bicicleta-tricarga-y-trabajo",
					},
					{ label: "Bicicletas Eléctricas", link: "../bicicletas-electricas" },
					{ label: "Ropa para ciclistas", link: "../ropa-para-ciclistas1" },
				],
			},
			{
				label: "Disciplinas",
				link: "../disciplinas",
				subMenu: [
					{ title: "Disciplinas", label: "Voleibol", link: "../voleibol" },
					{ label: "Campismo y senderismo", link: "../campismo-aire-libre" },
					{ label: "Box y artes marciales", link: "../box-y-artes-marciales" },
					{ label: "Atletismo", link: "../atletismo" },
					{ label: "Skateboarding", link: "../skateboarding" },
					{ label: "Fútbol", link: "../futbol" },
					{ label: "Ropa de Fútbol", link: "../ropa-de-futbol" },
					{ label: "Golf", link: "../golf" },
					{ label: "Equitación", link: "../equitacion" },
					{ label: "Básquetbol", link: "../basquetbol" },
					{ label: "Futbol Americano", link: "../futbol-americano" },
					{ label: "Béisbol", link: "../beisbol-deportes" },
					{ label: "Tenis", link: "../tennis" },
					{ label: "Badminton", link: "../badminton" },
					{ label: "Raquetbol", link: "../racquetball" },
					{ label: "Escalada", link: "../escalada" },
					{ label: "Pesca", link: "../pesca" },
					{ label: "Correr", link: "../correr" },
				],
			},
			{
				label: "Como lo vio en TV",
				link: "../como-lo-vio-en-tv",
				//No nivel 3
			},
		],
	},

	{
		label: "Juguetes",
		link: "../juguetes",
		icon: "	https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Toys.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				title: "Juguetes",
				label: "Carros montables eléctricos",
				link: "../montables-electricos",
				//No nivel 3
			},
			{
				label: "Bicicletas y triciclos",
				link: "../bicicletas-triciclos-montables",
				subMenu: [
					{
						title: "Bicicletas y triciclos",
						label: "Bicicletas Infantiles y juveniles",
						link: "../bicicletas-infantiles",
					},
					{ label: "Triciclos para niños", link: "../triciclos-juguetes" },
					{
						label: "Accesorios infantiles para bicicletas",
						link: "../accesorios-infantiles-para-bicicletas",
					},
				],
			},
			{
				label: "Lanzadores y juegos de acción",
				link: "../lanzadores-accion",
				subMenu: [
					{
						title: "Lanzadores y juegos de acción",
						label: "Lanzadores",
						link: "../lanzadores",
					},
					{ label: "Juegos de acción", link: "../juegos-de-accion" },
				],
			},
			{
				label: "Juegos didácticos y manualidades",
				link: "../juegos-didacticos-y-manualidades",
				subMenu: [
					{
						title: "Juegos didácticos y manualidades",
						label: "Pizarrones y caballetes",
						link: "../pizarrones-y-caballetes",
					},
					{
						label: "Masas elásticas y plastilinas",
						link: "../masas-elasticas-y-plastilinas",
					},
					{
						label: "Material para dibujar, colorear y pintar",
						link: "../material-para-dibujar-y-pintar",
					},
					{ label: "Set de manualidades", link: "../set-de-manualidades" },
					{ label: "Arena mágica", link: "../arena-magica" },
				],
			},
			{
				label: "Juegos de oficio/imitación",
				link: "../juegos-de-imitacion",
				subMenu: [
					{
						title: "Juegos de oficio/imitacion",
						label: "Juegos de belleza y accesorios",
						link: "../juegos-de-belleza-y-accesorios",
					},
					{
						label: "Supermercados y cajas registradoras",
						link: "../super-mercados-y-cajas-registradoras",
					},
					{ label: "Sets de te y comida", link: "../set-de-te-y-comida" },
					{ label: "Juegos de cocina", link: "../juegos-de-cocina" },
					{ label: "Juegos de doctor", link: "../juegos-de-doctor" },
				],
			},
			{
				label: "Outlet",
				link: "../outlet-juguetes",
				//NO nivel 3
			},
			{
				label: "Juguetes electrónicos e instrumentos",
				link: "../juguetes-electronicos-e-instrumentos",
				subMenu: [
					{
						title: "Juguetes electrónicos e instrumentos",
						label: "Juguetes electrónicos",
						link: "../juguetes-electronicos",
					},
					{
						label: "Instrumentos musicales",
						link: "../instrumentos-musicales-para-ninos",
					},
					{
						label: "Cámaras digitales infantiles",
						link: "../camaras-digitales-infantiles",
					},
				],
			},
			{
				label: "Armables y bloques de construcción",
				link: "../bloques-y-armables",
				subMenu: [
					{
						title: "Armables y bloques de construcción",
						label: "Bloques de construcción",
						link: "../bloques-de-construccion",
					},
					{
						label: "Sets y escenarios de construcción",
						link: "../set-de-escenario-de-construccion",
					},
					{ label: "Figuras armables", link: "../figuras-armables" },
				],
			},
			{
				label: "Figuras de acción y coleccionables",
				link: "../figuras-de-accion-y-coleccionables",
				subMenu: [
					{
						title: "Figuras de acción y coleccionables",
						label: "Figuras de acción",
						link: "../figuras-de-accion",
					},
					{ label: "Coleccionables", link: "../coleccionables" },
				],
			},
			{
				label: "Vehículos, pistas y carritos",
				link: "../vehiculos-pistas-y-carritos",
				subMenu: [
					{
						title: "Vehículos, pistas y carritos",
						label: "Accesorios para vehiculos y pistas",
						link: "../accesorios-vehiculos-y-pistas",
					},
					{ label: "Autopistas y sets", link: "../autopistas" },
					{ label: "Carritos", link: "../carritos" },
				],
			},
			{
				label: "Muñecas y accesorios",
				link: "../munecas-y-accesorios-bebe",
				subMenu: [
					{
						title: "Muñecas y accesorios",
						label: "Muñecas",
						link: "../munecas",
					},
					{ label: "Accesorios para muñecas", link: "../accesorios-munecas" },
				],
			},
			{
				label: "Peluches",
				link: "../peluches",
				//No nivel 3
			},
			{
				label: "Control remoto",
				link: "../juguetes-control-remoto",
				subMenu: [
					{
						title: "Control remoto",
						label: "Vehiculos de control remoto",
						link: "../vehiculos-control-remoto",
					},
					{ label: "Drones infantiles", link: "../drones-infantiles" },
				],
			},
			{
				label: "Juegos de mesa y rompecabezas",
				link: "../juegos-de-mesa-y-rompecabezas",
				subMenu: [
					{
						title: "Juegos de mesa y rompecabezas",
						label: "Rompecabezas",
						link: "../rompecabezas",
					},
					{ label: "Trompos y canicas", link: "../trompos-y-canicas" },
					{ label: "Juegos de mesa", link: "../juegos-mesa-para-ninos" },
				],
			},
			{
				label: "Scooters, patines y patinetas",
				link: "../scooters-patinetas-patines",
				subMenu: [
					{
						title: "Scooters, patines y patinetas",
						label: "Movilidad Infantil",
						link: "../movilidad-infantil",
					},
					{ label: "Scooters infantiles", link: "../scooter-infantil" },
					{ label: "Patines", link: "../patines-para-ninos" },
					{
						label: "Patinetas y avalanchas",
						link: "../patinetas-y-avalanchas",
					},
					{ label: "Scooters Eléctricos", link: "../scooters-electricos" },
				],
			},
			{
				label: "Juegos de exterior",
				link: "../aire-libre",
				subMenu: [
					{
						title: "Juegos de exterior",
						label: "Columpios y juegos de exterior",
						link: "../columpios",
					},
					{ label: "Casas y cocinas", link: "../casas-y-cocinas" },
					{ label: "Albercas y jacuzzis", link: "../albercas-y-jacuzzis" },
					{ label: "Pelotas", link: "../pelotas" },
					{
						label: "Mesas de juego y tiendas de campaña",
						link: "../mesas-de-juego-y-tiendas-de-campana",
					},
					{ label: "Trampolines", link: "../trampolines-jardin" },
				],
			},
			{
				label: "Juguetes para bebé",
				link: "../juguetes-para-bebe",
				subMenu: [
					{
						title: "Juguetes para bebé",
						label: "Gimnasios y tapetes de juego",
						link: "../gimnasios-y-tapetes-de-juego-bebe",
					},
					{ label: "Carritos para bebé", link: "../carritos-camiones" },
					{
						label: "Carros montables para bebé",
						link: "../carrito-montable-bebe",
					},
					{
						label: "Sonajas y juguetes para cuna",
						link: "../sonajas-y-juguetes-para-cuna",
					},
					{
						label: "Juguetes interactivos",
						link: "../juguetes-interactivos-bebe",
					},
					{ label: "Andaderas", link: "../andaderas-bebe" },
					{
						label: "Columpios y mecedoras/bouncer",
						link: "../columpios-y-mecedoras-bebe",
					},
					{ label: "Corrales", link: "../corrales-para-bebe" },
					{
						label: "Bloques y armables para bebé",
						link: "../bloques-y-armables-bebes",
					},
				],
			},
			{
				label: "Bolsas de regalo",
				link: "../bolsas-regalo",
				//No nivel 3
			},
			{
				label: "Bebés",
				link: "../juguetes-para-bebes",
				subMenu: [
					{ title: "Bebés", label: "Recién Nacido", link: "../recien-nacido" },
					{
						label: "Aprendizaje y desarrollo",
						link: "../aprendizaje-desarrollo",
					},
					{ label: "Bloques y armables", link: "../bloques-armables" },
					{ label: "Carritos y camiones", link: "../carritos-y-camiones" },
				],
			},
			{
				label: "Disfraces y accesorios",
				link: "../disfraces-y-accesorios",
				subMenu: [
					{
						title: "Disfraces y accesorios",
						label: "Disfraces para niños",
						link: "../disfraces-para-ninos",
					},
					{
						label: "Máscaras y juegos de rol",
						link: "../mascaras-y-juegos-de-rol",
					},
					{
						label: "Accesorios para disfraces",
						link: "../accesorios-para-disfraces",
					},
				],
			},
		],
	},

	{
		label: "Instrumentos Musicales",
		link: "./instrumentos-musicales",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Music.svg",
		subMenu: [
			{
				btnOfertas: "Ver ofertas",
				title: "Instrumentos Musicales",
				label: "Guitarras y bajos",
				link: "../guitarras-y-bajos",
				subMenu: [
					{
						title: "Guitarras y bajos",
						label: "Guitarras",
						link: "../guitarras",
					},
					{ label: "Bajos", link: "../bajos" },
					{
						label: "Accesorios para guitarras y bajos",
						link: "../accesorios-para-bajos",
					},
				],
			},
			{
				label: "Pianos y teclados",
				link: "../teclado-musical",
				subMenu: [
					{ title: "Pianos y teclados", label: "Pianos", link: "../pianos" },
					{ label: "Teclados y órganos", link: "../teclados-y-organos" },
					{
						label: "Accesorios para pianos y teclados",
						link: "../accesorios-teclados-musicales",
					},
				],
			},
			{
				label: "Baterías y Percusión",
				link: "../baterias-percusiones",
				subMenu: [
					{
						title: "Baterías y Percusión",
						label: "Baterías",
						link: "../baterias-musicales",
					},
					{ label: "Platillos", link: "../platillos-para-bateria" },
					{ label: "Tambores", link: "../tambores-para-bateria" },
					{ label: "Percusion de mano", link: "../percusiones-de-mano" },
					{
						label: "Accesorios para baterías y tambores",
						link: "../accesorios-bateria-musical",
					},
					{
						label: "Accesorios para percusión de mano",
						link: "../accesorios-percusion-de-mano",
					},
				],
			},
			{
				label: "Instrumentos de cuerda",
				link: "../instrumentos-de-cuerda",
				subMenu: [
					{
						title: "Instrumentos de cuerda",
						label: "Ukeleles",
						link: "../ukeleles",
					},
					{ label: "Violines", link: "../violines" },
					{ label: "Violas", link: "../violas" },
					{ label: "Mandolinas", link: "../mandolinas" },
					{
						label: "Accesorios para instrumentos de cuerda",
						link: "../accesorios-instrumentos-de-cuerda",
					},
					{
						label: "Piezas y repuestos",
						link: "../piezas-y-repuestos-instrumentos-de-cuerda",
					},
				],
			},
			{
				label: "Instrumentos de Viento",
				link: "../instrumentos-de-viento",
				subMenu: [
					{
						title: "Instrumentos de Viento",
						label: "Instrumentos de metal",
						link: "../instrumentos-de-metal",
					},
					{
						label: "Instrumentos de madera",
						link: "../instrumentos-de-madera",
					},
					{
						label: "Accesorios para instrumentos de viento",
						link: "../accesorios-para-instrumentos-de-viento",
					},
				],
			},
			{
				label: "Micrófonos",
				link: "../microfonos",
				subMenu: [
					{
						title: "Micrófonos",
						label: "Micrófonos dinámicos de mano",
						link: "../microfonos-dinamicos",
					},
					{
						label: "Micrófonos condensadores para estudio",
						link: "../condensadores-microfonos",
					},
					{
						label: "Micrófonos para karaoke",
						link: "../microfonos-para-karaoke",
					},
					{
						label: "Accesorios para micrófonos",
						link: "../accesorios-para-microfonos",
					},
				],
			},
			{
				label: "Amplificadores para instrumentos",
				link: "../amplificadores-para-instrumentos",
				subMenu: [
					{
						title: "Amplificadores para instrumentos",
						label: "Amplificadores para bajos y guitarras",
						link: "../amplificadores-para-bajos-y-guitarras",
					},
					{
						label: "Amplificadores para teclados",
						link: "../amplificadores-para-teclado",
					},
					{ label: "Monitores de estudio", link: "../monitores-de-estudio" },
				],
			},
			{
				label: "Equipos para DJ",
				link: "../equipo-para-dj",
				subMenu: [
					{
						title: "Equipos para DJ",
						label: "Controladores para DJ",
						link: "../controladores-dj",
					},
					{ label: "Tornamesas", link: "../tornamesas" },
					{ label: "Samplers", link: "../samplers" },
					{ label: "Luces y efectos", link: "../luces-y-efectos" },
					{ label: "Accesorios para DJ", link: "../accesorios-dj" },
				],
			},
			{
				label: "Grabación",
				link: "../estudios-de-grabacion",
				subMenu: [
					{
						title: "Grabación",
						label: "Interfaces de audios",
						link: "../interfaces-de-audio",
					},
					{ label: "Controladores de MIDI", link: "../controladores-midi" },
					{
						label: "Mesas mezcladoras de audio",
						link: "../mesas-mezcladoras-de-audio",
					},
					{ label: "Grabadores multipista", link: "../grabadores-multipista" },
					{
						label: "Procesadores de efectos",
						link: "../accesorios-estudio-de-grabacion",
					},
					{ label: "Software para audio", link: "../software-para-audio" },
					{ label: "Paneles acústicos", link: "../paneles-acusticos" },
					{
						label: "Convertidores digitales",
						link: "../convertidores-de-audio-digital",
					},
				],
			},
			{
				label: "Accesorios para producción musical",
				link: "../accesorios-para-produccion-musical",
				subMenu: [
					{
						title: "Accesorios para producción musical",
						label: "Partituras y atriles",
						link: "../partituras-y-atriles",
					},
					{ label: "Metrónomos", link: "../metronomos-musicales" },
				],
			},
		],
	},

	{
		label: "Libros, Revistas y Cómics",
		link: "../libros-revistas-y-comics",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Books.svg",
		subMenu: [
			{
				title: "Libros, Revistas y Cómics",
				label: "Libros",
				link: "../libros",
				subMenu: [
					{
						title: "Libros",
						label: "Literaturas y Novelas",
						link: "../libros-literarios",
					},
					{ label: "Arte y fotografía", link: "../libros-arte-fotografia" },
					{ label: "Escolares y profesionales", link: "../libros-escolares" },
					{ label: "Biografías", link: "../biografias" },
					{
						label: "Estilos de vida y ocio",
						link: "../libros-de-estilo-de-vida",
					},
					{ label: "Infantiles", link: "../libros-para-ninos" },
				],
			},
			{
				label: "Comics y Manga",
				link: "../comics-e-historietas",
				subMenu: [
					{ title: "Comics y Manga", label: "Comics", link: "../comics" },
					{ label: "Manga", link: "../manga" },
				],
			},
			{
				label: "Catálogos y manuales",
				link: "../catalogos-manuales",
				subMenu: [
					{
						title: "Catálogas y manuales",
						label: "Catálogos",
						link: "../catalogos",
					},
				],
			},
			{
				label: "Revistas",
				link: "../revistas",
				subMenu: [
					{
						title: "Revistas",
						label: "Aventura",
						link: "../revistas-de-aventura",
					},
					{ label: "Cine y tv", link: "../revistas-de-cine" },
					{
						label: "Decoración y Manualidades",
						link: "../revistas-de-decoracion",
					},
					{ label: "Historias", link: "../revistas-de-historia" },
					{ label: "Infantil", link: "../revistas-infantiles" },
					{ label: "Interés general", link: "../revistas-de-interes-general" },
					{ label: "Música", link: "../revistas-de-musica" },
					{ label: "Noticias", link: "../revistas-de-noticias" },
					{ label: "Salud y bienestar", link: "../revistas-de-salud" },
				],
			},
			{
				label: "Agendas y calendarios",
				link: "../agendas-y-calendarios",
				subMenu: [
					{
						title: "Agendas y calendarios",
						label: "Agendas",
						link: "../agendas",
					},
					{ label: "Calendarios", link: "../calendarios" },
				],
			},
			{
				label: "Accesorios",
				link: "../accesorios-para-libros",
				subMenu: [
					{
						title: "Accesorios",
						label: "Separadores de libros",
						link: "../separadores-de-libros",
					},
					{ label: "Accesorios para Leer", link: "../accesorios-para-leer" },
					{ label: "Lámparas de lectura", link: "../lamparas-de-lectura" },
				],
			},
		],
	},

	//Otra categoria seccion
	{
		title: "Otras categorías",
		label: "Mascotas",
		link: "../mascotas",
		icon: "https://cdn2.coppel.com/images/emarketing/temp_iconos_menu/Pets.svg",
		subMenu: [
			{
				title: "Mascotas",
				label: "Perro y gato",
				link: "../perro-y-gato",
				subMenu: [
					{
						title: "Perro y gato",
						label: "Transportadoras",
						link: "../transportadoras-de-mascotas",
					},
					{ label: "Alimento", link: "../alimento-perro-y-gato" },
					{ label: "Premios y carnazas", link: "../premios-para-mascotas" },
					{ label: "Camas", link: "../camas-para-mascotas" },
					{ label: "Ropa", link: "../ropa-para-mascotas" },
					{ label: "Juguetes", link: "../juguetes-para-mascotas" },
					{ label: "Disfraces", link: "../disfraces-para-mascotas" },
					{
						label: "Accesorios para perro y gato",
						link: "../accesorios-para-mascotas",
					},
					{ label: "Baño e Higiene", link: "../bano-e-higiene-mascotas" },
				],
			},
		],
	},
	// ...
];
