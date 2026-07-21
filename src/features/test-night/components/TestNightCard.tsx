import {
  TEST_NIGHT_SUBTITLE,
  TEST_NIGHT_TITLE_LINE_GOLD,
  TEST_NIGHT_TITLE_LINE_WHITE,
} from '../constants/content'

import { TestNightForm } from './TestNightForm'

export function TestNightCard() {
  return (
    <div className="test-night-glass h-fit w-full max-w-[500px] rounded-lg px-6 pt-10 pb-8 min-[481px]:px-12 min-[481px]:pt-14 min-[481px]:pb-12">
      <h2 className="type-heading mb-4 uppercase min-[721px]:mb-10 min-[1200px]:mb-6">
        <span className="text-accent-2">{TEST_NIGHT_TITLE_LINE_GOLD}</span>
        <br />
        <span className="text-white">{TEST_NIGHT_TITLE_LINE_WHITE}</span>
      </h2>

      <p className="type-body mb-3 text-white min-[481px]:mb-4">
        {TEST_NIGHT_SUBTITLE}
      </p>

      <TestNightForm />
    </div>
  )
}
