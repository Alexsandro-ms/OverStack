import * as yup from "yup";

async function SignupValidation(data) {
  let schema = yup.object().shape({
    password: yup.string().required().min(6),
    phone: yup.string().required().min(9).max(11),
    email: yup.string().email().required(),
    name: yup.string().required(),
  });

  return await schema.validate(data);
}

export default SignupValidation;
