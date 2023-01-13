import './App.css';

// use React
import React, { useEffect, useState } from 'react';

// Amplify code
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
import {
  Authenticator,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

// graphql
import { listProjects } from './graphql/queries';
import { updateProject } from './graphql/mutations';

// mayerial UI
import { Button, Paper, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

Amplify.configure(awsconfig);


function App() {
  // keep state of projects
  const [Projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  

  // on page load
  useEffect(() => {
    retrieveProjects();
  }, []
  );

  // get the project list
  const retrieveProjects = async () => {
    try {
      const projectDataList = await API.graphql(graphqlOperation(listProjects));
      const projectList = projectDataList.data.listProjects.items;
      setProjects(projectList)
    }
    catch (error) {
      console.log('database fetch error', error)
    }

  }

  // show data of project
  const showCard = async(n) => {
    try {
      const proj = Projects[n];
      setSelectedProject(proj);
    } catch (error) {
      console.log('editCard error', error);
    }
  };

  const handleSave = async () => {
    setIsEditing(false);
    try {
      // remove the createdAt field from the selectedProject object
      const input = { id: selectedProject.id, name: selectedProject.name, description: selectedProject.description };
      // update the project in the backend
      const updatedProject = await API.graphql(graphqlOperation(updateProject, { input }));
      console.log("project updated", updatedProject);
    } catch (error) {
      console.log("Error updating project: ", error);
    }
  };
  

  const handleDescriptionChange = (event) => {
    setSelectedProject({ ...selectedProject, description: event.target.value });
};
  // render page
  return (
    <div className="App">
      <header className="App-header">
        <Authenticator>
          {({ signOut, user }) => (
            <main>
              <p className="Username">Welcome to kelvin.green!     Hello {user.username} 
              <IconButton color="primary" onClick={signOut}>
                  <LogoutIcon />
                </IconButton>
              </p>
            </main>
          )}
        </Authenticator>
      </header>

      <div className="navileft">
        {Projects.map((Prj, n) => {
          return (
            <Paper elevation={4} key={`Prj${n}`}>
              <div className="projectsdetails">
                <div>
                <div className="prjname" onClick={() => showCard(n)}><Button> {Prj.name}</Button></div>
                </div>
              </div>
            </Paper>
          );
        })}
      </div>
      <div className="details">

    {selectedProject && (
    <div>
      <h1>{selectedProject.name}</h1>
      <p className="bread"> Basis-Daten <span class="green">●</span> > Ist-Analyse <span class="yellow">●</span> > Potenzial-Analyse <span class="red">●</span> > Szenario-Analyse <span class="green">●</span> > Technologieauswahl <span class="red">●</span>
      </p>
      <h2>Daten prüfen und weiter</h2>
      <h3>Ihre Kurzbeschreibung des Projektes</h3>
      
      {isEditing ? (
        <>
        <input
	    type="text"
	    className="gray-input"
	    value={selectedProject.description}
	    onChange={handleDescriptionChange}
	    size={selectedProject.description.length}
	    autoFocus
	    onKeyPress={(e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  }}
/>
        </>
      ) : (
        <p 
	    className="editable"
	    contentEditable={isEditing}
	    onClick={() => setIsEditing(true)}
	>
  {selectedProject.description}
</p>
      )}
      <hr></hr>
      <h3>Definition des Wärmenetzes</h3>
      <p>Standort: {selectedProject.place}</p>
      <p>Art:<Button variant="contained"  color="secondary" endIcon={<HighlightOffIcon />}> {selectedProject.type_network}</Button></p>
      <p>Bebauung: {selectedProject.building}</p>
      <p>Standard: {selectedProject.standard}</p>
      <p>Vorlauf: {selectedProject.flow_temp}</p>
      <p>Lieferpreis: {selectedProject.delivery_price} {selectedProject.delivery_currency}</p>
      <p>Größe: {selectedProject.size} {selectedProject.size_unit}</p>
      <p>Verlauf: <a href={selectedProject.definition}>{selectedProject.definition}</a></p>
      <p>Quellen: <a href={selectedProject.source}>{selectedProject.source}</a></p>

    </div>
  )}
</div>




      </div>
      );
     
}

export default withAuthenticator(App); 
