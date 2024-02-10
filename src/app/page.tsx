export default function Home() {
  const buttonStyles = "outline outline-1 outline-black h-40"
  const array = Array(9).fill("")
  return (
    <main className="min-h-screen w-[30rem] mx-auto">
      <h1 className="text-6xl text-center p-12">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 border-black border-2 text-8xl">
        {array.map((e, i) => (
          <button className={buttonStyles} key={i}>
            X
          </button>
        ))}
      </div>
    </main>
  )
}
