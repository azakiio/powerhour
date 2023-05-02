import AccordionMotion from "../Components/AccordionMotion";

// TODO: replace text
export function AccordionExample({ enabled = true }) {
  return (
    <div className="max-w-md">
      <AccordionMotion enabled={enabled} title="I'm an Accordion">
        I love cheese, especially say cheese manchego. Croque monsieur cut the
        cheese hard cheese feta gouda paneer smelly cheese queso. Ricotta
        macaroni cheese cream cheese mascarpone st. agur blue cheese pepper jack
        chalk and cheese cheese slices. Cheeseburger mozzarella lancashire
        dolcelatte rubber cheese.
      </AccordionMotion>
      <AccordionMotion enabled={enabled} title="Meetings 🐝">
        Make it a priority we don't need to boil the ocean here, let's circle
        back tomorrow. Pre launch we need a recap by eod, cob or whatever comes
        first. You must be muted, move the needle, where do we stand on the
        latest client ask? Today shall be a cloudy day, thanks to blue sky
        thinking
      </AccordionMotion>
      <AccordionMotion enabled={enabled} title="Clients ☕">
        That's great, but can you make it work for ie 2. Are you busy this
        weekend? I know this is the final release but can we add more features.
        Thanks for taking the time to make the website, but i already made it in
        wix. Can you put "find us on facebook" by the facebook logo?
      </AccordionMotion>
    </div>
  );
}
