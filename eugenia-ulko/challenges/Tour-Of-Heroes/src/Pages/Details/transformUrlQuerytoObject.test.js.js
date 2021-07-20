'Given a transformUrlQuerytoObject function';
'When is invoked with a valid search string';
'Then returns an object';

'When is invoked with ?heroId=14';
'Then heroId should be a key in the returned object';
'Then heroId should should poin to 14';

'When is invoked with ?heroId=14&heroName=Celeritas';
'Then heroId should be a key in the returned object';
'Then heroName should be a key in the returned object';
'Then heroName key should point to Celeritas';

'And heroId=14 is included';
'Then heroId should be a key in the returned object';
