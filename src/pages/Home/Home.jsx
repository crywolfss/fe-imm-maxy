import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { BellIcon } from '@heroicons/react/24/solid'
import { LinearProgress } from '@mui/joy'
import { Gauge } from '@mui/x-charts'
import { Card } from 'flowbite-react'
import React from 'react'




export const Home = () => {
  return (
    <div className='mx-auto max-w-7xl items-center p-6 lg:px-8'>
      {/*Dashboard  */}
      <div>
        <h3 className='font-bold pt-10 text-xl'>Dashboard</h3>

        <div className="">
          <div className="relative">
            <Card className="bg-imm-main rounded-br-[200px] rounded-l-2xl rounded-tr-2xl">
              <div className="flex flex-row gap-12 p-6 max-w-2xl">
                <img
                  alt="Bonnie image"
                  src="src/assets/persons/person-1.jpg"
                  className="mb-3 h-28 w-28 object-cover rounded-full ms-10"
                />
                <div className="flex flex-col text-white justify-between lg:w-3/5">
                  <div className='w-full'>
                    <h3 className="font-bold text-lg">Zaky Kurniawan</h3>
                    <p className="font-semibold text-sm">Sociopreneur Bootcamp</p>
                  </div>

                  <div className='w-full'>
                    <span className="font-semibold text-sm">25% Completed</span>
                    <LinearProgress
                      color="primary"
                      determinate
                      size="lg"
                      value={25}
                    />
                  </div>
                </div>
              </div>
            </Card>
            <img
              src="src/assets/backgrounds/bg-chart.png"
              className="absolute top-0 right-0 h-full w-2/5 rounded-br-[200px] rounded-tr-md"
              alt=""
            />
          </div>
        </div>


        <div className='grid grid-cols-3 gap-4 pt-8'>
          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Progress Peserta
            </h5>
            <Gauge width={100} height={100} value={75} innerRadius="82%" outerRadius="100%" />
          </Card>

          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Progress IMM
            </h5>
            <Gauge width={100} height={100} value={75} innerRadius="82%" outerRadius="100%" />
          </Card>

          <Card>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Jumlah Peserta
            </h5>
            <Gauge width={100} height={100} value={75} innerRadius="82%" outerRadius="100%" />
          </Card>
        </div>
      </div>

      <div>
        <h3 className='font-bold pt-10 text-xl'>Tim Mentor</h3>

        <div className='grid grid-cols-4 gap-4 pt-8'>
          <Card className='max-w-sm bg-cover bg-center' style={{ backgroundImage: `url('src/assets/backgrounds/bg-card-texture.svg')` }}>
            <div className="flex flex-col items-center pb-10 gap-3">
              <img
                alt="Bonnie image"
                src="src/assets/persons/person-1.jpg"
                className="mb-3 h-28 w-28 object-cover rounded-full"
              />
              <h5 className='font-bold'>Jason Price</h5>
              <p className='text-sm text-gray-400'>Mentor UI/UX</p>
              <p className='text-xs'>janick_parisian@yahoo.com</p>
            </div>
          </Card>

          <Card className='max-w-sm bg-cover bg-center' style={{ backgroundImage: `url('src/assets/backgrounds/bg-card-texture.svg')` }}>
            <div className="flex flex-col items-center pb-10 gap-3">
              <img
                alt="Bonnie image"
                src="src/assets/persons/person-1.jpg"
                className="mb-3 h-28 w-28 object-cover rounded-full"
              />
              <h5 className='font-bold'>Jason Price</h5>
              <p className='text-sm text-gray-400'>Mentor UI/UX</p>
              <p className='text-xs'>janick_parisian@yahoo.com</p>
            </div>
          </Card>

          <Card className='max-w-sm bg-cover bg-center' style={{ backgroundImage: `url('src/assets/backgrounds/bg-card-texture.svg')` }}>
            <div className="flex flex-col items-center pb-10 gap-3">
              <img
                alt="Bonnie image"
                src="src/assets/persons/person-1.jpg"
                className="mb-3 h-28 w-28 object-cover rounded-full"
              />
              <h5 className='font-bold'>Jason Price</h5>
              <p className='text-sm text-gray-400'>Mentor UI/UX</p>
              <p className='text-xs'>janick_parisian@yahoo.com</p>
            </div>
          </Card>

          <Card className='max-w-sm bg-cover bg-center' style={{ backgroundImage: `url('src/assets/backgrounds/bg-card-texture.svg')` }}>
            <div className="flex flex-col items-center pb-10 gap-3">
              <img
                alt="Bonnie image"
                src="src/assets/persons/person-1.jpg"
                className="mb-3 h-28 w-28 object-cover rounded-full"
              />
              <h5 className='font-bold'>Jason Price</h5>
              <p className='text-sm text-gray-400'>Mentor UI/UX</p>
              <p className='text-xs'>janick_parisian@yahoo.com</p>
            </div>
          </Card>
        </div>

        <div className='bg-imm-purple-main mt-10 rounded-lg'>
          <h3 className='text-center font-bold text-white text-xl'>Recent Class</h3>

          <div className="p-6">
            <div className="flex flex-row gap-12">

              <Card className="max-w-sm">
                <div className="flex flex-col items-start">
                  <img
                    alt="Bonnie image"
                    src="src/assets/persons/person-1.jpg"
                    className="object-cover rounded-lg w-full h-36"
                  />
                  <h5 className="font-bold">Jason Price</h5>
                  <p className="text-sm text-gray-400">Konsep sociopreneurship dan SDGs</p>

                  <div className='flex flex-col pt-14'>
                    <div>
                      <span className='text-xs text-green-300'>100 students</span>
                    </div>
                    <span className='font-bold text-indigo-800 text-base'>Get access class</span>
                  </div>
                </div>
              </Card>

              {/* line divider */}
              <div className="flex justify-center items-center">
                <div className="border-l border-imm-purple-secondary h-1/2 mx-5"></div>
              </div>

              <Card className="max-w-sm">
                <div className="flex flex-col items-start">
                  <img
                    alt="Bonnie image"
                    src="src/assets/persons/person-1.jpg"
                    className="object-cover rounded-lg w-full h-36"
                  />
                  <h5 className="font-bold">Jason Price</h5>
                  <p className="text-sm text-gray-400">How to create succesful influencer marketing campaigns</p>
                </div>
              </Card>

              {/* line divider */}
              <div className="flex justify-center items-center">
                <div className="border-l border-imm-purple-secondary h-1/2 mx-5"></div>
              </div>

              <Card className="max-w-sm">
                <div className="flex flex-col items-start">
                  <img
                    alt="Bonnie image"
                    src="src/assets/persons/person-1.jpg"
                    className="object-cover rounded-lg w-full h-36"
                  />
                  <h5 className="font-bold">Jason Price</h5>
                  <p className="text-sm text-gray-400">How to create succesful influencer marketing campaigns</p>
                </div>
              </Card>

            </div>
          </div>


        </div>

      </div>
    </div>
  )
}
