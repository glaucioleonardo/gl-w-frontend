class Core {
  currentUrl() {
    return window.location.href;
  }
}
// tslint:disable-next-line:variable-name
export const UrlCore = new Core();

class Decode {
  decodeHtmlText(value: string): string {
    return value
      .replace(/%E2%82%AC/g, '€')
      .replace(/%E2%80%9A/g, '‚')
      .replace(/%C6%92/g, 'ƒ')
      .replace(/%E2%80%9E/g, '„')
      .replace(/%E2%80%A6/g, '…')
      .replace(/%E2%80%A0/g, '†')
      .replace(/%E2%80%A1/g, '‡')
      .replace(/%CB%86/g, 'ˆ')
      .replace(/%E2%80%B0/g, '‰')
      .replace(/%C5%A0/g, 'Š')
      .replace(/%E2%80%B9/g, '‹')
      .replace(/%C5%92/g, 'Œ')
      .replace(/%C5%8D/g, '')
      .replace(/%C5%BD/g, 'Ž')
      .replace(/%C2%90/g, '')
      .replace(/%E2%80%98/g, '‘')
      .replace(/%E2%80%99/g, '’')
      .replace(/%E2%80%9C/g, '“')
      .replace(/%E2%80%9D/g, '”')
      .replace(/%E2%80%A2/g, '•')
      .replace(/%E2%80%93/g, '–')
      .replace(/%E2%80%94/g, '—')
      .replace(/%CB%9C/g, '˜')
      .replace(/%E2%84/g, '™')
      .replace(/%C5%A1/g, 'š')
      .replace(/%E2%80/g, '›')
      .replace(/%C5%93/g, 'œ')
      .replace(/%C5%BE/g, 'ž')
      .replace(/%C5%B8/g, 'Ÿ')
      .replace(/%C2%A0/g, ' ')
      .replace(/%C2%A1/g, '¡')
      .replace(/%C2%A2/g, '¢')
      .replace(/%C2%A3/g, '£')
      .replace(/%C2%A4/g, '¤')
      .replace(/%C2%A5/g, '¥')
      .replace(/%C2%A6/g, '¦')
      .replace(/%C2%A7/g, '§')
      .replace(/%C2%A8/g, '¨')
      .replace(/%C2%A9/g, '©')
      .replace(/%C2%AA/g, 'ª')
      .replace(/%C2%AB/g, '«')
      .replace(/%C2%AC/g, '¬')
      .replace(/%C2%AD/g, '')
      .replace(/%C2%AE/g, '®')
      .replace(/%C2%AF/g, '¯')
      .replace(/%C2%B0/g, '°')
      .replace(/%C2%B1/g, '±')
      .replace(/%C2%B2/g, '²')
      .replace(/%C2%B3/g, '³')
      .replace(/%C2%B4/g, '´')
      .replace(/%C2%B5/g, 'µ')
      .replace(/%C2%B6/g, '¶')
      .replace(/%C2%B7/g, '·')
      .replace(/%C2%B8/g, '¸')
      .replace(/%C2%B9/g, '¹')
      .replace(/%C2%BA/g, 'º')
      .replace(/%C2%BB/g, '»')
      .replace(/%C2%BC/g, '¼')
      .replace(/%C2%BD/g, '½')
      .replace(/%C2%BE/g, '¾')
      .replace(/%C2%BF/g, '¿')
      .replace(/%C3%80/g, 'À')
      .replace(/%C3%81/g, 'Á')
      .replace(/%C3%82/g, 'Â')
      .replace(/%C3%83/g, 'Ã')
      .replace(/%C3%84/g, 'Ä')
      .replace(/%C3%85/g, 'Å')
      .replace(/%C3%86/g, 'Æ')
      .replace(/%C3%87/g, 'Ç')
      .replace(/%C3%88/g, 'È')
      .replace(/%C3%89/g, 'É')
      .replace(/%C3%8A/g, 'Ê')
      .replace(/%C3%8B/g, 'Ë')
      .replace(/%C3%8C/g, 'Ì')
      .replace(/%C3%8D/g, 'Í')
      .replace(/%C3%8E/g, 'Î')
      .replace(/%C3%8F/g, 'Ï')
      .replace(/%C3%90/g, 'Ð')
      .replace(/%C3%91/g, 'Ñ')
      .replace(/%C3%92/g, 'Ò')
      .replace(/%C3%93/g, 'Ó')
      .replace(/%C3%94/g, 'Ô')
      .replace(/%C3%95/g, 'Õ')
      .replace(/%C3%96/g, 'Ö')
      .replace(/%C3%97/g, '×')
      .replace(/%C3%98/g, 'Ø')
      .replace(/%C3%99/g, 'Ù')
      .replace(/%C3%9A/g, 'Ú')
      .replace(/%C3%9B/g, 'Û')
      .replace(/%C3%9C/g, 'Ü')
      .replace(/%C3%9D/g, 'Ý')
      .replace(/%C3%9E/g, 'Þ')
      .replace(/%C3%9F/g, 'ß')
      .replace(/%C3%A0/g, 'à')
      .replace(/%C3%A1/g, 'á')
      .replace(/%C3%A2/g, 'â')
      .replace(/%C3%A3/g, 'ã')
      .replace(/%C3%A4/g, 'ä')
      .replace(/%C3%A5/g, 'å')
      .replace(/%C3%A6/g, 'æ')
      .replace(/%C3%A7/g, 'ç')
      .replace(/%C3%A8/g, 'è')
      .replace(/%C3%A9/g, 'é')
      .replace(/%C3%AA/g, 'ê')
      .replace(/%C3%AB/g, 'ë')
      .replace(/%C3%AC/g, 'ì')
      .replace(/%C3%AD/g, 'í')
      .replace(/%C3%AE/g, 'î')
      .replace(/%C3%AF/g, 'ï')
      .replace(/%C3%B0/g, 'ð')
      .replace(/%C3%B1/g, 'ñ')
      .replace(/%C3%B2/g, 'ò')
      .replace(/%C3%B3/g, 'ó')
      .replace(/%C3%B4/g, 'ô')
      .replace(/%C3%B5/g, 'õ')
      .replace(/%C3%B6/g, 'ö')
      .replace(/%C3%B7/g, '÷')
      .replace(/%C3%B8/g, 'ø')
      .replace(/%C3%B9/g, 'ù')
      .replace(/%C3%BA/g, 'ú')
      .replace(/%C3%BB/g, 'û')
      .replace(/%C3%BC/g, 'ü')
      .replace(/%C3%BD/g, 'ý')
      .replace(/%C3%BE/g, 'þ')
      .replace(/%C3%BF/g, 'ÿ')


      .replace(/%20/g, ' ')
      .replace(/%21/g, '!')
      .replace(/%22/g, '"')
      .replace(/%23/g, '#')
      .replace(/%24/g, '$')
      .replace(/%25/g, '%')
      .replace(/%26/g, '&')
      .replace(/%27/g, '\'')
      .replace(/%28/g, '(')
      .replace(/%29/g, ')')
      .replace(/%2A/g, '*')
      .replace(/%2B/g, '+')
      .replace(/%2C/g, ',')
      .replace(/%2D/g, '-')
      .replace(/%2E/g, '.')
      .replace(/%2F/g, '/')
      .replace(/%30/g, '0')
      .replace(/%31/g, '1')
      .replace(/%32/g, '2')
      .replace(/%33/g, '3')
      .replace(/%34/g, '4')
      .replace(/%35/g, '5')
      .replace(/%36/g, '6')
      .replace(/%37/g, '7')
      .replace(/%38/g, '8')
      .replace(/%39/g, '9')
      .replace(/%3A/g, ':')
      .replace(/%3B/g, ';')
      .replace(/%3C/g, '<')
      .replace(/%3D/g, '=')
      .replace(/%3E/g, '>')
      .replace(/%3F/g, '?')
      .replace(/%40/g, '@')
      .replace(/%41/g, 'A')
      .replace(/%42/g, 'B')
      .replace(/%43/g, 'C')
      .replace(/%44/g, 'D')
      .replace(/%45/g, 'E')
      .replace(/%46/g, 'F')
      .replace(/%47/g, 'G')
      .replace(/%48/g, 'H')
      .replace(/%49/g, 'I')
      .replace(/%4A/g, 'J')
      .replace(/%4B/g, 'K')
      .replace(/%4C/g, 'L')
      .replace(/%4D/g, 'M')
      .replace(/%4E/g, 'N')
      .replace(/%4F/g, 'O')
      .replace(/%50/g, 'P')
      .replace(/%51/g, 'Q')
      .replace(/%52/g, 'R')
      .replace(/%53/g, 'S')
      .replace(/%54/g, 'T')
      .replace(/%55/g, 'U')
      .replace(/%56/g, 'V')
      .replace(/%57/g, 'W')
      .replace(/%58/g, 'X')
      .replace(/%59/g, 'Y')
      .replace(/%5A/g, 'Z')
      .replace(/%5B/g, '[')
      .replace(/%5C/g, '\\')
      .replace(/%5D/g, ']')
      .replace(/%5E/g, '^')
      .replace(/%5F/g, '_')
      .replace(/%60/g, '`')
      .replace(/%61/g, 'a')
      .replace(/%62/g, 'b')
      .replace(/%63/g, 'c')
      .replace(/%64/g, 'd')
      .replace(/%65/g, 'e')
      .replace(/%66/g, 'f')
      .replace(/%67/g, 'g')
      .replace(/%68/g, 'h')
      .replace(/%69/g, 'i')
      .replace(/%6A/g, 'j')
      .replace(/%6B/g, 'k')
      .replace(/%6C/g, 'l')
      .replace(/%6D/g, 'm')
      .replace(/%6E/g, 'n')
      .replace(/%6F/g, 'o')
      .replace(/%70/g, 'p')
      .replace(/%71/g, 'q')
      .replace(/%72/g, 'r')
      .replace(/%73/g, 's')
      .replace(/%74/g, 't')
      .replace(/%75/g, 'u')
      .replace(/%76/g, 'v')
      .replace(/%77/g, 'w')
      .replace(/%78/g, 'x')
      .replace(/%79/g, 'y')
      .replace(/%7A/g, 'z')
      .replace(/%7B/g, '{')
      .replace(/%7C/g, '|')
      .replace(/%7D/g, '}')
      .replace(/%7E/g, '~')
      .replace(/%7F/g, ' ')
      .replace(/%80/g, '`')
      .replace(/%81/g, '')
      .replace(/%82/g, '‚')
      .replace(/%83/g, 'ƒ')
      .replace(/%84/g, '„')
      .replace(/%85/g, '…')
      .replace(/%86/g, '†')
      .replace(/%87/g, '‡')
      .replace(/%88/g, 'ˆ')
      .replace(/%89/g, '‰')
      .replace(/%8A/g, 'Š')
      .replace(/%8B/g, '‹')
      .replace(/%8C/g, 'Œ')
      .replace(/%8D/g, '')
      .replace(/%8E/g, 'Ž')
      .replace(/%8F/g, '')
      .replace(/%90/g, '')
      .replace(/%91/g, '‘')
      .replace(/%92/g, '’')
      .replace(/%93/g, '“')
      .replace(/%94/g, '”')
      .replace(/%95/g, '•')
      .replace(/%96/g, '–')
      .replace(/%97/g, '—')
      .replace(/%98/g, '˜')
      .replace(/%99/g, '™')
      .replace(/%9A/g, 'š')
      .replace(/%9B/g, '›')
      .replace(/%9C/g, 'œ')
      .replace(/%9D/g, '')
      .replace(/%9E/g, 'ž')
      .replace(/%9F/g, 'Ÿ')
      .replace(/%A0/g, ' ')
      .replace(/%A1/g, '¡')
      .replace(/%A2/g, '¢')
      .replace(/%A3/g, '£')
      .replace(/%A4/g, '¤')
      .replace(/%A5/g, '¥')
      .replace(/%A6/g, '¦')
      .replace(/%A7/g, '§')
      .replace(/%A8/g, '¨')
      .replace(/%A9/g, '©')
      .replace(/%AA/g, 'ª')
      .replace(/%AB/g, '«')
      .replace(/%AC/g, '¬')
      .replace(/%AD/g, '')
      .replace(/%AE/g, '®')
      .replace(/%AF/g, '¯')
      .replace(/%B0/g, '°')
      .replace(/%B1/g, '±')
      .replace(/%B2/g, '²')
      .replace(/%B3/g, '³')
      .replace(/%B4/g, '´')
      .replace(/%B5/g, 'µ')
      .replace(/%B6/g, '¶')
      .replace(/%B7/g, '·')
      .replace(/%B8/g, '¸')
      .replace(/%B9/g, '¹')
      .replace(/%BA/g, 'º')
      .replace(/%BB/g, '»')
      .replace(/%BC/g, '¼')
      .replace(/%BD/g, '½')
      .replace(/%BE/g, '¾')
      .replace(/%BF/g, '¿')
      .replace(/%C0/g, 'À')
      .replace(/%C1/g, 'Á')
      .replace(/%C2/g, 'Â')
      .replace(/%C3/g, 'Ã')
      .replace(/%C4/g, 'Ä')
      .replace(/%C5/g, 'Å')
      .replace(/%C6/g, 'Æ')
      .replace(/%C7/g, 'Ç')
      .replace(/%C8/g, 'È')
      .replace(/%C9/g, 'É')
      .replace(/%CA/g, 'Ê')
      .replace(/%CB/g, 'Ë')
      .replace(/%CC/g, 'Ì')
      .replace(/%CD/g, 'Í')
      .replace(/%CE/g, 'Î')
      .replace(/%CF/g, 'Ï')
      .replace(/%D0/g, 'Ð')
      .replace(/%D1/g, 'Ñ')
      .replace(/%D2/g, 'Ò')
      .replace(/%D3/g, 'Ó')
      .replace(/%D4/g, 'Ô')
      .replace(/%D5/g, 'Õ')
      .replace(/%D6/g, 'Ö')
      .replace(/%D7/g, '×')
      .replace(/%D8/g, 'Ø')
      .replace(/%D9/g, 'Ù')
      .replace(/%DA/g, 'Ú')
      .replace(/%DB/g, 'Û')
      .replace(/%DC/g, 'Ü')
      .replace(/%DD/g, 'Ý')
      .replace(/%DE/g, 'Þ')
      .replace(/%DF/g, 'ß')
      .replace(/%E0/g, 'à')
      .replace(/%E1/g, 'á')
      .replace(/%E2/g, 'â')
      .replace(/%E3/g, 'ã')
      .replace(/%E4/g, 'ä')
      .replace(/%E5/g, 'å')
      .replace(/%E6/g, 'æ')
      .replace(/%E7/g, 'ç')
      .replace(/%E8/g, 'è')
      .replace(/%E9/g, 'é')
      .replace(/%EA/g, 'ê')
      .replace(/%EB/g, 'ë')
      .replace(/%EC/g, 'ì')
      .replace(/%ED/g, 'í')
      .replace(/%EE/g, 'î')
      .replace(/%EF/g, 'ï')
      .replace(/%F0/g, 'ð')
      .replace(/%F1/g, 'ñ')
      .replace(/%F2/g, 'ò')
      .replace(/%F3/g, 'ó')
      .replace(/%F4/g, 'ô')
      .replace(/%F5/g, 'õ')
      .replace(/%F6/g, 'ö')
      .replace(/%F7/g, '÷')
      .replace(/%F8/g, 'ø')
      .replace(/%F9/g, 'ù')
      .replace(/%FA/g, 'ú')
      .replace(/%FB/g, 'û')
      .replace(/%FC/g, 'ü')
      .replace(/%FD/g, 'ý')
      .replace(/%FE/g, 'þ')
      .replace(/%FF/g, 'ÿ')

      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>');
  }
}
// tslint:disable-next-line:variable-name
export const UrlDecode = new Decode();

class Params {
  urlVarsDecoded() {
    const vars = {};

    // @ts-ignore
    window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
      // @ts-ignore
      vars[key] = UrlDecode.decodeHtmlText(value);
    });
    return vars;
  }
}
// tslint:disable-next-line:variable-name
export const UrlParams = new Params();
