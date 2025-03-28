# **Follow Beers App Test**

## Les bonnes pratiques

- Les README sont à jour et cela facilite la prise en main de l’ application.
- Il y a de la documentation (présence d’un Swagger).
- L’arborescence du projet est propre et cohérente.
- Les responsabilités sont bien définies entre les composants et entre le front et le back (par exemple le calcul du score est côte back).
- Il y a une séparation de la logique et de l’affichage.
- Il y a des outils mis en place pour assurer la performance (utilisation de la balise <Suspense>, Loader etc).
- L’utilisation de Typescript apporte un rempart structurel.
- L’utilisation d’un manager de state est intéressant pour gérer les states des différents composants et les actions asynchrones.
- Le code est lisible, bien indenté et les fichiers peu longs
- Les namings sont parlants.

## Les mauvaises pratiques

- Certains fichiers de composants sont en .js et .jsx .
- Certains typages sont manquants et il y a parfois l’utilisation du type “any”.
- Il y a un peu de code mort (dans un .css).
- Il n’y a pas de linter attaché au projet.
- Il n’y a pas de tests.

## Les axes d’amélioration

- Mettre en place des tests.
- Ajouter un Linter.
- Ajouter de la gestion d’erreur pour aider à débugger et améliorer l’UX.
- Debug du createBeer : problème de stockage à la création dans le store (si on veut le noter juste après la création cela ne fonctionne pas).
- Debug des valeurs du score : valeur  “1e+1” sur nouvelles bières et score supérieur à 9.
- Ajouter des placeholders
- Amélioration UX des CTA
- Trier les bières par score.
