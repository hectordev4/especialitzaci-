# **Fonaments Tècnics i Administració Avançada d'Entorns GNU/Linux: Una Investigació sobre la Línia d'Ordres, Gestió de Fitxers i Control de Processos**

## **L'Ecosistema de la Línia d'Ordres: Terminal, Shell i Interfície Gràfica**

L'arquitectura dels sistemes operatius moderns, especialment aquells basats en Unix com GNU/Linux, es fonamenta en una distinció crítica entre les capes d'interacció de l'usuari. Mentre que la interfície gràfica d'usuari (GUI) ha estat dissenyada per maximitzar la facilitat d'ús mitjançant abstraccions visuals, la interfície de línia d'ordres (CLI) ofereix una precisió i una potència que són indispensables per a l'administració de sistemes i el desenvolupament de programari.1 Per comprendre aquesta dicotomia, cal analitzar la relació entre el terminal, la shell i el sistema operatiu.

El terminal, en la seva forma moderna, és un emulador de text que actua com l'entrada i sortida per a l'usuari.3 Històricament, els terminals eren dispositius físics (teletips), però avui dia són programes que proporcionen una finestra al sistema. La shell, per contra, és el programa que interpreta les ordres introduïdes en el terminal.1 Aquesta actua com una capa intermèdia que tradueix les instruccions humanes en crides al sistema que el nucli (kernel) pot executar.3 L'evidència suggereix que la shell no és només un llançador de programes, sinó un entorn de programació complet amb la seva pròpia lògica i variables.1

| Component | Funció Tècnica | Interacció |
| :---- | :---- | :---- |
| Terminal | Emulador de maquinari d'entrada/sortida de text | Visualització i captura de teclat |
| Shell | Intèrpret d'ordres i entorn d'execució | Lògica, scripts i execució de binaris |
| GUI | Abstracció visual mitjançant finestres i icones | Interacció intuïtiva amb ratolí/tàctil |
| Kernel | Gestió directa del maquinari i recursos | Execució de crides al sistema i memòria |

La superioritat de la CLI en certs entorns es manifesta en la seva capacitat d'automatització. Mentre que una GUI requereix la interacció manual per a cada acció, la shell permet encadenar centenars d'operacions mitjançant scripts.1 L'anàlisi dels fluxos de treball professionals indica que el terminal és el mètode preferit per gestionar servidors remots, ja que el consum de recursos de xarxa és mínim comparat amb el d'una interfície gràfica.5 A més, moltes utilitats de sistema i servidors només exposen la seva funcionalitat completa a través de la línia d'ordres, convertint el domini d'aquest entorn en una competència nuclear per a qualsevol administrador.5

Un aspecte tècnic sovint ignorat és el "mode cuinat" (canonical mode) del terminal, on el controlador del terminal gestiona caràcters especials com el retorn de carro o l'esborrat de caràcters abans que la cadena de text arribi a la shell.3 Aquesta interacció entre el terminal i la shell és el que permet funcions com la suspensió de processos o el control de flux, demostrant que el terminal no és un mer conducte passiu, sinó una part activa de la cadena de processament de dades.3

## **L'Estructura Jeràrquica del Sistema de Fitxers Linux (FHS)**

L'organització de les dades en Linux segueix l'Estàndard de Jerarquia del Sistema de Fitxers (FHS), que defineix una estructura d'arbre on tot comença en el directori arrel, representat per una barra inclinada (/).6 A diferència d'altres sistemes operatius que utilitzen lletres per a les unitats de disc, Linux integra tots els dispositius, ja siguin físics, virtuals o de xarxa, en aquest únic arbre jeràrquic.6

### **Arquitectura del Directori Arrel i els seus Subdirectoris**

Cada subdirectori sota / té una funció específica i crítica. El directori /bin conté els executables binaris essencials que tots els usuaris necessiten per al funcionament bàsic, com ls o cp.6 En canvi, /sbin es reserva per a binaris d'administració del sistema que generalment requereixen privilegis de superusuari per a la seva execució.6 Aquesta separació reflecteix una filosofia de seguretat on les eines potencialment perilloses per a la integritat del sistema estan aïllades dels usuaris comuns.

