# **Arquitectura del Control de Versions i Ecosistemes de Col·laboració: Una Anàlisi Tècnica de Git i GitHub en l'Enginyeria de Programari Moderna**

El control de versions ha deixat de ser una mera utilitat per esdevenir el fonament epistemològic del desenvolupament de programari contemporani. La transició d'un model de desenvolupament lineal a un de distribuït i altament paral·lelitzat ha estat impulsada per la necessitat de gestionar la complexitat creixent del codi, la naturalesa global de les col·laboracions i la imperativa necessitat de traçabilitat absoluta en l'historial de canvis. En aquest context, Git s'erigeix com el sistema de control de versions distribuït (DVCS) dominant, mentre que GitHub s'ha consolidat com la infraestructura social i d'automatització que facilita la col·laboració a escala planetària. Aquesta anàlisi explora les profunditats tècniques de Git, des de la seva estructura interna de dades fins a les seves implementacions més sofisticades en entorns de producció, integrant les millors pràctiques d'automatització i intel·ligència artificial.

## **Fonaments del Control de Versions Distribuït i Diferenciació d'Ecosistemes**

La distinció entre Git i GitHub és un punt de partida crucial per entendre el flux de treball modern. Git és un motor de programari de línia d'ordres llançat sota la llicència GNU GPL, dissenyat per Linus Torvalds amb la premissa de la velocitat, la integritat de les dades i el suport per a fluxos de treball no lineals.1 Per contra, GitHub és un proveïdor d'allotjament basat en el núvol que ofereix una interfície gràfica d'usuari (GUI) i un conjunt d'eines de col·laboració que no formen part de Git per se, com ara la gestió d'incidències, les revisions de codi i l'automatització de desplegaments.1

Mentre que Git és la tecnologia que permet fer un seguiment de qui va canviar què i quan, GitHub és l'espai on aquests canvis es discuteixen, es validen i s'integren en el producte final. En un mercat on existeixen competidors com Mercurial o Subversion per a Git, i GitLab o Bitbucket per a GitHub, la combinació d'ambdós s'ha convertit en l'estàndard de facto de la indústria.1

| Característica | Git (DVCS) | GitHub (Platform) |
| :---- | :---- | :---- |
| **Rol** | Motor de control de versions | Plataforma de col·laboració i DevOps |
| **Interfície** | Línia d'ordres (CLI) i llibreries | Interfície web, desktop i API |
| **Funcionament** | Local i distribuït (p2p) | Centralitzat al núvol |
| **Llicència** | Open Source (GNU GPL) | Model de subscripció (Freemium/Paid) |
| **Gestió de Branques** | Creació i fusió de baix cost | Pull Requests i Branch Protection |
| **Automatització** | Git Hooks (local) | GitHub Actions (CI/CD) |

L'evidència suggereix que l'ús de sistemes distribuïts com Git permet als desenvolupadors treballar de forma independent sense dependre de la connectivitat a un servidor central per a operacions rutinàries com la visualització de l'historial o el canvi de branques, augmentant dràsticament la productivitat.2

## **Arquitectura Interna de Git: Snapshots i el Model d'Estats**

A diferència dels sistemes de control de versions anteriors que emmagatzemaven canvis delta sobre cada fitxer, Git utilitza un model basat en captures de pantalla o "snapshots".2 Cada vegada que es realitza un commit, Git captura l'estat actual de tots els fitxers del repositori. Per ser eficient, si un fitxer no ha canviat, Git no torna a emmagatzemar-lo, sinó que crea un enllaç al fitxer idèntic anterior que ja té emmagatzemat.2 Aquest disseny converteix Git en una sortida de mini-sistema de fitxers amb eines de versionat construïdes al damunt.2

La integritat de les dades en Git es manté mitjançant l'ús de sumes de verificació (checksums) calculades amb l'algoritme SHA-1.2 Aquest identificador de 40 caràcters hexadecimals representa l'estat exacte del contingut en un moment donat, fent impossible alterar el contingut d'un fitxer o directori sense que Git ho detecti immediatament.2

L'arquitectura de Git es divideix en tres àrees principals que defineixen el cicle de vida d'un canvi:

1. **Working Tree (Directori de Treball):** És la còpia d'una versió específica del projecte que es troba al disc de l'usuari per a ser editada.2  
2. **Staging Area (Àrea de Preparació o Index):** Un fitxer intermedi que conté la informació sobre quins canvis formaran part de la següent captura o commit.2 Aquesta àrea permet fer commits altament granulars i lògics, seleccionant només parts de les modificacions realitzades.6  
3. **Git Directory (Repositori):** On Git emmagatzema les metadades i la base de dades d'objectes del projecte.2 Aquest directori és el que es copia quan s'executa un procés de clonació.2

