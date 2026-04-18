# **Compendi Teòric: Metodologies Àgils i Gestió de Projectes**

Aquest document estableix les bases teòriques del desenvolupament de programari modern, des del cicle de vida bàsic fins a la implementació detallada de marcs de treball com Scrum i XP.

## ---

**1\. El Cicle de Vida del Desenvolupament de Programari (SDLC)**

L'**SDLC** (*Software Development Life Cycle*) és el marc que defineix les fases per les quals passa un producte des de la seva concepció fins a la seva retirada.1

### **Fases Fonamentals**

1:

1. **Planificació i Anàlisi:** Definició de l'abast, viabilitat i requisits del sistema.  
2. **Disseny:** Arquitectura del sistema, disseny de base de dades i interfícies d'usuari (UI/UX).  
3. **Desenvolupament (Implementació):** Traducció del disseny en codi font.  
4. **Proves (Testing):** Verificació que el programari compleix els requisits i no té errors (bugs).  
5. **Desplegament:** Posada en producció de l'aplicació.  
6. **Manteniment:** Correcció d'errors detectats en l'ús real i implementació de millores.  
7. **Disposició:** Tancament segur i migració de dades al final de la vida útil.

## ---

**2\. Agile vs. Waterfall (Cascada)**

La principal diferència resideix en com s'aborda el canvi i el lliurament de valor.4

| Característica | Waterfall (Tradicional) | Agile (Modern) |
| :---- | :---- | :---- |
| **Enfocament** | Seqüencial i lineal. Cada fase ha d'acabar per començar la següent.5 | Iteratiu i incremental. Es treballa en cicles curts.6 |
| **Canvis** | Difícils i costosos un cop iniciat el projecte.5 | Benvinguts; s'adapta al feedback constant.8 |
| **Lliurament** | Un sol lliurament final al final del projecte.4 | Lliuraments freqüents de producte funcional (Increments).8 |
| **Rols** | Rígids i jeràrquics (Project Manager).7 | Autoorganitzats i col·laboratius.6 |

## ---

**3\. Fonaments del Manifest Àgil (2001)**

L'agilitat és una mentalitat definida per **4 valors** i **12 principis**.

### **Els 4 Valors Àgils :**

1. **Individus i interaccions** per sobre de processos i eines.  
2. **Programari que funciona** per sobre de documentació exhaustiva.  
3. **Col·laboració amb el client** per sobre de negociació de contractes.  
4. **Resposta al canvi** per sobre de seguir un pla.

### **Els 12 Principis Àgils (Resum) :**

* **Satisfacció del client** mitjançant lliuraments ràpids i continus.  
* **Acceptar canvis**, fins i tot tard en el desenvolupament.  
* **Lliurament freqüent** de programari (setmanes o mesos).  
* **Cooperació diària** entre l'equip de negoci i els desenvolupadors.  
* **Motivació:** Construir projectes al voltant de persones de confiança i recolzades.  
* **Conversa cara a cara** com el mètode de comunicació més efectiu.  
* **Mesura de progrés:** El programari que funciona és l'indicador principal.  
* **Sostenibilitat:** Mantenir un ritme constant de forma indefinida.  
* **Excel·lència tècnica** i bon disseny.  
* **Simplicitat:** Maximitzar la quantitat de feina "no feta".  
* **Autoorganització:** Les millors arquitectures sorgeixen d'equips autogestionats.  
* **Millora contínua:** Reflexió i ajust regular del comportament.

## ---

**4\. Scrum: Aprofundiment en el Marc de Treball**

Scrum és un marc de treball (*framework*) lleuger per resoldre problemes complexos. Es basa en l'**empirisme** (decisions basades en l'experiència) i el **pensament Lean** (reducció de residus).

### **Els 5 Valors de Scrum:**

1. **Compromís:** Amb els objectius i l'equip.  
2. **Focalització:** En el treball del Sprint i l'objectiu del producte.  
3. **Receptivitat:** Sobre el treball i els reptes.  
4. **Respecte:** Entre els membres de l'equip com a professionals independents.  
5. **Coratge:** Per fer el que és correcte i afrontar problemes difícils.

### **Els 3 Rols (Accountabilities):**

* **Product Owner (PO):** Maximitza el valor del producte. Gestiona el *Product Backlog* i és la veu del client.9  
* **Scrum Master:** Facilitador i "servent líder". Assegura que s'entén Scrum i elimina impediments per a l'equip.9  
* **Developers:** Professionals que creen l'increment de valor en cada Sprint. Són pluridisciplinaris i autogestionats.

### **Els 5 Esdeveniments:**

1. **El Sprint:** Contenidor de 1 a 4 setmanes on es crea l'increment.  
2. **Sprint Planning:** Es decideix QUÈ es farà i COM es farà en el proper Sprint.  
3. **Daily Scrum:** Reunió de 15 minuts per sincronitzar i ajustar el pla diari.  
4. **Sprint Review:** Es mostra el resultat del Sprint als *stakeholders* per rebre feedback.  
5. **Sprint Retrospective:** L'equip analitza com ha treballat i defineix millores per al següent cicle.