La configuració del sistema es troba a /etc, que actua com el cervell administratiu de l'equip, emmagatzemant fitxers de text que controlen el comportament del programari i els serveis.6 Un altre directori vital és /home, on es troben les carpetes personals dels usuaris, proporcionant un espai aïllat on cada individu pot emmagatzemar els seus documents i preferències personals sense interferir amb el sistema global.2

| Directori | Descripció de la Funció i Contingut | Importància en el Sistema |
| :---- | :---- | :---- |
| / | Arrel del sistema de fitxers | Origen de tota la jerarquia |
| /bin | Executables essencials del sistema | Necessari per al mode monousuari |
| /etc | Fitxers de configuració del sistema | Controla el comportament global |
| /home | Directoris personals dels usuaris | Dades d'usuari i configuració local |
| /usr | Utilitats i aplicacions d'usuari | Conté la majoria de programari instal·lat |
| /var | Fitxers de dades variables (logs, bases de dades) | Informació que canvia freqüentment |
| /tmp | Fitxers temporals | Volàtil, sovint s'esborra en reiniciar |
| /proc | Sistema de fitxers virtual de processos | Interfície amb l'estat del Kernel |
| /root | Directori personal del superusuari | Aïllat del /home estàndard |

L'existència de directoris virtuals com /proc i /dev subratlla el principi fonamental de Linux on "tot és un fitxer".6 /dev conté fitxers que representen el maquinari del sistema, com els discs durs o els terminals, permetent que el programari interactuï amb el maquinari mitjançant operacions estàndard de lectura i escriptura.6 /proc, d'altra banda, no existeix físicament al disc, sinó que és una finestra en temps real a l'estat del nucli i dels processos en execució, on cada procés té el seu propi directori identificat pel seu Process ID (PID).6

### **Resolució de Camins: Rutes Absolutes i Relatives**

La navegació eficaç pel sistema de fitxers requereix la comprensió de com es resolen les rutes. Una ruta absoluta és aquella que comença des de l'arrel (/) i descriu la ubicació exacta d'un objecte independentment del directori de treball actual de l'usuari.2 Aquestes rutes són immutables i sempre vàlides des de qualsevol punt del sistema.

En contrast, les rutes relatives es defineixen en relació amb el directori actual on es troba l'usuari.2 Per facilitar aquesta navegació, Linux utilitza metacaràcters especials: un punt (.) representa el directori actual, i dos punts (..) representen el directori pare, un nivell per sobre en la jerarquia.2 Aquesta distinció és crucial en la programació de scripts, on l'ús de rutes absolutes garanteix la portabilitat, mentre que les rutes relatives ofereixen agilitat durant l'operació manual del terminal.

L'anàlisi de la resolució de camins també revela diferències entre sistemes operatius. Mentre que Windows utilitza barres invertides (\\), Linux i els estàndards web utilitzen la barra inclinada cap endavant (/).1 A més, el sistema de fitxers de Linux és sensible a les majúscules (case-sensitive), el que significa que Fitxer.txt i fitxer.txt es tracten com a dues entitats completament diferents, una característica que augmenta la flexibilitat però que requereix una disciplina rigorosa en la nomenclatura.1

## **Navegació i Gestió Atòmica de Fitxers en el Sistema**

La interacció quotidiana amb el terminal es realitza mitjançant un conjunt d'ordres que permeten explorar l'entorn i manipular les dades. L'ordre pwd (print working directory) és essencial per orientar-se, ja que mostra la ruta absoluta del directori actual.7

### **Exploració de Continguts i Canvi de Directori**

L'ordre ls s'utilitza per llistar el contingut d'un directori. La seva versatilitat es manifesta a través d'opcions com \-l, que proporciona un format llarg amb informació detallada sobre permisos, mida i propietaris, i \-a, que revela fitxers ocults (aquells que comencen amb un punt).7 El desplaçament entre directoris s'executa amb cd (change directory). L'ús de cd sense arguments porta l'usuari directament al seu directori home, mentre que cd \- permet tornar al directori anteriorment visitat, una funcionalitat que millora notablement la productivitat.7

### **Creació, Còpia i Eliminació de Dades**

La gestió de fitxers implica operacions de creació i modificació. mkdir permet crear nous directoris, i l'opció \-p és especialment útil per crear tota una estructura de subdirectoris pares de cop.7 Per crear fitxers buits o actualitzar la data de modificació d'un fitxer existent, s'utilitza touch.7

