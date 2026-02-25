# Plan des ajouts - Carte de Mariage

## Résumé des éléments à ajouter

### 1. Date et Heure
- **Lundi 11 mai 2026, à 17h**

### 2. Lieu - Réception
- **KEDMA**
- Neve Ilan (en dessous)

### 3. Phrase mémoire
- "Une douce pensée à nos grands parents qui veillent sur nous"

### 4. Carte + Waze
- Capture d'écran de la carte
- Logo Waze cliquable pour s'y rendre

### 5. Programme
- **17h** : Houppa (préciser : avant la tombée de la nuit)
- **Réception** : Cocktail dînatoire (plus classe que "buffet")

### 6. Formulaire RSVP
| Champ | Obligatoire |
|-------|-------------|
| Nom Prénom | Oui |
| Présence (Oui/Non) | Oui |
| Nombre d'adultes | Si présent |
| Nombre d'enfants -6 ans | Optionnel |
| Email | Oui |
| Message pour les mariés | Optionnel |
| Bouton Envoyer | - |

---

## Composants à créer

- [ ] `EventDate.jsx` - Date et heure
- [ ] `EventLocation.jsx` - Lieu (KEDMA, Neve Ilan)
- [ ] `MemoryPhrase.jsx` - Phrase pour les grands-parents
- [ ] `LocationMap.jsx` - Carte + lien Waze
- [ ] `Programme.jsx` - Programme de la soirée
- [ ] `RSVPForm.jsx` - Formulaire de confirmation

---

## Ordre dans la carte (de haut en bas)

1. HebrewTitle (existant)
2. FamilyNames (existant)
3. AnnouncementText (existant)
4. CoupleNames (existant)
5. ClosingText (existant)
6. **EventDate** (nouveau)
7. **EventLocation** (nouveau)
8. **MemoryPhrase** (nouveau)
9. **Programme** (nouveau)
10. **LocationMap** (nouveau)
11. **RSVPForm** (nouveau)

---

## Progression

- [x] Étape 1 : EventDate
- [x] Étape 2 : EventLocation
- [x] Étape 3 : MemoryPhrase
- [x] Étape 4 : Programme
- [x] Étape 5 : LocationMap
- [x] Étape 6 : RSVPForm
- [x] Intégration dans Card.jsx
