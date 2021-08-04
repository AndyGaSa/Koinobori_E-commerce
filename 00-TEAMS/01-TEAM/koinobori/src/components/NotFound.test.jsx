import React from 'react';
import NotFound from './NotFound';


describe('Given a NotFound component', () => {
    describe('When there are no NotFound', () => {
      beforeEach(() => {
        // act
        render(<NotFound />);
      });
  
      test('Then create button should be in the document', () => {
        // assert
        expect(screen.getByTestId('create-button')).toBeInTheDocument();
      });
  
      test('Then update button should be in the document', () => {
        // assert
        expect(screen.getByText('update')).toBeInTheDocument();
      });
    });