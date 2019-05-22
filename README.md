# CatMash App 
Generated using AngularCli and SringBoot initializer. 

# Front 
Angular 7 application

# Back
Java 11 Spring boot

# Database
SQLite 3.28.0

The database file MUST be named "catmash.db", if you create your own file using SQLite, execute the SQL commands in database/

# Run 
First in the cat-mash-app/ run the following command, static files should be generated in the rootRepo/src/main/resources/static/ (folder should be automatically created)

`npm install` and `ng build`

Then in the CatMash/ run 

`mvn clean install`

And finally, with the builded .JAR in the target/ 

`java -jar catmash-version.jar`