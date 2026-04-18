# **Guia d'Estudi: Git i GitHub**

## **1\. Conceptes Fonamentals**

* **Git (Sistema Local):** Motor de control de versions de línia d'ordres (CLI). Gestiona snapshots de fitxers localment per fer un seguiment de l'historial.1  
* **GitHub (Plataforma al Núvol):** Servei web que allotja repositoris Git. Afegeix eines de col·laboració com Pull Requests, gestió d'incidències (Issues) i automatització (Actions).1  
* **Estructura de dades:** Git utilitza captures (snapshots) en lloc de deltes. Cada fitxer té una suma de verificació única (SHA-1 de 40 caràcters) per garantir la integritat.2

## **2\. Configuració de l'Entorn**

Git utilitza tres nivells de configuració que es sobreescriuen (System \> Global \> Local) 5:

* **Identitat:** Imprescindible per a l'autoria dels commits.  
  * git config \--global user.name "El Teu Nom"  
  * git config \--global user.email "el\_teu@correu.com" 6  
* **Editor per defecte:** Per escriure missatges de commit o resoldre fusions.  
  * Exemple VS Code: git config \--global core.editor "code \--wait" 5  
* **Gestió de Paquets (Corepack):** Utilitzat en Node.js per forçar l'ús d'una versió exacta de gestor de paquets (npm, pnpm, yarn) mitjançant el camp packageManager al package.json.9

## **3\. Cicle de Vida del Codi (Flux de Treball)**

El flux bàsic de Git es divideix en tres àrees 2:

1. **Working Directory (Directori de Treball):** On edites els fitxers físicament.10  
2. **Staging Area (Àrea de Preparació / Index):** On prepares els canvis que vols incloure al següent commit mitjançant git add.10  
3. **Repository (Repositori /.git):** On es guarden permanentment les versions amb git commit.10

### **Ordres d'Inspecció**

* git status: Mostra fitxers modificats, preparats o no seguits (untracked). L'opció \-s dóna una vista curta.10  
* git log: Llista l'historial de commits. Opcions útils: \--oneline (resum), \-p (mostra canvis de codi), \--graph (visualitza branques).12

## **4\. Commits Efectius (Conventional Commits)**

Estàndard per a missatges de commit amb el format: \<tipus\>(àmbit opcional): \<descripció\>.13

* **Tipus comuns:** feat (nova funcionalitat), fix (correcció), docs (documentació), style (format), refactor (millora de codi), test (proves).13  
* **Breaking Changes:** S'indiquen amb un \! abans dels dos punts (ex: feat\!: canvi que trenca compatibilitat) o al peu del missatge.14

## **5\. Col·laboració i Sincronització Remota**

