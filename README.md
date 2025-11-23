# Workspace-Staff-Manager
L’entreprise WorkSphere souhaite disposer d’une application web innovante dédiée à la gestion visuelle et interactive du personnel au sein de ses espaces de travail.
Contexte du projet
Objectifs généraux

Permettre l’ajout, le déplacement et la suppression d’employés directement depuis une interface graphique représentant les locaux.
Assurer le respect des règles métier : chaque employé ne peut être positionné que dans les zones autorisées à son rôle (ex. : seuls les réceptionnistes peuvent occuper le poste d’accueil).
Offrir une expérience utilisateur fluide, intuitive et responsive, accessible depuis différents appareils (ordinateur, tablette, smartphone).
Centraliser la gestion des données du personnel et la visualisation spatiale au sein d’une même plateforme.
User Stories

En tant que concepteur, je vais m’assurer que l’interface soit intuitive et fluide pour l’utilisateur.
En tant que concepteur, je vais définir une palette de couleurs cohérente et des icônes intuitives pour faciliter la navigation.
En tant que concepteur, je vais réaliser le version Desktop et Mobile de l’application avec un design moderne, utilisant Flexbox et Grid, des formes arrondies, et des boutons colorés (vert, orange, rouge).
En tant que développeur Front-End, je vais créer la structure HTML complète avec une section latérale affichant la liste des employés non assignés (“Unassigned Staff”) et un bouton “Add New Worker”.
En tant que développeur Front-End, je vais coder la modale d’ajout d’un employé, avec les champs suivants : **Nom, Rôle, Photo (URL), Email, Téléphone, Expériences professionnelles (formulaire dynamique permettant d’ajouter plusieurs expériences)**.
En tant que développeur Front-End, je vais implémenter la prévisualisation de la photo dans la modale.
En tant que développeur Front-End, je vais afficher sur la partie principale le plan d’étage du bâtiment, comportant 6 zones :
Salle de conférence
Réception
Salle des serveurs
Salle de sécurité
Salle du personnel
Salle d’archives
En tant que développeur Front-End, je vais mettre en place les restrictions logiques suivantes :
Réception → uniquement les Réceptionnistes
Salle des serveurs → uniquement les Techniciens IT
Salle de sécurité → uniquement les Agents de sécurité
Manager → peut être affecté partout
Nettoyage → peut être affecté partout sauf à la Salle d’archives
Autres rôles → accès libre sauf aux zones restreintes
En tant que développeur Front-End, je vais ajouter un bouton “X” sur chaque employé pour le retirer de la zone et le replacer dans la liste “Unassigned”.
En tant que développeur Front-End, je vais permettre d’ouvrir un profil détaillé en cliquant sur un employé, affichant : **Photo grand format, Nom, rôle, email, téléphone, expériences, localisation actuelle **
En tant que développeur Front-End, je vais intégrer un bouton “+” dans chaque zone, permettant de sélectionner un employé parmi ceux éligibles à cette zone.
En tant que développeur Front-End, je vais faire en sorte que les zones vides obligatoires apparaissent en rouge pâle, sauf la salle de conférence et la salle du personnel (accessibles à tous).
En tant que développeur Front-End, je vais ajouter des limitations sur le nombre d'employés par zone .
En tant que développeur Front-End, je vais m’assurer que l’interface soit responsive sur tous les écrans et propose des animations CSS fluides.
En tant que développeur Front-End, je vais m’assurer que l’interface soit intuitive et fluide pour l’utilisateur.
En tant que développeur Front-End, je vais valider le code HTML et CSS avec le W3C Validator.
En tant que développeur Front-End, je vais publier le projet sur GitHub Pages ou Vercel.
En tant que Scrum Master, je vais utiliser Trello, jira ou GitHub Projects pour organiser les User Stories et suivre l’avancement.
En tant que Scrum Master, je vais gérer les branches Git pour structurer le développement. (Optionnel)
En tant que Scrum Master, je vais présenter le projet final en démontrant toutes les fonctionnalités dynamiques.
Tailles d’écrans à gérer

Portrait :
Grand écran d’ordinateur : plus de 1280px de large
Petit écran d’ordinateur : entre 1024px et 1279px
Tablette : entre 768px et 1023px
Mobile : jusqu’à 767px
Paysage :
Mobile : entre 768px et 1023px
Tablette : entre 1024px et 1279px
Bonus (optionnels mais valorisés)

En tant que développeur Front-End, je vais permettre le glisser-déposer (Drag & Drop) des employés entre zones et vers la section “Unassigned”.
En tant que développeur Front-End, je vais ajouter un bouton “Edit” pour modifier les informations d’un employé depuis la liste “Unassigned”.
En tant que développeur Front-End, je vais ajouter une fonction de recherche et filtrage des employés par nom ou rôle.
En tant que développeur Front-End, je vais sauvegarder automatiquement l’état du plan dans le localStorage.
En tant que développeur Front-End, je vais créer un mode “Réorganisation automatique”, qui répartit aléatoirement les employés selon les règles.
En tant que concepteur, je vais ajouter une photo par défaut pour les employés sans image.
Modalités pédagogiques
Vous disposez de 5 jours En autonomie pour réaliser le brief en utilisant les technologies appropriées.

Date de lancement: 14/11/2025
Date limites: 21/11/2025
Durée: 5 jours
Modalités d'évaluation
Vous avez 40 min réparti comme suite:
- Présentation du projet + Démo: 10mn
- Code review + Q&A: 10mn
- Mise en situation: 20mn
Livrables
- lien de planification
- lien de github repo
- lien de déploiement
- lien de la présentation
Critères de performance
- L’apprenant doit être capable de déposer son travail sur GitHub, d’expliquer les étapes suivies ainsi que les commandes utilisées.
- Le site doit être responsive. L’apprenant doit être en mesure d’expliquer les techniques employées (Flexbox, Grid, media queries, framework CSS, etc.).
- L’apprenant doit mettre en place une validation des formulaires et être capable d’en expliquer le fonctionnement.
- L’apprenant doit utiliser des formulaires dynamiques (ajout/suppression de champs, affichage conditionnel, etc.) et expliquer le code implémenté.
- Toutes les fonctionnalités demandées dans le cahier des charges doivent être correctement implémentées.
- L’apprenant doit être capable d’expliquer clairement la logique de son code, les méthodes et les structures utilisées etc..
- Le projet doit être planifié sur une plateforme de gestion (Jira, Trello, GitHub Projects, etc.) avec un suivi clair des tâches.
- L’apprenant doit présenter son projet de manière claire, structurée et fluide, en mettant en avant les points clés et les choix techniques.
- L’apprenant doit interagir de façon respectueuse, collaborative et professionnelle durant toute la présentation.
Situation professionnelle
Optimiser l'interface utilisateur d'une application web
Besoin visé ou problème rencontré
L'interface utilisateur actuelle est dépassée et peu conviviale, ce qui entraîne des plaintes fréquentes des utilisateurs. L'entreprise souhaite améliorer l'expérience utilisateur en créant une nouvelle interface plus moderne, conviviale et esthétique tout en conservant les fonctionnalités existantes de l'application.
