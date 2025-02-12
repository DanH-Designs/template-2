'use client'

import PitchCard from '@/app/components/PitchCard'
import Header from '@/app/components/Header'

const getPitchSizeClass = (size: string) => {
  switch (size) {
    case '11v11':
      return 'h-[476px]'
    case '9v9':
      return 'h-[300px]'
    case '7v7':
      return 'h-[230px]'
    case '5v5':
      return 'h-[160px]'
    default:
      return 'h-[160px]'
  }
}

export default function PitchesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-7 gap-4">
            {/* Left column - Pitch 8 */}
            <div className="col-span-1 flex flex-col justify-end h-[476px]">
              <div className={getPitchSizeClass('5v5')}>
                <PitchCard name="Pitch 8" size="5v5" className="h-full" />
              </div>
            </div>
            
            {/* Center columns - Pitches 1-3 */}
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <div className={getPitchSizeClass('11v11')}>
                <PitchCard name="Pitch 1" size="11v11" className="h-full" />
              </div>
              <div className={getPitchSizeClass('11v11')}>
                <PitchCard name="Pitch 2" size="11v11" className="h-full" />
              </div>
              <div className={getPitchSizeClass('11v11')}>
                <PitchCard name="Pitch 3" size="11v11" className="h-full" />
              </div>
            </div>
            
            {/* Right columns - Pitches 4-7 and Cage */}
            <div className="col-span-3 grid grid-cols-3 gap-4">
              <div className="space-y-4">
                <div className={getPitchSizeClass('5v5')}>
                  <PitchCard name="Pitch 9" size="5v5" className="h-full" />
                </div>
                <div className={getPitchSizeClass('9v9')}>
                  <PitchCard name="Pitch 4" size="9v9" className="h-full" />
                </div>
              </div>
              <div className="space-y-4">
                <div className={getPitchSizeClass('7v7')}>
                  <PitchCard name="Pitch 5" size="7v7" className="h-full" />
                </div>
                <div className={getPitchSizeClass('7v7')}>
                  <PitchCard name="Pitch 6" size="7v7" className="h-full" />
                </div>
              </div>
              <div className="space-y-4">
                <div className={getPitchSizeClass('7v7')}>
                  <PitchCard name="Cage" size="7v7" className="h-full" />
                </div>
                <div className={getPitchSizeClass('5v5')}>
                  <PitchCard name="Pitch 7" size="5v5" className="h-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 