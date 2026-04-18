# **L'Ecosistema del Desenvolupament Modern: Arquitectures de Runtime, Gestió de Dependències i Entorns de Programació Intel·ligents**

L'evolució del desenvolupament de programari contemporani no pot entendre's sense analitzar la profunda transformació dels entorns d'execució, les eines de construcció i la integració de la intel·ligència artificial en el flux de treball diari del programador. Aquest informe detalla de manera exhaustiva els components que defineixen l'estat de l'art en la creació d'aplicacions, des de la robustesa asíncrona de Node.js fins a la velocitat disruptiva de Vite, passant per la personalització extrema de Visual Studio Code i l'assistència cognitiva de GitHub Copilot.

## **Arquitectura de Node.js: El Paradigma de l'Execució Asíncrona i No Bloquejant**

Node.js es defineix fonamentalment com un entorn d'execució de JavaScript de codi obert i multiplataforma que permet l'execució de codi al costat del servidor mitjançant el motor V8 de Google Chrome.1 Aquesta capacitat de traslladar JavaScript fora dels límits del navegador ha permès una convergència tecnològica on els desenvolupadors poden utilitzar un únic llenguatge per a tot l'espectre de l'aplicació.1 La característica més distintiva de Node.js és el seu model d'entrada/sortida (I/O) no bloquejant i dirigit per esdeveniments, el qual el fa extremadament lleuger i eficient per gestionar un volum elevat de connexions concurrents sense la necessitat de generar la sobrecàrrega de fils (threads) associada als servidors tradicionals.2

### **El Motor V8 i l'Abstracció de Libuv**

La potència de Node.js resideix en la seva arquitectura interna, construïda sobre el motor V8, que compila JavaScript directament a codi màquina mitjançant un procés de compilació Just-In-Time (JIT) per garantir un rendiment òptim.2 Tanmateix, la gestió de l'asincronia es deu a la biblioteca Libuv, una peça crucial que proporciona l'abstracció necessària per a operacions d'I/O asíncrones, el grup de fils (thread pool) i, sobretot, el bucle d'esdeveniments (event loop).2 Mentre que el motor V8 executa la lògica de JavaScript en un sol fil, Libuv permet delegar tasques pesades com la lectura de fitxers o les crides a xarxa al sistema operatiu o a fils de rerefons, assegurant que el fil principal mai es bloquegi.2

### **El Bucle d'Esdeveniments: Mecanismes i Fases**

El bucle d'esdeveniments és el cor de Node.js i el mecanisme que li permet gestionar milers de sol·licituds simultànies malgrat la seva naturalesa monofil.4 Aquest bucle opera mitjançant una sèrie de fases FIFO (First-In, First-Out), cadascuna amb la seva pròpia cua de rellamades (callbacks).5 L'ordre d'execució en aquestes fases és fonamental per predir el comportament de l'aplicació sota càrrega.

| Fase del Bucle d'Esdeveniments | Funció i Tipus d'Operacions | Descripció Detallada |
| :---- | :---- | :---- |
| **Timers** | Execució de rellamades programades. | Executa callbacks de setTimeout() i setInterval() un cop superat el llindar de temps especificat.5 |
| **Pending Callbacks** | Gestió d'operacions d'I/O pendents. | Executa rellamades per a operacions de sistema, com certs errors de TCP (ex: ECONNREFUSED).5 |
| **Idle, Prepare** | Ús intern del sistema. | Fase de manteniment intern que no interacciona directament amb el codi de l'usuari.2 |
| **Poll** | Recuperació de nous esdeveniments d'I/O. | Recupera nous esdeveniments i executa les seves rellamades. Pot bloquejar-se si la cua és buida i no hi ha timers pendents.5 |
| **Check** | Execució immediata. | Executa callbacks de setImmediate() després que la fase de Poll hagi finalitzat la seva tasca.5 |
| **Close Callbacks** | Tancament de recursos. | Gestiona l'emissió d'esdeveniments de tancament, com el d'un sòcol destruït abruptament (socket.on('close')).5 |

