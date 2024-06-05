import { StringClean } from './core-services-string.service';

class Validate {
  email(email: string): boolean {
    if (email == null || email.length === 0 || StringClean.cleanText(email).length === 0) {
      return false;
    }

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email.toLowerCase());
  }

  comboboxValue(string: string): boolean {
    const regex = /^[A-Za-z0-9_-]+$/;
    return regex.test(string);
  }
}

export const StringValidate = new Validate();
