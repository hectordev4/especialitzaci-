
Definir Criteris d'Acceptació
» Llista 3-5 condicions mesurables que la funcionalitat ha de complir.
Exemple:
» Es validen en temps real que l'email tingui un format vàlid i que las contrasenyes siguin coincidents.
Escenaris de Prova amb Gherkin
» Escriu 2 escenaris en sintaxi Donat/Quan/Llavors per validar els criteris.
Exemple:
Escenari: Registre exitós  
   Donat que estic a la pàgina de registre  
   Quan omplo "email@exemple.com" al camp email  
   I escric  "P@ssw0rd" als camps de contrasenya i confirmació  
   I clico  "Registrar-me"  
   Llavors veig el missatge "Compte creat. Verifica el teu correu electrònic."  
   I sóc redirigit a /verifica-correu   
Desglossament de Tasques
» Divideix la història en tasques tècniques front-end específiques:
Exemple:
Maquetar formulari de registre amb HTML/CSS (camps, botó, missatges d'error).
Organització en Tauler Kanban
» Crea un tauler a Trello amb aquestes columnes:
Backlog | To Do | Doing | Test | Done
» Afegeix les tasques com a targetes i prioritza amb MoSCoW:
🟢 Must-Have: Formulari bàsic funcional + validació inicial en enviar.
🟡 Should-Have: Validació en temps real (errors es mostren mentre l'usuari escriu).
🔵 Could-Have: Indicador de força de la contrasenya (barra de progrés).
🔴 Won't-Have: Registre amb xarxes socials (Facebook/Google).
Documentació
» Crea una pàgina a Notion que inclogui:
Història d'usuari original.
Criteris d'acceptació i escenaris Gherkin.
Enllaç al tauler Kanban.
Captura de pantalla del codi més complex (ex: funció de filtrat).
Bonus track: Repeteix l'exercici per la següent història d'usuari:
"Com a usuari registrat, vull poder canviar la meva contrasenya perquè pugui mantenir el meu compte segur."


# Exercisi Pràctic: Història d'Usuari

## Funcionalitat Front-End (Registre)

### User Story

***"Com a usuari de la botiga online, vull poder registrar-me amb el meu correu electrònic i contrasenya per crear un compte."***

### TO-DO LIST

1. Definir Criteris d'Acceptació.
2. Llista de 3-5 condicions mesurables que la funcionalitat ha de complir.
3. Descriure dos escenaris d'utilitat amb sintaxi (donat/quan/llavors).
4. Dividir la història en tasques tècniques específiques.
5. Crear un tauler Kanban amb les columnes (backlog/to do/doing/test/done)
6. Afegir les tasques al tauler amb priorització MoSCoW.
7. Crear pàgina a Notion
8. Incloure al Notion, User Story original, els criteris d'acceptació i escenaris Gherkin, enllaç al tauler Kanban i screenschot d'exemple de codi complex.

## Criteris d'acceptació

1. Validació a temps real de dos camps de mail i dos camps de contrassenya que coincideixin.
2. Validació a temps real del format del mail.
3. Validació a temps real del format de la contrassenya.
4. Checkbox per acceptar els termes de l'empresa per crear el compte.
5. Enviar mail per validar el compte.

### Escenaris d'utilitat

#### Criteri 1
Donat que estic a la pàgina de registre, quan escric el meu mail vull assegurar-me de que l'he escrit bé, llavors haver de tornar a escriure'l em dóna confiança de que està ben escrit.
Donat que estic a la pàgina de registre, quan escric la meva contrassenya i és complicada vull assegurar-me de que l'he escrit bé, llavors haver de tornar a escriure-la em dóna confiança de que està ben escrit.

#### Criteri 2
Donat que estic a la pàgina de registre, quan estic escrivint el mail necessito estar segur de que està ben escrit, llavors quan l'estic escrivint vull una petita alerta per saber si està correctament escrit.

#### Criteri 3
Donat que estic a la pàgina de registre, quan estic escrivint la contrassenya vull saber el mínim que demanen per la complexitat de la contrassenya, llavors una petita alerta per saber què necessito incloure en la contrassenya.

#### Criteri 4
Donat que estic a la pàgina de registre, quan estic creant l'usuari vull saber els termes de l'empresa que tracta les meves dades, llavors vull veure els termes i poder acceptar-los o no.

#### Criteri 5
Donat que estic a la pàgina de registre, quan estic creant 