L'ordre cp s'encarrega de duplicar fitxers o directoris. Quan es copien directoris, cal utilitzar l'opció \-r (recursiu) per incloure tot el seu contingut.7 D'altra banda, mv s'utilitza tant per moure fitxers entre ubicacions com per canviar-los el nom, ja que en la lògica de Linux, canviar el nom d'un fitxer és equivalent a moure'l a una nova ruta dins del mateix sistema de fitxers.7

L'eliminació d'informació es realitza amb rm. Aquesta ordre és extremadament potent i perillosa, ja que per defecte no mou els fitxers a cap "paperera de reciclatge", sinó que els esborra de manera permanent.7 L'ús de rm \-rf (recursiu i forçat) és una pràctica que s'ha de fer amb extrema precaució, ja que pot esborrar sistemes sencers si s'executa amb privilegis de superusuari sobre l'arrel.7

| Ordre | Funció Principal | Exemple d'Ús Tècnic |
| :---- | :---- | :---- |
| ls \-la | Llistar tot el contingut en format detallat | ls \-la /etc |
| cd | Canviar el directori de treball | cd../projectes |
| mkdir | Crear un nou directori | mkdir \-p logs/2024 |
| touch | Crear un fitxer o actualitzar el timestamp | touch config.yaml |
| cp \-r | Copiar de manera recursiva | cp \-r web/ backup/ |
| mv | Moure o reanomenar | mv vell.txt nou.txt |
| rm \-i | Esborrar amb confirmació de l'usuari | rm \-i dades\_sensibles.db |

## **El Model de Seguretat de Linux: Permisos i Propietats**

La seguretat en Linux es construeix sobre un sistema de permisos granulars que determinen les accions que els usuaris poden realitzar sobre cada fitxer i directori. Aquest model és essencial per a l'estabilitat del sistema, ja que impedeix que usuaris sense privilegis o processos maliciosos alterin fitxers crítics del sistema.9

### **Propietaris i Categories d'Usuari**

Cada fitxer o directori té assignat un usuari propietari i un grup.9 Els permisos es defineixen per a tres categories d'actors:

1. **Usuari (User/Owner):** La persona que ha creat el fitxer o a qui s'ha transferit la propietat.9  
2. **Grup (Group):** Un conjunt d'usuaris que comparteixen els mateixos permisos per a aquest fitxer.9  
3. **Altres (Others/World):** Tota la resta d'usuaris que tenen accés al sistema.9

### **Notació Octal i Drets d'Accés**

Els drets d'accés es divideixen en tres tipus bàsics: llegir (r), escriure (w) i executar (x).9 En la notació octal, cada tipus de permís té un valor numèric: llegir val 4, escriure val 2 i executar val 1\.11 Sumant aquests valors, s'obté un dígit entre 0 i 7 que representa la combinació de permisos per a una categoria específica.9

| Valor Octal | Notació Simbòlica | Permisos Concedits | Implicació en Fitxers | Implicació en Directoris |
| :---- | :---- | :---- | :---- | :---- |
| 7 | rwx | Lectura, escriptura i execució | Control total | Llistar, crear/esborrar i entrar |
| 6 | rw- | Lectura i escriptura | Modificació de contingut | Veure i crear (sense entrar) |
| 5 | r-x | Lectura i execució | Executar com a programa | Llistar i entrar en el directori |
| 4 | r-- | Només lectura | Veure contingut | Només llistar noms de fitxers |
| 0 | \--- | Cap permís | Accés denegat | Accés denegat |

L'evidència del sistema de permisos s'observa sovint en configuracions estàndard com 755 per a directoris (propietari total, altres lectura/execució) o 644 per a fitxers (propietari lectura/escriptura, altres només lectura).11 Aquestes configuracions equilibren la seguretat amb la necessitat que els serveis, com un servidor web, puguin llegir els fitxers sense poder modificar-los.10

L'ordre chmod s'utilitza per canviar aquests permisos. Per exemple, chmod 700 fitxer.txt restringeix l'accés exclusivament al propietari.11 L'ordre chown permet canviar el propietari o el grup d'un fitxer, una tasca que normalment només pot realitzar el superusuari per evitar que els usuaris esquivin les quotes de disc o eludeixin els controls de seguretat.7

