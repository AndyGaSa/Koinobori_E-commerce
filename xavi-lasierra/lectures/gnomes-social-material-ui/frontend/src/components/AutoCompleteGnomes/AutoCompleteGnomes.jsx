import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { findGnomes, clearGnomes } from '../../redux/actions/gnomes.creator';
import { printGnome } from '../../redux/actions/currentGnome.creator';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18
    }
  }
});

export default function CountrySelect() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const foundGnomes = useSelector(({ gnomes }) => gnomes);
  const [gnomeSearch, setGnomeSearch] = useState('');

  function loadGnomes(filter) {
    if (filter.trim().length > 1) {
      dispatch(findGnomes(filter.trim()));
    } else {
      dispatch(clearGnomes());
    }
  }

  function handleInputChange({ target: { value } }) {
    setGnomeSearch(value);
    loadGnomes(value);
  }

  function openGnome(gnome) {
    dispatch(printGnome(gnome));
  }

  return (
    <Autocomplete
      onClick={() => dispatch(clearGnomes())}
      style={{ width: 300 }}
      options={foundGnomes}
      classes={{
        option: classes.option
      }}
      autoHighlight
      getOptionLabel={(gnome) => gnome.name}
      renderOption={(gnome) => (
        <>
          <Button
            onClick={() => openGnome(gnome)}
            style={{ width: 300 }}
          >
            {gnome.name}

          </Button>
        </>
      )}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="Search gnomes"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password'
          }}
          value={gnomeSearch}
          onChange={handleInputChange}
        />
      )}
    />
  );
}
