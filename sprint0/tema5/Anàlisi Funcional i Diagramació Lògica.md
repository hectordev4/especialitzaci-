# **Estratègies d'Anàlisi Funcional i Diagramació Lògica en l'Arquitectura de Programari: Un Manual de Referència per a la Planificació Eficient**

L'anàlisi funcional i la diagramació lògica no són meres etapes preliminars en el cicle de vida del desenvolupament de programari; constitueixen la infraestructura intel·lectual sobre la qual s'edifica qualsevol sistema complex. En un entorn on la interacció entre components frontal i de servidor (frontend i backend) s'ha tornat cada cop més intricada, la capacitat de transformar requeriments abstractes en representacions visuals estructurades és el que diferencia un projecte d'èxit d'un condemnat al deute tècnic i a la frustració de l'usuari.1 Aquest informe detalla de manera exhaustiva les metodologies, eines i processos necessaris per dominar la diagramació com un filtre d'errors i com a eina de comunicació universal entre els diversos interessats d'un projecte tecnològic.4

## **Fonaments del Flux Lògic i la Interacció de Capes en Sistemes Web**

El flux lògic d'una aplicació és el camí que segueixen les dades i les instruccions des que es genera una intenció a la interfície d'usuari fins que es processa a la base de dades i es retorna una resposta.7 Entendre aquesta comunicació és fonamental abans de dissenyar qualsevol funcionalitat, ja que la separació de responsabilitats entre el frontend i el backend determina no només l'eficiència del sistema, sinó també la seva seguretat i mantenibilitat.1

### **L'Arquitectura de Flux Unidireccional**

En el desenvolupament de frontends moderns, particularment amb tecnologies com React, s'ha imposat el patró de disseny conegut com a Flux, introduït per Facebook.1 Aquest patró sorgeix per resoldre els problemes de la comunicació bidireccional de dades, on els canvis en una part de la interfície podien provocar efectes secundaris imprevisibles en altres parts.1 La diagramació d'un flux lògic basat en Flux es fonamenta en quatre components clau que operen en un cicle constant i predictible:

