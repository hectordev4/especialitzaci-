# **Apunts Tècnics: Conceptes de Desenvolupament (2026)**

## **1\. Arquitectura i Flux d'Execució en Node.js**

### **Model d'Entrada/Sortida (I/O) i Bucle d'Esdeveniments**

* **Execució no bloquejant:** Delegació d'operacions pesades (xarxa, fitxers) a la biblioteca **Libuv**, permetent que el fil principal continuï processant altres tasques sense esperar la resposta del sistema operatiu.1  
* **Motor V8:** Compilació de JavaScript a codi màquina mitjançant un procés *Just-In-Time* (JIT) per a l'execució al servidor.1  
* **Bucle d'esdeveniments (Event Loop):** Mecanisme de coordinació que gestiona les rellamades (*callbacks*) en fases FIFO 3:  
  1. **Timers:** Processament de setTimeout() i setInterval().  
  2. **Pending Callbacks:** Gestió d'errors de sistema (ex: errors TCP).  
  3. **Poll:** Recuperació de nous esdeveniments d'I/O i execució de la majoria de rellamades.  
  4. **Check:** Execució específica de setImmediate().  
  5. **Close Callbacks:** Tancament de recursos (ex: socket.destroy()).

### **Prioritat de Microtasques**

* **process.nextTick():** Execució immediata després de l'operació actual, abans que el bucle d'esdeveniments passi a la fase següent.3  
* **Promeses:** Segona prioritat després de nextTick, però abans de qualsevol fase del bucle d'esdeveniments.4

## **2\. Gestió de Projectes i Dependències**

### **Determinisme amb npm**

* **package.json:** Manifest que defineix metadades, scripts d'automatització i rangs de versions de les dependències (SemVer) .  
* **package-lock.json:** Instantània exacta de l'arbre de dependències. Inclou l'URL de resolució i hashes d'integritat (SHA-512) per garantir que qualsevol instal·lació en un altre entorn sigui idèntica .  
* **Corepack:** Eina de pont que permet utilitzar pnpm o Yarn sense instal·lació global, definint la versió del gestor directament al package.json .

### **Estratègies d'Instal·lació**

| Paràmetre | Funció |
| :---- | :---- |
| **\--save-dev (-D)** | Instal·lació de dependències de desenvolupament (linters, test runners) no necessàries en producció.2 |
| **Clean Install** | Instal·lació des de zero (sense node\_modules) utilitzant exclusivament el fitxer de bloqueig per a entorns de CI/CD . |

## **3\. L'Entorn de Treball: Visual Studio Code**

### **Capacitats d'Edició Avançada**

* **IntelliSense:** Suggeriments semàntics basats en el context. Admet **filtratge CamelCase** (ex: "stb" suggereix showToggleButton).8  
* **Accions de codi (Code Actions):** Refactoritzacions contextuals ("bombeta") per corregir imports, generar documentació o extraure funcions.10  
* **Punts de ruptura (Breakpoints):** Pausa de l'execució amb control de condició (només si l'expressió és certa) o per nombre de passades .  
* **Expressions de vigilància (Watch):** Monitoratge en temps real de variables o expressions lògiques durant la sessió de depuració.12

### **Control de Versions Integrat (Git)**

* **Àrea de preparació (Staging):** Selecció granular de fitxers o línies de codi específiques per a la següent comissió (*commit*).14  
* **Indicadors del marge (Gutter):** Senyalització visual línia per línia dels canvis realitzats (afegits, modificats o eliminats) .

## **4\. Vite: Construcció i Optimització**

### **Arquitectura de Vite 8**

* **Rolldown:** Empaquetador basat en Rust que unifica les fases de desenvolupament i producció, substituint Rollup i esbuild per assolir velocitats fins a 30 cops superiors .  
* **Hot Module Replacement (HMR):** Substitució quirúrgica de mòduls en calent (10-20 ms) mitjançant l'ús de mòduls ES (*ESM*) natius del navegador, evitant recàrregues completes de la pàgina .

### **Gestió d'Entorns**

* **Prefix VITE\_:** Seguretat per evitar la filtració de claus privades al client; només les variables amb aquest prefix són accessibles via import.meta.env.16  
* **Modes de construcció:** Ús de fitxers .env.\[mode\] (ex: .env.production) per injectar configuracions diferents segons el context de desplegament.17

## **5\. Intel·ligència Artificial al Flux de Treball**

### **Estratègies de Petició (Prompting)**