### **Els 3 Artefactes:**

1. **Product Backlog:** Llista ordenada de tot el que es necessita al producte.  
2. **Sprint Backlog:** Tasques seleccionades per al Sprint actual.  
3. **Increment:** La suma de tots els elements del backlog completats durant el Sprint.

## ---

**5\. Enginyeria de Requisits: Històries d'Usuari**

Una història d'usuari és una unitat mínima de valor, una "promesa de conversa" entre l'equip i el PO.11

### **La Regla de les 3 C:**

* **Card (Targeta):** Descripció escrita del desig de l'usuari.  
* **Conversation (Conversa):** Debat entre equip i PO per detallar el requisit.  
* **Confirmation (Confirmació):** Criteris d'acceptació que validen la feina.

### **Qualitat amb el mètode INVEST:**

* **I (Independent):** Es pot desenvolupar sense dependències d'altres històries.  
* **N (Negociable):** No és un contracte rígid; els detalls s'acorden parlant.  
* **V (Valuable):** Aporta un benefici clar al negoci o a l'usuari.  
* **E (Estimable):** L'equip en pot preveure l'esforç.  
* **S (Small):** Suficientment petita per acabar-la en un sol Sprint.  
* **T (Testable):** Es pot provar per saber si està acabada.

## ---

**6\. Qualitat i Verificació: DoD vs. Acceptance Criteria**

És vital distingir entre la qualitat global i la funcionalitat específica.

* **Acceptance Criteria (AC):** Condicions específiques que ha de complir una història concreta (ex: "El botó ha de ser blau").12  
* **Definition of Done (DoD):** Llista de control de qualitat que aplica a **totes** les tasques (ex: "Codi revisat, unit tests passats, documentació actualitzada").  
* **Definition of Ready (DoR):** Acord que indica que una història té prou detalls per poder començar a treballar-hi.

### **Sintaxi Gherkin (BDD)**

4:  
S'utilitza per definir escenaris de prova clars per a tothom.

* **Escenari:** \[Nom de la prova\]  
* **Donat (Given):** Context inicial.  
* **Quan (When):** Acció de l'usuari.  
* **Llavors (Then):** Resultat esperat.

## ---

**7\. Extreme Programming (XP)**

XP se centra en l'excel·lència tècnica per millorar la resposta al canvi.16

* **Pair Programming:** Redueix errors i transmet coneixement en temps real.18  
* **Test-Driven Development (TDD):** Escriure el test abans que el codi.16  
* **Continuous Integration (CI):** Integrar codi al tronc principal diverses vegades al dia per evitar conflictes.16  
* **Collective Ownership:** Qualsevol pot millorar qualsevol part del codi.16

## ---

**8\. Gestió i Priorització**

* **Kanban:** Visualització del flux de treball (To Do / In Progress / Done) i limitació del WIP (*Work In Progress*) per evitar colls d'ampolla.19  
* **MoSCoW:** Priorització per valor de negoci.  
  * **M**ust-have: Vital per al llançament.  
  * **S**hould-have: Important però no vital.  
  * **C**ould-have: Desitjable si hi ha temps.  
  * **W**on't-have: Fora d'abast ara mateix.  
* **Estimació (Story Points):** Ús de la seqüència de Fibonacci per mesurar complexitat relativa (Planning Poker) o tallatge de samarretes (XS, S, M, L, XL).

## ---

**9\. Professionalitat: Clean Code i Estructura**

L'organització del codi és una extensió de la metodologia.

* **Clean Code:** Codi fàcil de llegir, entendre i mantenir.  
* **Convencions (Naming):**  
  * **PascalCase:** Components i Classes.  
  * **camelCase:** Variables, funcions i hooks.  
  * **kebab-case:** Fitxers i carpetes.  
  * **SCREAMING\_SNAKE\_CASE:** Constants.  
* **Colocalització:** Mantenir el que canvia junt (test, estils i codi del mateix component) a prop per facilitar la navegació.

#### **Works cited**

