import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, IconButton, SvgIcon } from '@mui/material';
import { green, grey, purple } from '@mui/material/colors';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const handleClick = (t: string) => {
    console.log('Clicked');
    console.log(t);
  };

  const TestComponent = ({ t }: { t: string }) => {
    return (
      <SvgIcon
        sx={{ mr: 1, '&:hover': { color: green[500] } }}
        onClick={() => handleClick(t)}
      >
        <path d="M21 5.003v1.5h-2.195v10.685a2.814 2.814 0 0 1-2.641 2.808l-.171.006H8.008a2.814 2.814 0 0 1-2.809-2.642l-.005-.172V6.502L3 6.503v-1.5h18zm-3.695 1.5H6.694v10.685c0 .68.517 1.24 1.18 1.307l.134.007h7.985c.68 0 1.239-.518 1.306-1.18l.007-.134-.001-10.686zm-6.574 2.555v5.976h-1.5V9.058h1.5zm4.038 0v5.976h-1.5V9.058h1.5zm.65-7.06v1.5H8.58v-1.5h6.838z" />
      </SvgIcon>
    );
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
        IconComponent={() => <TestComponent t={'test'} />}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}