L'eficiència d'aquest model es manifesta especialment en aplicacions intensives en I/O, ja que Node.js no malbarata cicles de CPU esperant una resposta del sistema de fitxers o de la xarxa; simplement reprèn l'operació quan la resposta és llesta.1 En termes de rendiment asíncron, la gestió de les microtasques (com process.nextTick() i les Promeses) té una prioritat superior. Les rellamades de process.nextTick() es processen immediatament després de l'operació actual, abans que el bucle d'esdeveniments continuï cap a la següent fase, la qual cosa pot arribar a provocar la "inanició" (starvation) de l'I/O si s'utilitzen crides recursives de manera inadequada.5

## **Gestió de Paquets i Dependències: L'Estandardització del Flux de Treball**

En l'ecosistema de Node.js, la gestió de biblioteques externes és un pilar fonamental. npm (Node Package Manager) ha estat el gestor estàndard durant més d'una dècada, convertint-se en un dels repositoris de codi més grans del món.1 No obstant això, la complexitat dels projectes moderns ha portat a l'aparició de fitxers de bloqueig i gestors alternatius com pnpm o Yarn que busquen optimitzar el rendiment i l'espai en disc.8

### **El Manifest: package.json i les seves Configuracions**

El fitxer package.json actua com el manifest d'un projecte JavaScript. Conté metadades crucials com el nom, la versió i l'autor, però el seu valor resideix en la definició de les dependències i els scripts d'automatització.9 Un package.json ben configurat inclou:

* **name i version**: Identificadors essencials per a la publicació i el control de versions.10  
* **dependencies**: Llistat de paquets necessaris per a l'execució del programari en producció.10  
* **devDependencies**: Eines per a proves, compilació o linting que no es despleguen al servidor de producció.1  
* **scripts**: Comandaments CLI personalitzats que simplifiquen tasques complexes (ex: npm run build o npm start).1  
* **config i engines**: Especificacions sobre les versions de Node.js o paràmetres de configuració que el projecte requereix per funcionar correctament.10

### **El Rol Crític del package-lock.json**

Mentre que package.json permet l'ús de rangs de versions mitjançant el versionat semàntic (semver), el fitxer package-lock.json és el responsable de garantir que cada instal·lació sigui exactament igual a la resta.9 Aquest fitxer es genera automàticament i descriu l'arbre exacte de dependències instal·lat en un moment determinat, incloent-hi hashes d'integritat (SHA-512) i URLs de resolució.10

La importància de cometre el package-lock.json al control de versions és vital per a la integritat de l'equip de desenvolupament i dels sistemes d'integració contínua (CI).11 Sense aquest fitxer, una nova instal·lació podria descarregar una versió lleugerament diferent d'una subdependència que contingui un error, provocant discrepàncies entre entorns.10 A més, aquest fitxer optimitza la velocitat d'instal·lació, ja que npm pot saltar la resolució de metadades i anar directament a la descàrrega o a l'extracció de la memòria cau.10

### **Comparativa de Gestors de Paquets Moderns**

L'elecció del gestor de paquets pot influir dràsticament en la velocitat de compilació i l'eficiència del disc.

| Gestor | Estratègia d'Instal·lació | Estructura de node\_modules | Eficiència en Disc |
| :---- | :---- | :---- | :---- |
| **npm** | Seqüencial per defecte. | Plana (hoisted) per minimitzar duplicats.8 | Còpia física dels paquets en cada projecte.8 |
| **pnpm** | Paral·lela i optimitzada. | Basada en enllaços simbòlics (symlinks).8 | Emmagatzematge global (content-addressable); només descarrega les diferències.8 |
| **Yarn (PnP)** | Paral·lela. | Sense node\_modules (Plug'n'Play) via .pnp.cjs.8 | Evita la sobrecàrrega del sistema de fitxers.8 |

Gràcies a eines com **Corepack**, integrada en Node.js, els desenvolupadors poden ara definir el gestor de paquets desitjat directament en el package.json, assegurant que tots els membres de l'equip utilitzin la mateixa eina i versió sense necessitat d'instal·lacions globals manuals.8

## **Visual Studio Code: Personalització de la Interfície i Edició Avançada**

