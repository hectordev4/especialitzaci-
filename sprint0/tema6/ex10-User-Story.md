# **Exercisi pràctic 10: Història d'Usuari**

## **Funcionalitat Front-End (Registre)**

### **User Story**

***"Com a usuari de la botiga online, vull poder registrar-me amb el meu correu electrònic i contrasenya per crear un compte."***

### **TO-DO LIST**

* **\[x\] Definir Criteris d'Acceptació.**  
* **\[x\] Llista de 3-5 condicions mesurables que la funcionalitat ha de complir.**  
* **\[x\] Descriure dos escenaris d'utilitat amb sintaxi (donat/quan/llavors) per a cada condició.**  
* **\[x\] Dividir la història en tasques tècniques específiques.**  
* **\[x\] Crear un tauler Kanban amb les columnes (backlog/to do/doing/test/done).**  
* **\[x\] Afegir les tasques al tauler amb priorització MoSCoW.**  
* **\[x\] Crear pàgina a Notion (Esquema).**  
* **\[x\] Incloure al Notion: User Story original, criteris d'acceptació, escenaris Gherkin, enllaç al tauler Kanban i screenshot d'exemple de codi complex.**

## **Criteris d'Acceptació**

1. **Validació creuada:** El sistema ha de validar en temps real que els dos camps de mail siguin idèntics i els dos de contrasenya també.  
2. **Format de Correu:** L'input de correu ha de complir el format estàndard (exemple@domini.com).  
3. **Complexitat de Contrasenya:** La contrasenya ha de tenir un mínim de 8 caràcters, incloent una majúscula i un número.  
4. **Consentiment Legal:** Checkbox obligatori per acceptar els termes de l'empresa abans d'habilitar el botó de registre.  
5. **Confirmació:** Després de l'enviament correcte, l'usuari ha de rebre un missatge de confirmació d'enviament de mail de validació.

### **Escenaris d'utilitat (Gherkin)**

#### **Criteri 1: Validació de coincidència**

* **Escenari: Les contrasenyes no coincideixen.**  
* **Donat** que estic a la pàgina de registre.  
* **Quan** escric "P@ssword123" al primer camp de contrasenya i "P@ssword456" al segon.  
* **Llavors** veig un missatge d'error vermell que diu "Les contrasenyes no coincideixen" i el botó de registre queda deshabilitat.

#### **Criteris 2 i 3: Format i Validació en temps real**

* **Escenari: Format de correu incorrecte.**  
* **Donat** que estic introduint les meves dades.  
* **Quan** escric "usuari-sense-arroba" al camp de correu.  
* **Llavors** el sistema mostra una alerta visual indicant que el format del correu no és vàlid.

#### **Criteri 4: Checkbox de Termes**

* **Escenari: Intent de registre sense acceptar termes.**  
* **Donat** que he omplert tots els camps correctament.  
* **Quan** no marco el checkbox de "Termes i Condicions".  
* **Llavors** el botó de "Crear compte" roman bloquejat (estat disabled).

#### **Criteri 5: Flux de finalització**

* **Escenari: Registre completat amb èxit.**  
* **Donat** que he omplert el formulari i acceptat els termes.  
* **Quan** faig clic a "Registrar-me".  
* **Llavors** sóc redirigit a una pantalla amb el missatge "Verifica el teu correu" i s'envia automàticament el mail de validació.

## **Desglossament de Tasques Tècniques**

1. **Maquetació HTML:** Crear l'estructura del formulari amb els 5 inputs (Email x2, Password x2, Checkbox) i el botó de submit.  
2. **Estils CSS:** Dissenyar els estats valid i invalid dels inputs i l'estil del botó deshabilitat.  
3. **Lògica de Validació (JS):** Crear funcions de validació amb Expressions Regulars (Regex) per al correu i la força de la contrasenya.  
4. **Control d'Estat:** Implementar la lògica per comparar els camps duplicats en temps real.  
5. **Integració API:** Configurar la crida POST al servidor per enviar les dades i gestionar la resposta.

## **Organització en Tauler Kanban**

| Backlog | To Do | Doing | Test | Done   |
| :---- | :---- | :---- | :---- | :---- |
| Integració API | Estils CSS | Maquetació HTML | Validació JS | Definició CA |
|  | Lògica Validació |  |  |  |

### **Priorització MoSCoW**

* **🟢 Must-Have:** Formulari funcional, validació de camps buits i enviament de dades.  
* **🟡 Should-Have:** Validació en temps real i missatges d'error dinàmics.  
* **🔵 Could-Have:** Indicador visual de fortalesa de la contrasenya.  
* **🔴 Won't-Have:** Opció de registre a través de Google o Facebook.

## **Esquema Pàgina Notion**

Enllaç al Notion:

Estructura:

* **Títol:** Projecte Registre Frontend \- Botiga Online  
* **User Story:** Còpia literal de l'enunciat.  
* **CA & Gherkin:** Taula resumida amb els punts anteriors.  
* **Enllaç Kanban:** Link al tauler de Trello/Jira.  
* **Codi Complex:** Screenshot de la funció handleValidation().