### Helpful tips
### Errors 

##### 'react-scripts' is not recognized as an internal or external command, operable program or batch file.'
I had this occur when I tried to launch the app via `npm start`. I ran `npm i` which basically installs all the dependencies for the project
from the package.json file. Afterwards, I could launch the app fine. 

### Look and feel

##### Page setup for everyone to work on their elements
I've added some scaffolding for react router. This way we can easily be working on a test page or
our own page/components without continually re-writing or updating the App.js / Index.js for now. If you want to create your own component(s) to play with and have the ability to navigate to them: 
1. Create your own *.js file in the /components folder
2. Update App.js with a route to your base component. 

```
<Route path="/yourpage" element={<YourClassComponentThingy />} />
```
3. The above will let you navigate to http://localhost:3000/yourpage and render YourClassComponentThingy. Basic to start with, but we can build on it as we learn more? 

##### Icons
I've added the following package to gain access to font awesome icons in 
an easy to use format. 
```
import { FaTiktok } from "react-icons/fa";
```
Where Fatiktok is an icon name from [Link](https://react-icons.github.io/react-icons/icons?name=fa)

##### CICD
Testing pipeline
