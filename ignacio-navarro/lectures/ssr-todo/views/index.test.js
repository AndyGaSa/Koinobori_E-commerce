describe('Given an index View', () => {
  describe('When is rendered', () => {
    test('Should have task 3 as a result', () => {
      expect(res.render(index)).toHaveBeenCalled();
    });
  });
});
