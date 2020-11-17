export interface IInternationalizationList {
  countryName: TCountryName,
  currencyFullName: TCurrentFullName,
  currencyCode: TCurrencyCode,
  countryLanguage: TCountryLanguage,
  main: boolean
}

export type TCountryName = 'AFGHANISTAN' | 'ALBANIA' | 'ALGERIA' | 'AMERICAN SAMOA' | 'ANDORRA' | 'ANGOLA' | 'ANGUILLA' |
  'ANTIGUA AND BARBUDA' | 'ARGENTINA' | 'ARMENIA' | 'ARUBA' | 'AUSTRALIA' | 'AUSTRIA' | 'AZERBAIJAN' | 'BAHRAIN' |
  'BANGLADESH' | 'BARBADOS' | 'BELARUS' | 'BELGIUM' | 'BELIZE' | 'BENIN' | 'BERMUDA' | 'BHUTAN' | 'BONAIRE, SINT EUSTATIUS AND SABA' |
  'BOSNIA AND HERZEGOVINA' | 'BOTSWANA' | 'BRAZIL' | 'BRUNEI DARUSSALAM' | 'BULGARIA' | 'BURKINA FASO' | 'BURUNDI' | 'CABO VERDE' |
  'CAMBODIA' | 'CAMEROON' | 'CANADA' | 'CHAD' | 'CHILE' | 'CHRISTMAS ISLAND' | 'COLOMBIA' | 'COSTA RICA' | 'CÔTE D\'IVOIRE' |
  'CROATIA' | 'CUBA' | 'CURAÇAO' | 'CYPRUS' | 'DENMARK' | 'DJIBOUTI' | 'DOMINICA' | 'ECUADOR' | 'EGYPT' | 'EL SALVADOR' |
  'EQUATORIAL GUINEA' | 'ERITREA' | 'ESTONIA' | 'ETHIOPIA' | 'FIJI' | 'FINLAND' | 'FRANCE' | 'FRENCH GUIANA' |
  'FRENCH POLYNESIA' | 'GABON' | 'GEORGIA' | 'GERMANY' | 'GHANA' | 'GIBRALTAR' | 'GREECE' | 'GREENLAND' | 'GRENADA' |
  'GUADELOUPE' | 'GUAM' | 'GUATEMALA' | 'GUERNSEY' | 'GUINEA' | 'GUINEA-BISSAU' | 'GUYANA' | 'HAITI' | 'HONDURAS' |
  'HONG KONG' | 'HUNGARY' | 'ICELAND' | 'INDIA' | 'INDONESIA' | 'IRAQ' | 'IRELAND' | 'ISLE OF MAN' | 'ISRAEL' |
  'ITALY' | 'JAMAICA' | 'JAPAN' | 'JERSEY' | 'JORDAN' | 'KAZAKHSTAN' | 'KENYA' | 'KIRIBATI' | 'KUWAIT' | 'KYRGYZSTAN' |
  'LATVIA' | 'LEBANON' | 'LESOTHO' | 'LIBERIA' | 'LIBYA' | 'LIECHTENSTEIN' | 'LITHUANIA' | 'LUXEMBOURG' | 'MADAGASCAR' |
  'MALAWI' | 'MALAYSIA' | 'MALDIVES' | 'MALI' | 'MALTA' | 'MARTINIQUE' | 'MAURITANIA' | 'MAURITIUS' | 'MAYOTTE' | 'MEXICO' |
  'MONGOLIA' | 'MONTENEGRO' | 'MONTSERRAT' | 'MOROCCO' | 'MOZAMBIQUE' | 'MYANMAR' | 'NAMIBIA' | 'NAURU' | 'NEPAL' |
  'NEW CALEDONIA' | 'NEW ZEALAND' | 'NICARAGUA' | 'NIGERIA' | 'NIUE' | 'NORFOLK ISLAND' | 'NORWAY' | 'OMAN' | 'PAKISTAN' |
  'PALAU' | 'PANAMA' | 'PAPUA NEW GUINEA' | 'PARAGUAY' | 'PERU' | 'POLAND' | 'PORTUGAL' | 'PUERTO RICO' | 'QATAR' | 'ROMANIA' |
  'RWANDA' | 'SAINT BARTHÉLEMY' | 'SAINT KITTS AND NEVIS' | 'SAINT LUCIA' | 'SAINT PIERRE AND MIQUELON' |
  'SAINT VINCENT AND THE GRENADINES' | 'SAMOA' | 'SAN MARINO' | 'SAUDI ARABIA' | 'SENEGAL' | 'SERBIA' | 'SEYCHELLES' |
  'SIERRA LEONE' | 'SINGAPORE' | 'SLOVAKIA' | 'SLOVENIA' | 'SOLOMON ISLANDS' | 'SOMALIA' | 'SOUTH AFRICA' | 'SOUTH SUDAN' |
  'SPAIN' | 'SRI LANKA' | 'SURINAME' | 'SVALBARD AND JAN MAYEN' | 'SWEDEN' | 'SWITZERLAND' | 'TAJIKISTAN' | 'THAILAND' |
  'TIMOR-LESTE' | 'TOGO' | 'TOKELAU' | 'TONGA' | 'TRINIDAD AND TOBAGO' | 'TUNISIA' | 'TURKEY' | 'TURKMENISTAN' | 'TUVALU' |
  'UGANDA' | 'UKRAINE' | 'URUGUAY' | 'UZBEKISTAN' | 'VANUATU' | 'WALLIS AND FUTUNA' | 'YEMEN' | 'ZAMBIA' | 'ZIMBABWE';

