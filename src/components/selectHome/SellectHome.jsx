import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}



const SellectHome = () => {
     const [age, setAge] = React.useState('Woman’s Fashion');

     const handleChange = (event) => {
       setAge(event.target.value);
     };
   
     return (
       <FormControl sx={{ width: "100%" }} size="small">
         {/* <InputLabel id="demo-select-small-label">Age</InputLabel> */}
         <Select
           labelId="demo-select-small-label"
           id="demo-select-small"
           value={age}
           onChange={handleChange}
         >
           {/* <MenuItem value="">
             <em>None</em>
           </MenuItem> */}
           <MenuItem value={"Woman’s Fashion"}>Woman’s Fashion</MenuItem>
           <MenuItem value={"Fashion"}>Fashion</MenuItem>
           <MenuItem value={"Woman’s"}>Woman’s</MenuItem>
         </Select>
       </FormControl>
     );
}

export default SellectHome
