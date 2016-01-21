describe ("myCount", function(){

  it('should count up to a given number and display the results', function() {
    expect(myCount(25,5)).to.equal([5, 10, 15, 20, 25]);
  });
});