export type TCurrentFullName = 'Afghani' | 'Lek' | 'Algerian Dinar' | 'US Dollar' | 'Euro' | 'Kwanza' | 'East Caribbean Dollar' |
  'Argentine Peso' | 'Armenian Dram' | 'Aruban Florin' | 'Australian Dollar' | 'Azerbaijan Manat' | 'Bahraini Dinar' | 'Taka' |
  'Barbados Dollar' | 'Belarusian Ruble' | 'Belize Dollar' | 'CFA Franc BCEAO' | 'Bermudian Dollar' | 'Indian Rupee' | 'Ngultrum' |
  'Convertible Mark' | 'Pula' | 'Brazilian Real' | 'Brunei Dollar' | 'Bulgarian Lev' | 'Burundi Franc' | 'Cabo Verde Escudo' |
  'Riel' | 'CFA Franc BEAC' | 'Canadian Dollar' | 'Chilean Peso' | 'Unidad de Fomento' | 'Colombian Peso' | 'Unidad de Valor Real' |
  'Costa Rican Colon' | 'Kuna' | 'Cuban Peso' | 'Peso Convertible' | 'Netherlands Antillean Guilder' | 'Danish Krone' |
  'Djibouti Franc' | 'Egyptian Pound' | 'El Salvador Colon' | 'Nakfa' | 'Ethiopian Birr' | 'Fiji Dollar' | 'CFP Franc' | 'Lari' |
  'Ghana Cedi' | 'Gibraltar Pound' | 'Quetzal' | 'Pound Sterling' | 'Guinean Franc' | 'Guyana Dollar' | 'Gourde' | 'Lempira' |
  'Hong Kong Dollar' | 'Forint' | 'Iceland Krona' | 'Rupiah' | 'Iraqi Dinar' | 'New Israeli Sheqel' | 'Jamaican Dollar' | 'Yen' |
  'Jordanian Dinar' | 'Tenge' | 'Kenyan Shilling' | 'Kuwaiti Dinar' | 'Som' | 'UR' | 'Lebanese Pound' | 'Loti' | 'Rand' |
  'Liberian Dollar' | 'Libyan Dinar' | 'Swiss Franc' | 'Malagasy Ariary' | 'Malawi Kwacha' | 'Malaysian Ringgit' | 'Rufiyaa' |
  'Ouguiya' | 'Mauritius Rupee' | 'Mexican Peso' | 'Mexican Unidad de Inversion (UDI)' | 'Tugrik' | 'Moroccan Dirham' |
  'Mozambique Metical' | 'Kyat' | 'Namibia Dollar' | 'Nepalese Rupee' | 'New Zealand Dollar' | 'Cordoba Oro' | 'Naira' |
  'Norwegian Krone' | 'Rial Omani' | 'Pakistan Rupee' | 'Balboa' | 'Kina' | 'Guarani' | 'Sol' | 'Zloty' | 'Qatari Rial' |
  'Romanian Leu' | 'Rwanda Franc' | 'Tala' | 'Saudi Riyal' | 'Serbian Dinar' | 'Seychelles Rupee' | 'Leone' | 'Singapore Dollar' |
  'Solomon Islands Dollar' | 'Somali Shilling' | 'South Sudanese Pound' | 'Sri Lanka Rupee' | 'Surinam Dollar' | 'Swedish Krona' |
  'WIR Euro' | 'WIR Franc' | 'Somoni' | 'Baht' | 'Pa\'anga' | 'Trinidad and Tobago Dollar' | 'Tunisian Dinar' | 'Turkish Lira' |
  'Turkmenistan New Manat' | 'Uganda Shilling' | 'Hryvnia' | 'Peso Uruguayo' | 'Uruguay Peso en Unidades Indexadas (UI)' |
  'Unidad Previsional' | 'Uzbekistan Sum' | 'Vatu' | 'Yemeni Rial' | 'Zambian Kwacha' | 'Zimbabwe Dollar';