* **Accions (Actions):** Són paquets d'informació que descriuen què ha passat al sistema. Poden originar-se per una interacció de l'usuari (un clic), un esdeveniment de xarxa (una resposta d'una API) o un temporitzador.1  
* **Dispatcher:** Actua com un controlador de trànsit centralitzat. Rebre totes les accions i les envia a tots els magatzems de dades (Stores) registrats.1  
* **Stores:** Contenen l'estat de l'aplicació i la lògica de negoci. A diferència d'un model tradicional, un Store no es modifica directament des de la vista, sinó que respon a les accions enviades pel Dispatcher.1  
* **Vistes (Views):** Són els components de la interfície que s'actualitzen quan els Stores emeten un esdeveniment de canvi. Les vistes també són responsables de disparar noves accions cap al Dispatcher.1

Aquest flux unidireccional facilita la depuració, ja que cada canvi d'estat es pot traçar fins a l'acció que el va originar, eliminant les dependències ocultes que solen causar errors en sistemes complexos.1

### **El Patró Backend for Frontend (BFF) i la Jerarquia de Comunicació**

Quan les aplicacions han de servir a múltiples clients (com una web d'escriptori, una aplicació mòbil nativa i una interfície de línia de comandes), la lògica de backend pot fragmentar-se.9 El patró "Backend for Frontend" (BFF) proposa la creació d'una capa intermèdia que actua com un Dispatcher o adaptador específic per a cada tipus de client.9

La diagramació d'un BFF ha de reflectir la seva funció com a filtre i traductor:

1. **Traducció:** El BFF rep dades dels microserveis de backend i les transforma en un format optimitzat per al frontend específic (per exemple, eliminant camps innecessaris per a una pantalla mòbil petita).9  
2. **Filtratge:** Permet reduir la quantitat de dades transmeses, millorant el rendiment en dispositius amb connexions limitades.9  
3. **Absència de lògica de negoci:** És una regla d'or que el BFF no contingui lògica de negoci pròpia; aquesta ha de residir en els microserveis de domini per ser compartida entre tots els clients.9

| Responsabilitat | Frontend (Client) | Backend (Servidor/BFF) |
| :---- | :---- | :---- |
| **Interacció** | Directa amb l'usuari final 2 | Indirecta mitjançant APIs i protocols 2 |
| **Validació** | Format i usabilitat (UX) 8 | Seguretat, regles de negoci i integritat 8 |
| **Tecnologies** | React, Vue, CSS, JavaScript 2 | Node.js, Python, Java, SQL, NoSQL 2 |
| **Gestió de l'Estat** | Estat local i de la interfície 1 | Persistència en bases de dades i memòria cau 2 |

### **Validació de Dades i Seguretat en el Flux Lògic**

Un component crític en la diagramació del flux frontend-backend és el punt de validació. Tot i que és temptador realitzar validacions només al frontend per oferir una resposta instantània a l'usuari, el flux lògic mai ha de confiar en una petició HTTP que arriba al servidor.8 Els diagrames han de mostrar clarament que les dades són validades de nou al backend per protegir el sistema contra usuaris malintencionats o errors de transmissió.8 La integració dels estàndards de seguretat, com l'OWASP Top 10, en la fase de diagramació funcional permet anticipar vulnerabilitats abans que s'escrigui la primera línia de codi.8

## **Arquitectura de la Informació: Sitemaps i Estructures Jeràrquiques**

Mentre que el flux lògic s'ocupa de la dinàmica de les dades, l'arquitectura de la informació (IA) se centra en l'organització, l'estructuració i l'etiquetatge del contingut.10 L'eina fonamental d'aquesta fase és el sitemap.

### **Propòsit i Tipologia dels Sitemaps**

Un sitemap és una representació visual de la jerarquia de pàgines d'un lloc web o aplicació.11 Proporciona una "visió a vista d'ocell" de tota l'estructura del sistema, facilitant la planificació de la navegació i la coherència arquitectònica.11

Es poden diferenciar dos tipus principals:

* **Sitemaps Visuals:** Utilitzats per equips de disseny i desenvolupament per definir com s'agrupen els continguts i com l'usuari es desplaça d'una secció a una altra.12  
* **Sitemaps XML:** Fitxers llegibles per màquines dissenyats per ajudar els motors de cerca a indexar el lloc web de manera eficient.11

### **El Procés de Disseny de l'Arquitectura de la Informació**

La creació d'un sitemap no és un acte intuïtiu, sinó el resultat d'una anàlisi profunda del model mental de l'usuari.10 Per aconseguir una IA robusta, s'utilitzen metodologies com:

1. **Card Sorting:** Una tècnica on els usuaris agrupen targetes amb conceptes segons la seva lògica personal. Això ajuda a decidir si una funcionalitat ha d'anar al menú "Configuració" o al de "Perfil".10  
2. **Tree Testing:** Una prova inversa on es demana als usuaris que trobin un element en una estructura jeràrquica sense disseny visual, validant si l'etiquetatge i la categorització són comprensibles.10  
3. **Inventari de Continguts:** Una llista detallada de tot el que apareixerà al sistema, que serveix com a base per al diagramat jeràrquic.10

### **Sitemap vs. User Journey: Diferenciació d'Escenaris**

És vital no confondre la jerarquia de continguts amb l'experiència de l'usuari. El sitemap és estàtic i estructural; l'user journey map és dinàmic i emocional.12 Un sitemap és indispensable quan el projecte requereix organitzar una gran quantitat d'informació o quan s'està reorganitzant un lloc web existent per millorar l'SEO.12 Per contra, l'user journey map es prioritza quan l'objectiu és optimitzar el procés de compra o identificar per què els usuaris abandonen l'onboarding.11

| Criteri | Sitemap (Mapa del lloc) | User Journey Map |
| :---- | :---- | :---- |
| **Objectiu** | Organització de la jerarquia i la navegació 11 | Narrativa de l'experiència i les emocions 10 |
| **Perspectiva** | Bird's-eye view (Visió des de dalt) 11 | Visió del "camí" de l'usuari (A a B) 11 |
| **Elements clau** | Pàgines, seccions, sub-pàgines 11 | Touchpoints, emocions, punts de dolor 10 |
| **Utilitat** | Planificació de continguts i SEO 11 | Detecció de fricció i millora de la satisfacció 14 |

## **El Viatge de l'Usuari i els Fluxos d'Interacció (User Flows)**

Per anticipar moviments de l'usuari i detectar punts de fricció abans de codificar, cal aprofundir en les metodologies que exploren el comportament humà davant de la interfície.

### **User Journey Maps: L'Empatia com a Eina Tècnica**

L'user journey map és una visualització pas a pas de la interacció de l'usuari amb un sistema per assolir un objectiu.10 A diferència d'un diagrama de flux purament lògic, aquest mapa integra la dimensió emocional.14 Inclou les expectatives de l'usuari abans d'interactuar, el seu nivell de satisfacció en cada punt de contacte i les oportunitats de millora detectades per l'equip.10

El component de "service blueprint" pot complementar l'user journey afegint la "línia de visibilitat", mostrant què passa al "frontstage" (visible per a l'usuari) i al "backstage" (processos interns de l'empresa o del servidor).10 Això és crucial per alinear l'experiència de l'usuari amb l'arquitectura tècnica real.10

### **User Flows: Diagrames de Decisió i Acció**

Mentre que el journey map és narratiu, l'user flow és operatiu. Se centra en el camí específic que segueix un usuari a través de pantalles i decisions per completar una tasca (com ara fer una compra o registrar-se).10

Un user flow eficaç ha d'incloure:

* **Punts d'entrada:** D'on ve l'usuari (cerca orgànica, correu, xarxes socials)? El context d'entrada canvia la seva familiaritat amb el sistema.17  
* **Passos lògics:** Representats amb rectangles, indiquen pantalles o accions simples.4  
* **Diamants de decisió:** Indiquen bifurcacions basades en accions de l'usuari o respostes del sistema (ex: PIN correcte vs. PIN incorrecte).4  
* **Punts d'aturada o terminals:** El final de la tasca, tant si és amb èxit com amb error.4

### **Detecció de Fricció abans del Codi**

L'ús d'aquests diagrames actua com un filtre per identificar errors de disseny de manera prematura. La fricció es pot classificar en tres tipus:

1. **Fricció Cognitiva:** Es produeix quan hi ha una discrepància entre el que l'usuari espera i el que el sistema demana, causant confusió o esforç mental innecessari.19  
2. **Fricció d'Interacció:** Dificultats en la pròpia interfície que impedeixen que el moviment sigui intuïtiu.19  
3. **Fricció Emocional:** Sentiments de frustració o estrès provocats per passos innecessaris o missatges d'error poc clars.19

Mitjançant l'anàlisi de "funnels" i drop-offs en els diagrames, els analistes poden predir on és més probable que un usuari abandoni la sessió.20 Si un procés de registre que hauria de trigar 30 segons requereix 5 minuts segons el diagrama de flux, s'ha detectat una fricció severa abans d'haver escrit una sola línia de codi.20

## **Modelatge de Sistemes: UML vs. ERD**

Quan passem de les necessitats de l'usuari a l'especificació tècnica, és essencial triar el llenguatge correcte per modelar la lògica del sistema o la persistència de les dades.

### **Unified Modeling Language (UML) per a la Lògica de Comportament**

UML és un conjunt estandarditzat de notacions que permet descriure tant l'estructura estàtica com el comportament dinàmic d'un programari orientat a objectes.21

Els diagrames UML clau inclouen:

* **Diagrama de Seqüència:** És l'eina definitiva per modelar la interacció frontend-backend.23 Mostra els objectes com a "línies de vida" i els missatges com a fletxes horitzontals, ordenats cronològicament de dalt a baix.24 És ideal per visualitzar processos complexos com l'autenticació, on intervenen múltiples serveis i bases de dades.27  
* **Diagrama de Classes:** Defineix l'estructura del codi, incloent atributs i mètodes. A diferència dels diagrames de dades, aquí es defineix *què fa* l'objecte (els seus missatges o funcions).22  
* **Diagrama de Casos d'Ús:** Ajuda a definir l'abast del sistema identificant els actors i les accions que poden realitzar des de fora del sistema.23

### **Entity-Relationship Diagrams (ERD) per al Disseny de Bases de Dades**

L'ERD és una eina específica per al disseny de bases de dades relacionals.21 Se centra exclusivament en com es guarden i es relacionen les dades, sense considerar el comportament o el temps.21

Components bàsics d'un ERD:

* **Entitats:** Taules que representen objectes del món real (Clients, Comandes).22  
* **Atributs:** Camps de cada taula (ID, Nom, Data).22  
* **Relacions:** Connexions físiques definides per cardinalitats (1:1, 1:N, M:N) i claus primàries o estrangeres.22

### **Diferències Crítiques i Selecció de l'Eina Correcta**

L'UML i l'ERD poden semblar similars visualment, però la seva semàntica és diferent. Un diagrama de classes UML representa la memòria activa del sistema i la seva funcionalitat, mentre que un ERD representa la persistència a llarg termini i les restriccions d'integritat de la base de dades.21

| Característica | Diagrama UML (Classes/Seqüència) | Diagrama ERD (Entitat-Relació) |
| :---- | :---- | :---- |
| **Objectiu** | Modelar estructura i comportament del codi 21 | Modelar l'estructura i relació de dades persistents 21 |
| **Focu** | Com interactuen els objectes en el temps 22 | Com s'emmagatzemen les dades a les taules 22 |
| **Elements** | Classes, Mètodes, Missatges, Actors 22 | Entitats, Atributs, Primary/Foreign Keys 22 |
| **Ús Principal** | Disseny d'aplicacions i lògica de negoci 21 | Disseny de bases de dades i arquitectura de dades 21 |

## **Eines de Diagramació: Visuals vs. Code-First**

La selecció de l'eina adequada pot optimitzar significativament el temps de desenvolupament, segons si es busca agilitat, col·laboració o integració amb el codi.32

### **Eines Visuals (GUI-First)**

Eines com **Lucidchart**, **Draw.io** (Diagrams.net), **Miro** o **Excalidraw** permeten crear diagrames mitjançant la manipulació d'elements gràfics (drag-and-drop).32

* **Escenaris d'ús:** Ideals per a sessions de brainstorming, validació de decisions amb stakeholders no tècnics i creació ràpida de prototips d'IA o sitemaps.30  
* **Avantatges:** Corba d'aprenentatge gairebé inexistent, molta flexibilitat estètica i capacitats de col·laboració en temps real.34  
* **Desavantatges:** El control de versions és més difícil (solen ser fitxers binaris o propietaris), i mantenir-los actualitzats quan el codi canvia pot ser tediós.32

### **Eines de Codi (Code-First / Markdown-Based)**

Eines com **Mermaid.js**, **PlantUML** o **WebSequenceDiagrams** utilitzen una sintaxi basada en text per generar visuals automàticament.32

* **Escenaris d'ús:** Documentació tècnica per a desenvolupadors, integració en fluxos de Git i automatització de la documentació de sistemes.37  
* **Avantatges:** Es poden guardar al repositori de codi (Docs-as-code), permeten un control de versions granular i són extremadament ràpids per a qui domina la sintaxi.37  
* **Desavantatges:** Menys control sobre el disseny final del layout (l'algoritme decideix la posició dels elements) i poden ser difícils de "llegir" visualment per a perfils de negoci si el script és molt llarg.37

| Eina | Tipus | Escala de Projecte | Fortalesa Principal |
| :---- | :---- | :---- | :---- |
| **Draw.io** | Visual | Petita/Mitjana 34 | Gratuït, integració amb Drive/OneDrive 32 |
| **Lucidchart** | Visual | Gran/Enterprise 34 | Automatització de dades i moltes integracions 34 |
| **Mermaid.js** | Code-first | Qualsevol (Docs-as-code) 37 | Integració nativa amb GitHub i Markdown 37 |
| **Miro** | Visual | Col·laboratiu/Equips 30 | Whiteboarding infinit i plantilles de taller 12 |

## **La Diagramació com a Filtre de Validació i Millora del Disseny**

Una de les funcions més infravalorades de la diagramació és la seva capacitat per actuar com un filtre lògic per identificar errors abans de la fase d'implementació.4

### **Identificació de Fluxos Trencats i Incompatibilitats**

Mitjançant l'anàlisi de diagrames de seqüència i estats, és possible detectar:

1. **Estats inabastables:** Accions que es defineixen però que cap flux de l'usuari permet activar.43  
2. **Deadlocks:** Situacions on el sistema espera una resposta del backend que mai arribarà o un bucle infinit en la interfície.43  
3. **Funcionalitats incompatibles:** Casos on un requeriment de negoci entra en conflicte directe amb una restricció tècnica (ex: una base de dades que no suporta relacions M:N sense una taula intermèdia que no s'ha diagramat).29

### **Aliniació entre User Journeys i Arquitectura Tècnica**

El diagrama de seqüència UML és el pont perfecte per assegurar la coherència. Si l'user journey map indica que l'usuari ha de veure les seves recomanacions personalitzades en la pantalla de benvinguda, el diagrama de seqüència ha de mostrar una crida des del frontend cap al servei de recomanacions de backend.14 Si aquesta crida no existeix en el diagrama tècnic, s'ha identificat una bretxa funcional que s'ha de resoldre abans de programar.5

L'ús de "safety monitors" i algorismes de detecció d'errors lògics sobre els propis diagrames permet automatitzar la validació de les especificacions.41 Per exemple, en sistemes crítics, s'utilitzen màquines d'estats finits per explorar totes les transicions possibles i assegurar que cap acció de l'usuari pugui deixar el sistema en un estat d'error o d'inseguretat.42

## **Integració en la Documentació Tècnica i Col·laboració**

La diagramació perd el seu valor si no s'integra correctament en la documentació del projecte i no s'utilitza com a base per a la discussió en equip.

### **Vincular Diagrames amb Especificacions Escrites**

Els diagrames han de complementar el text, no substituir-lo. Una bona pràctica és utilitzar el text per explicar el "perquè" (el context de negoci) i el diagrama per explicar el "com" (la implementació tècnica).3

* **Contextualització:** Cada diagrama ha de tenir un títol clar i referències creuades en el text (ex: "La Figura 2 mostra el flux d'autenticació descrit en el paràgraf anterior").5  
* **Llegendes:** És fonamental documentar el significat dels colors, formes o estils de línia si no segueixen l'estàndard estrictament.47

### **Estratègies de Col·laboració i Validació amb Stakeholders**

Els diagrames simplifiquen conceptes complexos, facilitant la comunicació amb perfils no tècnics (Product Managers, Clients, Màrqueting).3

1. **Discussió de requeriments:** Utilitzar sitemaps o casos d'ús UML per validar l'abast del projecte amb els stakeholders.13  
2. **Sincronització del disseny:** Els diagrames de classe permeten que els enginyers s'alineïn sobre la millor manera d'estructurar el codi seguint principis com SOLID.30  
3. **Gestió de canvis:** En un entorn Àgil, el sitemap i l'user flow han de ser "documents vius" que s'actualitzin després de cada sprint per reflectir l'estat actual del producte.5

## **Selecció Crítica segons la Fase del Projecte**

No tots els diagrames són necessaris alhora. El següent quadre resumeix quan aplicar cada eina per maximitzar l'impacte i minimitzar el sobreesforç documental.

| Fase del Projecte | Diagrama Recomanat | Propòsit Clau |
| :---- | :---- | :---- |
| **Arquitectura i Planificació** | Sitemap 11 | Organitzar jerarquia i contingut macro. |
| **Anàlisi i Definició** | Cas d'ús UML / User Journey 10 | Definir abast i experiència d'usuari. |
| **Disseny Tècnic** | Flux Lògic / ERD 4 | Establir comunicació FE-BE i estructura DB. |
| **Desenvolupament** | Diagrama de Seqüència 24 | Detallar crides d'API i ordre temporal de missatges. |
| **Prototipatge i Validació** | User Flow 10 | Identificar punts de fricció i errors de lògica. |
| **Operació i Manteniment** | Service Blueprint 10 | Entendre processos interns i suport. |

La transformació de requeriments funcionals en diagrames estructurats no només redueix el risc de errors costosos en les fases inicials, sinó que estableix una cultura de claredat i transparència en tot l'equip de desenvolupament.3 Dominar aquestes eines permet passar de ser un simple codificador a convertir-se en un arquitecte de solucions digitals robustes i escalables.

#### **Works cited**

1. Why Flux \- DEV Community, accessed on April 14, 2026, [https://dev.to/tomerbendavid/why-flux-4l81](https://dev.to/tomerbendavid/why-flux-4l81)  
2. Frontend vs Backend: Components, Difference & Collaboration | Ramotion, accessed on April 14, 2026, [https://www.ramotion.com/blog/frontend-vs-backend/](https://www.ramotion.com/blog/frontend-vs-backend/)  
3. Enhancing Technical Communication: The Power of Integrating Visual Documentation, accessed on April 14, 2026, [https://creately.com/guides/power-of-integrating-visual-documentation/](https://creately.com/guides/power-of-integrating-visual-documentation/)  
4. Diagrama de Flujo: Qué es, ejemplos y tipos \- Lucidchart, accessed on April 14, 2026, [https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo](https://www.lucidchart.com/pages/es/que-es-un-diagrama-de-flujo)  
5. Writing Better Technical Design Documents for Development Teams \- SCIMUS, accessed on April 14, 2026, [https://thescimus.com/blog/writing-better-technical-design-documents-for-development-teams/](https://thescimus.com/blog/writing-better-technical-design-documents-for-development-teams/)  
6. 9 Software Documentation Best Practices \+ Real Examples \- Atlassian, accessed on April 14, 2026, [https://www.atlassian.com/blog/loom/software-documentation-best-practices](https://www.atlassian.com/blog/loom/software-documentation-best-practices)  
7. Understanding how code flows from front-end to back-end? \- Stack Overflow, accessed on April 14, 2026, [https://stackoverflow.com/questions/36484651/understanding-how-code-flows-from-front-end-to-back-end](https://stackoverflow.com/questions/36484651/understanding-how-code-flows-from-front-end-to-back-end)  
8. Deciding between logic on the front-end or back-end \- Software Engineering Stack Exchange, accessed on April 14, 2026, [https://softwareengineering.stackexchange.com/questions/453755/deciding-between-logic-on-the-front-end-or-back-end](https://softwareengineering.stackexchange.com/questions/453755/deciding-between-logic-on-the-front-end-or-back-end)  
9. Backend for Frontend | Cloud Adoption Patterns \- GitHub Pages, accessed on April 14, 2026, [https://kgb1001001.github.io/cloudadoptionpatterns/Microservices/Backend-For-Frontend/](https://kgb1001001.github.io/cloudadoptionpatterns/Microservices/Backend-For-Frontend/)  
10. Design Toolkit, accessed on April 14, 2026, [https://design-toolkit.recursos.uoc.edu/](https://design-toolkit.recursos.uoc.edu/)  
11. User Flow vs Sitemap: How to Use Each to Optimize UX Design \- Slickplan, accessed on April 14, 2026, [https://slickplan.com/blog/user-flow-vs-sitemap](https://slickplan.com/blog/user-flow-vs-sitemap)  
12. Sitemap: Qué es, cómo hacerlo y ejemplos | Miro, accessed on April 14, 2026, [https://miro.com/es/diagrama/que-es-sitemap/](https://miro.com/es/diagrama/que-es-sitemap/)  
13. From concept to interface: Demystifying sitemaps and user flows in UX design \- Medium, accessed on April 14, 2026, [https://medium.com/design-bootcamp/from-concept-to-interface-demystifying-sitemaps-and-user-flows-in-ux-design-1467e99ae469](https://medium.com/design-bootcamp/from-concept-to-interface-demystifying-sitemaps-and-user-flows-in-ux-design-1467e99ae469)  
14. User Journey vs User Flow: Different Paths That Shape UX \- Slickplan, accessed on April 14, 2026, [https://slickplan.com/blog/user-journey-vs-user-flow](https://slickplan.com/blog/user-journey-vs-user-flow)  
15. How to Solve a UX Friction Point: A Step-by-Step Guide \- Sprig, accessed on April 14, 2026, [https://sprig.com/blog/step-by-step-guide-to-fixing-ux-friction-points](https://sprig.com/blog/step-by-step-guide-to-fixing-ux-friction-points)  
16. How to Write an Integration Specification Document \- 2026 Guide \+ Template | Pandium, accessed on April 14, 2026, [https://www.pandium.com/blogs/what-to-include-in-an-integration-requirements-document-template-included](https://www.pandium.com/blogs/what-to-include-in-an-integration-requirements-document-template-included)  
17. User flow diagrams – How to create them and examples \- Adobe for Business, accessed on April 14, 2026, [https://business.adobe.com/blog/basics/how-to-make-a-user-flow-diagram](https://business.adobe.com/blog/basics/how-to-make-a-user-flow-diagram)  
18. Diagrames de flux \- Programació \- Picuino, accessed on April 14, 2026, [https://www.picuino.com/ca/prog-flowchart.html](https://www.picuino.com/ca/prog-flowchart.html)  
19. 2025 Guide to Understand and Minimize User Friction \- Survicate, accessed on April 14, 2026, [https://survicate.com/blog/user-friction/](https://survicate.com/blog/user-friction/)  
20. How to Find Friction Points in Product Flows \- Decipher AI, accessed on April 14, 2026, [https://getdecipher.com/blog/how-to-find-friction-points-in-product-flows](https://getdecipher.com/blog/how-to-find-friction-points-in-product-flows)  
21. Difference between UML and ER diagram \- GeeksforGeeks, accessed on April 14, 2026, [https://www.geeksforgeeks.org/dbms/difference-between-uml-and-er-diagram/](https://www.geeksforgeeks.org/dbms/difference-between-uml-and-er-diagram/)  
22. UML Vs. ERD: Key Differences Explained with Real-World Examples | Creately, accessed on April 14, 2026, [https://creately.com/guides/uml-vs-erd/](https://creately.com/guides/uml-vs-erd/)  
23. UML vs. ER diagrams: A detailed comparison \- Gleek.io, accessed on April 14, 2026, [https://www.gleek.io/blog/uml-vs-erd](https://www.gleek.io/blog/uml-vs-erd)  
24. UML 2 Tutorial \- Sequence Diagram \- Sparx Systems, accessed on April 14, 2026, [https://sparxsystems.com/resources/tutorials/uml2/sequence-diagram.html](https://sparxsystems.com/resources/tutorials/uml2/sequence-diagram.html)  
25. Sequence Diagrams \- Unified Modeling Language (UML) \- GeeksforGeeks, accessed on April 14, 2026, [https://www.geeksforgeeks.org/system-design/unified-modeling-language-uml-sequence-diagrams/](https://www.geeksforgeeks.org/system-design/unified-modeling-language-uml-sequence-diagrams/)  
26. Sequence Diagram \- Visual Paradigm, accessed on April 14, 2026, [https://www.visual-paradigm.com/learning/handbooks/software-design-handbook/sequence-diagram.jsp](https://www.visual-paradigm.com/learning/handbooks/software-design-handbook/sequence-diagram.jsp)  
27. Understanding Sequence Diagrams \- PlantText, accessed on April 14, 2026, [https://blog.planttext.com/2025/02/07/sequence-diagrams/](https://blog.planttext.com/2025/02/07/sequence-diagrams/)  
28. Understanding Sequence Diagrams: How to Visualize System Interactions for Product Development | by Hafiza Maham Ejaz | Medium, accessed on April 14, 2026, [https://medium.com/@ejazmaham10/understanding-sequence-diagrams-how-to-visualize-system-interactions-for-product-development-044e84a75ddc](https://medium.com/@ejazmaham10/understanding-sequence-diagrams-how-to-visualize-system-interactions-for-product-development-044e84a75ddc)  
29. Difference between ERD (Entity-Relationship Diagram) and class diagram : r/devsarg, accessed on April 14, 2026, [https://www.reddit.com/r/devsarg/comments/1mpgpzm/diferencia\_entre\_derdiagrama\_entidad\_relacion\_y/?tl=en](https://www.reddit.com/r/devsarg/comments/1mpgpzm/diferencia_entre_derdiagrama_entidad_relacion_y/?tl=en)  
30. Technical Diagrams Templates & Examples \- Miro, accessed on April 14, 2026, [https://miro.com/templates/technical-diagrams/](https://miro.com/templates/technical-diagrams/)  
31. Differences between a conceptual UML class diagram and an ERD? \- Stack Overflow, accessed on April 14, 2026, [https://stackoverflow.com/questions/4680231/differences-between-a-conceptual-uml-class-diagram-and-an-erd](https://stackoverflow.com/questions/4680231/differences-between-a-conceptual-uml-class-diagram-and-an-erd)  
32. 3 open-source diagram tools that are actually better than Lucidchart \- MakeUseOf, accessed on April 14, 2026, [https://www.makeuseof.com/open-source-diagram-tools-that-are-better-than-lucidchart/](https://www.makeuseof.com/open-source-diagram-tools-that-are-better-than-lucidchart/)  
33. Best Diagramming Tools 2026: 10 Free Options Compared \- ConceptViz, accessed on April 14, 2026, [https://conceptviz.app/blog/best-free-diagram-software-comparison-guide](https://conceptviz.app/blog/best-free-diagram-software-comparison-guide)  
34. The best alternatives to LucidChart for software architecture diagrams \- IcePanel, accessed on April 14, 2026, [https://icepanel.io/blog/2025-03-12-the-best-alternatives-to-lucidchart-for-software-architecture-diagrams](https://icepanel.io/blog/2025-03-12-the-best-alternatives-to-lucidchart-for-software-architecture-diagrams)  
35. Lucidchart vs. draw.io, accessed on April 14, 2026, [https://www.lucidchart.com/pages/lucidchart-vs-draw-io](https://www.lucidchart.com/pages/lucidchart-vs-draw-io)  
36. Visual Programming: What It Is, Types, Pros & Cons (2026) \- WeWeb, accessed on April 14, 2026, [https://www.weweb.io/blog/visual-programming-what-it-is-types-pros-cons](https://www.weweb.io/blog/visual-programming-what-it-is-types-pros-cons)  
37. How to Use the Mermaid JavaScript Library to Create Flowcharts \- freeCodeCamp, accessed on April 14, 2026, [https://www.freecodecamp.org/news/use-mermaid-javascript-library-to-create-flowcharts/](https://www.freecodecamp.org/news/use-mermaid-javascript-library-to-create-flowcharts/)  
38. Dive into the World of Mermaid JS: A Comprehensive Introduction \- Boardmix, accessed on April 14, 2026, [https://boardmix.com/reviews/mermaid-js/](https://boardmix.com/reviews/mermaid-js/)  
39. Mermaid: AI-Powered Diagramming & Text-to-Chart Tool, accessed on April 14, 2026, [https://mermaid.ai/web/](https://mermaid.ai/web/)  
40. Mermaid Live Editor: Online FlowChart & Diagrams Editor, accessed on April 14, 2026, [https://mermaid-js.github.io/mermaid-live-editor/](https://mermaid-js.github.io/mermaid-live-editor/)  
41. Logic Error Detection System based on Structure Pattern and Error Degree, accessed on April 14, 2026, [https://www.astesj.com/v04/i05/p01/](https://www.astesj.com/v04/i05/p01/)  
42. Software Verification using State Diagrams \- Grenze Scientific Society, accessed on April 14, 2026, [https://thegrenze.com/pages/servej.php?fn=10\_1.pdf\&name=Software%20Verification%20using%20State%20Diagrams\&id=842\&association=GRENZE\&journal=GIJET\&year=2021\&volume=7\&issue=1](https://thegrenze.com/pages/servej.php?fn=10_1.pdf&name=Software+Verification+using+State+Diagrams&id=842&association=GRENZE&journal=GIJET&year=2021&volume=7&issue=1)  
43. Analyze Models for Design Errors \- MATLAB & Simulink \- MathWorks, accessed on April 14, 2026, [https://www.mathworks.com/help/sldv/ug/analyze-models-for-design-errors.html](https://www.mathworks.com/help/sldv/ug/analyze-models-for-design-errors.html)  
44. A beginner's guide to AnyLogic model errors, accessed on April 14, 2026, [https://www.anylogic.com/blog/a-beginner-s-guide-to-anylogic-model-errors/](https://www.anylogic.com/blog/a-beginner-s-guide-to-anylogic-model-errors/)  
45. Review of Software Model-Checking Techniques for Dealing with Error Detection in Program Codes \- Scirp.org., accessed on April 14, 2026, [https://www.scirp.org/journal/paperinformation?paperid=125885](https://www.scirp.org/journal/paperinformation?paperid=125885)  
46. accessed on January 1, 1970, [https://www.lucidchart.com/blog/how-to-use-visual-documentation-to-improve-collaboration-and-reduce-errors](https://www.lucidchart.com/blog/how-to-use-visual-documentation-to-improve-collaboration-and-reduce-errors)  
47. Effective Technical Diagrams, accessed on April 14, 2026, [https://serialized.net/2020/02/effective\_technical\_diagrams/](https://serialized.net/2020/02/effective_technical_diagrams/)  
48. Using Diagrams in IT Documentation: Best Practices \- ClickHelp, accessed on April 14, 2026, [https://clickhelp.com/clickhelp-technical-writing-blog/using-diagrams-in-it-documentation-best-practices/](https://clickhelp.com/clickhelp-technical-writing-blog/using-diagrams-in-it-documentation-best-practices/)  
49. 10 Technical Documentation Best Practices for 2025 \- Wonderment Apps, accessed on April 14, 2026, [https://www.wondermentapps.com/blog/technical-documentation-best-practices/](https://www.wondermentapps.com/blog/technical-documentation-best-practices/)  
50. Schematic Design Phase: A Quick Guide for Projects \- Project Manager, accessed on April 14, 2026, [https://www.projectmanager.com/blog/schematic-design-phase](https://www.projectmanager.com/blog/schematic-design-phase)