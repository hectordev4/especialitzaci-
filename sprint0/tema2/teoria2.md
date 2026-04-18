# **Guia d'Estudi: Administració de Sistemes GNU/Linux**

Aquests apunts cobreixen els conceptes fonamentals per a la gestió de fitxers, permisos, processos i entorn en sistemes Linux.

## **1\. Introducció i Entorn de Treball**

### **Conceptes Clau**

* **Terminal:** Programa emulador que serveix d'interfície per introduir text i rebre sortida del sistema.1  
* **Shell:** L'intèrpret d'ordres. És el programa que tradueix les instruccions de l'usuari en crides al nucli (Kernel).2  
* **CLI vs GUI:** La interfície de línia d'ordres (CLI) consumeix menys recursos i permet una automatització (scripts) molt superior a la interfície gràfica (GUI).2

### **Estructura de Fitxers (FHS)**

Tot comença al directori arrel (/).4

* **Ruta Absoluta:** Camí complet des de l'arrel (ex: /home/usuari/fitxer.txt).6  
* **Ruta Relativa:** Camí des del directori actual (ex: ./documents/fitxer.txt).6  
* **Metacaràcters:** . (directori actual), .. (directori pare), \~ (directori home).6

| Directori | Descripció |
| :---- | :---- |
| /bin | Executables essencials del sistema (com ls, cp) 4 |
| /etc | Fitxers de configuració global 4 |
| /home | Directoris personals dels usuaris 4 |
| /root | Directori personal del superusuari (Administrador) 5 |
| /var | Fitxers variables com logs i bases de dades 5 |

## **2\. Ordres Bàsiques de Navegació i Gestió**

| Ordre | Acció | Exemple |
| :---- | :---- | :---- |
| pwd | Mostra la ruta del directori actual 7 | pwd |
| ls | Llista el contingut d'un directori (-la per veure ocults i detalls) 7 | ls \-la |
| cd | Canvia de directori 7 | cd /etc |
| mkdir | Crea un nou directori 7 | mkdir projecte |
| touch | Crea un fitxer buit 7 | touch notes.txt |
| cp | Copia fitxers o directoris (-r per recursiu) 7 | cp original.txt copia.txt |
| mv | Moure o reanomenar fitxers 7 | mv vell.txt nou.txt |
| rm | Esborra fitxers (-rf per directoris de forma forçada) 7 | rm fitxer.txt |

## **3\. Permisos de Fitxers i Directoris**

Els permisos es divideixen en **Usuari** (u), **Grup** (g) i **Altres** (o).9

### **Notació Octal**

Es calcula sumant els valors: **Llegir (4)** \+ **Escriure (2)** \+ **Executar (1)**.5

| Valor | Símbol | Permís |
| :---- | :---- | :---- |
| 7 | rwx | Lectura, escriptura i execució (4+2+1) 11 |
| 6 | rw- | Lectura i escriptura (4+2) 10 |
| 5 | r-x | Lectura i execució (4+1) 10 |
| 4 | r-- | Només lectura 10 |

**Exemples comuns:**

* chmod 755: Propietari total; grup i altres poden llegir i entrar.5  
* chmod 644: Propietari llegeix/escriu; altres només llegeixen (comú per a fitxers).5  
* chown: Canvia el propietari i el grup del fitxer.7

## **4\. Manipulació de Text i Editors**

### **Redireccions i Pipes**

* \> : Envia la sortida a un fitxer (sobreescriu).7  
* \>\> : Afegeix la sortida al final d'un fitxer.7  
* | (Pipe) : Envia la sortida d'una ordre com a entrada de la següent (ex: ls | grep.txt).7

### **Editors de Terminal**

1. **Nano:** Senzill i intuïtiu.  
   * Ctrl+O: Desar.14  
   * Ctrl+X: Sortir.14  
2. **Vim:** Avançat i modal.  
   * i: Mode inserció (per escriure).6  
   * Esc: Mode normal.6  
   * :wq: Desar i sortir.6  
   * :q\!: Sortir sense desar.6

## **5\. Gestió de Processos**

| Ordre / Tecla | Funció |
| :---- | :---- |
| ps aux | Llista tots els processos en execució amb detalls |
| top / htop | Monitorització en temps real de CPU i RAM 7 |
| kill \-9 | Força la finalització d'un procés mitjançant el seu ID |
| & | Executa una ordre directament en segon pla |
| Ctrl+C | Atura (mata) el procés que corre en primer pla |
| Ctrl+Z | Pausa un procés i el posa en segon pla |
| fg / bg | Recupera un procés al primer pla o el reprèn en segon pla |

## **6\. Variables d'Entorn i Configuració**

### **Variables d'Entorn**

Són valors dinàmics que afecten el comportament dels programes.2

* **PATH:** Llista de directoris on la shell busca els executables.2  
* echo $NOM: Mostra el valor d'una variable.2  
* export: Crea o exporta una variable a l'entorn global.2

### **Fitxers de Configuració**

* **.bashrc:** S'executa cada cop que obrim una terminal interactiva. Ideal per a àlies i personalització.13  
* **.profile / .bash\_profile:** S'executen només en iniciar la sessió (login). S'utilitzen per a variables globals com el PATH.13  
* source \~/.bashrc: Recarrega el fitxer per aplicar els canvis immediatament.2

#### **Works cited**

