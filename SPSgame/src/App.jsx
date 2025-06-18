import { useState } from 'react'
import { Link } from 'react-router-dom'
import scissor from './assets/scissor.jpg'
import stone from './assets/stone.png'
import paper from './assets/paper.jpg'
import { computerAction, Checkaction } from './Slice/Slice.js'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

function App() {
  const dispatch = useDispatch();
  const [Uaction, setUaction] = useState();
  const Caction = useSelector((state) => state.sps);

  console.log(Caction);

  function submitMove(value) {
    dispatch(computerAction());
    dispatch(Checkaction({ value }));
    setUaction(value);
  }

  return (
    <>
      <h1 className="bg-amber-400 font-bold text-6xl p-4 mb-4 rounded-b-2xl border-b-4 border-blue-100 ">
        Stone-Paper-Scissor
      </h1>

      <div className="grid gap-6">
        {/* ================================================= Player Choices ========================================================= */}
        <div className="flex justify-evenly items-center flex-wrap gap-6">

          <div className="text-center">
            <Link to="#" onClick={() => submitMove('Stone')}>
              <img
                src={stone}
                alt="Stone"
                className="h-60 w-60 rounded-full hover:shadow-2xl hover: shadow-cyan-600 hover:border-8 hover:border-amber-300 transition-all duration-300"
              />
            </Link>
            <div className="text-green-500 text-2xl font-semibold mt-2">Stone</div>

          </div>

          <div className="text-center">
            <Link to="#" onClick={() => submitMove('Paper')}>
              <img
                src={paper}
                alt="Paper"
                className="h-60 w-60 rounded-full hover:shadow-2xl hover:shadow-amber-600 hover:border-8 hover:border-amber-300 transition-all duration-300"
              />
            </Link>
            <div className="text-green-500 text-2xl font-semibold mt-2">Paper</div>
          </div>

          <div className="text-center">
            <Link to="#" onClick={() => submitMove('Scissor')}>
              <img
                src={scissor}
                alt="Scissor"
                className="h-60 w-60 rounded-full hover:shadow-2xl hover:shadow-fuchsia-600 hover:border-8 hover:border-amber-300 transition-all duration-300"
              />
            </Link>
            <div className="text-green-500 text-2xl font-semibold mt-2">Scissor</div>
          </div>
        </div>

        {/* ===================================================== Game Message ================================================== */}
        <div className="flex justify-center">
          {/* <div className='max-w-3xl w-full bg-white text-center border-y-8 border-emerald-700 p-6 rounded-xl shadow'> */}
          <div
            className={`max-w-3xl w-full text-center border-y-8 border-emerald-700 p-6 rounded-xl shadow ${
              Caction.status === 3
                ? 'bg-yellow-500 text-amber-900'
                : Caction.status === 2
                ? 'bg-red-400 text-red-900'
                : Caction.status === 1
                ? 'bg-green-500 text-green-900'
                : 'bg-white text-black' // default fallback
            }`}
          >
            <p className="text-xl font-medium">
              {Caction.msg ? Caction.msg : 'Let\'s play the game.'}
              <br />
              Choose your move {Caction.msg ? 'again!' : ''}
            </p>
          </div>
        </div>

        {/* ================================================  Score Stats ==================================================== */}
        <div className="flex justify-evenly items-center text-center mt-6 flex-wrap gap-4">
          <div className="w-20 h-20 bg-green-100 rounded-xl flex flex-col items-center justify-center shadow">
            <span className="text-3xl font-bold text-green-600">{Caction.win}</span>
            <span className="mt-2 text-lg font-medium">Win</span>
          </div>
          <div className="w-20 h-20 bg-yellow-100 rounded-xl flex flex-col items-center justify-center shadow">
            <span className="text-3xl font-bold text-yellow-600">{Caction.tie}</span>
            <span className="mt-2 text-lg font-medium">Tie</span>
          </div>
          <div className="w-20 h-20 bg-red-100 rounded-xl flex flex-col items-center justify-center shadow">
            <span className="text-3xl font-bold text-red-600">{Caction.lose}</span>
            <span className="mt-2 text-lg font-medium">Lose</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
