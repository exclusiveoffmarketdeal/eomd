import BasicContainer from '@/components/Hardware/Containers/BasicContainer'
import Link from 'next/link'
import Image from 'next/image'

const SectionTwo = () => {
  return (
    <>
      <section className='mt-20'>
        <BasicContainer>
          <h2 className='text-vb_teal-500 text-5xl font-black mb-4'>Exclusive Off Market DealsImpact</h2>
          <h3 className='text-vb_teal-500 text-3xl font-medium mb-10'>
            Greater Cincinnati Impact Study Executive Summary December 2022
          </h3>
          <h6 className='text-xl font-bold mb-4'>
            HR&A Advisors conducted analysis on VineBrook’s impact in Hamilton County in four areas:
          </h6>
          <p className='mb-4'>
            (1) affordable rents, (2) access to homeownership, (3) housing quality, and (4) investment in the community.
            Below are key findings from the study.
          </p>
          <h4 className='text-vb_blue-600 text-2xl font-bold mb-8'>
            View the Full HR&A Study {''}
            <Link
              href={'/documents/VineBrook-Economic-Impact-Study-Greater-Cincinnati.pdf'}
              target='_blank'
              className=' text-vb_green-400 hover:text-vb_green-500 underline transition-all duration-150 ease-in-out'
            >
              HERE
            </Link>
            .
          </h4>
          <h6 className='text-xl font-bold mb-4'>
            While housing affordability is a growing issue in Hamilton County, VineBrook is not driving the growing
            affordability challenges in the county.
          </h6>
          <p className='mb-12'>
            Larger housing market dynamics and state and local policies have contributed to – and continue to contribute
            to –declining homeownership rates and rising rents in Hamilton County. Since 2008, the homeownership rate
            has fallen overall by 5% and by 10% among low- and moderate-income households. The share of severely
            rent-burdened households, those paying more than 50% of their income in housing costs, has increased 15.8%.
            Since 2010, new household formation has outpaced housing starts leading to low inventory and rising prices
            for homebuyers and renters alike in Hamilton County. In the last decade, Hamilton County lost nearly 6,000
            homes to demolition and abandonment and only added 70 new housing units for every 100 new households formed;
            it needed to be adding around 120 homes to keep pace with growth based on the standard established by the
            Joint Center for Housing Studies at Harvard University.
          </p>
          <h6 className='text-xl font-bold mb-4'>The underproduction of homes has pushed up prices and rents.</h6>
          <p className='mb-12'>
            From 2019-21, the median single-family home price in Cincinnati increased 25% by $44,000, from $172,000 to
            $216,000. This trend was exacerbated during the pandemic – from 2020-22, the median single-family home price
            in Cincinnati increased nearly 50% from $183,000 to $272,000. Over the same period, the median rent in
            Cincinnati increased 20%, from $1,214 to $1,455. Higher home prices have led to a drastic increase in the
            income required to buy a median priced home, raising the barrier to homeownership. In 2022, the income
            required to buy a median priced home is $57,000 higher than the median renter household income.
          </p>
          <h6 className='text-xl font-bold mb-4'>
            VineBrook’s homes are more affordable than the average single-family rental home in the county and the rents
            have risen at a slower rate.
          </h6>
          <p className='mb-4'>
            Over the last seven years, VineBrook rents and rent increases have been below-market and have therefore
            consistently been more affordable than MSA (Metropolitan Statistical Area) rents. Specifically:
          </p>
          <div className='flex flex-col md:flex-row justify-center items-start mb-14'>
            <ul className='w-full md:w-1/2 list-disc px-10'>
              <li className='mb-2'>
                Cincinnati MSA single-family median rents are $330 higher per month than VineBrook median rents
              </li>
              <li className='mb-2'>
                Since the start of COVID-19, the average Cincinnati MSA single-family rent increased by $283, whereas
                VineBrook rent increased by only $165
              </li>
              <li className='mb-2'>
                From 2021 to 2022 year-to-date, VineBrook rents have increased 6.6% compared to a 17.3% increase across
                the Cincinnati MSA.
              </li>
              <li className='mb-2'>
                The average VineBrook household earns $68,000 (80% of the area’s median income), spends 26% of their
                income on housing costs, and is not rent burdened.
              </li>
              <li className='mb-2'>
                VineBrook provides financial assistance to help residents weather short term hardships. During the
                pandemic VineBrook established the Hardship Program to help families find alternatives to eviction. 796
                families have received assistance to weather hardships, $3.57 million in rental assistance has been
                sourced and currently 184 families are receiving assistance.
              </li>
              <li className='mb-2'>
                VineBrook provides free access to financial literacy training through partnership with Operation Hope
                and has assisted over 800 families in the past year.
              </li>
            </ul>
            <span className='flex flex-col sm:flex-row md:flex-col justify-center items-center w-full md:w-1/2 pl-0'>
              <Image
                src={'/img/pages/Cincinnati/Impact/Impact-MSA.png'}
                alt={''}
                width={0}
                height={0}
                sizes={100}
                className='w-full sm:w-1/2 md:w-full xl:w-11/12 2xl:w-5/6 4xl:w-2/3 h-full md:my-20 lg:my-0'
              />
              <Image
                src={'/img/pages/Cincinnati/Impact/Impact-Graph.png'}
                alt={''}
                width={0}
                height={0}
                sizes={100}
                className='w-full sm:w-1/2 md:w-full xl:w-11/12 2xl:w-5/6 4xl:w-2/3 h-full'
              />
            </span>
          </div>
          <h6 className='text-xl font-bold mb-4'>
            High mortgage denial rates in Hamilton County driven by outdated housing stock and racial inequity are a
            significant structural barrier to homeownership.
          </h6>
          <p className='mb-12'>
            The age and low property values, which indicate homes have been reinvested in as they aged, render homes
            more likely to be denied a mortgage. Higher denial rates for Black households, even when controlling for
            income, reduce the number of homeowners in the county and depress property values. In fact, white applicants
            were an average of 6% more likely to be denied due to collateral and income insufficiencies and debt
            burdens, while Black applicants were 15% more likely to be denied due to insufficient credit scores, a less
            predictive measure of a household’s ability-to-pay their mortgage (Forbes).
          </p>
          <h6 className='text-xl font-bold mb-4'>
            VineBrook is not pushing down homeownership rates in Hamilton County.
          </h6>
          <p className='mb-6'>
            Over the last five years, VineBrook’s purchases and portfolio have consistently constituted a small
            percentage of total housing transactions and stock in the County, insufficient to shift the homeownership
            rate.
          </p>
          <p className='mb-4'>Specifically:</p>
          <ul className='list-disc mb-4 pl-10'>
            <li>From 2016-22, VineBrook’s acquisitions made up 1.7% of all single-family transactions.</li>
            <li>VineBrook’s portfolio represents less than 1% of the total housing stock in Hamilton County.</li>
            <li>
              87% of VineBrook’s purchases from 2018-2021 were renter occupied at the time of purchase. These purchases
              represent a change in ownership, but not a decrease in the housing stock available to owner-occupants.
            </li>
          </ul>
          <p className='mb-12'>
            Homeownership rates have declined in the County since 2010, in line with trends seen in Ohio and the US
            overall, because of larger market forces. Counter to these trends, between 2014 and 2019, VineBrook tracts
            saw a 0.7% increase in homeownership compared to a 1.1% decrease in Hamilton County overall.
          </p>
        </BasicContainer>
      </section>
    </>
  )
}

export default SectionTwo
