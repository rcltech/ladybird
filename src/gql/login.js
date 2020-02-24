import { gql } from "apollo-boost";

export const LOGIN = gql`
  mutation Login {
    login {
      token
      login_status
      register
    }
  }
`;
