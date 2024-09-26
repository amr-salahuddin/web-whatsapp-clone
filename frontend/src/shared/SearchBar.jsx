import React, { useState } from 'react';
import { InputBase, Box, IconButton, Paper, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowBack } from '@mui/icons-material';

function SearchBar() {


    const [isSearching, setIsSearching] = useState(false);
    const [searchText, setSearchText] = useState('');

    const theme = useTheme();

    const primary = theme.palette.primary;
    const searchIconColor = isSearching ? primary.green : primary.main;
    
    function handleSearchChange(e){
        setSearchText(e.target.value);

    }
  return (
    <Paper
      component="form"
      sx={{
        p: '1px 1px',
        mt: 2,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#F0F0F0', // Light background like WhatsApp Web
        borderRadius: '8px',       // Rounded corners
        boxShadow: 'none',          // Remove default shadow
      }}
    >
      {/* Search Icon */}
      <IconButton disableRipple      onClick={() => setIsSearching(!isSearching)}
        disableFocusRipple sx={{ p: '5px' , color: `${searchIconColor}`,          height: '30px', 
        width: '40px',
}} aria-label="search">
        {isSearching? <ArrowBack  sx={{fontSize:24}}/> :<SearchIcon  />}
      </IconButton>

      {/* Search Input */}
      <InputBase
        sx={{ ml: 1, flex: 1,'.MuiInputBase'	:'red' }}

        placeholder="Search"
        
        value={searchText}
        onChange={handleSearchChange}
        inputProps={{ 'aria-label': 'search whatsapp' }}
      />
    </Paper>
  );
}

export default SearchBar;
