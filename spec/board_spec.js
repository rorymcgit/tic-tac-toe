describe('Board', function() {
  var board = new Board();

  it("exists", function() {
     expect(board).toBeDefined();
  });

  it("has an array containing all 9 possible squares", function() {
    expect(board.squares).toEqual(["L1", "M1", "R1",
                                   "L2", "M2", "R2",
                                   "L3", "M3", "R3"]);
  });
});