1. El ciclo SDLC en 7 fases \- Viewnext.com, accessed on April 14, 2026, [https://www.viewnext.com/el-ciclo-sdlc-en-7-fases/](https://www.viewnext.com/el-ciclo-sdlc-en-7-fases/)  
2. How to Write Agile Software Requirement Specifications ..., accessed on April 14, 2026, [https://www.browserstack.com/guide/software-requirement-specifications-in-agile](https://www.browserstack.com/guide/software-requirement-specifications-in-agile)  
3. Part 1: Naming Conventions \- The Foundation of Clean Code \- DEV Community, accessed on April 14, 2026, [https://dev.to/sathishskdev/part-1-naming-conventions-the-foundation-of-clean-code-51ng](https://dev.to/sathishskdev/part-1-naming-conventions-the-foundation-of-clean-code-51ng)  
4. Cucumber & Gherkin — Guide with Mini Examples… | by Suseela Kalaval \- Medium, accessed on April 14, 2026, [https://medium.com/@suseela.qa19/cucumber-gherkin-guide-with-mini-examples-aa837b434040](https://medium.com/@suseela.qa19/cucumber-gherkin-guide-with-mini-examples-aa837b434040)  
5. Gherkin language Syntax Best Practices | TestQuality, accessed on April 14, 2026, [https://testquality.com/cucumber-and-gherkin-language-best-practices/](https://testquality.com/cucumber-and-gherkin-language-best-practices/)  
6. Achieving Clean Code: Conventions and Good Practices in Software Development, accessed on April 14, 2026, [https://namastedev.com/blog/achieving-clean-code-conventions-and-good-practices-in-software-development/](https://namastedev.com/blog/achieving-clean-code-conventions-and-good-practices-in-software-development/)  
7. Break Down Agile User Stories into Tasks and Estimate Level of ..., accessed on April 14, 2026, [https://www.pluralsight.com/resources/blog/guides/break-down-agile-user-stories-into-tasks-and-estimate-level-of-effort?utm\_source=chatgpt.com](https://www.pluralsight.com/resources/blog/guides/break-down-agile-user-stories-into-tasks-and-estimate-level-of-effort?utm_source=chatgpt.com)  
8. Best practices for frontend code consistency \- Bitloops, accessed on April 14, 2026, [https://bitloops.com/blog/best\_practices\_frontend\_code\_consistency](https://bitloops.com/blog/best_practices_frontend_code_consistency)  
9. Agile, Explained: Daily Standup Meetings \- YouTube, accessed on April 14, 2026, [https://www.youtube.com/watch?v=mANyczXTqOY](https://www.youtube.com/watch?v=mANyczXTqOY)  
10. Stand-up Meeting Best Practices: 8 Tips for a More Effective Standup | Catapult Labs, accessed on April 14, 2026, [https://www.catapultlabs.com/blog/8-tips-for-standup-meetings](https://www.catapultlabs.com/blog/8-tips-for-standup-meetings)  
11. HISTORIAS DE USUARIO \- Scrum Manager, accessed on April 14, 2026, [https://www.scrummanager.com/files/scrum\_manager\_historias\_usuario.pdf](https://www.scrummanager.com/files/scrum_manager_historias_usuario.pdf)  
12. How to Collaborate with Designers for Better Frontend Development \- SJ Innovation LLC, accessed on April 14, 2026, [https://sjinnovation.com/how-collaborate-designers-better-frontend-development](https://sjinnovation.com/how-collaborate-designers-better-frontend-development)  
13. Daily standups: Best practices for effective team communication | Plane Blog, accessed on April 14, 2026, [https://plane.so/blog/daily-standups-best-practices-for-effective-team-communication](https://plane.so/blog/daily-standups-best-practices-for-effective-team-communication)  
14. Front-end Naming , Structure Folder and Conventions | by Flik – Software Engineer (Critical Systems) | Medium, accessed on April 14, 2026, [https://medium.com/@mfflik/front-end-naming-structure-fconventions-27a3218444e6](https://medium.com/@mfflik/front-end-naming-structure-fconventions-27a3218444e6)  
15. BDD Basics: Gherkin Language and Rules for UI Scenarios \- JigNect, accessed on April 14, 2026, [https://jignect.tech/understanding-the-bdd-gherkin-language-main-rules-for-bdd-ui-scenarios/](https://jignect.tech/understanding-the-bdd-gherkin-language-main-rules-for-bdd-ui-scenarios/)  
16. Extreme Programming XP: Values, Practices & Rules Guide \[2026 ..., accessed on April 14, 2026, [https://asana.com/es/resources/extreme-programming-xp](https://asana.com/es/resources/extreme-programming-xp)  
17. What Is Gherkin \+ How Do You Write Gherkin Tests? \- Functionize, accessed on April 14, 2026, [https://www.functionize.com/blog/what-is-gherkin-how-do-you-write-gherkin-tests](https://www.functionize.com/blog/what-is-gherkin-how-do-you-write-gherkin-tests)  
18. The Ultimate Guide for UX Designers to Thrive in Agile Development \- Koru UX, accessed on April 14, 2026, [https://www.koruux.com/blog/ultimate-guide-for-ux-designers-agile-development/](https://www.koruux.com/blog/ultimate-guide-for-ux-designers-agile-development/)  
19. Daily Standup for Agile Marketing Teams \- Agile Sherpas, accessed on April 14, 2026, [https://www.agilesherpas.com/blog/daily-standup-agile-marketing](https://www.agilesherpas.com/blog/daily-standup-agile-marketing)  
20. Collaborative design in agile teams \- Atlassian, accessed on April 14, 2026, [https://www.atlassian.com/agile/design/collaborative-design-in-agile-teams-video](https://www.atlassian.com/agile/design/collaborative-design-in-agile-teams-video)