L'anàlisi de la relació entre aquestes àrees indica que el flux de treball fonamental consisteix a modificar fitxers al directori de treball, afegir-los selectivament a l'àrea de preparació mitjançant l'ordre git add i, finalment, enregistrar l'estat permanentment al repositori amb git commit.4

## **Configuració de l'Entorn i Gestió de la Identitat**

La implementació professional de Git requereix una configuració de l'entorn local que garanteixi l'atribució correcta dels canvis. Git utilitza l'eina git config per personalitzar el comportament del sistema, emmagatzemant els valors en tres llocs diferents que es sobreescriuen jeràrquicament: el fitxer del sistema (/etc/gitconfig), el fitxer de l'usuari (\~/.gitconfig) i el fitxer del repositori local (.git/config).7

L'establiment de la identitat (nom i correu electrònic) és el primer pas indispensable, ja que aquesta informació es "cuina" de forma immutable en cada commit.7 La recerca en entorns col·laboratius mostra que una configuració incorrecta del correu electrònic pot provocar problemes d'assignació d'autoria a GitHub, impedint que es comptabilitzin correctament les contribucions a l'usuari.9

| Nivell de Configuració | Àmbit d'Aplicació | Comanda d'Exemple |
| :---- | :---- | :---- |
| **System** (--system) | Tots els usuaris del sistema | git config \--system core.autocrlf true |
| **Global** (--global) | Tots els repositoris de l'usuari | git config \--global user.name "Mona Lisa" |
| **Local** (--local) | Repositori actual (per defecte) | git config user.email "project@dev.com" |

A més de la identitat, la configuració de l'editor de text per defecte (com VS Code, Vim o Nano) és vital, ja que Git el requerirà per escriure missatges de commit o gestionar fusions complexes.7 En projectes Node.js moderns, la integració amb eines com Corepack és cada cop més rellevant per assegurar que tots els membres de l'equip utilitzin la versió exacta del gestor de paquets definida al fitxer package.json, evitant així derives en les dependències que podrien causar errors de build.12

## **Gestió de Repositoris Locals: Inicialització i Inspecció de l'Historial**

Un projecte comença el seu recorregut en el control de versions mitjançant l'inicialització d'un repositori local amb git init.4 Aquesta operació crea la carpeta .git, que conté tota la història del projecte de manera comprimida i eficient.13 L'alternativa és la clonació d'un repositori existent mitjançant git clone, que no només descarrega els fitxers actuals, sinó que realitza una còpia completa de cada versió de cada fitxer de tota la història del projecte.4

La inspecció contínua de l'estat del repositori és possible gràcies a l'ordre git status, que permet diferenciar ràpidament entre fitxers no seguits (untracked), modificats i preparats (staged).5 Per a fluxos de treball àgils, l'ús de git status \-s o \--short ofereix una vista compacta de l'estat dels fitxers.

El seguiment de l'evolució del programari es realitza a través de git log. Aquesta comanda proporciona un registre cronològic de tots els commits, mostrant el SHA-1, l'autor, la data i el missatge.13 La personalització del log és una habilitat avançada que permet filtrar l'historial per temps (--since, \--until), per autor (--author) o per contingut de codi (-S), facilitant la localització de canvis específics en repositoris amb milers de commits.13

## **Semàntica dels Missatges de Commit: L'Estàndard Conventional Commits**

La comunicació efectiva a través de l'historial de versions s'aconsegueix mitjançant l'ús de missatges de commit estructurats. L'especificació **Conventional Commits** proporciona un marc de treball lleuger per crear un historial explícit, facilitant la creació d'eines automatitzades sobre el repositori.14 Segons aquest estàndard, un commit ha d'estar prefixat amb un tipus que descrigui la naturalesa del canvi.14

Aquesta estructura no només ajuda els humans a entendre el context, sinó que és fonamental per a l'automatització del versionat semàntic. Si un commit inclou el prefix feat:, indica la introducció d'una nova funcionalitat que hauria de disparar un increment en la versió "minor" del programari.15 Un commit amb fix: corregeix un bug i incrementa la versió "patch".15 Per contra, qualsevol commit que introdueixi un canvi que trenqui la compatibilitat (breaking change) ha d'incloure un signe d'exclamació (\!) o una nota específica al peu del missatge, forçant un canvi en la versió "major".15

| Tipus de Commit | Propòsit | Exemple |
| :---- | :---- | :---- |
| feat | Nova funcionalitat per a l'usuari final | feat(auth): add google sign-in |
| fix | Correcció d'un error en el codi | fix(api): handle null response |
| docs | Canvis només en la documentació | docs: update deployment steps |
| style | Canvis de format (espais, comes) | style: run prettier on source |
| refactor | Canvi que no fixa bug ni afegeix feature | refactor: simplify loop logic |
| perf | Millores en el rendiment del codi | perf: optimize database queries |
| test | Addició o correcció de tests | test: add unit tests for login |
| chore | Tasques de manteniment o eines | chore: update dependencies |

