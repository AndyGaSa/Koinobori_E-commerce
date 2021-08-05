import React from 'react';
import { render, screen } from '../../../utils/test.utils';
import Details from './Details';
import loadDetails from '../../../redux/actions/details.creator';
import actionTypes from '../../../redux/actions/actionTypes';

jest.mock('../../../redux/actions/details.creator');

describe('Given a Lyrics component', () => {
  describe('When rendered with certain parameters', () => {
    beforeEach(() => {
      loadDetails.mockReturnValue(({
        type: actionTypes.LOAD_DETAILS,
        details: {
          lyrics_id: 7260188,
          restricted: 0,
          instrumental: 0,
          lyrics_body: 'Now and then I think of when we were together',
          lyrics_language: 'en',
          script_tracking_url: 'http:tracking.musixmatch.com/t1.0/m42By/J7rv9z',
          pixel_tracking_url: 'http:tracking.musixmatch.com/t1.0/m42By/J7rv9z6q9he7AA',
          lyrics_copyright: 'Lyrics powered by www.musiXmatch.com',
          backlink_url: 'https://www.musixmatch.com/lyrics/Gotye-feat-Kimbra/Somebody-That-I-Used-to-Know',
          updated_time: '2012-04-26T02:09:39Z'

        }
      }));
      render(
        <Details />
      );
    });
    test('Then the Now and then I think of when we were together should be on the screen', () => {
      expect(screen.getByText('Now and then I think of when we were together')).toBeInTheDocument();
    });
  });
});
