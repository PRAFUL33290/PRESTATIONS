# Prestations — Parvati India

Page d’organisation des clients / devis, triés par date d’événement.

## Contenu

| Fichier       | Rôle                          |
|---------------|-------------------------------|
| `index.html`  | Structure de la page          |
| `styles.css`  | Styles (fond blanc)           |
| `app.js`      | Données clients + interactivité |

## Clients inclus

1. **1er sept. 2026** — Mariage Nabila & Ashley (6 danseurs, 452 €) — annonce par Sylvie
2. **26 sept. 2026** — Isabelle Fara / Siblu, Ronce-les-Bains — 2 danseurs, 500 € TTC (devis n°2026-0726-ISF) ; bon pour accord + acompte 166,66 € attendus avant le 26 août
3. **3 oct. 2026** — Nuit des Bibliothèques, Mérignac — Delphine Mercury (16 artistes, 704 €)
4. **17 oct. 2026** — Soirée Inde, Saint-Avit-de-Vialard — Michel Gadroy (4 danseurs, 570 €)

## Lancer en local

```bash
# Option simple (Python)
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

Ou ouvrir `index.html` directement dans le navigateur.

## Modifier les données

Éditer le tableau `PRESTATIONS` dans `app.js` pour ajouter un client, changer un statut ou un tarif.

## ⚠️ Documents sensibles

Les dossiers clients contenant des **devis, RIB, coordonnées bancaires ou captures de boîte mail**
ne doivent **jamais** être commités. Ils sont exclus par `.gitignore` (`*.pdf`, `*RIB*`, `Screen.png`,
dossiers `private/`, `prive/`, `confidentiel/`…).

Seules les informations non sensibles (dates, effectif, montant total, n° de devis) sont reportées
dans `app.js`. **Aucun IBAN / RIB / adresse personnelle** ne doit être saisi dans le site.

Avant de commiter, vérifier :

```bash
git status --short --ignored
```
