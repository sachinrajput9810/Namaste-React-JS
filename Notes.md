## Package.json file => configuration file for all the packages/ dependencies we are using in our project(like tracking the version of the pkgs)

## bundler => to compress , minimize  , clean the html , css and js files before sending them 

## parcel to bundle the files

## dependencies => dev and production dependency

## eg 2.34.45 version

# TILDE(~) AND CARET(^)

## 2 is major version 
## 34 minor version 
## 45 is the patch version

## ~(tilde) => allows the automatic update to the patch version only not above that . suitable when u want more control over updates and predictability 

## eg 2.3.1 => 2.3.2 , 2.3.3 , 2.3.4

## ^(caret) => allows the automatic updates to the patch and minor version , not to major version  . suitable when u want to keep non breaking updates

## eg 2.3.1 => 2.4.2 , 2.5.6 -->
---------------------------------------------------------




## package-lock.json -> keeps the track of the exact version of all the dependencies of my project




---------------------------------------------------------------
## <!-- so its obvious to put package and package lock files onto the git not node modules . coz from both of them i can regenerate node modules -->

## <!-- Even in case you delete the node modules we can regenerate using the "npm install" command using the pkg and pkg-lock json files -->

## <!--when u install parcel , node module folder is created which contains all the dependencies my project needs . 

## <!-- But after installing parcel there are other dependencies that are installed along with parcel , these are the dependencies which my parcel needs , this is called transitive dependency -->


 ## NPM VS NPX 

## <!-- npm is used to install the certain dependency in our project globally  -->

## <!-- npx is used to execute the certain dependency without installing it from npm registry . -->



-----------------------------------------------------------


## PARCEL CACHE AND DIST FOLDER 

## <!-- 

## .parcel-cache => contains the cached files containing the meta data which dec the build time . In short if checks which files need to be re-processed and which needs to be used from cache 

## dist(distribution) => contains the files that are optimized and are send to the deployment



## -->


## <!-- Its preferable to install react and react dom using npm to our node module instead of using cdn links as its the costly operation , includes network calls and can raise issue with changing version  -->







## FLOW OF THE STEPS

 ## <!-- 
 ## 1) npm init => package.json file 
 ## 2) npm install -D parcel (to install parcel as dev dependency)
 ## 3) npx parcel build index.html => to generate the dist and parcel-cache files
 ## 4) npx parcel index.html (to execute our app using parcel through our src file index.htm)



 
 ## -->