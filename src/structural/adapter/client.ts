import { EmailValidatorAdapter } from './validation/email-validator-adapter';
import { EmailValidatorProtocol } from './validation/email-validator-protocol';

function validateEmail(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  return emailValidator.isEmail(email)
    ? console.log('Email é valido')
    : console.log('Email é invalido');
}

validateEmail(new EmailValidatorAdapter(), 'bla@gmail.com');
