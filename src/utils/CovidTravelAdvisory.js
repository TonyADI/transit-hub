const levelFour = ['Argentina',' Bahrain','Bangladesh','Bolivia','Botswana','Brazil'
    ,'British Virgin Islands','Burma (Myanmar)','Burundi','Central African Republic'
    ,'Chile','Colombia','Congo','Costa Rica','Cuba','Cyprus','Democratic Republic of the Congo'
    ,'Fiji','French Guiana','Georgia','Guinea-Bissau','Haiti','Indonesia','Iraq','Kyrgyzstan'
    ,'Kuwait','Liberia','Madagascar','Malawi','Malaysia','Maldives','Mongolia','Mozambique'
    ,'Namibia','Nepal','Netherlands','Nicaragua','Oman','Panama','Papua New Guinea','Paraguay'
    ,'Portugal','Réunion','Rwanda','Saudi Arabia','Seychelles','Sierra Leone','Somalia'
    ,'South Africa','South Sudan','Spain','Sudan','Suriname','Syria','Tunisia','Trinidad and Tobago'
    ,'Uganda','United Arab Emirates','United Kingdom','Uruguay','Zambia','Zimbabwe'];

const levelThree = ['Afghanistan','Andorra','Armenia','Aruba','Bahamas, The','Belarus',
    'Belgium','Belize','Cambodia','Canada','Cape Verde','Denmark','Dominican Republic',
    'Easter Islandcuador','Egypt','Estoni','Eswatini','Faroe Islands','France','Greece',
    'Guadeloupe','Guatemala','Guyana','Honduras','India','Iran','Ireland','Isle of Man',
    'Israel','Italy','Japan','Jordan','Kazakhstan','Latvia','Lebanon','Lesotho','Libya',
    'Lithuania','Luxembourg','Malta','Martinique','Mexico','Montenegro','Norway','Peru',
    'Philippines','Qatar','Russia','Saint Kitts and Nevis','Saint Lucia','Saint Martin',
    'Saint Vincent and Grenadines','Sint Maarten','Slovenia','Sri Lanka','Sweden','Switzerland',
    'Thailand','Timor-Leste (East Timor)','Turkey', 'Virgin Islands, U.S'];

const levelTwo = ['Angola','Austria','Barbados','Bonaire','Cameroon','Croatia','Curaçao',
    'Czech Republic','El Salvador','Ethiopia','Finland','Germany','Guam','Guinea','Jamaica',
    'Kenya','Madeira Islands','Mauritania','Morocco','Pakistan','Puerto Rico (U.S.)','Senegal',
    'Serbia','Ukraine'];
    
const levelOne = ['Albania','American Samoa','Anguilla','Antigua and Barbuda','Australia',
    'Azerbaijan','Bermuda','Bosnia and Herzegovina','Brunei','Bulgaria','Burkina Faso',
    'Cayman Islands','Chad','China','Comoros','Cote d’Ivoire (Ivory Coast)','Dominica',
    'Djibouti','Equatorial Guinea','Falkland Islands','French Polynesia','Gabon',
    'Gambia, The','Ghana','Greenland','Grenada','Hong Kong SAR','Hungary','Iceland',
    'Kosovo','Laos','Liechtenstein','Mali','Marshall Islands','Mauritius',
    'Micronesia, Federated States of','Moldova','Montserrat','New Caledonia',
    'New Zealand','Niger','Nigeria','North Macedonia','Northern Mariana Islands',
    'Palau','Poland','Romania','Saba','Saint Barthelemy','Saint Pierre and Miquelon',
    'Singapore','Sint Eustatius','Slovakia','South Korea','Taiwan','Togo',
    'Turks and Caicos Islands (U.K.)','Vietnam'];

const levelUnknown = ['Algeria','Antarctica','Azores','Bhutan','Canary Islands',
    'Christmas Island','Cocos (Keeling) Islands','Cook Islands','Eritrea','Gibraltar',
    'Guernsey','Jersey (part of the UK)','Kiribati','Macau SAR','Mayotte','Monaco',
    'Nauru','Niue','Norfolk Island','North Korea','Pitcairn Islands (U.K.)','Saint Helena',
    'Samoa','San Marino','São Tomé and Príncipe','Solomon Islands',
    'South Georgia and the South Sandwich Islands','Tajikistan','Tanzania','Tokelau',
    'Tonga','Turkmenistan','Tuvalu','Uzbekistan','Vanuatu','Venezuela','Wake Island','Yemen'];


