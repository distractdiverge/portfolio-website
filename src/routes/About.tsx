import AboutHeroImage from '../assets/AllieLooktoSide.png'

function App() {
  
  return (
    <div className="bg-white pl-8 pr-5 md:pl-12 pt-8">
      <div className="">
        <h1 className="text-3xl pb-8">Rainbow Fern Consulting</h1>
        <div className="">
          <img className="float-left mr-5 mb-5 w-[37%] md:w-[40%] md:float-right md:ml-8 rounded-lg" src={AboutHeroImage} />
          <p className="mb-5 text-sm">Hi! I’m Alex, founder of Rainbow Fern consulting.</p>
          <p className="mb-5 text-sm">I have worked in the software field for the last 18 years working up the corp ladder from intern to architect.</p>
          <p className="mb-5 text-sm">Now, I am focusing on taking on remote projects, mentoring and helping develop amazing test automation suites.</p>
          <p className="pb-5 text-sm">Take a look below at some recent projects, or details on what I offer as services.</p>
          <p className="clear-left md:clear-right size-0">&nbsp;</p>
        </div>
      </div>
      <div className="mt-18">
        <h2 className="text-2xl mb-5">Current Projects</h2>
        <div className="flex gap-0">
          <div className="w-1/3">
            <h3 className="font-bold mb-2">Portfolio Website</h3>
            <p className="text-xs text-gray-600 pr-5">This site itself. Building out a new professional portfolio website.</p>
          </div>

          <div className="w-1/3">
            <h3 className="font-bold mb-2">Receipt Parser</h3>
            <p className="text-xs text-gray-600 pr-5">A series of python scripts and integration with AI models to parse out receipts for budgeting.</p>
          </div>

          <div className="w-1/3">
            <h3 className="font-bold mb-2">Statement Summarizer</h3>
            <p className="text-xs text-gray-600 pr-5">A set of python scripts to extract data from bank statements and summarize.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
