# **Apunts: Anàlisi Funcional i Diagramació Lògica**

L'anàlisi funcional és el pont entre els requeriments abstractes i el codi executable.1 Aquests apunts estan dissenyats per dominar la visualització de sistemes, optimitzar la comunicació i reduir errors en les fases inicials del desenvolupament.3

## ---

**1\. Fluxos Lògics i Interacció Frontend-Backend**

El flux lògic defineix com es comuniquen les parts del sistema abans de dissenyar funcionalitats.6

### **Components Bàsics (Patró Flux)**

Per gestionar dades de manera predictible, s'utilitza el flux unidireccional 3:

* **Accions (Actions):** Descripcions de "què ha passat" (clics, respostes d'API).3  
* **Dispatcher:** Controlador central que envia les accions als magatzems.3  
* **Stores:** Contenen l'estat i la lògica de negoci; no es modifiquen directament per la vista.3  
* **Vistes (Views):** Components de la interfície que reaccionen als canvis dels Stores.3

### **El Patró Backend for Frontend (BFF)**

Capa intermèdia que personalitza l'API per a cada client (mòbil, web, etc.) 9:

* **Traducció:** Transforma dades de microserveis per al frontend específic.9  
* **Filtratge:** Elimina dades innecessàries per optimitzar el rendiment.9  
* **Seguretat:** El flux ha de validar les dades tant al frontend (UX) com al backend (integritat).7

## ---

**2\. Sitemaps vs. User Journey Maps**

És crucial saber quan prioritzar l'estructura (Sitemap) sobre l'experiència (Journey Map) .

| Criteri | Sitemap (Mapa del lloc) | User Journey Map |
| :---- | :---- | :---- |
| **Definició** | Llista jeràrquica de pàgines i continguts 12 | Narrativa pas a pas de l'experiència de l'usuari |
| **Objectiu** | Organitzar l'arquitectura i el SEO 14 | Identificar emocions i punts de dolor |
| **Escenari** | Ideal per planificar la navegació o reorganitzar continguts | Ideal per optimitzar processos (ex: compra) o detectar fricció 15 |
| **Perspectiva** | Estàtica ("Vista d'ocell") 13 | Dinàmica (camí de A a B) |

## ---

**3\. UML vs. ERD: Modelatge de Lògica i Dades**

Tria l'eina correcta segons si dissenyes el comportament del sistema o l'estructura de la base de dades.2

### **UML (Unified Modeling Language)**

* **Propòsit:** Dissenyar el comportament i l'estructura del programari.2  
* **Diagrama de Seqüència:** Mostra interaccions cronològiques entre objectes (ex: flux d'autenticació).19  
* **Diagrama de Classes:** Defineix mètodes i atributs dels objectes de codi .

### **ERD (Entity-Relationship Diagram)**

* **Propòsit:** Dissenyar el model de dades per a bases de dades relacionals.22  
* **Elements:** Entitats (taules), atributs (camps) i relacions (1:N, M:N) amb claus primàries/estrangeres.10  
* **Diferència clau:** L'ERD és físic i persistent; l'UML és lògic i de comportament .

## ---

**4\. Eines de Diagramació: Visuals vs. Code-First**

| Tipus | Eines | Avantatges | Desavantatges |
| :---- | :---- | :---- | :---- |
| **Visual (GUI)** | Lucidchart, Draw.io, Miro, Excalidraw | Intuïtiu (drag-and-drop), ideal per a stakeholders 8 | Difícil control de versions (Git) 8 |
| **Code-First** | Mermaid.js, PlantUML | "Docs-as-code", versionat en Git, ràpid per a devs 26 | Corba d'aprenentatge (sintaxi), menys control estètic 26 |

## ---

**5\. User Flows i Detecció de Fricció**

Dissenya diagrames per anticipar problemes abans de codificar .

### **Components del Flowchart**

28

* **Oval:** Inici/Final del procés.  
* **Rectangle:** Tasca o acció.  
* **Diamant:** Decisió (Si/No).  
* **Paral·lelogram:** Entrada/Sortida de dades.

### **Tipus de Fricció a Detectar**

1. **Cognitiva:** Confusió per falta d'instruccions clares o càrrega mental alta .  
2. **D'Interacció:** Dificultats físiques a la interfície (ex: botons ocults) .  
3. **Emocional:** Frustració causada per errors repetitius o passos innecessaris .  
* **KPIs de validació:** Analitzar taxes d'abandonament (drop-off) i el temps per completar la tasca en el diagrama .

## ---

**6\. Selecció Crítica segons la Fase del Projecte**

| Fase | Diagrama Recomanat | Per què? |
| :---- | :---- | :---- |
| **Anàlisi** | Cas d'ús UML / User Journey | Per definir l'abast i entendre les necessitats de l'usuari.2 |
| **Arquitectura** | Sitemap / IA | Per organitzar la jerarquia de continguts.12 |
| **Disseny Tècnic** | ERD / Diagrama de Classes | Per establir com es guardaran les dades i s'estructurarà el codi.22 |
| **Desenvolupament** | Diagrama de Seqüència | Per detallar la comunicació tècnica (APIs) entre FE i BE.19 |

## ---

**7\. Validació i Documentació**

* **Filtre d'errors:** Utilitza diagrames per trobar "estats inabastables" o "deadlocks" .  
* **Integració:** Vincula diagrames amb especificacions escrites. El text explica el *perquè* (negoci) i el diagrama el *com* (tècnic).4  
* **Manteniment:** Tracta la documentació com a part viva del codi (docs-as-code) per evitar que quedi obsoleta.1

#### **Works cited**

1. Writing Better Technical Design Documents for Development Teams \- SCIMUS, accessed on April 14, 2026, [https://thescimus.com/blog/writing-better-technical-design-documents-for-development-teams/](https://thescimus.com/blog/writing-better-technical-design-documents-for-development-teams/)  
2. Difference between UML and ER diagram \- GeeksforGeeks, accessed on April 14, 2026, [https://www.geeksforgeeks.org/dbms/difference-between-uml-and-er-diagram/](https://www.geeksforgeeks.org/dbms/difference-between-uml-and-er-diagram/)  
3. Why Flux \- DEV Community, accessed on April 14, 2026, [https://dev.to/tomerbendavid/why-flux-4l81](https://dev.to/tomerbendavid/why-flux-4l81)  
4. Enhancing Technical Communication: The Power of Integrating Visual Documentation, accessed on April 14, 2026, [https://creately.com/guides/power-of-integrating-visual-documentation/](https://creately.com/guides/power-of-integrating-visual-documentation/)  
5. Schematic Design Phase: A Quick Guide for Projects \- Project Manager, accessed on April 14, 2026, [https://www.projectmanager.com/blog/schematic-design-phase](https://www.projectmanager.com/blog/schematic-design-phase)  
6. Understanding how code flows from front-end to back-end? \- Stack Overflow, accessed on April 14, 2026, [https://stackoverflow.com/questions/36484651/understanding-how-code-flows-from-front-end-to-back-end](https://stackoverflow.com/questions/36484651/understanding-how-code-flows-from-front-end-to-back-end)  
7. Deciding between logic on the front-end or back-end \- Software Engineering Stack Exchange, accessed on April 14, 2026, [https://softwareengineering.stackexchange.com/questions/453755/deciding-between-logic-on-the-front-end-or-back-end](https://softwareengineering.stackexchange.com/questions/453755/deciding-between-logic-on-the-front-end-or-back-end)  
8. 3 open-source diagram tools that are actually better than Lucidchart \- MakeUseOf, accessed on April 14, 2026, [https://www.makeuseof.com/open-source-diagram-tools-that-are-better-than-lucidchart/](https://www.makeuseof.com/open-source-diagram-tools-that-are-better-than-lucidchart/)  
9. Backend for Frontend | Cloud Adoption Patterns \- GitHub Pages, accessed on April 14, 2026, [https://kgb1001001.github.io/cloudadoptionpatterns/Microservices/Backend-For-Frontend/](https://kgb1001001.github.io/cloudadoptionpatterns/Microservices/Backend-For-Frontend/)  
10. UML vs. ER diagrams: A detailed comparison \- Gleek.io, accessed on April 14, 2026, [https://www.gleek.io/blog/uml-vs-erd](https://www.gleek.io/blog/uml-vs-erd)  
11. How to Solve a UX Friction Point: A Step-by-Step Guide \- Sprig, accessed on April 14, 2026, [https://sprig.com/blog/step-by-step-guide-to-fixing-ux-friction-points](https://sprig.com/blog/step-by-step-guide-to-fixing-ux-friction-points)  
12. User Flow vs Sitemap: How to Use Each to Optimize UX Design \- Slickplan, accessed on April 14, 2026, [https://slickplan.com/blog/user-flow-vs-sitemap](https://slickplan.com/blog/user-flow-vs-sitemap)  
13. Technical Diagrams Templates & Examples \- Miro, accessed on April 14, 2026, [https://miro.com/templates/technical-diagrams/](https://miro.com/templates/technical-diagrams/)  
14. Sitemap: Qué es, cómo hacerlo y ejemplos | Miro, accessed on April 14, 2026, [https://miro.com/es/diagrama/que-es-sitemap/](https://miro.com/es/diagrama/que-es-sitemap/)  
15. User Journey vs User Flow: Different Paths That Shape UX \- Slickplan, accessed on April 14, 2026, [https://slickplan.com/blog/user-journey-vs-user-flow](https://slickplan.com/blog/user-journey-vs-user-flow)  
16. 10 Technical Documentation Best Practices for 2025 \- Wonderment Apps, accessed on April 14, 2026, [https://www.wondermentapps.com/blog/technical-documentation-best-practices/](https://www.wondermentapps.com/blog/technical-documentation-best-practices/)  
17. Mermaid: AI-Powered Diagramming & Text-to-Chart Tool, accessed on April 14, 2026, [https://mermaid.ai/web/](https://mermaid.ai/web/)  
18. Using Diagrams in IT Documentation: Best Practices \- ClickHelp, accessed on April 14, 2026, [https://clickhelp.com/clickhelp-technical-writing-blog/using-diagrams-in-it-documentation-best-practices/](https://clickhelp.com/clickhelp-technical-writing-blog/using-diagrams-in-it-documentation-best-practices/)  
19. UML 2 Tutorial \- Sequence Diagram \- Sparx Systems, accessed on April 14, 2026, [https://sparxsystems.com/resources/tutorials/uml2/sequence-diagram.html](https://sparxsystems.com/resources/tutorials/uml2/sequence-diagram.html)  
20. Differences between a conceptual UML class diagram and an ERD? \- Stack Overflow, accessed on April 14, 2026, [https://stackoverflow.com/questions/4680231/differences-between-a-conceptual-uml-class-diagram-and-an-erd](https://stackoverflow.com/questions/4680231/differences-between-a-conceptual-uml-class-diagram-and-an-erd)  
21. Dive into the World of Mermaid JS: A Comprehensive Introduction \- Boardmix, accessed on April 14, 2026, [https://boardmix.com/reviews/mermaid-js/](https://boardmix.com/reviews/mermaid-js/)  
22. UML Vs. ERD: Key Differences Explained with Real-World Examples | Creately, accessed on April 14, 2026, [https://creately.com/guides/uml-vs-erd/](https://creately.com/guides/uml-vs-erd/)  
23. Understanding Sequence Diagrams: How to Visualize System Interactions for Product Development | by Hafiza Maham Ejaz | Medium, accessed on April 14, 2026, [https://medium.com/@ejazmaham10/understanding-sequence-diagrams-how-to-visualize-system-interactions-for-product-development-044e84a75ddc](https://medium.com/@ejazmaham10/understanding-sequence-diagrams-how-to-visualize-system-interactions-for-product-development-044e84a75ddc)  
24. The best alternatives to LucidChart for software architecture diagrams \- IcePanel, accessed on April 14, 2026, [https://icepanel.io/blog/2025-03-12-the-best-alternatives-to-lucidchart-for-software-architecture-diagrams](https://icepanel.io/blog/2025-03-12-the-best-alternatives-to-lucidchart-for-software-architecture-diagrams)  
25. Lucidchart vs. draw.io, accessed on April 14, 2026, [https://www.lucidchart.com/pages/lucidchart-vs-draw-io](https://www.lucidchart.com/pages/lucidchart-vs-draw-io)  
26. How to Use the Mermaid JavaScript Library to Create Flowcharts \- freeCodeCamp, accessed on April 14, 2026, [https://www.freecodecamp.org/news/use-mermaid-javascript-library-to-create-flowcharts/](https://www.freecodecamp.org/news/use-mermaid-javascript-library-to-create-flowcharts/)  
27. Mermaid Live Editor: Online FlowChart & Diagrams Editor, accessed on April 14, 2026, [https://mermaid-js.github.io/mermaid-live-editor/](https://mermaid-js.github.io/mermaid-live-editor/)  
28. Understanding Sequence Diagrams \- PlantText, accessed on April 14, 2026, [https://blog.planttext.com/2025/02/07/sequence-diagrams/](https://blog.planttext.com/2025/02/07/sequence-diagrams/)  
29. Diagrames de flux \- Programació \- Picuino, accessed on April 14, 2026, [https://www.picuino.com/ca/prog-flowchart.html](https://www.picuino.com/ca/prog-flowchart.html)  
30. accessed on January 1, 1970, [https://www.lucidchart.com/blog/how-to-use-visual-documentation-to-improve-collaboration-and-reduce-errors](https://www.lucidchart.com/blog/how-to-use-visual-documentation-to-improve-collaboration-and-reduce-errors)  
31. Difference between ERD (Entity-Relationship Diagram) and class diagram : r/devsarg, accessed on April 14, 2026, [https://www.reddit.com/r/devsarg/comments/1mpgpzm/diferencia\_entre\_derdiagrama\_entidad\_relacion\_y/?tl=en](https://www.reddit.com/r/devsarg/comments/1mpgpzm/diferencia_entre_derdiagrama_entidad_relacion_y/?tl=en)  
32. Effective Technical Diagrams, accessed on April 14, 2026, [https://serialized.net/2020/02/effective\_technical\_diagrams/](https://serialized.net/2020/02/effective_technical_diagrams/)  
33. How to Write an Integration Specification Document \- 2026 Guide \+ Template | Pandium, accessed on April 14, 2026, [https://www.pandium.com/blogs/what-to-include-in-an-integration-requirements-document-template-included](https://www.pandium.com/blogs/what-to-include-in-an-integration-requirements-document-template-included)  
34. 2025 Guide to Understand and Minimize User Friction \- Survicate, accessed on April 14, 2026, [https://survicate.com/blog/user-friction/](https://survicate.com/blog/user-friction/)