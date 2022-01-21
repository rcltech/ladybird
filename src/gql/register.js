import { gql } from "@apollo/client";

export const REGISTER = gql`
  mutation Register($username: String!, $phone: String!, $room_no: String!) {
    register(user: { username: $username, phone: $phone, room_no: $room_no }) {
      username
    }
  }
`;