La pràctica de realitzar commits petits, freqüents i significatius permet un control de versions més granular i redueix el risc de pèrdua de dades en cas d'errors catastròfics, a més de facilitar les revisions de codi (code reviews).15

## **Ramificació i Estratègies de Branching: El Cor de la Paral·lelitat**

La ramificació en Git és una operació de baix cost ja que una branca és simplement un punter mòbil lleuger cap a un commit específic.19 Aquesta característica permet la creació de branques per a cada funcionalitat nova (feature branches), aïllant el treball en curs del codi estable en producció (main branch).21

L'adopció d'una estratègia de ramificació coherent és vital per a l'èxit de l'equip. Les organitzacions trien generalment entre diverses metodologies segons el seu cicle de llançament:

* **Git Flow:** Una estructura robusta que utilitza branques permanents (main, develop) i temporals (feature, release, hotfix), ideal per a projectes amb llançaments planificats.20  
* **GitHub Flow:** Una metodologia simplificada per al desplegament continu on tot el treball es realitza en branques de funcionalitat que es fusionen directament a main després de superar els tests i les revisions de codi.21  
* **Trunk-Based Development:** Una estratègia on els desenvolupadors integren els seus canvis en la branca principal diverses vegades al dia, minimitzant la vida de les branques paral·leles per reduir la complexitat de les fusions.21

| Tipus de Branca | Vida Útil | Propòsit |
| :---- | :---- | :---- |
| main | Permanent | Codi estable i en producció |
| develop | Permanent | Integració de funcionalitats en prova |
| feature/ | Temporal | Desenvolupament d'una característica nova |
| hotfix/ | Temporal | Correcció d'emergència en producció |
| release/ | Temporal | Estabilització de la versió abans del deploy |

L'ús de tags (etiquetes) complementa la ramificació en permetre marcar punts específics en l'historial com a fites importants, generalment per identificar versions de llançament (![][image1], ![][image2]) de manera que es pugui tornar a aquest punt exacte del temps sense dependre del moviment d'una branca.19

## **Sincronització amb Repositoris Remots i Treball en Equip**

La naturalesa distribuïda de Git implica que la col·laboració s'articula mitjançant el compartiment de dades entre repositoris locals i remots, generalment allotjats a GitHub. La vinculació es realitza mitjançant git remote add, creant un àlies (com origin) que apunta a la URL del servidor.4

La sincronització es realitza mitjançant tres operacions bàsiques:

1. **Push:** Pujar els commits locals al servidor remot. Git bloquejarà el push si el repositori remot conté commits que no estan en el local, obligant a l'usuari a integrar primer el treball dels altres.4  
2. **Fetch:** Descarregar les dades del servidor remot al repositori local sense modificar el directori de treball. És l'operació més segura per veure què han fet els col·legues abans d'integrar-ho.24  
3. **Pull:** Una combinació de fetch i merge. Descarrega les dades i intenta fusionar-les automàticament en la branca actual.24

L'evidència tècnica suggereix que els desenvolupadors experimentats prefereixen el flux fetch seguit de merge o rebase manual, ja que permet una major visibilitat dels canvis entrants i redueix el risc de fusions accidentals incorrectes.26 El concepte de "remote-tracking branches" actua com un pont, indicant on es troba la branca del servidor respecte a la local (p.e., origin/main).25

## **Fusions i Resolució de Conflictes: Teoria i Pràctica**

La fusió (merge) de branques és el mecanisme per reintegrar el codi. Quan no hi ha divergència (la branca base no ha avançat), Git realitza un "fast-forward", simplement movent el punter cap endavant.29 Quan les històries han divergit, Git realitza una fusió de tres vies (three-way merge), creant un nou commit de fusió que té dos pares.29

Els conflictes de fusió es produeixen quan s'han modificat les mateixes línies de codi de manera diferent en les dues branques que es volen unir.30 En aquest estat, Git pausa la fusió i marca els conflictes al codi font utilitzant els delimitadors \<\<\<\<\<\<\<, \======= i \>\>\>\>\>\>\>.30

| Marcador de Conflicte | Significat |
| :---- | :---- |
| \<\<\<\<\<\<\< HEAD | Inici dels canvis de la teva branca actual |
| \======= | Divisor entre els canvis locals i els entrants |
| \>\>\>\>\>\>\> \[nom-branca\] | Final dels canvis de la branca que estàs fusionant |