Un detall tècnic rellevant és el "sticky bit" (representat pel valor 1 en la primera posició de quatre dígits), que s'utilitza en directoris com /tmp. Aquest permís garanteix que, tot i que tothom pot escriure en el directori, només el propietari d'un fitxer el pot esborrar, evitant així sabotatges entre usuaris en espais compartits.12

## **Manipulació de Text i Edició en el Terminal**

Una de les fortaleses més significatives de la shell és la seva capacitat per processar grans volums de dades de text mitjançant la redirecció i els canals (pipes). En la filosofia de Linux, el text pla és el format universal per a la comunicació entre processos.7

### **Redirecció i Fluxos de Dades Standard**

Cada ordre executada en el terminal té tres fluxos de dades: l'entrada estàndard (stdin), la sortida estàndard (stdout) i l'error estàndard (stderr). Els operadors de redirecció permeten desviar aquests fluxos cap a fitxers.7

* **\> (Redirecció simple):** Envia la sortida d'una ordre a un fitxer, sobreescrivint el seu contingut previ.7  
* **\>\> (Redirecció de concatenació):** Afegeix la sortida al final del fitxer sense esborrar el que ja hi ha.7  
* **| (Pipes o canals):** Connecta la sortida d'una ordre directament amb l'entrada de la següent.7 Aquesta és l'eina més potent per crear fluxos de treball complexos, com ara ps aux | grep "apache", que llista tots els processos i després en filtra només aquells que fan referència al servidor web Apache.

### **Eines de Processament i Editors de Terminal**

El sistema ofereix utilitats especialitzades per treballar amb text sense obrir un editor complet. cat s'utilitza per visualitzar el contingut d'un fitxer, mentre que grep permet cercar patrons específics dins del text utilitzant expressions regulars.7 Altres eines com head i tail són indispensables per analitzar els registres del sistema (logs), ja que permeten veure les primeres o les últimes línies d'un fitxer, respectivament.7

Per a l'edició directa de fitxers, Linux ofereix diversos editors de terminal. **Nano** és el més accessible per a principiants, amb una interfície que mostra les dreceres de teclat a la part inferior, com Ctrl+O per desar i Ctrl+X per sortir.14 **Vim**, per contra, és un editor modal dissenyat per a l'eficiència extrema. En Vim, l'usuari alterna entre el "Mode Normal" per navegar i el "Mode Inserció" per escriure text.5 Tot i que té una corba d'aprenentatge elevada, la seva presència és quasi universal en tots els sistemes Unix, el que el converteix en una eina essencial per a qualsevol administrador.5

| Editor | Filosofia de Disseny | Avantatge Principal | Ordre per Salvar i Sortir |
| :---- | :---- | :---- | :---- |
| **Nano** | Simplicitat i intuïció | Dreceres visibles en pantalla | Ctrl \+ O, Enter, Ctrl \+ X |
| **Vim** | Eficiència modal | Edició sense treure les mans del teclat | :wq o ZZ |
| **Vi** | Estàndard POSIX | Disponible en instal·lacions mínimes | :q\! (per sortir sense desar) |

## **Arquitectura de Gestió de Processos i Control de Treballs**

En Linux, cada instància d'un programa en execució es denomina procés. El nucli gestiona aquests processos assignant-los un Process ID (PID) únic, que permet el seguiment del consum de recursos de CPU i memòria.17 L'administració de processos és una tasca crítica per mantenir el rendiment i la salut del sistema.

### **Monitorització i Estat dels Processos**

L'ordre ps proporciona una visió de l'estat dels processos en un moment determinat. L'opció ps \-f mostra informació detallada, incloent el PID del pare (PPID), que indica quin procés ha generat el procés actual.17 Per a una monitorització contínua i interactiva, s'utilitza top, que mostra els processos que consumeixen més recursos en temps real.7 Una alternativa moderna i molt utilitzada és htop, que ofereix una interfície més visual i capacitats de gestió directa des del teclat.7

### **Control de Treballs i Senyals de Sistema**

La shell permet gestionar la manera com s'executen els treballs. Un procés es pot executar en **segon pla (background)** afegint un ampersand (&) al final de l'ordre.17 Això permet que l'usuari continuï utilitzant el terminal mentre el procés es realitza de forma independent.

