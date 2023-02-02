function Bar() {
  const bar = {
    display: 'flex',
    // background: '#24252A',
    justifyContent: 'center',
    color: '#000000',
    padding: '30px 10%',
    marginTop: '25px'
  }
  return (
    <div>
      <h3 style={bar}>Filmes em Cartaz</h3>
    </div>
  )
}

export default Bar
