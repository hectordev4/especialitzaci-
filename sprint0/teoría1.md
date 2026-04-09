# Fonaments del Desenvolupament Web: Arquitectura, Protocols i Estàndards

Aquest document detalla el funcionament intern del web modern, des del model client-servidor fins a les pràctiques d'accessibilitat i seguretat necessàries per al 2025.

## Arquitectura Client-Servidor

L'arquitectura client-servidor és el model estructural bàsic del web on les tasques es reparteixen entre els proveïdors de recursos (servidors) i els demandants (clients).

- **Client** (Navegador): És l'interfície d'usuari (com Chrome o Firefox). S'encarrega de presentar la informació i enviar peticions.
- **Servidor**: Un ordinador remot que emmagatzema dades i aplicacions. "Serveix" el contingut quan rep una petició vàlida.
- *Funcionament*: El client envia una petició via HTTP; el servidor la processa i retorna una resposta (normalment HTML/CSS/JS o JSON).
  
## Front-end, Back-end i Full-stack

El desenvolupament web es divideix segons on s'executa el codi i quina funció té:
- `Front-end` (Client-side): Tot el que l'usuari veu i toca. Tecnologies: HTML, CSS, JavaScript. Es focalitza en l'experiència d'usuari (UX).
- `Back-end` (Server-side): La lògica "invisible". Gestió de bases de dades, seguretat i processament de dades. Tecnologies: Node.js, Python, Java, SQL.
- `Full-stack`: Un perfil que domina ambdues capes, entenent el flux complet de dades des del servidor fins a la pantalla.

## Protocol HTTP/HTTPS i Comunicació

L'**HTTP** (Hypertext Transfer Protocol) és el llenguatge de comunicació del web. La seva versió segura, **HTTPS**, xifra les dades per evitar intercepcions. <br>
Codis d'Estat Comuns:
- `200 OK`: La petició ha tingut èxit.
- `301/302`: Redirecció permanent o temporal.
- `400 Bad Request`: Error en la petició del client.
- `404 Not Found`: El recurs no existeix.
- `500 Internal Server Error`: El servidor ha fallat.


## Tipus d'Aplicacions Web
L'arquitectura triada determina com es renderitza el contingut:
- **Estàtiques**: Fitxers fixos (HTML/CSS) que es lliuren tal com estan al servidor. Ràpides però sense interacció amb bases de dades.
- **Dinàmiques**: Es generen en temps real (ex: Amazon o Facebook) segons l'usuari.
- **SPA (Single-Page Applications)**: L'aplicació carrega una sola pàgina i actualitza el contingut dinàmicament sense refrescar el navegador (ex: Gmail).
- **PWA (Progressive Web Apps)**: Webs que es poden instal·lar al mòbil, funcionen sense connexió i envien notificacions push.

## El Rol dels Navegadors

El navegador no és només un visor, sinó un entorn d'execució complex:
- **Motor de renderització**: Interpreta el codi (Blink a Chrome, Gecko a Firefox).
- **DOM (Document Object Model)**: L'estructura en arbre que crea el navegador per representar l'HTML i permetre que JavaScript el modifiqui.

## Accessibilitat (WCAG) i SEO
Dissenyar per a tothom no és només ètic, sinó una estratègia de negoci:
- **WCAG (Web Content Accessibility Guidelines)**: Estàndards per fer el web accessible (percebible, operable, comprensible i robust).
- **SEO (Search Engine Optimization)**: L'ús d'etiquetes semàntiques (H1, alt en imatges) ajuda tant als lectors de pantalla com als cercadors (Google) a indexar millor la web.

## Terminologia Tècnica i Seguretat

Conceptes clau per a qualsevol context tècnic:
- **API (Application Programming Interface)**: El "pont" que permet que dues aplicacions es comuniquin (ex: el front-end demanant dades al back-end).
- **CORS (Cross-Origin Resource Sharing)**: Mecanisme de seguretat del navegador que restringeix peticions entre diferents dominis.
-  **CMS (Content Management System)**: Eina per gestionar contingut sense programar (ex: WordPress).
-  **Framework vs. Llibreria**: Una llibreria és una eina que tu crides (React); un framework és una estructura que "mana" com has de programar (Angular).
-  **XSS (Cross-Site Scripting)**: Atac on s'injecta codi maliciós en una web per robar dades de l'usuari.