La resolució manual de conflictes implica editar el fitxer per triar la versió correcta, eliminar els marcadors i marcar el fitxer com a resolt amb git add.30 Les eines modernes com el "3-way merge editor" de Visual Studio Code proporcionen una interfície gràfica on es pot veure la versió local, la remota i el resultat final de forma simultània, reduint la càrrega cognitiva del procés.31 Una estratègia defensiva recomanada és realitzar el merge en un estat net (sense canvis sense commit) i utilitzar git merge \--abort si el conflicte és massa complex per ser resolt en aquell moment.31

## **El Flux de Treball de GitHub: Forks i Pull Requests**

Mentre que Git gestiona la història del codi, GitHub gestiona la logística de la contribució. El model de **Forking Workflow** és l'estàndard per a contribucions a projectes on no es té accés d'escriptura directe.34 Un "fork" és una còpia completa del repositori al compte personal de l'usuari, que permet experimentar sense risc per al projecte original.35

El **Pull Request (PR)** és la petició formal per integrar els canvis del fork o de la feature branch al repositori principal.34 Aquesta sol·licitud obre un espai de revisió on l'equip pot:

* Discutir l'enfocament tècnic.34  
* Realitzar comentaris línia per línia al codi proposat.34  
* Executar tests automàtics per assegurar que no hi ha regressions.34  
* Aprovar la proposta o demanar canvis abans de la fusió final.34

Les dades de rendiment en enginyeria de programari indiquen que els PRs més efectius són aquells de mida reduïda (preferiblement menys de 400 línies de codi) i que compten amb una descripció clara que expliqui el "perquè" del canvi en lloc del "com".18

## **Protocols de Revisió de Codi i Treball en Equip**

La revisió de codi és un procés tant tècnic com social. El seu objectiu principal no és només trobar errors, sinó compartir coneixement entre els membres de l'equip i mantenir un nivell de qualitat i estil consistent en tot el repositori.37 GitHub permet automatitzar part d'aquest procés mitjançant el fitxer CODEOWNERS, que assigna automàticament revisors segons quins fitxers han estat modificats.37

Principis per a revisions de codi efectives:

* **Empatia i Respecte:** Els comentaris han de ser constructius i centrats en el codi, no en la persona. L'ús de llenguatge positiu i suggeriments en lloc d'ordres imperatives millora la col·laboració.38  
* **Rapidesa en la Resposta:** Les revisions han de ser una prioritat per evitar que els desenvolupadors es quedin bloquejats o hagin de fer canvis de context constants.18 Els equips "elit" solen completar les revisions en menys de 6 hores.18  
* **Criteris Clars:** És fonamental centrar-se en la funcionalitat, el disseny, la complexitat, els tests i la consistència de nom.39 Les qüestions purament estètiques (espais, format) haurien de ser delegades a eines de formatat automàtic per no saturar el diàleg humà.39

| Rol | Responsabilitats |
| :---- | :---- |
| **Autor** | Proporcionar context, passar tests abans de demanar review, mantenir el PR petit |
| **Revisor** | Entendre el problema abans de mirar la solució, donar feedback accionable |
| **Integrador** | Validar que el PR compleix les polítiques de la branca i realitzar la fusió final |

En entorns de seguretat crítica, les "Branch Protection Rules" de GitHub poden forçar que cap canvi s'integri sense almenys una aprovació o sense que tots els comentaris del PR hagin estat marcats com a resolts.37

## **Gestió Integral de Projectes: Issues, Milestones i Projects**

L'ecosistema de GitHub ofereix eines que connecten el codi amb la gestió de producte. **GitHub Issues** serveix com el sistema de seguiment de tasques integrat, permetent utilitzar Markdown per descriure problemes, afegir captures de pantalla i mencionar col·laboradors (@mentions).42

Per a projectes complexos, la jerarquia s'amplia amb:

* **Sub-issues:** Permeten desglossar tasques grans en components més petits i manejables, facilitant el treball en paral·lel.42  
* **Milestones (Fites):** Agrupen incidències i PRs al voltant d'un objectiu temporal o de producte, oferint una visió clara del progrés cap a una data de lliurament específica.42  
* **GitHub Projects:** Taulers tipus Kanban o Roadmap que permeten visualitzar el flux de treball de múltiples repositoris. A diferència dels milestones, els projectes poden incloure "draft issues" (idees que encara no són tasques) i camps personalitzats per fer seguiment de story points o prioritats.42

Aquesta integració directa entre la planificació i el codi redueix el que s'anomena "friction" o fricció del desenvolupador, ja que tota la informació necessària per completar una tasca es troba en un mateix entorn accessible.43

## **Automatització amb GitHub Actions: CI/CD i DevOps**

