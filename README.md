# Atelier Micro Frontend (MFE)

## Objectif du projet
L'objectif de cet atelier est de construire une application **Micro Frontend (MFE)** en utilisant **Module Federation**. Le projet se compose de deux parties principales :
1. **Le shell (hôte)** : L'application principale qui charge les micro frontends.
2. **Le micro frontend "header"** : Une application distincte qui exporte un composant de header utilisé par le shell.

## Structure du projet

- **mfe-shell** : L'application hôte, qui charge le micro frontend `header`.
- **mfe-header** : Le micro frontend qui contient un simple composant de header.

## Prérequis

- **Node.js** (version 14 ou supérieure)
- **npm** (version 6 ou supérieure)

## Installation

### Étapes pour installer et lancer le projet

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/mohrem09/mfe-atelier-mohamed-remmache