1. How can I do Ctrl-Z and bg in one keypress to make process continue in background?, accessed on April 13, 2026, [https://superuser.com/questions/378018/how-can-i-do-ctrl-z-and-bg-in-one-keypress-to-make-process-continue-in-backgroun](https://superuser.com/questions/378018/how-can-i-do-ctrl-z-and-bg-in-one-keypress-to-make-process-continue-in-backgroun)  
2. Environment Variables for Java Applications \- PATH, CLASSPATH ..., accessed on April 13, 2026, [https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment\_Variables.html](https://www3.ntu.edu.sg/home/ehchua/programming/howto/Environment_Variables.html)  
3. How to use vim: essential commands for beginners \- hostney, accessed on April 13, 2026, [https://www.hostney.com/blog/how-to/how-to-use-vim-essential-commands-for-beginners](https://www.hostney.com/blog/how-to/how-to-use-vim-essential-commands-for-beginners)  
4. Linux File Hierarchy Structure \- GeeksforGeeks, accessed on April 13, 2026, [https://www.geeksforgeeks.org/linux-file-hierarchy-structure/](https://www.geeksforgeeks.org/linux-file-hierarchy-structure/)  
5. File Permissions and Sharing Files | Computing, accessed on April 13, 2026, [https://www.maths.cam.ac.uk/computing/linux/unixinfo/perms](https://www.maths.cam.ac.uk/computing/linux/unixinfo/perms)  
6. Dealing with files \- Learn web development | MDN, accessed on April 13, 2026, [https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Getting\_started/Environment\_setup/Dealing\_with\_files](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)  
7. GNU/LINUX Command Spanish Cheat Sheet by jonathan992 ..., accessed on April 13, 2026, [https://cheatography.com/jonathan992/cheat-sheets/gnu-linux-command-spanish/](https://cheatography.com/jonathan992/cheat-sheets/gnu-linux-command-spanish/)  
8. Command Line Cheat Sheet with Text Editors (Vim , Nano) \- DEV Community, accessed on April 13, 2026, [https://dev.to/zinox9/command-line-cheat-sheet-with-text-editors-vim-nano-1l69](https://dev.to/zinox9/command-line-cheat-sheet-with-text-editors-vim-nano-1l69)  
9. How to Set Permissions in Linux: A Guide to chmod and chown ..., accessed on April 13, 2026, [https://www.digitalocean.com/community/tutorials/how-to-set-permissions-linux](https://www.digitalocean.com/community/tutorials/how-to-set-permissions-linux)  
10. Vim Cheat Sheet, accessed on April 13, 2026, [https://vim.rtorr.com/](https://vim.rtorr.com/)  
11. Linux permissions using numbers (known as Octal Notation) | by Vishal Thapa \- Medium, accessed on April 13, 2026, [https://medium.com/@thapavishal117/linux-permissions-using-numbers-known-as-octal-notation-2081f554c645](https://medium.com/@thapavishal117/linux-permissions-using-numbers-known-as-octal-notation-2081f554c645)  
12. Mastering Ctrl \+ C and Ctrl \+ Z in the Terminal | by Aditya Yadav | Medium, accessed on April 13, 2026, [https://dev-aditya.medium.com/mastering-ctrl-c-and-ctrl-z-in-the-terminal-3a2db0b7ab7e](https://dev-aditya.medium.com/mastering-ctrl-c-and-ctrl-z-in-the-terminal-3a2db0b7ab7e)  
13. .bash\_profile vs .bashrc | Josh Staiger, accessed on April 13, 2026, [https://joshstaiger.org/archives/2005/07/bash\_profile\_vs.html](https://joshstaiger.org/archives/2005/07/bash_profile_vs.html)  
14. Environment Variables: A Comprehensive Guide \- DEV Community, accessed on April 13, 2026, [https://dev.to/pizofreude/environment-variables-a-comprehensive-guide-34dg](https://dev.to/pizofreude/environment-variables-a-comprehensive-guide-34dg)  
15. How to Save and Exit in Nano | Linuxize, accessed on April 13, 2026, [https://linuxize.com/post/nano-save-and-exit/](https://linuxize.com/post/nano-save-and-exit/)  
16. Processes in Linux \- GeeksforGeeks, accessed on April 13, 2026, [https://www.geeksforgeeks.org/linux-unix/processes-in-linuxunix/](https://www.geeksforgeeks.org/linux-unix/processes-in-linuxunix/)  
17. .bashrc vs .bash\_profile: What is the Difference? | Linuxize, accessed on April 13, 2026, [https://linuxize.com/post/bashrc-vs-bash-profile/](https://linuxize.com/post/bashrc-vs-bash-profile/)  
18. bashrc vs. bash\_profile: What Is the Difference? | phoenixNAP KB, accessed on April 13, 2026, [https://phoenixnap.com/kb/bashrc-vs-bash-profile](https://phoenixnap.com/kb/bashrc-vs-bash-profile)  
19. Difference Between .bashrc, .bash-profile, and .profile | by Shalin Patel \- Medium, accessed on April 13, 2026, [https://medium.com/@shalinpatel./difference-between-bashrc-bash-profile-and-profile-1947edea4318](https://medium.com/@shalinpatel./difference-between-bashrc-bash-profile-and-profile-1947edea4318)  
20. Are these the correct permissions (644 and 755\) for files and directories on a web server?, accessed on April 13, 2026, [https://superuser.com/questions/1511606/are-these-the-correct-permissions-644-and-755-for-files-and-directories-on-a-w](https://superuser.com/questions/1511606/are-these-the-correct-permissions-644-and-755-for-files-and-directories-on-a-w)  
21. Understanding Unix and Linux File Permissions \- Tech Help \- Queen's School of Computing, accessed on April 13, 2026, [https://help.cs.queensu.ca/caslab/unix-and-linux-file-permissions/](https://help.cs.queensu.ca/caslab/unix-and-linux-file-permissions/)