L'automatització és el component que permet escalar el desenvolupament de programari amb seguretat. **GitHub Actions** és la plataforma de CI/CD nativa que executa fluxos de treball basats en esdeveniments del repositori.48 Un flux de treball (workflow) es defineix en un fitxer YAML i pot contenir diversos "jobs" que s'executen en paral·lel o seqüencialment sobre "runners" (servidors virtuals de Linux, macOS o Windows).48

Conceptes clau d'Actions:

* **Events:** Accions que disparen el workflow (p.e., push, pull\_request, schedule).48  
* **Steps:** Tasques individuals dins d'un job, com instal·lar dependències, executar linters o llançar la suite de tests.48  
* **Matrix Strategy:** Permet executar el mateix job en múltiples configuracions simultàniament (p.e., provar el codi en 3 versions diferents de Node.js i 2 sistemes operatius).48  
* **Caching:** Emmagatzema fitxers que no canvien sovint (com node\_modules) per accelerar els temps d'execució en futures invocacions.49

L'adopció d'Integració Contínua (CI) garanteix que cada canvi introduït es munti i es provi automàticament, reduint dràsticament el temps necessari per detectar errors d'integració.51 El Desplegament Contínu (CD) va un pas més enllà, automatitzant el lliurament del codi provat als entorns de staging o producció, minimitzant la intervenció humana i el risc d'errors en el llançament.49

## **Automatització Local: Git Hooks i la Integritat del Client**

A més de l'automatització al servidor, Git permet l'execució d'scripts al client mitjançant els **Git Hooks**. Aquests scripts s'emmagatzemen a .git/hooks i es disparen davant d'esdeveniments locals.53

Els hooks més rellevants per als desenvolupadors inclouen:

* **pre-commit:** S'executa abans de finalitzar el commit. S'utilitza per passar linters o comprovadors de format que assegurin que el codi segueix els estàndards de l'equip abans de sortir de la màquina de l'usuari.53  
* **commit-msg:** Validar que el missatge de commit segueixi l'estàndard Conventional Commits.53  
* **pre-push:** Última línia de defensa abans que el codi arribi al servidor remot, ideal per a proves d'integració ràpides.53

Tot i que els hooks són potents, tenen la limitació de no ser versionats per defecte en el repositori principal, requerint eines addicionals o enllaços simbòlics per assegurar que tot l'equip els utilitza de manera consistent.53 A més, s'ha de tenir en compte que el pipeline de CI/CD al servidor segueix sent l'autoritat final, ja que els hooks locals es poden evitar amb el paràmetre \--no-verify.54

## **Intel·ligència Artificial en el Flux de Treball: GitHub Copilot**

La integració d'assistents d'IA com **GitHub Copilot** està redefinint la productivitat del desenvolupador. Copilot no només ofereix suggeriments de codi en temps real, sinó que es pot utilitzar a través de **Copilot Chat** per a tasques d'alt nivell com l'explicació de codi complex, la generació de tests unitaris o la revisió automatitzada de Pull Requests.56

Les millors pràctiques per a l'ús d'IA en el control de versions inclouen:

* **Prompt Engineering:** Dividir les tasques grans en passos petits i manejables, proporcionant context específic mitjançant fitxers oberts a l'IDE.56  
* **Verificació Humana:** Mai s'ha d'acceptar codi generat per IA sense entendre'n el funcionament, ja que l'IA pot generar solucions obsoletes o insegures.56  
* **Neteja de Context:** Utilitzar fils de conversa nous per a tasques noves per evitar que l'historial del xat influeixi negativament en els resultats.56

D'acord amb les dades de l'abril de 2026, el sistema ha millorat significativament en velocitat i en la capacitat de realitzar revisions de codi actives, integrant-se fins i tot en la línia d'ordres (CLI) per ajudar en la resolució de problemes d'infraestructura o de Git directament des del terminal.56

## **Conclusió: La Maduresa del Control de Versions en l'Arquitectura de Programari**

La gestió professional del codi a través de Git i GitHub representa la maduració de l'enginyeria de programari com a disciplina. L'anàlisi de les dades tècniques indica que l'èxit d'un projecte no depèn només de la qualitat de l'algorisme, sinó de la solidesa del seu historial de versions i de la fluïdesa dels seus processos de col·laboració. La combinació d'estàndards semàntics en els commits, estratègies de ramificació disciplinades, revisions de codi humanes i automatització mitjançant CI/CD i IA crea un entorn on el risc d'error es minimitza i el valor s'entrega de manera contínua. El control de versions distribuït no és només una eina per guardar fitxers, sinó un mecanisme de gestió del coneixement que permet la resiliència del programari davant el canvi i el temps.

#### **Works cited**