export type TCurrencyCode = 'AFN' | 'ALL' | 'DZD' | 'USD' | 'EUR' | 'AOA' | 'XCD' | 'ARS' | 'AMD' | 'AWG' | 'AUD' | 'AZN' | 'BHD' |
  'BDT' | 'BBD' | 'BYN' | 'BZD' | 'XOF' | 'BMD' | 'INR' | 'BTN' | 'BAM' | 'BWP' | 'BRL' | 'BND' | 'BGN' | 'BIF' | 'CVE' | 'KHR' |
  'XAF' | 'CAD' | 'CLP' | 'CLF' | 'COP' | 'COU' | 'CRC' | 'HRK' | 'CUP' | 'CUC' | 'ANG' | 'DKK' | 'DJF' | 'EGP' | 'SVC' | 'ERN' |
  'ETB' | 'FJD' | 'XPF' | 'GEL' | 'GHS' | 'GIP' | 'GTQ' | 'GBP' | 'GNF' | 'GYD' | 'HTG' | 'HNL' | 'HKD' | 'HUF' | 'ISK' | 'IDR' |
  'IQD' | 'ILS' | 'JMD' | 'JPY' | 'JOD' | 'KZT' | 'KES' | 'KWD' | 'KGS' | 'LBP' | 'LSL' | 'ZAR' | 'LRD' | 'LYD' | 'CHF' | 'MGA' |
  'MWK' | 'MYR' | 'MVR' | 'MRU' | 'MUR' | 'MXN' | 'MXV' | 'MNT' | 'MAD' | 'MZN' | 'MMK' | 'NAD' | 'NPR' | 'NZD' | 'NIO' | 'NGN' |
  'NOK' | 'OMR' | 'PKR' | 'PAB' | 'PGK' | 'PYG' | 'PEN' | 'PLN' | 'QAR' | 'RON' | 'RWF' | 'WST' | 'SAR' | 'RSD' | 'SCR' | 'SLL' |
  'SGD' | 'SBD' | 'SOS' | 'SSP' | 'LKR' | 'SRD' | 'SEK' | 'CHE' | 'CHW' | 'TJS' | 'THB' | 'TOP' | 'TTD' | 'TND' | 'TRY' | 'TMT' |
  'UGX' | 'UAH' | 'UYU' | 'UYI' | 'UYW' | 'UZS' | 'VUV' | 'YER' | 'ZMW' | 'ZWL';

