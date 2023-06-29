# Mise en place du projet

1. En étant à la racine, réaliser les commandes suivantes : 
   - `npm install`
   - `docker-compose up`
   - `node insert_data.js`

2. Se rendre à l'adresse http://localhost:8081/db/swapi/ et vérifier que la base ainsi que les tables sont créées.

3. Démarrer l'API :
   - `node index.js`

4. Obtenir son jeton jwt à partir de l'url http://localhost:3000/login / en POST avec le body suivant :
   {
      username : "kevin",
      password : "123456"
   }
   Ensuite mettre le jeton en Authorization Bearer Token dans les requêtes

5. Tester les différentes routes (GET, POST, PATCH, DELETE)
   - `http://localhost:3000/swapi/films`
   - `http://localhost:3000/swapi/films/2`

# Modèle de maturité Richardson

Le modèle de maturité de Richardson, également connu sous le nom de modèle de maturité REST, est un cadre conceptuel proposé par Leonard Richardson pour évaluer le niveau d'adoption et de maturité d'une API REST. Ce modèle est basé sur la thèse selon laquelle les API REST peuvent évoluer progressivement vers un état plus mature en respectant certaines contraintes architecturales.

Le modèle de maturité de Richardson comporte généralement quatre niveaux, souvent appelés niveaux de Richardson :

- Niveau 0 - Services Web REST : Au niveau 0, une API est simplement un service Web basé sur HTTP, sans adoption des principes fondamentaux de REST. Les services exposent généralement des opérations CRUD (Create, Read, Update, Delete) via des URI uniques, mais ils ne tirent pas parti des concepts tels que l'utilisation des méthodes HTTP appropriées (GET, POST, PUT, DELETE) ou la manipulation des ressources via des hyperliens.

- Niveau 1 - Ressources : Au niveau 1, l'API expose des ressources individuelles via des URI uniques. Chaque ressource est identifiée par un URI et peut être manipulée à l'aide des méthodes HTTP appropriées. Cependant, les relations entre les ressources ne sont pas exploitées, et il n'y a pas d'utilisation des hyperliens pour naviguer entre les ressources.

- Niveau 2 - Verbes HTTP : Au niveau 2, l'API utilise les méthodes HTTP de manière appropriée pour effectuer des opérations sur les ressources. Les méthodes GET, POST, PUT et DELETE sont utilisées pour récupérer, créer, mettre à jour et supprimer les ressources respectivement. Cela permet d'exploiter pleinement les fonctionnalités du protocole HTTP.

- Niveau 3 - Hypermedia as the Engine of Application State (HATEOAS) : Le niveau 3 est le niveau de maturité le plus élevé selon le modèle de Richardson. À ce niveau, l'API exploite pleinement le concept de HATEOAS, où les réponses incluent des liens hypertexte qui permettent aux clients de découvrir dynamiquement les ressources et les actions disponibles. Cela rend l'API plus auto-découverte et moins dépendante des connaissances préalables du client.

Il est important de noter que le modèle de maturité de Richardson n'est pas une progression linéaire, et chaque niveau représente un saut qualitatif dans la maturité de l'API REST.

# Respect du modèle de maturité Richardson

Niveau 0 - Services Web REST :

L'API SWAPI expose des opérations CRUD (Create, Read, Update, Delete) pour les ressources telles que les films, les personnages, les vaisseaux, etc. via des URI uniques. Par exemple, pour récupérer les détails d'un film, on peut envoyer une requête GET à l'URI /swapi/films/1.

Niveau 1 - Ressources :

Dans l'API SWAPI, chaque ressource est identifiée par un URI unique. Par exemple, pour accéder aux informations sur un personnage spécifique, on peut envoyer une requête GET à l'URI /swapi/people/4.

Niveau 2 - Verbes HTTP :

L'API SWAPI utilise les méthodes HTTP de manière appropriée pour effectuer des opérations sur les ressources. Par exemple, pour créer un nouveau personnage, on enverrait une requête POST à l'URI /swapi/people avec les données du personnage dans le corps de la requête.

Niveau 3 - Hypermedia as the Engine of Application State (HATEOAS) :

Au niveau 3, l'API SWAPI inclue des liens hypertexte dans les réponses, permettant aux clients de découvrir dynamiquement les ressources et les actions disponibles. Exemple : 
"starships": [
   {
      "id": 2,
      "url": "/swapi/starships/2"
   }
]

# Accés à la documentation Swagger

A la racine, le fichier swagger au format json et yaml, au choix.
Bien penser à mettre Bearer devant le token lors de l'autorisation.