1. Git vs GitHub | Git And GitHub Difference | What Is Git And GitHub? | Git And GitHub | Simplilearn \- YouTube, accessed on April 13, 2026, [https://www.youtube.com/watch?v=xJXgvr8bPes](https://www.youtube.com/watch?v=xJXgvr8bPes)  
2. 1.3 Getting Started \- What is Git?, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)  
3. Git vs. GitHub: What's the difference? \- YouTube, accessed on April 13, 2026, [https://www.youtube.com/watch?v=wpISo9TNjfU](https://www.youtube.com/watch?v=wpISo9TNjfU)  
4. How Git Works \- KodeKloud, accessed on April 13, 2026, [https://kodekloud.com/blog/how-git-works/](https://kodekloud.com/blog/how-git-works/)  
5. Understanding the Git Workflow: Working Directory, Staging, and Repository \- Keno Kivabe, accessed on April 13, 2026, [https://blogs.kenokivabe.com/article/understanding-the-git-workflow-working-directory-staging-and-repository](https://blogs.kenokivabe.com/article/understanding-the-git-workflow-working-directory-staging-and-repository)  
6. Staging Area \- Git \- Mintlify, accessed on April 13, 2026, [https://www.mintlify.com/git/git/concepts/staging-area](https://www.mintlify.com/git/git/concepts/staging-area)  
7. 1.6 Getting Started \- First-Time Git Setup, accessed on April 13, 2026, [https://git-scm.com/book/ms/v2/Getting-Started-First-Time-Git-Setup](https://git-scm.com/book/ms/v2/Getting-Started-First-Time-Git-Setup)  
8. First-Time Git Setup \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)  
9. Setting your username in Git \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git)  
10. Git: re-config username and email | by Alice Dai | Medium, accessed on April 13, 2026, [https://medium.com/@qingedaig/git-re-config-username-and-email-555372fe26c2](https://medium.com/@qingedaig/git-re-config-username-and-email-555372fe26c2)  
11. A3.1 Appendix C: Git Commands \- Setup and Config, accessed on April 13, 2026, [https://git-scm.com/book/ms/v2/Appendix-C:-Git-Commands-Setup-and-Config](https://git-scm.com/book/ms/v2/Appendix-C:-Git-Commands-Setup-and-Config)  
12. How To Use Corepack | Total TypeScript, accessed on April 13, 2026, [https://www.totaltypescript.com/how-to-use-corepack](https://www.totaltypescript.com/how-to-use-corepack)  
13. Getting a Git Repository \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)  
14. Conventional Commit Specification | by Pranay Bathini \- Medium, accessed on April 13, 2026, [https://pranaybathini.medium.com/conventional-commit-specification-ecd701b0bbb2](https://pranaybathini.medium.com/conventional-commit-specification-ecd701b0bbb2)  
15. Conventional Commits Cheatsheet \- GitHub Gist, accessed on April 13, 2026, [https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)  
16. A specification for adding human and machine readable meaning to commit messages \- Conventional Commits, accessed on April 13, 2026, [https://www.conventionalcommits.org/en/v1.0.0-beta.3/](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)  
17. Conventional Commits, accessed on April 13, 2026, [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)  
18. Code Review Best Practices That Actually Scale, accessed on April 13, 2026, [https://www.augmentcode.com/guides/code-review-best-practices-that-scale](https://www.augmentcode.com/guides/code-review-best-practices-that-scale)  
19. Git tags vs branches: Differences and when to use them \- CircleCI, accessed on April 13, 2026, [https://circleci.com/blog/git-tags-vs-branches/](https://circleci.com/blog/git-tags-vs-branches/)  
20. Branching Workflows \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)  
21. Git branching strategies \- DEV Community, accessed on April 13, 2026, [https://dev.to/574n13y/git-branching-strategies-2i0i](https://dev.to/574n13y/git-branching-strategies-2i0i)  
22. Adopt a Git branching strategy \- Azure Repos \- Microsoft Learn, accessed on April 13, 2026, [https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance?view=azure-devops](https://learn.microsoft.com/en-us/azure/devops/repos/git/git-branching-guidance?view=azure-devops)  
23. Branching strategies \- GitLab Docs, accessed on April 13, 2026, [https://docs.gitlab.com/user/project/repository/branches/strategies/](https://docs.gitlab.com/user/project/repository/branches/strategies/)  
24. Working with Remotes \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)  
25. Git pull vs fetch: What's the difference? \- TheServerSide, accessed on April 13, 2026, [https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Git-pull-vs-fetch-Whats-the-difference](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Git-pull-vs-fetch-Whats-the-difference)  
26. What's the difference between "git fetch" and "git pull"? | Learn Version Control with Git, accessed on April 13, 2026, [https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull](https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull)  
27. Git pull vs. git fetch: What's the difference? \- GitLab, accessed on April 13, 2026, [https://about.gitlab.com/blog/git-pull-vs-git-fetch-whats-the-difference/](https://about.gitlab.com/blog/git-pull-vs-git-fetch-whats-the-difference/)  
28. Difference Between Git Fetch and Git Pull \- GeeksforGeeks, accessed on April 13, 2026, [https://www.geeksforgeeks.org/git/git-difference-between-git-fetch-and-git-pull/](https://www.geeksforgeeks.org/git/git-difference-between-git-fetch-and-git-pull/)  
29. Basic Branching and Merging \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)  
30. Resolving a merge conflict using the command line \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/articles/resolving-a-merge-conflict-using-the-command-line](https://docs.github.com/articles/resolving-a-merge-conflict-using-the-command-line)  
31. How Do I Resolve Merge Conflicts? \- DEV Community, accessed on April 13, 2026, [https://dev.to/github/how-do-i-resolve-merge-conflicts-5438](https://dev.to/github/how-do-i-resolve-merge-conflicts-5438)  
32. Resolve merge conflicts in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/sourcecontrol/merge-conflicts](https://code.visualstudio.com/docs/sourcecontrol/merge-conflicts)  
33. Conflict resolution — Introduction to version control with Git documentation, accessed on April 13, 2026, [https://coderefinery.github.io/git-intro/conflicts/](https://coderefinery.github.io/git-intro/conflicts/)  
34. Collaborating with pull requests \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/pull-requests/collaborating-with-pull-requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests)  
35. GitHub \- susam/gitpr: Quick reference guide on fork and pull request workflow, accessed on April 13, 2026, [https://github.com/susam/gitpr](https://github.com/susam/gitpr)  
36. Forking Workflow \- Atlassian Git Tutorial, accessed on April 13, 2026, [https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/forking-workflow)  
37. About pull request reviews \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)  
38. Best Practices for Pull Request Reviews \- Propel Code, accessed on April 13, 2026, [https://www.propelcode.ai/blog/best-practices-for-pull-request-reviews](https://www.propelcode.ai/blog/best-practices-for-pull-request-reviews)  
39. mawrkus/pull-request-review-guide: Guidelines for better, faster pull request reviews \- GitHub, accessed on April 13, 2026, [https://github.com/mawrkus/pull-request-review-guide](https://github.com/mawrkus/pull-request-review-guide)  
40. A complete guide to code reviews | Swarmia, accessed on April 13, 2026, [https://www.swarmia.com/blog/a-complete-guide-to-code-reviews/](https://www.swarmia.com/blog/a-complete-guide-to-code-reviews/)  
41. Guide to Reviewing Pull Requests \- Jesse Duffield, accessed on April 13, 2026, [https://jesseduffield.com/Reviewing-PRs/](https://jesseduffield.com/Reviewing-PRs/)  
42. Creating and editing milestones for issues and pull requests \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/creating-and-editing-milestones-for-issues-and-pull-requests](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/creating-and-editing-milestones-for-issues-and-pull-requests)  
43. GitHub Issues · Project planning for developers, accessed on April 13, 2026, [https://github.com/features/issues](https://github.com/features/issues)  
44. Best practices for Projects \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects)  
45. About milestones \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/issues/using-labels-and-milestones-to-track-work/about-milestones](https://docs.github.com/issues/using-labels-and-milestones-to-track-work/about-milestones)  
46. What is the difference / relationship between GitHub Projects and Milestones?, accessed on April 13, 2026, [https://stackoverflow.com/questions/39591795/what-is-the-difference-relationship-between-github-projects-and-milestones](https://stackoverflow.com/questions/39591795/what-is-the-difference-relationship-between-github-projects-and-milestones)  
47. About Projects \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)  
48. Understanding GitHub Actions, accessed on April 13, 2026, [https://docs.github.com/articles/getting-started-with-github-actions](https://docs.github.com/articles/getting-started-with-github-actions)  
49. Mastering CI/CD with GitHub Actions for Modern Web Development \- Medium, accessed on April 13, 2026, [https://medium.com/@bhargavkoya56/mastering-ci-cd-with-github-actions-for-modern-web-development-6fb8bed2f6ee](https://medium.com/@bhargavkoya56/mastering-ci-cd-with-github-actions-for-modern-web-development-6fb8bed2f6ee)  
50. awesome-copilot/instructions/github-actions-ci-cd-best-practices.instructions.md at main, accessed on April 13, 2026, [https://github.com/github/awesome-copilot/blob/main/instructions/github-actions-ci-cd-best-practices.instructions.md](https://github.com/github/awesome-copilot/blob/main/instructions/github-actions-ci-cd-best-practices.instructions.md)  
51. What is CI/CD? \- GitLab, accessed on April 13, 2026, [https://about.gitlab.com/topics/ci-cd/](https://about.gitlab.com/topics/ci-cd/)  
52. Continuous integration \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/actions/get-started/continuous-integration](https://docs.github.com/en/actions/get-started/continuous-integration)  
53. Mastering Git Hooks: A Cheat Sheet for CI/CD Ninjas \- DEV Community, accessed on April 13, 2026, [https://dev.to/copyleftdev/mastering-git-hooks-a-cheat-sheet-for-cicd-ninjas-3057](https://dev.to/copyleftdev/mastering-git-hooks-a-cheat-sheet-for-cicd-ninjas-3057)  
54. Pre-Commit or CI/CD \- Craig Motlin \- Medium, accessed on April 13, 2026, [https://motlin.medium.com/pre-commit-or-ci-cd-5779d3a0e566](https://motlin.medium.com/pre-commit-or-ci-cd-5779d3a0e566)  
55. What is the relationship between continuous integration and git hooks?, accessed on April 13, 2026, [https://softwareengineering.stackexchange.com/questions/413021/what-is-the-relationship-between-continuous-integration-and-git-hooks](https://softwareengineering.stackexchange.com/questions/413021/what-is-the-relationship-between-continuous-integration-and-git-hooks)  
56. Best practices for using GitHub Copilot \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)  
57. Browsing the web \- Learn web development | MDN, accessed on April 13, 2026, [https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Getting\_started/Environment\_setup/Browsing\_the\_web\#using\_ai](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai)

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAYCAYAAAC4CK7hAAAB5klEQVR4Xu2WPUgdQRSFL2JhwMpKlNirmKhFytiIiAqWVmlMlyIIdkogkMYypLFQsdBCEERtVLQzYCWkSmFE8AclKbRIlx+Te5gZue84s88VxGY+uOze78zbnSvv7SqSyWQeigWtVpZVGNW60PqjNUVZNWa1/mmdaLVQVprPWtfiLohqq4wLWdY6N/2i1qXpi8A9+0yPe/eb/t50S/lBsL424qpt6IO4dZahiLsXZQf5KPEbwx2yJLDmK0tx/ilLMKn1itw89YGyg/yS9CAxb0G+w1Kc/8Tytz8ifOnPX/v+ve8tZQdJbTjlLcjXWYrzG1bMadX7c4Q9JvsrxYO0c5AgteGUD9SIy1c4EOe/WfHOH2Pf42mtZnIgDNLBQYLUhlPegnyVpTi/yxIgsI9H8J36QBjkGQcJ8N6Ibfiug2yxFOdnWAIEw+S+UB8Ig3RykGBb4huGwzuiCKxJPbVGWOJNyTd6q9VELhAG6eLAgyegpVFuXx/AjZOboB5D8GdfRNwNCJ778ydS/HwfELceLyZmTFzGX0v85ZdMPyi3N3Pl3RvjGryrM+6n1r7pKwgXRm1SFvghboNnWqf+CHdsFylHEv8/DO+TA3E/UtwnPC0DeHjgs0yvuPVr4obdq4wzmUwm80j8B49MjOF1a9tWAAAAAElFTkSuQmCC>

[image2]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAYCAYAAAC4CK7hAAABx0lEQVR4Xu2WzStFQRjG31j4XMmKKEsLWShLNpKiLC0kCzsLrEkp/4BsLJD/QNig7CgrZWVDFr6ilIVQ5GOe3jn3zn3unOvOzcdmfvXkzO+dc859T3PGEYlEIj/NmMmTyafJDtWK5Y5FEayI3vPCpJlqwRyZjNrjctELIxWZGekcS3Y+EsKHSa8zxvl9zjiIMpM3yX0aNaIXfXXcd2xJWCPzkj9/wOOKBk/A9zR9rhChjWDuCUtR38QSzJiMkFuj8apJC7m/aGSPpahfZIklA1Dsssd4qTGes2Mf1aJzLrlQgFIawTkM/LYr8JRr7TGK3U7tXQo38ixhPwqENIL3EnPXuSDqT10xa/8uSP4NlkwaySVMis7H7hVCSCMAczdYivp9lgCFG3Jp+32H6JZYCqU0sstS1C+zBCgMksPez9SbvJD77XckbdcaYon/DXzxCZMGclhGD+QAn4sdMI3vGpmmMZrg+Z0elwGFdntcZXLm1BIwxxd3mU1Zl7YsD0Trvq8BPCTUxh1XZ12l4x5FvzK89Ev2h/m+oYYlv4EkvIbPTVrJYTnemlyJLsVrk3vRbT6hTfRcpkf0PpuizR7mliORSCTyT3wBk5WMCDBxDpoAAAAASUVORK5CYII=>