const countries = {Algeria: 'unknown', Antarctica: 'unknown',
    Azores: 'unknown',Bhutan: 'unknown',Canary_Islands: 'unknown',
    Christmas_Island: 'unknown',Cocos_Islands: 'unknown',
    Cook_Islands: 'unknown',Eritrea: 'unknown',Gibraltar: 'unknown',
    Guernsey: 'unknown',Jersey: 'unknown',Kiribati: 'unknown',
    Macau_SAR: 'unknown',Mayotte: 'unknown',Monaco: 'unknown',
    Nauru: 'unknown',Niue: 'unknown',Norfolk_Island: 'unknown',
    North_Korea: 'unknown',Pitcairn_Islands: 'unknown',Saint_Helena: 'unknown',
    Samoa: 'unknown',San_Marino: 'unknown',São_Tomé: 'unknown',
    Solomon_Islands: 'unknown',South_Georgia: 'unknown',Tajikistan: 'unknown'
    ,Tanzania: 'unknown',Tokelau: 'unknown',Tonga: 'unknown',
    Turkmenistan: 'unknown',Tuvalu: 'unknown',Uzbekistan: 'unknown',
    Vanuatu: 'unknown',Venezuela: 'unknown',Wake_Island: 'unknown',
    Yemen: 'unknown', Albania: 'one', American_Samoa: 'one', Anguilla: 'one', 
    Antigua_and_Barbuda: 'one', Australia: 'one', Azerbaijan: 'one', Benin: 'one', 
    Bermuda: 'one', Bosnia_and_Herzegovina: 'one', Brunei: 'one', Bulgaria: 'one', 
    Burkina_Faso: 'one', Cayman_Islands: 'one', Chad: 'one', China: 'one', Comoros: 'one', 
    Ivory_Coast: 'one', Dominica: 'one', Djibouti: 'one', Equatorial_Guinea: 'one', 
    Falkland_Islands: 'one', French_Polynesia: 'one', Gabon: 'one', Gambia: 'one', 
    Ghana: 'one', Greenland: 'one', Grenada: 'one', Hong_Kong: 'one', Hungary: 'one', 
    Iceland: 'one', Kosovo: 'one', Laos: 'one', Liechtenstein: 'one', Mali: 'one', 
    Marshall_Islands: 'one', Mauritius: 'one', Micronesia: 'one', Moldova: 'one', 
    Montserrat: 'one', New_Caledonia: 'one', New_Zealand: 'one', Niger: 'one', 
    Nigeria: 'one', North_Macedonia: 'one', Northern_Mariana_Islands: 'one', 
    Palau: 'one', Poland: 'one', Romania: 'one', Saba: 'one', Saint_Barthelemy: 'one',
    Saint_Pierre: 'one', Singapore: 'one', Sint_Eustatius: 'one', 
    Slovakia: 'one', South_Korea: 'one', Taiwan: 'one', Togo: 'one', 
    Turks_and_Caicos_Islands: 'one', Vietnam : 'one', Angola: 'two', Austria: 'two', 
    Barbados: 'two', Bonaire: 'two', Cameroon: 'two', Croatia
    : 'two', Curaçao: 'two', Czech_Republic: 'two',
    El_Salvador: 'two', Ethiopia: 'two', Finland: 'two', Germany: 'two', Guam: 'two', Guinea
    : 'two', Jamaica: 'two', Kenya: 'two', Madeira_Islands: 'two', 
    Mauritania: 'two', Pakistan: 'two', Puerto_Rico: 'two',
    Senegal: 'two', Serbia: 'two', Ukraine: 'two', Afghanistan: 'three', Andorra: 'three', 
    Armenia: 'three', Aruba: 'three', Bahamas: 'three', Belarus: 'three', Belgium
    : 'three', Belize: 'three', Cambodia: 'three', Canada: 'three', 
    Cape_Verde: 'three', Denmark: 'three', Dominican_Republic: 'three', 
    Easter_Island: 'three', Ecuador: 'three', Egypt
    : 'three', Estonia: 'three', Eswatini: 'three', Faroe_Islands: 'three', 
    France: 'three', Greece: 'three', Guadeloupe: 'three', Guatemala: 'three', 
    Guyana: 'three', Honduras: 'three', India: 'three', 
    Iran: 'three', Ireland: 'three', Isle_of_Man: 'three', Israel
    : 'three', Italy: 'three', Japan: 'three', Jordan: 'three', Kazakhstan: 'three', 
    Latvia: 'three', Lesotho: 'three', Libya: 'three', Lithuania: 'three', 
    Luxembourg: 'three', Malta: 'three', Martinique: 'three', Mexico: 'three',
    Montenegro: 'three', Norway: 'three', Peru: 'three', Philippines
    : 'three', Qatar: 'three', Russia: 'three', Saint_Kitts_and_Nevis: 'three', 
    Saint_Lucia: 'three', Saint_Martin: 'three', Saint_Vincent_and_Grenadines: 'three', 
    Sint_Maarten: 'three', Slovenia: 'three', Sri_Lanka: 'three', Sweden: 'three', 
    Switzerland: 'three', Thailand: 'three', Timor_Leste: 'three', Turkey: 'three',
    Virgin_Islands : 'three', Argentina: 'four', Bahrain: 'four', Bangladesh: 'four', 
    Bolivia: 'four', Botswana: 'four', Brazil: 'four', British_Virgin_Islands: 'four', 
    Burma: 'four', Burundi: 'four', Central_African_Republic: 'four', Chile: 'four', 
    Colombia: 'four', Congo: 'four', Costa_Rica: 'four', Cuba: 'four', Cyprus: 'four',
    Fiji: 'four', French_Guiana: 'four', Georgia: 'four', Guinea_Bissau: 'four', 
    Haiti: 'four', Indonesia: 'four', Iraq: 'four', Kyrgyzstan: 'four', Kuwait: 'four', 
    Liberia: 'four', Madagascar: 'four', Malawi: 'four', Malaysia: 'four', 
    Maldives: 'four', Mongolia: 'four', Mozambique: 'four', Namibia: 'four', 
    Nepal: 'four', Netherlands: 'four', Nicaragua: 'four', Oman: 'four', 
    Panama: 'four', Papua_New_Guinea: 'four', Paraguay: 'four', Portugal: 'four', 
    Réunion: 'four', Rwanda: 'four', Saudi_Arabia: 'four', Seychelles: 'four', 
    Sierra_Leone: 'four', Somalia: 'four', South_Africa: 'four', South_Sudan: 'four', 
    Spain: 'four', Sudan: 'four', Suriname: 'four', Syria: 'four', Tunisia: 'four', 
    Trinidad_and_Tobago: 'four', Uganda: 'four', United_Arab_Emirates: 'four', 
    United_Kingdom: 'four', Uruguay: 'four', Zambia: 'four', Zimbabwe: 'four'}

    export default countries;