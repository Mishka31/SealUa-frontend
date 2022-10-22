import { regex } from 'shared/constants';
import * as yup from 'yup';

import { errorsMessage } from '../validation/errors';

export const validation = {
  email: yup.string().email(errorsMessage.email).required(errorsMessage.required),
  boolean: yup.bool(),
  password: yup
    .string()
    .trim()
    .transform((curr: any, orig: string) => (orig === '' ? null : curr))
    .min(6, errorsMessage.minPasswordLength)
    .max(20, errorsMessage.maxPasswordLength)
    .matches(regex.passwordRegex, {
      message: errorsMessage.password,
      excludeEmptyString: true,
    })
    .required(errorsMessage.required)
    .nullable(),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('create_password'), null], errorsMessage.passwordMatch)
    .required(errorsMessage.required),

  string: yup
    .string()
    .trim()
    .transform((curr: any, orig: string) => (orig === '' ? undefined : curr))
    .required(errorsMessage.required),

  stringOption: yup.lazy((value) => {
    if (value === null || value === undefined || value === '' || isNaN(value)) {
      return yup.mixed().notRequired();
    }
    return yup
      .string()
      .trim()
      .transform((curr, orig) => (orig === '' ? undefined : curr))
      .required(errorsMessage.required);
  }),
};