Visual Studio Code (VS Code) s'ha establert com l'editor de codi més utilitzat gràcies a la seva flexibilitat i potència.13 La seva interfície es basa en la "Barra d'Activitat" (Activity Bar), que permet alternar entre vistes com l'Explorador, el Control de Font i la Depuració, i un editor central altament configurable.13

### **Personalització de l'Entorn i Configuració**

L'usuari pot modificar gairebé qualsevol aspecte de VS Code mitjançant el fitxer settings.json o l'editor visual de configuracions.13 La personalització de temes és un dels seus trets distintius, permetent canviar colors de la interfície mitjançant la propietat workbench.colorCustomizations i el ressaltat sintàctic amb editor.tokenColorCustomizations.13 Això és especialment útil per a la fatiga visual o per diferenciar entorns de treball. A més, l'editor suporta la detecció automàtica de l'esquema de colors del sistema operatiu mitjançant la configuració window.autoDetectColorScheme.13

L'eficiència en l'edició s'aconsegueix amb les dreceres de teclat i la gestió de "scancodes", que permeten que les combinacions de tecles siguin independents de la disposició del teclat de l'usuari.13 Per a projectes complexos, VS Code permet configuracions de "Workspace", que s'emmagatzemen en una carpeta .vscode dins del projecte, assegurant que regles com el formatat automàtic o l'organització d'importacions siguin consistents per a tots els col·laboradors.13

### **IntelliSense i Code Actions**

IntelliSense és el terme que VS Code utilitza per a una suite de característiques que inclouen la compleció intel·ligent de codi, la informació de paràmetres i la informació ràpida (Quick Info).13 Aquestes funcions són alimentades per serveis de llenguatge que analitzen la semàntica del codi en temps real. Per exemple, en JavaScript, IntelliSense ofereix suggeriments basats en el tipus de dades i les biblioteques importades, permetent filtrar resultats mitjançant el filtratge CamelCase (ex: escriure "cra" per trobar createApplication).13

Les **Code Actions** (accions de codi) apareixen com una bombeta al costat d'una línia de codi i ofereixen refactoritzacions immediates o correccions d'errors comuns.13 En l'era de la IA, aquestes accions s'han vist potenciar, permetent delegar la implementació de comentaris TODO a agents de codi o generar documentació i proves unitàries automàticament mitjançant un clic dret sobre la funció desitjada.16

## **Depuració de Codi: Eines i Tècniques Professionals**

La depuració és una activitat central en el desenvolupament de programari, i VS Code ofereix una integració nativa per a JavaScript i Node.js que permet inspeccionar el comportament del codi sense dependre excessivament de console.log().13

### **El Procés de Depuració en VS Code**

El flux de treball de depuració comença sovint amb la configuració d'un fitxer launch.json, on es defineix si l'editor ha d'iniciar un nou procés o adjuntar-se (attach) a un procés ja existent.19 Una eina especialment eficaç per a Node.js és el "JavaScript Debug Terminal", que depura automàticament qualsevol script executat en ell, facilitant la transició entre el desenvolupament i la resolució d'errors.19

Per a una depuració profunda, l'editor disposa de:

* **Breakpoints (Punts de ruptura)**: Permeten pausar l'execució en línies específiques. Els punts de ruptura condicionals afegeixen una capa de control, pausant el codi només quan una expressió lògica es compleix (ex: quan una variable d'index és superior a 100).13  
* **Watch Expressions**: Situades a la vista de depuració, permeten monitorar l'evolució de variables o expressions complexes al llarg del temps.18 En les versions més recents, la IA de Copilot pot suggerir quines expressions vigilar basant-se en el context del bug que s'està intentant resoldre.21  
* **Call Stack (Pila de trucades)**: Proporciona una visió de les funcions que s'han cridat per arribar al punt de pausa actual, sent crucial per rastrejar l'origen de dades corruptes o fluxos d'execució inesperats.18  
* **QuickWatch**: Una finestra emergent que permet avaluar expressions ràpides sobre la marxa sense necessitat d'afegir-les permanentment a la llista de Watch.21

