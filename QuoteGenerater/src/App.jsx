import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from './Slice/Slice';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const { value, error, loading } = useSelector((state) => state.quote);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchQuote());
  }, [dispatch]);

  const onRefresh = () => {
    dispatch(fetchQuote());
  };

  return (
    <div className="flex flex-col w-full max-w-[700px] mx-auto min-h-[300px] h-auto border-2 border-amber-50 p-4 rounded-2xl bg-amber-50/10 shadow-2xl shadow-blue-400/40 mt-10">
      <h1 className="text-center font-bold text-2xl bg-amber-200 py-2 px-4 rounded-lg text-amber-700 mb-4">
        Quote Generator
      </h1>

      <div className="flex justify-end mb-4 px-4">
        <button
          onClick={onRefresh}
          className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center hover:text-blue-50 hover:bg-blue-500 hover:shadow-md hover:shadow-blue-500/50"
        >
          <i className="bi bi-arrow-clockwise text-xl font-bold"></i>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center border-2 border-blue-100/50 rounded-2xl p-4">
        {error ? (
          <p className="text-red-500 text-2xl font-bold text-center">Error: {error}</p>
        ) : loading ? (
          <p className="text-emerald-500 text-2xl font-bold text-center">Loading...</p>
        ) : value ? (
          <>
            <p className="text-emerald-500 text-2xl font-bold text-center mb-2">
              "{value.sentence}"
            </p>
            {value.character?.name && (
              <p className="text-cyan-300 font-bold text-lg text-right w-full pr-10">
                — {value.character.name}
              </p>
            )}
          </>
        ) : (
          <p className="text-emerald-500 text-2xl font-bold text-center">Fetching Quote...</p>
        )}
      </div>
    </div>
  );
}

export default App;