L'usuari pot interactuar amb els processos mitjançant senyals, que són interrupcions de programari que demanen una acció específica al procés:

* **Ctrl \+ C (SIGINT):** Envia un senyal d'interrupció per finalitzar el procés en primer pla de manera neta.18  
* **Ctrl \+ Z (SIGTSTP):** Suspèn o pausa el procés actual i el posa en segon pla en estat detingut.18 Des d'aquí, es pot reprendre amb fg per tornar-lo al primer pla o amb bg per continuar l'execució en segon pla.17  
* **kill:** Aquesta ordre permet enviar senyals a processos específics mitjançant el seu PID. kill envia un senyal de terminació suau, mentre que kill \-9 (SIGKILL) força la terminació immediata pel nucli, una mesura que només s'ha d'utilitzar quan un procés no respon.17

L'anàlisi dels processos també inclou conceptes com els "processos zombis" (aquells que han acabat però encara ocupen un lloc en la taula de processos perquè el seu pare no n'ha llegit l'estat) i els "processos orfes" (aquells el pare dels quals ha finalitzat abans que ells i que són adoptats pel procés init amb PID 1).17

## **Configuració de l'Entorn i Cicle de Vida del Sistema**

L'entorn de la shell no és estàtic; es configura mitjançant variables i fitxers que defineixen com es comporta el sistema per a cada usuari. Aquestes configuracions són essencials per a la personalització del flux de treball i la seguretat de l'execució d'aplicacions.1

### **Variables d'Entorn i la variable PATH**

Les variables d'entorn són parelles de nom i valor accessibles per tots els processos que s'executen en una sessió. La variable més important és PATH, que conté una llista de directoris on la shell busca els executables quan l'usuari escriu una ordre.1 Si un executable no es troba en cap d'aquests directoris, el sistema retornarà un error de "command not found", encara que el fitxer existeixi en un altre lloc del disc.1

Per gestionar aquestes variables, s'utilitzen ordres com echo $NOM\_VARIABLE per veure el seu contingut i export per definir noves variables que estiguin disponibles per als processos fills.1 L'assignació de variables sense export crea variables locals que només són visibles per a la shell actual.1

| Variable | Funció i Significat | Exemple de Contingut |
| :---- | :---- | :---- |
| PATH | Directoris de cerca per a executables | /usr/bin:/bin:/usr/local/bin |
| HOME | Ruta al directori personal de l'usuari | /home/usuari |
| USER | Nom de l'usuari connectat actualment | root o joan |
| SHELL | Ruta a l'intèrpret d'ordres per defecte | /bin/bash o /bin/zsh |
| EDITOR | Editor de text predeterminat del sistema | vim o nano |

### **Cicle de Vida de la Shell: Fitxers de Configuració**

