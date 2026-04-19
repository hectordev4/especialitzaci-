# **Exercici pràctic 1: Anàlisi d'Aplicacions Web**

Aquest document conté l'anàlisi tècnica de 6 aplicacions web seguint els criteris de tipologia, navegació i interacció.

## **Grup 1: Webs Comercials i Contingut**

### **1\. Amazon**

| Criteri | Descripció |
| :---- | :---- |
| **Tipologia** | Dinàmica / Híbrida |
| **URL** | [https://www.amazon.com](https://www.amazon.com) |
| **Evidències tècniques** | Ús massiu d'APIs pròpies, gestió complexa de sessions i SSR (Server-Side Rendering). |
| **Comportament de navegació** | Navegació multi-pàgina amb actualitzacions asíncrones per al carret i recomanacions. |
| **Temps de càrrega** | Alt nombre de peticions inicials; optimitzat mitjançant Lazy Loading en imatges. |
| **Interacció amb servidor** | Peticions constants de dades JSON per actualitzar preus i estocs en temps real. |

### **2\. Blog personal WordPress**

| Criteri | Descripció |
| :---- | :---- |
| **Tipologia** | Dinàmica |
| **URL** | [https://wordpress.org](https://wordpress.org) |
| **Evidències tècniques** | Processament de PHP al servidor i ús de base de dades relacional SQL. |
| **Comportament de navegació** | Tradicional; cada interacció sol requerir una recàrrega completa de la pàgina. |
| **Temps de càrrega** | Depèn de l'optimització del servidor i de la quantitat de plugins actius. |
| **Interacció amb servidor** | Generació de documents HTML sota demanda cada vegada que el client fa una petició. |

### **3\. Portafoli Estàtic**

| Criteri | Descripció |
| :---- | :---- |
| **Tipologia** | Estàtica |
| **URL** | [https://pages.github.com](https://pages.github.com) |
| **Evidències tècniques** | Fitxers HTML, CSS i JS pre-construïts sense lògica de servidor activa. |
| **Comportament de navegació** | Instantani; canvis de secció ràpids sense processament intermedi. |
| **Temps de càrrega** | Molt ràpid (TTFB baix) ja que el servidor només entrega fitxers existents. |
| **Interacció amb servidor** | Peticions GET puntuals; no s'envien dades de tornada per a ser processades. |

## **Grup 2: Aplicacions Web**

### **4\. Airbnb**

| Criteri | Descripció |
| :---- | :---- |
| **Tipologia** | SPA (Single-Page Application) |
| **URL** | [https://www.airbnb.com](https://www.airbnb.com) |
| **Evidències tècniques** | Construïda amb React; manipulació dinàmica del DOM i gestió d'estat al client. |
| **Comportament de navegació** | Fluida; els canvis de rutes i filtres no bloquegen la interfície ni recarreguen el navegador. |
| **Temps de càrrega** | Càrrega inicial de bundles JS pesats, seguida d'una interacció molt àgil. |
| **Interacció amb servidor** | Comunicació constant amb una API REST/GraphQL per obtenir dades en format JSON. |

### **5\. Twitter (X)**

| Criteri | Descripció |
| :---- | :---- |
| **Tipologia** | SPA / PWA |
| **URL** | [https://twitter.com](https://twitter.com) |
| **Evidències tècniques** | Ús de Service Workers per a funcionalitats offline i notificacions push. |
| **Comportament de navegació** | Virtualització de llistes per al scroll infinit i canvis de vista instantanis. |
| **Temps de càrrega** | Ràpida visualització de l'esquelet (Skeleton UI) mentre es reben les dades. |
| **Interacció amb servidor** | Connexions de tipus WebSocket o polling per rebre nous tuits en temps real. |

### **6\. Documentació MDN**

| Criteri | Descripció |
| :---- | :---- |
| **Tipologia** | Dinàmica / Híbrida |
| **URL** | [https://developer.mozilla.org](https://developer.mozilla.org) |
| **Evidències tècniques** | Generació de contingut basada en repositoris Git i motor de renderització Yari. |
| **Comportament de navegació** | Navegació ràpida amb una forta dependència de la jerarquia de l'HTML semàntic. |
| **Temps de càrrega** | Molt optimitzat per a la lectura; pocs scripts que bloquegin el renderitzat. |
| **Interacció amb servidor** | Consultes de cerca i gestió de preferències d'usuari (mode fosc, idioma). |

