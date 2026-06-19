# HRnet — Application de gestion des employés

## Contexte

Ce projet a été réalisé dans le cadre de la formation **Développeur d'application JavaScript React** proposée par [OpenClassRooms](https://openclassrooms.com/).

Il s'agit du **Projet 14** : migrer une application interne d'entreprise (HRnet) depuis jQuery vers React, en améliorant les performances, la maintenabilité et l'expérience utilisateur.

---

## Objectif du projet

L'application **HRnet** permet aux équipes RH de :

- **Créer un nouvel employé** via un formulaire (nom, prénom, date de naissance, adresse, département, etc.)
- **Consulter la liste des employés** dans un tableau paginé, triable et avec recherche

La migration jQuery → React impliquait également de remplacer les plugins jQuery utilisés dans l'ancienne version par des composants React. Dans ce cadre, le plugin de tableau a été remplacé par le package npm `@fooxit/tab-data`, développé spécifiquement pour ce projet.

---

## Stack technique

| Technologie      | Version | Rôle                           |
| ---------------- | ------- | ------------------------------ |
| React            | 19      | UI                             |
| TypeScript       | 6       | Typage statique                |
| React Router     | 7       | Routage client                 |
| Vite             | 8       | Bundler / serveur de dev       |
| @fooxit/tab-data | 1.1.1   | Composant tableau (npm custom) |

---

## Prérequis

- [Node.js](https://nodejs.org/) v18 ou supérieur
- Un serveur back-end HRnet actif sur `http://localhost:3000` (endpoints `/employee` et `/department`)
  → Dépôt back-end : [https://github.com/fooxiit/hr-net-back](https://github.com/fooxiit/hr-net-back)

---

## Installation

```bash
# Cloner le dépôt
git clone <url-du-repo>
cd hr-net

# Installer les dépendances
npm install
```

---

## Lancer l'application

```bash
# Mode développement
npm run dev
```

L'application sera disponible sur [http://localhost:5173](http://localhost:5173).

```bash
# Build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## Structure du projet

```
src/
├── components/
│   ├── Header/          # En-tête de l'application
│   ├── Modal/           # Composant modal (ModalProvider + ModalContext)
│   └── NewEmployeeForm  # Formulaire de création d'employé
├── constant/
│   └── USA_STATE.ts     # Liste des états américains
├── hook/
│   └── useModalContext  # Hook d'accès au contexte modal
├── layout/
│   └── AppLayout        # Layout principal (NavBar + outlet)
├── pages/
│   ├── Home page/       # Page d'accueil (formulaire)
│   └── Employee/        # Page liste des employés
├── routes/              # Définition des routes React Router
└── services/            # Appels API (employees, departments)
```

---

## API attendue

Le front-end consomme une API REST locale :

| Méthode | Endpoint      | Description                        |
| ------- | ------------- | ---------------------------------- |
| GET     | `/employee`   | Récupère la liste des employés     |
| POST    | `/employee`   | Crée un nouvel employé             |
| GET     | `/department` | Récupère la liste des départements |

L'URL de base est configurable dans [src/services/URL.ts](src/services/URL.ts).
