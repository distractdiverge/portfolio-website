import AboutHeroImage from '../assets/AllieLooktoSide.png'

function App() {
  
  return (
    <div className="bg-white pl-5 pr-5 md:pl-12 pt-8">
      <h1 className="text-3xl pb-6">Rainbow Fern Consulting</h1>
      <div className="">
        <img className="float-left mr-5 mb-5 w-[37%] lg:w-[30%] md:float-right md:ml-5 rounded-lg" src={AboutHeroImage} />
        <p className="mb-4">Hi! I’m Alex, founder of Rainbow Fern consulting.</p>
        <p className="mb-4">I have worked in the software field for the last 18 years working up the corp ladder from intern to architect.</p>
        <p className="mb-4">Now, I am focusing on taking on remote projects, mentoring and helping develop amazing test automation suites.</p>
        <p className="pb-4">Take a look below at some recent projects, or details on what I offer as services.</p>
        <p className="clear-left md:clear-right size-0">&nbsp;</p>
      </div>
    </div>
  )
}

export default App;
