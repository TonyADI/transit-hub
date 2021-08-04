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
    
export const levelOne = ['Albania','American Samoa','Anguilla','Antigua and Barbuda','Australia',
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


const countries = {Algeria: 'Unknown', Antarctica: 'Unknown',
    Azores: 'Unknown',Bhutan: 'Unknown',Canary_Islands: 'Unknown',
    Christmas_Island: 'Unknown',Cocos_Islands: 'Unknown',
    Cook_Islands: 'Unknown',Eritrea: 'Unknown',Gibraltar: 'Unknown',
    Guernsey: 'Unknown',Jersey: 'Unknown',Kiribati: 'Unknown',
    Macau_SAR: 'Unknown',Mayotte: 'Unknown',Monaco: 'Unknown',
    Nauru: 'Unknown',Niue: 'Unknown',Norfolk_Island: 'Unknown',
    North_Korea: 'Unknown',Pitcairn_Islands: 'Unknown',Saint_Helena: 'Unknown',
    Samoa: 'Unknown',San_Marino: 'Unknown',São_Tomé: 'Unknown',
    Solomon_Islands: 'Unknown',South_Georgia: 'Unknown',Tajikistan: 'Unknown'
    ,Tanzania: 'Unknown',Tokelau: 'Unknown',Tonga: 'Unknown',
    Turkmenistan: 'Unknown',Tuvalu: 'Unknown',Uzbekistan: 'Unknown',
    Vanuatu: 'Unknown',Venezuela: 'Unknown',Wake_Island: 'Unknown',
    Yemen: 'Unknown', Albania: 'One', American_Samoa: 'One', Anguilla: 'One', 
    Antigua_and_Barbuda: 'One', Australia: 'One', Azerbaijan: 'One', Benin: 'One', 
    Bermuda: 'One', Bosnia_and_Herzegovina: 'One', Brunei: 'One', Bulgaria: 'One', 
    Burkina_Faso: 'One', Cayman_Islands: 'One', Chad: 'One', China: 'One', Comoros: 'One', 
    Ivory_Coast: 'One', Dominica: 'One', Djibouti: 'One', Equatorial_Guinea: 'One', 
    Falkland_Islands: 'One', French_Polynesia: 'One', Gabon: 'One', Gambia: 'One', 
    Ghana: 'One', Greenland: 'One', Grenada: 'One', Hong_Kong: 'One', Hungary: 'One', 
    Iceland: 'One', Kosovo: 'One', Laos: 'One', Liechtenstein: 'One', Mali: 'One', 
    Marshall_Islands: 'One', Mauritius: 'One', Micronesia: 'One', Moldova: 'One', 
    Montserrat: 'One', New_Caledonia: 'One', New_Zealand: 'One', Niger: 'One', 
    Nigeria: 'One', North_Macedonia: 'One', Northern_Mariana_Islands: 'One', 
    Palau: 'One', Poland: 'One', Romania: 'One', Saba: 'One', Saint_Barthelemy: 'One',
    Saint_Pierre: 'One', Singapore: 'One', Sint_Eustatius: 'One', 
    Slovakia: 'One', South_Korea: 'One', Taiwan: 'One', Togo: 'One', 
    Turks_and_Caicos_Islands: 'One', Vietnam : 'One', Angola: 'Two', Austria: 'Two', 
    Barbados: 'Two', Bonaire: 'Two', Cameroon: 'Two', Croatia
    : 'Two', Curaçao: 'Two', Czech_Republic: 'Two',
    El_Salvador: 'Two', Ethiopia: 'Two', Finland: 'Two', Germany: 'Two', Guam: 'Two', Guinea
    : 'Two', Jamaica: 'Two', Kenya: 'Two', Madeira_Islands: 'Two', 
    Mauritania: 'Two', Pakistan: 'Two', Puerto_Rico: 'Two',
    Senegal: 'Two', Serbia: 'Two', Ukraine: 'Two', Afghanistan: 'Three', Andorra: 'Three', 
    Armenia: 'Three', Aruba: 'Three', Bahamas: 'Three', Belarus: 'Three', Belgium
    : 'Three', Belize: 'Three', Cambodia: 'Three', Canada: 'Three', 
    Cape_Verde: 'Three', Denmark: 'Three', Dominican_Republic: 'Three', 
    Easter_Island: 'Three', Ecuador: 'Three', Egypt
    : 'Three', Estonia: 'Three', Eswatini: 'Three', Faroe_Islands: 'Three', 
    France: 'Three', Greece: 'Three', Guadeloupe: 'Three', Guatemala: 'Three', 
    Guyana: 'Three', Honduras: 'Three', India: 'Three', 
    Iran: 'Three', Ireland: 'Three', Isle_of_Man: 'Three', Israel
    : 'Three', Italy: 'Three', Japan: 'Three', Jordan: 'Three', Kazakhstan: 'Three', 
    Latvia: 'Three', Lesotho: 'Three', Libya: 'Three', Lithuania: 'Three', 
    Luxembourg: 'Three', Malta: 'Three', Martinique: 'Three', Mexico: 'Three',
    Montenegro: 'Three', Norway: 'Three', Peru: 'Three', Philippines
    : 'Three', Qatar: 'Three', Russia: 'Three', Saint_Kitts_and_Nevis: 'Three', 
    Saint_Lucia: 'Three', Saint_Martin: 'Three', Saint_Vincent_and_Grenadines: 'Three', 
    Sint_Maarten: 'Three', Slovenia: 'Three', Sri_Lanka: 'Three', Sweden: 'Three', 
    Switzerland: 'Three', Thailand: 'Three', Timor_Leste: 'Three', Turkey: 'Three',
    Virgin_Islands : 'Three', Argentina: 'Four', Bahrain: 'Four', Bangladesh: 'Four', 
    Bolivia: 'Four', Botswana: 'Four', Brazil: 'Four', British_Virgin_Islands: 'Four', 
    Burma: 'Four', Burundi: 'Four', Central_African_Republic: 'Four', Chile: 'Four', 
    Colombia: 'Four', Congo: 'Four', Costa_Rica: 'Four', Cuba: 'Four', Cyprus: 'Four',
    Fiji: 'Four', French_Guiana: 'Four', Georgia: 'Four', Guinea_Bissau: 'Four', 
    Haiti: 'Four', Indonesia: 'Four', Iraq: 'Four', Kyrgyzstan: 'Four', Kuwait: 'Four', 
    Liberia: 'Four', Madagascar: 'Four', Malawi: 'Four', Malaysia: 'Four', 
    Maldives: 'Four', Mongolia: 'Four', Mozambique: 'Four', Namibia: 'Four', 
    Nepal: 'Four', Netherlands: 'Four', Nicaragua: 'Four', Oman: 'Four', 
    Panama: 'Four', Papua_New_Guinea: 'Four', Paraguay: 'Four', Portugal: 'Four', 
    Réunion: 'Four', Rwanda: 'Four', Saudi_Arabia: 'Four', Seychelles: 'Four', 
    Sierra_Leone: 'Four', Somalia: 'Four', South_Africa: 'Four', South_Sudan: 'Four', 
    Spain: 'Four', Sudan: 'Four', Suriname: 'Four', Syria: 'Four', Tunisia: 'Four', 
    Trinidad_and_Tobago: 'Four', Uganda: 'Four', United_Arab_Emirates: 'Four', 
    United_Kingdom: 'Four', Uruguay: 'Four', Zambia: 'Four', Zimbabwe: 'Four'}

    export default countries;