export type TCountryLanguage = 'prs-AF' | 'sq-AL' | 'ar-DZ' | 'en-AS' | 'ca-AD' | 'ln-AO' | 'en-AI' | 'en-AG' | 'es-AR' | 'hy-AM' |
  'nl-AW' | 'en-AU' | 'en-AT' | 'az-Cyrl-AZ' | 'ar-BH' | 'bn-BD' | 'en-BB' | 'be-BY' | 'nl-BE' | 'en-BZ' | 'fr-BJ' | 'en-BM' | 'dz-BT' |
  'nl-BQ' | 'bs-Cyrl-BA' | 'en-BW' | 'pt-BR' | 'ms-BN' | 'bg-BG' | 'fr-BF' | 'en-BI' | 'kea-CV' | 'km-KH' | 'agq-CM' | 'en-CA' |
  'ar-TD' | 'arn-CL' | 'en-CX' | 'es-CO' | 'es-CR' | 'fr-CI' | 'hr-HR' | 'es-CU' | 'nl-CW' | 'en-CY' | 'da-DK' | 'aa-DJ' | 'en-DM' |
  'quz-EC' | 'ar-EG' | 'es-SV' | 'fr-GQ' | 'aa-ER' | 'et-EE' | 'aa-ET' | 'en-FJ' | 'en-FI' | 'gsw-FR' | 'fr-GF' | 'fr-PF' | 'fr-GA' |
  'ka-GE' | 'en-DE' | 'ak-GH' | 'en-GI' | 'el-GR' | 'da-GL' | 'en-GD' | 'fr-GP' | 'en-GU' | 'quc-Latn-GT' | 'en-GG' | 'fr-GN' |
  'ff-Latn-GW' | 'en-GY' | 'fr-HT' | 'es-HN' | 'en-HK' | 'hu-HU' | 'is-IS' | 'as-IN' | 'id-ID' | 'ar-IQ' | 'en-IE' | 'en-IM' | 'ar-IL' |
  'ca-IT' | 'en-JM' | 'ja-JP' | 'en-JE' | 'ar-JO' | 'kk-KZ' | 'ebu-KE' | 'en-KI' | 'ar-KW' | 'ky-KG' | 'lv-LV' | 'ar-LB' | 'en-LS' |
  'en-LR' | 'ar-LY' | 'gsw-LI' | 'lt-LT' | 'fr-LU' | 'en-MG' | 'en-MW' | 'en-MY' | 'dv-MV' | 'bm-Latn-ML' | 'en-MT' | 'fr-MQ' | 'ar-MR' |
  'en-MU' | 'fr-YT' | 'es-MX' | 'mn-MN' | 'sr-Cyrl-ME' | 'en-MS' | 'ar-MA' | 'mgh-MZ' | 'my-MM' | 'af-NA' | 'en-NR' | 'ne-NP' | 'fr-NC' |
  'en-NZ' | 'es-NI' | 'en-NG' | 'en-NU' | 'en-NF' | 'nb-NO' | 'ar-OM' | 'en-PK' | 'en-PW' | 'es-PA' | 'en-PG' | 'gn-PY' | 'quz-PE' |
  'pl-PL' | 'pt-PT' | 'en-PR' | 'ar-QA' | 'ro-RO' | 'en-RW' | 'fr-BL' | 'en-KN' | 'en-LC' | 'fr-PM' | 'en-VC' | 'en-WS' | 'it-SM' |
  'ar-SA' | 'fr-SN' | 'sr-Cyrl-RS' | 'en-SC' | 'en-SL' | 'zh-SG' | 'sk-SK' | 'en-SI' | 'en-SB' | 'ar-SO' | 'af-ZA' | 'ar-SS' | 'ast-ES' |
  'si-LK' | 'nl-SR' | 'nb-SJ' | 'en-SE' | 'gsw-CH' | 'tg-Cyrl-TJ' | 'th-TH' | 'pt-TL' | 'ee-TG' | 'en-TK' | 'en-TO' | 'en-TT' | 'ar-TN' |
  'tr-TR' | 'tk-TM' | 'en-TV' | 'cgg-UG' | 'ru-UA' | 'es-UY' | 'uz-Cyrl-UZ' | 'en-VU' | 'fr-WF' | 'ar-YE' | 'bem-ZM' | 'en-ZW';
