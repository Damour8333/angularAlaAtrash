echo "# angularAlaAtrash" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Damour8333/angularAlaAtrash.git
git push -u origin main



résumé de la premiére partie




https://fr.wikipedia.org/wiki/V8_(moteur_JavaScript)




définition de ECMASCRIPT 
le typescript est inclus le ts va devenir du js 

//ceci est un guide pour apprendre le javascript 
https://github.com/airbnb/javascript


la portée des globles
on commence par const 
const lukeSkywalker = 'Luke Skywalker';

// bad
const obj = {
  lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
  lukeSkywalker,
};

https://en.wikipedia.org/wiki/Ryan_Dahl
https://fr.wikipedia.org/wiki/Node.js
https://www.codecademy.com/resources/blog/what-is-front-end/
https://nestjs.com/


<!-- 2 eme cours -->

une bibliothéque en javascript 
Il est possible que chacun de ces développeurs Web ait écrit son propre code JavaScript pour réaliser un diaporama, mais beaucoup de développeurs réutilisent le même code. En tant que programmeur, on doit réutiliser du code existant quand on le peut, afin de ne pas perdre de temps à écrire du code qu'un autre programmeur a déjà rédigé.
En JavaScript, la façon de procéder est d'utiliser une bibliothèque. Une bibliothèque est un fichier JavaScript qui contient un ensemble de fonctions, et ces fonctions exécutent des tâches utiles à votre page Web.
jqury
react
lodash//pas mal  du tout 
rx js
d3js
https://kinsta.com/fr/blog/bibliotheques-javascript/


Module c'est un regroupement de service des compement et des directivve  c'est comme un sac 

le compoment est composé de html /css / js ts  il est toujours relatif  a quelquchose de visuel
 uun module peut vivre sans compoment 
 un compoment ne peut pas vivre sans module 
 le module c'est comme une valise 
 on peut se partager le travai plus aisaiment avec les modules 

 <!-- directives -->
 il joue sur le  comportement
le directive  est lié  a un morceau visuel de la page 
par exemple pour un hover sur le bouton


<!-- service -->
j'ai  écrit mon code une fois je l'ai réutilisé plusieurs fois 
les services qu'on les injecte dans les compoments 

<!-- 3eme cours  -->

decorateur 
on voi

dependancy
 

 framework c 'est une solution compléte il y a déja tout
 le  plombier c'est pas conseillé de changer

 la librairie c'est un professionel qui esst spécialisé 

 angular c 'est une solution compléte 
 c'est angular qui import et react qui vient 

 le module il déclare dess componements
 et il importe d' autres module

 le componement html css et js c'est le coté visuel
 un compoment appelle un autre un compoment comme il peut appeller un directive  c'est comme  des lego 
le fait d'ajouter un lego c 'est la directive
 ngFor = c'eest une directive qui répéte plusieurs fois  mémé code

 ngif =   


services 

dependency injenctipn  a 19.18

voir les instance 

https://en.wikipedia.org/wiki/Dependency_injection
la creation du service 

<!--4 eme cous angular -->
le prefixe ça donne l'identité de l'application 

mis en place le projet fonctionnel 
angular +node 
2/ng new  petstore
3/ng serve localhost 42000
4componeny.html  hello world 
5/on fait les accollades les data banding 
les accollades disent je suis du code 
<!-- 5eme cours -->
architecture 
build 
angular.json
test unitaire app.compoment.spec.ts  **************************************voir sur web
dev dependencies

<!-- 6em cours  -->
routing module
il fait quoi 
il va ajouter un module qui s'appelle app-routing-mdule.ts
export module --routing 

en cas d'oubli du routing c'estng generate module app-routing --flat --module-app 1.20
creation d'un compoment
ng serve ou npm run start  pour lancer le serveur localhost 
***************************************pour faire un component 
ng generate name
ng generate detail
4 fichiers  html css spec pour les test unitaires  et compoments pour la partie compoments

1/on copie le selector dans detail.compoment.ts par exemple ,et on le copie dans app.compoment. html comme ça <pet-home><pet-home>
ensuite en lance le serveur et en verifie sur le navigateur 
2/Ensuite on va importer  nos deux modules  dans app-routing.module.ts 
import { DetailComponent } from './detail/detail.component' //on indique le chemin du detail compoment pour l'exporter dans le fichier app.routing.module.ts 
import { HomeComponent } from './home/home.component'
3/Ensuite en remplie notre objet  avec path et component dans app-routing.module.ts

on se base sur le fichier index.html et <base href="/"> pour remplir le tableau route 
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'detail/:id/:name', component: DetailComponent}
];

5/on  remplace <pet-home><pet-home>
<router-outlet></router-outlet>
j'en suis a 33min
<!-- npm -->
définition npm
echo "# ala-trash" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Damour8333/ala-trash.git
git push -u origin main