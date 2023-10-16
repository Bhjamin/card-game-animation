import Hand from "./components/Hand"

const App = () => {

  const cards = ['bg-[#FFA400]', 'bg-[#1B9AAA]', 'bg-[#99C24D]', 'bg-[#A03E99]', 'bg-[#D00000]', 'bg-[#2A0C4E]', 'bg-[#00635D]']

  return (
    <div className="w-full h-screen bg-[#F5F1E3] flex justify-center items-center">
      <Hand cards={cards} />
    </div>
  )
}

export default App
