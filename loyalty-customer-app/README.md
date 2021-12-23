### Helpful tips
### Errors 

##### 'react-scripts' is not recognized as an internal or external command, operable program or batch file.'
I had this occur when I tried to launch the app via `npm start`. I ran `npm i` which basically installs all the dependencies for the project
from the package.json file. Afterwards, I could launch the app fine. 

##### Access denied when refreshing routes e.g. /customer or /about
This is because we're designing an SPA. Technically these routes don't exist, so if you refresh the browser on these paths, you
get access denied. Fix was to add URL re-write rules to AWS Amplify to force anything past root (/) to re-write to index.html. 

```
[
    {
        "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf)$)([^.]+$)/>",
        "target": "/index.html",
        "status": "200",
        "condition": null
    }
]
```

### Notes: 
- presentational, which are just arrow notation components - they don't have state
- functional, which are defined using 'function' - they have state e.g. 'this', but very little behaviour/logic
- class - they have state and behaviour



### Look and feel

##### Page setup for everyone to work on their elements
I've added some scaffolding for react router. This way we can easily be working on a test page or
our own page/components without continually re-writing or updating the App.js / Index.js for now. If you want to create your own component(s) to play with and have the ability to navigate to them: 
1. Create your own *.js file in the /components folder
2. Update App.js with a route to your base component. 

```
<Route path="/yourpage" element={<YourClassComponentThingy />} />
```
3. The above will let you navigate to http://localhost:3000/yourpage and render YourClassComponentThingy. Basic to start with, but we can build on it as we learn more? I currently have <Navigation /> sitting in App.js just until I get it right, then it will go 
as well, and become a component anyone can add to their own components (except the sign-in screen)

##### Icons
I've added the following package to gain access to font awesome icons in 
an easy to use format. 
```
import { FaTiktok } from "react-icons/fa";
```
Where Fatiktok is an icon name from [Link](https://react-icons.github.io/react-icons/icons?name=fa)

### CICD
Now set up so that a merge to develop branch will sync across to AWS Code Commit, then publish the content to a container to run the site in AWS. Additionally experimenting with setting up an amplify backend. Notes below: 

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

### Local setup
Set up environment variables: 
```
PS C:\Users\JMatson\source\repos\POC-React-Loyalty-Customer-App\loyalty-customer-app> ($env:REACT_APP_LOYALTY_URL = "local") -and (npm start)
```