Un cop l'execució es pausa, el desenvolupador pot utilitzar la barra d'eines de depuració per realitzar operacions de "Step Over" (saltar la línia), "Step Into" (entrar a la funció) o "Step Out" (sortir de la funció actual), proporcionant un control total sobre l'ordre d'execució.13

## **Extensions de Qualitat i Productivitat: ESLint, Prettier i GitLens**

L'extensibilitat és el que converteix VS Code en un entorn de grau professional. Per mantenir una base de codi neta i coherent en entorns d'equip, és essencial la integració d'eines de linting i formatat.22

### **Manteniment de l'Estil i la Logica: ESLint i Prettier**

**ESLint** és una eina d'anàlisi estàtica que busca patrons problemàtics o codi que no segueix certes regles d'estil o seguretat.22 La seva configuració es pot automatitzar en VS Code perquè corregeixi errors comuns en desar el fitxer mitjançant la propietat editor.codeActionsOnSave.14 Per la seva banda, **Prettier** és un formatador de codi d'opinió fixa que s'encarrega de l'aparença visual (cometes, espais, punt i coma) per eliminar les discussions estètiques en les revisions de codi.23

La combinació ideal consisteix a utilitzar ESLint per a les regles de qualitat lògica i Prettier per al format visual, configurant VS Code per utilitzar Prettier com el formatador per defecte i ESLint per realitzar correccions automàtiques.25 Aquest enfocament garanteix que el codi comès al repositori sigui uniforme independentment de qui l'hagi escrit.24

### **Context i Història del Codi: GitLens**

**GitLens** és una extensió que "supercarrega" les capacitats de Git integrades a VS Code.23 Proporciona informació de "blame" en línia, mostrant qui va modificar una línia específica, en quin commit i amb quin missatge, directament a l'editor.23 Aquesta eina és inestimable per comprendre l'històric d'un fitxer, navegar per branques i remots sense sortir de l'editor, i visualitzar el flux de canvis mitjançant el "Git Graph".24

## **Vite: La Revolució en el Desenvolupament de Frontend**

Vite ha sorgit com la resposta moderna als problemes de lentitud dels empaquetadors (bundlers) tradicionals com Webpack.27 Creat per Evan You (també creador de Vue.js), Vite prioritza la velocitat de desenvolupament utilitzant les capacitats natives dels navegadors moderns.28

### **Arquitectura i Velocitat: ESM Natiu i Esbuild**

La innovació de Vite resideix en com gestiona el codi durant el desenvolupament. Mentre que les eines tradicionals han d'empaquetar tota l'aplicació abans de poder servir-la, Vite divideix el món en dues categories:

1. **Dependències**: Biblioteques de tercers que no canvien sovint. Vite les pre-empaqueta utilitzant esbuild, un empaquetador escrit en Go que és extremadament ràpid.28  
2. **Codi font**: El codi que el desenvolupador escriu. Vite el serveix directament al navegador utilitzant mòduls ES (ESM) natius.27 El navegador és l'encarregat de sol·licitar els mòduls a mesura que els necessita, fent que l'arrencada del servidor sigui gairebé instantània (menys de 200 ms fins i tot en projectes grans).28

### **Hot Module Replacement (HMR) Quirúrgic**

