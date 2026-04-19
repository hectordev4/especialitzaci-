# **Autoavaluació del temari 3 - Sprint0**

## **1\. Definicions i Funcionalitats Principals**

### **Node.js**

Entorn d'execució de JavaScript de codi obert i multiplataforma que permet l'execució de codi al costat del servidor mitjançant el motor V8.

* **Arquitectura asíncrona:** Utilitza un model d'entrada/sortida (I/O) no bloquejant que permet gestionar milers de connexions simultànies sense esperar la finalització d'operacions de xarxa o disc. 
* **Fil únic (Single-thread):** Tota la lògica de JavaScript s'executa en un únic procés principal, delegant les tasques pesades a la biblioteca Libuv per evitar el bloqueig del sistema.

### **npm (Node Package Manager)**

Gestor de paquets estàndard per a l'ecosistema de Node.js, utilitzat tant per a dependències de servidor com de client.1

* **Gestió de dependències:** Instal·la i actualitza biblioteques externes necessàries perquè l'aplicació funcioni.1  
* **Versionat semàntic (SemVer):** Controla la compatibilitat entre versions de paquets mitjançant regles prefixades (^, \~).

### **package.json**

Fitxer de manifest en format JSON que actua com la font de veritat sobre la configuració i els requeriments del projecte.

* **Metadades del projecte:** Conté informació essencial com el nom, la versió, l'autor i la llicència del programari.  
* **Automatització de tasques:** Defineix el diccionari de scripts (com start, test o build) per simplificar comandaments complexos de la línia d'ordres.

## **2\. Ordres de Gestió amb npm**

| Acció | Ordre de npm | Impacte al package-lock.json |
| :---- | :---- | :---- |
| **Instal·lar dependències regulars** | npm install \<paquet\> | S'afegeix l'arbre exacte de la dependència amb el seu hash d'integritat.  |
| **Instal·lar dependències de desenvolupament** | npm install \<paquet\> \-D | Es registra com a recurs de desenvolupament, assegurant que la versió sigui idèntica per a tot l'equip.  |
| **Actualitzar dependències** | npm update | Es sobrescriu el fitxer amb les noves versions resoltes que compleixin els rangs del package.json. |

El **package-lock.json** garanteix la reproductibilitat de l'entorn: descriu l'arbre de dependències de manera que qualsevol instal·lació posterior (com a npm ci en servidors) generi una carpeta node\_modules exactament igual.

## **3\. Variables d'Entorn a Vite**

* **Propòsit:** Gestionar configuracions sensibles o específiques (claus d'API, URLs de base de dades) sense incloure-les directament al codi font, facilitant el canvi entre entorns de desenvolupament i producció.
* **Convenció de noms:** Per seguretat, només les variables que comencen pel prefix VITE\_ es carreguen al client. Qualsevol altra variable romandrà oculta al navegador. 
* **Estructura del fitxer .env:**  
  Code snippet  
  VITE\_API\_URL=https://api.meuprojecte.com  
  VITE\_APP\_TITLE=App de Prova  
  \# Aquesta variable no serà accessible al codi del client:  
  SECRET\_KEY=12345

## **4\. Espais de Treball (Workspaces) a VS Code**

* **Pas per a la creació:** S'afegeixen carpetes mitjançant **File \> Add Folder to Workspace...**. L'estat es consolida quan es desa com un fitxer .code-workspace (File \> Save Workspace As...).  
* **Avantatges principals:**  
  1. **Configuració multi-arrel:** Permet treballar amb múltiples repositoris o components (ex: *frontend* i *backend*) en una sola finestra de l'editor.  
  2. **Aïllament de preferències:** Es poden definir regles d'estil o extensions recomanades que s'apliquin només a aquest espai de treball específic, sense afectar la configuració global de l'usuari.  
* **Gestió de carpetes:** L'Explorador mostra cada carpeta com una arrel independent. Es poden reordenar per arrossegament i realitzar cerques globals que abasten tots els directoris de l'espai.

## **5\. Integració de la IA al Procés de Desenvolupament**

### **Casos pràctics d'ús**

1. **Generació de codi repetitiu (Boilerplate):** Creació ràpida de funcions estàndard, docstrings o components estructurals a partir de comentaris descriptius. 
2. **Explicació de lògica complexa:** Ús del comandament /explain per desglossar el funcionament de blocs de codi heretat o difícil de comprendre.  
3. **Resolució d'errors i depuració:** Identificació de patrons problemàtics i suggeriment de correccions immediates per a errors de sintaxi o de temps d'execució.

### **Equilibri amb l'aprenentatge autònom**

Cal utilitzar la IA com un col·laborador i no com un substitut. L'estratègia d'aprenentatge ha de basar-se en la **verificació crítica**: mai s'ha d'acceptar un suggeriment sense comprendre'l ni provar-lo. S'ha d'adoptar un procés iteratiu on la IA ofereixi un esborrany i el desenvolupador en faci la revisió final de seguretat i qualitat.