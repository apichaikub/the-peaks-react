import TheHeader from '../components/Assemble/TheHeader'
import TopStory from '../components/Assemble/TopStory'
import Content from '../components/Assemble/Content'

export const _TheHeader = () => (
  <TheHeader/>
)

// export const _TopStory = () => (
//   <TopStory/>
// )

export const _Content = () => (
  <Content
    isSaved={true}
    createdAt="Fri 12 Jun 2020 06.40 BST"
    topic="Global report: WHO warns of accelerating Covid-19 infections in Africa"
    summary="Continent is seeing more cases spread to the provinces; Trump supporters can’t sue over catching Covid-19 at rallies; Brazil confirms 30,000 new cases"
    detail={`
      South Africa is the worst-affected country on the continent, with more than a quarter of all infections. But most countries have fewer than 1,000 infections, said Moeti, and the UN does not believe that severe cases are going undetected.

      Africa has recorded fewer than 6,000 deaths, according to an AFP tally, but just five countries account for 70% of these: South Africa, Algeria, Nigeria, Egypt and Sudan.
      
      In Africa, “the pandemic is still concentrated in and around capital cities but we are seeing more and more cases spread out into the provinces,” Moeti said.
      
      She said that in most countries on the continent, the virus entered capitals through international flights from Europe.
      
      Africa’s relatively young population compared to other continents, and in-built experience of dealing with disease outbreaks have been cited as reasons why Africa has not so far seen the death rates experienced on other continents.
      
      Moeti said early action by African countries had helped keep the numbers low - but constant vigilance was still needed.
      
      The US remains the worst-affected country worldwide, passing 2 million infections on Thursday. Spikes have been recorded in several states, including Arizona, which is confirming more than 1,000 cases daily.
      
      US president Donald Trump has introduced a policy stopping attendees at his rallies from suing the campaign or venue if they contract coronavirus at the events. A statement on the campaign website page for a rally in Tulsa says: “By clicking register below, you are acknowledging that an inherent risk of exposure to COVID-19 exists in any public place where people are present. By attending the Rally, you and any guests voluntarily assume all risks related to exposure to COVID-19 and agree not to hold Donald J. Trump for President, Inc.; BOK Center; ASM Global; or any of their affiliates … liable for any illness or injury.”
      
      Stocks fell sharply Thursday on Wall Street as coronavirus cases increased, deflating recent optimism for a quick economic recovery. The DOW Jones Industrial Average saw its worst day in weeks, closing down almost 7%. Asian shares were moderately lower on Friday as a result of the overnight rout.
      
      The US Federal Reserve warned on Wednesday that a second wave of infections risks prolonging the country’s recovery. The Fed predicted unemployment will still be at around 9% by December – close to the worst levels seen in the GFC – but Federal Reserve chair Jerome Powell said that a second outbreak could mean that figure was optimistic.
    `}
    image={{ 
      src: 'https://s3-alpha-sig.figma.com/img/9a22/d46b/12d7b042295ca0c1d66af095988e53c0?Expires=1625443200&Signature=J6T3geID7kr6nCpEIkS~4lw9~R5QTYp4or~VO~GfOub~3ThtvfbUQVzFdioRZsI-FjBDR7-vi7aRW6wCSaawK9C35CVL0nsZWQvlplyITTKK8NDGcR7UpFSfkdIrV1oLWldrpCz9bxmbH8UhHUxvr-RP4V7ghvJkXErC0E~FXzF-id8Wg1sIIiHMQRnmJ6OPzMy0sYbnHAulngK2W2iUgbO~F8doSU78Mi9EkPEdg5gVcxfggR2LCft1FTSYKwLmk9y4pa2GjNMx711APs7M6kFlpFAT9YdpCwEKCboDZFRkGlTa5zlU3ol0CBrbZjYLwAz6mrz1wLoujWrNk54BBw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      caption: 'A woman walks along a flooded road amidst a storm in the Masiphumelele informal settlement in Cape Town Photograph: Nic Bothma/EPA',
    }}
  />
)

const story = {
  title: 'Assemble'
}

export default story