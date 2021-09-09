"use strict";
exports.__esModule = true;
exports.InternationalCore = void 0;
var Core = (function () {
    function Core() {
    }
    Core.prototype.retrieveList = function (main, countryName, currencyFullName, currencyCode, countryLanguage) {
        var list = [
            {
                countryName: 'AFGHANISTAN',
                currencyFullName: 'Afghani',
                currencyCode: 'AFN',
                countryLanguage: 'prs-AF',
                main: false
            },
            {
                countryName: 'ALBANIA',
                currencyFullName: 'Lek',
                currencyCode: 'ALL',
                countryLanguage: 'sq-AL',
                main: false
            },
            {
                countryName: 'ALGERIA',
                currencyFullName: 'Algerian Dinar',
                currencyCode: 'DZD',
                countryLanguage: 'ar-DZ',
                main: false
            },
            {
                countryName: 'AMERICAN SAMOA',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'en-AS',
                main: true
            },
            {
                countryName: 'ANDORRA',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'ca-AD',
                main: false
            },
            {
                countryName: 'ANGOLA',
                currencyFullName: 'Kwanza',
                currencyCode: 'AOA',
                countryLanguage: 'ln-AO',
                main: false
            },
            {
                countryName: 'ANGUILLA',
                currencyFullName: 'East Caribbean Dollar',
                currencyCode: 'XCD',
                countryLanguage: 'en-AI',
                main: false
            },
            {
                countryName: 'ANTIGUA AND BARBUDA',
                currencyFullName: 'East Caribbean Dollar',
                currencyCode: 'XCD',
                countryLanguage: 'en-AG',
                main: false
            },
            {
                countryName: 'ARGENTINA',
                currencyFullName: 'Argentine Peso',
                currencyCode: 'ARS',
                countryLanguage: 'es-AR',
                main: true
            },
            {
                countryName: 'ARMENIA',
                currencyFullName: 'Armenian Dram',
                currencyCode: 'AMD',
                countryLanguage: 'hy-AM',
                main: false
            },
            {
                countryName: 'ARUBA',
                currencyFullName: 'Aruban Florin',
                currencyCode: 'AWG',
                countryLanguage: 'nl-AW',
                main: false
            },
            {
                countryName: 'AUSTRALIA',
                currencyFullName: 'Australian Dollar',
                currencyCode: 'AUD',
                countryLanguage: 'en-AU',
                main: false
            },
            {
                countryName: 'AUSTRIA',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'en-AT',
                main: false
            },
            {
                countryName: 'AZERBAIJAN',
                currencyFullName: 'Azerbaijan Manat',
                currencyCode: 'AZN',
                countryLanguage: 'az-Cyrl-AZ',
                main: false
            },
            {
                countryName: 'BAHRAIN',
                currencyFullName: 'Bahraini Dinar',
                currencyCode: 'BHD',
                countryLanguage: 'ar-BH',
                main: false
            },
            {
                countryName: 'BANGLADESH',
                currencyFullName: 'Taka',
                currencyCode: 'BDT',
                countryLanguage: 'bn-BD',
                main: false
            },
            {
                countryName: 'BARBADOS',
                currencyFullName: 'Barbados Dollar',
                currencyCode: 'BBD',
                countryLanguage: 'en-BB',
                main: false
            },
            {
                countryName: 'BELARUS',
                currencyFullName: 'Belarusian Ruble',
                currencyCode: 'BYN',
                countryLanguage: 'be-BY',
                main: false
            },
            {
                countryName: 'BELGIUM',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'nl-BE',
                main: false
            },
            {
                countryName: 'BELIZE',
                currencyFullName: 'Belize Dollar',
                currencyCode: 'BZD',
                countryLanguage: 'en-BZ',
                main: false
            },
            {
                countryName: 'BENIN',
                currencyFullName: 'CFA Franc BCEAO',
                currencyCode: 'XOF',
                countryLanguage: 'fr-BJ',
                main: false
            },
            {
                countryName: 'BERMUDA',
                currencyFullName: 'Bermudian Dollar',
                currencyCode: 'BMD',
                countryLanguage: 'en-BM',
                main: false
            },
            {
                countryName: 'BHUTAN',
                currencyFullName: 'Indian Rupee',
                currencyCode: 'INR',
                countryLanguage: 'dz-BT',
                main: false
            },
            {
                countryName: 'BHUTAN',
                currencyFullName: 'Ngultrum',
                currencyCode: 'BTN',
                countryLanguage: 'dz-BT',
                main: false
            },
            {
                countryName: 'BONAIRE, SINT EUSTATIUS AND SABA',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'nl-BQ',
                main: false
            },
            {
                countryName: 'BOSNIA AND HERZEGOVINA',
                currencyFullName: 'Convertible Mark',
                currencyCode: 'BAM',
                countryLanguage: 'bs-Cyrl-BA',
                main: false
            },
            {
                countryName: 'BOTSWANA',
                currencyFullName: 'Pula',
                currencyCode: 'BWP',
                countryLanguage: 'en-BW',
                main: false
            },
            {
                countryName: 'BRAZIL',
                currencyFullName: 'Brazilian Real',
                currencyCode: 'BRL',
                countryLanguage: 'pt-BR',
                main: true
            },
            {
                countryName: 'BRUNEI DARUSSALAM',
                currencyFullName: 'Brunei Dollar',
                currencyCode: 'BND',
                countryLanguage: 'ms-BN',
                main: false
            },
            {
                countryName: 'BULGARIA',
                currencyFullName: 'Bulgarian Lev',
                currencyCode: 'BGN',
                countryLanguage: 'bg-BG',
                main: false
            },
            {
                countryName: 'BURKINA FASO',
                currencyFullName: 'CFA Franc BCEAO',
                currencyCode: 'XOF',
                countryLanguage: 'fr-BF',
                main: false
            },
            {
                countryName: 'BURUNDI',
                currencyFullName: 'Burundi Franc',
                currencyCode: 'BIF',
                countryLanguage: 'en-BI',
                main: false
            },
            {
                countryName: 'CABO VERDE',
                currencyFullName: 'Cabo Verde Escudo',
                currencyCode: 'CVE',
                countryLanguage: 'kea-CV',
                main: false
            },
            {
                countryName: 'CAMBODIA',
                currencyFullName: 'Riel',
                currencyCode: 'KHR',
                countryLanguage: 'km-KH',
                main: false
            },
            {
                countryName: 'CAMEROON',
                currencyFullName: 'CFA Franc BEAC',
                currencyCode: 'XAF',
                countryLanguage: 'agq-CM',
                main: false
            },
            {
                countryName: 'CANADA',
                currencyFullName: 'Canadian Dollar',
                currencyCode: 'CAD',
                countryLanguage: 'en-CA',
                main: false
            },
            {
                countryName: 'CHAD',
                currencyFullName: 'CFA Franc BEAC',
                currencyCode: 'XAF',
                countryLanguage: 'ar-TD',
                main: false
            },
            {
                countryName: 'CHILE',
                currencyFullName: 'Chilean Peso',
                currencyCode: 'CLP',
                countryLanguage: 'arn-CL',
                main: false
            },
            {
                countryName: 'CHILE',
                currencyFullName: 'Unidad de Fomento',
                currencyCode: 'CLF',
                countryLanguage: 'arn-CL',
                main: false
            },
            {
                countryName: 'CHRISTMAS ISLAND',
                currencyFullName: 'Australian Dollar',
                currencyCode: 'AUD',
                countryLanguage: 'en-CX',
                main: false
            },
            {
                countryName: 'COLOMBIA',
                currencyFullName: 'Colombian Peso',
                currencyCode: 'COP',
                countryLanguage: 'es-CO',
                main: false
            },
            {
                countryName: 'COLOMBIA',
                currencyFullName: 'Unidad de Valor Real',
                currencyCode: 'COU',
                countryLanguage: 'es-CO',
                main: false
            },
            {
                countryName: 'COSTA RICA',
                currencyFullName: 'Costa Rican Colon',
                currencyCode: 'CRC',
                countryLanguage: 'es-CR',
                main: false
            },
            {
                countryName: 'CÔTE D\'IVOIRE',
                currencyFullName: 'CFA Franc BCEAO',
                currencyCode: 'XOF',
                countryLanguage: 'fr-CI',
                main: false
            },
            {
                countryName: 'CROATIA',
                currencyFullName: 'Kuna',
                currencyCode: 'HRK',
                countryLanguage: 'hr-HR',
                main: false
            },
            {
                countryName: 'CUBA',
                currencyFullName: 'Cuban Peso',
                currencyCode: 'CUP',
                countryLanguage: 'es-CU',
                main: false
            },
            {
                countryName: 'CUBA',
                currencyFullName: 'Peso Convertible',
                currencyCode: 'CUC',
                countryLanguage: 'es-CU',
                main: false
            },
            {
                countryName: 'CURAÇAO',
                currencyFullName: 'Netherlands Antillean Guilder',
                currencyCode: 'ANG',
                countryLanguage: 'nl-CW',
                main: false
            },
            {
                countryName: 'CYPRUS',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'en-CY',
                main: false
            },
            {
                countryName: 'DENMARK',
                currencyFullName: 'Danish Krone',
                currencyCode: 'DKK',
                countryLanguage: 'da-DK',
                main: false
            },
            {
                countryName: 'DJIBOUTI',
                currencyFullName: 'Djibouti Franc',
                currencyCode: 'DJF',
                countryLanguage: 'aa-DJ',
                main: false
            },
            {
                countryName: 'DOMINICA',
                currencyFullName: 'East Caribbean Dollar',
                currencyCode: 'XCD',
                countryLanguage: 'en-DM',
                main: false
            },
            {
                countryName: 'ECUADOR',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'quz-EC',
                main: false
            },
            {
                countryName: 'EGYPT',
                currencyFullName: 'Egyptian Pound',
                currencyCode: 'EGP',
                countryLanguage: 'ar-EG',
                main: false
            },
            {
                countryName: 'EL SALVADOR',
                currencyFullName: 'El Salvador Colon',
                currencyCode: 'SVC',
                countryLanguage: 'es-SV',
                main: false
            },
            {
                countryName: 'EL SALVADOR',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'es-SV',
                main: false
            },
            {
                countryName: 'EQUATORIAL GUINEA',
                currencyFullName: 'CFA Franc BEAC',
                currencyCode: 'XAF',
                countryLanguage: 'fr-GQ',
                main: false
            },
            {
                countryName: 'ERITREA',
                currencyFullName: 'Nakfa',
                currencyCode: 'ERN',
                countryLanguage: 'aa-ER',
                main: false
            },
            {
                countryName: 'ESTONIA',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'et-EE',
                main: false
            },
            {
                countryName: 'ETHIOPIA',
                currencyFullName: 'Ethiopian Birr',
                currencyCode: 'ETB',
                countryLanguage: 'aa-ET',
                main: false
            },
            {
                countryName: 'FIJI',
                currencyFullName: 'Fiji Dollar',
                currencyCode: 'FJD',
                countryLanguage: 'en-FJ',
                main: false
            },
            {
                countryName: 'FINLAND',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'en-FI',
                main: false
            },
            {
                countryName: 'FRANCE',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'gsw-FR',
                main: false
            },
            {
                countryName: 'FRENCH GUIANA',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'fr-GF',
                main: false
            },
            {
                countryName: 'FRENCH POLYNESIA',
                currencyFullName: 'CFP Franc',
                currencyCode: 'XPF',
                countryLanguage: 'fr-PF',
                main: false
            },
            {
                countryName: 'GABON',
                currencyFullName: 'CFA Franc BEAC',
                currencyCode: 'XAF',
                countryLanguage: 'fr-GA',
                main: false
            },
            {
                countryName: 'GEORGIA',
                currencyFullName: 'Lari',
                currencyCode: 'GEL',
                countryLanguage: 'ka-GE',
                main: false
            },
            {
                countryName: 'GERMANY',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'en-DE',
                main: false
            },
            {
                countryName: 'GHANA',
                currencyFullName: 'Ghana Cedi',
                currencyCode: 'GHS',
                countryLanguage: 'ak-GH',
                main: false
            },
            {
                countryName: 'GIBRALTAR',
                currencyFullName: 'Gibraltar Pound',
                currencyCode: 'GIP',
                countryLanguage: 'en-GI',
                main: false
            },
            {
                countryName: 'GREECE',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'el-GR',
                main: false
            },
            {
                countryName: 'GREENLAND',
                currencyFullName: 'Danish Krone',
                currencyCode: 'DKK',
                countryLanguage: 'da-GL',
                main: false
            },
            {
                countryName: 'GRENADA',
                currencyFullName: 'East Caribbean Dollar',
                currencyCode: 'XCD',
                countryLanguage: 'en-GD',
                main: false
            },
            {
                countryName: 'GUADELOUPE',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'fr-GP',
                main: false
            },
            {
                countryName: 'GUAM',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'en-GU',
                main: false
            },
            {
                countryName: 'GUATEMALA',
                currencyFullName: 'Quetzal',
                currencyCode: 'GTQ',
                countryLanguage: 'quc-Latn-GT',
                main: false
            },
            {
                countryName: 'GUERNSEY',
                currencyFullName: 'Pound Sterling',
                currencyCode: 'GBP',
                countryLanguage: 'en-GG',
                main: false
            },
            {
                countryName: 'GUINEA',
                currencyFullName: 'Guinean Franc',
                currencyCode: 'GNF',
                countryLanguage: 'fr-GN',
                main: false
            },
            {
                countryName: 'GUINEA-BISSAU',
                currencyFullName: 'CFA Franc BCEAO',
                currencyCode: 'XOF',
                countryLanguage: 'ff-Latn-GW',
                main: false
            },
            {
                countryName: 'GUYANA',
                currencyFullName: 'Guyana Dollar',
                currencyCode: 'GYD',
                countryLanguage: 'en-GY',
                main: false
            },
            {
                countryName: 'HAITI',
                currencyFullName: 'Gourde',
                currencyCode: 'HTG',
                countryLanguage: 'fr-HT',
                main: false
            },
            {
                countryName: 'HAITI',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'fr-HT',
                main: false
            },
            {
                countryName: 'HONDURAS',
                currencyFullName: 'Lempira',
                currencyCode: 'HNL',
                countryLanguage: 'es-HN',
                main: false
            },
            {
                countryName: 'HONG KONG',
                currencyFullName: 'Hong Kong Dollar',
                currencyCode: 'HKD',
                countryLanguage: 'en-HK',
                main: false
            },
            {
                countryName: 'HUNGARY',
                currencyFullName: 'Forint',
                currencyCode: 'HUF',
                countryLanguage: 'hu-HU',
                main: false
            },
            {
                countryName: 'ICELAND',
                currencyFullName: 'Iceland Krona',
                currencyCode: 'ISK',
                countryLanguage: 'is-IS',
                main: false
            },
            {
                countryName: 'INDIA',
                currencyFullName: 'Indian Rupee',
                currencyCode: 'INR',
                countryLanguage: 'as-IN',
                main: false
            },
            {
                countryName: 'INDONESIA',
                currencyFullName: 'Rupiah',
                currencyCode: 'IDR',
                countryLanguage: 'id-ID',
                main: false
            },
            {
                countryName: 'IRAQ',
                currencyFullName: 'Iraqi Dinar',
                currencyCode: 'IQD',
                countryLanguage: 'ar-IQ',
                main: false
            },
            {
                countryName: 'IRELAND',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'en-IE',
                main: false
            },
            {
                countryName: 'ISLE OF MAN',
                currencyFullName: 'Pound Sterling',
                currencyCode: 'GBP',
                countryLanguage: 'en-IM',
                main: false
            },
            {
                countryName: 'ISRAEL',
                currencyFullName: 'New Israeli Sheqel',
                currencyCode: 'ILS',
                countryLanguage: 'ar-IL',
                main: false
            },
            {
                countryName: 'ITALY',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'ca-IT',
                main: false
            },
            {
                countryName: 'JAMAICA',
                currencyFullName: 'Jamaican Dollar',
                currencyCode: 'JMD',
                countryLanguage: 'en-JM',
                main: false
            },
            {
                countryName: 'JAPAN',
                currencyFullName: 'Yen',
                currencyCode: 'JPY',
                countryLanguage: 'ja-JP',
                main: true
            },
            {
                countryName: 'JERSEY',
                currencyFullName: 'Pound Sterling',
                currencyCode: 'GBP',
                countryLanguage: 'en-JE',
                main: false
            },
            {
                countryName: 'JORDAN',
                currencyFullName: 'Jordanian Dinar',
                currencyCode: 'JOD',
                countryLanguage: 'ar-JO',
                main: false
            },
            {
                countryName: 'KAZAKHSTAN',
                currencyFullName: 'Tenge',
                currencyCode: 'KZT',
                countryLanguage: 'kk-KZ',
                main: false
            },
            {
                countryName: 'KENYA',
                currencyFullName: 'Kenyan Shilling',
                currencyCode: 'KES',
                countryLanguage: 'ebu-KE',
                main: false
            },
            {
                countryName: 'KIRIBATI',
                currencyFullName: 'Australian Dollar',
                currencyCode: 'AUD',
                countryLanguage: 'en-KI',
                main: false
            },
            {
                countryName: 'KUWAIT',
                currencyFullName: 'Kuwaiti Dinar',
                currencyCode: 'KWD',
                countryLanguage: 'ar-KW',
                main: false
            },
            {
                countryName: 'KYRGYZSTAN',
                currencyFullName: 'Som',
                currencyCode: 'KGS',
                countryLanguage: 'ky-KG',
                main: false
            },
            {
                countryName: 'LATVIA',
                currencyFullName: 'UR',
                currencyCode: 'EUR',
                countryLanguage: 'lv-LV',
                main: false
            },
            {
                countryName: 'LEBANON',
                currencyFullName: 'Lebanese Pound',
                currencyCode: 'LBP',
                countryLanguage: 'ar-LB',
                main: false
            },
            {
                countryName: 'LESOTHO',
                currencyFullName: 'Loti',
                currencyCode: 'LSL',
                countryLanguage: 'en-LS',
                main: false
            },
            {
                countryName: 'LESOTHO',
                currencyFullName: 'Rand',
                currencyCode: 'ZAR',
                countryLanguage: 'en-LS',
                main: false
            },
            {
                countryName: 'LIBERIA',
                currencyFullName: 'Liberian Dollar',
                currencyCode: 'LRD',
                countryLanguage: 'en-LR',
                main: false
            },
            {
                countryName: 'LIBYA',
                currencyFullName: 'Libyan Dinar',
                currencyCode: 'LYD',
                countryLanguage: 'ar-LY',
                main: false
            },
            {
                countryName: 'LIECHTENSTEIN',
                currencyFullName: 'Swiss Franc',
                currencyCode: 'CHF',
                countryLanguage: 'gsw-LI',
                main: false
            },
            {
                countryName: 'LITHUANIA',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'lt-LT',
                main: false
            },
            {
                countryName: 'LUXEMBOURG',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'fr-LU',
                main: false
            },
            {
                countryName: 'MADAGASCAR',
                currencyFullName: 'Malagasy Ariary',
                currencyCode: 'MGA',
                countryLanguage: 'en-MG',
                main: false
            },
            {
                countryName: 'MALAWI',
                currencyFullName: 'Malawi Kwacha',
                currencyCode: 'MWK',
                countryLanguage: 'en-MW',
                main: false
            },
            {
                countryName: 'MALAYSIA',
                currencyFullName: 'Malaysian Ringgit',
                currencyCode: 'MYR',
                countryLanguage: 'en-MY',
                main: false
            },
            {
                countryName: 'MALDIVES',
                currencyFullName: 'Rufiyaa',
                currencyCode: 'MVR',
                countryLanguage: 'dv-MV',
                main: false
            },
            {
                countryName: 'MALI',
                currencyFullName: 'CFA Franc BCEAO',
                currencyCode: 'XOF',
                countryLanguage: 'bm-Latn-ML',
                main: false
            },
            {
                countryName: 'MALTA',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'en-MT',
                main: false
            },
            {
                countryName: 'MARTINIQUE',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'fr-MQ',
                main: false
            },
            {
                countryName: 'MAURITANIA',
                currencyFullName: 'Ouguiya',
                currencyCode: 'MRU',
                countryLanguage: 'ar-MR',
                main: false
            },
            {
                countryName: 'MAURITIUS',
                currencyFullName: 'Mauritius Rupee',
                currencyCode: 'MUR',
                countryLanguage: 'en-MU',
                main: false
            },
            {
                countryName: 'MAYOTTE',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'fr-YT',
                main: false
            },
            {
                countryName: 'MEXICO',
                currencyFullName: 'Mexican Peso',
                currencyCode: 'MXN',
                countryLanguage: 'es-MX',
                main: false
            },
            {
                countryName: 'MEXICO',
                currencyFullName: 'Mexican Unidad de Inversion (UDI)',
                currencyCode: 'MXV',
                countryLanguage: 'es-MX',
                main: false
            },
            {
                countryName: 'MONGOLIA',
                currencyFullName: 'Tugrik',
                currencyCode: 'MNT',
                countryLanguage: 'mn-MN',
                main: false
            },
            {
                countryName: 'MONTENEGRO',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'sr-Cyrl-ME',
                main: false
            },
            {
                countryName: 'MONTSERRAT',
                currencyFullName: 'East Caribbean Dollar',
                currencyCode: 'XCD',
                countryLanguage: 'en-MS',
                main: false
            },
            {
                countryName: 'MOROCCO',
                currencyFullName: 'Moroccan Dirham',
                currencyCode: 'MAD',
                countryLanguage: 'ar-MA',
                main: false
            },
            {
                countryName: 'MOZAMBIQUE',
                currencyFullName: 'Mozambique Metical',
                currencyCode: 'MZN',
                countryLanguage: 'mgh-MZ',
                main: false
            },
            {
                countryName: 'MYANMAR',
                currencyFullName: 'Kyat',
                currencyCode: 'MMK',
                countryLanguage: 'my-MM',
                main: false
            },
            {
                countryName: 'NAMIBIA',
                currencyFullName: 'Namibia Dollar',
                currencyCode: 'NAD',
                countryLanguage: 'af-NA',
                main: false
            },
            {
                countryName: 'NAMIBIA',
                currencyFullName: 'Rand',
                currencyCode: 'ZAR',
                countryLanguage: 'af-NA',
                main: false
            },
            {
                countryName: 'NAURU',
                currencyFullName: 'Australian Dollar',
                currencyCode: 'AUD',
                countryLanguage: 'en-NR',
                main: false
            },
            {
                countryName: 'NEPAL',
                currencyFullName: 'Nepalese Rupee',
                currencyCode: 'NPR',
                countryLanguage: 'ne-NP',
                main: false
            },
            {
                countryName: 'NEW CALEDONIA',
                currencyFullName: 'CFP Franc',
                currencyCode: 'XPF',
                countryLanguage: 'fr-NC',
                main: false
            },
            {
                countryName: 'NEW ZEALAND',
                currencyFullName: 'New Zealand Dollar',
                currencyCode: 'NZD',
                countryLanguage: 'en-NZ',
                main: false
            },
            {
                countryName: 'NICARAGUA',
                currencyFullName: 'Cordoba Oro',
                currencyCode: 'NIO',
                countryLanguage: 'es-NI',
                main: false
            },
            {
                countryName: 'NIGERIA',
                currencyFullName: 'Naira',
                currencyCode: 'NGN',
                countryLanguage: 'en-NG',
                main: false
            },
            {
                countryName: 'NIUE',
                currencyFullName: 'New Zealand Dollar',
                currencyCode: 'NZD',
                countryLanguage: 'en-NU',
                main: false
            },
            {
                countryName: 'NORFOLK ISLAND',
                currencyFullName: 'Australian Dollar',
                currencyCode: 'AUD',
                countryLanguage: 'en-NF',
                main: false
            },
            {
                countryName: 'NORWAY',
                currencyFullName: 'Norwegian Krone',
                currencyCode: 'NOK',
                countryLanguage: 'nb-NO',
                main: false
            },
            {
                countryName: 'OMAN',
                currencyFullName: 'Rial Omani',
                currencyCode: 'OMR',
                countryLanguage: 'ar-OM',
                main: false
            },
            {
                countryName: 'PAKISTAN',
                currencyFullName: 'Pakistan Rupee',
                currencyCode: 'PKR',
                countryLanguage: 'en-PK',
                main: false
            },
            {
                countryName: 'PALAU',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'en-PW',
                main: false
            },
            {
                countryName: 'PANAMA',
                currencyFullName: 'Balboa',
                currencyCode: 'PAB',
                countryLanguage: 'es-PA',
                main: false
            },
            {
                countryName: 'PANAMA',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'es-PA',
                main: false
            },
            {
                countryName: 'PAPUA NEW GUINEA',
                currencyFullName: 'Kina',
                currencyCode: 'PGK',
                countryLanguage: 'en-PG',
                main: false
            },
            {
                countryName: 'PARAGUAY',
                currencyFullName: 'Guarani',
                currencyCode: 'PYG',
                countryLanguage: 'gn-PY',
                main: false
            },
            {
                countryName: 'PERU',
                currencyFullName: 'Sol',
                currencyCode: 'PEN',
                countryLanguage: 'quz-PE',
                main: false
            },
            {
                countryName: 'POLAND',
                currencyFullName: 'Zloty',
                currencyCode: 'PLN',
                countryLanguage: 'pl-PL',
                main: false
            },
            {
                countryName: 'PORTUGAL',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'pt-PT',
                main: false
            },
            {
                countryName: 'PUERTO RICO',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'en-PR',
                main: false
            },
            {
                countryName: 'QATAR',
                currencyFullName: 'Qatari Rial',
                currencyCode: 'QAR',
                countryLanguage: 'ar-QA',
                main: false
            },
            {
                countryName: 'ROMANIA',
                currencyFullName: 'Romanian Leu',
                currencyCode: 'RON',
                countryLanguage: 'ro-RO',
                main: false
            },
            {
                countryName: 'RWANDA',
                currencyFullName: 'Rwanda Franc',
                currencyCode: 'RWF',
                countryLanguage: 'en-RW',
                main: false
            },
            {
                countryName: 'SAINT BARTHÉLEMY',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'fr-BL',
                main: false
            },
            {
                countryName: 'SAINT KITTS AND NEVIS',
                currencyFullName: 'East Caribbean Dollar',
                currencyCode: 'XCD',
                countryLanguage: 'en-KN',
                main: false
            },
            {
                countryName: 'SAINT LUCIA',
                currencyFullName: 'East Caribbean Dollar',
                currencyCode: 'XCD',
                countryLanguage: 'en-LC',
                main: false
            },
            {
                countryName: 'SAINT PIERRE AND MIQUELON',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'fr-PM',
                main: false
            },
            {
                countryName: 'SAINT VINCENT AND THE GRENADINES',
                currencyFullName: 'East Caribbean Dollar',
                currencyCode: 'XCD',
                countryLanguage: 'en-VC',
                main: false
            },
            {
                countryName: 'SAMOA',
                currencyFullName: 'Tala',
                currencyCode: 'WST',
                countryLanguage: 'en-WS',
                main: false
            },
            {
                countryName: 'SAN MARINO',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'it-SM',
                main: false
            },
            {
                countryName: 'SAUDI ARABIA',
                currencyFullName: 'Saudi Riyal',
                currencyCode: 'SAR',
                countryLanguage: 'ar-SA',
                main: false
            },
            {
                countryName: 'SENEGAL',
                currencyFullName: 'CFA Franc BCEAO',
                currencyCode: 'XOF',
                countryLanguage: 'fr-SN',
                main: false
            },
            {
                countryName: 'SERBIA',
                currencyFullName: 'Serbian Dinar',
                currencyCode: 'RSD',
                countryLanguage: 'sr-Cyrl-RS',
                main: false
            },
            {
                countryName: 'SEYCHELLES',
                currencyFullName: 'Seychelles Rupee',
                currencyCode: 'SCR',
                countryLanguage: 'en-SC',
                main: false
            },
            {
                countryName: 'SIERRA LEONE',
                currencyFullName: 'Leone',
                currencyCode: 'SLL',
                countryLanguage: 'en-SL',
                main: false
            },
            {
                countryName: 'SINGAPORE',
                currencyFullName: 'Singapore Dollar',
                currencyCode: 'SGD',
                countryLanguage: 'zh-SG',
                main: false
            },
            {
                countryName: 'SLOVAKIA',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'sk-SK',
                main: false
            },
            {
                countryName: 'SLOVENIA',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'en-SI',
                main: false
            },
            {
                countryName: 'SOLOMON ISLANDS',
                currencyFullName: 'Solomon Islands Dollar',
                currencyCode: 'SBD',
                countryLanguage: 'en-SB',
                main: false
            },
            {
                countryName: 'SOMALIA',
                currencyFullName: 'Somali Shilling',
                currencyCode: 'SOS',
                countryLanguage: 'ar-SO',
                main: false
            },
            {
                countryName: 'SOUTH AFRICA',
                currencyFullName: 'Rand',
                currencyCode: 'ZAR',
                countryLanguage: 'af-ZA',
                main: false
            },
            {
                countryName: 'SOUTH SUDAN',
                currencyFullName: 'South Sudanese Pound',
                currencyCode: 'SSP',
                countryLanguage: 'ar-SS',
                main: false
            },
            {
                countryName: 'SPAIN',
                currencyFullName: 'Euro',
                currencyCode: 'EUR',
                countryLanguage: 'ast-ES',
                main: false
            },
            {
                countryName: 'SRI LANKA',
                currencyFullName: 'Sri Lanka Rupee',
                currencyCode: 'LKR',
                countryLanguage: 'si-LK',
                main: false
            },
            {
                countryName: 'SURINAME',
                currencyFullName: 'Surinam Dollar',
                currencyCode: 'SRD',
                countryLanguage: 'nl-SR',
                main: false
            },
            {
                countryName: 'SVALBARD AND JAN MAYEN',
                currencyFullName: 'Norwegian Krone',
                currencyCode: 'NOK',
                countryLanguage: 'nb-SJ',
                main: false
            },
            {
                countryName: 'SWEDEN',
                currencyFullName: 'Swedish Krona',
                currencyCode: 'SEK',
                countryLanguage: 'en-SE',
                main: false
            },
            {
                countryName: 'SWITZERLAND',
                currencyFullName: 'Swiss Franc',
                currencyCode: 'CHF',
                countryLanguage: 'gsw-CH',
                main: false
            },
            {
                countryName: 'SWITZERLAND',
                currencyFullName: 'WIR Euro',
                currencyCode: 'CHE',
                countryLanguage: 'gsw-CH',
                main: false
            },
            {
                countryName: 'SWITZERLAND',
                currencyFullName: 'WIR Franc',
                currencyCode: 'CHW',
                countryLanguage: 'gsw-CH',
                main: false
            },
            {
                countryName: 'TAJIKISTAN',
                currencyFullName: 'Somoni',
                currencyCode: 'TJS',
                countryLanguage: 'tg-Cyrl-TJ',
                main: false
            },
            {
                countryName: 'THAILAND',
                currencyFullName: 'Baht',
                currencyCode: 'THB',
                countryLanguage: 'th-TH',
                main: false
            },
            {
                countryName: 'TIMOR-LESTE',
                currencyFullName: 'US Dollar',
                currencyCode: 'USD',
                countryLanguage: 'pt-TL',
                main: false
            },
            {
                countryName: 'TOGO',
                currencyFullName: 'CFA Franc BCEAO',
                currencyCode: 'XOF',
                countryLanguage: 'ee-TG',
                main: false
            },
            {
                countryName: 'TOKELAU',
                currencyFullName: 'New Zealand Dollar',
                currencyCode: 'NZD',
                countryLanguage: 'en-TK',
                main: false
            },
            {
                countryName: 'TONGA',
                currencyFullName: 'Pa\'anga',
                currencyCode: 'TOP',
                countryLanguage: 'en-TO',
                main: false
            },
            {
                countryName: 'TRINIDAD AND TOBAGO',
                currencyFullName: 'Trinidad and Tobago Dollar',
                currencyCode: 'TTD',
                countryLanguage: 'en-TT',
                main: false
            },
            {
                countryName: 'TUNISIA',
                currencyFullName: 'Tunisian Dinar',
                currencyCode: 'TND',
                countryLanguage: 'ar-TN',
                main: false
            },
            {
                countryName: 'TURKEY',
                currencyFullName: 'Turkish Lira',
                currencyCode: 'TRY',
                countryLanguage: 'tr-TR',
                main: false
            },
            {
                countryName: 'TURKMENISTAN',
                currencyFullName: 'Turkmenistan New Manat',
                currencyCode: 'TMT',
                countryLanguage: 'tk-TM',
                main: false
            },
            {
                countryName: 'TUVALU',
                currencyFullName: 'Australian Dollar',
                currencyCode: 'AUD',
                countryLanguage: 'en-TV',
                main: false
            },
            {
                countryName: 'UGANDA',
                currencyFullName: 'Uganda Shilling',
                currencyCode: 'UGX',
                countryLanguage: 'cgg-UG',
                main: false
            },
            {
                countryName: 'UKRAINE',
                currencyFullName: 'Hryvnia',
                currencyCode: 'UAH',
                countryLanguage: 'ru-UA',
                main: false
            },
            {
                countryName: 'URUGUAY',
                currencyFullName: 'Peso Uruguayo',
                currencyCode: 'UYU',
                countryLanguage: 'es-UY',
                main: false
            },
            {
                countryName: 'URUGUAY',
                currencyFullName: 'Uruguay Peso en Unidades Indexadas (UI)',
                currencyCode: 'UYI',
                countryLanguage: 'es-UY',
                main: false
            },
            {
                countryName: 'URUGUAY',
                currencyFullName: 'Unidad Previsional',
                currencyCode: 'UYW',
                countryLanguage: 'es-UY',
                main: false
            },
            {
                countryName: 'UZBEKISTAN',
                currencyFullName: 'Uzbekistan Sum',
                currencyCode: 'UZS',
                countryLanguage: 'uz-Cyrl-UZ',
                main: false
            },
            {
                countryName: 'VANUATU',
                currencyFullName: 'Vatu',
                currencyCode: 'VUV',
                countryLanguage: 'en-VU',
                main: false
            },
            {
                countryName: 'WALLIS AND FUTUNA',
                currencyFullName: 'CFP Franc',
                currencyCode: 'XPF',
                countryLanguage: 'fr-WF',
                main: false
            },
            {
                countryName: 'YEMEN',
                currencyFullName: 'Yemeni Rial',
                currencyCode: 'YER',
                countryLanguage: 'ar-YE',
                main: false
            },
            {
                countryName: 'ZAMBIA',
                currencyFullName: 'Zambian Kwacha',
                currencyCode: 'ZMW',
                countryLanguage: 'bem-ZM',
                main: false
            },
            {
                countryName: 'ZIMBABWE',
                currencyFullName: 'Zimbabwe Dollar',
                currencyCode: 'ZWL',
                countryLanguage: 'en-ZW',
                main: false
            }
        ];
        if (main != null) {
            list = list.filter(function (x) { return x.main === main; });
        }
        if (countryName != null) {
            list = list.filter(function (x) { return x.countryName === countryName; });
        }
        if (currencyFullName != null) {
            list = list.filter(function (x) { return x.currencyFullName === currencyFullName; });
        }
        if (currencyCode != null) {
            list = list.filter(function (x) { return x.currencyCode === currencyCode; });
        }
        if (countryLanguage != null) {
            list = list.filter(function (x) { return x.countryLanguage === countryLanguage; });
        }
        return list;
    };
    return Core;
}());
exports.InternationalCore = new Core();
//# sourceMappingURL=core-services-internationalization.service.js.map