Per garantir que les configuracions persisteixin entre sessions, la shell llegeix fitxers de configuració en iniciar-se. La distinció entre una "shell de login" (quan s'inicia una sessió des de zero, com via SSH) i una "shell interactiva de no-login" (quan s'obre una nova finestra de terminal dins d'un entorn gràfic) és fonamental per entendre quins fitxers s'executen.21

* **.bash\_profile o .profile:** S'executen només en el moment del login. Són el lloc ideal per a configuracions globals que s'han de definir un sol cop, com l'actualització del PATH.21  
* **.bashrc:** S'executa cada vegada que s'obre una shell interactiva. Aquí és on s'acostumen a posar els àlies (dreceres per a ordres llargues) i la personalització visual del prompt del terminal.22

L'evidència dels sistemes moderns, especialment en distribucions com Ubuntu o Debian, mostra una tendència a centralitzar la configuració en el .bashrc i fer que el .profile simplement l'executi mitjançant l'ordre source.22 Aquesta pràctica garanteix que l'entorn sigui consistent independentment de com s'hagi accedit al sistema. Quan es realitzen canvis en aquests fitxers, cal utilitzar l'ordre source \~/.bashrc per aplicar-los immediatament a la sessió actual sense haver de tancar-la.1

## **Conclusions Tècniques i Síntesi de l'Administrador**

L'estudi exhaustiu dels fonaments de la línia d'ordres en GNU/Linux revela que l'aparent complexitat del terminal és, en realitat, una arquitectura altament lògica i modular. L'evidència recollida suggereix que el domini d'aquest entorn no és només una qüestió de memorització d'ordres, sinó de comprensió dels principis que regeixen el sistema.

La jerarquia del sistema de fitxers (FHS) proporciona una estructura universal que permet la interoperabilitat entre diferents distribucions, facilitant que els coneixements adquirits en un entorn siguin directament aplicables en servidors, estacions de treball o dispositius encastats. El model de seguretat basat en permisos POSIX és una prova de la robustesa del sistema, on la gestió correcta de propietaris i la notació octal constitueixen la base per a un entorn multiusuari segur. L'anàlisi de la manipulació de text i la gestió de processos demostra la potència de la filosofia Unix: la capacitat de combinar eines senzilles per resoldre problemes complexos mitjançant fluxos de dades redirigits.

Finalment, la configuració de l'entorn mitjançant variables i fitxers de cicle de vida permet una personalització sense precedents, transformant el terminal d'una simple interfície en un instrument de precisió per a l'administrador de sistemes. En darrera instància, la línia d'ordres representa la sobirania de l'usuari sobre la màquina, proporcionant les eines necessàries per a l'automatització, el diagnòstic i la gestió eficaç de la infraestructura digital moderna. Les conclusions d'aquesta investigació indiquen que la competència en la CLI continua sent la habilitat més valuosa i duradora en l'àmbit de la computació professional.

#### **Works cited**

1. Environment Variables for Java Applications \- PATH, CLASSPATH ..., accessed on April 13, 2026, [https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment\_Variables.html](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html)  
2. Dealing with files \- Learn web development | MDN, accessed on April 13, 2026, [https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Getting\_started/Environment\_setup/Dealing\_with\_files](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)  
3. How can I do Ctrl-Z and bg in one keypress to make process continue in background?, accessed on April 13, 2026, [https://superuser.com/questions/378018/how-can-i-do-ctrl-z-and-bg-in-one-keypress-to-make-process-continue-in-backgroun](https://superuser.com/questions/378018/how-can-i-do-ctrl-z-and-bg-in-one-keypress-to-make-process-continue-in-backgroun)  
4. Environment Variables: A Comprehensive Guide \- DEV Community, accessed on April 13, 2026, [https://dev.to/pizofreude/environment-variables-a-comprehensive-guide-34dg](https://dev.to/pizofreude/environment-variables-a-comprehensive-guide-34dg)  
5. How to use vim: essential commands for beginners \- hostney, accessed on April 13, 2026, [https://www.hostney.com/blog/how-to/how-to-use-vim-essential-commands-for-beginners](https://www.hostney.com/blog/how-to/how-to-use-vim-essential-commands-for-beginners)  
6. Linux File Hierarchy Structure \- GeeksforGeeks, accessed on April 13, 2026, [https://www.geeksforgeeks.org/linux-file-hierarchy-structure/](https://www.geeksforgeeks.org/linux-file-hierarchy-structure/)  
7. GNU/LINUX Command Spanish Cheat Sheet by jonathan992 ..., accessed on April 13, 2026, [https://cheatography.com/jonathan992/cheat-sheets/gnu-linux-command-spanish/](https://cheatography.com/jonathan992/cheat-sheets/gnu-linux-command-spanish/)  
8. Command Line Cheat Sheet with Text Editors (Vim , Nano) \- DEV Community, accessed on April 13, 2026, [https://dev.to/zinox9/command-line-cheat-sheet-with-text-editors-vim-nano-1l69](https://dev.to/zinox9/command-line-cheat-sheet-with-text-editors-vim-nano-1l69)  
9. How to Set Permissions in Linux: A Guide to chmod and chown ..., accessed on April 13, 2026, [https://www.digitalocean.com/community/tutorials/how-to-set-permissions-linux](https://www.digitalocean.com/community/tutorials/how-to-set-permissions-linux)  
10. Are these the correct permissions (644 and 755\) for files and directories on a web server?, accessed on April 13, 2026, [https://superuser.com/questions/1511606/are-these-the-correct-permissions-644-and-755-for-files-and-directories-on-a-w](https://superuser.com/questions/1511606/are-these-the-correct-permissions-644-and-755-for-files-and-directories-on-a-w)  
11. File Permissions and Sharing Files | Computing, accessed on April 13, 2026, [https://www.maths.cam.ac.uk/computing/linux/unixinfo/perms](https://www.maths.cam.ac.uk/computing/linux/unixinfo/perms)  
12. Linux permissions using numbers (known as Octal Notation) | by Vishal Thapa \- Medium, accessed on April 13, 2026, [https://medium.com/@thapavishal117/linux-permissions-using-numbers-known-as-octal-notation-2081f554c645](https://medium.com/@thapavishal117/linux-permissions-using-numbers-known-as-octal-notation-2081f554c645)  
13. Understanding Unix and Linux File Permissions \- Tech Help \- Queen's School of Computing, accessed on April 13, 2026, [https://help.cs.queensu.ca/caslab/unix-and-linux-file-permissions/](https://help.cs.queensu.ca/caslab/unix-and-linux-file-permissions/)  
14. How to Save and Exit in Nano | Linuxize, accessed on April 13, 2026, [https://linuxize.com/post/nano-save-and-exit/](https://linuxize.com/post/nano-save-and-exit/)  
15. How to Save and Exit Nano in Terminal – Nano Quit Command \- freeCodeCamp, accessed on April 13, 2026, [https://www.freecodecamp.org/news/how-to-save-and-exit-nano-in-terminal-nano-quit-command/](https://www.freecodecamp.org/news/how-to-save-and-exit-nano-in-terminal-nano-quit-command/)  
16. Vim Cheat Sheet, accessed on April 13, 2026, [https://vim.rtorr.com/](https://vim.rtorr.com/)  
17. Processes in Linux \- GeeksforGeeks, accessed on April 13, 2026, [https://www.geeksforgeeks.org/linux-unix/processes-in-linuxunix/](https://www.geeksforgeeks.org/linux-unix/processes-in-linuxunix/)  
18. Mastering Ctrl \+ C and Ctrl \+ Z in the Terminal | by Aditya Yadav | Medium, accessed on April 13, 2026, [https://dev-aditya.medium.com/mastering-ctrl-c-and-ctrl-z-in-the-terminal-3a2db0b7ab7e](https://dev-aditya.medium.com/mastering-ctrl-c-and-ctrl-z-in-the-terminal-3a2db0b7ab7e)  
19. how do i make this stop : r/linux4noobs \- Reddit, accessed on April 13, 2026, [https://www.reddit.com/r/linux4noobs/comments/1lfsg95/how\_do\_i\_make\_this\_stop/](https://www.reddit.com/r/linux4noobs/comments/1lfsg95/how_do_i_make_this_stop/)  
20. What's the difference between Ctrl-Z and kill \-STOP? \- Unix & Linux Stack Exchange, accessed on April 13, 2026, [https://unix.stackexchange.com/questions/68611/whats-the-difference-between-ctrl-z-and-kill-stop](https://unix.stackexchange.com/questions/68611/whats-the-difference-between-ctrl-z-and-kill-stop)  
21. .bash\_profile vs .bashrc | Josh Staiger, accessed on April 13, 2026, [https://joshstaiger.org/archives/2005/07/bash\_profile\_vs.html](https://joshstaiger.org/archives/2005/07/bash_profile_vs.html)  
22. .bashrc vs .bash\_profile: What is the Difference? | Linuxize, accessed on April 13, 2026, [https://linuxize.com/post/bashrc-vs-bash-profile/](https://linuxize.com/post/bashrc-vs-bash-profile/)  
23. Difference Between .bashrc, .bash-profile, and .profile | by Shalin Patel \- Medium, accessed on April 13, 2026, [https://medium.com/@shalinpatel./difference-between-bashrc-bash-profile-and-profile-1947edea4318](https://medium.com/@shalinpatel./difference-between-bashrc-bash-profile-and-profile-1947edea4318)  
24. bashrc vs. bash\_profile: What Is the Difference? | phoenixNAP KB, accessed on April 13, 2026, [https://phoenixnap.com/kb/bashrc-vs-bash-profile](https://phoenixnap.com/kb/bashrc-vs-bash-profile)  
25. What's the difference between .bashrc, .bash\_profile, and .environment? \- Stack Overflow, accessed on April 13, 2026, [https://stackoverflow.com/questions/415403/whats-the-difference-between-bashrc-bash-profile-and-environment](https://stackoverflow.com/questions/415403/whats-the-difference-between-bashrc-bash-profile-and-environment)