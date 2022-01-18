'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    return queryInterface.bulkInsert('personajes', [
       {
        nombre: 'Mickey Mouse',
        imagen: 'https://static.wikia.nocookie.net/disney/images/d/d8/MickeyMouse.png/revision/latest/scale-to-width-down/350?cb=20140304090828&path-prefix=es',
        edad: 93,
        peso: 25,
        historia: `es un personaje de dibujos animados y emblema de la compañía Disney. Creado el 18 de noviembre de 1928, este ratón tiene un origen disputado. La leyenda oficial explica que fue creado por Walt Disney durante un viaje en tren de vuelta a California tras descubrir que no poseía el copyright de Oswald, el conejo afortunado, por lo que concibió un ratoncito vivaz de orejas grandes que quiso llamar Mortimer. A Lilian, su esposa, le pareció un nombre demasiado pretencioso y le sugirió Mickey (según Bob Thomas la leyenda del nombre es ficticia y cita el caso de un personaje llamado Mortimer Mouse que nació en 1936, tío de Minnie Mouse).
                La versión más verosímil es que el personaje fue creado por el dibujante Ub Iwerks, a petición de Disney, para compensar la pérdida de los derechos de Oswald, el conejo afortunado, a manos de la Universal. Lo cierto es que Mickey no es más que una variación del personaje de Oswald. A Walt Disney hay que atribuirle tanto la voz del personaje (lo interpretó durante 17 años) como la personalidad y el carácter del ratón, sus animadores decían que el ratón tenía la misma personalidad de su creador.
                The Walt Disney Company celebra el cumpleaños de Mickey el 18 de noviembre de 1928, a raíz del estreno de Steamboat Willie, primer cortometraje sonoro de dibujos animados, y tercera aparición del ratón. Walt Disney prestó su voz al personaje desde 1929 hasta 1946, cuando fue sustituido por el técnico de sonido Jimmy MacDonald. Desde 1983 la voz es de Wayne Allwine. A lo largo de los años Mickey ha aparecido en dibujos animados, tiras cómicas, videojuegos y se ha convertido en el icono de la compañía Walt Disney.`,
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nombre: 'Pato Donald',
        imagen: 'https://static.wikia.nocookie.net/disney/images/6/6f/Donald_Duck.png/revision/latest?cb=20140427112158&path-prefix=es',
        edad: 91 ,
        peso: 35,
        historia: `La primera aparición de Donald fue en la animación Sinfonías tontas y La gallinita sabia, el 9 de junio de 1934 (aunque es mencionado en un libro de historias de Disney del año 1931). La apariencia que tenía Donald en esta animación, creada por Dick Lundy es similar a la que posee actualmente. Los colores son los mismos, al igual que la camisa marinera y la gorra, pero su aspecto físico era más estirado, su cuerpo más gordo y sus pies más grandes. La personalidad de Donald no estaba desarrollada todavía, en el corto, solo hacía el rol de amigo poco servicial. La voz del personaje, sin embargo (interpertada por Clarence Nash), ya estaba presente y se mantendría igual por 51 años, cuando falleció Nash. Su forma de hablar casi ininteligible se aferró en la mente de la audiencia, y lo ayudó en su ascenso al estrellato.
                  Ben Gillett, el director de La gallinita sabia, trajo al personaje de Donald nuevamente en el dibujo animado del Ratón Mickey The Orphan's Benefite el 11 de agosto de 1934.
                  Donald siguió siendo un éxito ente la audiencia. El personaje comenzó a aparecer en la mayoría de las animaciones del Ratón Mickey como una figura habitual de su grupo con Minnie, Goofy y Pluto. Los dibujos animados de este período, tales como El concierto de la banda de 1935 son aclamados por los expertos como películas ejemplares entre los clásicos de la animación.
                  Donald fue rediseñado en el año 1937 pasando a ser un poco más relleno, redondeado y bajo. También comenzó a aparecer en animaciones como el protagonista principal, el primero de los cuales fue el 9 de enero de 1937, en la animación 'Don Donald' del animador Ben Sharpstenn. En este corto aparece el personaje de Daisy (en ese momento llamada Donna), novia de Donald. Sus sobrinos Hugo, Paco y Luis (Jaimito, Juanito y Jorgito) hicieron su aparición animada un año más tarde, el 15 de abril de 1938 en la película Los sobrinos de Donald, dirigida por Jack King.
                  Durante la Segunda Guerra Mundial, la audiencia esperaba personajes más avasalladores. No es una coincidencia que la misma época que vio el nacimiento y crecimiento de Bugs Bunny también fue testigo del ascenso de popularidad del Pato Donald. Para el año 1949 Donald había superado en popularidad al Ratón Mickey, convirtiéndose en la estrella de Disney. Antes de 1941 ya había aparecido en 50 animaciones aproximadamente. Entre 1941 y 1965 Donald habría protagonizado más de 100. Muchos de los cortos de Donald durante el período de guerras fueron películas de propaganda, especialmente notable en Der Fuehrer's Face, Ganó el Premio Oscar en la categoría de cortos animados en 1943 con Der Fuehrer's Face. lanzada el 1 de enero de 1943. Otros cortos notables de este período incluyen los llamados 'cortos de la Armada' (Army shorts), seis películas que van siguiendo la vida de Donald en la Armada de Estados Unidos, desde su reclutamiento hasta su vida en un campamento bajo las órdenes del sargento Pete El Negro, pasando por su primer misión comando en donde tiene que sabotear una base aérea japonesa. Los títulos de esta serie incluyen:
                    Donald Gets Drafted (1 de mayo de 1942)
                    The Vanishing Private (25 de septiembre de 1942)
                    Sky Trooper (6 de noviembre de 1942)
                    Fall Out Fall In (23 de abril de 1943)
                    The Old Army Game (5 de noviembre de 1943)
                    Commando Duck (2 de junio de 1944)
                  Donald Gets Drafted también caracteriza al pato teniendo una examinación física antes de unirse a la armada. De acuerdo a esto, el Pato Donald tiene pie plano y es incapaz de distinguir entre el color azul y verde, lo cual es una especie de daltonismo. También en este dibujo animado el sargento Pete hace un comentario sobre la falta de disciplina de Donald.
                  Muchas de las animaciones de Donald hechas después de la guerra lo hacen el blanco de otros personajes fastidosos, lo que implica un cambio en el perfil de las películas desarrolladas hasta entonces. Donald es atacado, acosado y ridiculizado repetidamente por sus sobrinos, las ardillas (Chip y Chop), o por otros personajes de apariciones únicas como un oso o una colonia de hormigas. En efecto, los artistas de Disney habían revertido el clásico escenario confeccionado por Walter Lanz y otros en el que el personaje principal era el instigador de esta conducta acosadora más que el blanco de ellas. Sin embargo, al girar los papeles, los agresores de Donald aparecieron como crueles y sádicos, lo que dio resultados no muy divertidos para algunas animaciones, según las críticas.
                  El Donald de postguerra también protagonizó animaciones educativas, tales como El Pato Donald en la tierra de las matemáticas mágicas (1959) y formó parte de varios proyectos de Disney, como por ejemplo El dragón reacio (1941) y el espectáculo de televisión estadounidense Dysneylandia del año 1959.
                  Desde comienzos del siglo XXI, la voz de Donald es interpretada por Tony Anselmo, especialmente para las series animadas House of Mouse. `,
        createdAt: new Date(),
        updatedAt: new Date()
       },


       {
        nombre: 'Goofy',
        imagen: 'https://static.wikia.nocookie.net/disney/images/e/e5/Goofy.png/revision/latest?cb=20140306174418&path-prefix=es',
        edad: 91,
        peso: 40,
        historia: `Dippy Dawg, tal como fue llamado por los artistas de Walt Disney Studios por primera vez, era un miembro de la audiencia en el corto Mickey's Revue. Él molestaba constantemente a los demás espectadores por pelar y comer ruidosamente cacahuates y por reirse estrepitosamente, hasta que dos de ellos lo golpean con sus bolsos.
                  Esta primera versión de Goofy tiene otras diferencias más allá del nombre con el personaje que resultaría más tarde. En esta animación luce como un viejo, con barba blanca, la cola prominente y sin pantalones o ropa interior. Por otro lado, este corto ya contaba con la risa distintiva del personaje. Ella fue realizada por el actor vocal VAnce DeBar Colvig, más conocido como Pinto Colvig, quien haría la voz de este personaje hasta el año 1965.
                  Un Dippy Dawg considerablemente más joven apareció en "The Whoopee Party", el 17 de septiembre de 1932, como un invitado a la fiesta y amigo de Mickey y su pandilla. Dippy Dawg hizo en total 4 apariciones en 1932 y dos más en el año 1933, pero la mayoría de ellas fueron pequeñas. En su séptima aparición, en "The Orphan's Benefit" (cuya primera emisión fue el 11 de agosto de 1934) él obtuvo su nuevo nombre como Goofy y se convirtió en un miembro regular del grupo junto con Pato Donald, Clarabella y Horacio.
                  "Mickey's Service Station", dirigida por Ban Sharpsteen y estrenada el 16 de marzo de 1935 fue el primero de los cortos cómicos clásicos 'Mickey, Donald y Goofy'. Estas animaciones tenían al trío intentando colaborar entre ellos para llevar a cabo una cierta tarea que se les había asignado. Más adelante se separarían como personajes independientes. De esta forma cada corto alternaría la aparición de cada uno enfrentando distintas situaciones o problemas e intentando resolverlas, de acuerdo al estilo personal de cada personaje resultando en estilos de comedias diferentes. Pero al final de cada corto, los tres volvían a reunirse para compartir los frutos de sus esfuerzos, generalmente fracasados.
                  "Clock Cleaners", estrenada el 15 de octubre de 1937 y "Lonesome Ghosts", del 24 de diciembre de 1937 son generalmente consideradas lo más sobresaliente de estas series y clásicos animados. El último corto mencionado, con el trío como miembros de la agencia "Ajax Ghost Exterminators" por lo general es tomado como el antecesor de Los cazafantasmas. En él, ellos son contratados por teléfono para sacar a cierto número de fantasmas de una casa embrujada. Lo que ellos ignoran es que fueron los mismos fantasmas quienes llamaron; cuatro solitarios espectros que se encuentran aburridos porque nadie ha visitado la casa que ellos encantan desde hace largo tiempo. Ellos quieren hacerles algunas bromas a los mortales, y lo consiguen a través de una serie de ingeniosos chistes, pero al final, el trío se las arregla para expulsar a los fantasmas de la casa. Aquí Goofy da lo que es considerada la frase más memorable del corto, mientras mira cautelosamente a su alrededor: "Soy feroz, pero cuidadoso."
                  Progresivamente durante las series, la participación de Mickey se ve disminuida en favor de Donald y Goofy. La razón es simple: mientras que el fácilmente frustrado Donald y Goofy que siempre está en su propio mundo, Mickey parece actuar como el personaje sincero del trío, y progresivamente se vuelve más caballero y tranquilo. Los artistas de Disney encontraban que era más fácil hacer nuevos chistes para Goofy y Donald que para Mickey, hasta el punto que su rol se vuelve innecesario. "Polar Trappers", del 17 de junio de 1938 fue la primera animación en caracterizar a Donald y Goofy como dúo. El corto los muestra como compañeros y dueños de "Donald & Goofy Trapping Co.". Ellos están establecidos en el Ártico por un período indeterminado, para capturar morsas y llevarlas vivas a la civilización. Sus provisiones consisten en habas enlatadas. La trama alterna entre Goofy intentando poner trampas para las morsas y Donald tratando de capturar pingüinos para alimentarse. Ninguno de los dos consigue su tarea. Mickey retornaría en "The Whalers" el 19 de agosto de 1938, pero éste sería el último corto de la década de 1930 en mostrar a los tres personajes juntos.
                  Seguidamente, Goofy protagonizó su primera animación en "Goofy and Wilbur", dirigida por Dick Huemer, el 17 de marzo de 1939. El corto muestra a Goofy pescando con la ayuda de Wilbur, su mascota. Continúa haciendo animaciones como protagonista hasta el año 1953. En la mayoría de ellos aparece como un personaje tradicional, no particularmente goofy(tonto). Goofy adquirió el poder de convertirse en Super Goofy comiendo las super gramineas una planta de cacahuetes que crecía en su jardin `,
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nombre: 'Pluto',
        imagen: 'https://static.wikia.nocookie.net/disney/images/3/35/Pluto.png/revision/latest?cb=20140127172132&path-prefix=es',
        edad: 93,
        peso: 20,
        historia: `Pluto es un perro amarillo muy bien entrenado por su dueño Mickey Mouse. Él es el mejor amigo de Mickey y es muy leal a él desde que era un cachorro. Pluto odia a los gatos, por lo que su mayor rival es Fígaro, el gato de Minnie Mouse. Constantemente, los dos compiten por la atención y el amor de Minnie, aunque en realidad ellos son también muy amigos. Pluto también tiene un muy buen sentido del olfato, y según Mickey puede encontrar cualquier cosa que se proponga. En ocasiones puede ser torpe y inútil, cuando se pelea con personajes como Chip y Chop o la Foca Salty. Al igual que muchos personajes, Pluto tiene un diablo y un ángel. Pluto es muy enamoradizo y algunas perritas le han herido frecuentemente su corazón como Fifí, la Pekinés y Dinah, la Perrita Salchicha. A pesar de tener pequeños rivales, su mayor enemigo es Butch, el Bulldog. Pluto es famoso por ser el perro de Mickey, aunque también ha sido la mascota del Pato Donald y, ocasionalmente, la de Goofy, quien curiosamente, también es un perro. En el año 1942 se hizo una animación en la que se presentaba al hijo de Pluto, aunque no fue un personaje que se desarrollara mucho más. `,
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nombre: 'Minnie Mouse',
        imagen: 'https://static.wikia.nocookie.net/disney/images/1/14/MinnieMouse.png/revision/latest?cb=20140306174453&path-prefix=es',
        edad: 93,
        peso: 24,
        historia: `La Novia de Mickey
                    Minnie Mouse, eterna compañera sentimental de Mickey Mouse, es una ratona negra que viste falda, enaguas y tacones en la mayoría de los cortos. En cuanto a su aspecto físico, sufrió las mismas transformaciones que Mickey y algunas otras: paso de ojos negros a ojos con párpados, de blanco y negro a color, etc. En su primera aparición tan solo lucía una falda y sus enaguas, mientras que en el segundo corto The Gallopin' Gaucho ya usaba tacones y un sombrerito con una flor. Este atuendo lo usaría hasta que los ojos de Mickey y ella tuvieran párpados, y entonces Minnie usó un lazo en lugar del sombrero.
                    Matrimonio
                    Walt Disney dijo en una entrevista del año 1933: "In private life, Mickey is married to Minnie" (en español: "En su vida privada, Mickey está casado con Minnie"). Muchas personas le escribían a Disney preguntándole eso, ya que en algunas películas aparentaban estar casados y en otras no. Lo importante para las películas, es que Minnie es la mujer a su lado, tanto cuando se trata de historias en las que Mickey corteja a una chica, la cual siempre es Minnie, o en las que aparecen como un matrimonio. En la serie House of Mouse, Mickey menciona su aniversario con Minnie, lo que implica que están casados. `,
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nombre: 'Daisy',
        imagen: 'https://static.wikia.nocookie.net/disney/images/2/21/DaisyDuck.png/revision/latest?cb=20140306174526&path-prefix=es',
        edad: 91,
        peso: 24,
        historia: `Fue creada en 1920 como la contraparte femenina del Pato Donald y su debut fue en la animación "Mr. Duck Steps Out". Es una prima lejana de Donald. Hasta 1940 era llamada Donna Duck. Aunque es la novia de Donald, ocasionalmente tiene citas con Narciso Bello. Daisy tiene el temperamento de Donald, pero es un poco más sofisticada. Daisy es la tía de Juanito, Jorgito y Jaimito, ya que es hermana del esposo de Della. `,
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nombre: 'Hugo, Paco y Luis',
        imagen: 'https://static.wikia.nocookie.net/disney/images/3/38/Sobrinos.jpg/revision/latest?cb=20151229222233&path-prefix=es',
        edad: 85,
        peso: 15,
        historia: `Huey, Dewey y Louie (Juanito, Jaimito y Jorgito en España, llamados Hugo, Paco y Luis en Latinoamérica, y en Argentina Huguito, Dieguito y Luisito), también conocidos como los "Hermanos Duck", son un trío de patos protagonistas de dibujos animados e historietas publicadas por The Walt Disney Company.
                    Huey, Dewey y Louie (nombres originales en inglés), fueron creados por el guionista Ted Osborne y el dibujante Al Taliaferro, y su primera aparición fue el 17 de octubre de 1937 en la página dominical Donald Duck. Su primer corto animado fue Donald's Nephews (Los sobrinos de Donald), estrenado el 15 de abril de 1938.
                    Son hijos de la hermana menor del Pato Donald, Della Duck, y según el dibujante Don Rosa, de un hermano de Daisy. En el corto animado Donald's Nephews, la hermana de Donald, mencionada con el nombre de Dumbella, enviaba a sus tres hijos a visitar a su hermano sólo por un día. Sin embargo, en las historietas los trillizos se mudaban temporalmente con Donald hasta que su padre regresara del hospital (fue víctima de la explosión de un petardo que sus hijos pusieron bajo su silla). Luego de este episodio, tanto en las historietas como en los cortos animados, jamás se volvió a hacer referencia a sus padres, y finalmente Donald adoptó a sus sobrinos.
                    Inicialmente, los trillizos eran indistingibles entre sí, y fueron creados para actuar como un solo personaje. Esto se veía reflejado cuando uno de los hermanos comenzaba una oración y los otros dos completaban la idea como si compartieran un solo cerebro. Además de los colores rojo, azul y verde empleados en la vestimenta, también se usaron -indistintamente, según el criterio de cada artista- el amarillo, el naranja, el violeta y el negro. A partir de la serie animada de DuckTales, en 1987, comenzaron a utilizarse colores específicos en sus sombreros y ropa para una mejor identificación de los personajes: Juanito viste de rojo, Jaimito de azul y Jorgito de verde. `,
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nombre: 'Tío Rico',
        imagen: 'https://static.wikia.nocookie.net/disney/images/5/54/Scrooge_McDuck.png/revision/latest?cb=20160213151017&path-prefix=es',
        edad: 90,
        peso: 40,
        historia: `Su primera aparición fue en la historia "Chistmas on Bear Mountain", en diciembre de 1947. Él fue el primer miembro del Clan McPato en aparecer. Su aparición puede haberse basado en un personaje escocés anónimo y de aspecto similar del corto de propaganda de 1943 The Spirit of '43.
                    Barks experimentaría con la apariencia y personalidad del Tío Scrooge durante los siguientes cuatro años. Más tarde el dibujante declararía que originalmente sólo pensaba usar a Gilito para una sola aparición, pero luego decidió que podía resultar útil en otras historias.
                    Pronto fue establecido como un personaje recurrente y varias historias lo pusieron como protagonista al lado de Donald. Western Publishing fue la primera en pensar en McPato como un protagonista más que como un personaje secundario. Para 1952, Tío Scrooge tenía una revista para sí solo. Desde entonces, Barks produjo la mayoría de sus historias largas en Scrooge, con él como protagonista, focalizando en aventuras, mientras que la revista de diez páginas continuaba teniendo a Donald como protagonista y se centraba en lo cómico.
                    Scrooge McPato se convirtió en la figura principal de las historias mientras que Donald y sus sobrinos fueron llevados al rol de ayudantes, contratándolos como acompañantes que lo seguían en sus aventuras alrededor del mundo. Este cambio en el foco de atención desde Donald hacia scrooge se refejó también en las historias de otros creadores contemporáneos. Desde entonces, McPato se mantiene como la figura central de su "mundo", acuñándose el término "Universo del Tío Scrooge". `,
        createdAt: new Date(),
        updatedAt: new Date()
       },

       {
        nombre: 'Chip y Dale',
        imagen: 'https://static.wikia.nocookie.net/disney/images/6/6f/Chip.png/revision/latest?cb=20140215104012&path-prefix=es',
        edad: 70,
        peso: 10,
        historia: `El nombre que tienen es un juego de palabras basadas en el apellido "Chippendale".
                    Su debut fue en la animación "Private Pluto", en donde ellas hacen irritar a Pluto. En esta aparición aún no tenían nombre, pero cuando se muestran por segunda vez, ya son llamados Chip y Dale. En esta animación segunda molestan al Pato Donald.
                    Chip es la ardilla más inteligente, tiene la nariz negra y pequeña. Dale tiene la nariz roja y dientes grandes.
                    Chip y Chop emiten un unico sonido para comunicarse entre ellos. Ellos se pertenecen el uno a otro, pero su relacion es dudosa, ya que en su serie Chip decia que eran hermanos, amigos como duo dinamico como las 2 caras de la misma moneda.
                    Viven en el hueco de un árbol. A veces en el bosque, otras en el patio de la casa de Donald, y otras en el patio de la casa de `,
        createdAt: new Date(),
        updatedAt: new Date()
       }
     ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('personajes', null,{});
  }
};
