import styled from 'styled-components';
import NxWelcome from './nx-welcome';

import { Route, Link, Redirect} from 'react-router-dom';

import { BooksFeature } from '@acme/books/feature';
// importing the UI library into our App
import {
  GlobalStyles,
  Header,
  Main,
  NavigationItem,
  NavigationList
  } from '@acme/ui';

const StyledApp = styled.div`
  // Your style here
`;

export const App = () => {
return (
<>
<GlobalStyles />
<Header>
<h1>Bookstore</h1>
<NavigationList>
<NavigationItem>
<Link to="/books">Books</Link>
</NavigationItem>
</NavigationList>
</Header>
<Main>
<Route path="/books" component={BooksFeature} />
<Route exact path="/" render={() => <Redirect to="/books" />} />
</Main>
</>
);
};

export default App;
