import MemberProfile from "../components/MemberProfile"

const About = () => {
  return (
    <div className="m-10">
        <h1 className="font-playfair font-semibold text-4xl pb-6 border-b-2">About FlavourFusion</h1>
      <h4 className="font-playfair font-bold text-6xl my-4">We`re a group of foodies who love cooking and the internet</h4>
      <img src="images/about1.jpg" alt="About Main" />
      <p className="font-inter text-2xl leading-relaxed my-6">Food qualities braise chicken cuts bowl through slices butternut snack. Tender meat juicy dinners. One-pot low heat plenty of time adobo fat raw soften fruit. sweet renders bone-in marrow richness kitchen, fricassee basted pork shoulder. Delicious butternut squash hunk.</p>
      <div className="flex items-center my-12">
        <div className="pr-24">
          <h2 className="font-playfair font-bold text-6xl">Simple, Easy Recipes for all</h2>
          <p className="font-inter font-normal text-2xl leading-relaxed my-6">Juicy meatballs brisket slammin` baked shoulder. Juicy smoker soy sauce burgers brisket. polenta mustard hunk greens. Wine technique snack skewers chuck excess. Oil heat slowly. slices natural delicious, set aside magic tbsp skillet, bay leaves brown centerpiece.</p>
        </div>
        <img src="images/about2.jpg" alt="" className="w-[32rem] h-[26rem] my-4" />
      </div>

      <div className="my-12">
        <h2 className="font-playfair font-bold text-6xl leading-tight">An incredible team of talented chefs and foodies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <MemberProfile img={'images/member1.png'} name={'Diwakar Giri'} designation={'Chef Extraordinaire'} />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default About