* **Decomposició:** Divisió de requeriments complexos en passes atòmiques i modulars per minimitzar errors de lògica.5  
* **Subagents:** Sessions d'investigació aïllades per a tasques paral·leles que eviten la contaminació del context principal.19  
* **Esforç de raonament (Thinking Effort):** Ajust configurable del nivell de processament per a tasques d'arquitectura o depuració complexa .

### **Validació de Seguretat**

* **Revisió crítica:** Verificació manual obligatòria per detectar al·lucinacions, vulnerabilitats o secrets incrustats (*hardcoded*) en el codi generat per la IA.19

#### **Works cited**

1. How Node.js Works Internally: A Deep Dive | by Vaibhav \- Medium, accessed on April 13, 2026, [https://medium.com/@gvaibhav864/how-node-js-works-internally-a-deep-dive-919154fef9c8](https://medium.com/@gvaibhav864/how-node-js-works-internally-a-deep-dive-919154fef9c8)  
2. Essential VS Code Extensions for Frontend Developers, accessed on April 13, 2026, [https://blog.openreplay.com/essential-vs-code-extensions/](https://blog.openreplay.com/essential-vs-code-extensions/)  
3. Difference between package.json and package-lock.json files \- GeeksforGeeks, accessed on April 13, 2026, [https://www.geeksforgeeks.org/node-js/difference-between-package-json-and-package-lock-json-files/](https://www.geeksforgeeks.org/node-js/difference-between-package-json-and-package-lock-json-files/)  
4. January 2026 (version 1.109) \- Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/updates/v1\_109](https://code.visualstudio.com/updates/v1_109)  
5. Best practices for using GitHub Copilot \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot](https://docs.github.com/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)  
6. NPM5, What is the difference of package-lock.json with package.json? \- Stack Overflow, accessed on April 13, 2026, [https://stackoverflow.com/questions/48456236/npm5-what-is-the-difference-of-package-lock-json-with-package-json](https://stackoverflow.com/questions/48456236/npm5-what-is-the-difference-of-package-lock-json-with-package-json)  
7. Building for Production \- Exchange Web \- Mintlify, accessed on April 13, 2026, [https://www.mintlify.com/jogeshwar01/exchange-web/development/building](https://www.mintlify.com/jogeshwar01/exchange-web/development/building)  
8. IntelliSense \- Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/editing/intellisense](https://code.visualstudio.com/docs/editing/intellisense)  
9. Vite vs. Webpack: A Head-to-Head Comparison \- Kinsta®, accessed on April 13, 2026, [https://kinsta.com/blog/vite-vs-webpack/](https://kinsta.com/blog/vite-vs-webpack/)  
10. Tutorial: Get started with Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/getstarted/getting-started](https://code.visualstudio.com/docs/getstarted/getting-started)  
11. AI smart actions in Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/copilot/copilot-smart-actions](https://code.visualstudio.com/docs/copilot/copilot-smart-actions)  
12. Set a watch on variables and expressions \- Visual Studio (Windows) | Microsoft Learn, accessed on April 13, 2026, [https://learn.microsoft.com/en-us/visualstudio/debugger/watch-and-quickwatch-windows?view=visualstudio](https://learn.microsoft.com/en-us/visualstudio/debugger/watch-and-quickwatch-windows?view=visualstudio)  
13. How To Lint and Format Code with ESLint in Visual Studio Code \- DigitalOcean, accessed on April 13, 2026, [https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code](https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code)  
14. Source Control in VS Code \- Visual Studio Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/sourcecontrol/overview](https://code.visualstudio.com/docs/sourcecontrol/overview)  
15. Version control in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/introvideos/versioncontrol](https://code.visualstudio.com/docs/introvideos/versioncontrol)  
16. Introducción | Vite, accessed on April 13, 2026, [https://es.vite.dev/guide/](https://es.vite.dev/guide/)  
17. Event Loop in Node.js | by Rahul Jindal \- Medium, accessed on April 13, 2026, [https://medium.com/@rahul.jindal57/event-loop-in-node-js-76edd2ff909d](https://medium.com/@rahul.jindal57/event-loop-in-node-js-76edd2ff909d)  
18. Best practices for using AI in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/copilot/best-practices](https://code.visualstudio.com/docs/copilot/best-practices)  
19. Compilación para producción | Vite, accessed on April 13, 2026, [https://es.vite.dev/guide/build.html](https://es.vite.dev/guide/build.html)  
20. Best practices for using GitHub Copilot, accessed on April 13, 2026, [https://docs.github.com/en/copilot/get-started/best-practices](https://docs.github.com/en/copilot/get-started/best-practices)  
21. Quickstart: use source control in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/sourcecontrol/quickstart](https://code.visualstudio.com/docs/sourcecontrol/quickstart)