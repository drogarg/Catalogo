const productosSuplementos = [
    { 
    id: "suplementos1",
    nombre: "COLAGENO HIDROLIZADO TIPO I, II y III EN POLVO SIN SABOR",
    precio: "$18.200",
    descripcion: "Suplemento en Polvo para la Salud, Belleza y Piel. Descubre nuestro suplemento en polvo que combina los beneficios de los péptidos de colágeno tipo I, II y III hidrolizado. Formulado específicamente para apoyar la salud, belleza y piel, nuestra mezcla ofrece una serie de beneficios integrales para tu bienestar.",
    imagen: "../img/sup1.webp",
    categoria: "suplementos",
    marca: "COLAGENO"
    },
    {
    id: "suplementos2",
    nombre: "COLAGENO EN COMPRIMIDOS",
    precio: "$6.600",
    descripcion: "INGESTA DIARIA RECOMENDADA 1 a 2 comprimidos por día. Composición: Cada comprimido contiene: Colágeno 250 mg; Vitamina C 10 mg, Vitamina E 50% 4mg; Carbonato de Calcio 50 mg, Óxido de Magnesio 50 mg; Excipientes : Celulosa microcristalina (AGC), Lactosa, Polivinilpirrolidona (AGC) , Dióxido de sílicio (ANAH), Estearato de Magnesio c.s.p. 810 mg. CONTIENE DERIVADOS DE LECHE",
    imagen: "../img/sup2.webp",
    categoria: "suplementos",
    marca: "COLAGENO"
    },
    {
    id: "suplementos3",
    nombre: "COLAGENO HIDROLIZADO, TE BLANCO, CALCIO, VIT C, MAGNESIO, GARCINIA & GUARANA EN POLVO",
    precio: "$18.400",
    descripcion: "Adelgazante, suplemento dietario en polvo a base de Calcio, Vitamina C, Magnesio, Fibra, Colágeno hidrolizado, Té Blanco, Garcinia y Guaraná. Sabor Guaraná. Para adultos",
    imagen: "../img/sup3.webp",
    categoria: "suplementos",
    marca: "COLAGENO"
    },
    {
    id: "suplementos4",
    nombre: "COLAGENO + CARTILAGO DE TIBURON X 30 COMPRIMIDOS",
    precio: "$8.800",
    descripcion: "Colágeno + Cartílago de Tiburón con Calcio, Magnesio, Zinc y Vitamina D. Suplemento Integral para la Salud Ósea, Articular y General. Descubre nuestro suplemento avanzado que combina colágeno hidrolizado, cartílago de tiburón con calcio, magnesio, zinc y vitamina D, formulado específicamente para mejorar tu salud ósea, articular y general. Nuestra fórmula única ofrece una serie de beneficios integrales para tu bienestar",
    imagen: "../img/sup4.webp",
    categoria: "suplementos",
    marca: "COLAGENO"
    },
    {
    id: "suplementos5",
    nombre: "COLAGENO HIDROLIZADO, ACIDO HIALURONICO, VIT C, CURCUMA & MAGNESIO EN POLVO",
    precio: "$26.900",
    descripcion: "COLÁGENO HIDROLIZADO + Ácido Hialurónico, Vitamina C, Cúrcuma y Magnesio. Sabor Frutos Rojos. Suplemento dietario en polvo a base de Colágeno Hidrolizado, Ácido hialurónico, y Vitamina C, con Cúrcuma y Magnesio. Sabor Frutos Rojos. Para adultos",
    imagen: "../img/sup5.webp",
    categoria: "suplementos",
    marca: "COLAGENO"
    },
    {
    id: "suplementos6",
    nombre: "COLAGENO HIDROLIZADO, VITAMINA C, CALCIO, MAGNESIO & ZINC",
    precio: "$23.700",
    descripcion: "COLÁGENO HIDROLIZADO + Vit C, Calcio, Magnesio y Zinc. Sabor Frutos Tropicales. Suplemento dietario en polvo a base de Colágeno hidrolizado, Magnesio, Calcio, Zinc y Vitamina C. Sabor Frutos Tropicales. Para adultos",
    imagen: "../img/sup6.webp",
    categoria: "suplementos",
    marca: "COLAGENO"
    },
    {
    id: "suplementos7",
    nombre: "COLAGENO HIDROLIZADO CON MATCHA, COENZIMA Q10 & REVERATROL X 200 G",
    precio: "$31.900",
    descripcion: "COLÁGENO HIDROLIZADO, Té verde Matcha, Coenzima Q10 y Resveratrol. Sabor citrus. Suplemento dietario en polvo a base de Colágeno hidrolizado y Vitamina C, con Té verde matcha, Coenzima Q10 y Resveratrol. Sabor citrus. Para adultos.",
    imagen: "../img/sup7.webp",
    categoria: "suplementos",
    marca: "COLAGENO"
    },
    {
    id: "suplementos8",
    nombre: "GOLDFISH COLAGENO HIDROLIZADO, VIT C, CURCUMA Y MAGNESIO SIN SABOR X 200 G",
    precio: "$27.000",
    descripcion: "Colágeno Hidrolizado + Ácido Hialurónico, Vitamina C, Cúrcuma y Magnesio - Sin Sabor Goldfish. Este suplemento en polvo está formulado especialmente para adultos que buscan mejorar su bienestar general y mantener la salud de su piel, cabello y articulaciones.",
    imagen: "../img/sup8.webp",
    categoria: "suplementos",
    marca: "COLAGENO"
    },
    {
    id: "suplementos9",
    nombre: "CITRATO DE MAGNESIO X 180 G",
    precio: "$23.400",
    descripcion: "Suplemento dietario en polvo a base de Vitamina C, Magnesio y Zinc. Este mineral esencial, ofreciendo una forma altamente absorbible y efectiva para mejorar tu bienestar general.",
    imagen: "../img/sup9.webp",
    categoria: "suplementos",
    marca: "POLVOS"
    },
    {
    id: "suplementos10",
    nombre: "MELENA DE LEON X 40 G ",
    precio: "$27.800",
    descripcion: "Suplemento en Polvo de Melena de León para Enfoque, Concentración y Memoria. Descubre nuestro suplemento en polvo que combina los beneficios de la Melena de León y el formulado específicamente para mejorar el enfoque, la concentración y la memoria. Sin saborizantes agregados, este suplemento puro se puede añadir fácilmente a tus bebidas o alimentos favoritos, proporcionando una forma conveniente de potenciar tu rendimiento mental y bienestar diario",
    imagen: "../img/sup10.webp",
    categoria: "suplementos",
    marca: "POLVOS"
    }, 
    {
    id: "suplementos11",
    nombre: "ACEITE DE COCO PRENSADO EN FRIO VIDRIO X 180 ML",
    precio: "$10.700",
    descripcion: "Propiedades y Beneficios:\n\nFuente de Ácidos Grasos Saludables: El aceite de coco es una excelente fuente de ácidos grasos saturados de cadena media (AGCM), como el ácido láurico. Estos ácidos grasos son fácilmente digeribles y se metabolizan rápidamente en energía, proporcionando un impulso rápido y sostenido de energía.\n\nPromueve la Salud Cardiovascular: A pesar de ser rico en grasas saturadas, varios estudios sugieren que el aceite de coco puede tener efectos beneficiosos para la salud cardiovascular al aumentar el colesterol HDL (colesterol 'bueno') y mejorar la relación entre el colesterol HDL y LDL (colesterol 'malo').\n\nApoyo a la Digestión: El aceite de coco puede ayudar a mejorar la salud digestiva al promover la absorción de nutrientes y favorecer la salud de la microbiota intestinal. Sus propiedades antimicrobianas también pueden ayudar a combatir bacterias dañinas en el tracto digestivo.\n\nBeneficios para la Piel y el Cabello: Gracias a su alto contenido de ácido láurico y antioxidantes, el aceite de coco puede ayudar a hidratar y nutrir la piel y el cabello, dejándolos suaves, brillantes y saludables.",
    imagen: "../img/sup11.webp",
    categoria: "suplementos",
    marca: "OTROS"
    },
    {
    id: "suplementos12",
    nombre: "SPIRULINA EN POLVO X 100 G ",
    precio: "$18.500",
    descripcion: "SPIRULINA POLVO\n\nCon más de un 60% de proteína vegetal, la Spirulina es una de las fuentes proteínicas naturales más ricas, con los ocho aminoácidos esenciales y los nueve no esenciales.\n\nTiene efecto antioxidante por su aporte de Beta-carotenos; enzimas que aportan equilibrio al metabolismo y a la digestión, activando el sistema inmunológico. Aumenta la resistencia y retarda el proceso de envejecimiento.\n\nEs un complejo vitamínico y mineral natural. Contiene Ácido gamma-linolénico; valioso apoyo en la menopausia. Es muy rica en hierro en una forma de fácil absorción. La gran cantidad de sustancias vitales que se encuentran en la Spirulina activan el sistema de defensa.\n\nAdemás, se compensan las eventuales deficiencias alimentarias. La resistencia aumenta y el cuerpo puede recuperarse con mayor rapidez después de realizar esfuerzos físicos y mentales.",
    imagen: "../img/sup12.webp",
    categoria: "suplementos",
    marca: "POLVOS"
    },
    {
    id: "suplementos13",
    nombre: "PROPOLEO BEBIBLE X 150 CC",
    precio: "$11.500",
    descripcion: "EL PROPÓLEO es un producto apícola que las abejas recolectan de las resinas y secreciones que cubren las hojitas de las yemas de álamo, abedul, roble, castaño silvestre y otros árboles. Lo usan como material de construcción que protege a la colmena y como medio de conservación de carácter antimicrobiano. Contiene un 50-60% de resinas y bálsamos, un 30-40% de cera, un 5-10% de polen, 8-10% de aceites aromáticos. Además: posee vitaminas B1, provitamina A, vitamina P y microelementos. Propiedades del Propóleo: es bacteriostático, antifúngico, antiparasitario. Analgésico y anestésico. Cicatrizante. Estimulante de la inmunidad. Antioxidante. Desodorante. Advertencias: Puede producir reacciones alérgicas en personas sensibles a productos de la colmena.",
    imagen: "../img/sup17.webp",
    categoria: "suplementos",
    marca: "OTROS"
    },
    {
    id: "suplementos14",
    nombre: "MATCHA & MELENA DE LEON X 40 G",
    precio: "$27.900",
    descripcion: "Suplemento en Polvo de Melena de León y Té Verde Matcha para Enfoque, Concentración y Memoria. Descubre nuestro suplemento en polvo que combina los beneficios de la Melena de León y el Té Verde Matcha, formulado específicamente para mejorar el enfoque, la concentración y la memoria. Sin saborizantes agregados, este suplemento puro se puede añadir fácilmente a tus bebidas o alimentos favoritos, proporcionando una forma conveniente de potenciar tu rendimiento mental y bienestar diario",
    imagen: "../img/sup18.webp",
    categoria: "suplementos",
    marca: "POLVOS"
    },
    {
    id: "suplementos15",
    nombre: "MANZANILLA, TILO, MELISA, SCHIZANDRA + VIT B1 y B6 X 30 COMPRIMIDOS",
    precio: "AGOTADO",
    descripcion: "Beneficios Clave:\nRelajación y Bienestar: Las hierbas presentes en esta fórmula son ampliamente reconocidas por sus propiedades relajantes y sedantes suaves, ayudándote a calmar la mente y el cuerpo.\n\nSoporte al Sistema Nervioso: Las vitaminas del complejo B son imprescindibles para el correcto funcionamiento del sistema nervioso y el metabolismo energético, complementando la acción de las hierbas.\n\nAdaptógeno Natural: Este suplemento actúa como un adaptógeno, ayudando a tu organismo a adaptarse mejor a las tensiones diarias.\n\nModo de Uso:\nPara obtener los mejores resultados, se recomienda la ingesta de 1 comprimido antes de acostarse. Así podrás disfrutar de un descanso reparador cada noche.\n\nComposición:\nCada comprimido contiene: Manzanilla extr seco (Matricaria chamomilla), flores 90 mg; Tilo, extracto seco (Tilia platyphyllos Scop.), flores 60 mg; Melisa, extr seco (Melissa officinalis), hojas 50 mg; Schizandra, extr seco (Schizandra chinensis), fruto maduro seco 30 mg; Vitamina B6 0,40 mg; Vitamina B1 0,40 mg. Excipientes (Celulosa (AGC) Croscarmelosa (EST), Talco (AHAH) Dióxido de silicio coloidal (AGC)) csp 700 mg.",
    imagen: "../img/sup13.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos16",
    nombre: "VITAMINA C X 30 COMPRIMIDOS",
    precio: "$9.800",
    descripcion: "El ácido ascórbico (Vitamina C) interviene en varios procesos metabólicos y está presente en todas las unidades celulares animales y vegetales. Cumple innumerables funciones: Es un antioxidante eficaz . Interviene en la formación de tejido conectivo por actuar en la síntesis del colágeno, en la absorción del hierro y del ácido fólico en el intestino mejorando los estados anémicos. Interviene en la síntesis de corticoides por las glándulas suprarrenales. Colabora en los procesos de desintoxicación por parte del hígado. Ayuda a reparar y mantener el cartílago, los huesos y los dientes. Es indispensable a la hora de sanar heridas y formar tejido que ayuda a cicatrizar. Previene las enfermedades cardiacas ya que el ácido ascórbico disminuye el colesterol evitando que la grasa se adhiera a los vasos sanguíneos, reduciendo la posibilidad de sufrir infartos. De igual manera, ayuda a la absorción de hierro. Al combinar la Vitamina C con Zinc se forma una dupla que previene los resfriados comunes y los cuadros gripales disminuyendo la intensidad de los síntomas y duración de los mismos.",
    imagen: "../img/sup14.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos17",
    nombre: "VENPLUS - MAGNESIO, VIT C, CASCARA DE NARANJA, GINKGO BILOBA, CENTELLA y CURCUMA",
    precio: "$7.500",
    descripcion: "La complementación de las distintas hierbas, minerales y vitaminas que integran este producto producen tonificación de las paredes venosas y disminución de la fragilidad capilar. Es eficaz para mejorar la circulación de extremidades inferiores (várices, flebitis, piernas pesadas, celulitis), disminuir la inflamación y la formación de las desagradables arañitas.",
    imagen: "../img/sup16.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos18",
    nombre: "ALFALFA X 40",
    precio: "$5.300",
    descripcion: "Contiene proteínas, grasas, hidratos de carbono; minerales. Es importante su contenido en vitamina C que lo hace un excelente inmunoestimulante y antioxidante. Aporta Vitamina K1 que actúa en los procesos hemostáticos y antihemorrágicos por ser indispensable en la síntesis hepática de factores de coagulación. Posee Hierro de fácil absorción lo que la hace muy útil en el tratamiento de anemia. Aporta carotenos, Vitaminas D y E y Vitaminas del complejo B que en su conjunto son excelentes para mantener la piel, el cabello y las uñas en perfectas condiciones. El Zinc es un mineral esencial para la actividad de más de 70 enzimas relacionadas con la utilización de la energía, síntesis de proteínas y protección antioxidante. Se ha comprado su efecto benéfico en la prevención de enfermedades virales infecciosas.",
    imagen: "../img/com1.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos19",
    nombre: "VIVIR - VIT E, ZINC, COBRE + VIT A, C y SELENIO",
    precio: "$6.000",
    descripcion: "Antioxidante; actúa contrarrestando la acción nociva de los radicales libres que provocan la destrucción celular conduciendo al envejecimiento prematuro. Los componentes minerales de este suplemento forman parte de enzimas que actúan protegiendo la integridad de las membranas celulares. Las vitaminas A, C, E y selenio, también con actividad antioxidante, favorecen la regeneración, nutrición e hidratación de la piel y mucosas, fortalecen los huesos, y refuerzan el sistema inmune.",
    imagen: "../img/com2.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos20",
    nombre: "LUPINES X 40",
    precio: "$5.100",
    descripcion: "Los lupines son ricos en proteína (45-49% del volumen de las semillas) siendo sus aminoácidos más abundantes la Cistina y lisina y en ácidos grasos poliinsaturados Los lupines contribuyen a la disminución y excreción del ácido úrico del organismo. Se lo utiliza en el tratamiento de enfermedades como el reumatismo y la gota, que se caracterizan por la presencia de inflamaciones y dolor en las articulaciones y músculos, producidas por los depósitos de ácido úrico. La vitamina C tiene antividad antioxidante y estimulante de los procesos de desintoxicación del organismo, potenciando el efecto de los lupines.",
    imagen: "../img/com3.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos21",
    nombre: "BELLA SKIN - BIOTINA, VIT B6, ACIDO PANTOTENICO, ZINC, L-METIONINA y L-CISTINA",
    precio: "$9.200",
    descripcion: "Un suplemento dietario a base de vitaminas y minerales esenciales que fortalece y mejora la calidad de la piel, cabellos y uñas. Recomendado para consumir ante alopecias, cabellos frágiles o con poco crecimiento, uñas débiles o quebradizas, piel dañada por la deshidratación o agresiones externas como la exposición excesiva al sol o al frío.",
    imagen: "../img/com4.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos22",
    nombre: "POLEN CON ZINC + VIT C",
    precio: "$5.100",
    descripcion: "El polen encierra de manera muy completa todos los elementos indispensables a la vida, elementos activos en armonía y en sinergia (lo que no puede ser realizado sintéticamente en los laboratorios). Hay en la naturaleza 22 aminoácidos esenciales (proteínas). Existe un solo alimento conocido que contiene los 22 aminoácidos esenciales: el polen. La cantidad promedio de proteínas por peso en el polen es del 25%. El valor nutritivo o biológico es de 86, superior al de la carne de ternera. La combinación del Polen con Vitamina C y Zinc es un estimulante del sistema inmunológico, preparando al organismo ante el ataque de virus o bacterias patógenas. Esto genera una mejor y más rápida recuperación de los cuadros infecciosos en general, pero principalmente los respiratorios. Tiene efecto benéfico sobre las situaciones de stress o fatiga intelectual, y un probado efecto antioxidante por combatir los radicales libres.",
    imagen: "../img/com5.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos23",
    nombre: "POTENCIADOR NATURAL GINSENG X 30",
    precio: "$18.500",
    descripcion: "Es un suplemento dietario, en el cual la combinación de hierbas, con un aminoácido (L- arginina) y vitamina E, con su consumo regular mejora las funciones sexuales por sus efectos afrodisíacos, estimulantes, antioxidantes y mejoradores de la circulación periférica. Usar con precaución en personas con alteraciones de la presión o trastornos cardíacos. Consulte siempre a su médico.",
    imagen: "../img/com6.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos24",
    nombre: "ACEITE DE COCO NEUTRO VIDRIO X 180 ML",
    precio: "$10.400",
    descripcion: "Incorporar aceite de coco a tu rutina diaria puede ser una forma simple y efectiva de mejorar tu salud y bienestar general. Ya sea que lo uses para cocinar, como aceite para masajes, o como parte de tu rutina de cuidado personal, el aceite de coco ofrece una serie de beneficios para promover una mejor salud cardiovascular, digestión, piel y cabello. Es una alternativa saludable y versátil que puede ayudarte a mantener un estilo de vida equilibrado y lleno de vitalidad.",
    imagen: "../img/sup19.webp",
    categoria: "suplementos",
    marca: "OTROS"
    },
    {
    id: "suplementos25",
    nombre: "PSYLLIUM EN POLVO DOYPACK X 200 G",
    precio: "$23.300",
    descripcion: "El Psyllium es la semilla del Plantago ovata, con su cáscara, y es utilizada en el control de peso y para la salud intestinal en general. Contiene entre 70 - 80 % de fibra que reduce el apetito, mejora y depura el sistema digestivo, por lo que es una excelente opción para complementar una dieta. La fibra soluble tiene efectos maravillosos sobre el metabolismo. Consumida con abundante líquido, se utiliza de forma terapéutica para favorecer el tránsito intestinal, previniendo de este modo el estreñimiento y manteniendo la flora bacteriana sana y activa. Además, su efecto captador de agua contribuye a reducir el apetito sin sobreestimular el sistema nervioso, y como ralentiza el tránsito intestinal, es efectivo para controlar los niveles de azúcar en sangre y el colesterol.",
    imagen: "../img/sup20.webp",
    categoria: "suplementos",
    marca: "POLVOS"
    },
    {
    id: "suplementos26",
    nombre: "POLEN, ORTIGA + VIT C",
    precio: "AGOTADO",
    descripcion: "Los fitoextractos de ortiga son los fármacos más usados en Europa para el tratamiento de la hiperplasia prostática benigna grado I y II, por su efecto antiinflamatorio. También disminuye el ácido úrico El polen también ejerce sus efectos antiinflamatorios prostáticos, regula la función intestinal, tiene un probado efecto sobre la fatiga intelectual por su contenido en aminoácidos. Genera una rápida recuperación después de enfermedades infecciosas; fortifica el sistema circulatorio, por la presencia de rutina. Se lo considera un mejorador de la potencia sexual La Vitamina C es esencial para el mantenimiento de los tejidos, antioxidante, estimulante de las defensas naturales y antiestress.",
    imagen: "../img/com7.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos27",
    nombre: "CARTILAGO DE TIBURON EN COMPRIMIDOS",
    precio: "$9.500",
    descripcion: "El cartílago de tiburón reduce el deterioro articular, es un excelente antiinflamatorio, controla la artritis y osteoartritis reduciendo la inflamación y el dolor ocasionado por las mismas, su aporte de Calcio y Fósforo asimilables previenen la osteoporosis. Favorece la formación de anticuerpos, refuerza el sistema inmunitario, y mejora la regeneración de tejidos.",
    imagen: "../img/com8.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos28",
    nombre: "CAFE VERDE EN COMPRIMIDOS",
    precio: "$6.900",
    descripcion: "El café verde, sin tostar ni torrar, es un gran aliado en un plan de descenso de peso. Genera saciedad, acelera la combustión de las grasas, es diurético y mejora la circulación y la celulitis. Sumadas a las propiedades estimulantes y antioxidantes de la cafeína, el café verde es rico en una sustancia llamada Ácido clorogénico cuya acción principal es modular la velocidad de absorción de los azúcares en el organismo, por lo cual prolonga la sensación de saciedad, disminuyendo el apetito. La asociación cafeína - ácido clorogénico incrementa la velocidad de combustión de los alimentos consumidos (lo que se conoce popularmente como “quemar grasas”), colaborando así también al descenso de peso. Las formas de tomar el café verde son variadas; desde el grano triturado en decocción por 10 a 15 minutos o en saquitos en infusión o los comprimidos o caramelos. Cualquiera de las presentaciones debe ingerirse 30 minutos antes de cada comida, dándole el tiempo necesario para comenzar a actuar en nuestro aparato digestivo.",
    imagen: "../img/com9.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos29",
    nombre: "SPIRULINA X 30",
    precio: "$11.000",
    descripcion: "Con más de un 60% de proteína vegetal, la Spirulina es una de las fuentes proteínicas naturales más ricas, con los ocho aminoácidos esenciales y los nueve no esenciales. Tiene efecto antioxidante por su aporte de Beta-carotenos; enzimas que aportan equilibrio al metabolismo y a la digestión, activando el sistema inmunológico. Aumenta la resistencia y retarda el proceso de envejecimiento. Es un complejo vitamínico y mineral natural. Contiene Ácido gamma-linolénico; valioso apoyo en la menopausia. Es muy rica en hierro en una forma de fácil absorción. La gran cantidad de sustancias vitales que se encuentran en la Spirulina activan el sistema de defensa. Además, se compensan las eventuales deficiencias alimentarias. La resistencia aumenta y el cuerpo puede recuperarse con mayor rapidez después de realizar esfuerzos físicos y mentales.",
    imagen: "../img/com10.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos30",
    nombre: "MAGNESIO X 30",
    precio: "$6.600",
    descripcion: "Pocos nutrientes son tan polifuncionales como el Magnesio. Está presente en todas las células del cuerpo, es fundamental para cientos de reacciones enzimáticas relacionadas con el metabolismo energético y proteico. En sus funciones se interrelaciona con otros minerales: con el potasio para la síntesis proteica, con el sodio para mantener el equilibrio de los fluidos corporales, con el calcio y fósforo se almacena en el tejido óseo. Debido al refinamiento de las materias primas, nuestras dietas tienden a ser bajas en Magnesio, por lo cual es muy recomendable consumirlo en forma de suplemento dietario. El cuerpo lo necesita para producir energía, sintetizar proteínas y grasas, la relajación muscular (evitando los calambres y las contracturas), el funcionamiento del sistema nervioso y el metabolismo del calcio manteniendo la fortaleza de huesos y articulaciones. El Magnesio estimula la producción de la sustancia conocida como GABA (ac gamma aminobutírico), por lo que también ayuda a las personas a tranquilizarse mentalmente. Ayuda a relajar las paredes de los vasos sanguíneos, lo que reduce la presión arterial. También alivia las palpitaciones cardíacas. Varios estudios han demostrado que la suplementación con Magnesio puede reducir la frecuencia de las migrañas. Es un excelente mineral antienvejecimiento celular (antioxidante).",
    imagen: "../img/com11.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos31",
    nombre: "CHIA X 30",
    precio: "$7.400",
    descripcion: "Aporta Omega - 3 de origen vegetal que no es producido por el organismo y debe ser incorporado a través de la dieta, baja el índice de enfermedades coronarias; ayuda a normalizar la presión arterial alta, reduce el nivel de colesterol; protege al corazón y juega un papel fundamental en el desarrollo del sistema nervioso e inmune, ayuda en el desarrollo del embarazo y del crecimiento infantil por su importante contenido en Calcio.",
    imagen: "../img/com12.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos32",
    nombre: "GINKGO BILOBA + MAGNESIO",
    precio: "$7.400",
    descripcion: "El Ginkgo biloba es un vasodilatador periférico y cerebral, tónico venoso, antiinflamatorio, antihemorrágico, aumenta la irrigación tisular activando el metabolismo celular y disminuyendo el riesgo de trombosis. Capta radicales libres, es antioxidante. El Magnesio mantiene la función nerviosa y muscular en buen estado. Aumenta la densidad ósea previniendo la osteoporosis. Ayuda a relajar los músculos previniendo calambres, contracturas, vértigos, mareos y fatiga general.",
    imagen: "../img/com13.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos33",
    nombre: "CENTELLA ASIATICA, FUCUS, GINKGO BILOBA + VIT E",
    precio: "$6.800",
    descripcion: "La complementación de las distintas hierbas con la Vitamina E que integran este producto, producen tonificación de las paredes venosas y disminución de la fragilidad capilar, mejorando el drenaje de toxinas y líquidos que son comunes en los procesos celulíticos. Activa el proceso de regeneración celular y la producción de fibras de colágeno, logrando un tejido firme, reestructurado y funcional. Es un poderoso antioxidante y depurador de radicales libres.",
    imagen: "../img/com14.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos34",
    nombre: "CENTELLA ASIATICA + MAGNESIO",
    precio: "$6.800",
    descripcion: "La Centella asiática tiene gran poder cicatrizante y favorece la biosíntesis del colágeno a nivel del tejido conjuntivo. También posee propiedades antiinflamatorias, antisépticas, vulnerarias, revitalizantes, tónicas venosas y protector capilar. Todas estas virtudes la hacen un perfecto complemento en los tratamientos anticelulíticos. Además controla la producción de fibras de colágeno obteniéndose un tejido normal, reestructurado y funcional. El Magnesio es un mineral presente en todas las células del organismo. La mitad del Magnesio está presente en los fluidos intracelular y la otra mitad está en los huesos. Es necesario para más de 300 reacciones bioquímicas en el cuerpo. Mantiene la función nerviosa y la función muscular en buen estado (actúa en la contracción y relajación muscular). También está involucrado en el metabolismo energético y en la síntesis proteica.",
    imagen: "../img/com15.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos35",
    nombre: "GINSENG + MAGNESIO",
    precio: "$9.300",
    descripcion: "Dos elementos que juntos se potencian para darnos la energía y resistencia que necesitamos: el Ginseng , tónico y estimulante, nos mantiene en buen estado físico ya que aumenta la resistencia al cansancio, el stress, el excesivo trabajo físico o mental. Vigoriza y da sensación de bienestar, fomenta el sueño natural y reparador después de un día agotador. Tonifica en estados de recuperación de enfermedades o debilidad. Mejora la memoria. Estimula la digestión. El Magnesio potencia al Ginseng colaborando en las funciones del sistema nervioso y muscular. Es un mineral importantísimo para mantener el equilibrio funcional del organismo, incluyendo el ritmo cardíaco y la presión arterial.",
    imagen: "../img/com16.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos36",
    nombre: "ENERGIZANTE - MAGNESIO, GUARANÁ, GERMEN DE TRIGO, L- CARNITINA, GINSENG COREANO Y VIT E",
    precio: "$9.300",
    descripcion: "Estas cápsulas Gold Fish aportan todo lo que necesitamos para vivir una vida a pleno! Indispensable para quienes están sometidos a una intensa actividad física e intelectual. Recompone y mejora el rendimiento. El Germen de trigo y vitamina E, poseen reconocidas propiedades antioxidantes La raíz de Ginseng, tónica y estimulante del sistema nervioso, aumenta la resistencia a la fatiga, al stress y a las infecciones, mejora las funciones intelectuales, mejora y estimula la memoria. El Guaraná es un estimulante natural por su contenido en cafeína La L carnitina; es un aminoácido indispensable para el desarrollo muscular. El Magnesio; mineral presente en todas las células del organismo. Mantiene la función nerviosa y muscular en buen estado. La Glucosa es una fuente de energía inmediata por su rápida disolución y asimilación",
    imagen: "../img/com17.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos37",
    nombre: "ARANDANO, VIT C y E",
    precio: "AGOTADO",
    descripcion: "Tiene una actividad antioxidante. El Arándano incrementa la agudeza visual nocturna, y mejora la visión global en casos de miopía. Tiene acción vasoprotectora y antiinflamatoria, siendo un excelente complemento para tratar la Insuficiencia venosa crónica En infecciones del tracto urinario, actúa modificando el pH urinario, impidiendo la adherencia de determinadas bacterias como E. Coli en las paredes celulares. El efecto es tanto terapéutico como preventivo de recurrencias.",
    imagen: "../img/sup21.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos38",
    nombre: "ACEITE DE PESCADO X 70 CC",
    precio: "AGOTADO",
    descripcion: "Los ácidos grasos poliinsaturados, más conocidos como Omega 3, están presentes en los pescados de mar. También son una fuente natural de vitamina A y D. Nuestro cuerpo no puede fabricar los ácidos grasos esenciales y por ello necesitamos incorporarlos en nuestra dieta. Los suplementos de aceite de pescado pueden ofrecernos de forma sencilla los niveles adecuados de ácidos grasos esenciales para nuestro cuerpo y mejorar la salud en general. Los estudios científicos confirman su eficacia en el control de presión arterial, de los niveles de triglicéridos y colesterol “malo”, para la prevención de cardiopatías, lucha contra el raquitismo y anemia, y alivio de las consecuencias de la psoriasis. Los ácidos grasos omega 3 tienen un poderoso efecto antiinflamatorio, que puede mejorar el funcionamiento cardiovascular y rebajar el impacto de las enfermedades articulares.",
    imagen: "../img/sup22.webp",
    categoria: "suplementos",
    marca: "OTROS"
    },
    {
    id: "suplementos39",
    nombre: "ACEITE DE PRIMULA X 70 CC",
    precio: "AGOTADO",
    descripcion: "La prímula u onagra contiene principalmente ácido linoleico y ácido gamma-linolénico, ambos ácidos grasos esenciales para nuestro organismo, los cuales necesariamente deben ser incluidos cada día en la alimentación. Los ácidos grasos esenciales juegan un papel fundamental en nuestro cuerpo: proporcionan energía, aíslan los nervios, colaboran en el mantenimiento de la temperatura corporal, forman parte de estructuras celulares y son vitales para el metabolismo. Desde hace ya varios años, el aceite de prímula se emplea en el tratamiento de diversas afecciones, especialmente dermatológicas, así como para el tratamiento de manifestaciones del síndrome premenstrual y algunos síntomas de la menopausia. Tiene acción antiinflamatoria, útil en procesos reumáticos. El agregado de Vitamina E le confiere propiedades antioxidantes, luchando contra los radicales libres responsables del envejecimiento celular. Puede consumirse y también aplicarse externamente.",
    imagen: "../img/sup23.webp",
    categoria: "suplementos",
    marca: "OTROS"
    },
    {
    id: "suplementos40",
    nombre: "ACEITE DE GERMEN DE TRIGO y VIT E X 70 CC",
    precio: "AGOTADO",
    descripcion: "Se obtiene por expresión o mediante extracción por disolventes de los embriones de Triticum aestivum L. Contiene tocoferoles (0.3%), provitamina A, ácidos grasos esenciales, fosfolípidos y esteroles. Se utiliza como uso interno como fuente de vitamina E, fosfolípidos y de ácidos grasos poliinsaturados que son hipolipemiantes Tiene propiedades emolientes y regeneradoras de la piel y se puede usar en cremas o emulsiones como uso externo, también se puede usar puro en caso de alopecia, urticaria o eczema. La vitamina E ejerce su función antitóxica por ser un potente antioxidante facilitando el mantenimiento y protección de las membranas biológicas.",
    imagen: "../img/sup24.webp",
    categoria: "suplementos",
    marca: "OTROS"
    },
    {
    id: "suplementos41",
    nombre: "ADELGAZANTE DELMAX CAFE VERDE + CAYENA, TE VERDE, TILO, PASIONARIA, L-CARNITINA y VIT B6",
    precio: "$19.300",
    descripcion: "La combinación de Café verde (grano de café sin tostar) con su principal principio activo, el ácido Clorogénico, y la Capsaicina proveniente de la Pimienta de Cayena logran un producto con propiedades saciantes, que favorece la termogénesis, aumenta la actividad lipolítica y es antioxidante. A ellos se suman el té verde, la L- carnitina y la vitamina B6 que ejercen su acción potenciadora del metabolismo de lípidos y carbohidratos, y el tilo y la pasionaria, dos hierbas de probado efecto en la ansiedad, corresponsable muchas veces del aumento de peso.",
    imagen: "../img/com18.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos42",
    nombre: "ADELGAZANTE DELMAX SPIRULINA MAX PLUS",
    precio: "$17.700",
    descripcion: "Con más de un 60% de proteína vegetal, la Spirulina es una de las fuentes proteínicas naturales más ricas, con los ocho aminoácidos esenciales y los nueve no esenciales. Tiene efecto antioxidante por su aporte de Beta-carotenos; enzimas que aportan equilibrio al metabolismo y a la digestión y activan el sistema inmunológico, siendo el zinc un mineral que colabora en el sostén y refuerzo de la inmunidad natural. Aumenta la resistencia y retarda el proceso de envejecimiento. Es un complejo vitamínico y mineral natural con el que se compensan las eventuales deficiencias alimentarias. La resistencia aumenta y el cuerpo puede recuperarse con mayor rapidez después de realizar esfuerzos físicos y mentales Su alto contenido de proteínas proporciona una sensación de plenitud gástrica lo que la hace ideal para personas que buscan adelgazar, este efecto está potenciado por la presencia de Garcinia cambogia, de probada acción termogénica.",
    imagen: "../img/com19.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOS"
    },
    {
    id: "suplementos43",
    nombre: "MELENA DE LEON VITAWELLNESS CAPSULAS",
    precio: "$19.900",
    descripcion: "Lion's Mane Melena de León con Vitamina B9. - Suplemento Natural para Potenciar la Función Cerebral. Descubre nuestro suplemento avanzado que combina los poderosos beneficios de la Melena de León y la Vitamina B9. Formulado específicamente para potenciar la función cerebral, nuestra mezcla ofrece una serie de beneficios integrales para tu salud mental y cognitiva.",
    imagen: "../img/com20.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOSN"
    },
    {
    id: "suplementos44",
    nombre: "CURCUMA, JENGIBRE, PIMIENTA NEGRA & VIT C COMPRIMIDOS",
    precio: "$8.900",
    descripcion: "Cúrcuma, Jengibre, Pimienta Negra y Vitamina C. Suplemento Natural para el Bienestar General y la Reducción de la Inflamación. Descubrí nuestro suplemento único que combina los poderosos beneficios de la cúrcuma, potenciada con la pimienta negra, el jengibre y la vitamina C. Formulado específicamente para promover el bienestar general y reducir la inflamación, nuestra mezcla ofrece una serie de beneficios integrales para tu salud.",
    imagen: "../img/com21.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOSN"
    },
    {
    id: "suplementos45",
    nombre: "CITRATO DE MAGNESIO EN COMPRIMIDOS",
    precio: "$8.900",
    descripcion: "El Citrato de Magnesio en comprimidos está diseñado para proporcionar una fuente altamente biodisponible de magnesio, un mineral esencial para el cuerpo humano. Este suplemento es ideal para personas que buscan mejorar su bienestar general, apoyar funciones corporales clave y prevenir deficiencias de magnesio. El Citrato de Magnesio contribuye a un sueño más reparador gracias a su capacidad para relajar los músculos y calmar el sistema nervioso. Este mineral juega un papel clave en la producción de melatonina, la hormona que regula el ciclo del sueño. Además, ayuda a reducir los niveles de cortisol, la hormona del estrés, promoviendo un estado de relajación ideal para conciliar el sueño.",
    imagen: "../img/com22.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOSN"
    },
    {
    id: "suplementos46",
    nombre: "V-MAX FORTE MELENA DE LEON, GINSENG, ASTRAGALO, SCHIZANDRA, GINKGO BILOBA, L-ARGININA Y VIT E COMPRIMIDOS",
    precio: "$13.200",
    descripcion: "Suplemento Potenciador y Vigorizante Masculino Natural. Descubre nuestro suplemento avanzado que combina los beneficios del Ginseng, Astrágalo, Schizandra, Ginkgo Biloba, Melena de León con L-Arginina y Vitamina E. Formulado específicamente para potenciar la energía, la vitalidad y el rendimiento masculino, nuestra mezcla ofrece una serie de beneficios integrales para tu salud y bienestar.",
    imagen: "../img/com23.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOSN"
    },
    {
    id: "suplementos47",
    nombre: "LION'S MANE SERENA MELENA DE LEON, TILO, MELISA, VIT B6 y B1 EN COMPRIMIDOS",
    precio: "$13.200",
    descripcion: "Suplemento Natural para un Sueño Reparador y Relajación. Descubre nuestro suplemento especial que combina los beneficios del Tilo, Melisa, Melena de León con Vitaminas B6 y B1. Formulado específicamente para promover un sueño más reparador y la relajación, nuestra mezcla ofrece una serie de beneficios integrales para tu bienestar.",
    imagen: "../img/com24.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOSN"
    },
    {
    id: "suplementos48",
    nombre: "CENTELLA ASIATICA, GINKGO BILOBA, TE VERDE & HIBISCUS COMPRIMIDOS",
    precio: "$8.900",
    descripcion: "Suplemento Natural para la Salud, Belleza y Reducción de la Celulitis. Descubre nuestro suplemento único que combina las poderosas propiedades de la Centella Asiática, Ginkgo Biloba, Té Verde, Hibiscus y Vitamina C, diseñado específicamente para las necesidades de las mujeres que desean mejorar su salud y belleza de manera natural. Este suplemento ha sido formulado para ofrecer una serie de beneficios integrales",
    imagen: "../img/com25.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOSN"
    },
    {
    id: "suplementos49",
    nombre: "MACA EN CAPSULAS X 30",
    precio: "$",
    descripcion: "Descubrí el poder ancestral de la Maca peruana, una raíz adaptógena cultivada en los Andes que ha sido utilizada durante siglos por sus propiedades revitalizantes. Este suplemento natural está diseñado para acompañarte en tu día a día, potenciando cuerpo y mente con una fórmula pura y efectiva. Beneficios clave: 🔋 Energía sostenida: Ideal para combatir la fatiga física y mental sin recurrir a estimulantes artificiales. 💪 Resistencia y rendimiento: Apoya la vitalidad general, especialmente útil para quienes practican deporte o enfrentan jornadas intensas. ❤️ Equilibrio hormonal: Contribuye a regular el sistema endocrino, siendo un aliado durante el síndrome premenstrual y la menopausia. 🔥 Aumento de la libido: Reconocida por su efecto afrodisíaco natural, mejora el deseo sexual en hombres y mujeres. 👶 Fertilidad: Estudios sugieren que puede favorecer la salud reproductiva. 🧘‍♂️ Bienestar emocional: Ayuda a reducir el estrés y la ansiedad gracias a sus propiedades adaptógenas. 🧠 Claridad mental: Favorece la concentración y el enfoque.Modo de uso: Tomar 1 a 2 cápsulas al día, preferentemente por la mañana o antes de actividades que requieran energía y enfoque.",
    imagen: "../img/com26.webp",
    categoria: "suplementos",
    marca: "COMPRIMIDOSN"
    },

]
