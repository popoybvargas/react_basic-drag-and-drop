import Board from './components/Board';
import Card from './components/Card';

function App()
{
  return (
    <div>
      <main className="flexbox">
        <Board id="board1" className="board">
          <Card id="card1" className="card" draggable><p>Card One</p></Card>
          <Card id="card2" className="card" draggable><p>Card Two</p></Card>
          <Card id="card3" className="card" draggable><p>Card Three</p></Card>
        </Board>
        <Board id="board2" className="board">
          <Card id="card4" className="card" draggable><p>Card Four</p></Card>
          <Card id="card5" className="card" draggable><p>Card Five</p></Card>
        </Board>
      </main>
    </div>
  )
}

export default App;