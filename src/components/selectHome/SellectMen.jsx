import * as React from 'react';
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


const SellectMen = () => {
     const [age, setAge] = React.useState('Men’s Fashion');

     const handleChange = (event) => {
       setAge(event.target.value);
     };
   
     return (
       <FormControl sx={{ width: "100%"}} size="small">
         <Select
           labelId="demo-select-small-label"
           id="demo-select-small"
           value={age}
           onChange={handleChange}
         >
           <MenuItem value={"Men’s Fashion"}>Men’s Fashion</MenuItem>
           <MenuItem value={"Fashion"}>Fashion</MenuItem>
           <MenuItem value={"Men’s"}>Woman’s</MenuItem>
         </Select>
       </FormControl>
     );
}

export default SellectMen
