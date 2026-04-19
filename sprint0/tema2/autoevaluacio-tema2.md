# **Autoevaluació del temari 2 - Sprint0**

## **1\. Diferències entre Unix/Linux i Windows**

La distinció entre ambdós sistemes es basa en la seva arquitectura i filosofia de disseny:

* **Gestió de Fitxers:** Unix utilitza una jerarquia única que neix de l'arrel (/), mentre que Windows utilitza lletres d'unitat (com C: o D:) per separar dispositius físics.  
* **Sensibilitat a Majúscules:** Unix és completament *case-sensitive* (distingeix entre "A" i "a"), cosa que permet que dos fitxers amb el mateix nom però diferent capitalització coexisteixin al mateix directori. En Windows, aquesta sensibilitat és opcional o inexistent per defecte.  
* **Llicència i Filosofia:** Unix/Linux és sovint de codi obert i es basa en la filosofia de petits programes que fan una sola cosa bé. Windows és un programari propietari enfocat a l'usuari final amb una integració tancada de les seves eines.

## **2\. Utilitat del Terminal en el Desenvolupament**

El terminal no és només una eina alternativa, sinó sovint la preferida per:

* **Automatització i Scripting:** Totes les accions executades al terminal es poden programar en scripts per realitzar tasques complexes i repetitives sense intervenció manual.  
* **Gestió Remota:** Mitjançant protocols com SSH, un desenvolupador pot gestionar servidors a qualsevol part del món amb la mateixa eficàcia que si estigués davant de la màquina.  
* **Eficiència de Recursos:** El terminal consumeix una fracció mínima de CPU i memòria RAM en comparació amb una interfície gràfica, permetent que el sistema dediqui més potència a la compilació i execució del programari.

## **3\. Rutes Absolutes vs. Rutes Relatives**

Comprendre la navegació és fonamental per a la gestió de projectes:

* **Rutes Absolutes:** Són camins complets i immutables que comencen des de l'arrel del sistema (/). Són vàlides independentment del directori on es trobi l'usuari. 
* **Rutes Relatives:** Es defineixen en funció de la posició actual de l'usuari. Utilitzen caràcters especials com . (directori actual) o .. (directori superior) per navegar per la jerarquia.

## **4\. Limitacions del Terminal davant la GUI**

Tot i la seva potència, la interfície de línia d'ordres (CLI) presenta reptes:

* **Corba d'Aprenentatge:** Requereix la memorització de comandos, sintaxi i paràmetres, el que la fa menys intuïtiva per a usuaris nous.  
* **Manca de Feedback Visual:** No ofereix confirmacions visuals immediates de cada acció (com una icona que es mou o un diàleg d'èxit), el que pot portar a errors si no es verifiquen els resultats.  
* **Incapacitat Multimèdia:** Per a tasques de disseny gràfic, edició de vídeo o qualsevol activitat que requereixi interacció visual directa amb els elements, la interfície gràfica (GUI) és indispensable.  
* **Risc de Tipus:** Un error en una sola lletra o espai en una ordre de borrat (com rm) pot eliminar dades crítiques sense que el sistema demani confirmació ni permeti recuperar-les d'una "paperera".
