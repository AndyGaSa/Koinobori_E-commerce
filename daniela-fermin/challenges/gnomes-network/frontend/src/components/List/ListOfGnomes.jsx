/* eslint-disable no-underscore-dangle */
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { loadGnomes } from '../../redux/actions/actions.creator';

const useStyles = makeStyles({
  root: {
    minWidth: 275
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function ListOfGnomes() {
  const gnomes = useSelector((store) => store.gnomes);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [filteredGnomes, setFilterGnomes] = useState();
  useEffect(() => {
    if (!gnomes.length) dispatch(loadGnomes());
  }, []);

  useEffect(() => {
    setFilterGnomes(gnomes || []);
  }, [gnomes]);

  function filterGnomes(searchTerm) {
    if (!searchTerm) setFilterGnomes(gnomes);
    else {
      const newGnomes = gnomes.filter(({ name, age }) => {
        const searchValues = [name, age];
        return searchValues.toString().toLowerCase().includes(searchTerm.toLowerCase());
      });
      setFilterGnomes(newGnomes);
    }
  }

  return (
    <main>
      <input
        type="search"
        placeholder="  Search for a gnome by name or age!"
        data-testid="search-input"
        onChange={(event) => filterGnomes(event.target.value)}
        className=""
      />
      <div>
        <ul>
          {
                  filteredGnomes && filteredGnomes.map((gnome) => (
                    <li key={gnome._id}>
                      <Link to={`/details/${gnome._id}`}>
                        <Card className={classes.root}>
                          <CardContent>

                            <Typography variant="h5" component="h2">
                              {gnome.name}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small">Friends</Button>
                            <Button size="small">Adversaries</Button>
                          </CardActions>
                        </Card>
                      </Link>
                    </li>
                  ))
              }
        </ul>
      </div>
    </main>
  );
}
