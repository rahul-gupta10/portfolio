import React from 'react'
function Skill() {
  const skills = [
    {
      name: 'HTML + CSS',
      scale: '95%',
      img: 'html_css.png',
      hw: 'w-[50px] h-[50px]',
      abbr: 'I am proficient in using CSS frameworks such as Bootstrap and Tailwind for efficient, responsive, and aesthetically pleasing web design.'
    },
    {
      name: 'Javascript',
      scale: '80%',
      img: 'js.png',
      hw: 'w-[40px] h-[40px]'
    },
    {
      name: 'React',
      scale: '90%',
      img: 'react1.png',
      hw: 'w-[40px] h-[40px]'
    },
    {
      name: 'Nodejs',
      scale: '85%',
      img: 'node.png',
      hw: 'w-[40px] h-[40px]'
    },
    {
      name: 'MongoDB',
      scale: '90%',
      img: 'mongoDB.png',
      hw: 'w-[40px] h-[40px]'
    },
    {
      name: 'Automic UC4 L2',
      scale: '90%',
      img: 'uc4.png',
      hw: 'w-[50px] h-[30px]'
    }
  ]
  return (
    <>
      <div className="bg-black heading flex justify-center items-center py-3">
        <h1 className='text-white text-5xl underline mt-24 sm:mt-0 sm:ml-0 sm:py-3 '>Skills</h1>
      </div>
      <div className='bg-black h-screen text-white flex justify-center items-center'>
        <div className='w-4/5 sm:w-2/4 mt-[-100px] sm:mt-0 sm:ml-0'>
          {
            skills.map((ele, index) => {
              return (
                <div key={index} className=''>
                  <abbr title={ele.abbr}>
                    <img src={ele.img} alt="" className={`${ele.hw}`} />
                    <h4>{ele.name}</h4>
                    <div className="progress-bar">
                      <div className="progress-bar-inner flex items-center justify-center" style={{ '--progress-percent': ele.scale }}>{ele.scale}</div>
                    </div>
                  </abbr>
                </div>
              )
            })
          }
        </div>

      </div>
    </>
  )
}

export default Skill