* **Vincular:** git remote add origin \<url\> connecta el teu repositori local amb un de GitHub.16  
* **Clonar:** git clone \<url\> descarrega un repositori sencer amb tot el seu historial.12  
* **Enviar:** git push origin \<branca\> puja els teus commits al servidor.16  
* **Rebre:**  
  * git fetch: Descarrega els canvis del servidor sense fusionar-los (és l'opció segura).16  
  * git pull: Fa un fetch i immediatament un merge a la teva branca actual.16

## **6\. Branques i Fusions**

* **Branques:** Punter cap a un commit. git checkout \-b \<nom\> crea i canvia a una branca nova.20  
* **Fusió (Merge):** git merge \<origen\> integra els canvis d'una branca a la que tenim activa.3  
* **Conflictes de Fusió:** Ocorren quan es canvien les mateixes línies en branques diferents. Git marca el fitxer amb 3:  
  * \<\<\<\<\<\<\< HEAD (el teu codi local)  
  * \======= (separador)  
  * \>\>\>\>\>\>\> nom-branca (codi entrant)  
* **Resolució:** Editar el fitxer manualment (o amb eines com el Merge Editor de VS Code), fer git add per marcar-lo com resolt i finalitzar amb git commit.21

## **7\. Protocols de Treball en Equip (GitHub)**

* **Forking Workflow:** Fas una còpia personal d'un repositori extern (fork), hi treballes i després demanes incorporar els canvis.1  
* **Pull Request (PR):** Sol·licitud per fusionar el teu codi. Permet la revisió per part d'altres i el debat abans de la integració final.25  
* **Estratègies de Ramificació:**  
  * **GitHub Flow:** Branques de funcionalitat (feature branches) curtes que es fusionen directament a main.27  
  * **Git Flow:** Model més rígid amb branques de develop, release i hotfix.27

## **8\. Gestió i Automatització de Projectes**

* **GitHub Issues:** Per fer seguiment de tasques o errors. Poden tenir sub-issues per dividir el treball.29  
* **Milestones (Fites):** Grups d'issues amb una data límit i percentatge de progrés.31  
* **GitHub Projects:** Taulers (Kanban o taules) per gestionar el flux de treball de tot l'equip.29  
* **GitHub Actions (CI/CD):** Fluxos de treball (YAML) que s'activen automàticament (ex: en fer un push) per passar tests o desplegar el codi.35  
* **Git Hooks:** Scripts locals (com pre-commit) que s'executen al teu ordinador abans de certes accions per validar el format o evitar pujar codi trencat.37

#### **Works cited**

1. Git vs GitHub | Git And GitHub Difference | What Is Git And GitHub? | Git And GitHub | Simplilearn \- YouTube, accessed on April 13, 2026, [https://www.youtube.com/watch?v=xJXgvr8bPes](https://www.youtube.com/watch?v=xJXgvr8bPes)  
2. 1.3 Getting Started \- What is Git?, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F](https://git-scm.com/book/en/v2/Getting-Started-What-is-Git%3F)  
3. Basic Branching and Merging \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging)  
4. Conventional Commits \- Nick J Lyon, accessed on April 13, 2026, [https://njlyon0.github.io/tips/commits.html](https://njlyon0.github.io/tips/commits.html)  
5. 1.6 Getting Started \- First-Time Git Setup, accessed on April 13, 2026, [https://git-scm.com/book/ms/v2/Getting-Started-First-Time-Git-Setup](https://git-scm.com/book/ms/v2/Getting-Started-First-Time-Git-Setup)  
6. First-Time Git Setup \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup)  
7. Setting your username in Git \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git](https://docs.github.com/en/get-started/git-basics/setting-your-username-in-git)  
8. A3.1 Appendix C: Git Commands \- Setup and Config, accessed on April 13, 2026, [https://git-scm.com/book/ms/v2/Appendix-C:-Git-Commands-Setup-and-Config](https://git-scm.com/book/ms/v2/Appendix-C:-Git-Commands-Setup-and-Config)  
9. How To Use Corepack | Total TypeScript, accessed on April 13, 2026, [https://www.totaltypescript.com/how-to-use-corepack](https://www.totaltypescript.com/how-to-use-corepack)  
10. Understanding the Git Workflow: Working Directory, Staging, and Repository \- Keno Kivabe, accessed on April 13, 2026, [https://blogs.kenokivabe.com/article/understanding-the-git-workflow-working-directory-staging-and-repository](https://blogs.kenokivabe.com/article/understanding-the-git-workflow-working-directory-staging-and-repository)  
11. Staging Area \- Git \- Mintlify, accessed on April 13, 2026, [https://www.mintlify.com/git/git/concepts/staging-area](https://www.mintlify.com/git/git/concepts/staging-area)  
12. Getting a Git Repository \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository)  
13. Conventional Commit Specification | by Pranay Bathini \- Medium, accessed on April 13, 2026, [https://pranaybathini.medium.com/conventional-commit-specification-ecd701b0bbb2](https://pranaybathini.medium.com/conventional-commit-specification-ecd701b0bbb2)  
14. Conventional Commits Cheatsheet \- GitHub Gist, accessed on April 13, 2026, [https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13](https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13)  
15. Conventional Commits, accessed on April 13, 2026, [https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)  
16. Working with Remotes \- Git, accessed on April 13, 2026, [https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes)  
17. Difference Between Git Fetch and Git Pull \- GeeksforGeeks, accessed on April 13, 2026, [https://www.geeksforgeeks.org/git/git-difference-between-git-fetch-and-git-pull/](https://www.geeksforgeeks.org/git/git-difference-between-git-fetch-and-git-pull/)  
18. Git pull vs fetch: What's the difference? \- TheServerSide, accessed on April 13, 2026, [https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Git-pull-vs-fetch-Whats-the-difference](https://www.theserverside.com/blog/Coffee-Talk-Java-News-Stories-and-Opinions/Git-pull-vs-fetch-Whats-the-difference)  
19. What's the difference between "git fetch" and "git pull"? | Learn Version Control with Git, accessed on April 13, 2026, [https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull](https://www.git-tower.com/learn/git/faq/difference-between-git-fetch-git-pull)  
20. Git tags vs branches: Differences and when to use them \- CircleCI, accessed on April 13, 2026, [https://circleci.com/blog/git-tags-vs-branches/](https://circleci.com/blog/git-tags-vs-branches/)  
21. Resolving a merge conflict using the command line \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/articles/resolving-a-merge-conflict-using-the-command-line](https://docs.github.com/articles/resolving-a-merge-conflict-using-the-command-line)  
22. How Do I Resolve Merge Conflicts? \- DEV Community, accessed on April 13, 2026, [https://dev.to/github/how-do-i-resolve-merge-conflicts-5438](https://dev.to/github/how-do-i-resolve-merge-conflicts-5438)  
23. Resolve merge conflicts in VS Code, accessed on April 13, 2026, [https://code.visualstudio.com/docs/sourcecontrol/merge-conflicts](https://code.visualstudio.com/docs/sourcecontrol/merge-conflicts)  
24. GitHub \- susam/gitpr: Quick reference guide on fork and pull request workflow, accessed on April 13, 2026, [https://github.com/susam/gitpr](https://github.com/susam/gitpr)  
25. About pull request reviews \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews)  
26. Browsing the web \- Learn web development | MDN, accessed on April 13, 2026, [https://developer.mozilla.org/en-US/docs/Learn\_web\_development/Getting\_started/Environment\_setup/Browsing\_the\_web\#using\_ai](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#using_ai)  
27. Git branching strategies \- DEV Community, accessed on April 13, 2026, [https://dev.to/574n13y/git-branching-strategies-2i0i](https://dev.to/574n13y/git-branching-strategies-2i0i)  
28. Branching strategies \- GitLab Docs, accessed on April 13, 2026, [https://docs.gitlab.com/user/project/repository/branches/strategies/](https://docs.gitlab.com/user/project/repository/branches/strategies/)  
29. GitHub Issues · Project planning for developers, accessed on April 13, 2026, [https://github.com/features/issues](https://github.com/features/issues)  
30. Best practices for Projects \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects)  
31. Creating and editing milestones for issues and pull requests \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/creating-and-editing-milestones-for-issues-and-pull-requests](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/creating-and-editing-milestones-for-issues-and-pull-requests)  
32. About milestones \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/issues/using-labels-and-milestones-to-track-work/about-milestones](https://docs.github.com/issues/using-labels-and-milestones-to-track-work/about-milestones)  
33. What is the difference / relationship between GitHub Projects and Milestones?, accessed on April 13, 2026, [https://stackoverflow.com/questions/39591795/what-is-the-difference-relationship-between-github-projects-and-milestones](https://stackoverflow.com/questions/39591795/what-is-the-difference-relationship-between-github-projects-and-milestones)  
34. About Projects \- GitHub Docs, accessed on April 13, 2026, [https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects](https://docs.github.com/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)  
35. Understanding GitHub Actions, accessed on April 13, 2026, [https://docs.github.com/articles/getting-started-with-github-actions](https://docs.github.com/articles/getting-started-with-github-actions)  
36. Mastering CI/CD with GitHub Actions for Modern Web Development \- Medium, accessed on April 13, 2026, [https://medium.com/@bhargavkoya56/mastering-ci-cd-with-github-actions-for-modern-web-development-6fb8bed2f6ee](https://medium.com/@bhargavkoya56/mastering-ci-cd-with-github-actions-for-modern-web-development-6fb8bed2f6ee)  
37. Mastering Git Hooks: A Cheat Sheet for CI/CD Ninjas \- DEV Community, accessed on April 13, 2026, [https://dev.to/copyleftdev/mastering-git-hooks-a-cheat-sheet-for-cicd-ninjas-3057](https://dev.to/copyleftdev/mastering-git-hooks-a-cheat-sheet-for-cicd-ninjas-3057)  
38. Pre-Commit or CI/CD \- Craig Motlin \- Medium, accessed on April 13, 2026, [https://motlin.medium.com/pre-commit-or-ci-cd-5779d3a0e566](https://motlin.medium.com/pre-commit-or-ci-cd-5779d3a0e566)