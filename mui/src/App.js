import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderText from './components/HeaderText';
import { PokemonDataContext } from './PokemonDataContext';
import PokemonListView from './components/PokemonListView';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './components/About'
import Help from './components/Help'
import DataTable from './components/DataTable'
import GrassType from './components/GrassType';
import DisplayByType from './components/DisplayByType';
import NewMui from './components/NewMui';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HelpIcon from '@mui/icons-material/Help';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { pink } from '@mui/material/colors';

import GrassIcon from '@mui/icons-material/Grass';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import BugReportIcon from '@mui/icons-material/BugReport';
import PersonIcon from '@mui/icons-material/Person';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PublicIcon from '@mui/icons-material/Public';
import CircleIcon from '@mui/icons-material/Circle';
import SportsMmaIcon from '@mui/icons-material/SportsMma';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import RedditIcon from '@mui/icons-material/Reddit';
import PetsIcon from '@mui/icons-material/Pets';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PokemonDataTable from './components/PokemonTable'
import MyFavoritePokemons from './components/MyFavoritePokemons';
import { FavoritesProvider } from './FavoritesContext';



const drawerWidth = 240;

function App() {
  const [pokemons, setData] = useState([]);
  useEffect(() => {
    fetch('https://uyghur.ai/course/data/pokemon.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const responseive_drawer = (<div>
    <List>
      <ListItemButton component={Link} to="/">
        <ListItemIcon>{<HelpIcon sx={{ color: "info" }}/>}</ListItemIcon>
        <ListItemText>Home</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/grasstype">
        <ListItemIcon>{<GrassIcon sx={{ color: "#7ac74c" }}/>}</ListItemIcon>
        <ListItemText>Grass Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/firetype">
        <ListItemIcon>{<LocalFireDepartmentIcon sx={{ color: "#ee8130" }}/>}</ListItemIcon>
        <ListItemText>Fire Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/watertype">
        <ListItemIcon>{<WaterDropIcon sx={{ color: "#6390f0" }}/>}</ListItemIcon>
        <ListItemText>Water Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/bugtype">
        <ListItemIcon>{<BugReportIcon sx={{ color: "#a6b91a" }}/>}</ListItemIcon>
        <ListItemText>Bug Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/normaltype">
        <ListItemIcon>{<PersonIcon csx={{ color: "#a8a77a" }}/>}</ListItemIcon>
        <ListItemText>Normal Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/poisontype">
        <ListItemIcon>{<CoronavirusIcon sx={{ color: "#a33ea1" }}/>}</ListItemIcon>
        <ListItemText>Poison Type</ListItemText>
      </ListItemButton>
      <ListItemButton component={Link} to="/electrictype">
        <ListItemIcon>{<ElectricBoltIcon sx={{ color: "#f7d02c" }}/>}</ListItemIcon>
        <ListItemText>Electric Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/groundtype">
        <ListItemIcon>{<PublicIcon sx={{ color: "#e2bf65" }}/>}</ListItemIcon>
        <ListItemText>Ground Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/rocktype">
        <ListItemIcon>{<CircleIcon sx={{ color: "#b6a136" }}/>}</ListItemIcon>
        <ListItemText>Rock Type</ListItemText>
      </ListItemButton>
      <ListItemButton component={Link} to="/Fightingtype">
        <ListItemIcon>{<SportsMmaIcon sx={{ color: "#c22e28" }}/>}</ListItemIcon>
        <ListItemText>Fighting Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/psychictype">
        <ListItemIcon>{<PsychologyIcon sx={{ color: "#f95587" }}/>}</ListItemIcon>
        <ListItemText>Psychic Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/icetype">
        <ListItemIcon>{<AcUnitIcon sx={{ color: "#96d9d6" }}/>}</ListItemIcon>
        <ListItemText>Ice Type</ListItemText>
      </ListItemButton>
      <ListItemButton component={Link} to="/ghosttype">
        <ListItemIcon>{<RedditIcon sx={{ color: "#735797" }}/>}</ListItemIcon>
        <ListItemText>Ghost Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/dragontype">
        <ListItemIcon>{<PetsIcon sx={{ color: "#6f35fc" }}/>}</ListItemIcon>
        <ListItemText>Dragon Type</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/favoritepokemon">
        <ListItemIcon>{<FavoriteIcon sx={{ color: "#ff0000" }}/>}</ListItemIcon>
        <ListItemText>My Favorite Pokemons!</ListItemText>
      </ListItemButton>



    </List>

    <Divider/>

    <List>
      <ListItemButton>
          <ListItemIcon>{<SubscriptionsIcon color="primary"/>}</ListItemIcon>
          <ListItemText>Subscribe!</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/datatable">
        <ListItemIcon>{<PetsIcon csx={{ color: "#6f35fc" }}/>}</ListItemIcon>
        <ListItemText>Data Table</ListItemText>
      </ListItemButton>

      <ListItemButton component={Link} to="/pokemondatatable">
        <ListItemIcon>{<PetsIcon csx={{ color: "#6f35fc" }}/>}</ListItemIcon>
        <ListItemText>Pokemon Data Table</ListItemText>
      </ListItemButton>
    </List>



  </div>
  );

  return (
    <Router>
    <PokemonDataContext.Provider value={pokemons}>
    <FavoritesProvider>
      <div className="pokedex-app" style={{ display: 'flex' }}>
      <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
          }}
        >
          {responseive_drawer}
     </Drawer>
     <div style={{ width: `calc(100% - ${drawerWidth}px)` }}>
     <Routes>
      <Route path="/" element={<><HeaderText /><PokemonListView/></>} />
      <Route path="/grasstype" element={<DisplayByType displayType="grass" />} />
      <Route path="/firetype" element={<DisplayByType displayType="fire" />} />
      <Route path="/watertype" element={<DisplayByType displayType="water" />} />
      <Route path="/bugtype" element={<DisplayByType displayType="bug" />} />
      <Route path="/normaltype" element={<DisplayByType displayType="normal" />} />
      <Route path="/poisontype" element={<DisplayByType displayType="poison" />} />
      <Route path="/electrictype" element={<DisplayByType displayType="electric" />} />
      <Route path="/groundtype" element={<DisplayByType displayType="ground" />} />
      <Route path="/rocktype" element={<DisplayByType displayType="rock" />} />
      <Route path="/fightingtype" element={<DisplayByType displayType="fighting" />} />
      <Route path="/psychictype" element={<DisplayByType displayType="psychic" />} />
      <Route path="/icetype" element={<DisplayByType displayType="ice" />} />
      <Route path="/ghosttype" element={<DisplayByType displayType="ghost" />} />
      <Route path="/dragontype" element={<DisplayByType displayType="dragon" />} />
      <Route path="/about" element={<About />} />
      <Route path="/help" element={<Help />} />
      <Route path="/datatable" element={<DataTable />} />
      <Route path="/pokemondatatable" element={<PokemonDataTable />} />
      <Route path="/newmui" element={<NewMui />} />
      <Route path="/favoritepokemon" element={<MyFavoritePokemons />} />
      </Routes>
     </div>
      
      </div>
    </FavoritesProvider>
    </PokemonDataContext.Provider>
    </Router>

  );
}

export default App;