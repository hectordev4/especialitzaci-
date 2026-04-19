# **Autoevaluació del temari 4 - Sprint0**

## **1\. Diferenciació: Git vs. GitHub**

**Saps distinguir Git de GitHub?**

Sí. La diferència principal és la seva naturalesa i funció:

* **Git:** És l'eina tècnica, un sistema de control de versions distribuït que s'executa localment al teu ordinador. Serveix per registrar l'historial de canvis del codi mitjançant la línia d'ordres.  
* **GitHub:** És una plataforma d'allotjament al núvol que utilitza Git com a base. Proporciona una interfície web i eines socials per a equips, com la gestió de permisos, fòrums de discussió (Issues), automatització de tasques (Actions) i la visualització gràfica del projecte.

## **2\. Operacions Fonamentals**

**Quines ordres bàsiques fas servir per treballar amb Git?**

El flux de treball estàndard es basa en les següents comandes:

* git init: Per crear un repositori nou des de zero.  
* git status: Per veure en quin estat estan els fitxers (modificats, preparats o no seguits).  
* git add: Per moure els canvis de l'espai de treball a l'àrea de preparació (*staging area*).  
* git commit \-m "missatge": Per crear una captura permanent dels canvis preparats.  
* git log: Per revisar l'historial cronològic dels commits realitzats.  
* git push: Per pujar els commits locals al servidor remot (GitHub).  
* git pull: Per descarregar i fusionar els canvis nous del servidor al teu equip local.

## **3\. Treball Col·laboratiu: Pull Requests**

**Saps fer pull-requests i revisar-los?**

Sí, el procés de Pull Request (PR) és el cor de la col·laboració professional:

* **Crear un PR:** Després de pujar una branca amb canvis a GitHub, s'obre una sol·licitud per fusionar aquestes modificacions amb la branca principal. Això permet que altres membres de l'equip vegin què s'ha canviat abans d'integrar-ho.  
* **Revisar un PR:** Consisteix a analitzar el codi proposat per detectar errors o suggerir millores. GitHub permet tres tipus de respostes:  
  1. **Comment:** Feedback general o preguntes sense bloquejar la fusió.  
  2. **Approve:** Confirmació que el codi és correcte i està llest per ser fusionat.  
  3. **Request Changes:** Obliga l'autor a fer correccions abans que el PR es pugui tancar amb èxit.