L'HMR és la capacitat de substituir un mòdul d'una aplicació en execució sense recarregar la pàgina completa.27 Gràcies a la seva arquitectura basada en ESM, l'HMR de Vite és extremadament ràpid (entre 10 i 20 ms), ja que només ha d'invalidar i tornar a sol·licitar el fitxer específic que ha estat modificat.28 Això permet als desenvolupadors veure els canvis en la interfície gairebé en temps real, mantenint l'estat de l'aplicació (com el text en un formulari o el scroll d'una llista).28

### **Configuració i Tipus d'Aplicacions**

Vite és agnòstic respecte al framework i suporta oficialment Vue, React, Preact, Lit, Svelte, Solid i Qwik.27 També és una excel·lent opció per a aplicacions de pàgina única (SPA), aplicacions multipàgina (MPA), generació de llocs estàtics i integracions amb renderització al costat del servidor (SSR).27

A l'hora de construir per a producció, Vite utilitza **Rolldown** (o Rollup en versions anteriors) per generar paquets altament optimitzats amb tècniques com el code splitting i el hashing de recursos per a una gestió de cache eficient.27

## **Variables d'Entorn i Modes a Vite**

La gestió de diferents entorns (desenvolupament, proves, producció) és una tasca crítica que Vite gestiona mitjançant el suport integrat per a fitxers .env i la utilitat dotenv.27

### **El Mecanisme de Seguretat VITE\_**

Vite protegeix la seguretat de l'aplicació en permetre l'accés només a aquelles variables d'entorn que comencen pel prefix VITE\_.27 Això evita que secrets sensibles del sistema (com claus de l'API de base de dades que s'utilitzen en el servidor) es filtrin al codi del client que corre al navegador de l'usuari.27

| Propietat de import.meta.env | Tipus | Descripció |
| :---- | :---- | :---- |
| **MODE** | string | El mode en què s'executa l'aplicació (ex: 'development', 'production').27 |
| **BASE\_URL** | string | La URL base des de la qual es serveix l'aplicació.27 |
| **PROD** | boolean | true si s'està executant en mode de producció.27 |
| **DEV** | boolean | true si s'està executant en mode de desenvolupament (invers de PROD).27 |
| **SSR** | boolean | true si l'aplicació s'executa al servidor (Server-Side Rendering).27 |

Les variables es defineixen en fitxers com .env (general), .env.local (local sense Git), o .env.\[mode\] (específic per a un mode).27 Quan s'executa el comandament de construcció, per exemple vite build \--mode staging, Vite carregarà les variables del fitxer .env.staging, permetent que l'aplicació es connecti a una API de proves en lloc de la de producció.27 És fonamental recordar que aquestes variables s'incrusten de manera estàtica en el codi durant la construcció, per la qual cosa qualsevol canvi en un fitxer .env requereix una re-compilació de l'aplicació.27

## **Integració del Control de Versions (Git) en VS Code**

VS Code ofereix una de les integracions més completes per a Git de manera nativa, facilitant la gestió del cicle de vida del codi sense dependre de la línia d'ordres per a les tasques comunes.33

### **Flux de Treball SCM (Source Control Management)**

La vista de Control de Font és el centre neuràlgic on el desenvolupador pot:

1. **Revisar canvis**: Mitjançant l'editor de diffs, es poden veure les diferències línia per línia entre la versió actual i l'anterior.33  
2. **Staging**: Permet seleccionar quins fitxers (o fins i tot quines línies específiques d'un fitxer) es volen incloure en el següent commit mitjançant l'icona "+".33  
3. **Commit**: Després d'introduir un missatge de commit, el canvi s'emmagatzema localment. La IA de Copilot pot assistir generant missatges de commit automàtics basats en els canvis realitzats.16  
4. **Sync**: El botó de sincronització a la barra d'estat permet realitzar operacions de "Pull" i "Push" simultàniament, mantenint el repositori local actualitzat amb el remot.33

A més de les operacions bàsiques, VS Code suporta funcions avançades com el tancament de branques, la resolució de conflictes de fusió (merge conflicts) mitjançant un editor de fusió de tres vies, i l'ús de "stashes" per desar temporalment canvis no finalitzats.33 L'extensió "GitHub Pull Requests and Issues" afegeix una capa addicional que permet gestionar PRs i tiquets directament des de l'editor, integrant el flux de col·laboració de GitHub de manera nativa.37

## **Intel·ligència Artificial al Flux de Treball: GitHub Copilot i Més Enllà**

La introducció de la IA en l'entorn de desenvolupament ha suposat el canvi de paradigma més gran des de l'aparició de l'IDE modern. GitHub Copilot, basat en models de llenguatge a gran escala, actua com un programador de parelles (pair programmer) que assisteix en temps real.39

### **Millors Pràctiques i Estratègies de Prompting**

Per treure el màxim profit de la IA, el desenvolupador ha d'adoptar certes estratègies:

* **Descomposició de Tasques**: Les peticions (prompts) funcionen millor quan es divideixen en passos petits i modulars.40 En lloc de demanar "crea un sistema d'autenticació", és més eficaç demanar primer la funció de validació de correu, després la de generació de hash de contrasenya, i finalment el controlador de login.40  
* **Context i Especificitat**: Proporcionar exemples d'entrada i sortida desitjats ajuda la IA a entendre les restriccions i el format esperat.39 Mantenir fitxers relacionats oberts a l'editor és crucial, ja que Copilot utilitza el context dels fitxers oberts per millorar la rellevància dels seus suggeriments.40  
* **Revisió Crítica**: El desenvolupador ha de tractar la sortida de la IA com un esborrany.40 És imperatiu revisar la seguretat (evitar secrets incrustats), la lògica i les possibles al·lucinacions del model abans d'acceptar el codi.39  
* **Iteració**: Si el primer suggeriment no és adequat, s'ha de refinar la resposta afegint correccions o noves restriccions en missatges de seguiment.40

### **Capacitats d'Assistència: Refactorització i Proves**

Copilot no només escriu codi nou; és una eina excepcional per a la refactorització.42 Pot suggerir maneres de simplificar una funció complexa, millorar la llegibilitat del codi llegat o afegir documentació automàtica (docstrings) a partir de la lògica existent.16 Així mateix, Copilot accelera la creació de proves unitàries identificant casos de vora i generant el codi de prova corresponent per a diversos marcs com Jest o Mocha.16

L'evolució cap als "Agents" (com el Copilot Cloud Agent) permet delegar tasques d'alt nivell. Aquests agents poden realitzar recerques semàntiques en tot el repositori per trobar on implementar un canvi, planejar la implementació i fins i tot crear una Pull Request de manera autònoma a partir de la descripció d'un tiquet.43

## **Conclusió: La Sinergia de l'Ecosistema Modern**

L'ecosistema de desenvolupament actual es defineix per la integració profunda d'eines que minimitzen la fricció entre la idea i l'execució. Node.js proporciona un fonament asíncron sòlid; la gestió de paquets moderna garanteix la reproductibilitat; VS Code ofereix un taller personalitzable i intel·ligent; Vite accelera el cicle de retroalimentació amb HMR gairebé instantani; i la IA actua com un multiplicador de força per a la productivitat.

L'èxit en aquest entorn no depèn només del coneixement del llenguatge, sinó de la mestria en la configuració i l'ús d'aquestes eines.28 La capacitat de navegar pel bucle d'esdeveniments per optimitzar el rendiment del servidor, de configurar correctament els modes de producció a Vite, i de guiar a la IA mitjançant prompts precisos són les habilitats que distingeixen el desenvolupador contemporani. A mesura que la tecnologia avança cap a agents més autònoms i eines de construcció encara més ràpides, el paper de l'expert humà es desplaça cap a l'arquitectura, la seguretat i la supervisió crítica, assegurant que la potència tecnològica es tradueixi en solucions robustes, escalables i mantenibles.

#### **Works cited**

1. Introduction to Node.js | Node.js Learn, accessed on April 13, 2026, [https://nodejs.org/en/learn/getting-started/introduction-to-nodejs](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)  
2. How Node.js Works Internally: A Deep Dive | by Vaibhav \- Medium, accessed on April 13, 2026, [https://medium.com/@gvaibhav864/how-node-js-works-internally-a-deep-dive-919154fef9c8](https://medium.com/@gvaibhav864/how-node-js-works-internally-a-deep-dive-919154fef9c8)  
3. Understanding Node.js: Event-Driven Architecture and Non-Blocking I/O Model, accessed on April 13, 2026, [https://dev.to/okrahul/understanding-nodejs-event-driven-architecture-and-non-blocking-io-model-3358](https://dev.to/okrahul/understanding-nodejs-event-driven-architecture-and-non-blocking-io-model-3358)  
4. Node.js Event Loop Deep Dive: How JavaScript Handles Concurrency \- NareshIT, accessed on April 13, 2026, [https://nareshit.com/blogs/nodejs-event-loop-deep-dive-javascript-concurrency](https://nareshit.com/blogs/nodejs-event-loop-deep-dive-javascript-concurrency)  
5. The Node.js Event Loop | Node.js Learn, accessed on April 13, 2026, [https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)  
6. Event Loop in Node.js | by Rahul Jindal \- Medium, accessed on April 13, 2026, [https://medium.com/@rahul.jindal57/event-loop-in-node-js-76edd2ff909d](https://medium.com/@rahul.jindal57/event-loop-in-node-js-76edd2ff909d)  
7. The Node.js Event Loop, accessed on April 13, 2026, [https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick](https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick)  
8. Package Managers Comparison: Yarn, NPM, PNPM | Cookielab, accessed on April 13, 2026, [https://www.cookielab.io/blog/package-managers-comparison-yarn-npm-pnpm](https://www.cookielab.io/blog/package-managers-comparison-yarn-npm-pnpm)  
9. Difference between package.json and package-lock.json \- Umar Farooque Khan \- Medium, accessed on April 13, 2026, [https://umarfarooquekhan.medium.com/difference-between-package-json-and-package-lock-json-6225f83f247c](https://umarfarooquekhan.medium.com/difference-between-package-json-and-package-lock-json-6225f83f247c)  
10. package-lock.json | npm Docs, accessed on April 13, 2026, [https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json](https://docs.npmjs.com/cli/v10/configuring-npm/package-lock-json)  
11. Difference between package.json and package-lock.json files \- GeeksforGeeks, accessed on April 13, 2026, [https://www.geeksforgeeks.org/node-js/difference-between-package-json-and-package-lock-json-files/](https://www.geeksforgeeks.org/node-js/difference-between-package-json-and-package-lock-json-files/)  
12. Understanding the Difference Between package.json and package-lock.json, accessed on April 13, 2026, [https://dev.to/vjygour/understanding-the-difference-between-packagejson-and-package-lockjson-1h67](https://dev.to/vjygour/understanding-the-difference-between-packagejson-and-package-lockjson-1h67)  
13. Tutorial: Get started with Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/getstarted/getting-started](https://code.visualstudio.com/docs/getstarted/getting-started)  
14. JavaScript in Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/languages/javascript\#\_linters-and-formatters](https://code.visualstudio.com/docs/languages/javascript#_linters-and-formatters)  
15. IntelliSense \- Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/editing/intellisense](https://code.visualstudio.com/docs/editing/intellisense)  
16. AI smart actions in Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/copilot/copilot-smart-actions](https://code.visualstudio.com/docs/copilot/copilot-smart-actions)  
17. Visual Studio 2026: How AI Is Transforming the Way Developers Code | Syncfusion Blogs, accessed on April 13, 2026, [https://www.syncfusion.com/blogs/post/whats-new-in-visual-studio-2026](https://www.syncfusion.com/blogs/post/whats-new-in-visual-studio-2026)  
18. JavaScript Debugging with VS Code and Chrome | Syncfusion Blogs, accessed on April 13, 2026, [https://www.syncfusion.com/blogs/post/javascript-debugging-vs-code-chrome](https://www.syncfusion.com/blogs/post/javascript-debugging-vs-code-chrome)  
19. Node.js debugging in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/nodejs/nodejs-debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)  
20. Debug C++ in Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/cpp/cpp-debug](https://code.visualstudio.com/docs/cpp/cpp-debug)  
21. Set a watch on variables and expressions \- Visual Studio (Windows) | Microsoft Learn, accessed on April 13, 2026, [https://learn.microsoft.com/en-us/visualstudio/debugger/watch-and-quickwatch-windows?view=visualstudio](https://learn.microsoft.com/en-us/visualstudio/debugger/watch-and-quickwatch-windows?view=visualstudio)  
22. How To Lint and Format Code with ESLint in Visual Studio Code \- DigitalOcean, accessed on April 13, 2026, [https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code)  
23. 13 Essential VS Code Extensions for 2025 \- Strapi, accessed on April 13, 2026, [https://strapi.io/blog/vs-code-extensions](https://strapi.io/blog/vs-code-extensions)  
24. Essential VS Code Extensions for Frontend Developers, accessed on April 13, 2026, [https://blog.openreplay.com/essential-vs-code-extensions/](https://blog.openreplay.com/essential-vs-code-extensions/)  
25. Seamless Teamwork in VS Code with ES Lint, Prettier and Git Lens \- DEV Community, accessed on April 13, 2026, [https://dev.to/mostafiz93/seamless-team-work-in-vs-code-with-es-lint-prettier-and-git-lens-360d](https://dev.to/mostafiz93/seamless-team-work-in-vs-code-with-es-lint-prettier-and-git-lens-360d)  
26. Top 6 VS Code Extension I'm Using in 2026 | by Henry Teh \- Medium, accessed on April 13, 2026, [https://medium.com/@tehenry/top-6-vs-code-extension-2026-0fea81eed285](https://medium.com/@tehenry/top-6-vs-code-extension-2026-0fea81eed285)  
27. Introducción | Vite, accessed on April 13, 2026, [https://es.vite.dev/guide/](https://es.vite.dev/guide/)  
28. What Is Vite? How Vite's ES Modules and HMR Improve Your Front-End Workflow \- Strapi, accessed on April 13, 2026, [https://strapi.io/blog/vite-es-modules-hmr-front-end-workflow](https://strapi.io/blog/vite-es-modules-hmr-front-end-workflow)  
29. Vite vs. Webpack: A Head-to-Head Comparison \- Kinsta®, accessed on April 13, 2026, [https://kinsta.com/blog/vite-vs-webpack/](https://kinsta.com/blog/vite-vs-webpack/)  
30. Vite vs Webpack in 2026: Which Should You Choose? | jsmanifest, accessed on April 13, 2026, [https://jsmanifest.com/vite-vs-webpack-2026](https://jsmanifest.com/vite-vs-webpack-2026)  
31. Compilación para producción | Vite, accessed on April 13, 2026, [https://es.vite.dev/guide/build.html](https://es.vite.dev/guide/build.html)  
32. Building for Production \- Exchange Web \- Mintlify, accessed on April 13, 2026, [https://www.mintlify.com/jogeshwar01/exchange-web/development/building](https://www.mintlify.com/jogeshwar01/exchange-web/development/building)  
33. Source Control in VS Code \- Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/sourcecontrol/overview](https://code.visualstudio.com/docs/sourcecontrol/overview)  
34. Git in Visual Studio Code, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Appendix-A:-Git-in-Other-Environments-Git-in-Visual-Studio-Code](https://git-scm.com/book/en/v2/Appendix-A:-Git-in-Other-Environments-Git-in-Visual-Studio-Code)  
35. Quickstart: use source control in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/sourcecontrol/quickstart](https://code.visualstudio.com/docs/sourcecontrol/quickstart)  
36. Version control in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/introvideos/versioncontrol](https://code.visualstudio.com/docs/introvideos/versioncontrol)  
37. Working with repositories and remotes \- Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/sourcecontrol/repos-remotes](https://code.visualstudio.com/docs/sourcecontrol/repos-remotes)  
38. Working with GitHub in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/sourcecontrol/github](https://code.visualstudio.com/docs/sourcecontrol/github)  
39. Best practices for using GitHub Copilot, accessed on April 13, 2026, [https://docs.github.com/en/copilot/get-started/best-practices](https://docs.github.com/en/copilot/get-started/best-practices)  
40. Best practices for using GitHub Copilot \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)  
41. Best practices for using AI in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/copilot/best-practices](https://code.visualstudio.com/docs/copilot/best-practices)  
42. Documenting and explaining legacy code with GitHub Copilot: Tips and examples, accessed on April 13, 2026, [https://github.blog/ai-and-ml/github-copilot/documenting-and-explaining-legacy-code-with-github-copilot-tips-and-examples/](https://github.blog/ai-and-ml/github-copilot/documenting-and-explaining-legacy-code-with-github-copilot-tips-and-examples/)  
43. Best practices for using GitHub Copilot to work on tasks, accessed on April 13, 2026, [https://docs.github.com/copilot/how-tos/agents/copilot-coding-agent/best-practices-for-using-copilot-to-work-on-tasks](https://docs.github.com/copilot/how-tos/agents/copilot-coding-agent/best-practices-for-using-copilot-to-work-on-tasks)  
44. January 2026 (version 1.109) \- Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/updates/v1\_109](https://code.visualstudio.com/updates/v1_109)