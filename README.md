As a developer, I can create a directory in src called pages.
-Done
As a developer, I can create a directory in src called components.
-Done
As a developer, I can create a directory in src called assets.
-Done
As a developer, I can create a file called Header.js in the components directory.
-Done
As a developer, I can create a file called Footer.js in the components directory.
-Done
As a developer, I can create a file called Home.js in the pages directory.
-Done
As a developer, I can create a file called CatIndex.js in the pages directory.
-Done
As a developer, I can create a file called CatShow.js in the pages directory.
-Done
As a developer, I can create a file called CatNew.js in the pages directory.
-Done
As a developer, I can create a file called CatEdit.js in the pages directory.
-Done
As a developer, I can create a file called NotFound.js in the pages directory.
-Done
As a developer, I can add a file to src called mockCats.js and add an array of cat objects.
-Done
As a developer, I can add Reactstrap to my application.
-Done
As a developer, I can use Reactstrap to create the header UI.
-Done
As a developer, I can use Reactstrap to create the footer UI.
-Done
As a developer, I can import the header and footer to all the page components.
-Done
As a developer, I can add some styling to the Home component.
-Done
As a developer, I can add react-router-dom@5.3.0 to my application.
-Done
As a developer, I can add routes to be able to navigate manually to all pages
-Done


Challenge: Cat Tinder Tests
Add Enzyme to your application
-Done
Add a test file for the Home, Header, Footer, and NotFound components with the .test.js extension.
-
Create a test for each page, checking that the page is rendering by asserting against a single JSX element.

Stretch Challenges
As a developer, I can make my tests more DRY by declaring reusable variables in global scope.
Create an additional test for the component Home.js that checks for the first img tag and all of its props.
Create an additional test for the component Header.js that checks for a tag by its class name to contain some text.

///Restful route
index CRUD action is READ and is a GET request
show, CRUD  action is READ and is a GET request
create,
update,
delete//

User side new,edit

#index go to app js

<Route path="/catindex" render={(props) => <CatIndex cats={this.state.cats} />} />

go catindex
> in CatIndex Log this.props.cats means passing info from app to catindex
remove log after

map over this.props.cats in catindex to show all the cats names

-test coverage for catindex


------

SHOW











