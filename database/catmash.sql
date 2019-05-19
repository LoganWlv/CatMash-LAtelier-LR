-- VOTES - table DDL
create table votes (userId, catId1, catId2, isFirstCatChosen, PRIMARY KEY(userId, catId1, catId2));
