import { gql, useQuery } from "@apollo/client";
import Header from "./components/layout/Header";

const Query = gql`
  query {
    authors {
      name
    }
  }
`;

function App() {
  const { loading, data } = useQuery(Query);
  console.log(data)
  return <Header />;
}

export default App;
